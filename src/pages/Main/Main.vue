<template>
  <div class="main">
    <header-g></header-g>
    <div class="content">
       <a class="home"  :class="{'active': active=='home'}" @click="active='home'">
      <span></span>微信
    </a>
    <a class="friends" :class="{'active': active=='friends'}" @click="active='friends'">
      <span></span>通信录
    </a>
    <a class="find" :class="{'active': active=='find'}" @click="active='find'">
      <span></span>发现
    </a>
    <a class="mine" :class="{'active': active=='mine'}" @click="active='mine'">
      <span></span>我
    </a>
    </div>
     <div class="tabrmain">
  </div>
  </div>
</template>
<script>
import HeaderG from 'components/HeaderG/HeaderG'
import Home from 'pages/Home/Home'
import Friends from 'pages/Friends/Friends'
import Find from 'pages/Find/Find'
import Mine from 'pages/Mine/Mine'
export default {
  data () {
    return {
      active: 'home'
    }
  },
  computeds: {
  },
  components: {
    HeaderG,
    Home,
    Friends,
    Find,
    Mine
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
}
.content-div{
  height: 100%;
}
.tabrmain{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 5rem;
  background-color: white;
  border-top: .04rem solid #999;
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
  a.home.active{
    color: #1afa29;
    span{
      background:url('images/addressbook_fill24.png') no-repeat;
      background-size: auto 2.5rem;
      background-position: center 0;
    }
  }
  a.friends.active{
    color: #1afa29;
    span{
      background:url('images/addressbook_fill21.png') no-repeat;
      background-size: auto 2.5rem;
      background-position: center 0;
    }
  }
  a.find.active{
    color: #1afa29;
    span{
      background:url('images/addressbook_fill23.png') no-repeat;
      background-size: auto 2.5rem;
      background-position: center 0;
    }
  }
  a.mine.active{
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
