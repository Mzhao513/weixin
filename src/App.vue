<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created () {
    // 初始化数据
    // 获取user的phone
    this.$store.dispatch('setuser')
  }
}
</script>
<style>
</style>

