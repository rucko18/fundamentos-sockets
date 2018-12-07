var socket = io();

socket.on('connect', function () {
    console.log('Conectado al servidor');
});

// Escuchaer
socket.on('disconnect', function () {
    console.log('Perdimos conexion con el servidor');
});

// Enviar Informacion
socket.emit('enviarMensaje', {
    // usuario: 'Rene Corrales',
    mensaje: 'Hola mundo'
}, function (resp) {
    console.log('respuesta', resp);
});

// Escuchar Informacion
socket.on('enviarMensaje', function (res) {
    console.log('Servidor:', res);
})