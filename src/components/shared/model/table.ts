/*
 * @fileName:  列表的基础配置
 * @Date: 2021-04-08 11:24:41
 * @Author: manyao.zhu
 */

export interface TableModel { 
  label?: string;  // 表头描述
  prop?: string; // 列属性
  type?: string; // 列的类型  （opr： 操作列， userDefine: 用户自定义， money: 金额， upper: 大写， lower: 小写， date: 日期， number: 数字, ）
  class?: string;  // 类名
  fixed?: boolean;  // 是否固定列
  width?: string; // 对应的列宽
  minWidth?: string;  // 对应列的最小宽度
  resizable?: boolean;  // 是否允许拖拽修改列表宽度  这个只有当 表格的boder为true 时才有效
  sort?: boolean | string;  // 是否排序  true 前端排序， false不排序， 'custom' 后端排序，同时需要和sort-change一起调用
  showOverflowTooltip?: boolean;  // 当内容过长被隐藏时显示 tooltip
  align?: string; // 对齐方式  left/center/right
  headerAlign?: string;  // 表头对齐方式，若不设置该项，则使用表格的对齐方式  left/center/right
  checked?: boolean;  // 当前列是否展示  (用于动态列配置)
  disabled?: boolean; // 是否禁用   (用于动态列配置)
  decimal?: number;  // 小数位数 默认：2  （仅在type 为 number 时有效）
  division?: boolean;  // 数字是否3位分割  （仅在type 为 number 时有效）
  moneyType?: string;  // 金额类型符号  ￥ $ ￡   (仅在type 为 money 时有效
  dateFormat?: string;  // 日期展示的格式  'yyyy-MM-dd hh:mm:ss' 等
  headerUserDefine?: boolean;  // 列表的表头是否自定义
}

