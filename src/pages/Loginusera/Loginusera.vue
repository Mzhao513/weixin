<template>
  <div class="loginuser">
    <tab-bar-white guanbi='false' headericon='true'></tab-bar-white>
    <h2>手机号登录</h2>
    <ul>
      <li>手机号 <input type="text" placeholder="填写手机号" :value="phonenum" disabled class="inputcss" >
      </li>
      <li>密码 <input type="password" placeholder="填写微信密码" class="inputcss" v-model="mima"></li>
    </ul>
    <router-link to="">用微信号/QQ号/邮箱登录</router-link>
    <button class="btn-zc" @click="loginuser">登录</button>
  </div>
</template>
<script>
import TabBarWhite from 'components/TabBarWhite/TabBarWhite'
import Client from 'api/client.js'
export default {
  data () {
    return {
      mima: ''
    }
  },
  computed: {
    phonenum () {
      return '+86' + this.$store.state.usersphone
    }
  },
  methods: {
    loginuser () {
      // 获取密码,验证
      this.$store.dispatch('loginuser', this.mima)
        .then(res => {
          this.$msg('提示', res)
          if (res === '手机号未注册') {
            this.$router.push('./loginuser')
          }
          if (res === '登录成功') {
            this.$store.dispatch('saveuserdetail')
              .then(res => {
                // console.log(res)
                // Client.init(res)
                // let userdetail = this.$store.state.userdetail
                Client.init(res)
    // console.log(Client.msgArr)
    // let chat = this.$store.state.chat
    // let chatobj = this.$store.state.chatobj
                this.$router.push('./home')
              })
          }
        })
    }
  },
  components: {
    TabBarWhite
  }
}
</script>

<style lang="less" scoped>
.loginuser{
  h2{
    padding: 3rem;
    padding-left: 2rem;
    font-size: 2rem;
  }
  ul{
    padding-left: .5rem;
    padding-right: .5rem;
    li{
      height: 4rem;
      line-height: 4rem;
      padding-left: 1rem;
      border-bottom: 1px solid #bbb;
      font-size: 1.4rem;
      .inputcss{
        position: absolute;
        left: 9rem;
        margin-top: 1rem;
      }
    }
  }
  a{
    display: block;
    margin: 2rem 0 2rem 1rem;
    font-size: 1.3rem;
    color: #34449ab3;
  }
}
.lil-select{
  border: 0;
  outline: 0;
  background-color: transparent;
  width: 30%;
  // float: left;
  padding-right: 0;
  font-size: inherit;
  height: 4rem;
  line-height: 4rem;
  position: relative;
  color: green;
}
.btn-zc{
  margin-top: 2rem;
  margin-left: 5%;
  width: 90%;
  height: 4rem;
  text-align: center;
  font-size: 1.6rem;
  border: none;
  border-radius: .2rem;
  color: #fff;
  background-color: #21b321;
}
input[type="text"]:disabled{
    background-color: #ffffff;
    color:#999999;
}
</style>
