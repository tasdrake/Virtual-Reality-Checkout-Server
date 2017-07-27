// const express = require('express');
const bodyParser = require('body-parser');
// const app = express();
// const server = app.listen(8080)
//const stripe = require ("stripe")("sk_test_qqZDHIAgBZFr8pIlFLFQAOna")
//const routes = require('./routes.js');
//const http = require('http').Server(app);
//const io = require('socket.io')(http);


const express = require('express');
const socketIO = require('socket.io');
const PORT = process.env.PORT || 3000;
const server = express().listen(PORT, () => console.log(`Listening on ${ PORT }`));
const io = socketIO(server);

  io.on('connection', function(socket){
    console.log('a user connected c');
    socket.emit('amount', 'pleasework');
  });



server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH, PUT" )
  next();
});
server.use(bodyParser.json())
server.use(routes)

//
// http.listen(6000, function(){
//   console.log('listening on *:6000');
// });
//
//app.listen(process.env.PORT || 5000)

module.exports = server;
