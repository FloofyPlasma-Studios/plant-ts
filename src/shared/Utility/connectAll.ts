import Signal from "@rbxutil/signal";

/**
 * 	Calls the provided handler when any of the provided signals are fired.
	Returns an array of the connections made.

	Example usage:
		local handler = print

		local connections = connectAll(
			{signalA, signalB},
			handler
		)

		eventA:Fire("1 Hello,", "world!")
		eventB:Fire("2 foo", "bar")

		for _, connection in ipairs(connections) do
			connection:Disconnect()
		end

	Output:
		1 Hello, world!
		2 foo bar
 */
export function connectAll(signals: [RBXScriptSignal | Signal<Callback>], handler: Callback) {
	const connections: Array<RBXScriptConnection | Signal.Connection> = [];

	signals.forEach((signal) => {
		connections.push((signal as RBXScriptSignal).Connect(handler));
	});

	return connections;
}
