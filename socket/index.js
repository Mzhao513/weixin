/* eslint-disable */

var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)
app.get ('/', function (req, res) {
  res.send('<h1>Hello world</h1>')
})

// 在线的用户
let lineusers = {}
io.on('connection', function (socket) {
  // console.log(socket.request.headers.referer)
  // 监听用户登录加入
  socket.on('login', function (obj) {
    obj.id = socket.id
    // 登录成功用户加入在线用户
    if(!lineusers.hasOwnProperty(obj.id)) {
      lineusers[obj.userphone] = obj
    }
		console.log(obj.username+'上线');
  })
  // 用户退出
  socket.on('disconnect', function () {
    // 一个用户退出, 在线列表中干掉
    // 一个对象是否含有特定的自身属性transport close
    for( i in lineusers ) {
      // console.log(lineusers[i])
      if (lineusers[i].id === socket.id) {
        let obj = { username: lineusers[i].username}
        delete lineusers[i]
        console.log(obj.username+'下线')
        break;
      }
    }
  })
  socket.on('message', function(obj){
    // console.log(obj)
    for( i in lineusers) {
      if (lineusers[i].userphone === obj.chatphone) {
        socket.to(lineusers[i].id).emit('sendmessage',obj)
        // io.emit('sendmessage', obj)
        console.log(obj.username+'说：'+ obj.msg)
        break;
      }
    }
	});
})
http.listen (3000, function () {
  console.log('listening on *: 3000')
})