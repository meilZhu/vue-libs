<!--
 * @fileName: 
 * @Date: 2021-01-26 11:11:35
 * @Author: manyao.zhu
-->
<template>
  <section class="demo">
    案例
    <button @click='test'>案例测试</button>
    <button @click='jump'>跳转</button>
  </section>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'Demo',
    data() {
      return {
        
      }
    },
    methods: {
      ...mapActions(['setDemoId']),
      test() {
        this.setDemoId('1234567')
      },
      jump() {
        this.$router.push({name: 'home'})
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
