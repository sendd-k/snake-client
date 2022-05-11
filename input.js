const { createConnection } = require('net');
const { stdin } = require('process');
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (data){
    if(data === "w") {
      connection.write("Move: up")
    }
    if(data === "s") {
      connection.write("Move: down")
    }
    if(data === "d") {
      connection.write("Move: right")
    }
    if(data === "a") {
      connection.write("Move: left")
    }
    if(data === '\u0003') {
    process.exit();
    };
    if(data === 'h'){
      connection.write("Say: Hello")
    }
    if(data === 't'){
      connection.write("Say: There")
    }
  };



module.exports = {setupInput}