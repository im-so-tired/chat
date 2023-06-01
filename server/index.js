import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors"
const app = express();
const httpServer = createServer(app);

app.use(cors())
app.use(express.json())

const io = new Server(httpServer, {cors: {
		origin: "http://localhost:5173"
}});

io.on('connection', (socket) => {
	console.log('a user connected');
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
	socket.on('chat message', (msg) => {
		console.log('message: ' + msg);
		io.emit("chat message", {value: msg, id: Date.now()})
	});
});

httpServer.listen(9000, () => console.log("Server started"));
