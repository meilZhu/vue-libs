<!--
 * @fileName: 颜色选择器
 * @Date: 2021-04-28 16:49:12
 * @Author: manyao.zhu
-->
<template>
  <el-color-picker
    class="m_theme_picker"
    popper-class="m_theme_picker_dropdown"
    v-model="color"
    :show-alpha="true"
    :predefine="themeConfig.colors || preColors"
    :size="size"
  >
  </el-color-picker>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'MyColorPicker',
  data() {
    return {
      color: null,
      preColor: [
        '#ff3300',
        '#ff4c00',
        '#FF7500',
        '#fa8c35',
        '#afdd22',
        '#48c0a3',
        '#057748',
        '#4c221b',
        '#8B00FF',
      ],
    }
  },
  props: {
    modeColor: {
      type: String,
    },
    defaultColor: {
      type: String,
    },
    size: {
      // 初始化主题，可由外部传入
      type: String,
      default: 'small',
    },
  },
  mounted() {
    if (this.modeColor) {
      this.color = this.modeColor
      this.$emit('colorChange', this.color)
    }
  },
  computed: {
    ...mapState(['themeConfig']),
  },
  watch: {
    color(val) {
      if (typeof val !== 'string') {
        val = this.defaultColor
      }
      this.$emit('colorChange', val)
    },
  },
}
</script>

<style lang="scss" scoped></style>
