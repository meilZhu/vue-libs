<!--
 * @fileName: 上传的基础事件
 * @Date: 2021-03-22 11:43:19
 * @Author: manyao.zhu
-->

<template>
  <section class="m_upload">
    <template v-if="!needDialog">
      <el-upload
        ref="upload"
        class="upload-demo"
        :class="
          (limit === list.length && hideUploadBtn) || readonly
            ? 'upload-hidden'
            : ''
        "
        :drag="drag"
        :action="url"
        :headers="headers"
        :data="params"
        :name="name"
        :with-credentials="withCredentials"
        :show-file-list="showFileList"
        :accept="accept"
        :file-list="list"
        :auto-upload="autoUpload"
        :http-request="httpRequest"
        :list-type="listType"
        :multiple="multiple"
        :disabled="disabled"
        :limit="limit"
        :on-success="onSuccess"
        :before-upload="beforeUpload"
        :on-remove="onRemove"
        :on-change="onChange"
      >
        <i
          v-if="autoUpload"
          class="fa upload-btn"
          :class="[icon, drag ? 'm_upload_icon' : '']"
          aria-hidden="true"
        ></i>
        <i
          v-if="!autoUpload"
          slot="trigger"
          class="fa upload-btn"
          :class="[icon, drag ? 'm_upload_icon' : '']"
          aria-hidden="true"
        ></i>
        <el-button
          v-if="!autoUpload && list.length"
          type="primary"
          size="mini"
          @click="manualUpload"
          >手动上传</el-button
        >
        <div v-if="drag" class="el-upload__text">
          将文件拖到此处，或<em>点击上传</em>
        </div>

        <!-- 上传的背景 -->
        <div
          v-if="listType === 'picture-card'"
          slot="file"
          slot-scope="{ file }"
        >
          <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
          <span class="el-upload-list__item-actions">
            <span
              class="el-upload-list__item-preview"
              @click="handlePictureCardPreview(file)"
            >
              <i class="el-icon-zoom-in"></i>
            </span>
            <span
              class="el-upload-list__item-delete"
              @click="handleDownload(file)"
            >
              <i class="el-icon-download"></i>
            </span>
            <span
              class="el-upload-list__item-delete"
              @click="handleRemove(file)"
            >
              <i class="el-icon-delete"></i>
            </span>
          </span>
        </div>
      </el-upload>
    </template>

    <template v-else> </template>

    <!-- 图片的展示 -->
    <el-dialog :visible.sync="picatureVisible" width="35%">
      <img width="100%" :src="pictureImageUrl" alt="" />
    </el-dialog>
  </section>
</template>

<script>
export default {
  name: 'MyUpload',
  data() {
    return {
      picatureVisible: false,
      pictureImageUrl: null,
      isLoading: false,
    }
  },
  computed: {
    list: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
  props: {
    // 是否需要弹窗上传
    needDialog: {
      type: Boolean,
      default: false,
    },
    // 是否可以拖拽上传
    drag: {
      type: Boolean,
      default: false,
    },
    // 请求接口
    url: {
      type: String,
      default: '',
    },
    // 请求头设置
    headers: {
      type: Object,
      default() {
        return {}
      },
    },
    // 请求的额外参数
    params: {
      type: Object,
      default() {
        return {}
      },
    },
    // 上传文件字段名
    name: {
      type: String,
      default: 'file',
    },
    // 支持发送cookie凭证信息
    withCredentials: {
      type: Boolean,
      default: false,
    },
    // 是否显示已上传文件列表
    showFileList: {
      type: Boolean,
      default: true,
    },
    accept: {
      type: String,
    },
    // 是否支持多个上传
    multiple: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: 'fa-upload',
    },
    // 上传的文件列表
    value: {
      type: Array,
      default() {
        return []
      },
    },
    // 是否选择文件后就立即上传
    autoUpload: {
      type: Boolean,
      default: false,
    },
    // 文件列表的类型
    listType: {
      type: String, // text / picture / picture-card
      default: 'picture-card',
    },
    // 覆盖默认的上传行为，可以自定义上传的实现
    httpRequest: {
      type: Function,
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 最大限制
    limit: {
      type: Number,
      default: 3,
    },
    // 是否在上传按钮达到最大限制时, 隐藏按钮
    hideUploadBtn: {
      type: Boolean,
      default: true,
    },
    // 是否只读
    readonly: {
      type: Boolean,
      default: false,
    },
    // 上传文件最大尺寸
    maxSize: {
      type: Number,
      default: 10,
    },
    // 上传最大尺寸的单位
    unit: {
      type: String,
      default: 'M', // 可选 KB / M
    },
  },
  methods: {
    // 展示
    handlePictureCardPreview(file) {
      this.picatureVisible = true
      this.pictureImageUrl = file.url
    },

    // 下载
    handleDownload(file) {
      const tempa = document.createElement('a')
      tempa.style.display = 'none'
      tempa.href = file.url
      tempa.download = file.name
      document.body.appendChild(tempa)
      tempa.click()
      document.body.removeChild(tempa)
    },

    // 删除
    handleRemove(file) {
      const index = this.list.findIndex((it) => {
        if (it) {
          return it.uid === file.uid
        }
      })
      if (index !== -1) {
        this.list.splice(index, 1)
        this.$emit('remove', file)
        this.$emit('change')
      }
    },

    // 立即上传后成功之后
    onSuccess(res, file, fileList) {
      if (res.result_code !== 'success') {
        return this.$message.error(res.debug_msg || '上传失败')
      }

      this.$message.success('上传成功')

      this.list = fileList
      this.$emit('success')
    },

    beforeUpload(file) {
      if (this.unit === 'M') {
        if (file.size > this.maxSize * 1024 * 1024) {
          this.$message.warning(`上传的文件不能大于${this.maxSize}${this.unit}`)
          return false
        }
      }
      if (this.unit === 'KB' || this.unit === 'K') {
        if (file.size > this.maxSize * 1024) {
          this.$message.warning(`上传的文件不能大于${this.maxSize}${this.unit}`)
          return false
        }
      }

      this.isLoading = true
      return true
    },

    // 删除事件
    onRemove(file, list) {
      this.list = list
      this.$emit('remove', file)
      this.$emit('change')
    },

    onChange(file, fileList) {
      console.log(fileList)
      this.list = fileList
      this.$emit('change')
    },

    // 手动上传
    manualUpload() {
      this.$refs.upload.submit()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../theme-chalk/variable';
.fa {
  color: $themeColor;
}
.upload-btn {
  display: block;
  margin-right: 10px;
}
/deep/ .upload-hidden {
  .upload-btn {
    display: none;
  }
}
.m_upload_icon {
  font-size: 40px;
  margin-top: 55px;
}
</style>
