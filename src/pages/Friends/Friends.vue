<template>
  <div class="main">
    <header-g></header-g>
    <div class="content">
      <div class="content-list">
        <ul>
          <li>
            <div>
              <img src="./images/addpeople_fill.png" alt="">
              <h2>新的朋友</h2>
            </div>
          </li>
          <li>
            <div>
              <img src="./images/group_fill.png" alt="">
              <h2>群聊</h2>
            </div>
          </li>
          <li>
            <div>
              <img src="./images/label_fill.png" alt="">
              <h2>标签</h2>
            </div>
          </li>
          <li>
            <div>
              <img src="./images/people_fill.png" alt="">
              <h2>公众号</h2>
            </div>
          </li>
        </ul>
      </div>
      <div class="content-fa">
      </div>
      <mt-index-list>
        <mt-index-section index="A">
          <div class="content-fa-list">
            <ul>
              <li v-for="item in friends" v-bind:key="item.id" @click="tochatdetail(item)">
                <img :src="item.imgs" alt="">
                <h2>{{item.name}}</h2>
              </li>
            </ul>
          </div>
        </mt-index-section>
      </mt-index-list>
    </div>
    <tabar-main></tabar-main>
  </div>
</template>
<script>
import HeaderG from 'components/HeaderG/HeaderG'
import TabarMain from 'components/TabarMain/TabarMain'
export default {
  methods: {
    tochatdetail (item) {
      this.$store.dispatch('savetochatarr', item)
        .then(res => {
          this.$router.push('/userdetails')
        })
    }
  },
  computed: {
    friends () {
      let friends = this.$store.state.userdetail.friends
      let users = this.$store.state.users
      let arr = []
      for (var i = 0; i < users.length; i++) {
        for (var j = 0; j < friends.length; j++) {
          if (users[i].phone === friends[j]) {
            arr.push(users[i])
          }
        }
      }
      return arr
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
  // overflow-y:scroll;
  .content-list{
    height: 16rem;
    ul{
      padding-left: 1rem;
      padding-right: 2rem;
      li{
        height: 4rem;
        border-bottom: .02rem solid #b1b1b1;
        div{
          img{
            float: left;
            width: 3rem;
            height: 3rem;
            margin: .5rem;
          }
          h2{
            float: left;
            font-size: 1.4rem;
            height: 3rem;
            padding: .5rem;
            line-height: 3rem;
          }
        }
      }
    }
  }
}
.content-list{
  ul{
    li:nth-child(1) {
      div{
        img{
          background-color: orange;
        }
      }
    }
     li:nth-child(2) {
      div{
        img{
          background-color: green;
        }
      }
    }
     li:nth-child(3) {
      div{
        img{
          background-color: blue;
        }
      }
    }
     li:nth-child(4) {
      div{
        img{
          background-color: blue;
        }
      }
    }
  }
}
  // padding-left: 1rem;
  // padding-right: 2rem;
.content-fa-list{
  p{
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    font-size: 1.2rem;
    padding-left: 1rem;
    background-color: #e2e2e2;
    text-align: left;
  }
  ul{
    padding-left: 1rem;
    padding-right: 2rem;
    li{
      height: 4rem;
      border-bottom: .02rem solid #b1b1b1;
      img{
          float: left;
          width: 3rem;
          height: 3rem;
          margin: .5rem;
        }
        h2{
          float: left;
          font-size: 1.4rem;
          height: 3rem;
          padding: .4rem;
          line-height: 3rem;
          background-color: white;
        }
    }
  }
}
</style>
