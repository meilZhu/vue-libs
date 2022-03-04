<!--
 * @fileName: 主题色选择组件
 * @Date: 2021-04-28 13:58:51
 * @Author: manyao.zhu
-->
<template>
  <el-color-picker
    class="m_theme_picker"
    popper-class="m_theme_picker_dropdown"
    v-model="theme"
    :show-alpha="true"
    :predefine="themeConfig.colors || preColors"
    :size="size"
  >
  </el-color-picker>
</template>

<script>
import { mapState } from 'vuex'
import { themeChange } from '~/shared/utils/theme/handle_element_theme'
export default {
  name: 'MyThemePicker',
  data() {
    return {
      showSuccess: true, // 是否弹出换肤成功消息
      preColors: [
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
      theme: null,
    }
  },
  props: {
    defaultColor: {
      // 初始化主题，可由外部传入
      type: String,
    },
    themeColor: {
      type: String,
    },
    size: {
      // 初始化主题，可由外部传入
      type: String,
      default: 'small',
    },
  },
  computed: {
    ...mapState(['themeConfig']),
  },
  mounted() {
    if (this.themeColor != null) {
      this.theme = this.themeColor
      this.$emit('onThemeChange', this.theme)
      this.showSuccess = false
    }
  },
  watch: {
    theme(val, oldVal) {
      themeChange(val, oldVal, this.defaultColor).then((color) => {
        // 响应外部操作
        this.$emit('onThemeChange', color)
        if (this.showSuccess) {
          this.$message({
            message: '换肤成功',
            type: 'success',
          })
        } else {
          this.showSuccess = true
        }
      })
    },
  },
  methods: {},
}
</script>

<style scoped>
.m_theme_picker .el-color-picker__trigger {
  vertical-align: middle;
}

.m_theme_picker_dropdown .el-color-dropdown__link-btn {
  display: none;
}
</style>
