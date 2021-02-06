/*
 * @fileName: 
 * @Date: 2021-01-26 10:54:45
 * @Author: manyao.zhu
 */
import { demoState } from './demo'
import { themeState } from './theme'

const state = {
  ...demoState,
  ...themeState
}

export default state