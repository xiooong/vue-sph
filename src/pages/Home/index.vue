<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="floor in floorList" :key="floor.id" :floorList="floor"></Floor>
    <Brand></Brand>
  </div>
  
</template>

<script>
import {mapState} from 'vuex'

import ListContainer from '@/pages/Home/ListContainer'
import TypeNav from '@/components/TypeNav'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'

export default {
  name: 'Home',
  components:{
    ListContainer,
    TypeNav,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  mounted() {
    this.$store.dispatch('getFloorList')
    // this.$store.dispatch('getUserInfo')
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
  }
}
</script>

<style>

</style>