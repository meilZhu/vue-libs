<!--
 * @fileName: 
 * @Date: 2022-01-30 09:26:37
 * @Author: manyao.zhu
-->
<template>
  <section
    class="m_dialog"
    v-show="isShow"
    ref="dialog"
    :style="{ width: width + 'px', height: height + 'px' }"
  >
    <i
      class="m_dialog_bart"
      :class="!top ? 'm_bar_disabled' : ''"
      @mousedown="dragTop"
    ></i>
    <i
      class="m_dialog_barb"
      :class="!bottom ? 'm_bar_disabled' : ''"
      @mousedown="dragBottom"
    ></i>
    <i
      class="m_dialog_barl"
      :class="!left ? 'm_bar_disabled' : ''"
      @mousedown="dragLeft"
    ></i>
    <i
      class="m_dialog_barr"
      :class="!right ? 'm_bar_disabled' : ''"
      @mousedown="dragRight"
    ></i>
    <i
      class="m_dialog_bar_top"
      :class="!topLeft ? 'm_bar_disabled' : ''"
      @mousedown="dragLeftTop"
    ></i>
    <i
      class="m_dialog_bar"
      :class="!bottomRight ? 'm_bar_disabled' : ''"
      @mousedown="dragRightBottom"
    ></i>
    <div class="m_dialog_content">
      <div
        class="m_dialog_header"
        :style="{
          'border-bottom': hasTitleBottomBorder ? '1px solid #444' : '',
          background: headerIsTransparent
            ? 'rgab(255,255,255,0)'
            : 'rgb(255,255,255)',
        }"
        @mousedown="dialogDown"
      >
        <span class="m_dialog_header_title">
          {{ title }}
        </span>
        <span class="m_dialog_header_close">
          <i
            class="fa fa-close"
            v-if="hasRemove"
            @mousedown.stop="stop"
            @click.stop="close"
          ></i>
        </span>
      </div>
      <div class="m_dialog_layout">
        <slot name="content"></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MyDialog',
  data() {
    return {}
  },
  props: {
    width: {
      type: Number,
      default: 540,
    },
    height: {
      type: Number,
      default: 400,
    },
    // 是否展示
    value: {
      type: Boolean,
    },
    // 是否有关闭按钮
    hasRemove: {
      type: Boolean,
      default: true,
    },
    // 标题处是否有底部边框
    hasTitleBottomBorder: {
      type: Boolean,
      default: true,
    },
    // 浏览空间的宽度
    browseWidth: {
      type: Number,
      default: 0,
    },
    // 浏览空间的高度
    browseHeight: {
      type: Number,
      default: 0,
    },
    // 纵坐标多出来的部分 (我们获取定位之外的部分)
    offsetT: {
      type: Number,
      default: 0,
    },
    // 横坐标多出来的部分 (我们获取定位之外的部分)
    offsetL: {
      type: Number,
      default: 0,
    },
    // 最小高度
    minHeight: {
      type: Number,
      default: 200,
    },
    // 最小宽度
    minWidth: {
      type: Number,
      default: 300,
    },
    dragOptions: {
      type: Array,
      default() {
        return ['t', 'b', 'l', 'r', 't-l', 'b-r']
      },
    },
    // 弹框标题
    title: {
      type: String,
      default: '',
    },
    headerIsTransparent: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    isShow: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
    top() {
      return this.dragOptions.some((it) => it === 't')
    },
    bottom() {
      return this.dragOptions.some((it) => it === 'b')
    },
    left() {
      return this.dragOptions.some((it) => it === 'l')
    },
    right() {
      return this.dragOptions.some((it) => it === 'r')
    },
    topLeft() {
      return this.dragOptions.some((it) => it === 't-l')
    },
    bottomRight() {
      return this.dragOptions.some((it) => it === 'b-r')
    },
  },
  watch: {
    browseWidth() {
      this.handleDialogInitSize()
    },
    browseHeight() {
      this.handleDialogInitSize()
    },
  },
  mounted() {},
  methods: {
    // 处理弹框舒适化位置
    handleDialogInitSize() {
      this.$nextTick(() => {
        const dom = this.$refs.dialog
        if (!dom || !this.isShow) return
        dom.style.top = this.browseHeight / 2 - dom.clientHeight / 2 + 2 + 'px'
        dom.style.left = this.browseWidth / 2 - dom.clientWidth / 2 + 2 + 'px'
      })
    },

    // 处理拖拽的移动位置
    dialogDown(evt) {
      const _self = this
      const event = evt || window.event
      const dom = _self.$refs.dialog
      // 计算出鼠标的相对位置
      const disX = event.clientX - dom.offsetLeft
      const disY = event.clientY - dom.offsetTop

      document.onmousemove = function(e) {
        const oEvent = e || window.event
        let left = oEvent.clientX - disX
        let top = oEvent.clientY - disY
        if (left <= 2) {
          left = 2
        } else if (left >= _self.browseWidth - dom.offsetWidth - 2) {
          left = _self.browseWidth - dom.offsetWidth - 2
        }

        if (top <= 2) {
          top = 2
        } else if (top >= _self.browseHeight - dom.offsetHeight - 2) {
          top = _self.browseHeight - dom.offsetHeight - 2
        }
        dom.style.left = left + 'px'
        dom.style.top = top + 'px'

        document.onmouseup = function() {
          document.onmousemove = null
          document.onmouseup = null
        }
      }
    },

    // 拖拽上边框放大
    dragTop() {
      if (!this.top) return
      const _self = this
      const dom = this.$refs.dialog

      const top = dom.offsetTop
      const height = dom.offsetHeight

      document.onmousemove = function(e) {
        document.body.style.cursor = 'n-resize'
        const oEvent = e || window.event
        const moveY = oEvent.pageY - _self.offsetT
        const range = top - moveY - 4
        if (moveY + 4 > 0) {
          if (range + height >= _self.minHeight) {
            dom.style.top = moveY + 'px'
            dom.style.height = range + height + 'px'
            _self.$emit('sizeChange', { height: range + height })
          }
        }

        document.onmouseup = function() {
          document.body.style.cursor = 'default'
          _self.$emit('sizeChangeLeave', { height: range + height })
          document.onmousemove = null
          document.onmouseup = null
        }
      }
    },

    // 拖拽下边框放大
    dragBottom() {
      if (!this.bottom) return
      const _self = this
      const dom = this.$refs.dialog

      const top = dom.offsetTop

      document.onmousemove = function(evt) {
        document.body.style.cursor = 'n-resize'
        const oEvent = evt || window.event
        const moveHeight = oEvent.pageY - _self.offsetT - top - 2

        if (moveHeight + 2 < document.body.clientHeight - _self.offsetT - top) {
          if (moveHeight >= _self.minHeight) {
            dom.style.height = moveHeight + 'px'
            _self.$emit('sizeChange', { height: moveHeight })
          }
        }

        document.onmouseup = function() {
          document.body.style.cursor = 'default'
          _self.$emit('sizeChangeLeave', { height: moveHeight })
          document.onmousemove = null
          document.onmouseup = null
        }
      }
    },

    // 拖拽左边框放大
    dragLeft() {
      if (!this.left) return
      const _self = this
      const dom = this.$refs.dialog

      const left = dom.offsetLeft
      const width = dom.offsetWidth

      document.onmousemove = function(e) {
        document.body.style.cursor = 'e-resize'
        const oEvent = e || window.event
        const moveX = oEvent.pageX - _self.offsetL
        const range = left - moveX - 4
        if (moveX + 4 > 0) {
          if (range + width >= _self.minWidth) {
            dom.style.left = moveX + 'px'
            dom.style.width = range + width + 'px'
            _self.$emit('sizeChange', { width: range + width })
          }
        }

        document.onmouseup = function() {
          document.body.style.cursor = 'default'
          _self.$emit('sizeChangeLeave', { width: range + width })
          document.onmousemove = null
          document.onmouseup = null
        }
      }
    },

    // 拖拽右边框放大
    dragRight() {
      if (!this.right) return
      const _self = this
      const dom = this.$refs.dialog

      const left = dom.offsetLeft

      document.onmousemove = function(evt) {
        document.body.style.cursor = 'e-resize'
        const oEvent = evt || window.event
        const moveWidth = oEvent.pageX - _self.offsetL - left - 2

        if (moveWidth + 2 < document.body.clientWidth - _self.offsetL - left) {
          if (moveWidth >= _self.minWidth) {
            dom.style.width = moveWidth + 'px'
            _self.$emit('sizeChange', { width: moveWidth })
          }
        }

        document.onmouseup = function() {
          document.body.style.cursor = 'default'
          _self.$emit('sizeChangeLeave', { width: moveWidth })
          document.onmousemove = null
          document.onmouseup = null
        }
      }
    },

    // 拖拽左上角放大缩小
    dragLeftTop() {
      if (!this.topLeft) return
      const _self = this
      const dom = this.$refs.dialog

      const top = dom.offsetTop
      const height = dom.offsetHeight

      const left = dom.offsetLeft
      const width = dom.offsetWidth

      document.onmousemove = function(e) {
        document.body.style.cursor = 'nwse-resize'
        const oEvent = e || window.event
        const moveX = oEvent.pageX - _self.offsetL
        const rangeW = left - moveX - 4

        const moveY = oEvent.pageY - _self.offsetT
        const rangeH = top - moveY - 4

        if (moveX + 4 > 0) {
          if (rangeW + width >= _self.minWidth) {
            dom.style.left = moveX + 'px'
            dom.style.width = rangeW + width + 'px'
            _self.$emit('sizeChange', { width: rangeW + width })
          }
        }

        if (moveY + 4 > 0) {
          if (rangeH + height >= _self.minHeight) {
            dom.style.top = moveY + 'px'
            dom.style.height = rangeH + height + 'px'
            _self.$emit('sizeChange', { height: rangeH + height })
          }
        }

        document.onmouseup = function() {
          document.body.style.cursor = 'default'
          _self.$emit('sizeChangeLeave', {
            height: rangeH + height,
            width: rangeW + width,
          })
          document.onmousemove = null
          document.onmouseup = null
        }
      }
    },

    // 拖拽右下角放大
    dragRightBottom() {
      if (!this.bottomRight) return
      const _self = this
      const dom = this.$refs.dialog

      const top = dom.offsetTop
      const left = dom.offsetLeft

      document.onmousemove = function(evt) {
        document.body.style.cursor = 'nwse-resize'
        const oEvent = evt || window.event
        const moveHeight = oEvent.pageY - _self.offsetT - top - 2
        const moveWidth = oEvent.pageX - _self.offsetL - left - 2

        if (moveHeight + 2 < document.body.clientHeight - _self.offsetT - top) {
          if (moveHeight >= _self.minHeight) {
            dom.style.height = moveHeight + 'px'
            _self.$emit('sizeChange', { height: moveHeight })
          }
        }

        if (moveWidth + 2 < document.body.clientWidth - _self.offsetL - left) {
          if (moveWidth >= _self.minWidth) {
            dom.style.width = moveWidth + 'px'
            _self.$emit('sizeChange', { width: moveWidth })
          }
        }

        document.onmouseup = function() {
          document.body.style.cursor = 'default'
          _self.$emit('sizeChangeLeave', {
            width: moveWidth,
            height: moveHeight,
          })
          document.onmousemove = null
          document.onmouseup = null
        }
      }
    },
    close() {
      this.isShow = false
    },
    stop() {},
  },
  beforeDestroy() {},
}
</script>

