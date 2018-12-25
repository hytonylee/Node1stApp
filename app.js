const os = require('os');

const totalMemory = os.totalmem()
const freeMemory = os.freemen()

console.log('Total Memory: ' + totalMemory);
