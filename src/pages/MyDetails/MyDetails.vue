<template>
  <div class="main">
    <header-ga headerTitle="个人信息" headericon='false'></header-ga>
    <div class="content">
      <div class="div-kong"></div>
      <div class="mydiv">
        <img :src="userdetil.imgs" alt="">
        <div class="content-dia">
          <h2>{{userdetil.name}}</h2>
          <p>微信号: <span>{{userdetil.wxnum}}</span></p>
          <span class="content-dia-span"></span>
        </div>
      </div>
      <mt-cell title="昵称" :value="userdetil.name"></mt-cell>
      <mt-cell title="微信号" :value="userdetil.wxnum"></mt-cell>
      <mt-cell title="二维码名片">
        <span class="iconfont icon-erweima"></span>
      </mt-cell>
      <mt-cell title="更多"></mt-cell>
      <div class="div-kong"></div>
      <mt-cell title="我的地址"></mt-cell>
    </div>
  </div>
  <!-- mydetails -->
</template>
<script>
import HeaderGa from 'components/HeaderGa/HeaderGa'
export default {
  components: {
    HeaderGa
  },
  computed: {
    userdetil () {
      return this.$store.state.userdetail
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
