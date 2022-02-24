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
        :on-error="onError"
        :before-upload="beforeUpload"
        :on-change="onChange"
        :on-remove="onRemove"
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
          class="m_active_btn"
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

    <template v-else>
      <i
        class="fa fa-upload m_upload_file"
        :class="
          (limit === list.length && hideUploadBtn) || readonly
            ? 'm_hidden_upload_file_btn'
            : ''
        "
        @click="showUploadDialog = true"
      ></i>
      <div class="m_upload_list_content">
        <ul class="m_upload_list_text" v-if="listType === 'text'">
          <li class="m_upload_item" v-for="(item, index) in list" :key="index">
            {{ item.name }}
            <i class="m_upload_item_remove fa fa-times"></i>
          </li>
        </ul>
        <ul class="m_upload_list_picture" v-if="listType === 'picture'">
          <li class="m_upload_item" v-for="(file, index) in list" :key="index">
            <div class="m_upload_item_picture">
              <img class="m_upload_item_image" :src="file.url" alt="" />
              <span class="m_upload_item_text">{{ file.name }}</span>
            </div>
            <i class="m_upload_item_remove fa fa-times"></i>
          </li>
        </ul>
        <ul class="m_upload_list_image" v-if="listType === 'picture-card'">
          <li class="m_upload_item" v-for="(file, index) in list" :key="index">
            <img class="m_upload_item_image" :src="file.url" alt="" />
            <span class="m_upload_item_actions_content">
              <span class="m_upload_item_actions">
                <span
                  class="m_upload_item_actions_opr"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  class="m_upload_item_actions_opr"
                  @click="handleDownload(file)"
                >
                  <i class="el-icon-download"></i>
                </span>
                <span
                  class="m_upload_item_actions_opr"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </span>
          </li>
        </ul>
      </div>
      <el-dialog
        title="选择文件"
        :visible.sync="showUploadDialog"
        width="30%"
        :before-close="handleClose"
      >
        <el-upload
          ref="upload"
          class="m_upload_demo"
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
          :on-error="onError"
          :before-upload="beforeUpload"
          :on-change="onChange"
          :on-remove="onRemove"
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
            class="m_active_btn"
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
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url"
              alt=""
            />
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
        <span slot="footer" class="dialog-footer">
          <el-button @click="handleClose">取 消</el-button>
          <el-button type="primary" @click="handleSubmit">确 定</el-button>
        </span>
      </el-dialog>
    </template>

    <!-- 图片的展示 -->
    <el-dialog :visible.sync="picatureVisible" width="35%">
      <img width="100%" :src="pictureImageUrl" alt="" />
    </el-dialog>
  </section>
</template>

<script>
// import { cloneDeep } from 'lodash'
export default {
  name: 'MyUpload',
  data() {
    return {
      picatureVisible: false,
      pictureImageUrl: null,
      isLoading: false,

      showUploadDialog: false,
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
    onSuccess(res) {
      if (res.result_code !== 'success') {
        return this.$message.error(res.debug_msg || '上传失败')
      }

      this.$message.success('上传成功')

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

    // 上传失败
    onError(err, file, fileList) {
      this.list = fileList
    },

    onChange(file, fileList) {
      console.log(file)
      if (file.status === 'ready') {
        this.list = fileList
      }

      if (file.status === 'success') {
        const list = []
        fileList.forEach((item) => {
          if (item.response.result_code === 'success') {
            list.push(item)
          }
        })
        this.list = list
        this.$emit('change')
      }
    },

    // 手动上传
    manualUpload() {
      this.$refs.upload.submit()
    },

    // 关闭弹窗
    handleClose() {
      this.showUploadDialog = false
      this.handleRemoveFile()
    },

    // 弹窗的确定事件
    handleSubmit() {
      this.showUploadDialog = false
      this.handleRemoveFile()
    },

    // 清除没有真正上传的文件
    handleRemoveFile() {
      // const list = []
      // const arr = cloneDeep(this.list)
      // arr.forEach((item) => {
      //   if (!item.status || item.status === 'success') {
      //     list.push(item)
      //   }
      // })
      // this.list = list
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../theme-chalk/variable';
.fa {
  color: $themeColor;
}
.m_active_btn {
  margin-left: 10px;
  height: 25px;
}
.m_upload {
  width: 100% !important;
  .upload-demo {
    width: 100%;
  }
}
/deep/ .upload-hidden {
  .el-upload {
    display: none;
  }
}
.m_upload_icon {
  font-size: 40px;
  margin-top: 55px;
}

.m_upload_demo {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.m_upload_file {
  display: block;
  height: 28px;
  line-height: 28px;
}
.m_hidden_upload_file_btn {
  display: none;
}

/* 图片列表的样式 */
.m_upload_list_picture {
  width: 100%;
  .m_upload_item {
    flex: 1;
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #c0ccda;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-top: 10px;
    padding: 10px;
    height: 90px;
    position: relative;
    flex: 1;
    .m_upload_item_picture {
      display: inline-flex;
      width: 100%;
      height: 100%;
      .m_upload_item_image {
        width: 70px;
        height: 70px;
        margin-right: 10px;
      }
      .m_upload_item_text {
        flex: 1;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .m_upload_item_remove {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 14px;
    }
  }
}

/* 卡片类型的列表 */
.m_upload_list_image {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .m_upload_item {
    width: 148px;
    height: 148px;
    border-radius: $middleRadius;
    border: 1px solid #c0ccda;
    margin: 0 8px 8px 0;
    display: inline-block;
    overflow: hidden;
    background: #fff;
    position: relative;
    .m_upload_item_image {
      width: 100%;
    }
    .m_upload_item_actions_content {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: rgba(0, 0, 0, 0.4);
      display: none;
      .m_upload_item_actions {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .m_upload_item_actions_opr {
          margin: 0 8px;
          color: #fff;
          font-size: 18px;
          cursor: pointer;
        }
      }
    }
  }
  .m_upload_item:hover {
    .m_upload_item_actions_content {
      display: block;
    }
  }
}
</style>
