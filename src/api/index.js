//统一管理api接口
import requests from './ajax'
import mockRequests from './mockAjax'

// 三级联动接口
// /api/product/getBaseCategoryList  get 无参数
// 对外暴露一个函数，只要外部调用这个函数，就像服务器发起ajax请求、获取三级菜单数据
// 当前这个函数只需要把服务器返回的接口返回即可
export const reqCategoryList = () => requests.get('/product/getBaseCategoryList')
// 切记：：当前函数执行需要把服务器返回接口返回

// banner（HOME首页轮播图接口） 
export const reqGetBannerList = ()=>mockRequests.get('/banner')

export const reqGetFloorList = ()=>mockRequests.get('/floor')