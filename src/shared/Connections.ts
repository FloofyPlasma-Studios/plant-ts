import Signal from "@rbxutil/signal";

type EitherConnection = RBXScriptConnection & Signal.Connection;

/**
 * Takes a table of connections and then disconnects them when prompted.
 *
 * A more lightweight version of the common Maid pattern in Roblox:
 *
 * https://github.com/Quenty/NevermoreEngine/blob/version2/Modules/Shared/Events/Maid.lua
 */
export class Connections {
	private _connections: Array<EitherConnection>;

	constructor() {
		this._connections = [];
	}

	public add(...args: EitherConnection[]) {
		args.forEach((connection) => {
			assert(!this._connections.includes(connection), "This connection has already been added");
			this._connections.push(connection);
		});
	}

	public remove(connection: EitherConnection) {
		const index = this._connections.indexOf(connection);
		if (index > -1) {
			this._connections.remove(index);
		}
	}

	public disconnect() {
		this._connections.forEach((connection) => {
			connection.Disconnect();
		});

		this._connections = [];
	}
}
