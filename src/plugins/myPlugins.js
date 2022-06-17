// 自定义插件，对外暴露一个对象
let myPlugins = {}

myPlugins.install = function(Vue,options){

  Vue.directive (options.name,(el,binding)=>{
    el.innerHTML = binding.value.toUpperCase();
  })
  
}

export default myPlugins