<style lang="scss" scoped>
@import '~/css/shared';
.m_dialog {
  position: absolute;
  box-shadow: 1px 3px 12px rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  top: 55px;
  left: 50px;
  z-index: 1003;
  background: #fff;
  & > i {
    position: absolute;
    z-index: 2;
  }
  .m_dialog_bart,
  .m_dialog_barb {
    width: 100%;
    height: 4px;
    left: -1px;
    right: -1px;
    cursor: n-resize;
  }
  .m_dialog_bart {
    top: -1px;
  }
  .m_dialog_barb {
    bottom: -1px;
  }
  .m_dialog_barl,
  .m_dialog_barr {
    width: 4px;
    height: 100%;
    top: -1px;
    bottom: -1px;
    cursor: e-resize;
  }
  .m_dialog_barl {
    left: -1px;
  }
  .m_dialog_barr {
    right: -1px;
  }
  .m_dialog_bar {
    width: 10px;
    height: 10px;
    right: -1px;
    bottom: -1px;
    cursor: nwse-resize;
  }
  .m_dialog_bar_top {
    width: 10px;
    height: 10px;
    left: -1px;
    top: -1px;
    cursor: nwse-resize;
  }
  .m_bar_disabled {
    cursor: default;
  }
  .m_dialog_content {
    width: 100%;
    height: 100%;
    .m_dialog_header {
      width: 100%;
      height: 33px;
      padding: 3px 19px 4px;
      margin-top: 1px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      cursor: move;
      .m_dialog_header_title {
        flex: 1;
      }
      .m_dialog_header_close {
        flex-shrink: 0;
        margin-left: 10px;
      }
    }
    .m_dialog_layout {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
}
</style>
