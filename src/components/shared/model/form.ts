/*
 * @fileName: 基础组件的配置信息属性的定义
 * @Date: 2021-02-25 11:35:41
 * @Author: manyao.zhu
 */
export interface FormModel {
  // 公用属性
  label?: String; // 中文描述
  enLabel?: string;  //英文描述
  prop?: string;
  type?: string;  // 控件类型  input：输入框， number: 数字输入框， textarea: 文本域, date/ year/ month/ week/ datetime/ daterange/ datetimerang / monthrange 
                  // 时间的赋值格式是： 标准时间 或 时间戳 （不能是字符串）; // 时间范围是已数组的方式赋值 time / timerange
  oneLine?: boolean; // 是否独占一行
  required?: boolean;  // 是否必填
  labelWidth?: string; // label的宽度
  controlSize?: number; // 整个控件包含label的大小， 主要是小数
  class?: string;
  rules?: RulesModel[];
  size?: string;  // 控件大小  （large, small, mini）
  disabled?: boolean;  // 是否禁用
  placeholder?: string;  // 占位符
  readonly?: boolean;  // 是否只读
  clearable?: boolean; // 是否可清除

  // 输入框
  maxLength?: number; // 最大长度
  minLength?: number; // 最小长度

  // 文本域属性
  rows?: number; // 文本域时，占几行

  // 选择器属性
  options?: any[];  // 自定义下拉框的数据源
  dictCode?: object | string; // 否去字典子的参数 可以是字典code  ，也可以是请求参数
  dictUrl?: string; // 自定义请求参数的路径

  // 数字输入框属性
  min?: number; // 最小值 （数字输入框）
  max?: number; // 最大值 （数字输入框）
  step?: number; // 计数步长 （数字输入框）
  precision?: number; // 精确度 （数字输入框）

  // 日期选择器属性
  startPlaceholder?: string;  // 选择日期范围的开始时间 （日期选择器）时间范围 (用于禁用)
  endPlaceholder?: string;  // 选择日期范围的结束时间 （日期选择器）时间范围 (用于禁用)
  format?: string; // 日期选择器的格式化
  align?: string; // 控件对齐方式 （left, center, right）
  rangeDesc?: string[],  // 范围选择的两个字段 eg: rangeDesc: ['startDate', 'endDate']
  pickerOptions?: any;  // 日期选择的禁用， // 对象里面是方法

  // 时间选择器
  pickerSelect?: object; // 固定时间点选择的配置项 eg: {start: '07:30', step: '00:05', end: '20:30'},
  // pickerOptions?: any; // 时间选择器的选择范围 { selectableRange: '18:30:00 - 20:30:00'}
  minTime?: string; // 最小时间，小于该时间的时间段将被禁用
  maxTime?: string; // 最大时间，大于该时间的时间段将被禁用
  // ...同上

  // 单选

  // 复选

  // 选择框

  // 切换 按钮

  // 滑块

  // 

}

export interface RulesModel {
  required?: boolean;  // 是否必填
  message?: string;  // 提示信息
  trigger?: string;  // 触发时机  blur, change, click 等
  min?: number;  // 最小长度
  max?: number; // 最大长度
  type?: string; // 数据类型  date, array
  validator?: any; // 自定义规则方法
}

export interface TableModel {
  label?: string;
  prop?: string;
  type?: string; // 当前展示什么类型
  fixed?: boolean; // 是否固定列
  checked?: boolean; // 自定义配置列时使用
  sort?: boolean;  // 是否展示排序
  width?: number; 
  class?: string;  // 类名
}