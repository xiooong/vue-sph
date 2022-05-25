import Vue from 'vue'
import App from './App.vue'

// 三级联动组件（全局组件定义在mani.js）
import TypeNav from '@/components/TypeNav'
// 第一个参数：组件名字name 第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav)

// 引入路由
import router from '@/router'
// 引入仓库
import store from '@/store'

//测试
// import {reqCategoryList} from '@/api'
// reqCategoryList()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //注册路由
  //当这里写router时，每个组件（包括路由/非路由组件）都拥有$route和$router
  router,
  //注册仓库：组件实例身上会多一个属性$store
  store
}).$mount('#app')
