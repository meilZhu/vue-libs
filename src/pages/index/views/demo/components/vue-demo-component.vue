<!--
 * @fileName: 
 * @Date: 2021-03-25 17:34:31
 * @Author: manyao.zhu
-->

<template>
  <div class="component" v-if="show">
    <button class="btn" @click='close'>我是内部组件</button>
    <!-- <input type="text" v-model="text" style='border: 1px #ccc solid; height: 32px;'> -->
    <slot name="detail-name" :title="title"></slot>
    <slot :user="user"></slot>
  </div>
</template>

<script>
export default {
  name: 'VueDemoComponent',
  data() {
    return {
      title: '我是具名插槽',
      user: '我是默认插槽'
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    // value: {
    //   type: [String, Number],
    //   default: null
    // }
    text: {
      type: [Number, String],
      default: null
    }
  },
  computed: {
    // text: {
    //   get() {
    //     return this.value
    //   },
    //   set(val) {
    //     this.$emit('input', val)
    //   }
    // }
  },
  methods: {
    close() {
      // this.$emit('show', false)
      // this.isShow = false
      // this.text++
      this.$emit('update:show', false)
    }
  }
}
</script>

<style lang="scss" scoped>
  .component {
    height: 300px;
    background: chartreuse;
  }
</style>