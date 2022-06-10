import { reqGetCartList } from "@/api";

const state = {
    cartList: []
}

const mutations = {
    GETCARTLIST(cartList){
        this.cartList = cartList
    }
}

const actions = {
    async getCartList({commit}){
        let result = await reqGetCartList()
        console.log(result);
        if(result.code == 200) {       
            commit('GETCARTLIST', result.data)
        }
    }
}

const getters = {

}

export default {
    state,                                       
    mutations,
    actions,
    getters
}