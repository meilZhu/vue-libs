/*
 * @fileName: 基础表格以及检索页面的基础数据
 * @Date: 2021-06-18 13:52:18
 * @Author: manyao.zhu
 */

export default {
  data() {
    return {
      formData: {}, // 检索表单数据
      tableData: []  // 表格数据
    }
  },
  methods: {
    // 检索事件
    search(form) {
      this.pageService.getTableData(form).then(res => {
        console.log(res);
      }).catch( err => {
        this.$message.error(err.message)
      })
    }
  }
}