<!--
 * @fileName: 
 * @Date: 2022-02-25 11:00:03
 * @Author: manyao.zhu
-->

<template>
  <section class="rich_text_content">
    <div class="m_text">
      <my-rich-text :edit="edit"></my-rich-text>
      <el-button @click="changeStatus">change</el-button>
    </div>
  </section>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      edit: false,
    }
  },
  methods: {
    changeStatus() {
      this.edit = !this.edit
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/css/shared';
.m_text {
  width: 100%;
}
</style>
