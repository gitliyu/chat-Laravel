import * as io from 'socket.io-client'

class Server {
    constructor () {
        let url = 'http://localhost:8000';
        this.socket = io.connect(url);
        return this.socket;
    }
}
export default Server;