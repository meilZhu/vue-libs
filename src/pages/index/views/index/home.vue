<!--
 * @fileName: 
 * @Date: 2021-01-26 10:32:35
 * @Author: manyao.zhu
-->
<template>
  <div class="main">
    主页
    {{demoId}}
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'index',
    data() {
      return {
        
      }
    },
    computed: {
      ...mapState(['demoId'])
    },
    mounted() {
      console.log(this.$route)
    }
  }
</script>
