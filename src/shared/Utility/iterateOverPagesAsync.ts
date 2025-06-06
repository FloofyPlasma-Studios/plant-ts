/*
	Iterates over a Pages object for paginated web requests
	Based on code sample from: https://create.roblox.com/docs/reference/engine/classes/Pages
*/

export function iterateOverPagesAsync(pages: Pages) {
	return coroutine.wrap(() => {
		let pageNumber = 1;
		let loop = true;
		while (loop) {
			for (const item of pages.GetCurrentPage()) {
				coroutine.yield(item, pageNumber);
			}

			if (pages.IsFinished) {
				loop = false;
			}

			pages.AdvanceToNextPageAsync();

			pageNumber++;
		}
	});
}
