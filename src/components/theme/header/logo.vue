<!--
 * @fileName: 
 * @Date: 2021-01-26 13:59:16
 * @Author: manyao.zhu
-->
<template>
  <div class="m_logo" :class="collapsed ? 'm_logo_collapsed' : ''">
    <el-tooltip class="item" effect="dark" :content="program" placement="right" :disabled="!collapsed">
      <img class="m_logo_img" :class="collapsed ? 'm_logo_collapse' : ''" :src="collapsed ? '/img/icon.png' : '/img/logo.png'" alt="logo">
    </el-tooltip>
    <span class="m_program_name" v-if="!collapsed">{{ program }}</span>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'logo',
    data() {
      return {
        program: '前端科技'
      }
    },
    computed: {
      ...mapState(['collapsed'])
    },
    mounted() {
      console.log(this.collapsed)
    }
  }
</script>

<style lang="scss" scoped>
  @import '~/css/shared.scss';
  @import "~/css/mixin.scss";
  .m_logo {
    width: $menuWidth;
    height: 100%;
    padding: 0 5px;
    display: flex;
    align-items: center;
    transition: all .5s;
    background: $themeBackgroundColor;
    .m_logo_img {
      width: 131px;
      height: 48px;
    }
    .m_program_name {
      margin-left: 5px;
      font-size: 16px;
      color: $themeColor;
      @include ellipse;
    }
    .m_logo_collapse {
      width: 48px;
    }
  }
  .m_logo_collapsed {
    width: $headerHeight;
    justify-content: center;
  }
</style>