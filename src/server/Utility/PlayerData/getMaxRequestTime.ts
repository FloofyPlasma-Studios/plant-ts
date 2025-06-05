const dataStoreRequestTime = 3;

/**
 * Returns an estimate of the amount of time a data store request could take to complete given the
 * number of attempts, retryConstant, retryExponent and a reasonable worst case estimate for how long
 * the DataStoreService call might take to complete.
 *
 * See DataStoreWrapper and retryAsync for actual retrying implementations.
 */
export function getMaxRequestTime(numAttempts: number, retryConstant: number, retryExponent: number) {
	let requestTime = 0;

	for (let attemptNumber = 1; attemptNumber < numAttempts; attemptNumber++) {
		requestTime += dataStoreRequestTime;

		if (attemptNumber > 1) {
			requestTime += retryConstant + (retryExponent ^ attemptNumber);
		}
	}

	return requestTime;
}
