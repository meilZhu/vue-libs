<!--
 * @fileName: 头部 —— 菜单布局
 * @Date: 2021-04-30 17:33:25
 * @Author: manyao.zhu
-->
<!--
 * @fileName: 头部 + 左侧菜单布局
 * @Date: 2021-01-26 14:01:30
 * @Author: manyao.zhu
-->
<template>
  <section class="m_layout">
    <m-header>
      <template v-slot:menu>
        <m-menu :menu="menuList"></m-menu>
      </template>
    </m-header>
    <div class="m_main">
      <div class="m_main_content">
        <m-nav-menu v-if="!themeConfig.hideSubHeader"></m-nav-menu>
        <!-- 需要缓存的页面组件 -->
        <div class="m_router_content" :class="themeConfig.hideSubHeader ? 'm_router_without_content' : ''">
          <keep-alive>
            <router-view v-if="$route.meta.cache"></router-view>
          </keep-alive>
          <!-- 不需要缓存的页面组件 -->
          <router-view v-if="!$route.meta.cache"></router-view>
        </div>
      </div>
    </div>
    <!-- 设置 -->
    <m-settings v-if="!themeConfig.hideSettings"></m-settings>
  </section>
</template>

<script>
  import Header from '../header/header'
  import Menu from '../menu/menu'
  import NavMenu from '../nav/nav_menu'
  import MySetting from '../settings/drawer'
  import { MENU } from '~/shared/config/menu'
  import { handleMenuIndex } from '../../../shared/utils/handle.router.menu'
  import { mapActions, mapState } from 'vuex'
  export default {
    name: 'headerLayout',
    data() {
      return {
        menuList: null,
      }
    },
    components: {
     'm-header': Header,
     'm-menu': Menu,
     'm-nav-menu': NavMenu,
     'm-settings': MySetting
    },
    computed: {
      ...mapState(['routerConfig', 'themeConfig'])
    },
    mounted() {
      handleMenuIndex(MENU)
      this.setRouters(MENU)
      this.menuList = MENU
      console.log(this.themeConfig.hideSettings);
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
        overflow: hidden;
        position: relative;
        .m_router_content {
          width: 100%;
          height: 100%;
          padding: 55px 20px 20px;
          overflow: auto;
        }
        .m_router_content::-webkit-scrollbar {
          display: none;
        }
        .m_router_without_content {
          padding-top: 20px;
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