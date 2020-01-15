
let connection;
let handleUserInput = function(key){
  if (key === '\u0003') {
    process.exit();
  }
  if(key === 'w'){
    connection.write("Move: up");
  }
  if(key === 'a'){
    connection.write("Move: left");
  }
  if(key === 'd'){
    connection.write("Move: right");
  }
  if(key === 's'){
    connection.write("Move: down");
  }
  if(key === 'g'){
    connection.write("Say: GO!");
  }
  if(key === 'y'){
    connection.write('Say: WIN');
  }

}
let setupInput = function(conn){
  connection = conn;
  const stdin = process.stdin
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => handleUserInput(key));
}

module.exports = {setupInput};