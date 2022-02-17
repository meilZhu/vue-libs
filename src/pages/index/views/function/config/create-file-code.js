/*
 * @fileName: 创建文件代码的配置信息
 * @Date: 2022-01-21 17:05:34
 * @Author: manyao.zhu
 */

// 所有的框架类型
const allFramework = [
  {
    label: 'Vue',
    value: 'vue'
  },
  {
    label: 'React',
    value: 'react',
    disabled: true
  },
  {
    label: 'Angular',
    value: 'angular',
    disabled: true
  }
]

// 框架类型
const frameworkType = {
  vue: 'vue',
  react: 'react',
  angular: 'angular'
}

// 所有的控件类型
const allControl = [
  {
    label: '表单',
    value: 'form'
  },
  {
    label: '检索表单',
    value: 'form-search'
  },
  {
    label: '表格',
    value: 'table'
  },
  {
    label: '表格顶部靠左操作按钮',
    value: 'left-table-opr'
  },
  {
    label: '表格顶部靠右操作按钮',
    value: 'right-table-opr'
  }
]

// 控件类型
const controlType = {
  form: 'form',
  formSearch: 'form-search',
  table: 'table',
  leftTableOpr: 'left-table-opr',
  rightTableOpr: 'right-table-opr'
}

// form表单的控件类型集合
const formControl = [
  {
    label: '输入框',
    type: 'input',
    controlType: 'form'
  },
  {
    label: '数字输入框',
    type: 'numberInput',
    controlType: 'form'
  },
  {
    label: '选择框',
    type: 'select',
    controlType: 'form'
  },
  {
    label: '时间选择框',
    type: 'date',
    controlType: 'form'
  },
  {
    label: '文本域',
    type: 'textarea',
    controlType: 'form'
  },
  {
    label: '复选框',
    type: 'checkbox',
    controlType: 'form'
  },
  {
    label: '单选',
    type: 'radio',
    controlType: 'form'
  },
  {
    label: 'Switch',
    type: 'switch',
    controlType: 'form'
  },
  {
    label: '滑块',
    type: 'slider',
    controlType: 'form'
  },
  {
    label: '联动选择器',
    type: 'cascader',
    controlType: 'form'
  },
  {
    label: '颜色控制器',
    type: 'colorpicker',
    controlType: 'form'
  }
]

// form表单的标题
const formControlTitle = {
  label: 'form表单',
  controlType: 'form',
  prop: 'controlTitle',
  isUse: true, // 被使用
}

// form检索表单的控件类型集合
const formSearchControl = [
  {
    label: '输入框',
    type: 'input',
    controlType: 'form-search'
  },
  {
    label: '数字输入框',
    type: 'numberInput',
    controlType: 'form-search'
  },
  {
    label: '选择框',
    type: 'select',
    controlType: 'form-search'
  },
  {
    label: '时间选择框',
    type: 'date',
    controlType: 'form-search'
  },
  {
    label: '文本域',
    type: 'textarea',
    controlType: 'form-search'
  },
  {
    label: '复选框',
    type: 'checkbox',
    controlType: 'form-search'
  },
  {
    label: '单选',
    type: 'radio',
    controlType: 'form-search'
  },
  {
    label: 'Switch',
    type: 'switch',
    controlType: 'form-search'
  },
  {
    label: '滑块',
    type: 'slider',
    controlType: 'form-search'
  },
  {
    label: '联动选择器',
    type: 'cascader',
    controlType: 'form-search'
  },
  {
    label: '颜色控制器',
    type: 'colorpicker',
    controlType: 'form-search'
  }
]

// form检索表单的标题
const formSearchControlTitle = {
  label: 'form检索表单',
  controlType: 'form-search',
  prop: 'controlTitle',
  isUse: true, // 被使用
}

// table 表格的控件类型集合
const tableControl = []

// table 表格的控件的标题
const tableControlTitle = {
  label: 'table 表格',
  controlType: 'table',
  prop: 'controlTitle',
  isUse: true, // 被使用
}




/**
 * 页面配置信息
 * */
//  添加功能分区的页面表单配置信息
const codeRule = (value, callback) => {
  if (!/^[a-zA-Z]+$/.test(value)) {
    callback(new Error('功能分区的code只能是字母类型！'))
  }
}

const partitionConf = [
  {
    label: '功能分区描述',
    prop: 'controlDesc',
    type: 'input',
    required: true,
    rules: [
      { required: true, message: '功能分区的描述不能为空', trigger: 'blur' }
    ],
  },
  {
    label: '功能分区编码',
    prop: 'controlCode',
    type: 'input',
    require: true,
    rules: [
      { required: true, message: '功能分区编码不能为空', trigger: 'blur' },
      { validator: codeRule, trigger: 'blur' }
    ]
  },
  {
    label: '是否需要标题',
    prop: 'needTitle',
    type: 'radio',
    options: [
      {
        label: '不需要',
        value: false
      },
      {
        label: '需要',
        value: true
      }
    ]
  },
  {
    label: '功能标题',
    prop: 'controlTitle',
    type: 'input'
  },
  {
    label: '功能类型',
    prop: 'control',
    type: 'select',
    required: true,
    rules: [
      { required: true, message: '功能类型不能为空', trigger: 'change' }
    ],
  }
]




// 表格的
export default {
  allFramework,
  frameworkType,
  allControl,
  controlType,
  formControl,
  formSearchControl,
  tableControl,

  formControlTitle,
  formSearchControlTitle,
  tableControlTitle,

  partitionConf,

}