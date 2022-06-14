import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from '@/router/routes'
import store from '@/store'

// 使用插件
Vue.use(VueRouter)

// 先把VueRouter原型对象的push，先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace

// 重写push | replace
// 第一个参数，告诉原来的push方法，往哪里跳转（传递哪些参数）
// 第二个参数，成功回调
// 第三个参数，失败回调
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        // call || apply
        // 相同点：都可以调用函数一次，都可以篡改函数的上下文
        // 不同点：call与apply传递参数：call：逗号隔开，apply：数组
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { })  //如果错误就返回空
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => { }, () => { })  //如果错误就返回空
    }
}

// 配置路由
let router = new VueRouter({
    routes,
    // 滚动行为
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 }
    }
})

router.beforeEach(async (to, from, next) => {
    // to and from are both route objects. must call `next`.
    // 已登录： 1、不能访问登录页
    //          2、用户信息若为空则再次获取
    //          3、token失效了则返回登录页（调用退出登录接口）
    let token = store.state.user.token
    let name = store.state.user.userInfo.name
    // 判断是否已登录
    if (token) {
        // 是否访问login页面（已登录的不给访问login）
        if (to.path == '/login') {
            next('/home')
        } else {
            // 用户信息是否为空
            if (name) {
                next()
            } else {
                try {
                    // 若为空就获取用户信息（刷新页面或跳转页面情况）
                    await store.dispatch('getUserInfo')
                    next()
                } catch (error) {
                    // token失效则重新登录
                    await store.dispatch('userLogout')
                    next('/login')
                }
            }
        }
    } else {
        // 待处理
        next()
    }

})

export default router