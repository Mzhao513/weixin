<template>
  <div class="main">
    <header-ga headerTitle="详细资料" headericon='true'></header-ga>
    <div class="content">
      <div class="div-kong"></div>
      <div class="mydiv">
        <img :src="chatdetil.imgs" alt="">
        <div class="content-dia">
          <h2>{{chatdetil.name}}</h2>
          <p>微信号: <span>{{chatdetil.wxnum}}</span></p>
          <span class="content-dia-span"></span>
        </div>
      </div>
      <div class="div-kong"></div>
      <mt-cell title="设置备注和标签"></mt-cell>
      <div class="div-kong"></div>
      <mt-cell title="地区"></mt-cell>
      <mt-cell title="个人相册" class="photo"></mt-cell>
      <mt-cell title="更多"></mt-cell>
      <mt-button type="default" size="large" class="btn-me nc" @click="tochat(chatdetil)">发消息</mt-button>
      <mt-button type="default" size="large" class="btn-me">视频聊天</mt-button>
    </div>
  </div>
  <!-- userdetails -->
</template>
<script>
import HeaderGa from 'components/HeaderGa/HeaderGa'
export default {
  components: {
    HeaderGa
  },
  methods: {
    tochat (item) {
      this.$store.dispatch('savetochatarr', item)
        .then(res => {
          this.$router.push('/chat')
        })
    }
  },
  computed: {
    chatdetil () {
      return this.$store.state.chatobj
    }
  }
}
</script>

<style lang="less" scoped>
.content{
  position: absolute;
  right: 0;
  left: 0;
  top: 4rem;
  bottom: 0;
  overflow-y:scroll;
  background-color: #e3e3e3;
  .mydiv{
    height: 6rem;
    position: relative;
    border-bottom: 1px solid hsla(0,0%,60%,.4);
    overflow: hidden;
    background-color: #ffffff;
    img{
      width: 5.4rem;
      height: 5.4rem;
      margin: .3rem;
      margin-left: 1rem;
      float: left;
    }
    .content-dia{
      float: left;
      padding-left: 1rem; 
      h2{
        font-size: 1.5rem;
        font-weight: 700;
        padding-top: 1rem;
      }
      p{
        font-size: 1.2rem;
        padding-top: 1rem;
        color: #666666;
        span{
          font-size: 1.2rem;
        }
      }
    }
  }
}
.div-kong{
  height: 1.4rem;
}
.photo{
  min-height: 6rem;
}
.btn-me{
  width: 80%;
  margin-right: 10%;
  margin-left: 10%;
  margin-top: 2rem;
}
.nc{
  color: white;
}
</style>
