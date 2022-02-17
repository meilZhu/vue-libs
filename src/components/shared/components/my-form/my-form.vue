<!--
 * @fileName: 头部表单检索表单
 * @Date: 2021-03-03 17:32:55
 * @Author: manyao.zhu
-->

<template>
  <section class="m_form_search">
    <div
      class="m_search_form_content"
      :class="collapsed ? 'm_search_form_content_collapsed' : ''"
    >
      <my-form-item
        ref="myFormItem"
        :formItems="searchItems"
        :formData="form"
        :labelWidth="labelWidth"
        :lineNum="lineNum"
        @formClear="formClear"
        @formChange="formChange"
      >
        <template v-for="item in searchItems">
          <template v-if="item.slot">
            <template :slot="item.prop">
              <slot :name="item.prop"></slot>
            </template>
          </template>
        </template>
      </my-form-item>
    </div>
    <div class="m_search_btn_content">
      <span>
        <slot name="btn"></slot>
      </span>
      <span>
        <el-button icon="el-icon-refresh" @click="reset">{{
          $t('reset')
        }}</el-button>
        <el-button type="primary" icon="el-icon-search" @click="search">{{
          $t('search')
        }}</el-button>
        <span
          class="m_search_exchange"
          v-if="showCollapsed"
          @click="collapsed = !collapsed"
          >{{ collapsed ? $t('open') : $t('close') }}
          <i
            class="fa fa-angle-down"
            :class="collapsed ? 'm_search_exchange_collased' : ''"
          ></i
        ></span>
      </span>
    </div>
  </section>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'MyForm',
  data() {
    return {
      form: {},
      collapsed: true,
      refsForm: null,
    }
  },
  props: {
    searchItems: {
      type: Array,
      default() {
        return []
      },
    },
    formData: {
      type: Object,
      default() {
        return {}
      },
    },
    // label 的宽度
    labelWidth: {
      type: String,
      default: '100px',
    },
    // 一行占几个
    lineNum: {
      type: Number,
      default: 3,
    },
    // 重置时调用检索接口 (也就是组件内部初始化表单数据【当有初始化默认值时，需要在外部重置】)
    isResetSearch: {
      type: Boolean,
      default: false,
    },
    // 是否展示 展开/收起按钮
    showCollapsed: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    formData: {
      handler: function(val) {
        this.initFormData(val)
      },
      deep: true,
    },
  },
  created() {
    this.initFormData(this.formData)
  },
  methods: {
    // 初始化数据
    initFormData(form) {
      this.form = _.cloneDeep(form)
    },

    // 表单更改
    formChange(item, refs) {
      this.form = item
      this.refsForm = refs
      this.$emit('formChange', item)
    },

    formClear(item) {
      this.$emit('fromClear', item)
    },

    // 重置
    reset() {
      this.refsForm.resetFields()
      this.form = { ...this.$refs.myFormItem.form }
      this.handleResetData()

      if (this.isResetSearch) {
        this.search()
      }
      this.$emit('reset', this.form)
    },

    // 搜索
    search() {
      this.refsForm.validate((valid) => {
        if (valid) {
          this.$emit('search', this.form)
        }
      })
    },

    // 重置后之后对数据的处理
    handleResetData() {
      const form = this.form
      this.searchItems.forEach((item) => {
        switch (item.type) {
          case 'daterange':
            this.getDateRange(item, form)
            break
          case 'datetimerange':
            this.getDateRange(item, form)
            break
          case 'monthrange':
            this.getDateRange(item, form)
            break
          case 'timerange':
            this.getDateRange(item, form)
            break
          default:
        }
      })
    },

    // 时间范围的获取转换
    getDateRange(item, form) {
      let dateRange = form[item.prop]
      dateRange = dateRange && dateRange.length === 2 ? dateRange : []

      form[item.rangeDesc[0]] = dateRange.length > 0 ? dateRange[0] : ''
      form[item.rangeDesc[1]] = dateRange.length > 0 ? dateRange[1] : ''

      form[item.prop] = dateRange
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../theme-chalk/variable';
.m_form_search {
  width: 100%;
  .m_search_form_content {
    width: 100%;
    height: auto;
    transition: all 0.5s;
  }
  .m_search_form_content_collapsed {
    height: 50px;
    overflow: hidden;
  }
  .m_search_btn_content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .m_search_exchange {
      display: inline-block;
      width: 89px;
      height: $smallButtonHeight;
      line-height: $smallButtonHeight;
      font-size: 14px;
      color: $fontColor;
      cursor: pointer;
      text-align: center;
      .fa {
        margin-left: 5px;
        font-size: 16px;
        transition: all 0.3s;
      }
      .m_search_exchange_collased {
        transform: rotateZ(180deg);
      }
    }
    .m_search_exchange:hover {
      color: $themeColor;
    }
  }
}
</style>
