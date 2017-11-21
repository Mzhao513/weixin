<template>
<div>
    <div class="tabbar">
    <span class="iweixi">微信<var></var></span>
    <span to="/" class="iconfont icon-iconjia iiconjia" @click="jiahao"></span>
    <router-link to="/search" class="iconfont icon-sousuo isousuo"></router-link>
  </div>
  <div class="changebox" v-show="changeboxactive">
    <router-link :to="item.path" v-for="item in lists" :class="item.class" :key="item.id">
      <span >{{item.text}}</span>
    </router-link>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      changeboxactive: false,
      lists: [
        {'class': 'iconfont icon-addressbook_fill', 'path': '/', 'text': '发起群聊'},
        {'class': 'iconfont icon-addpeople_fill', 'path': '/', 'text': '添加朋友'},
        {'class': 'iconfont icon-saoyisao', 'path': '/', 'text': '扫一扫'},
        {'class': 'iconfont icon-erweima', 'path': '/', 'text': '收付款'},
        {'class': 'iconfont icon-mail_fill', 'path': '/', 'text': '帮助与反馈'}]
    }
  },
  props: ['headerTitle', 'headericon'],
  methods: {
    jiahao () {
      this.changeboxactive = !this.changeboxactive
    }
  }
}
</script>

<style lang="less" scoped>
.tabbar{
  position: fixed;
  top: 0;
  width: 100%;
  height: 4rem;
  background-color: #333333;
  color: white;
  text-align: center;
  line-height: 4rem;
  z-index: 3;
  .iweixi{
    float: left;
    display: black;
    width: 4rem;
    height: 4rem;
    padding-left: 1rem;
    font-size: 1.5rem;
  }
  .isousuo{
    float: right;
    width: 4rem;
    height: 4rem;
    display: black;
    font-size: 2rem;
    line-height: 4rem;
    padding-right: 1rem;
    color: white;
  }
  .iiconjia{
    float: right;
    width: 4rem;
    height: 4rem;
    display: black;
    font-size: 2rem;
    padding-right: 1rem;
  }
}
.changebox{
  position: absolute;
  top: 4rem;
  right:1rem;
  display: flex;
  flex-direction: column;
  z-index: 9;
  background: #333333;
  a{
    height: 4rem;
    line-height: 4rem;
    padding-left: 2rem;
    width: 16rem;
    font-size: 1.6rem;
    color:#ffffff;
    border-bottom: 1px solid #222222;
    span{
      padding-left: 1rem;
      font-size: 1.4rem;
    }
  }
}
</style>


