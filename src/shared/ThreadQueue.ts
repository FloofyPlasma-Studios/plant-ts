type Callback = (...args: defined[]) => LuaTuple<[defined[]]>;
type QueueEntry = { thread: thread; callback: Callback };

/**
 * ThreadQueue is a task scheduler and rate limiter that allows callbacks to be queued to be executed, yielding the requesting thread
 * until the callback has returned.
 *
 * Provides similar functionality to the NodeJS module Bottleneck (https://www.npmjs.com/package/bottleneck) however, it exposes
 * its scheduling functionality through coroutines rather than promises.
 */
export class ThreadQueue {
	private _queue: Array<QueueEntry>;
	private _queueRunning: boolean;
	private _timeBetween: number;
	private _maxQueueLength: number;
	private _enableConcurrency: boolean;

	constructor(timeBetween: number = 0, maxQueueLength: number = math.huge, enableConcurrency: boolean = false) {
		this._queue = [];
		this._queueRunning = false;
		this._timeBetween = timeBetween;
		this._maxQueueLength = maxQueueLength;
		this._enableConcurrency = enableConcurrency;
	}

	public submitAsync(callback: Callback) {
		if (this._queue.size() > this._maxQueueLength) {
			return $tuple(false, string.format("Queue is at capacity (%i)", this._maxQueueLength));
		}

		const queueEntry: QueueEntry = {
			thread: coroutine.running(),
			callback: callback,
		};

		this._queue.push(queueEntry);

		this._startQueue();

		return coroutine.yield();
	}

	public getLength(): Number {
		return this._queue.size();
	}

	// This method will not skip currently executing requests, but will remove
	// all pending requests from the queue aside from the most recently enqueued
	public skipToLastEnqueud() {
		if (this._queue.size() > 1) {
			const lastEnqueudEntry = this._queue.pop() as QueueEntry;
			this._queue = [lastEnqueudEntry];
		}
	}

	private _startQueue() {
		// Wait for the next resumption cycle, so the requesting thread has time to yield first
		task.defer(() => {
			if (this._queueRunning) {
				return;
			}
			this._queueRunning = true;

			while (!this._queue.isEmpty()) {
				this._popQueueAsync();

				if (this._timeBetween > 0) {
					task.wait(this._timeBetween);
				}
			}
		});
	}

	private _popQueueAsync() {
		const entry = this._queue.shift();

		function execute() {
			// This callback can yield. Note the callback is called synchronously on this thread.
			// The task.spawn is used to resume the calling thread with the pcall'd results of the callback.
			task.spawn((entry as QueueEntry).thread, pcall((entry as QueueEntry).callback));
		}

		// If concurrency is enabled, we do not want to yield the queue while we wait for the callback to return
		if (this._enableConcurrency) {
			// Use spawn to call execute so entry.callback doesn't block us from proceeding
			task.spawn(execute);
		} else {
			execute();
		}
	}
}
