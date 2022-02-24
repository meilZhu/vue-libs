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
    clearable: true,
    rules: [
      { required: true, message: '文字不能为空', trigger: 'blur'},
      // { min: 3, max: 10, message: '文字长度在3——10', trigger: 'blur' },
      // {type: 'url', message: '仅支持数字', trigger: ['blur', 'change']}
      // {pattern: /^[a-zA-Z0-9]+$/, message: '请输入正确手机格式', trigger: 'blur'}
      {type: 'enum', enum: ['你', '我'],  message: '长度必须是10', trigger: 'blur'}
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
    label: '插槽测试',
    prop: 'slot',
    type: 'input',
    required: true,
    slot: true,
    rules: [
      {required: true, message: '文字不能为空', trigger: 'blur'}
    ],
  },
  {
    label: '日期时间',
    prop: 'datetime',
    type: 'datetime',
    format: 'yyyy/MM/dd hh:mm:ss',
  },
  {
    label: '插槽在测试',
    prop: 'slotTest',
    type: 'input',
    required: true,
    slot: true,
    rules: [
      {required: true, message: '测试文字不能为空', trigger: 'blur'}
    ],
  },
  {
    label: '文本域',
    prop: 'textarea',
    type: 'textarea',
    placeholder: '请输入备注信息',
    maxLength: 10,
    rows: 4,
    size: 'medium',
    oneLine: true,
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
    },
    rules: [
      {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
    ]
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
    rangeDesc: ['startTime', 'endTime']
  },
  {
    label: '复选框组',
    prop: 'checkgroup',
    type: 'checkgroup',
    options: [
      {
        label: 'A',
        value: 'a'
      },
      {
        label: 'B',
        value: 'b'
      }
    ],
    controlSize: 1 / 6,
    rules: [
      {required: true, message: '不能为空', trigger: 'change'}
    ]
  },
  {
    label: '复选框',
    prop: 'check',
    type: 'checkbox',
    controlSize: 1/6
  },
  {
    label: '复选块',
    prop: 'checkblock',
    type: 'checkblock',
    options: [
      {
        label: '上海',
        value: 'a'
      },
      {
        label: '北京',
        value: 'b'
      }
    ],
    controlSize: 1/6
  },

  {
    label: '单选组',
    prop: 'radiogroup',
    type: 'radio',
    controlSize: 1/6,
    options: [
      {
        label: '上海',
        value: '1'
      },
      {
        label: '北京',
        value: '2'
      }
    ]
  },
  {
    label: '单选块组',
    prop: 'radioblock',
    type: 'radioblock',
    controlSize: 1/6,
    options: [
      {
        label: '上海',
        value: 'shnanghai'
      },
      {
        label: '北京',
        value: 'beijing'
      }
    ]
  },
  {
    label: 'Switch切换',
    prop: 'switch',
    type: 'switch',
    // activeColor: 'green',
    // inactiveColor: 'red',
    activeText: '开',
    inactiveText: '关',
    controlSize: 1/6
  },
  {
    label: 'Slider滑块',
    prop: 'slider',
    type: 'slider',
    formatTooltip: function(val) {
      return val / 100
    },
    showStops: true,
    step: 10,
    showInput: true,
    showInputControls: false
  },
  {
    label: '选择框',
    prop: 'select',
    type: 'select',
    options: [
      {
        label: '张三',
        value: 'zhang'
      },
      {
        label: '李四',
        value: 'li'
      },
      {
        label: '王五',
        value: 'wang',
        disabled: true
      },
      {
        label: '赵六',
        value: 'zhao'
      }
    ],
    filterable: true
  },
  {
    label: '复选择框',
    prop: 'selects',
    type: 'select',
    options: [
      {
        label: '张三',
        value: 'zhang'
      },
      {
        label: '李四',
        value: 'li'
      },
      {
        label: '王五',
        value: 'wang',
        disabled: true
      },
      {
        label: '赵六',
        value: 'zhao'
      }
    ],
    multiple: true,
    clearable: true,
    filterable: true,
    autoComplate: '赵六',
    defaultFirstOption: true,
    reserveKeyword: true
  },
  {
    label: '级联选择器',
    prop: 'cascader',
    type: 'cascader',
    options:[
      {
        id: '1',
        name: '张姓',
        children: [
          {
            name: '张三',
            id: '1-1',
            children: [
              {
                id: '1-1-1',
                name: '张三的孩子',
              },
              {
                id: '1-1-2',
                name: '张三的女儿'
              }
            ]
          },
          {
            name: '张四',
            id: '1-2'
          }
        ]
      },
      {
        id: '2',
        name: '李姓',
        children: [{
          id: '2-1',
          name: '李四',
          children: [
            {
              id: '2-1-1',
              name: '李四的儿子'
            },
            {
              id: '2-1-2',
              name: '李四的女儿'
            }
          ]
        }, {
          id: '2-2',
          name: '李思思',
          children: [
            {
              id: '2-2-1',
              name: '李思思儿子'
            },
            {
              id: '2-2-2',
              name: '李思思女儿'
            }
          ]
        }]
      }
    ],
    props: {
      label: 'name',
      value: 'id'
    }
  },
  {
    label: '评分',
    prop: 'rate',
    type: 'rate',
    iconClasses:  ['el-icon-grape','el-icon-grape','el-icon-grape'],
    voidIconClass: 'el-icon-grape',
    controlSize: 1/6
  },
  {
    label: '颜色控制',
    prop: 'color',
    type: 'colorpicker',
    controlSize: 1/6
  },
  {
    label: '上传',
    prop: 'fileList',
    type: 'upload',
    listType: 'picture',
    multiple: true,
    autoUpload: false,
    // url: '/swan/v1/in/carpet/3d/upload',
    params: {
      target: 'MEAN'
    },
    limit: 4,
    // needDialog: true
  }
]

export const colData = [
  {
    label: '操作',
    type: 'opr',
    align: 'center',
    width: '140',
  },
  {
    label: '测试姓名',
    prop: 'name',
    width: '140'
  },
  {
    label: '测试性别',
    prop: 'sex',
    width: '140'
  },
  {
    label: '测试年龄',
    prop: 'age',
    sort: true,
    width: '140'
  },
  {
    label: '测试资产',
    prop: 'money',
    type: 'money',
    sort: 'custom',
    width: '140',
    moneyType: '$',
    headerAlign: 'center',
    align: 'right',
    division: true,
  },
  {
    label: '测试数量',
    prop: 'num',
    type: 'number',
    division: true,
    width: '180',
    headerAlign: 'center',
    align: 'right',
    decimal: 2
  },
  {
    label: '测试生日',
    prop: 'birthday',
    type: 'date',
    width: '240',
    // dateFormat: 'yyyy-MM-dd hh:mm:ss',
    headerUserDefine: true,
    fixed: 'right'
  },
  {
    label: '测试英文姓',
    prop: 'firstName',
    width: '140',
    type: 'upper',
  },
  {
    label: '测试英文名',
    prop: 'lastName',
    type: 'lower',
    width: '140'
  },
  {
    label: '测试婚姻状况',
    prop: 'statusDesc',
    type: 'userDefine',
    width: '140',
    align: 'center'
  }
]