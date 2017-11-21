<template>
  <div class="tabbar">
    <span class="iconfont icon-fanhui fanhui" @click="fanhuis"></span>
    <div class="tabbar-content">{{headerTitle}}</div>
    <span v-if="headericon=='true'" class="iconfont icon-gengduo people-icon"></span>
  </div>
</template>
<script>
export default {
  props: ['headerTitle', 'headericon'],
  methods: {
    fanhuis () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
.tabbar{
  height: 4rem;
  background-color: #333333;
  color: white;
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
    border-left: 1px solid #666;
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

