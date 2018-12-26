const EventEmitter = require('events');
const url = 'http://mylogger.io/log';

module.exports = class Logger extends EventEmitter {
    //when function is inside a class, it's called method
    log(message) {
        this.emit('messageLogged', { id: 1, url: 'http://', message: 'Hello World!' });
        console.log(message);
    };
}

// module.exports = Logger;


