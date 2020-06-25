let app = require('express')();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
 
io.on('connection', (socket) => {
 
  socket.on('set-name', (name) => {
    socket.username = name;
  });
   
  socket.on('send-message', (message) => {
    io.emit('message', {msg: message.text, sentby: message.sentby, isImaged: message.isImaged ,createdAt: new Date()});    
  });
});
 
var port = process.env.PORT || 3000;
 
server.listen(port, function(){
   console.log('listening in http://localhost:' + port);
});