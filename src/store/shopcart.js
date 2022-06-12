import { reqGetCartList,reqRemoveShopCart,reqChangeCartCheck } from "@/api";

const state = {
    cartList: []
}

const mutations = {
    GETCARTLIST(state,cartList){
        state.cartList = cartList
    }
}

const actions = {
    async getCartList({commit}){
        let result = await reqGetCartList()
        console.log('购物车接口',result);
        if(result.code == 200) {       
            commit('GETCARTLIST', result.data)
        }
    },
    async removeShopCart({commit},skuId) {
        let result = await reqRemoveShopCart(skuId);
        console.log('删除购物车商品接口',result);
        if(result.code == 200) {
            return 'ok'
        }else {
            return Promise.reject(new Error('deleteCart Failed'))
        }
    },
    async changeCartCheck({commit},{skuId,isChecked}){
        let result = await reqChangeCartCheck(skuId,isChecked)
        console.log(result)
        if(result.code == 200) {
            return 'ok'
        }else {
            return Promise.reject(new Error('改变购物车check状态失败'))
        }
    },
    async removeAllCheckedCart({dispatch,getters}){
        let promiseAll = []
        getters.cartList.cartInfoList.forEach(item => {
            let promise = item.isChecked ==1 ? dispatch('removeShopCart',item.skuId) : ''
            promiseAll.push(promise)
        });
        return Promise.all(promiseAll)
    },
    async changeAllCartCheck({dispatch,getters},isChecked){
        let promiseAll = []
        getters.cartList.cartInfoList.forEach(item =>{
            let promise = dispatch('changeCartCheck',{skuId:item.skuId,isChecked})
            promiseAll.push(promise)
        })
        return Promise.all(promiseAll)
    }
}

const getters = {
    cartList(state){
        return state.cartList[0] || {}
    }
}

export default {
    state,                                       
    mutations,
    actions,
    getters
}