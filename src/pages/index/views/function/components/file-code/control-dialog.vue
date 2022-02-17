<!--
 * @fileName: 
 * @Date: 2022-01-24 15:56:39
 * @Author: manyao.zhu
-->
<template>
  <el-dialog
    title="属性操作"
    :visible.sync="isShow"
    width="50%"
    :before-close="handleClose"
  >
    <div class="m_control_dialog">
      <my-form :formItems="formItem"></my-form>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="handleClose">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
  props: {
    value: {
      type: Boolean,
    },
  },
  watch: {
    value(val) {
      console.log(val)
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
  },
  methods: {
    handleClose() {
      this.isShow = false
      this.$emit('controlCancel')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/css/shared';
/deep/ .el-dialog__body {
  padding: 10px 20px;
}
.m_control_dialog {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>
