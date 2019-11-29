const server = require('http').createServer(),
   io = require('socket.io')(server),
    fortunTeller = require('./controller/teller')

io.on('connection', (http) => {
    console.log('connected to Socket at port 4000')

    let fortune = fortunTeller.teller().trim();
    http.emit("tell",fortune)
});

server.listen(4000, 'localhost', () => {console.log("server on")});