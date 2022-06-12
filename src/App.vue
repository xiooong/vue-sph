<template>
  <div>
    <Header></Header>
    <!-- 路由出口组件的地方 -->
    <router-view></router-view>
    <Footer v-show="this.$route.meta.show"></Footer>
  </div>
</template>

<script>
 
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  // provide() {
  //   return {
  //     reload: this.reload
  //   }
  // },
  // data(){
  //   return {
  //     isRouterAlive: true
  //   }
  // },
  // methods: {
  //   reload () {
  //     this.isRouerAlive = false
  //     this.$nextTick(function(){
  //       this.isRouterAlive = true
  //     })
  //   }
  // },
  components: {
    Header,
    Footer,
  },
  mounted(){
    //派发一个action，获取商品分类的三级列表的数据
    this.$store.dispatch("categoryList");
  },
  computed:{
    
  }
}
</script>

<style>

</style>
