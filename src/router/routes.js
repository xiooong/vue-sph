// 引入路由组件
import Home from '@/views/Home'
import Search from '@/views/Search'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Detail from '@/views/Detail'


// 路由配置信息       
export default [
  {
    path: "/center",
    name: "center",
    component: () => import("@/views/Center"),
    children: [
      {
        path: "myorder",
        name: "myorder",
        component: () => import("@/views/Center/myOrder"),
      },
      {
        path: "grouporder",
        name: "grouporder",
        component: () => import("@/views/Center/groupOrder"),
      },
      {
        path: "/center",
        redirect: "/center/myorder"
      }
    ]
  },
  {
    path: "/paysuccess",
    name: "paysuccess",
    component: () => import("@/views/PaySuccess")
  },
  {
    path: "/pay",
    name: "pay",
    component: () => import("@/views/Pay"),
    beforeEnter: (to, from, next)=>{
      if(from.path == '/trade'){
        next()
      }else{
        next(false)
      }
    }
  },
  {
    path: "/trade",
    name: "trade",
    component: () => import("@/views/Trade"),
    // 路由独享守卫
    beforeEnter:(to, from, next) =>{
      if(from.path == '/shopcart'){
        next()
      }else{
        // 中断导航（从哪来回哪去）
        next(false)
      }
    }
  },
  {
    path: "/shopcart",
    name: "shopcart",
    component: () => import("@/views/ShopCart")
  },
  {
    path: "/addcartsuccess",
    name: "addcartsuccess",
    component: () => import("@/views/AddCartSuccess")

  },
  {
    path: "/detail/:skuId?",
    name: "detail",
    component: Detail,
    meta: { show: true }
  },
  {
    path: "/home",
    component: Home,
    meta: { show: true }
  },
  {
    path: "/search/:keyword?",
    name: "search",
    component: Search,
    meta: { show: true },
    // 布尔值写法（只有params参数）
    // props: true,
    // 对象写法
    // props: {a:1,b:2}
    // 函数写法（params和query）
    props: ($route) => ({ keyword: $route.params.keyword, k: $route.query.k })
  },
  {
    path: "/login",
    component: Login,
    meta: { show: false }
  },
  {
    path: "/register",
    component: Register,
    meta: { show: false }
  },
  // 重定向到首页
  {
    path: '*',
    redirect: '/home'
  }
]
