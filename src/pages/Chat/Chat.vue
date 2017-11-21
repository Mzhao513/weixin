<template>
  <div class="main">
    <tab-bar headericon="true" :headerTitle="setname"></tab-bar>
    <div class="content-text">
      <ul class="text-body" v-for="msgobj in setclient" :key="msgobj.id">
        <li class="text-ask" v-if="msgobj.userid === Client.id">
          <img :src="msgobj.usersrc" />
          <p>{{msgobj.msg}}</p>
          <!-- <img src="./image/youxi.png" alt=""> -->
          <!-- <p>你好覅骄傲烦恼烦恼分骄傲IP大法师放屁撒地方见菩萨ifIP啊发么</p> -->
        </li>
        <li class="text-reply" v-if="msgobj.userid !== Client.id">
          <img :src="msgobj.usersrc" />
          <p>{{msgobj.msg}}</p>
          <!-- <img src="./image/pengyou.png" alt=""> -->
          <!-- <p>你好么</p> -->
        </li>
      </ul>
    </div>
    <div class="footer">
      <div class="bottom">
        <div class="send">
          <input type="text" placeholder="请输入聊天内容" v-model="msg" class="inputtext"/>
          <input type="button" value="发送" @click="sendContent" class="inputbot"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TabBar from 'components/TabBar/TabBar'
import Client from 'api/client.js'
export default {
  data () {
    return {
      Client,
      msg: ''
    }
  },
  methods: {
    sendContent () {
      // console.log(Client.msgArr)
      let chatobj = this.$store.state.chatobj
      // let chat = this.$store.state.chat
      Client.submit(this.msg, chatobj)
      this.msg = ''
    }
  },
  computed: {
    setname () {
      return this.$store.state.chatobj.name
    },
    setclient () {
      let chatobj = this.$store.state.chatobj
      return Client.msgArr[chatobj.phone]
    }
  },
  components: {
    TabBar
  }
}
</script>

<style lang="less" scoped>
.content-text{
  position: fixed;
  top: 4rem;
  bottom: 5rem;
  left: 0;
  right: 0;
  background-color: rgb(245, 245, 245);
  overflow-y: scroll;
}
.text-body{
  margin-top: 2rem;
}
.text-ask{
  text-align: right;
  overflow: hidden;
  margin-top: .6rem;
  margin-bottom: .6rem;
  img{
    width: 3rem;
    height: 3rem;
    float: right;
    margin-right: .5rem;
  }
  p{
    border-radius: .5rem;
    font-size: 1.4rem;
    line-height: 2rem;
    max-width: 22rem;
    text-align: right;
    float: right;
    margin-right: 1rem;
    background: rgb(158, 234, 106);
    padding: .5rem;
  }
}
.text-reply{
  text-align: left;
  overflow: hidden;
  margin-top: .6rem;
  margin-bottom: .6rem;
  img{
    width: 3rem;
    height: 3rem;
    float: left;
    margin-left: .5rem;
  }
  p{
    border-radius: .5rem;
    font-size: 1.4rem;
    line-height: 2rem;
    max-width: 22rem;
    text-align: right;
    float: left;
    margin-left: 1rem;
    background: rgb(255, 255, 255);
    padding: .5rem;
  }
}
.footer{
  height: 4rem;
  border-top: 1px solid #999999;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
}
.inputtext{ 
  height: 2.8rem;
  width: 70%;
  font-size: 1.3rem;
  margin-left: 2rem;
  margin-right: 1rem;
  padding: .5rem 0rem 0rem 0rem;
  border-bottom: 1px solid rgb(78, 245, 85);
}
.inputbot{
  width: 15%;
  height: 2.8rem;
  line-height: 2.8rem;
  color: #ffffff;
  border-radius: .5rem;
  background-color:#21b321; 
}
</style>

