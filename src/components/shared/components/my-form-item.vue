<!--
 * @fileName: 基础form表单组件
 * @Date: 2021-02-25 11:29:15
 * @Author: manyao.zhu
-->

<template>
  <section class="m_form">
    <el-form class="m_rule_form" :model="form" :rules="rules" ref="baseForm" :label-width="labelWidth">
      <div v-for="(item, index) in formItems" :key="index" class="m_item_content" :style="{flex: item.oneLine ? '100% 0 1' : item.controlSiz ? controlSiz * 100 + '% 0 1' : 1/lineNum * 100 + '% 0 1'}">
        <el-form-item class="m_label_content" label="" :prop="item.prop">
          <span v-if="item.label" :class="[!item.enLabel ? 'm_zh_no' : '', item.required ? 'm_zh_required' : '']" class="m_zh_label" :style="{width: item.labelWidth ? item.labelWidth : labelWidth, left: item.labelWidth ? '-' + item.labelWidth : '-' + labelWidth}">{{ item.label }}</span>
          <span v-if="item.enLabel" class="m_en_label" :style="{width: item.labelWidth ? item.labelWidth : labelWidth, left: item.labelWidth ? '-' + item.labelWidth : '-' + labelWidth}">{{ item.enLabel }}</span>
          <!-- 文本 -->
          <template v-if="item.type === 'input'">
            <el-input 
              class="m_form_item_control" 
              :class="item.class"
              v-model="form[item.prop]"
              :readonly="item.readonly"
              :disabled="item.disabled"
              :minlength="item.minLength"
              :maxlength="item.maxLength"
              :clearable="item.clearable"
              :placeholder="item.placeholder ? item.placeholder : '请输入'"
              @change="formValueChange"
              >
            </el-input>
          </template>
          <!-- 数字输入框 -->
          <template v-if="item.type === 'number'">
            <el-input-number 
              class="m_form_item_control"
              :class="item.class"
              v-model="form[item.prop]"
              :readonly="item.readonly"
              :disabled="item.disabled"
              :size="item.size"
              :min="item.min"
              :max="item.max"
              :step="item.step ? item.step : 1"
              :precision="item.precision"
               @change="formValueChange"
            >
            </el-input-number>
          </template>
          <!-- 文本域 -->
          <template v-if="item.type === 'textarea'">
            <el-input
              class="m_form_item_control" 
              :class="item.class"
              :type="item.type"
              :rows="item.rows"
              v-model="form[item.prop]"
              :readonly="item.readonly"
              :disabled="item.disabled"
              :size="item.size"
              :clearable="item.clearable"
              :placeholder="item.placeholder ? item.placeholder : '请输入'"
              @change="formValueChange"
            >
            </el-input>
          </template>
          <!-- 日期 / 年 / 月 / 周 / 日期时间 / 日期范围 / 日期时间范围 / 月范围 -->
          <template 
            v-if="item.type === 'date' || 
            item.type === 'year' || 
            item.type === 'month' || 
            item.type === 'week' || 
            item.type === 'datetime' || 
            item.type === 'daterange' || 
            item.type === 'datetimerange' || 
            item.type === 'monthrange'"
          >
            <el-date-picker
              class="m_form_item_control" 
              :class="item.class"
              v-model="form[item.prop]"
              :disabled="item.disabled"
              :readonly="item.readonly"
              :clearable="item.clearable"
              :size="item.size"
              :type="item.type"
              :start-placeholder="item.startPlaceholder"
              :end-placeholder="item.endPlaceholder"
              :format="item.format"
              :align="item.align ? item.align : 'center'"
              :picker-options="item.pickerOptions"
              :placeholder="item.placeholder ? item.placeholder : '选择日期'"
              @change="formValueChange"
            >
            </el-date-picker>
          </template>
          <!-- 时间选择器 -->
          <template v-if="item.type === 'time'">
            <!-- 固定时间 -->
            <template v-if="item.pickerSelect">
              <el-time-select
                class="m_form_item_control" 
                :class="item.class"
                v-model="form[item.prop]"
                :disabled="item.disabled"
                :readonly="item.readonly"
                :clearable="item.clearable"
                :size="item.size"
                :format="item.format"
                :align="item.align ? item.align : 'center'"
                :picker-options="item.pickerSelect"
                :placeholder="item.placeholder ? item.placeholder : '选择日期'"
                @change="formValueChange"
              >
              </el-time-select>
            </template>
            <template v-else>
              <!-- 任意时间-->
              <el-time-picker
                class="m_form_item_control" 
                :class="item.class"
                v-model="form[item.prop]"
                :disabled="item.disabled"
                :readonly="item.readonly"
                :clearable="item.clearable"
                :size="item.size"
                :start-placeholder="item.startPlaceholder"
                :end-placeholder="item.endPlaceholder"
                :format="item.format"
                :align="item.align ? item.align : 'center'"
                :picker-options="item.pickerOptions"
                :placeholder="item.placeholder ? item.placeholder : '选择时间'"
                @change="formValueChange"
              >
              </el-time-picker>
            </template>
          </template>
          <!-- 时间段 -->
          <template v-if="item.type === 'timerange'">
            <el-time-picker
              class="m_form_item_control" 
              is-range
              :class="item.class"
              v-model="form[item.prop]"
              :disabled="item.disabled"
              :readonly="item.readonly"
              :clearable="item.clearable"
              :size="item.size"
              :start-placeholder="item.startPlaceholder"
              :end-placeholder="item.endPlaceholder"
              :format="item.format"
              :align="item.align ? item.align : 'center'"
              :picker-options="item.pickerOptions"
              :placeholder="item.placeholder ? item.placeholder : '选择时间'"
              @change="formValueChange"
            >
            </el-time-picker>
          </template>
        </el-form-item>
      </div>
    </el-form>
  </section>
