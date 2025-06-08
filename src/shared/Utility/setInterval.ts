/**
 * Calls a given callback on some specified interval until the
 * clear function is called.
 *
 * The callback is given deltaTime since it was last called, along
 * with any extra parameters passed to setInterval.
 *
 * The first callback call is made after intervalSeconds passes,
 * i.e. it is not immediate.
 */
export function setInterval(
	callback: (number: number, ...args: defined[]) => void,
	intervalSeconds: number,
	...args: defined[]
) {
	let cleared = false;

	function call(scheduledTime: number, ...args: defined[]) {
		if (cleared) {
			return;
		}

		const deltaTime = os.clock() - scheduledTime;

		task.spawn(callback, deltaTime, args);
		task.delay(intervalSeconds, call, os.clock(), args);
	}

	task.delay(intervalSeconds, call, os.clock(), args);

	return () => {
		cleared = true;
	};
}
