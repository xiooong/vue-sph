import { reqCategoryList,reqGetBannerList, reqGetFloorList } from "@/api";


const state = {
    // 默认初始值数据类型根据接口返回值类型进行初始化
    categoryList: [],
    bannerList: [],
    floorList: [],
};

const mutations = {
    CATEGORYLIST(state,categoryList) {
        state.categoryList = categoryList
    },
    BANNERLIST(state,bannerList) {
        state.bannerList = bannerList
    },
    FLOORLIST(state,floorlist) {
        state.floorList = floorlist
    }
};

const actions = {
    // 通过API里的接口函数调用，向服务器发请求并获取数据
    // 获取三级菜单数据
    async categoryList({commit}){
        let result = await reqCategoryList();
        result.data.splice(15)
        console.log('三级联动菜单接口：',result)
        if(result.code == 200){
            commit("CATEGORYLIST",result.data);
        }
    },
    // 获取首页轮播图数据
    async getBannerList({commit}){
        let result = await reqGetBannerList();
        console.log('轮播图地址接口：',result)
        if(result.code == 200){
            commit("BANNERLIST",result.data)
        }
    },
    // 获取floor数据
    async getFloorList({commit}){
        let result = await reqGetFloorList();
        console.log('floor接口数据',result)
        if(result.code == 200){
            commit('FLOORLIST',result.data)
        }
    }
};

const getters ={};

export default {
    state,
    mutations,
    actions,
    getters,
}