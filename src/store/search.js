import { reqGetSearchInfo, mockGetSearchInfo } from '@/api'

const state = {
    searchList: {}
};

const mutations = {
    GETSEARCHLIST(state, searchList){
        state.searchList = searchList
    }
};

const actions = {
    async getSearchList({commit}, params = {}){
        let result = await reqGetSearchInfo(params)
        console.log('搜索接口：', result)
        if(result.code == 200){
            commit('GETSEARCHLIST', result.data)
        }
    }
};

// 计算属性
// 简化仓库中数据
const getters = {
    // 当前形参state为本仓库中的state，不是大仓库中的
    goodsList(state){
        // 无网络时获取不到接口，应返回一个空数组
        return state.searchList.goodsList || []
    },

    attrsList(state){
        return state.searchList.attrsList || []
    },

    trademarkList(state){
        return state.searchList.trademarkList || []
    }
    
};

export default {
    state,
    mutations,
    actions,
    getters,
}