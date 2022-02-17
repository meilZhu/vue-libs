/*
 * @fileName:全局使用的日期管道
 * @Date: 2020-12-22 14:32:50
 * @Author: manyao.zhu
 */
import Vue from "vue";

Vue.filter("date", function(value, type = "yyyy-MM-dd hh:mm:ss") {
  const yy = "yyyy";
  const MM = "MM";
  const dd = "dd";
  const hh = "hh";
  const mm = "mm";
  const ss = "ss";
  if (!value || (value && !/\d+/.test(value))) {
    return value;
  }
  if (typeof value === "string") {
    value = Number(value);
  }
  const date = new Date(value);
  const y = date.getFullYear();
  const M = date.getMonth() + 1;
  const d = date.getDate();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();

  const format = type;
  const result = format
    .replace(yy, scale(y))
    .replace(MM, scale(M))
    .replace(dd, scale(d))
    .replace(hh, scale(h))
    .replace(mm, scale(m))
    .replace(ss, scale(s));
  return result;
});

function scale(n) {
  if (n < 10) {
    return `0${n}`;
  } else {
    return `${n}`;
  }
}
