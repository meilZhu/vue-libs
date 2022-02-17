/*
 * @fileName: 3d应用包的自动组测
 * @Date: 2021-03-04 09:57:16
 * @Author: manyao.zhu
 */

import Vue from "vue";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

const requireComponent = require.context(
  "~/plugin/package/",
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
