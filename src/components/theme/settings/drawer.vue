<!--
 * @fileName: 设置主题的抽屉
 * @Date: 2021-01-26 14:01:02
 * @Author: manyao.zhu
-->

<template>
  <section class="m_setting">
    <el-tooltip class="item" effect="dark" content="设置" placement="top-start">
      <button class="m_setting_btn">
        <i class="fa fa-cog" @click="drawer = true"></i>
      </button>
    </el-tooltip>

    <el-drawer
      title="设置"
      :visible.sync="drawer"
      size="20%"
      :before-close="close"
    >
      <!-- 主要布局 -->
      <p class="m_setting_label">
        <span class="m_setting_label_spot">* </span>布局选择
      </p>
      <div class="m_setting_value m_theme_contain">
        <span
          :class="
            themeConfig.layout === 'vertical' ? 'm_setting_value_active' : ''
          "
          class="m_setting_theme"
        >
          <img
            src="img/theme/left-layout.png"
            alt="头部+左侧菜单布局"
            class="m_setting_theme_image"
            @click="changeLayout('layout', 'vertical')"
          />
        </span>
        <span
          :class="
            themeConfig.layout === 'horizontal' ? 'm_setting_value_active' : ''
          "
          class="m_setting_theme m_setting_theme_small"
        >
          <img
            src="img/theme/layout.png"
            alt="头部菜单布局"
            class="m_setting_theme_image"
            @click="changeLayout('layout', 'horizontal')"
          />
        </span>
      </div>

      <!-- 主题的选择 -->
      <p class="m_setting_label">
        <span class="m_setting_label_spot">* </span>菜单模式
      </p>
      <div class="m_setting_value m_theme_contain">
        <span
          class="m_setting_mode"
          :class="themeConfig.mode === 'dark' ? 'm_setting_value_active' : ''"
          @click="settingChange('mode', 'dark')"
        >
        </span>
        <span
          class="m_setting_mode m_setting_mode_light"
          :class="themeConfig.mode === 'light' ? 'm_setting_value_active' : ''"
          @click="settingChange('mode', 'light')"
        >
        </span>
      </div>

      <!-- dark主题下的颜色选择 -->
      <p class="m_setting_label">
        <span class="m_setting_label_spot">* </span>深模式颜色选择
      </p>
      <div class="m_setting_value m_theme_contain">
        <span class="theme_color_label">背景色: </span>
        <my-color-picker
          :defaultColor="themeConfig.defaultModeColor"
          :modeColor="themeConfig.modeColor"
          @colorChange="colorChange('modeColor', $event)"
        >
        </my-color-picker>
        <span class="theme_color_label theme_color_label_last"
          >active背景色:
        </span>
        <my-color-picker
          :defaultColor="themeConfig.defaultModeActiveColor"
          :modeColor="themeConfig.modeActiveColor"
          @colorChange="colorChange('modeActiveColor', $event)"
        >
        </my-color-picker>
      </div>

      <!-- 主题色的选择 -->
      <p class="m_setting_label">
        <span class="m_setting_label_spot">* </span>主题色选择
      </p>
      <div class="m_setting_value m_theme_contain">
        <my-theme-picker
          :defaultColor="themeConfig.defaultThemeColor"
          :themeColor="themeConfig.themeColor"
          @onThemeChange="onThemeChange"
          size="middle"
        >
        </my-theme-picker>
      </div>

      <!-- 是否显示水印 -->

      <!-- 是否显示鼠标光影 -->

      <!-- 是否固定头部 -->

      <!-- 是否需要二级头部 -->

      <!-- 是否显示语言切换 -->

      <!-- 是否显示tips信息 -->

      <!-- 是否显示检索功能 -->
    </el-drawer>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import MyThemePicker from './theme_picker'
