<!--
 * @fileName: 国际化语言切换
 * @Date: 2021-01-26 14:00:27
 * @Author: manyao.zhu
-->
<template>
  <el-dropdown @command="changeLanguage">
    <span class="m_language">
      {{ $t('language') }}<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="zh">{{ $t('chinese') }}</el-dropdown-item>
      <el-dropdown-item command="en">{{ $t('english') }}</el-dropdown-item>
    </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  export default {
    name: 'Language',
    data() {
      return {}
    },
    computed: {
      ...mapState(['themeConfig'])
    },
    mounted() {
      console.log(this.themeConfig)
    },
    methods: {
      ...mapActions(['setThemeConfig']),
      // 切换语言
      changeLanguage(command) {
        switch (command) {
          case 'zh': 
            this.setThemeConfig({prop: 'language', value: 'zh'})
            this.$i18n.locale = command
            break;
          case 'en':
            this.setThemeConfig({prop: 'language', value: 'en'})
            this.$i18n.locale = command
            break;
          default:
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~/css/shared.scss';
  .m_language {
    padding: 0 10px;
    margin-right: 10px;
    border-right: 1px solid $borderColor;
  }
</style>