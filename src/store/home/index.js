import { reqCategoryList } from "@/api";


const state = {
    // 默认初始值数据类型根据接口返回值类型进行初始化
    categoryList: [],
};

const mutations = {
    CATEGORYLIST(state,categoryList) {
        state.categoryList = categoryList
    }
};

const actions = {
    // 通过API里的接口函数调用，向服务器发请求并获取数据
    async categoryList({commit}){
        let result = await reqCategoryList();
        console.log(result)
        if(result.code == 200){
            commit("CATEGORYLIST",result.data);
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