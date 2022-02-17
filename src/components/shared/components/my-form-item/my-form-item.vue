<!--
 * @fileName: 基础form表单组件
 * @Date: 2021-02-25 11:29:15
 * @Author: manyao.zhu
-->

<template>
  <el-form
    class="m_rule_form"
    :model="form"
    :rules="rules"
    ref="baseForm"
    :label-width="labelWidth"
  >
    <div
      v-for="(item, index) in formItems"
      :key="index"
      class="m_item_content"
      :style="{
        flex: item.oneLine
          ? '100% 0 1'
          : item.controlSize
          ? item.controlSize * 100 + '% 0 1'
          : (1 / lineNum) * 100 + '% 0 1',
      }"
    >
      <template v-if="item.slot">
        <el-form-item class="m_label_content" label="" :prop="item.prop">
          <span
            v-if="item.label"
            :class="[
              !item.enLabel ? 'm_zh_no' : '',
              item.required ? 'm_zh_required' : '',
            ]"
            class="m_zh_label"
            :style="{
              width: item.labelWidth ? item.labelWidth : labelWidth,
              left: item.labelWidth ? '-' + item.labelWidth : '-' + labelWidth,
            }"
            >{{ item.label }}</span
          >
          <span
            v-if="item.enLabel"
            class="m_en_label"
            :style="{
              width: item.labelWidth ? item.labelWidth : labelWidth,
              left: item.labelWidth ? '-' + item.labelWidth : '-' + labelWidth,
            }"
            >{{ item.enLabel }}</span
          >
          <slot :name="item.prop"></slot>
        </el-form-item>
      </template>
      <template v-else>
        <el-form-item class="m_label_content" label="" :prop="item.prop">
          <span
            v-if="item.label"
            :class="[
              !item.enLabel ? 'm_zh_no' : '',
              item.required ? 'm_zh_required' : '',
            ]"
            class="m_zh_label"
            :style="{
              width: item.labelWidth ? item.labelWidth : labelWidth,
              left: item.labelWidth ? '-' + item.labelWidth : '-' + labelWidth,
            }"
            >{{ item.label }}</span
          >
          <span
            v-if="item.enLabel"
            class="m_en_label"
            :style="{
              width: item.labelWidth ? item.labelWidth : labelWidth,
              left: item.labelWidth ? '-' + item.labelWidth : '-' + labelWidth,
            }"
            >{{ item.enLabel }}</span
          >
          <!-- 文本 -->
          <template v-if="item.type === 'input'">
            <el-input
              class="m_form_item_control"
              :class="item.class"
              :key="item.prop"
              v-model="form[item.prop]"
              :readonly="item.readonly"
              :disabled="item.disabled"
              :minlength="item.minLength"
              :maxlength="item.maxLength"
              :size="item.size"
              :clearable="item.clearable"
              :placeholder="item.placeholder ? item.placeholder : '请输入'"
              @change="formValueChange"
              @clear="formClear(item)"
            >
            </el-input>
          </template>
          <!-- 数字输入框 -->
          <template v-if="item.type === 'number'">
            <el-input-number
              class="m_form_item_control"
              :key="item.prop"
              :class="item.class"
              v-model="form[item.prop]"
              :readonly="item.readonly"
              :disabled="item.disabled"
              :size="item.size"
              :min="item.min"
              :max="item.max"
              :controls="item.controls || true"
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
              :key="item.prop"
              :class="item.class"
              :type="item.type"
              :rows="item.rows || 3"
              v-model="form[item.prop]"
              :readonly="item.readonly"
              :minlength="item.minLength"
              :maxlength="item.maxLength"
              :disabled="item.disabled"
              :size="item.size"
              :clearable="item.clearable"
              :placeholder="item.placeholder ? item.placeholder : '请输入'"
              @change="formValueChange"
              @clear="formClear(item)"
            >
            </el-input>
          </template>
          <!-- 日期 / 年 / 月 / 周 / 日期时间 / 日期范围 / 日期时间范围 / 月范围 -->
          <template
            v-if="
              item.type === 'date' ||
                item.type === 'year' ||
                item.type === 'month' ||
                item.type === 'week' ||
                item.type === 'datetime' ||
                item.type === 'daterange' ||
                item.type === 'datetimerange' ||
                item.type === 'monthrange' ||
                item.type === 'dates'
            "
          >
            <el-date-picker
              class="m_form_item_control"
              :class="item.class"
              v-model="form[item.prop]"
              :key="item.prop"
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
                :key="item.prop"
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
                :key="item.prop"
                :disabled="item.disabled"
                :readonly="item.readonly"
                :clearable="item.clearable"
                :size="item.size"
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
              :key="item.prop"
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
          <!-- 复选框组 -->
          <template v-if="item.type === 'checkgroup'">
            <el-checkbox-group
              v-model="form[item.prop]"
              :key="item.prop"
              :disabled="item.disabled"
              @change="formValueChange"
            >
              <el-checkbox
                class="m_checkbox"
                v-for="(opt, ind) in item.options"
                :key="ind"
                :label="opt.value"
                :disabled="opt.disabled"
              >
                {{ item.hideOptLabel ? '' : opt.label }}
              </el-checkbox>
            </el-checkbox-group>
          </template>
          <!-- 复选框 -->
          <template v-if="item.type === 'checkbox'">
            <el-checkbox
              v-model="form[item.prop]"
              :key="item.prop"
              :disabled="item.disabled"
              :size="item.size"
              @change="formValueChange"
            >
            </el-checkbox>
          </template>
          <!-- 复选块 -->
          <template v-if="item.type === 'checkblock'">
            <el-checkbox-group
              v-model="form[item.prop]"
              :key="item.prop"
              :size="item.size"
              :disabled="item.disabled"
              @change="formValueChange"
            >
              <el-checkbox-button
                v-for="(opt, ind) in item.options"
                :label="opt.value"
                :disabled="opt.disabled"
                :key="ind"
              >
                {{ opt.label }}
              </el-checkbox-button>
            </el-checkbox-group>
          </template>
          <!-- 单选 -->
          <template v-if="item.type === 'radio'">
            <el-radio-group
              :key="item.prop"
              v-model="form[item.prop]"
              :disabled="item.disabled"
              :size="item.size"
              @change="formValueChange"
            >
              <el-radio
                v-for="(opt, ind) in item.options"
                :key="ind"
                :label="opt.value"
                :disabled="opt.disabled"
              >
                {{ opt.label }}
              </el-radio>
            </el-radio-group>
          </template>
          <!-- 块状单选 -->
          <template v-if="item.type === 'radioblock'">
            <el-radio-group
              :key="item.prop"
              v-model="form[item.prop]"
              :size="item.size"
              :disabled="item.disabled"
              @change="formValueChange"
            >
              <el-radio-button
                v-for="(opt, ind) in item.options"
                :key="ind"
                :disabled="opt.disabled"
                :label="opt.value"
              >
                {{ opt.label }}
              </el-radio-button>
            </el-radio-group>
          </template>
          <!-- switch -->
          <template v-if="item.type === 'switch'">
            <el-switch
              v-model="form[item.prop]"
              :key="item.prop"
              :disabled="item.disabled"
              :active-color="item.activeColor"
              :inactive-color="item.inactiveColor"
              :active-text="item.activeText"
              :width="item.width"
              :validate-event="item.validateEvent"
              :inactive-text="item.inactiveText"
              @change="formValueChange"
            >
            </el-switch>
          </template>
          <!-- 滑块 Slider -->
          <template v-if="item.type === 'slider'">
            <el-slider
              v-model="form[item.prop]"
              :key="item.prop"
              :max="item.max"
              :min="item.min"
              :show-tooltip="item.showTooltip"
              :disabled="item.disabled"
              :format-tooltip="item.formatTooltip"
              :step="item.step"
              :show-stops="item.showStops"
              :show-input="item.showInput"
              :show-input-controls="item.showInputControls"
              :range="item.range"
              :marks="item.marks"
              @change="formValueChange"
            >
            </el-slider>
          </template>
          <!-- 选择框 -->
          <template v-if="item.type === 'select'">
            <el-select
              class="m_form_item_control"
              v-model="form[item.prop]"
              :key="item.prop"
              :class="item.class"
              :multiple="item.multiple"
              :disabled="item.disabled"
              :size="item.size"
              :clearable="item.clearable"
              :collapse-tags="item.collapseTags"
              :multiple-limit="item.multipleLimit"
              :autocomplete="item.autoComplete"
              :filterable="item.filterable"
              :allow-create="item.allowCreate"
              :filter-method="item.filterMethod"
              :no-match-text="item.noMatchText"
              :no-data-text="item.noDataText"
              :reserve-keyword="item.reserveKeyword"
              :default-first-option="item.defaultFirstOption"
              :placeholder="item.placeholder ? item.placeholder : '请选择...'"
              @clear="formClear(item)"
              @change="formValueChange"
            >
              <el-option
                v-for="(opt, ind) in item.options"
                :key="ind"
                :disabled="opt.disabled"
                :label="opt.label"
                :value="opt.value"
              >
              </el-option>
            </el-select>
          </template>
          <!-- 级联选择器 -->
          <template v-if="item.type === 'cascader'">
            <el-cascader
              class="m_form_item_control"
              :class="item.class"
              v-model="form[item.prop]"
              :key="item.prop"
              :disabled="item.disabled"
              :show-all-levels="item.showAllLevels"
              :size="item.size"
              :clearable="item.clearable"
              :options="item.options"
              :props="item.props"
              :filterable="item.filterable"
              :filter-method="item.filterMethod"
              :placeholder="item.placeholder ? item.placeholder : '请选择...'"
              @clear="formClear(item)"
              @change="formValueChange"
            >
            </el-cascader>
          </template>
          <!-- 评分 -->
          <template v-if="item.type === 'rate'">
            <el-rate
              class="m_form_rate"
              v-model="form[item.prop]"
              :class="item.class"
              :key="item.prop"
              :max="item.max"
              :disabled="item.disabled"
              :allow-half="item.allowHalf"
              :low-threshold="item.lowThreshold"
              :high-threshold="item.highThreshold"
              :colors="item.colors"
              :void-color="item.voidColor"
              :disabled-void-color="item.disabledVoidColor"
              :icon-classes="item.iconClasses"
              :void-icon-class="item.voidIconClass"
              :disabled-void-icon-class="item.disabledVoidIconClass"
              :show-text="item.showText"
              :show-score="item.showScore"
              :text-color="item.textColor"
              :texts="item.texts"
              @change="formValueChange"
            >
            </el-rate>
          </template>
          <!-- 颜色选择器 -->
          <template v-if="item.type === 'colorpicker'">
            <el-color-picker
              v-model="form[item.prop]"
              :key="item.prop"
              :disabled="item.disabled"
              :size="item.size"
              :show-alpha="item.showAlpha"
              :color-format="item.colorFormat"
              :popper-class="item.popperClass"
              :predefine="item.predefine"
              @change="formValueChange"
            >
            </el-color-picker>
          </template>
          <!-- 上传 -->
          <template v-if="item.type === 'upload'">
            <my-upload
              v-model="form[item.prop]"
              :key="item.prop"
              :listType="item.listType"
              :disabled="item.disabled"
              :readonly="item.readonly"
              :drag="item.drag"
              :url="item.url"
              :headers="item.headers"
              :params="item.params"
              :name="item.name"
              :withCredentials="item.withCredentials"
              :showFileList="item.showFileList"
              :accept="item.accept"
              :multiple="item.multiple"
              :icon="item.icon"
              :autoUpload="item.autoUpload"
              :httpRequest="item.httpRequest"
              :limit="item.limit"
              :maxSize="item.maxSize"
              :unit="item.unit"
              :hideUploadBtn="item.hideUploadBtn"
              @change="formValueChange"
            ></my-upload>
          </template>
          <!--  -->
        </el-form-item>
      </template>
    </div>
  </el-form>
