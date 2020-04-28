const express = require('express');
const app     = express();

const http = require('http').Server(app);
const io = require('socket.io')(http); //importamos socket



app.use(express.static(__dirname + '/../public')); //ojo con la ruta


io.on('connection', function(socket){
    socket.on('chat message', function(msg){//cuando me llega un mensaje socker.on lo manda todos por io
        usuario.push({
            'username':'carlos',
            'puntuacion':1,
            'socket':'1'
        })
      console.log('message: ' + msg);
      io.emit('chat message', msg);//everyone para que lo lea todo el mundo
  
    });
  });

  http.listen(3000, function(){
    console.log('listening on *:3000');
  });
  
console.log(usuario);

let usuario={
    'username':'',
    'puntuacion':'',
    'socket':''
};