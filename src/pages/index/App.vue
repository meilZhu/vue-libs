<!--
 * @fileName: 
 * @Date: 2021-01-21 10:22:43
 * @Author: manyao.zhu
-->
<template>
  <div id="app">
    <layout></layout>
  </div>
</template>

<script>
import layout from '~/components/theme/main/layout'

export default {
  name: 'App',
  components: {
    layout
  },
  mounted() {
    console.log(this.$router)
    console.log(this.$routes)
  }
}
</script>

<style>
  @import '../../css/reset.scss';
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
