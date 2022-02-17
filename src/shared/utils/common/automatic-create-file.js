/*
 * @fileName: 自动创建文件夹和文件
 * @Date: 2022-01-19 17:48:39
 * @Author: manyao.zhu
 */

import bus from '../bus'
const path = require('path')
const fs = require('fs')
const resolve = file => path.resolve('__dirname', '../', file)

console.log(fs);
import { writeFileSync } from 'fs';

console.log(writeFileSync);


const defaultLog = log => { 
  bus.$message.info(log)  
}
const errLog = err => {
  bus.$message.error(err)
}

// 获取文件路径
const RouterSymbol = resolve('src/pages/index/router/modules')
const ViewSymbol = resolve('src/pages/index/views/modules')
// const ApiSymbol = resolve('~/pages/index/shared/client/modules')

// 视图层文件模板
const vueFileTemplate = module => {
  return `<template>
    <section class="${module}">
    
    </section>
  </template>
  
  <script>
    export default {
      name: '',
      data() {
        return {

        }
      },
      mounted() {

      },
      methods: {

      }
    }
  </script>
  
  <style lang='scss' scoped>
    @import '~/css/shared';
  </style>
  `
}

const vueRouterTemplate = module => {
  return `
   export default [
    {
      path: '/${module}',
      name: '${module}',
      component: () => import('@/views/modules/${module}/index')
    }
  ]
  `
}

// 生成文件的函数
/**
 * 
 * @param {*} filePath 文件路径
 * @param {*} content 文件内容
 * @param {*} dirPath 文件夹路径
 */
const generateFile = async (filePath, content, dirPath = '') => {
  console.log(filePath, content, dirPath);
  try {
    // 判断是否存在
    if (dirPath !== '' && !await fs.existsSync(dirPath)) {
      await fs.mkdirSync(dirPath)
      defaultLog(`created ${dirPath}`)
    }
    if (!await fs.existsSync(filePath)) {
      // create file
      await fs.openSync(filePath, 'w')
      defaultLog(`created ${filePath}`)
    }
    await fs.writeFileSync(filePath, content, 'utf8')
  } catch(err) {
    errLog(err)
  }
}


// map 储存需要创建的文件信息
const generaters = new Map([
  ['view', async (module) => {
    const filePath = path.join(ViewSymbol, module)
    const vuePath = path.join(filePath, '/index.vue')
    await generateFile(vuePath, vueFileTemplate(module), filePath)
  }],

  ['router', async (module) => {
    const routerPath = path.join(RouterSymbol, `/${module}.js`)
    await generateFile(routerPath, vueRouterTemplate(module))
  }],
])

const files = ['view', 'router']

// console.log(generaters);
// console.log(generaters.has('view'))
// console.log(generaters.get('view')('abc'))

const createFile = moduleName => {
  files.forEach(key => {
    // console.log(key);
    // console.log(generaters.get(key));
    generaters.get(key)(moduleName)
  })
}

export default createFile


