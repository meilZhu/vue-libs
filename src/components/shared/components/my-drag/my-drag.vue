<!--
 * @fileName: 页面左右分布支持拖拽的组件
 * @Date: 2022-01-20 18:41:06
 * @Author: manyao.zhu
-->
<template>
  <section class="m_drag">
    <div class="m_drag_side" :style="{ width: realWidth + 'px' }">
      <slot name="side"></slot>
    </div>
    <div class="m_drag_bar" ref="drag" @mousedown="dragDown"></div>
    <div class="m_drag_layout">
      <slot name="layout"></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MyDrag',
  props: {
    // 最小宽度
    minWidth: {
      type: Number,
      default: 200,
    },
    // 左侧的最大宽度
    maxWidth: {
      type: Number,
      default: 500,
    },
    width: {
      type: Number,
      default: 300,
    },
    // 是否可以拖拽
    canDrag: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    width(val) {
      this.realWidth = val
    },
  },
  data() {
    return {
      realWidth: 300,
    }
  },
  methods: {
    dragDown() {
      const _self = this
      document.body.style.cursor = 'e-resize'

      document.onmousemove = function(event) {
        let left = event.layerX
        if (left < _self.minWidth) {
          left = _self.minWidth
        }
        if (left > _self.maxWidth) {
          left = _self.maxWidth
        }
        _self.realWidth = left
        _self.$emit('dragMove', left)

        document.onmouseup = function() {
          document.body.style.cursor = 'default'
          _self.$emit('dragUp', left)
          document.onmousemove = null
          document.onmouseup = null
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../theme-chalk/variable';
.m_drag {
  width: 100%;
  height: 100%;
  display: flex;
  .m_drag_side {
    flex-shrink: 0;
    height: 100%;
    overflow: hidden;
  }
  .m_drag_bar {
    width: 2px;
    height: 100%;
    cursor: e-resize;
    background: rgba(0, 0, 0, 0.6);
  }
  .m_drag_layout {
    flex: 1;
    height: 100%;
  }
}
</style>
