<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
  </div>
  
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer'
import TypeNav from '@/pages/Home/TypeNav'
export default {
  name: 'Home',
  components:{
    ListContainer,
    TypeNav,
  }
}
</script>

<style>

</style>