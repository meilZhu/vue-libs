<!--
 * @fileName: 
 * @Date: 2021-01-26 14:01:30
 * @Author: manyao.zhu
-->
<template>
  <section class="m_layout">
    <m-header></m-header>
    <div class="m_main">
      <div class="m_menu_content" :class="collapsed ? 'm_menu_content_collapse' : ''">
        <m-menu :menu="menuList"></m-menu>
      </div>
      <div class="m_main_content">
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>

<script>
  import Header from '../header/header'
  import Menu from '../menu/menu'
  import { MENU } from '~/shared/config/menu'
  import { mapState } from 'vuex'
  export default {
    name: 'layout',
    data() {
      return {
        menuList: MENU
      }
    },
    components: {
     'm-header': Header,
     'm-menu': Menu
    },
    computed: {
      ...mapState(['collapsed'])
    },
    mounted() {
    },
    methods: {
     
    }
  }
</script>

<style lang="scss" scoped>
  @import '~/css/shared.scss';
  .m_layout {
    width: 100%;
    height: 100vh;
    .m_main {
      width: 100%;
      display: flex;
      height: calc(100% - 66px);
      .m_menu_content {
        width: $menuWidth;
        transition: all .5s;
      }
      .m_menu_content_collapse {
        width: $headerHeight;
      }
    }
  }
</style>