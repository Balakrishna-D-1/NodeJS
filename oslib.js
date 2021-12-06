const os = require('os');

console.log('Total memory :', os.totalmem());
console.log("Total memory ", os.freemem()/1000000000);
console.log('os Type  :', os.type());
console.log('Home Directory :',os.homedir());
console.log('Platform :',os.platform());
console.log('Ntework Interfaces :', os.networkInterfaces());
console.log('Uptime :', os.uptime());