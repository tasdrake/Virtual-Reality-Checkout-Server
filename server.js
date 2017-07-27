const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const stripe = require ("stripe")("sk_test_qqZDHIAgBZFr8pIlFLFQAOna")
const routes = require('./routes.js');
const longpoll = require("express-longpoll")(app);



////////**********************only worked on local host
// const server = require('http').Server(app);
// const io = require('socket.io')(server);
// server.listen(6000, function(){
//    console.log('listening on *:6000');
// });
// //
////////**********************only worked on local host end

///////////////////////////////****************************this code works start
// const express = require('express');
// const socketIO = require('socket.io');
// const PORT = process.env.PORT || 3000;
// const server = express().listen(PORT, () => console.log(`Listening on ${ PORT }`));
// const io = socketIO(server);
//
//   io.on('connection', function(socket){
//     console.log('a user connected c');
//     socket.emit('amount', 'pleasework');
//   });
//
//
// module.exports = server;
///////////////**********************************************this code works end

var data = { text: "Some data" };

app.post('/rg', (req, res, next)=>{
  let body = req.body;
  data = req.body;
})

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH, PUT" )
  next();
});


longpoll.create("/poll");
longpoll.publish("/poll", data);
setInterval(function () {
    longpoll.publish("/poll", data);
}, 3000);



app.use(bodyParser.json());
app.use(routes);
app.listen(process.env.PORT || 5000);


module.exports = app;
