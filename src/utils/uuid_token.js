import {v4 as uuidv4} from 'uuid'

// 生成一个随机字符串，且每次执行不能发生变化，游客身份持久存储

export const getUUID = () => {
    // 先从本地存储获取uuid（判断是否已存在）
    let uuid_token = localStorage.getItem('UUIDTOKEN');
    // 如不存在
    if(!uuid_token){
        // 生成游客身份并存储本地
        uuid_token = uuidv4()
        localStorage.setItem('UUIDTOKEN',uuid_token) 
    }
    // 没返回值的话，为undefined
    return uuid_token
} 