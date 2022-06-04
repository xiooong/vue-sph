import { reqGetDetailInfo } from "@/api"

const state = {
    goodInfo: {}
}
const mutations = {
    GETDETAILINFO(state, goodInfo) {
        state.goodInfo = goodInfo
    }
}
const actions = {
    // 获取商品信息
    async getGoodInfo({ commit }, skuId) {
        let result = await reqGetDetailInfo(skuId)
        console.log('商品详情接口',result)
        if (result.code == 200) {
            commit('GETDETAILINFO', result.data)
        }
    }
}
// 为简化数据而生
const getters = {
    // 导航路径
    categoryView(state) {
        // 加上空对象赋值，避免接口获取到数据前，goodinfo里找不到categoryView而报错
        return state.goodInfo.categoryView||{}
    },
    // 商品信息
    skuInfo(state) {
        return state.goodInfo.skuInfo||{}
    },
    // 售卖属性
    spuSaleAttrList(state) { 
        return state.goodInfo.spuSaleAttrList||[]
    },

}

export default {
    state,
    mutations,
    actions,
    getters
}