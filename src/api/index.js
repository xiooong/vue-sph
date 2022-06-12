//统一管理api接口
import requests from './requests'
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
export const mockGetSearchInfo = (params)=>mockRequests.get('/search')

// detail商品详情页
export const reqGetDetailInfo = (skuId)=>requests({url:`/item/${skuId}`,method:"get"})

// 加入购物车，修改商品个数
export const reqUpdateShopcarInfo = (skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'});

// 获取购物车列表
export const reqGetCartList = ()=>requests({url:'/cart/cartList',method:'get'})

// 删除购物车商品
export const reqRemoveShopCart = (skuId)=>requests({url:`/cart/deleteCart/${skuId}`, method:'delete'})

// 切换购物车商品选中状态
export const reqChangeCartCheck = (skuId,isChecked)=>requests.get(`/cart/checkCart/${skuId}/${isChecked}`)