let socketIo = require('socket.io');
let app = require('express')();
let server = require('http').Server(app);
let httpPort = 80;

app.get('/',function(req,res){
    res.send('启动成功：' + httpPort);
});

let io = socketIo(server);
let users = [];

io.on('connection',(socket) =>{
    console.log('有客户端连接:' + socket.id);
    //关联id
    socket.on('set id',(id) => {
        socket.user = id;
        users.push(socket);
    });

    //1对1聊天
    socket.on('private chat',(data) => {
        let toSocket = users.find(item => item.user === data.to);
        toSocket.emit('private chat', data.msg)
	});

    socket.on('disconnect', () => {
        console.log('客户端断开');
    });
});

server.listen(httpPort, () => {
	console.log('listen success on ' + httpPort);
});