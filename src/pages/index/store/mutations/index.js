/*
 * @fileName: 
 * @Date: 2021-01-26 11:04:07
 * @Author: manyao.zhu
 */

import { demoMutations } from "./demo"
import { themeMutations } from './theme'

const mutations = {
  ...demoMutations,
  ...themeMutations
} 

export default mutations