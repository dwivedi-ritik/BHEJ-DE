const app = require('express')()
const server = require('http').createServer(app);
const requestIp = require('request-ip')
const { DefaultDict } = require('./types')
const { generateUUID } = require("./utils")
const { Server } = require("socket.io");
const io = new Server(server);

const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});

// Support for only ipv4 clients
// some clients with ipv6 doesn't have same ip
const rooms = new DefaultDict(Array)
const ipsRegister = new Map()


io.on('connection', (socket) => {
    const ip = requestIp.getClientIp(socket.request)
    console.log(`from ${ip} got connected`)
    if (!ipsRegister.get(ip)) {
        let uuid = generateUUID()
        ipsRegister.set(ip, uuid)
    }

    let roomUUID = ipsRegister.get(ip)

    socket.join(roomUUID)

    io.in(roomUUID)
        .emit('update', `new user joined as ${ip}`)

    socket.on('disconnect', () => { //When client disconnect remove from the rooms and remove their socket from the rooms array
        console.log('user disconnected');
    });

});


server.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});


