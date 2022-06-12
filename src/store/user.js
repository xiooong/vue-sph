import { reqGetCode,reqUserRegister,reqUserLogin,reqGetUserInfo,reqLogout } from '@/api'
import {setToken,getToken,removeToken} from '@/utils/token'

const state = {
    code: '',
    token: getToken(),
    userInfo: {}
};

const mutations = {
    GETCODE(state,code){
        state.code = code
    },
    USERLOGIN(state,token){
        state.token = token
    },
    GETUSERINFO(state,userInfo){
        state.userInfo = userInfo
    },
    USERLOGOUT(state){
        state.token = ''
        state.userInfo = ''
        removeToken()
    }
};

const actions = {
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone)
        console.log('验证码接口',result);
        if (result.code == 200) {
            commit('GETCODE',result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error(result.message))
        }
    },

    async userRegister({ commit },data){
        let result = await reqUserRegister(data)
        console.log('注册接口',result);
        if(result.code == 200){
            return 'ok'
        }else{
            return Promise.reject(new Error(result.message))
        }
    },

    async userLogin({commit}, data){
        let result = await reqUserLogin(data)
        console.log('登录接口',result)
        if(result.code == 200) {
            commit('USERLOGIN',result.data.token)
            setToken(result.data.token)
            return 'ok'
        }else {
            return Promise.reject(new Error('获取登录接口失败'))
        }
    },

    async getUserInfo({commit}){
        let result = await reqGetUserInfo()
        console.log('通过token获取用户信息接口',result)
        if(result.code == 200){
            commit('GETUSERINFO',result.data)
            return 'ok'
        }else {
            return Promise.reject(new Error('获取用户信息失败'))
        }
    },

    async userLogout({commit}){
        let result = await reqLogout();
        console.log('退出登录接口',result);
        if(result.code == 200){
            commit('USERLOGOUT')
            return 'ok'
        }else {
            return Promise.reject(new Error('退出登录接口失败'))
        }
    }
};

// 计算属性
// 简化仓库中数据
const getters = {

};

export default {
    state,
    mutations,
    actions,
    getters,
}