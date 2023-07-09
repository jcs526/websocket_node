const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:8080',
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type'],
        credentials: true
    }
});


app.get('/', function (req, res) {
    res.send("DD");
});

io.on("connection", (socket) => {
    socket.on("message", (arg) => {
       console.log("received message => ",arg);
    });

    let num = Math.random();
    console.log(num);
    socket.emit("test", num);
});

server.listen(3000, () => {
    console.log("Socket IO server listening on port 3000");
});
