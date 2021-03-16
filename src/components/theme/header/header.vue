<!--
 * @fileName: 
 * @Date: 2021-01-26 13:58:39
 * @Author: manyao.zhu
-->
<template>
  <section class="m_header">
    <div class="m_header_left">
      <logo></logo>
      <i class="fa fa_m" :class="routerConfig.collapsed ? 'fa-indent' : 'fa-outdent'" aria-hidden="true" @click="changeCollapsed"></i>
    </div>
    <div class="m_header_center">

    </div>
    <div class="m_header_right">
      <tips v-if="!themeConfig.hideTips"></tips>
      <language v-if="!themeConfig.hideLanguage"></language>
      <user></user>
    </div>
  </section>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import Logo from './logo'
  import User from './user'
  import Language from './language'
  import Tips from './tips'
  export default {
    name: 'mHeader',
    components: {
      Logo,
      User,
      Language,
      Tips
    },
    data() {
      return {
        
      }
    },
    computed: {
      ...mapState(['routerConfig', 'themeConfig'])
    },
    methods: {
      ...mapActions(['setRouterConfig']),
      // 改变左侧菜单的宽度
      changeCollapsed() {
        this.setRouterConfig({prop: 'collapsed', value: !this.routerConfig.collapsed}),
        this.setRouterConfig({prop: 'menuWidth', value: this.routerConfig.collapsed ? 66 : 220})
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
    justify-content: space-between;
    background: $headerBackgroundColor;
    .m_header_left {
      display: flex;
      align-items: center;
      height: 100%;
      .fa_m {
        font-size: 30px;
        margin-left: 5px;
      }
    }
    .m_header_right {
      height: 100%;
      display: flex;
      align-items: center;
      padding-right: 10px;
    }
  }
</style>