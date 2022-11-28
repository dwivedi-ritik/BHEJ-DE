const app = require('express')()
const server = require('http').createServer(app);

const { generateUUID } = require("./utils")
const { Server } = require("socket.io");
const io = new Server(server);

const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});

let clients = []

io.on('connection', (socket) => {

    socket.on('create room', (roomId) => {
        socket.join(roomId)
    })

    socket.on('join peer', (roomId, peerId) => {
        socket.join(roomId)
        io.in(roomId).emit("joined peer", peerId)
    })

    socket.on('disconnect', (socket) => {
        console.log('user disconnected');
    });

});

server.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});


