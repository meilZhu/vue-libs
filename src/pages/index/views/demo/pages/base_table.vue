<!--
 * @fileName: 
 * @Date: 2021-06-18 14:15:12
 * @Author: manyao.zhu
-->
<template>
  <section class="table">
    <my-form
      :searchItems="searchItems"
      :formData="formData"
      @search="search"
    ></my-form>

    <my-table :colData="colData" :tableData="tableData" :showCheckbox="true">
      <template v-slot:opr="scope">
        <i
          class="fa fa-pencil-square-o"
          @click="edit(scope.row, scope.rowIndex)"
        ></i>
        <i
          class="fa fa-trash"
          style="margin-left: 10px;"
          @click="remove(scope.row, scope.rowIndex)"
        ></i>
      </template>
    </my-table>

    <el-upload
      class="upload-file-button"
      ref="uploadfile"
      :action="url"
      :data="extraData"
      :before-upload="beforeUpload"
      accept=".xlsx, .xls"
      :file-list="fileList"
      :on-progress="onProgress"
      :on-success="onSuccess"
    >
      <el-button slot="trigger" size="small" type="primary">上传文件</el-button>
    </el-upload>

    <el-button type="primary" @click="createIndexedDB">创建indexedDB</el-button>
  </section>
</template>

<script>
import { BaseTable } from '~/shared/mixin'
import { searchItems, colData, tableData } from '../config/base_table'
import { demoAPI } from '../../../shared/client'

import IdxDB from '@styleofpicasso/indexdb'
export default {
  name: 'BaseTable',
  data() {
    return {
      searchItems,
      formData: {
        program: 'EC6 G1.1',
        offset: 0,
        limit: 100,
      },
      colData,
      pageService: demoAPI,
      url: '/swan/v1/in/mp/upload',
      fileList: [],
      extraData: {
        component_id: '1',
        user_id: '20005',
      },
      indexdb: null,
      tableData,
    }
  },
  mixins: [BaseTable],
  mounted() {
    console.log(BaseTable)
  },
  methods: {
    beforeUpload(file) {
      if (file.size > 100 * 1024 * 1024) {
        return false
      }
      this.errorList = []
      if (!this.extraData.component_id) {
        this.$message.warning('请选择Component')
        return false
      }
      this.loading = true
      return true
    },
    onProgress(event, file) {
      this.fileList = [file]
    },
    onSuccess({ result_code = '', message, data = {} }) {
      this.loading = false
      if (result_code !== 'success') {
        return this.$message.error(message || '上传失败')
      }
      this.errorList = data.reasons
      if (data.success) {
        this.$message.success('上传成功')
        this.$emit('onRefresh')
        if (this.errorList.length === 0) {
          this.isShow = false
        }
      }
    },
    httpRequest(param) {
      console.log(param)
      const formdata = new FormData()
      formdata.append('file', param.file)
      formdata.append('component_id', param.data.component_id)
      formdata.append('user_id', param.data.user_id)
      // swanAPI.uploadPoint(param.action, formdata).then( res => {
      //   console.log(res);
      // })
    },

    createIndexedDB() {
      this.indexdb = new IdxDB('styleofpicasso', 'client', 'id', [
        { name: 'name', prop: 'name', conf: { unique: false } },
      ])
      this.indexdb.create(() => {
        console.log('创建成功')
      })
    },

    edit(item, index) {
      console.log(item)
      console.log(index)
    },

    // 测试删除时间
    remove(item, index) {
      this.tableData.splice(index, 1)
      console.log(item)
      console.log(index)
    },
  },
}
</script>

<style lang="scss" scoped></style>
