import { connect, connection } from "mongoose";
import dotenv from "dotenv";

const isconnect = {
	isnconnected: false,
};

export async function connectDB() {
	if (isconnect.isnconnected) return;

	const db = await connect(process.env.ATLAS_URI);
	console.log(db.connection.db.databaseName);
	isconnect.isnconnected = db.connections[0].readyState;
}

connection.on("connected", () => {
	console.log("Mongoose is connected");
});

connection.on("error", (err) => {
	console.log("mongoose connection error", err);
});
