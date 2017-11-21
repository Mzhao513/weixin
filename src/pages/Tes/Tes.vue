<template>
  <div class="main">
    <input type="text" v-model="text">
    <button @click="tijiao">点击</button>
  </div>
</template>
<script>
// var socket = new WebSocket('ws://10.3.158.102:3001?/userid=134353653')
export default {
//   created () {
//     socket.onopen = function () {
//       console.log('客服端链接成功')
//     }
//     socket.onmessage = function (ev) {
//       console.log(ev.data)
//     }
//   },
//   data () {
//     return {
//       text: ''
//     }
//   },
//   methods: {
//     tijiao () {
//       socket.send(this.text)
//     }
//   }
  // methods: {
  //   add () {
  //     this.$socket.emit('add',{a: 5, b: 6})
  //   },
  //   get () {
  //     this.$socket.emit('get', {id:12}, (response) => {
  //       console.log(response)
  //     })
  //   }
  // },
  // socket: {
  //   events: {
  //     changed (msg) {
  //       console.log("something changed:" + msg)
  //     }
  //   }
  // }
}
</script>
<style lang="less" scoped>
.input1{
  border: 1px solid red;
}
</style>

