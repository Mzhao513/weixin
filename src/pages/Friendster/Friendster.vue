<template>
  <div class="main">
    <tab-bar headerTitle= "朋友圈" headericon="false" xiangjiicon="true"></tab-bar>
    <div class="backgroundimage">
      <img src="./image/45325432.png" alt="">
    </div>
    <div class="mydetail">
      <p>Mzhao</p>
      <img src="./image/44.jpg" alt="">
    </div>
    <div class="contents">
      <ul>
        <li class="contents-li" v-for="item in inmsg" :key="item.id">
          <img :src="item.imgs" alt="">
          <div>
            <h4>{{item.name}}</h4>
            <p>{{item.msga}}</p>
            <div class="aimagearr">
              <img :src="item" alt="" v-for="item in item.imagearr" :key="item.id">
            </div>
            <div>
              <span>{{item.times}}</span>
              <img src="./image/icdian.png" alt="" @click="toshowzhan(item)">
              <div class="hiddendiv" :class="{'showactive':showbol}">
                <ul>
                  <li><img src="./image/dianzhan.png" alt="">
                    <span>赞</span>
                  </li>
                  <li><img src="./image/pinglun.png" alt="">
                  <span>评论</span></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import TabBar from 'components/TabBar/TabBar'
export default {
  data () {
    return {
      showbol: false,
      inmsg: [
        {
          'name': '南瓜',
          'imgs': 'http://i2.bvimg.com/607997/30704ed4538e740bt.jpg',
          'msga': '世界上一成不变的东西，只有“任何事物都是在不断变化的”这条真理.',
          'times': '2小时前',
          'imagearr': ['https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2062667251,3152184599&fm=27&gp=0.jpg', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1192505641,812546335&fm=27&gp=0.jpg']
        },
        {
          'name': '小黑',
          'imgs': 'http://i2.bvimg.com/607997/c6bc9eee52e86a79t.jpg',
          'msga': '我们太年轻，以致都不知道以后的时光，竟然那么长，长得足够让我忘记你，足够让我重新喜欢一个人，就像当初喜欢你那样。',
          'times': '5小时前',
          'imagearr': ['https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1255053800,3704006402&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4080777779,3721595165&fm=27&gp=0.jpg']
        },
        {
          'name': '土豆',
          'imgs': 'http://i2.bvimg.com/607997/30704ed4538e740bt.jpg',
          'msga': '你永远也看不到我最寂寞时候的样子，因为只有你不在我身边的时候，我才最寂寞.',
          'times': '2小时前',
          'imagearr': []
        }
      ]
    }
  },
  components: {
    TabBar
  },
  methods: {
    toshowzhan () {
      this.showbol = !this.showbol
    }
  }
}
</script>
<style lang="less" scoped>
.main{
  position: absolute;
}
.showactive{
  display: none;
}
.backgroundimage{
  position: relative;
  width: 100%;
  height: 20rem;
  img{
    width: 100%;
    height: 100%;
  }
}
.mydetail{
  position: absolute;
  right: 1rem;
  top: 20rem;
  overflow: hidden;
  p{
    padding-top:2rem;
    padding-right: 1rem;
    font-size: 1.4rem;
    font-weight: 600;
    color: #ffffff;
    float: left;
  }
  img{
    width: 6rem;
    height: 6rem;
    float: left;
  }
}
.contents{
  position: relative;
  top:3rem;
  ul{
    li{
      width: 100%;
      overflow: hidden;
      position: relative;
      border-bottom: 1px solid #999999;
      img{
        width: 4rem;
        padding: 1rem;
        height: 4rem;
        float: left;
      }
      div{
        width: 75%;
        float: left;
        h4{
          padding-top: 1rem;
          font-size: 1.4rem;
          color:#0069d4c4;
        }
        p{
          font-size: 1.4rem;
        }
        div{
          height: 4rem;
          overflow: hidden;
          width: 100%;
          line-height: 4rem;
          span{
            float: left;
          }
          img{
            height: 1.5rem;
            width:2rem;
            float: right;
          }
        }
        .hiddendiv{
          position: absolute;
          margin-top: .5rem;
          bottom: 1rem;
          height: 3rem;
          width: 12rem;
          right: 6rem;
          border-radius: .4rem;
          background: #222a2e;
          ul{
            li{
              width: 6rem;
              height: 3rem;
              float: left;
              color: #ffffff;
              img{
                width: 1.5rem;
                height: 1.5rem;
                padding: .8rem;
                float: left;
              }
              span{
                float: left;
                height: 3rem;
                line-height: 3rem;
              }
            }
          }
        }
        .aimagearr{
          width: 100%;
          height: 100%;
          img{
            width: 8rem;
            height: 8rem;
            float: none;
          }
        }
      }
    }
  }
}

</style>
