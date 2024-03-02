var socket;

function connectWebSocket() {
    // 创建WebSocket连接
    socket = new WebSocket('ws://your-websocket-server-url');

    // 监听WebSocket连接打开事件
    socket.onopen = function() {
        console.log('WebSocket connected');
    };

    // 监听WebSocket收到消息事件
    socket.onmessage = function(event) {
        var message = event.data;
        console.log('Message received: ' + message);

        // 显示接收到的消息
        showMessage(message);
    };

    // 监听WebSocket连接关闭事件
    socket.onclose = function() {
        console.log('WebSocket connection closed');
    };
}

function showMessage(message) {
    var messageBox = document.getElementById('messageBox');
    messageBox.value += message + '\n';
}
