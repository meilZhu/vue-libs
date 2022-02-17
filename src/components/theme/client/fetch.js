/*
 * @file: 封装请求服务
 * @Date: 2020-09-11 09:11:57
 * @author: manyao.zhu
 */
import axios from "axios";
import qs from "qs";

// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded;charset=UTF-8"; // 基本类型
// axios.defaults.baseURL = process.env.VUE_APP_API_ROOT; // 请求域名
axios.defaults.timeout = Number(process.env.VUE_APP_TIMEOUT) || 60000; // 超时时间

// 请求头拦截器
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// 响应头拦截器
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    // if (err.response) {
    //   // 这里还缺少特殊状况的处理罗杰，这个需要根据具体的业务来处理
    //   switch (err.response.status) {
    //     case 401:
    //       router.push({ path: "login" });
    //       break;
    //     default:
    //   }
    // }
    return Promise.reject(err);
  }
);

const httpRequest = ({
  url = "",
  method = "get",
  params = {},
  headers = {},
}) => {
  return new Promise((resolve, reject) => {
    if (method === "get") {
      axios({ url, method: "get", params, headers })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    } else {
      axios({
        url,
        method: "post",
        data: method === "post" ? qs.stringify(params) : params,
        headers,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};

const get = (url, params = {}, headers = {}) => {
  return httpRequest({ url, method: "get", params, headers });
};

const post = (url, params = {}, headers = {}) => {
  return httpRequest({
    url,
    method: "post",
    params,
    headers: {
      ...headers,
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  });
};

const postJson = (url, params = {}, headers = {}) => {
  return httpRequest({
    url,
    method: "postJson",
    params,
    headers: {
      ...headers,
    },
  });
};

const http = {
  get,
  post,
  postJson,
};

export default http;