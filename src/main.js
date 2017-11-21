// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { Button, Cell, TabContainer, TabContainerItem, IndexList, IndexSection, Lazyload } from 'mint-ui'
Vue.use(Lazyload)
import {MessageBox} from 'mint-ui'
Vue.prototype.$msg = MessageBox
import axios from 'axios'
Vue.prototype.$http = axios
Vue.component(Cell.name, Cell)
Vue.component(Button.name, Button)
import { Actionsheet } from 'mint-ui'
Vue.component(Actionsheet.name, Actionsheet)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(IndexList.name, IndexList)
Vue.component(IndexSection.name, IndexSection)
Vue.config.productionTip = false

// 引入通用样式
/* eslint-disable */
import 'mint-ui/lib/style.css'
import 'common/styles/reset.less'
import 'common/styles/base.less'
import 'common/reset.js'
import 'common/styles/font/iconfont.js'
// 引入字体
import 'common/styles/font/iconfont.css'
// 引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
// 引入websocket
// import VueWebsocket from "vue-websocket"
// Vue.use(VueWebsocket, "ws://10.3.151.240:3001")
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
