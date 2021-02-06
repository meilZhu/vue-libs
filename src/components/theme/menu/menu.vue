<!--
 * @fileName: 
 * @Date: 2021-01-26 13:58:51
 * @Author: manyao.zhu
-->
<template>
  <ul class="m_menu" :class="[mode === 'vertical' ? 'm_menu_column' : '', collapsed ? 'm_menu_visible' : '']">
    <menu-node v-for="(item, index) in menu" :key="index" :item="item"></menu-node>
  </ul>
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
      mode: {
        type: String,
        default: 'vertical',  //  vertical 纵向， horizontal 横向
      }
    },
    computed: {
      ...mapState(['collapsed']),
    },
    methods: {
      handleSelect() {

      },
      handleClose() {

      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~/css/shared.scss';
  .m_menu {
    width: 100%;
    display: flex;
    overflow-y: scroll;
    background: $themeBackgroundColor;
  }
  .m_menu_visible {
    overflow-y: visible;
  }
  .m_menu_column {
    flex-direction: column;
    height: 100%;
  }
  .m_menu_column::-webkit-scrollbar {
    display: none;
  }
  .m_menu:hover {
    background: themeBackgroundColor(.7);
  }
</style>