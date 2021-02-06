<!--
 * @fileName: 菜单子节点
 * @Date: 2021-01-26 14:00:01
 * @Author: manyao.zhu
-->
<template>
  <div class="m_menu_node" :class="mode === 'light' ? 'm_menu_node_light' : ''">
    <!-- 子集子节点 -->
    <li class="m_menu_item_list" v-if="item.children && !collapsed">
      <!-- 子节点的标题 -->
      <span 
        class="m_menu_title m_menu_item" 
        :class="[mode === 'light' ? 'm_menu_item_light' : '']" 
        @click="openNode"
      >
        <!-- 子节点标题描述 -->
        <span>
          <i v-if="needIcon" :style="{ 'padding-left' : level * 5 + 'px'}" :class="item.class" class="fa fa_icon"></i>
          <span v-if="!collapsed || isFloat">{{ item.title }}</span>
        </span>
        <!-- 子节点标题的icon -->
        <i class="fa fa-angle-down" :class="openMenuNode ? 'm-angle-down' : ''" aria-hidden="true"></i>
      </span>
      <!-- 子节点的框子 -->
      <ul 
        class="m_menu_node_content" 
        :class="[openMenuNode ? 'm_menu_node_content_show' : '']"
      >
        <menunode v-for="(it, index) in item.children" :key="index" :item="it" :needIcon="needIcon" :mode="mode" :level="level + 1"></menunode>
      </ul>
    </li>

    <li class="m_menu_item_list" v-if="item.children && collapsed">
      <!-- 子节点的标题 -->
      <span 
        class="m_menu_title m_menu_item m_menu_item_center" 
        :class="[mode === 'light' ? 'm_menu_item_light' : '']" 
        @click="openNode"
      >
        <!-- 子节点标题描述 -->
        <span :class="!isFloat ? 'm_menu_title_center' : ''">
          <el-tooltip class="item" effect="dark" :content="item.title" placement="right">
            <i v-if="needIcon" :class="item.class" class="fa fa_icon"></i>
          </el-tooltip>
          <span v-if="!collapsed || isFloat">{{ item.title }}</span>
        </span>
        <!-- 子节点标题的icon -->
        <i class="fa fa-angle-down" v-if="isFloat" :class="openMenuNode ? 'm-angle-down' : ''" aria-hidden="true"></i>
      </span>
      <!-- 子节点的框子 -->
      <ul 
        class="m_menu_node_content m_menu_node_content_float" 
        :class="[openMenuNode ? 'm_menu_node_content_show' : '']"
      >
        <menunode v-for="(it, index) in item.children" :key="index" :item="it" :needIcon="needIcon" :mode="mode" :isFloat="true"></menunode>
      </ul>
    </li>
    <!-- 当前子节点 -->
    <li 
      v-if="!item.children"
      class="m_menu_item" 
      :class="[mode === 'light' ? 'm_menu_item_light' : '', item.route === route ? 'm_menu_item_active' : '', collapsed && !isFloat ? 'm_menu_item_center' : '']" 
      @click="jumpRoute(item)"
    >
      <el-tooltip class="item" effect="dark" :content="item.title" placement="right" :disabled="!collapsed || isFloat">
        <i v-if="needIcon" :style="{ 'padding-left' : !collapsed ? level * 5 + 'px' : 0 }" :class="item.class" class="fa fa_icon"></i>
      </el-tooltip>
      <span slot="title" v-if="!collapsed || isFloat">{{ item.title }}</span>
    </li>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'menunode',
    data() {
      return {
        openMenuNode: false
      }
    },
    computed: {
      ...mapState(['route', 'collapsed'])
    },
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      },
      needIcon: {
        type: Boolean,
        default: true
      },
      mode: {
        type: String,
        default: 'dark',
      },
      // 是否为浮框
      isFloat: {
        type: Boolean,
        default: false
      },
      // 当前层级
      level: {
        type: Number,
        default: 0
      }
    },
    watch: {
      collapsed(val) {
        console.log(val && this.isFloat)
      }
    },
    methods: {
      openNode() {
        // if (!this.collapsed) {
          this.openMenuNode = !this.openMenuNode;
        // }
      },

      enterOpenNode() {
        console.log('jin')
        if (this.collapsed) {
          this.openMenuNode = true
        }
      },

      leaveOpenNode() {
        console.log('chu')
        if (this.collapsed) {
          this.openMenuNode = false
        }
      },

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
    .m_menu_item_list {
      position: relative;
      // 跳转菜单的样式
      .m_menu_item {
        height: 45px;
        text-align: left;
        line-height: 45px;
        padding: 0 15px;
        @include ellipse;
        color: $activeColor;
        .fa_icon {
          display: inline-block;
          width: 18px;
          height: 18px;
          font-size: 18px;
          margin-right: 5px;
        }
      }
      .m_menu_item:hover {
        background: $themeActiveBackgroundColor;
        color: $themeColor;
      }
      // 标题样式
      .m_menu_title {
        display: inline-block;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .fa-angle-down {
          transform: rotateZ(0);
          transition: all 0.5s;
        }
        .m-angle-down {
          transform: rotateZ(180deg);
        }
        // 收缩标题样式
        .m_menu_title_center {
          display: inline-block;
          width: 100%;
          text-align: center;
        }
      }
      .m_menu_node_content {
        max-height: 0;
        transition: all .5s;
        overflow: hidden;
      }
      .m_menu_node_content_show {
        height: auto;
        max-height: 600px;
        overflow: visible;
      }
      .m_menu_node_content_float {
        width: $menuWidth;
        position: absolute;
        top: 0;
        right: -$menuWidth;
      }
      .m_menu_item_center {
        text-align: center;
      }
    }
    // .m_menu_item_list {
    //   .m_menu_node_content {
    //     height: auto;
    //     max-height: 600px;
    //   }
    // }
    // 子菜单样式
    .m_menu_item {
      height: 45px;
      text-align: left;
      line-height: 45px;
      padding: 0 15px;
      @include ellipse;
      color: $activeColor;
      .fa_icon {
        display: inline-block;
        width: 18px;
        height: 18px;
        font-size: 18px;
        margin-right: 5px;
      }
    }
    .m_menu_item:hover {
      background: $themeActiveBackgroundColor;
      color: $themeColor;
    }
    .m_menu_item_active {
      background: $themeActiveBackgroundColor;
      color: $themeColor;
    }
    .m_menu_item_center {
      text-align: center;
    }
  }

  // 白色调的样式
  .m_menu_node_light {
    background: $activeColor;
    .m_menu_item_light {
      color: $fontColor;
    }
    .m_menu_item_light:hover {
      color: $activeColor;
    }
  }
</style>