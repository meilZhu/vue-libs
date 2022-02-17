/*
 * @fileName: 自定义基础组件的自动全局注册
 * @Date: 2021-02-25 11:18:20
 * @Author: manyao.zhu
 */

import Vue from "vue";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

const requireComponent = require.context(
  "~/components/shared/components/",
  true,
  /\w+\.(vue|js)$/
);
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const name = fileName.split("/").pop();
  const componentName = upperFirst(camelCase(name.replace(/\.\w+$/, "")));
  console.log('component', componentName)
  Vue.component(
    // 全局注册组件
    componentName,
    componentConfig.default || componentConfig
  );
});