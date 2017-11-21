export default {
  'SETUSER' (state, data) {
    state.users = data
  },
  'SAVEUSER' (state, data) {
    state.users.push(data)
  },
  'SAVEUSEPHONE' (state, data) {
    state.usersphone = data
  },
  'SAVEUSERDETAIL' (state, data) {
    state.userdetail = data
    // 保存登录用户的聊天记录
    state.chat = data.chat
  },
  'SAVETOCHATARR' (state, data) {
    state.chatarr.push(data)
  },
  'SAVETOCHAROBJ' (state, data) {
    state.chatobj = data
  }
}
