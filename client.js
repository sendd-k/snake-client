const net = require('net');
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
    
  })

  conn.on("data", (data) =>{
    console.log(data)
  })

  conn.on('connect',() => {
    console.log('A connection has been made')
  })

  conn.on('connect', () => {
    conn.write('Name: KVN')
  })

  // conn.on('connect', () => {
  //   conn.write('Move: up')
  // })

  conn.setEncoding('utf8');

  return conn;
};

module.exports = {
  connect,
};