/*
 * @fileName: 基础表格的注册
 * @Date: 2021-03-22 10:57:36
 * @Author: manyao.zhu
 */

import MyTable from './my-table'

MyTable.install = Vue => Vue.component(MyTable.name, MyTable)

export default MyTable
