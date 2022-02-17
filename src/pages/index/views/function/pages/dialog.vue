<!--
 * @fileName: 
 * @Date: 2022-01-30 09:48:28
 * @Author: manyao.zhu
-->
<template>
  <section class="m_dialog_page">
    <my-dialog
      v-model="showDialog"
      :browseWidth="contentWidth"
      :browseHeight="contentHeight"
      :offsetT="66"
      :offsetL="left"
    >
      <template v-slot:content>
        <div class="content">这个是内容</div>
      </template>
    </my-dialog>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: '',
  data() {
    return {
      contentWidth: 0,
      contentHeight: 0,
      showDialog: true,
    }
  },
  computed: {
    ...mapState(['routerConfig']),
    left() {
      return this.routerConfig.menuWidth
    },
  },
  watch: {
    'routerConfig.collapsed'() {
      this.handleSize()
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleSize)
    this.handleSize()
  },
  methods: {
    handleSize() {
      setTimeout(() => {
        const dom = this.$el
        this.contentWidth = dom.clientWidth + 40
        this.contentHeight = dom.clientHeight + 72
      }, 500)
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleSize)
  },
}
</script>

<style lang="scss" scoped>
@import '~/css/shared';
.m_dialog_page {
  width: 100%;
  height: 100%;
}
</style>
