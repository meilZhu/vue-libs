<!--
 * @fileName: 
 * @Date: 2021-01-26 14:01:30
 * @Author: manyao.zhu
-->
<template>
  <section class="m_layout">
    <m-header></m-header>
    <div class="m_main">
      <div class="m_menu_content" :class="routerConfig.collapsed ? 'm_menu_content_collapse' : ''">
        <m-menu :menu="menuList"></m-menu>
      </div>
      <div class="m_main_content">
        <m-nav-menu></m-nav-menu>
        <!-- 需要缓存的页面组件 -->
        <div class="m_router_content">
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
          <!-- 不需要缓存的页面组件 -->
          <router-view v-if="!$route.meta.keepAlive"></router-view>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Header from '../header/header'
  import Menu from '../menu/menu'
  import NavMenu from '../nav/nav_menu'
  import { MENU } from '~/shared/config/menu'
  import { handleMenuIndex } from '../../../shared/utils/handle.router.menu'
  import { mapActions, mapState } from 'vuex'
  export default {
    name: 'layout',
    data() {
      return {
        menuList: null,
      }
    },
    components: {
     'm-header': Header,
     'm-menu': Menu,
     'm-nav-menu': NavMenu
    },
    computed: {
      ...mapState(['routerConfig'])
    },
    mounted() {
      handleMenuIndex(MENU)
      this.setRouters(MENU)
      this.menuList = MENU
    },
    methods: {
      ...mapActions(['setRouters'])
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
        flex-shrink: 0;
      }
      .m_main_content {
        flex: 1;
        .m_router_content {
          padding: 10px 20px;
        }
      }
    }

    .m_main::-webkit-scrollbar {
      display: none;
    }
  }
  .m_layout::-webkit-scrollbar {
    display: none;
  }
</style>