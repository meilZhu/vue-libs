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
                  // 时间的赋值格式是： 标准时间 或 时间戳 （不能是字符串）; // 时间范围是已数组的方式赋值 time / timerange   /  checkbox: 复选框 checkgroup: 复选框组
                  // checkblock 按钮复选框组  radio: 单选 ,  radioblock: 块状单选
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
  dictOpt?: Options;  // 使用接口中的字段属性
  dictParams?: object; // 否去字典子的参数 可以是字典code  ，也可以是请求参数
  dictUrl?: string; // 自定义请求参数的路径
  default?: boolean;  // 是否有默认选中值


  // 数字输入框属性
  min?: number; // 最小值 （数字输入框）
  max?: number; // 最大值 （数字输入框）
  step?: number; // 计数步长 （数字输入框）
  precision?: number; // 精确度 （数字输入框）
  controls?: boolean;  // 是否使用（显示）控制按钮

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

  // 单选 // 复选
  hideOptLabel?: boolean, // 是否隐藏复选的提示信息

  // 选择框
  multiple?: boolean; // 是否多选
  collapseTags?: boolean; // 所选时是都将选中值按文字的形式展示
  multipleLimit?: number;  // 多选时，最多可选的个数 （默认为0， 0:则代表不限制）
  autoComplete?: string;  // select input 的 autocomplete 属性
  filterable?: boolean;  // 是否支持搜索
  allowCreate?: boolean;  // 是否允许用户创建新条目，需配合 filterable 使用
  filterMethod?: Function;  // 自定义搜索事件
  noMatchText?: string;  // 搜索条件无匹配时显示的文字，也可以使用slot="empty"设置
  noDataText?: string;  // 选项为空时显示的文字，也可以使用slot="empty"设置
  reserveKeyword?: boolean;  // 多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词
  defaultFirstOption?: boolean; // 在输入框按下回车，选择第一个匹配项。需配合 filterable 或 remote 使用

  // 切换 按钮 switch
  width?: number;  // switch的宽度
  activeText?: string; // switch 打开时的文字描述
  inactiveText?: string; // switch 关闭时的文字描述
  activeColor?: string;  // switch 打开时的背景颜色
  inactiveColor?: string; // switch 关闭时的背景颜色
  validateEvent?: boolean;  // switch 改变状态是否触发表单校验
  
  // 滑块 slider
  // max?: number; // 最大值
  // min?: number;  // 最小值
  // step?: number;  // 步长
  showInput?: boolean;  // 是否显示输入框
  showInputControls?: boolean;  // 是否显示输入框的控制按钮
  showStops?: boolean;  // 是否显示间断点
  showTooltip?: boolean; // 是否显示tooltip
  formatTooltip?: Function; // tooltip内容的格式化 接受参数val
  range?: boolean;  // 是否为范围选择
  marks?: object;  // 标记，在【min， max】之间

  // 级联选择器
  props?: object;  // 级联选择器展示的内容和操作的内容   props: { label: 'name', value: 'id'}
  showAllLevels?: boolean;  // 是否展示所有路径 默认true
  // filterable?: boolean;  // 是否支持检索
  // filterMethod?: Function;  // 过滤的方法

  // 评分
  // max?: number;  // 最大分值
  allowHalf?: boolean;  // 是否支持半选
  lowThreshold?: number; // 低分和中等分数的界限值，值本身被划分在低分中 默认： 2
  highThreshold?: number;  // 高分和中等分数的界限值，值本身被划分在高分中  默认： 4
  colors?: string[]; // icon 的颜色。若传入数组，共有 3 个元素，为 3 个分段所对应的颜色
  voidColor?: string; // 未选中 icon 的颜色
  disabledVoidColor?: string; // 只读时未选中 icon 的颜色
  iconClasses?: string[]; // icon 的类名。若传入数组，共有 3 个元素，为 3 个分段所对应的类名
  voidIconClass?: string;  // 未选中 icon 的类名
  disabledVoidIconClass?: string;  // 只读时未选中 icon 的类名
  showText?: boolean;  // 是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容
  showScore?: boolean; // 	是否显示当前分数，show-score 和 show-text 不能同时为真
  textColor?: string; // 辅助文字的颜色
  texts?: string[]; // 	辅助文字数组

  // 颜色选择器
  showAlpha?: boolean;  // 是否支持透明度 默认不支持
  colorFormat?: string;  // 写入 v-model 的颜色的格式,  hsl / hsv / hex / rgb  //hex（show-alpha 为 false）/ rgb（show-alpha 为 true）
  popperClass?: string;  // ColorPicker 下拉框的类名
  predefine?: string[];  // 预定义颜色

  // 上传
  drag?: boolean;  // 是否可以拖拽上传
  url?: string;  // 上传的请求接口
  headers?: object;  // 上传的请求头
  params?: object;  // 上传的请求参数
  name?: string;  // 上传的接受字段 默认： file
  withCredentials?: boolean; //支持发送cookie凭证信息 默认： false
  showFileList?: boolean; // // 是否显示已上传文件列表 默认： true
  accept?: string; // 接受的上传文件的类型
  // multiple?: boolean; // 是否支持多个上传
  icon?: string;  // 上传按钮的图标
  autoUpload?: boolean; // 是否选择文件后就立即上传
  listType?: string;  // 文件列表的类型  // text / picture / picture-card
  httpRequest?: Function;  // 覆盖默认的上传行为，可以自定义上传的实现
  // disabled?: boolean;  // 是否禁用
  limit?: number;  // 最多上传限制
  hideUploadBtn?: boolean; //是否开启到达限制数量隐藏上传按钮 默认： true
  // readonly?: boolean;  // 是否只读
  unit?: string;  // 上传文件最大体积的单位  默认M
  maxSize?: number;  // 上传文件最大体积 默认: 10
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

export interface Options {
  label?: string;  // 用于展示的字段
  value?: string;  // 用于操作使用的字段
}