</template>

<script>
  import _ from 'lodash'
  export default {
    name: 'MyFormItem',
    data() {
      return {
        form: {},
      }
    },
    props: {
      // 表单的配置信息
      formItems: {
        type: Array,
        default() {
          return []
        }
      },
      // 表单数据
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
    computed: {
      // 校验规则
      rules() {
        let rules = this.formItems.reduce((map, i) => {
          if (i.rules) {
            map[i.prop] = i.rules
          }
          return map
        }, {})
        return rules
      },
    },
    created() {
      this.initFormData(this.formData)
    },
    mounted() {
      // console.log(this.rules)
      // this.initFormData(this.formData)
    },
    methods: {
      // 初始化表单数据
      initFormData(val) {
        const form = _.cloneDeep(val)
        this.formItems.forEach( item => {
          switch (item.type) {
            case 'daterange': 
              this.initDateRange(item, form)
              break;
            case 'datetimerange':
              this.initDateRange(item, form)
              break;
            case 'monthrange':
              this.initDateRange(item, form)
              break;
            case 'timerange':
              this.initDateRange(item, form)
              break;
            default:
          }
        })
        this.form = form
        console.log(this.form)
      },

      formValueChange() {
        const form = _.cloneDeep(this.form)
        this.formItems.forEach( item => {
          switch (item.type) {
            case 'daterange': 
              this.getDateRange(item, form)
              break;
            case 'datetimerange': 
              this.getDateRange(item, form)
              break;
            case 'monthrange': 
              this.getDateRange(item, form)
              break;
            case 'timerange': 
              this.getDateRange(item, form)
              break;
            default:
          }
        })
        this.$emit('formChange', form)
      },
      
      // 时间范围的格式化渲染转换
      initDateRange(item, form) {
        let dateRange = []
        dateRange[0] = item.rangeDesc ? form[item.rangeDesc[0]] : ''
        dateRange[1] = item.rangeDesc ? form[item.rangeDesc[1]] : ''
        // 时间选择范围需要特殊处理，当其为空时，不能为数组
        if (!form[item.rangeDesc[0]] || !form[item.rangeDesc[1]]) {
          form[item.prop] = ''
          return
        }
        form[item.prop] = dateRange
      },

      // 时间范围的获取转换
      getDateRange(item, form) {
        let dateRange = form[item.prop]
        form[item.rangeDesc[0]] = dateRange ? dateRange[0] : ''
        form[item.rangeDesc[1]] = dateRange ? dateRange[1] : ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .m_form {
    width: 100%;
    .m_rule_form {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      .m_item_content {
        padding-left: 15px;
        .m_label_content {
          position: relative;
          .m_zh_label, .m_en_label {
            display: inline-block;
            position: absolute;
            height: 20px;
            line-height: 20px;
            top:0;
            text-align: right;
            z-index: 1;
            padding-right: 12px;
          }
          .m_zh_no {
            height: 40px;
            line-height: 40px;
          }
          .m_en_label {
            top: 20px
          }
          .m_zh_required::before {
            display: inline-block;
            content: '*';
            color: #F56C6C;
            margin-right: 4px;
          }
        }
        
        .m_form_item_control {
          width: 100%;
        }
        .tc {
          text-align: center;
        }
        .tl {
          text-align: left;
        }
        .tr {
          text-align: right;
        }
      }
      
    }
  }
</style>