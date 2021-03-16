<!--
 * @fileName: 头部检索表单
 * @Date: 2021-03-03 17:32:55
 * @Author: manyao.zhu
-->

<template>
  <section class="m_form_search">
    <div class="m_search_form_content" :class="collapsed ? 'm_search_form_content_collapsed' : ''">
      <my-form-item :formItems="searchItems" :formData="form" :labelWidth='labelWidth' :lineNum="lineNum" @formChange="formChange"></my-form-item>
    </div>
    <div class="m_search_btn_content">
      <el-button icon="el-icon-refresh" @click="reset">{{ $t('reset') }}</el-button>
      <el-button type="primary" icon="el-icon-search" @click="search">{{ $t('search') }}</el-button>
      <span class="m_search_exchange" @click="collapsed = !collapsed">{{collapsed ? $t('open') : $t('close') }} <i class="fa fa-angle-down" :class="collapsed ? 'm_search_exchange_collased' : ''"></i></span>
    </div>
  </section>
</template>

<script>
  import { isArray } from '@styleofpicasso/utils' 
  import _ from 'lodash'
  export default {
    name: 'MyForm',
    data() {
      return {
        form: {},
        collapsed: false
      }
    },
    props: {
      searchItems: {
        type: Array,
        default() {
          return []
        }
      },
      formData: {
        type: Object,
        default() {
          return {}
        }
      },
      // label 的宽度
      labelWidth: {
        type: String,
        default: '100px'
      },
      // 一行占几个
      lineNum: {
        type: Number,
        default: 3
      },
      // 重置时调用检索接口 (也就是组件内部初始化表单数据【当有初始化默认值时，需要在外部重置】)
      isResetSearch: {
        type: Boolean,
        default: true
      }
    },
    watch: {
      formData: {
        handler: function(val) {
          this.initFormData(val)
        },
        deep: true
      } 
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
      formChange(item) {
        this.$emit('formChange', item)
      },

      // 重置
      reset() {
        if (this.isResetSearch) {
          Object.keys(this.form).forEach( key => {
            if (isArray(this.form[key])) {
              this.form[key] = ''
            } else {
              this.form[key] = null
            }
          })
          this.search()
        }
        this.$emit('reset', this.form)
      },

      // 搜索
      search() {
        this.$emit('search', this.form)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~/css/shared.scss';
  .m_form_search {
    width: 100%;
    .m_search_form_content {
      width: 100%;
      height: auto;
      transition: all .5s;
    }
    .m_search_form_content_collapsed {
      height: 62px;
      overflow: hidden;
    }
    .m_search_btn_content {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      .m_search_exchange {
        display: inline-block;
        width: 89px;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        color: $fontColor;
        cursor: pointer;
        .fa {
          margin-left: 5px;
          font-size: 16px;
          transition: all .3s;
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