import Vue from 'vue'
import Vuex from 'vuex'
// 引入小仓库
import home from '@/store/home'
import search from '@/store/search'
import detail from '@/store/detail'
import shopcart from '@/store/shopcart'
import user from '@/store/user'

Vue.use(Vuex)

//state: 仓库存储数据的地方
// const state = {};
//修改state的唯一手段
// const mutations = {};
// 处理action，可以书写自己的业务逻辑，也可以处理异步
// const actions = {};
// 理解为计算属性，用户简化仓库数据，让组件获取仓库的数据更加方便
// const getters = {};

export default new Vuex.Store({
    // state,
    // mutations,
    // actions,
    // getters,
    
    // 实现Vuex仓库模块式开发存储数据
    modules:{
        home,
        search,
        detail,
        shopcart,
        user
    }
});