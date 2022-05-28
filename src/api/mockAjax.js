// 二次封装axios
import axios from "axios"
// 引入进度条
// start：进度条开始  done：进度条结束
import nprogress from 'nprogress'
// 引入进度条样式
import "nprogress/nprogress.css"

//利用axios对象的方法create，去创建一个axios实例
//request就是axios
const requests = axios.create({
    //配置对象
    //基础路径（路径前缀)
    baseURL:"/mock",

    //请求超时时间
    timeout:5000,
});

// 请求拦截器：再发送请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config) => {
    // config:配置对象，有一个重要属性：headers请求头
    // 进度条开始动
    nprogress.start();
    return config;
});

// 响应拦截器
requests.interceptors.response.use((res)=>{
    //成功的回调函数：服务器响应数据回来以后，响应拦截器可以检测到并做一些事情
    return res.data;
},(error)=>{
    //响应失败的回调函数
    // 进度条结束
    nprogress.done();
    return Promise.reject(new Error('failed'));
});

export default requests