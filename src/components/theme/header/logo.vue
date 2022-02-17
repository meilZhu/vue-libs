<!--
 * @fileName: 
 * @Date: 2021-01-26 13:59:16
 * @Author: manyao.zhu
-->
<template>
  <div class="m_logo" :class="[routerConfig.collapsed ? 'm_logo_collapsed' : '', themeConfig.mode === 'light' || themeConfig.layoutComponent === 'header_layout' ? 'm_logo_light' : '']">
    <el-tooltip class="item" effect="dark" :content="themeConfig.program || $t('program')" placement="right" :disabled="!routerConfig.collapsed">
      <img class="m_logo_img" :class="routerConfig.collapsed ? 'm_logo_collapse' : ''" :src="routerConfig.collapsed ? themeConfig.squareLogo : themeConfig.bigLogo" alt="logo">
    </el-tooltip>
    <el-tooltip class="item" effect="dark" :content="themeConfig.program || $t('program')" placement="right" :disabled="((themeConfig.program && themeConfig.program.length < 5) || ($t('program').length < 5))">
      <span class="m_program_name" v-if="!routerConfig.collapsed" >{{ themeConfig.program || $t('program') }}</span>
    </el-tooltip>
    
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'logo',
    data() {
      return {}
    },
    computed: {
      ...mapState(['routerConfig', 'themeConfig'])
    },
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
    transition: all .3s ease-in-out;
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
  .m_logo_light {
    background: $headerBackgroundColor;
    border-bottom: 1px $borderColor solid;
  }
</style>