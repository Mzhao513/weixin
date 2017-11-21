<template>
  <div class="main">
    <div class="search">
      <span class="iconfont icon-fanhui fanhui" @click="fanhui"></span>
      <div class="serch-box">
        <input type="text"  placeholder="搜索" v-model="inputText"class="inputd" ref="sText"/>
      </div>
    </div>
    <div class="content">
      <p>搜索指定内容</p>
      <div>
        <router-link :to="item.path" v-for="item in itess" :key="item.id">{{item.text}}</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      inputText: '',
      itess: [{'text': '朋友圈', 'path': '/search'},
      {'text': '资讯', 'path': '/search'},
      {'text': '公众号', 'path': '/search'},
      {'text': '小说', 'path': '/search'},
      {'text': '音乐', 'path': '/search'},
      {'text': '表情', 'path': '/search'}]
    }
  },
  methods: {
    fanhui () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
.main{
  background:rgb(244,248,251);
}
.search{
  position: fixed;
  top: 0;
  width: 100%;
  height: 4rem;
  background-color: #333333;
  color: white;
  text-align: center;
  line-height: 4rem;
  z-index: 3;
}
.content{
  position: absolute;
  right: 0;
  left: 0;
  top: 4rem;
  bottom: 0rem;
  overflow-y:scroll;
  background: rgb(244,248,251);
}
.serch-box{
  position: absolute;
  width: 90%;
  height: 100%;
  right:0;
}
.fanhui{ 
  position: absolute;
  left: 0;
  width: 3rem;
  height: 2rem;
  line-height: 2rem;
  margin: 1rem 0.5rem;
  border-right: 1px solid #212121; 
}
.inputd{
  height: 2.2rem;
  width: 80%;
  padding: 0 0rem 0 2rem;
  background-color: #333333;
  color: #ffffff;
  font-size: 1.4rem;
  border-bottom: 1px solid #07ce0f;
  background: url('./image/search.png') left center no-repeat;
  background-size: 2rem;
}
.content{
  width: 90%;
  height: 10rem;
  margin: 3rem auto 0;
  p{
    font-size: 1.3rem;
    text-align: center;
    color: rgb(180, 180, 180);
    margin-bottom: 1rem;
  }
  a{
    display: block;
    font-size: 1.3rem;
    width: 4rem;
    color: rgb(49, 166, 0);
    padding: 0 2.5rem;
    float: left;
    text-align: center;
    margin-top: 2rem;
    border-right: 1px solid rgb(213, 217, 220);
  }
  a:nth-child(n+3){

  }
}
</style>
