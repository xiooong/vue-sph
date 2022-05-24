import Vue from 'vue'
import App from './App.vue'

// 三级联动组件（全局组件）
import TypeNav from '@/pages/Home/TypeNav'
// 第一个参数：组件名字name 第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav)

// 引入路由
import router from '@/router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //注册路由
  //当这里写router时，每个组件（包括路由/非路由组件）都拥有$route和$router
  router
}).$mount('#app')
