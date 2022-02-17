<!--
 * @fileName: 
 * @Date: 2021-01-21 10:22:43
 * @Author: manyao.zhu
-->
<template>
  <div id="app">
    <component :is="layout">
      <router-view v-if="isRouterAlive"></router-view>
    </component>
  </div>
</template>

<script>
import { themeChange } from '~/shared/utils/theme/handle_element_theme'
import { mapState } from 'vuex'
export default {
  name: 'App',
  provide() {
    return {
      reload: this.reload,
    }
  },
  data() {
    return {
      isRouterAlive: true,
    }
  },
  computed: {
    ...mapState(['themeConfig']),
    layout() {
      return this.themeConfig.layoutComponent
    },
  },
  mounted() {
    themeChange(
      this.themeConfig.themeColor,
      this.themeConfig.defaultThemeColor,
      this.themeConfig.defaultThemeColor
    ).then(() => {
      // 主题色
      document
        .getElementsByTagName('body')[0]
        .style.setProperty('--theme-color', this.themeConfig.themeColor)
      // 菜单背景色
      document
        .getElementsByTagName('body')[0]
        .style.setProperty('--mode-color', this.themeConfig.modeColor)
      // 菜单active背景色
      document
        .getElementsByTagName('body')[0]
        .style.setProperty(
          '--mode-active-color',
          this.themeConfig.modeActiveColor
        )
    })
  },
  methods: {
    // 通过声明reload方法，控制router-view的显示或隐藏，从而控制页面的再次加载
    reload() {
      this.isRouterAlive = false
      this.$nextTick(() => {
        this.isRouterAlive = false
      })
    },
  },
}
</script>

<style>
@import '../../css/reset.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
