<template>
  <div class="tabrmain">
    <router-link to="home" class="home"><span></span>微信</router-link>
    <router-link to="friends" class="friends">
      <span></span>通信录
    </router-link>
    <router-link to="find" class="find" >
      <span></span>发现
    </router-link>
    <router-link to="mine" class="mine">
      <span></span>我
    </router-link>
  </div>
</template>
<script>
export default {
  props: ['Activesd']
}
</script>
<style lang="less" scoped>
.tabrmain{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 5rem;
  background-color: white;
  border-top: .04rem solid #999;
  z-index: 3;
  a{
    float: left;
    width: 25%;
    height: 4.5rem;
    padding-top: .5rem;
    text-align: center;
    font-size: 1.2rem;
    color: #999;
    span{
      display: block;
      width: 100%;
      height: 2.5rem;
      font-size: 2.3rem;
      background-position: center 0;
      margin-bottom: .2rem;
    }
  }
  a.home {
    span{
      background: url('images/chat2.png') no-repeat;
      background-size: auto 2.5rem;
      background-position: center 0;
    }
  }
  a.friends {
    span{
      background: url('images/addressbook.png') no-repeat;
      background-size: auto 2.5rem;
      background-position: center;
    }
  }
  a.find {
    span{
      background: url('images/finde1.png') no-repeat;
      background-size: auto 2.5rem;
      background-position: center 0;
    }
  }
  a.mine {
    span{
      background: url('images/people.png') no-repeat;
      background-size: auto 2.5rem;
      background-position: center 0;
    }
  }
}
.tabrmain{
  a.home.router-link-exact-active{
    color: #1afa29;
    span{
      background:url('images/addressbook_fill24.png') no-repeat;
      background-size: auto 2.5rem;
      background-position: center 0;
    }
  }
  a.friends.router-link-exact-active{
    color: #1afa29;
    span{
      background:url('images/addressbook_fill21.png') no-repeat;
      background-size: auto 2.5rem;
      background-position: center 0;
    }
  }
  a.find.router-link-exact-active{
    color: #1afa29;
    span{
      background:url('images/addressbook_fill23.png') no-repeat;
      background-size: auto 2.5rem;
      background-position: center 0;
    }
  }
  a.mine.router-link-exact-active{
    color: #1afa29;
    span{
      background:url('images/addressbook_fill22.png') no-repeat;
      background-size: auto 2.5rem;
      background-position: center 0;
    }
  }
}
.bag{
  color: green;
}
</style>