</template>

<script>
import _ from 'lodash'
import { fetchAPI } from '../../client'
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
      },
    },
    // 表单数据
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
  },
  watch: {
    formData: {
      handler: function(val) {
        this.initFormData(val)
      },
      deep: true,
    },
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
    this.$nextTick(() => {
      this.$emit('formChange', this.formData, this.$refs.baseForm)
    })
  },
  methods: {
    // 初始化表单数据
    initFormData(val) {
      const form = _.cloneDeep(val)
      this.formItems.forEach((item) => {
        // 对范围属性的处理
        switch (item.type) {
          case 'daterange':
            this.initDateRange(item, form)
            break
          case 'datetimerange':
            this.initDateRange(item, form)
            break
          case 'monthrange':
            this.initDateRange(item, form)
            break
          case 'timerange':
            this.initDateRange(item, form)
            break
          default:
        }
        // 对字典值的处理
        if (item.dictUrl) {
          fetchAPI.getDictionary(item.dictUrl, item.dictParams).then((res) => {
            // 单选
            if (item.type === 'select') {
              const arr = []
              res.forEach((it) => {
                const obj = {}
                if (item.dictOpt) {
                  obj['label'] = it[item.dictOpt.label]
                  obj['value'] = it[item.dictOpt.value]
                } else {
                  obj['label'] = it
                  obj['value'] = it
                }
                arr.push(obj)
              })
              item.options = arr
              // 默认选中第一条数据
              if (item.default) {
                form[item.prop] = arr[0].value
              }
              // 联动
            } else if (item.type === 'cascader') {
              item.options = res
              item.showAllLevels =
                typeof item.showAllLevels === 'boolean'
                  ? item.showAllLevels
                  : true
            }
          })
        }
      })
      this.form = form
    },

    formValueChange() {
      const form = _.cloneDeep(this.form)
      this.formItems.forEach((item) => {
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
      this.$emit('formChange', form, this.$refs.baseForm)
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
    },

    // form表单的清除事件  // 抛出去的是当前的配置
    formClear(item) {
      this.$emit('formClear', { config: item, form: this.form })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../theme-chalk/variable';
.m_rule_form {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .m_item_content {
    padding-left: 15px;
    .m_label_content {
      position: relative;
      .m_zh_label,
      .m_en_label {
        display: inline-block;
        position: absolute;
        height: 20px;
        line-height: 20px;
        top: 0;
        text-align: right;
        z-index: 1;
        padding-right: 12px;
      }
      .m_zh_no {
        height: $smallButtonHeight;
        line-height: $smallButtonHeight;
      }
      .m_en_label {
        top: 20px;
      }
      .m_zh_required::before {
        display: inline-block;
        content: '*';
        color: #f56c6c;
        margin-right: 4px;
      }
      /deep/ .el-form-item__content {
        text-align: left;
      }
      .m_checkbox {
        margin-right: 15px;
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
    .m_form_rate {
      margin-top: 6px;
    }
  }
}
</style>
