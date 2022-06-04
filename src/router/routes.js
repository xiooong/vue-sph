// 引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'


// 路由配置信息
export default  [
    {
        path: "/detail/:skuId?",
        component: Detail,
        meta:{show:true}
    },
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
