<!--
 * @fileName: 
 * @Date: 2021-01-26 13:58:39
 * @Author: manyao.zhu
-->
<template>
  <section class="m_header">
    <logo></logo>
    <i class="fa fa_m" :class="collapsed ? 'fa-indent' : 'fa-outdent'" aria-hidden="true" @click="changeCollapsed"></i>
  </section>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import Logo from './logo'
  export default {
    name: 'mHeader',
    components: {
      Logo
    },
    data() {
      return {
        
      }
    },
    computed: {
      ...mapState(['collapsed'])
    },
    methods: {
      ...mapActions(['setCollapsed']),
      // 改变左侧菜单的宽度
      changeCollapsed() {
        this.setCollapsed(!this.collapsed)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~/css/shared.scss';
  .m_header {
    height: $headerHeight;
    width: 100%;
    display: flex;
    align-items: center;
    background: $backgroundColor;
    .fa_m {
      font-size: 30px;
      margin-left: 5px;
    }
  }
</style>