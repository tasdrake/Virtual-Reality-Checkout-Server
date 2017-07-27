const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const stripe = require ("stripe")("sk_test_qqZDHIAgBZFr8pIlFLFQAOna")
const routes = require('./routes.js');
const server = require('http').Server(app);
const io = require('socket.io')(server);

///////////////////////////////this code works start
// const express = require('express');
// const socketIO = require('socket.io');
// const PORT = process.env.PORT || 3000;
//////////////////except this start
// const app = express()
// app.listen(3003)
////////////except this end
// const server = express().listen(PORT, () => console.log(`Listening on ${ PORT }`));
//const io = socketIO(server);

  io.on('connection', function(socket){
    console.log('a user connected c');
    socket.emit('amount', 'pleasework');
  });
///////////////this code works end


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH, PUT" )
  next();
});
app.use(bodyParser.json())
app.use(routes)

//
// http.listen(6000, function(){
//   console.log('listening on *:6000');
// });
//
//app.listen(process.env.PORT || 5000)

module.exports = {app:app, server:server};
