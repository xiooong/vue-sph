import { reqGetUserAddress } from "@/api";

const state = {
    userAddress: []
}

const mutations = {
    GETUSERADDRESS(state,userAddress){
        state.userAddress = userAddress
    }
}

const actions = {
    async getUserAddress({commit}){
        let result = await reqGetUserAddress()
        console.log('获取用户地址接口',result);
        if(result.code == 200){
            commit('GETUSERADDRESS',result.data)
            return 'ok'
        }else {
            return Promise.reject(new Error('获取用户地址接口失败'))
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