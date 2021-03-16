/*
 * @fileName: 
 * @Date: 2021-02-22 18:06:05
 * @Author: manyao.zhu
 */

export const themeConfig = {
  mode: 'dark', // dark, light
  menuType: 'vertical', // horizontal 横向
  bigLogo: './img/logo.png', // 全的logo
  squareLogo: './img/icon.png', // 方形的logo
  // program: '前端科技', // 项目名称
  language: 'zh',
  hideLanguage: false, // 隐藏语言切换
  hideTips: true, // 隐藏提示信息
}

// 菜单的配置信息
export const routerConfig = {
  collapsed: false,  // 是否收缩
  menuIndex: 1, // 菜单的高亮索引
  cache: false, // 是否启用缓存模式 (false时，即时设置了缓存，也无效)
  path: null,  // 当前页面的路由,
  menuWidth: 220
}

// 用户的信息
export const userInfo = {
  userName: '朱满要',
  userImage: './img/user.jpg',
  userId: '1234'
}

