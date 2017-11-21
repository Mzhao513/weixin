<template>
  <div class="adduser">
    <tab-bar headerTitle='填写手机号' headericon='false' xiangjiicon ='false'></tab-bar>
    <div class="main">
      <ul>
        <li>昵称 <input type="text" placeholder="填写昵称 例如: 土豆" class="inputcss" v-model="name"></li>
        <li>国家/地区 
          <select name="" id="" class="lil-select">
            <option value="中国(+86)">中国(+86)</option>
            <option value="美国(+1)">美国(+1)</option>
            <option value="瑞士(+41)">瑞士(+41)</option>
            <option value="泰国(+66)">泰国(+66)</option>
          </select>
        </li>
        <li>手机号 <input type="text" placeholder="填写手机号" class="inputcss" v-model="phone"></li>
        <li>密码 <input type="password" placeholder="填写密码" class="inputcss" v-model="pwd"></li>
      </ul>
      <button class="btn-zc" :disabled="editSave" :class="{'nc': editSavebol}" @click="save()">注册</button>
    </div>
    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
  </div>
</template>
<script>
import TabBar from 'components/TabBar/TabBar'
export default {
  data () {
    return {
      'name': '',
      'phone': '',
      'pwd': '',
      'wxnum': '',
      'img': '',
      'editSavebol': false,
      'sheetVisible': false
    }
  },
  methods: {
    save () {
      // 验证
      if (!(/^1[3578]\d{9}$/.test(this.phone))) {
        this.$msg('提示', '手机号码不正确')
      } else if (!(/\S{6,}/.test(this.pwd))) {
        this.$msg('提示', '密码过于简单')
      } else {
        let userobj = {
          'name': this.name,
          'phone': this.phone,
          'pwd': this.pwd,
          'wxnum': this.phone + '',
          'friends': [],
          'imgs': '',
          'chat': {}
        }
        this.$store.dispatch('saveuser', userobj)
          .then(res => {
            this.$msg('提示', res)
            if (res === '注册成功') {
              // this.sheetVisible = true
            }
            this.$router.push('/Loginuser')
          })
      }
    }
  },
  computed: {
    editSave () {
      if (this.name !== '' && this.phone !== '' && this.pwd !== '') {
        this.editSavebol = true
        return false
      } else {
        this.editSavebol = false
        return true
      }
    },
    actions () {
      let _this = this
      return [{name: '拍照', method: function () { _this.$router.push('/tes') }}, {name: '选择头像', method: function () { _this.$router.push('/tes') }}]
    }
  },
  components: {
    TabBar
  }
}
</script>
<style lang="less" scoped>
.main{
  top: 4rem;
  ul{
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
}
.btn-zc{
  margin-top: 2rem;
  margin-left: 10%;
  width: 80%;
  height: 4rem;
  text-align: center;
  font-size: 1.6rem;
  border: none;
  border-radius: .2rem;
  color: #fff;
  background-color: #5aca5a;
}
.lil-select{
  border: 0;
  outline: 0;
  background-color: transparent;
  width: 30%;
  float: right;
  padding-right: 1rem;
  font-size: inherit;
  height: 4rem;
  line-height: 4rem;
  position: relative;
}
.nc{
  background-color: #21b321
}
</style>

