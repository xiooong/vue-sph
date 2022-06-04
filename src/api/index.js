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

// floor（首页下方商品展示）
export const reqGetFloorList = ()=>mockRequests.get('/floor')

// search 搜索页面
// 当前这个接口，给服务器传递一个默认参数（至少是一个空对象{}） 
export const reqGetSearchInfo = (params)=>requests({url:"/list",method:"post",data:params})

// detail商品详情页
export const reqGetDetailInfo = (skuId)=>requests({url:`/item/${skuId}`,method:"get"})