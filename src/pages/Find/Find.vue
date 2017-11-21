<template>
  <div class="main">
    <header-g></header-g>
    <div class="content">
      <div class="div-kong"></div>
      <mt-cell title="朋友圈" to="/friendster" icon="more">
        <img slot="icon" src="./images/pengyou.png" width="24" height="24">
      </mt-cell>
      <div class="div-kong"></div>
      <mt-cell title="扫一扫" @click.native="thermsg" icon="more">
        <img slot="icon" src="./images/shaoyi.png" width="24" height="24">
      </mt-cell>
      <mt-cell title="摇一摇" @click.native="thermsg" icon="more">
        <img slot="icon" src="./images/yaoyiyao.png" width="24" height="24">
      </mt-cell>
      <div class="div-kong"></div>
      <mt-cell title="附近的人" @click.native="thermsg" icon="more">
        <img slot="icon" src="./images/fujin.png" width="24" height="24">
      </mt-cell>
      <mt-cell title="漂流瓶" @click.native="thermsg" icon="more">
        <img slot="icon" src="./images/piaoliu.png" width="24" height="24">
      </mt-cell>
      <div class="div-kong"></div>
      <mt-cell title="购物" @click.native="thermsg" icon="more">
        <img slot="icon" src="./images/gouwu.png" width="24" height="24">
      </mt-cell>
      <mt-cell title="游戏" @click.native="thermsg" icon="more">
        <img slot="icon" src="./images/youxi.png" width="24" height="24">
      </mt-cell>
      <div class="div-kong"></div>
      <mt-cell title="小程序" @click.native="thermsg" icon="more">
        <img slot="icon" src="./images/xiaochengx.png" width="24" height="24">
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
    thermsg () {
      this.$msg('提示', '该功能尚未开发')
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
  background: rgb(230,229,229);;
}
.div-kong{
  height: 1.4rem;
}
</style>
