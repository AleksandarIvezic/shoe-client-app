
const socket = new WebSocket("ws://localhost:8080/");
const signalValue = document.getElementById('socketValue');
const tempValue = '';
document.getElementById('signal').addEventListener('click', () => {
  if (socket.readyState) {
    socket.send(`${signalValue.value}\n${tempValue}`)
  }
});