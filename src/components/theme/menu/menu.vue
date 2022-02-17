<!--
 * @fileName: 
 * @Date: 2021-01-26 13:58:51
 * @Author: manyao.zhu
-->
<template>
    <!-- 左侧菜单 -->
    <el-menu
      :default-active="routerConfig.menuIndex"
      :class="[
        themeConfig.layoutComponent === 'header_layout' ? 'm_menu_to_header' : 'm_menu',
        themeConfig.mode === 'light' ? 'm_menu_light' : ''
      ]"
      @open="handleOpen"
      :mode="themeConfig.layout" 
      @close="handleClose"
      :text-color="themeConfig.layoutComponent === 'header_layout' ? '#333' : ''"
      :background-color="themeConfig.headerBackgroundColor"
      :active-text-color="themeConfig.themeColor"
      :collapse="routerConfig.collapsed"
    >
      <menu-node v-for="(item, index) in menu" :key="index" :item="item"></menu-node>
    </el-menu>
    <!-- 头部菜单 -->
    <!-- <el-menu 
      v-if="themeConfig.layoutComponent === 'header_layout'"
      :default-active="routerConfig.menuIndex"
      class="m_menu_to_header"
      mode="horizontal" 
      text-color="#333"
      :background-color="themeConfig.headerBackgroundColor"
      :active-text-color="themeConfig.themeColor"
      @open="handleOpen"
      @close="handleClose"
    >
      <menu-node v-for="(item, index) in menu" :key="index" :item="item"></menu-node>
    </el-menu> -->
  
</template>

<script>
  import MenuNode from './menu_node'
  import { mapState } from 'vuex'
  export default {
    name: 'Menu',
    components: {
      'menu-node': MenuNode
    },
    data() {
      return {
        activeIndex: '0'
      }
    },
    props: {
      menu: {
        type: Array,
        default() {
          return []
        }
      },
    },
    computed: {
      ...mapState(['routerConfig', 'themeConfig']), //  vertical 纵向， horizontal 横向
    },
    methods: {
      handleOpen() {

      },
      handleClose() {

      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~/css/shared.scss';
  .m_menu {
    overflow-y: scroll;
    height: 100%;
    background: $themeBackgroundColor;
    border-right-color: $themeBackgroundColor;
    width: $headerHeight;
  }
  .m_menu:not(.el-menu--collapse) {
    width: $menuWidth;
  }
  .m_menu::-webkit-scrollbar {
    display: none;
  }
  .m_menu_light {
    background: $activeColor;
    border-right-color: $borderColor;
  }
  .m_menu_to_header {
    padding: 0 20px;
    height: $headerHeight;
    display: flex;
    align-items: center;
    background: $headerBackgroundColor;
  }
</style>