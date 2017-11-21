<template>
  <div class="main">
    <header-g></header-g>
    <div class="content">
      <div class="div-kong"></div>
      <div class="mydiv" @click="todetails">
        <img v-lazy="userdetil.imgs" alt="">
        <div class="content-dia">
          <h2>{{userdetil.name}}</h2>
          <p>微信号: <span>{{userdetil.wxnum}}</span></p>
          <span class="content-dia-span"></span>
        </div>
      </div>
      <div class="div-kong"></div>
      <mt-cell title="钱包" to="/userdetails" icon="more">
        <img slot="icon" src="./images/kabao.png" width="24" height="24">
      </mt-cell>
      <div class="div-kong"></div>
      <mt-cell title="收藏" to="/userdetails" icon="more">
        <img slot="icon" src="./images/shouch.png" width="24" height="24">
      </mt-cell>
      <mt-cell title="相册" to="/userdetails" icon="more">
        <img slot="icon" src="./images/xiangc.png" width="24" height="24">
      </mt-cell>
      <mt-cell title="卡包" to="/userdetails" icon="more">
        <img slot="icon" src="./images/qiangb.png" width="24" height="24">
      </mt-cell>
      <mt-cell title="表情" to="/userdetails" icon="more">
        <img slot="icon" src="./images/biaoq.png" width="24" height="24">
      </mt-cell>
      <div class="div-kong"></div>
      <mt-cell title="设置" to="/userdetails" icon="more">
        <img slot="icon" src="./images/shezhi.png" width="24" height="24">
      </mt-cell>
    </div>
    <tabar-main></tabar-main>
  </div>
</template>
<script>
import HeaderG from 'components/HeaderG/HeaderG'
import TabarMain from 'components/TabarMain/TabarMain'
export default {
  methods: {
    todetails () {
      this.$router.push('/mydetails')
    }
  },
  computed: {
    userdetil () {
      return this.$store.state.userdetail
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
  background-color: rgb(230,229,229);
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
.content-dia-span{
  display: block;
  position: absolute;
  right: 1rem;
  top: 1.5rem;
  width: 3rem;
  height: 3rem;
  background-image: url('./images/41.png');
  background-size: 100%;
}
.div-kong{
  height: 1.4rem;
}
</style>
