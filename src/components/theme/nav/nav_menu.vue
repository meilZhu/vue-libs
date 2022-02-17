<!--
 * @fileName: 暂存页面已展示的菜单
 * @Date: 2021-02-23 17:29:18
 * @Author: manyao.zhu
-->
<template>
  <section class="m_nav_menu">
    <draggable
      class="m_drag_content"
      element="ul"
      v-model="menuList"
      handle=".m_darg_btn"
      :animation="200"
      filter=".m_undraggable"
      @change="onGroupsChange"
    >
      <li
        class="m_drag_list"
        v-for="(item, index) in menuList"
        :key="index"
        :class="[
          item.path === '/home' ? 'm_undraggable' : 'm_darg_btn',
          item.path === routerConfig.path ? 'm_hight_list' : '',
        ]"
        @click="jump(item)"
      >
        {{ item.title }}
        <i
          v-if="item.path !== '/home'"
          @click.stop="removeNav(index)"
          class="el-icon-close m_drag_list_remove"
        ></i>
      </li>
    </draggable>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import draggable from 'vuedraggable'
import _ from 'lodash'
export default {
  name: 'NavMenu',
  data() {
    return {
      menuList: [],
    }
  },
  components: {
    draggable,
  },
  computed: {
    ...mapState(['navMenu', 'routerConfig']),
  },
  watch: {
    navMenu: {
      handler: function(val) {
        this.menuList = _.cloneDeep(val)
      },
    },
  },
  mounted() {
    this.menuList = _.cloneDeep(this.navMenu)
  },
  methods: {
    ...mapActions(['setNavMenu', 'setRouterConfig']),
    // 拖拽后更新列表
    onGroupsChange() {
      const arr = _.cloneDeep(this.menuList)
      this.setNavMenu(arr)
    },
    // 跳转页面
    jump(item) {
      this.setRouterConfig({ prop: 'cache', value: true })
      this.$router.push({
        path: item.path,
        params: item.params,
        query: item.query,
      })
    },
    // 删除当前列表
    removeNav(index) {
      const navs = _.cloneDeep(this.menuList)
      let item = 0
      if (index == 0) {
        item = navs[index + 1]
      } else {
        item = navs[index - 1]
      }
      navs.splice(index, 1)
      this.setNavMenu(navs)
      this.setRouterConfig({ prop: 'cache', value: true })
      this.$router.push({
        path: item.path,
        params: item.params,
        query: item.query,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/css/shared.scss';
.m_nav_menu {
  width: 100%;
  height: $subHeaderHeight;
  display: flex;
  align-items: center;
  border-bottom: 1px solid $borderColor;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1002;
  background: $subHeaderBackgroud;
  .m_drag_content {
    list-style: none;
    width: 100%;
    display: flex;
    align-items: center;
    height: 100%;
    .m_drag_list {
      list-style: none;
      height: 100%;
      line-height: 45px;
      padding: 0 15px;
      position: relative;
      cursor: pointer;
      .m_drag_list_remove {
        font-size: 14px;
        position: absolute;
        top: 50%;
        margin-top: -8px;
        right: 5px;
        &:hover {
          color: $themeColor;
        }
      }
    }
    .m_drag_list::after {
      display: inline-block;
      width: 0;
      height: 25px;
      border-left: 1px solid $borderColor;
      content: '';
      position: absolute;
      top: 10px;
      right: 0;
    }
    .m_darg_btn {
      padding-right: 25px;
    }
    .m_hight_list::before {
      display: inline-block;
      width: 100%;
      height: 0;
      border-bottom: 2px solid $themeColor;
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
    }
  }
}</style
>style
