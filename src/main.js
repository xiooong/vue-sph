import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'default-passive-events'
import VueLazyload from 'vue-lazyload'

// 引入路由
import router from '@/router'
// 引入仓库
import store from '@/store'
// 引入MockServe模拟数据 
import '@/mock/mockServe'
// 引入swiper轮播图css样式
import 'swiper/css/swiper.css'
// 引入所有接口
import * as API from '@/api'

// 全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
// 第一个参数：组件名字name 第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)

// elementUI按需引入
// import { Button, MessageBox } from 'element-ui';
// Vue.component(Button.name,Button);
// Vue.prototype.$msgbox = MessageBox;
// Vue.prototype.$alert = MessageBox.alert;
Vue.use(ElementUI)

// 引入图片懒加载插件
import xiaoxin from './assets/loading.gif'
Vue.use(VueLazyload)
// const loadimage = require('./assets/loading.gif')
// const errorimage = require('./assets/error.gif')
Vue.use(VueLazyload, {
  // error: errorimage,
  loading: xiaoxin
})

// 引入自定义插件测试
import myPlugins from '@/plugins/myPlugins.js'
Vue.use(myPlugins,{name:'pupu'})

// 引入vee-validate表单验证插件
import '@/plugins/validate'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 配置全局事件总线
  beforeCreate(){ 
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  //注册路由
  //当这里写router时，每个组件（包括路由/非路由组件）都拥有$route和$router
  router,
  //注册仓库：组件实例身上会多一个属性$store
  store,
}).$mount('#app')
