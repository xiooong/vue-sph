    import Mock from 'mockjs'

    // JSON数据格式引入
    // webpack默认对外暴露的：图片、JSON
    import banner from './banner.json'
    import floor from './floor.json'

    // mock数据:第一个参数：请求数据
    Mock.mock("/mock/banner",{code:200,data:banner})
    Mock.mock("/mock/floor",{code:200,data:floor})