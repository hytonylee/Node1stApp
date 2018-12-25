
const url = 'http://mylogger.io/log';

console.log(__filename);
console.log(__dirname);

const log = (message) => {
    //Send an HTTP request
    console.log(message)
}


module.exports = log;


