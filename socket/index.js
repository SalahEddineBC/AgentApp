import io from 'socket.io-client';

socket = io('http://10.1.4.233:3000', {
    transports: ['websocket'],
    pingTimeout: 30000
});
this.socket.emit('joinAgent', { _id: '5b6312e74c108c26ec1f9816' });
this.socket.on('user-need-help', eventdata => {
});
function Emit(query, param) {
    socket.emit(query, param);
}
export default socket;