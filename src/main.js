import Vue from 'vue'
import App from './App.vue'

// 全局组件定义在main.js
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
// 第一个参数：组件名字name 第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)

// 引入路由
import router from '@/router'
// 引入仓库
import store from '@/store'
// 引入MockServe模拟数据 
import '@/mock/mockServe'
// 引入swiper轮播图css样式
import 'swiper/css/swiper.css'
//测试
// import {reqGetSearchInfo} from '@/api'
// reqGetSearchInfo({})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 配置全局事件总线
  beforeCreate(){ 
    Vue.prototype.$bus = this
  },
  //注册路由
  //当这里写router时，每个组件（包括路由/非路由组件）都拥有$route和$router
  router,
  //注册仓库：组件实例身上会多一个属性$store
  store,
}).$mount('#app')
