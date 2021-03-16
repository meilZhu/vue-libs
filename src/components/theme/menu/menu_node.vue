<!--
 * @fileName: 菜单子节点
 * @Date: 2021-01-26 14:00:01
 * @Author: manyao.zhu
-->
<template>
  <label class="m_menu_node" :class="[themeConfig.mode === 'light' ? 'm_menu_node_light' : '', routerConfig.collapsed && !isFloat ? 'm_collapsed_menu_node' : '']">
    <!-- 含有子节点 -->
    <el-submenu v-if="item.children" :index="item.index">
      <template slot="title">
        <i v-if="item.icon" class="fa" :class="item.icon"></i>
        <!-- <i class="el-icon-location"></i> -->
        <span slot="title"> {{item.title}} </span>
      </template>
      <menunode v-for="(it, index) in item.children" :key="index" :item="it" :isFloat="true"></menunode>
    </el-submenu>
    <!-- 不含有子节点 -->
    <el-menu-item v-else :index="item.index" @click="jumpRoute(item)">
      <i v-if="item.icon" class="fa" :class="item.icon"></i>
      <span slot="title">{{item.title}}</span>
    </el-menu-item>
  </label>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'menunode',
    data() {
      return {
      
      }
    },
    computed: {
      ...mapState(['routerConfig', 'themeConfig'])
    },
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      },
      isFloat: {
        type: Boolean,
        default: false,
      }
    },
    methods: {
      ...mapActions(['setRouterConfig']),
      jumpRoute(item) {
        this.$router.push({path: item.route, params: item.params, query: item.query})
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~/css/shared.scss";
  @import "~/css/mixin.scss";
  .m_menu_node {
    background: $themeBackgroundColor;
    /deep/ .el-submenu__title, /deep/ .el-menu-item {
      background: $themeBackgroundColor;
      text-align: left;
      color: $activeColor;
      .fa {
        font-size: 18px;
        color: $activeColor;
      }
      &> span {
        margin-left: 5px;
      }
    }
    /deep/ .el-submenu__title:hover, /deep/ .el-menu-item:hover {
      background: $themeActiveBackgroundColor;
    }
    /deep/ .is-active {
      & > .fa {
        color: $themeColor;
      }
      & > span {
        color: $themeColor;
      }
    }
  }
  // 收缩的样式
  .m_collapsed_menu_node {
    /deep/ .el-submenu__title span {
      width: 0;
      height: 0;
      overflow: hidden;
      visibility: hidden;
      display: inline-block;
    }
    /deep/ .el-submenu__title .el-submenu__icon-arrow {
      display: none;
    }
    /deep/ .el-submenu__title, /deep/ .el-menu-item {
      text-align: center;
    }
  }

  // 白色调的样式
  .m_menu_node_light {
    background: $activeColor;
    /deep/ .el-submenu__title, /deep/ .el-menu-item { 
      background: $activeColor;
      color: $fontColor;
      .fa {
        color: $fontColor;
      }
    }
    /deep/ .is-active {
      & > .fa {
        color: $themeColor;
      }
      & > span {
        color: $themeColor;
      }
    }
  }
</style>