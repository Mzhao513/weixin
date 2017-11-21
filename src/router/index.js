/*
 * @Author: Mzhao
 * @Date: 2017-10-30 17:22:44
 * @Last Modified by: Mzhao
 * @Last Modified time: 2017-11-16 08:31:29
 */
import Vue from 'vue'
import Router from 'vue-router'
import Login from 'pages/Login/Login'
import Adduser from 'pages/Adduser/Adduser'
import Loginuser from 'pages/Loginuser/Loginuser'
import Loginusera from 'pages/Loginusera/Loginusera'
import Home from 'pages/Home/Home'
import Friends from 'pages/Friends/Friends'
import Find from 'pages/Find/Find'
import Mine from 'pages/Mine/Mine'
import Main from 'pages/Main/Main'
// 用户详情
import UserDetails from 'pages/UserDetails/UserDetails'
import MyDetails from 'pages/MyDetails/MyDetails'
import Chat from 'pages/Chat/Chat'
import Tes from 'pages/Tes/Tes'
import Search from 'pages/Search/Search'
import Friendster from 'pages/Friendster/Friendster'
Vue.use(Router)

export default new Router({
  // 默认是使用hash值切换,将路由模式切换为html5的history模式
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/adduser',
      name: 'Adduser',
      component: Adduser
    },
    {
      path: '/loginuser',
      name: 'Loginuser',
      component: Loginuser
    },
    {
      path: '/loginusera',
      name: 'Loginusera',
      component: Loginusera
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/friends',
      name: 'Friends',
      component: Friends
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/userdetails',
      name: 'UserDetails',
      component: UserDetails
    },
    {
      path: '/mydetails',
      name: 'MyDetails',
      component: MyDetails
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/tes',
      name: 'Tes',
      component: Tes
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/friendster',
      name: 'Friendster',
      component: Friendster
    }
  ]
})
