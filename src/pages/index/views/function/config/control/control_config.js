// 控件属性的配置信息
const controlType = [
  {
    label: '控件类型',
    prop: 'type',
    type: 'select',
    options: [
      {
        label: '输入框',
        value: 'input',
      },
      {
        label: '数字输入框',
        value: 'number',
      },
      {
        label: '文本域',
        value: 'textarea'
      },
      {
        label: '日期选择器',
        value: 'date'
      },
      {
        label: '年选择器',
        value: 'year'
      },
      {
        label: '月选择器',
        value: 'month'
      },
      {
        label: '星期选择器',
        value: 'week'
      },
      {
        label: '日期时间选择器',
        value: 'datetime'
      },
      {
        label: '日期范围选择器',
        value: 'daterange'
      },
      {
        label: '日期时间选择器',
        value: 'datetimerang'
      },
      {
        label: '月范围选择器',
        value: 'monthrange'
      },
      {
        label: '时间选择器',
        value: 'time'
      },
      {
        label: '时间范围选择器',
        value: 'timerange'
      },
      {
        label: 'Switch切换器',
        value: 'switch'
      },
      {
        label: 'Slider滑块',
        value: 'silder'
      },
      {
        label: '复选框组',
        value: 'checkgroup'
      },
      {
        label: '复选框',
        value: 'checkbox'
      },{
        label: '复选块',
        value: 'checkblock'
      },
      {
        label: '单选',
        value: 'radio'
      },
      {
        label: '单选块',
        value: 'radioblock'
      },
      {
        label: '级联选择器',
        value: 'cascader'
      },{
        label: '评分控件',
        value: 'rate'
      },
      {
        label: '颜色选择器',
        value: 'colorpicker'
      },
      {
        label: '上传控件',
        value: 'upload'
      }
    ]
  },
]

const controlConf = [
  {
    label: '中文描述',
    prop: 'label',
    type: 'input'
  },
  {
    label: '英文描述',
    prop: 'enLabel',
    type: 'input'
  },
  {
    label: '属性值',
    prop: 'prop',
    type: 'input'
  },
  {
    label: '是否独占一行',
    prop: 'oneLine',
    type: 'radio',
    options: [
      {
        label: '是',
        value: true
      },
      {
        label: '否',
        value: false
      }
    ]
  },
  {
    label: '是否是必填项',
    prop: 'required',
    type: 'radio',
    options: [
      {
        label: '是',
        value: true
      },
      {
        label: '否',
        value: false
      }
    ]
  },
  {
    label: 'label宽度',
    prop: 'labelWidth',
    type: 'input',
    placeholder: '默认100px, 可以全局配配置'
  },
  {
    label: '整个控件宽度',
    prop: 'controlSize',
    type: 'number',
    placeholder: '可以不填，取值范围0~1'
  },
  {
    label: '类名',
    prop: 'calss',
    type: 'input',
    placeholder: '可以为空， 可填项：tl,tc,tr'
  },
  {
    label: '控件大小',
    prop: 'size',
    type: 'input',
    placeholder: '可以不填， small, large, mini'
  },
  {
    label: '是否禁用',
    prop: 'disabled',
    type: 'radio',
    options: [
      {
        label: '是',
        value: true
      },
      {
        label: '否',
        value: false
      }
    ]
  },
  {
    label: '占位符',
    prop: 'placeholder',
    type: 'input',
    placeholder: '可以不填'
  },
  {
    label: '是否只读',
    prop: 'readonly',
    type: 'radio',
    options: [
      {
        label: '是',
        value: true
      },
      {
        label: '否',
        value: false
      }
    ]
  },
  {
    label: '是否可清除',
    prop: 'clearable',
    type: 'radio',
    options: [
      {
        label: '可以',
        value: true
      },
      {
        label: '不可以',
        value: false
      }
    ]
  },
  { 
    label: '简单的校验规则',
    prop: 'rules',
    type: 'select',
    options: [
      {
        label: '',
        value: "{type: ''}"
      }
    ]
  },
]