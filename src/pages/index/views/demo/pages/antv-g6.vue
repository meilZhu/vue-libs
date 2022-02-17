<!--
 * @fileName: antV G6的使用demo
 * @Date: 2021-10-27 15:34:42
 * @Author: manyao.zhu
-->
<template>
  <section class="content">
    <div class="antv" id="antvNode"></div>
  </section>
</template>

<script>
import G6 from '@antv/g6'
export default {
  name: 'AntvG6',
  data() {
    return {
      graph: null,
    }
  },
  methods: {
    // 初始化配置信息
    initG6() {
      this.graph = new G6.TreeGraph({
        ...this.defaultConf(),
      })
    },

    // 默认的树形结构的配置
    defaultConf() {
      const container = document.querySelector('#antvNode'),
        width = container.clientWidth,
        height = container.clientHeight

      return {
        container: 'antvNode',
        width,
        height,
        fitView: true,
        fitViewPadding: 10,
        modes: {
          default: ['drag-canvas', 'zoom-canvas', 'drag-node'],
        },
        // renderer: 'svg',
        layout: {
          type: 'CompactBox',
          direction: 'LR',
          getHGap: () => {
            return 100
          },
          getVGap: () => {
            return 60
          },
        },
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  .antv {
    width: 100%;
    height: 100%;
  }
}
</style>
