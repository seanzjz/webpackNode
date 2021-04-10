import { createApp } from 'vue' // Vue 3.x 引入 vue 的形式
import App from './App.vue' // 引入 APP 页面组建
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import http from '../config/http'
const app = createApp(App) // 通过 createApp 初始化 app
app.config.globalProperties.$http = http
// app.mount('#box') // 将页面挂载到 root 节点
app.use(router).use(store).use(ElementPlus).mount('#box')
// new Vue({
//   el: "#box",
//   router,
//   store,
//   render: h => h(App)
//       // template: "<App/>"
// })