<template>
  <div class="tabbar">
    <span class="iconfont icon-guanbi fanhui" v-if="guanbi=='true'" @click="fanhui()"></span>
    <span class="iconfont icon-fanhui fanhui" v-if="guanbi=='false'" @click="fanhui()"></span>
    <!-- <div class="tabbar-content">{{headerTitle}}</div> -->
    <span v-if="headericon=='true'" class="iconfont icon-gengduo people-icon" @click="gengduo()"></span>
  </div>
</template>
<script>
export default {
  props: ['guanbi', 'headericon'],
  methods: {
    fanhui () {
      this.$router.go(-1)
    },
    gengduo () {
    }
  }
}
</script>
<style lang="less" scoped>
.tabbar{
  height: 4rem;
  background-color: #ffffff;
  color: black;
  text-align: center;
  line-height: 4rem;
  .fanhui{
    float: left;
    display: black;
    width: 4rem;
    height: 4rem;
    font-size: 2rem;
  }
  .tabbar-content{
    float: left;
    height: 3rem;
    margin: .5rem 1rem .5rem 0rem;
    padding-left: 1rem;
    font-size: 1.5rem;
    line-height: 3rem;
  }
  .people-icon{
    float: right;
    width: 4rem;
    height: 4rem;
    display: black;
    font-size: 2.5rem;
  }
}
</style>
