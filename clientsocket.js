const  socket = require('socket.io-client');

let i =0 ,  len = 5;

  for (i; i < len; i++){

      let io = socket('http://localhost:4000/');
      io.on('tell',(response)=>{
          console.log( "\t "+response)
          console.log(" \n");

      });
  }



