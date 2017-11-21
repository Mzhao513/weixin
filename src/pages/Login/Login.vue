<template>
  <div class="main">
    <div class="login">
      <router-link to="adduser" class="btn1">注册</router-link>
      <router-link to="loginuser" class="btn2">登录</router-link>
    </div>
  </div>
</template>
<style lang="less" scoped>
.login{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:url('images/login.jpg');
  background-size: 100%;
  font-size: 1.5rem;
}
.btn1,.btn2{
  display: black;
  position: absolute;
  bottom: 3rem;
  width: 10rem;
  height: 4rem;
  line-height: 4rem;
  text-align: center;
  border: 0;
  border-radius: .3rem;
}
.btn1{
  right: 2rem;
  background-color: white;
}
.btn2{
  left: 2rem;
  background-color: green;
  color: white;
}
</style>
