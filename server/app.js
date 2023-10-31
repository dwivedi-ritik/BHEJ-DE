const app = require('express')()
const server = require('http').createServer(app);
const cors = require('cors')

const { generateUUID } = require("./utils")
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "*"
    }
});


const PORT = process.env.PORT || 8000

app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});

let clients = []
io.on('connection', (socket) => {

    socket.on('create room', (roomId) => {
        console.log(roomId + " created")
        socket.join(roomId)
    })

    socket.on('join room', (roomId, peerId) => {
        socket.join(roomId)
        io.in(roomId).emit("user join room", roomId, peerId)
        console.log(`${peerId} has joined ${roomId}`)
    })

    socket.on('share message in room', (roomId, clientName, msg) => {
        socket.broadcast.to(roomId).emit('group message', msg, clientName)
        // io.to(roomId).emit('group message', msg) 


    })
    socket.on('disconnect', (socket) => {
        console.log('user disconnected');
    });


});

server.listen(PORT, () => {
    console.log(`listening on *:${PORT} `);
});


