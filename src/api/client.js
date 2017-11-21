/* eslint-disable */
import io from 'socket.io-client'
const chat = {
  name:'',
  id:null,
  src:'',
	phone:null,
	socket:null,
	onlineCount:0,
	onlineUsers:[],
  friends:[],
  // msgArr:[],
  msgArr: {},
  // msgArr: {
  //   '15607122331': [],
  //   '17665202221': []
  // }
  // 提交消息
  submit (msg, chatobj) {
    if (msg != "") {
      let obj = {
        userid: this.id,
        username: this.name,
        userphone: this.phone,
        usersrc: this.src,
        userfriends: this.friends,
        msg: msg,
        chatphone: chatobj.phone,
        time: this.gettime()
      }
      if(!chat.msgArr[obj.chatphone]){
        chat.msgArr[obj.chatphone] = []
        chat.msgArr[obj.chatphone].push(obj)
      }else {
        chat.msgArr[obj.chatphone].push(obj)
      }
      this.socket.emit("message", obj)
    } else {
      console.log('msg 为空')
    }
  },
  // 获取时间
  gettime () {
    let data = new Date()
    return data.toLocaleTimeString()
  },
  loginout () {
    this.socket.disconnect()
  },
  init (obj) {
    // 初始化数据
    this.name = obj.name
    this.id = obj.id 
    this.phone = obj.phone 
    this.friends = obj.friends
    this.src = obj.imgs
    // 链接服务器 
    this.socket = io.connect('ws://10.3.158.102:3000')
    // 触发登录事件
    this.socket.emit('login', {userid: this.id, username: this.name, userfriends:this.friends, userphone: this.phone})
    // 监听登录
    this.socket.on('login', function (obj) {
      // 登录的用户保存进
      chat.onlineUsers.push(obj)
      console.log('一位用户登录')
    })
    // //监听消息发送
		this.socket.on('message', function (obj) {
    //   console.log('a')
    //   // console.log(socket.request.headers.referer)
    //   let chatphone = obj.chatphone
    //   // console.log(chat.msgArr)
    //   // console.log(chat.msgArr.chatphone)
    //   if (!chat.msgArr.chatphone) {
    //     chat.msgArr[chatphone] = []
    //     // console.log(chat.msgArr)
    //     chat.msgArr.chatphone.push(obj)
    //     // console.log(this.$store.state.chat)
    //   } else {
    //   chat.msgArr[chatphone].push(obj)
    //   // console.log(chat.msgArr)
    //   }
      // chat.msgArr.push(obj)
    })
    // 接受消息
    this.socket.on('sendmessage', function (obj) {
      // console.log(socket.request.headers.referer)
      let chatphone = obj.chatphone
      let userphone = obj.userphone
      if(chatphone === chat.phone) {
        if(!chat.msgArr[userphone]){
          chat.msgArr[userphone] = []
          chat.msgArr[userphone].push(obj)
          console.log(chat.msgArr)          
        } else {
          console.log(chat.msgArr)          
          chat.msgArr[userphone].push(obj)
        }
      }else {
        if (!chat.msgArr[chatphone]) {
          chat.msgArr[chatphone] = []
          
          // console.log(chat.msgArr)
          chat.msgArr[chatphone].push(obj)
          // console.log(this.$store.state.chat)
        } else {
          // console.log('a')
          chat.msgArr[chatphone].push(obj)
        }
      }
		})
  }
}
export default chat