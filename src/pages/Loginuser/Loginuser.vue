<template>
  <div class="loginuser">
    <tab-bar-white guanbi='true' headericon='true'></tab-bar-white>
    <h2>手机号登录</h2>
    <ul>
      <li>国家/地区 
        <select name="" id="" class="lil-select">
          <option value="中国(+86)">中国(+86)</option>
          <option value="美国(+1)">美国(+1)</option>
          <option value="瑞士(+41)">瑞士(+41)</option>
          <option value="泰国(+66)">泰国(+66)</option>
        </select>
      </li>
      <li>手机号 <input type="text" placeholder="填写手机号" class="inputcss" v-model="phone"></li>
    </ul>
    <router-link to="">用微信号/QQ号/邮箱登录</router-link>
    <button class="btn-zc" :disabled="nextgo" :class="{'nc': editSavebol}" @click="nextgoto">下一步</button>
  </div>
</template>
<script>
import TabBarWhite from 'components/TabBarWhite/TabBarWhite'
export default {
  data () {
    return {
      'phone': '',
      'editSavebol': false
    }
  },
  computed: {
    nextgo () {
      if (this.phone !== '') {
        this.editSavebol = true
        return false
      } else {
        this.editSavebol = false
        return true
      }
    }
  },
  methods: {
    nextgoto () {
      let phone = this.phone
      this.$store.dispatch('saveuserphone', phone)
      this.$router.push('./loginusera')
    }
  },
  components: {
    TabBarWhite
  }
}
</script>

<style lang="less" scoped>

.loginuser{
  h2{
    padding: 3rem;
    padding-left: 2rem;
    font-size: 2rem;
  }
  ul{
    padding-left: .5rem;
    padding-right: .5rem;
    li{
      height: 4rem;
      line-height: 4rem;
      padding-left: 1rem;
      border-bottom: 1px solid #bbb;
      font-size: 1.4rem;
      .inputcss{
        position: absolute;
        left: 9rem;
        margin-top: 1rem;
      }
    }
  }
  a{
    display: block;
    margin: 2rem 0 2rem 1rem;
    font-size: 1.3rem;
    color: #34449ab3;
  }
}
.lil-select{
  border: 0;
  outline: 0;
  background-color: transparent;
  width: 30%;
  // float: left;
  padding-right: 0;
  font-size: inherit;
  height: 4rem;
  line-height: 4rem;
  position: relative;
  color: #5aca5a;
}
.btn-zc{
  margin-top: 2rem;
  margin-left: 5%;
  width: 90%;
  height: 4rem;
  text-align: center;
  font-size: 1.6rem;
  border: none;
  border-radius: .2rem;
  color: #fff;
  background-color: #5aca5a;
}
.nc{
  background-color: #21b321
}
</style>
