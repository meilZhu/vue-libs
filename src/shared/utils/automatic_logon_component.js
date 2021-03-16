/*
 * @fileName: 自动组测全局公用组件的工具类
 * @Date: 2021-02-25 11:18:20
 * @Author: manyao.zhu
 */

import Vue from "vue";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

const requireComponent = require.context(
  "../../components/shared/components/",
  true,
  /\w+\.(vue|js)$/
);
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const name = fileName.split("/").pop();
  const componentName = upperFirst(camelCase(name.replace(/\.\w+$/, "")));
  console.log(componentName)
  Vue.component(
    // 全局注册组件
    componentName,
    componentConfig.default || componentConfig
  );
});