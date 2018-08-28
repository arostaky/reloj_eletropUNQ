var counter = $('#counter span');
var namespace = '/test';
var socket = io.connect('http://192.168.0.172:5000' + namespace);
socket.on('connect', function() {
    socket.emit('my event', {
        data: 'I\'m connected!'
    });
    console.log('conected')
});
socket.on('disconnect', function() {
    console.log('disconnected')
});
socket.connect();
socket.emit('join', {
    room: 'eletropunq'
});
// socket.on('eletropunq', function(msg) {
//     $('#room span').append('Received: ' + msg.data);
// });
socket.on('timer', function(data) {
    $(counter).html(data.data);
});
// socket.on('reset', function(data) {
//     $(counter).html('0');
//     //io.sockets.emit('timer', { countdown: countdown });
// });