import http from 'axios'
import api from '@/api'
export default {
  setuser ({commit}) {
    let url = api.host + 'users'
    http.get(url)
      .then(res => {
        commit('SETUSER', res.data)
      })
  },
  // 保存注册用户
  saveuser ({commit}, userobj) {
    let url = api.host + 'users?phone=' + userobj.phone
    // 添加到数据库中
    return http.get(url)
      .then(res => {
        if (res.data.length > 0) {
          return '手机号已注册'
        } else {
          let ur = api.host + 'users'
          return http.post(ur, userobj)
            .then(res => {
              // 添加到vuex中
              // console.log(res.data[0])
              // let data = userobj
              commit('SAVEUSER', res.data)
              return '注册成功'
            })
        }
      })
  },
  // 保存登录时 手机号
  saveuserphone ({commit}, phone) {
    commit('SAVEUSEPHONE', phone)
  },
  // 验证密码
  loginuser (store, pwd) {
    let users = store.state.users
    for (var i = 0; i < users.length; i++) {
      // console.log(Number(users[i].phone))
      if (Number(users[i].phone) === Number(store.state.usersphone)) {
        if (users[i].pwd === pwd) {
          return '登录成功'
        } else {
          return '密码错误'
        }
      }
    }
    return '手机号未注册'
  },
  // 保存用户详情
  saveuserdetail (store) {
    let users = store.state.users
    for (var i = 0; i < users.length; i++) {
      if (users[i].phone === store.state.usersphone) {
        // store.userdetail ===
        store.commit('SAVEUSERDETAIL', users[i])
        return users[i]
      }
    }
  },
  //  保存正要聊天的用户
  savetochatarr (store, item) {
    // console.log(item)
    // 遍历聊天的对象的数组 如果没有添加 有则不添加
    store.commit('SAVETOCHAROBJ', item)
    for (var i = 0; i < store.state.chatarr; i++) {
      if (store.state.chatarr[i] !== item) {
        store.commit('SAVETOCHATARR', item)
      }
    }
    // store.commit('SAVETOCHATOBJ', item)
  },
  // 保存聊天的记录
  savechat (store, msg) {
    let chat = store.state.chat
    let chatobj = store.state.chatobj
     // 发送消息时 判断有没有, 没有添加保存
    if (!chat[chatobj.phone]) {
      chat[chatobj.phone] = []
      // store.commit('SAVECHAT', msg)
      chat[chatobj.phone].push(msg)
      console.log(chat)
    }
  }
}
