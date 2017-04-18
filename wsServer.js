var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(socket){
    console.log('connected');
    socket.on('event', function(data){
        console.log('event');
        console.log(data);
    });
    socket.on('disconnect', function(){
        console.log('disconnect');
    });
    socket.on('hello', function(msg){
        // msg = JSON.stringify(msg);
        console.log(msg.message);
    });
});

app.use(express.static(__dirname + '/public'));

server.listen(3000);