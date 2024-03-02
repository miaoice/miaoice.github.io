const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        // 在这里实现根据需求的消息转发逻辑
        // 比如将消息存储到数据库，并向其他客户端广播消息
        console.log('Message received: ' + message);

        // 广播消息给其他客户端
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});
