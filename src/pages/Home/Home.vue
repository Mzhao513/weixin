<template>
  <div class="main">
    <header-g></header-g>
    <div class="content">
      <ul class="content-ul">
        <li v-for="item in setclient" :key="item.phone" @click="tochat(item)"> 
          <img :src="item.imgs" alt="">
          <div class="content-dia">
            <h2>{{item.name}}</h2>
            <p>{{item.newmsg}}</p>
            <span>{{item.time}}</span>
          </div>
        </li>
      </ul>
    </div>
    <tabar-main></tabar-main>
  </div>
</template>
<script>
import HeaderG from 'components/HeaderG/HeaderG'
import TabarMain from 'components/TabarMain/TabarMain'
import Client from 'api/client.js'
export default {
  methods: {
    tochat (item) {
      this.$store.dispatch('savetochatarr', item)
        .then(res => {
          this.$router.push('/chat')
        })
    }
  },
  computed: {
    setclient () {
      let users = this.$store.state.users
      let arr = []
      for (let i in Client.msgArr) {
        let msg = Client.msgArr[i]
        let time = msg[msg.length - 1].time
        let newmsg = msg[msg.length - 1].msg
        // console.log(time)
        for (let j = 0; j < users.length; j++) {
          if (i === users[j].phone) {
            // console.log(Client.msgArr[i][length - 1][time])
            users[j].time = time
            users[j].newmsg = newmsg
            arr.push(users[j])
          }
        }
      }
      console.log(arr)
      return arr
    }
  },
  components: {
    HeaderG,
    TabarMain
  }
}
</script>
<style lang="less" scoped>
.content{
  position: absolute;
  right: 0;
  left: 0;
  top: 4rem;
  bottom: 5rem;
  overflow-y:scroll;
  .content-ul{
    li{
      height: 6rem;
      position: relative;
      border-bottom: 1px solid hsla(0,0%,60%,.4);
      overflow: hidden;
      img{
        width: 4rem;
        height: 4rem;
        margin: 1rem;
        float: left;
      }
      .content-dia{
        float: left;
        h2{
          font-size: 1.5rem;
          font-weight: 700;
          padding-top: 1rem;
        }
        p{
          font-size: 1.2rem;
          padding-top: 1rem;
          color: #666666;
        }
        span{
          position: absolute;
          right: 1rem;
          top: 1rem;
          font-size: 1rem;
          color: #666666;
        }
      }
    }
  }
}
</style>

