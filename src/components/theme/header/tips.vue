<!--
 * @fileName: 提示信息组件
 * @Date: 2021-01-26 14:00:36
 * @Author: manyao.zhu
-->
<template>
  <section class="m_tips">
    <el-badge :value="message.length" :max="99" class="item">
      <span @click="showMessage">{{ $t('message') }}</span>
    </el-badge>

    <el-dialog
      :title="$t('message')"
      :visible.sync="messageDialog"
      width="30%"
      :modal="false"
      :modal-append-to-body="false"
      :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="messageDialog = false">取 消</el-button>
        <el-button type="primary" @click="messageDialog = false">确 定</el-button>
      </span>
    </el-dialog>
  </section>
</template>

<script>
  export default {
    name: 'Tips',
    data() {
      return {
        messageDialog: false,
        message: []
      }
    },
    methods: {
      showMessage() {
        this.messageDialog = true
      },

      handleClose() {
        this.messageDialog = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .m_tips {
    margin-right: 20px;
    cursor: pointer;
  }
</style>