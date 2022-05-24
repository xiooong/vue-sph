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
  components: {
    Header,
    Footer,
  },
  computed:{
    
  }
}
</script>

<style>

</style>