import MyColorPicker from './color_picker'
export default {
  name: 'MySetting',
  data() {
    return {
      drawer: false,
    }
  },
  computed: {
    ...mapState(['routerConfig', 'themeConfig']),
  },
  components: {
    'my-theme-picker': MyThemePicker,
    'my-color-picker': MyColorPicker,
  },
  methods: {
    ...mapActions(['setRouterConfig', 'setThemeConfig']),
    close() {
      this.drawer = false
    },

    // 改变菜单模式
    settingChange(type, mode) {
      this.setThemeConfig({ prop: type, value: mode })
    },

    // 改变菜单模式的背景色
    colorChange(type, value) {
      this.setThemeConfig({ prop: type, value })
      const code = type === 'modeColor' ? '--mode-color' : '--mode-active-color'
      document.getElementsByTagName('body')[0].style.setProperty(code, value)
    },

    // 改变主主题色
    onThemeChange(color) {
      this.setThemeConfig({ prop: 'themeColor', value: color })
      // 修改项目全局主题颜色
      document
        .getElementsByTagName('body')[0]
        .style.setProperty('--theme-color', color)
    },

    // 切换布局
    changeLayout(type, layout) {
      this.setThemeConfig({ prop: type, value: layout })
      switch (layout) {
        case 'vertical':
          this.setThemeConfig({
            prop: 'layoutComponent',
            value: 'header_menu_layout',
          })
          break
        case 'horizontal':
          this.setThemeConfig({
            prop: 'layoutComponent',
            value: 'header_layout',
          })
          this.setRouterConfig({ prop: 'collapsed', value: false })
          this.setRouterConfig({ prop: 'menuWidth', value: 220 })
          break
        default:
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/css/shared';
.m_setting {
  /deep/ .el-drawer__body {
    font-weight: 600;
    font-size: 16px;
  }
  .m_setting_btn {
    width: 50px;
    height: 50px;
    border-radius: $middleRadius;
    background: rgba(0, 0, 0, 0);
    position: fixed;
    top: 120px;
    right: -25px;
    transition: right 0.5s linear;
    z-index: 1000;
    .fa {
      font-size: 24px;
      color: $themeColor;
    }
  }
  .m_setting_btn:hover {
    background: #fff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.12);
    right: 15px;
  }
  .m_setting_label {
    font-size: 14px;
    text-align: left;
    font-weight: 500;
    padding: 0 20px;
    margin-bottom: 10px;
    line-height: 22px;
    border-top: 1px $borderColor dashed;
    .m_setting_label_spot {
      font-size: 20px;
      font-weight: 700;
      color: $themeColor;
    }
  }
  .m_theme_contain {
    display: flex;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 20px;
    // 菜单模式
    .m_setting_mode {
      display: inline-block;
      width: 35px;
      height: 35px;
      border-radius: $middleRadius;
      background: rgba(0, 0, 0, 0.7);
      margin-right: 10px;
      cursor: pointer;
      position: relative;
    }
    .m_setting_mode_light {
      background: rgba(0, 0, 0, 0.1);
    }

    // 菜单模式选择颜色样式
    .theme_color_label {
      font-size: 14px;
      font-weight: 500;
      margin-right: 10px;
    }

    .theme_color_label_last {
      margin-left: 30px;
    }

    // 布局选择
    .m_setting_theme {
      width: 36px;
      height: 36px;
      cursor: pointer;
      margin-right: 10px;
      position: relative;
      .m_setting_theme_image {
        width: 100%;
        height: 100%;
      }
    }
    .m_setting_theme_small {
      width: 34px;
      height: 34px;
      margin-top: -3px;
    }

    // 都所有需要选项的按钮进行样式设置
    .m_setting_value_active::before {
      display: inline-block;
      width: 100%;
      height: 100%;
      background: rgba(255, 192, 203, 0.8);
      border: $middleRadius;
      position: absolute;
      top: 0;
      left: 0;
      content: '√';
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      font-weight: 600;
      color: #fff;
    }
  }

  // 菜单模式颜色选择样式(动画效果)
  .mode-color-enter-active,
  .mode-color-leave-active {
    // height: 91px .5s;
    opacity: 1 0.5s;
  }
  .mode-color-enter,
  .mode-color-leave-to {
    // height: 0;
    opacity: 0;
  }
}
</style>
