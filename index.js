
const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

let users = []
let history = []

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    //res.sendFile(__dirname + '/public/index.html');
    res.render('index', {
        history: history
    })
});

io.on('connection', function(socket){
  console.log('a user connected');
});

io.on('connection', function(socket){

  socket.on('chat message', function(data){

    console.log(data.username + ': ' + data.message);
    history.push({
        username: data.username,
        message: data.message
    })

    if (history.length > 100)
        history.shift()

    io.emit('chat message', data);

  });

  socket.on('login', function(name){
    
    const data = {
      username: name,
      message: ' has logged in'
    }
    
    console.log(data.username + data.message)

    users.push(name)
    io.emit('chat message', data);
  })

});

http.listen(3000, function(){
  console.log('listening on port 3000')
})

