/**
 * Takes an arbitrary number of callback, and executes them in parallel, returning the results of the first to return.
 * If an error is thrown, that error is bubbled up to the main thread.
 * When the first callback returns, the rest are cancelled using task.cancel.
 *
 * Exposes similar functionality that Promise.race provides for promises, but for asynchronous lua callbacks
 */
export function waitForFirstAsync(...callbacks: Callback[]) {
	const thisThread = coroutine.running();
	let resumed = false;
	let errorThrown: defined | undefined;

	function resume(...args: defined[]) {
		if (resumed) {
			return;
		}
		resumed = true;

		task.spawn(thisThread, args);
	}

	callbacks.forEach((callback) => {
		task.defer(() => {
			// We are capturing all values returned by pcall into a table so we can resume this thread
			// with all values if multiple are returned
			const pcallReturnValues: LuaTuple<[true, ...defined[]] | [false, ...undefined[]]> = pcall(callback);
			if (pcallReturnValues[0] === false) {
				errorThrown = pcallReturnValues[1] as defined;
			}

			resume(...(pcallReturnValues[1] as defined[]));
		});
	});

	const returnValues = [coroutine.yield()];

	if (errorThrown !== undefined) {
		// Return the stack trace three callers up to where the function passed into wait for first async was
		// declared
		error(errorThrown, 3);
	}

	return $tuple(...returnValues);
}
