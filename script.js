var socket = new WebSocket("ws://192.168.4.1/ws");
socket.onopen = function() {
    alert("Соединение установлено.");
setInterval(function(){
    socket.send("Привет");
},1000);
};

  
  socket.onclose = function(event) {
    if (event.wasClean) {
      alert('Соединение закрыто чисто');
    } else {
      alert('Обрыв соединения'); // например, "убит" процесс сервера
    }
    alert('Код: ' + event.code + ' причина: ' + event.reason);
  };
  
  socket.onmessage = function(event) {
    alert("Получены данные " + event.data);
  };
  
  socket.onerror = function(error) {
    alert("Ошибка " + error.message);
  };