const http = require('http');

const anotherNumber = require('./script2.js').anotherNumber;

console.log(`Did it work? ... ${anotherNumber}`);