/*
 * @fileName: 基础组件的配置
 * @Date: 2021-02-25 13:19:59
 * @Author: manyao.zhu
 */

export const formCon = [
  {
    label: '输入文字',
    enLabel: 'Input Text',
    prop: 'text',
    type: 'input',
    required: true,
    rules: [
      {required: true, message: '文字不能为空', trigger: 'blur'},
      {min: 3, max: 10, message: '文字长度在3——10', trigger: 'blur'}
    ],
  },
  {
    label: '数字输入框',
    prop: 'number',
    type: 'number',
    required: true,
    rules: [
      {required: true, message: '数字不能为空', trigger: 'blur'},
    ],
    min: 0,
    max: 10,
    step: .2,
  },
  {
    label: '日期时间',
    prop: 'datetime',
    type: 'datetime',
    format: 'yyyy/MM/dd hh:mm:ss',
  },
  {
    label: '文本域',
    prop: 'textarea',
    type: 'textarea',
    placeholder: '请输入备注信息',
    rows: 4,
    size: 'medium',
    oneLine: true,
    readonly: true,
  },
  {
    label: '日期',
    prop: 'date',
    align: 'center',
    type: 'date',
    format: 'yyyy/MM/dd',
    startPlaceholder: String(new Date() - 24 * 60 * 60 * 1000 * 6),
    endPlaceholder: String(new Date() + 24 * 60 * 60 * 1000 * 6),
    pickerOptions:{
      disabledDate(time){
        let _now = Date.now(),
        seven = 7 * 24 * 60 * 60 * 1000,
        sevenDays = _now - seven;
        return time.getTime() > _now || time.getTime() < sevenDays; //大于当前的禁止，小于7天前的禁止
      }
    }
  },
  {
    label: '年',
    prop: 'year',
    type: 'year',
    // dateFormat: 'yyyy/MM/dd',
  },
  {
    label: '月',
    prop: 'month',
    type: 'month',
    // dateFormat: 'yyyy/MM/dd',
  },
  {
    label: '周',
    prop: 'week',
    type: 'week',
    format: "yyyy 第 WW 周"
  },
  {
    label: '时间',
    prop: 'time',
    type: 'time',
    format: 'HH:mm:ss',
  },
  {
    label: '日期范围',
    prop: 'daterange',
    type: 'daterange',
    format: 'yyyy/MM/dd',
    rangeDesc: ['startDate', 'endDate'],
  },
  {
    label: '日期时间范围',
    prop: 'datetimerange',
    type: 'datetimerange',
    format: 'yyyy-MM-dd hh:mm:ss',
    rangeDesc: ['startDateTime', 'endDateTime'],
  },
  {
    label: '月范围',
    prop: 'monthrange',
    type: 'monthrange',
    format: 'yyyy/MM',
    rangeDesc: ['startMonth', 'endMonth'],
  },
  {
    label: '固定时间',
    prop: 'fixedTime',
    type: 'time',
    pickerSelect: {
      start: '07:10',
      step: '00:05',
      end: '20:30'
    }
  },
  {
    label: '时间范围',
    prop: 'times',
    type: 'timerange',
    // format: 'hh:mm:ss',
    startPlaceholder: '开始时间',
    endPlaceholder: '结束时间',
    rangeDesc: ['startTime', 'endTime'],
  },
]