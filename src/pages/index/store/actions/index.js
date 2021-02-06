/*
 * @fileName: 
 * @Date: 2021-01-26 11:06:09
 * @Author: manyao.zhu
 */
import { demoActions } from './demo'
import { themeActions } from './theme'

const actions = {
  ...demoActions,
  ...themeActions
}

export default actions