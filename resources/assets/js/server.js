import * as io from 'socket.io-client'

// 获取server端口号
let port = 6000;

class Server {
    constructor () {
        let url = window.location.host + '/6000';
        this.socket = io.connect('/');
        return this.socket;
    }
}
export default Server;