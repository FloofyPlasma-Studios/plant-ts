/*
	Formats a number of seconds into a pretty string of Hours, Minutes, and Seconds.
	If all hours are 0, they are omitted.
	If all hours and all minutes are 0, they are both omitted.
	Leading 0's from hours are removed.
	If hours are omitted, leading 0's from minutes are removed.
	If hours and minutes are omitted, leading 0's from seconds are removed.

	Examples:

	const HOUR_1 = 60 * 60;
	const HOUR_23 = 23 * HOUR_1;
	const MINUTE_1 = 60;
	const MINUTE_59 = 59 * MINUTE_1;

	formatTime(HOUR_1 + 0 + 0); // 1:00:00
	formatTime(HOUR_23 + MINUTE_59 + 59); // 23:59:59
	formatTime(0 + MINUTE_59 + 59); // 59:59
	formatTime(0 + MINUTE_1 + 0); // 1:00
	formatTime(0 + 0 + 59); // 59
	formatTime(0 + 0 + 1); // 1
	formatTime(0 + 0 + 0); // 0
*/

const MAX_SUPPORTED_SECONDS = 86400;

export function formatTime(seconds: number) {
	const clampedSeconds = math.clamp(seconds, 0, MAX_SUPPORTED_SECONDS);

	if (clampedSeconds !== seconds) {
		warn(
			`Seconds (${seconds}) is outside supported range [0, ${MAX_SUPPORTED_SECONDS}]. Using (${clampedSeconds}) instead.`,
		);
	}

	const dateTime = DateTime.fromUnixTimestamp(clampedSeconds);
	const universalTime = dateTime.ToUniversalTime();

	let formattedTime;
	if (universalTime.Hour > 0) {
		formattedTime = dateTime.FormatUniversalTime("H:mm:ss", "zh-cn");
	} else if (universalTime.Minute > 0) {
		formattedTime = dateTime.FormatUniversalTime("m:ss", "zh-cn");
	} else {
		formattedTime = dateTime.FormatUniversalTime("s", "zh-cn");
	}

	return formattedTime;
}
