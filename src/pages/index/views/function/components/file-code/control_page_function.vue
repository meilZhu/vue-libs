<!--
 * @fileName: 添加功能分区
 * @Date: 2022-01-26 16:48:12
 * @Author: manyao.zhu
-->
<template>
  <el-dialog
    :title="title"
    class="m_control_page_function"
    :visible.sync="isShow"
    width="450px"
    :before-close="handleClose"
  >
    <ul class="m_type_content">
      <li class="m_type_item">
        <span class="m_type_label">功能分区描述：</span>
        <el-input
          class="m_type_value"
          v-model="controlDesc"
          placeholder="请输入该功能分区描述"
        ></el-input>
      </li>
      <li class="m_type_item">
        <span class="m_type_label">功能分区编码：</span>
        <el-input
          class="m_type_value"
          :disabled="type !== 'add'"
          v-model="controlCode"
          placeholder="请输入位移标识; 进识别字母"
        ></el-input>
      </li>
      <li class="m_type_item">
        <span class="m_type_label">是否需要标题：</span>
        <el-radio-group v-model="needTitle">
          <el-radio :label="true">需要</el-radio>
          <el-radio :label="false">不需要</el-radio>
        </el-radio-group>
      </li>
      <li class="m_type_item">
        <span class="m_type_label">功能标题：</span>
        <el-input class="m_type_value" v-model="controlTitle"></el-input>
      </li>
      <li class="m_type_item">
        <span class="m_type_label">功能类型：</span>
        <el-select class="m_type_value" v-model="control" clearable>
          <el-option
            v-for="item in allControl"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          ></el-option>
        </el-select>
      </li>
    </ul>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button
        type="primary"
        :disabled="!control || !controlCode || (needTitle && !controlTitle)"
        @click="sure"
        >确 定</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
import CODE_CONFIG from '../../config/create-file-code'
export default {
  name: '',
  props: {
    value: {
      type: Boolean,
    },
    type: {
      type: String,
      default: 'add',
    },
    item: {
      type: Object,
      default() {
        return {}
      },
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
    title() {
      return this.type === 'add' ? '新增功能分区' : '编辑功能分区'
    },
  },
  watch: {
    isShow: {
      handler: function(val) {
        if (val) {
          if (this.type === 'edit') {
            this.controlTitle = this.item.controlTitle
            this.control = this.item.control
            this.needTitle = this.item.needTitle
            this.controlCode = this.item.controlCode
            this.controlDesc = this.item.controlDesc
          } else {
            this.controlTitle = null
            this.control = null
            this.needTitle = false
            this.controlCode = null
            this.controlDesc = null
          }
        }
      },
      deep: true,
    },
  },
  data() {
    return {
      controlTitle: null, // 功能分区的title
      control: null, // 功能分区的类型
      needTitle: false, // 功能分区是否需要标题
      controlCode: null, // 功能分区的唯一标识
      allControl: CODE_CONFIG.allControl,
      controlDesc: null,
    }
  },
  methods: {
    handleClose() {
      this.isShow = false
    },

    sure() {
      if (!/^[a-zA-Z]+$/.test(this.controlCode)) {
        return this.$message.warning('功能分区的code只能是字母类型！')
      }
      const obj = {
        controlTitle: this.controlTitle,
        control: this.control,
        needTitle: this.needTitle,
        controlCode: this.controlCode,
        controlDesc: this.controlDesc,
      }
      this.$emit('functionPartition', obj)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/css/shared';

.m_type_content {
  width: 100%;
  margin-bottom: 10px;
  .m_type_item {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    .m_type_label {
      width: 100px;
      flex-shrink: 0;
      margin-right: 5px;
      text-align: right;
    }
    .m_type_value {
      width: 100%;
    }
  }
}
</style>
