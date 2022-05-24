
import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用插件
Vue.use(VueRouter)

// 引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

// 先把VueRouter原型对象的push，先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace

// 重写push | replace
// 第一个参数，告诉原来的push方法，往哪里跳转（传递哪些参数）
// 第二个参数，成功回调
// 第三个参数，失败回调
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        // call || apply
        // 相同点：都可以调用函数一次，都可以篡改函数的上下文
        // 不同点：call与apply传递参数：call：逗号隔开，apply：数组
        originPush.call(this,location,resolve,reject) 
    }else{
        originPush.call(this, location, () => {}, () => {})  //如果错误就返回空
    }
}
VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject) 
    }else{
        originReplace.call(this,location, () => {}, () => {})  //如果错误就返回空
    }
}

// 配置路由
export default new VueRouter({
    routes:[
        {
            path: "/home",
            component: Home,
            meta:{show:true}
        },
        {
            path: "/search/:keyword?",
            name: "search",
            component: Search,
            meta:{show:true},
            // 布尔值写法（只有params参数）
            // props: true,
            // 对象写法
            // props: {a:1,b:2}
            // 函数写法（params和query）
            props:($route) => ({keyword: $route.params.keyword, k: $route.query.k})
            
        },
        {
            path: "/login",
            component: Login,
            meta:{show:false}
        },
        {
            path: "/register",
            component: Register,
            meta:{show:false}
        },
        // 重定向到首页
        {
            path: '*',
            redirect: '/home'
        }
    ]
})