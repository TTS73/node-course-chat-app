var socket = io();

socket.on('connect', function() {
  console.log('Connected to a server');

  socket.emit('createMessage', {
    from: 'Tero',
    text: 'Heippa'
  });
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('newMessage', message);
});
