<template>
  <div>
      <h1>params: {{this.$route.params.keyword}}</h1>
      <h1>props:{{keyword}},{{k}}</h1>
      <h1>query: {{this.$route.query.k}}</h1>
  </div>
</template>

<script>
export default {
  name: '',
  props:['keyword','k']
}
</script>

<style>

</style>