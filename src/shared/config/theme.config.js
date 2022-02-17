/*
 * @fileName: 
 * @Date: 2021-02-22 18:06:05
 * @Author: manyao.zhu
 */
// import { ELEMENT_STYLE } from './style'

export const themeConfig = {
  elementStyle: null,
  mode: 'dark', // dark, light  （模式）
  modeColor: '#545c64',  // 深模式的颜色
  defaultModeColor: '#545c64',  // 深模式的默认颜色
  modeActiveColor: '#a0adbb',  // 深模式的active 颜色
  defaultModeActiveColor: '#a0adbb',  // 深模式的active 默认颜色
  themeColor: '#f88807',  //  默认的主题颜色
  defaultThemeColor: '#f88807',  // 默认的主题色
  // 颜色的快捷选择  橘红， 橙色， 柳绿， 松花绿， 紫檀， 炎， 朱红，青碧，紫色
  colors: ['#ff3300', '#ff4c00', '#FF7500', '#fa8c35', '#afdd22', '#48c0a3', '#057748', '#4c221b', '#8B00FF'], 
  layout: 'vertical', //  vertical:  header_menu_layout: 没有左侧菜单 + 头部；horizontal : header_layout:  有左侧菜单
  layoutComponent: 'header_menu_layout',  // 布局组件id
  bigLogo: './img/logo.png', // 全的logo
  squareLogo: './img/icon.png', // 方形的logo
  // program: '前端科技', // 项目名称
  language: 'zh',
  hideLanguage: false, // 隐藏语言切换
  hideTips: true, // 隐藏提示信息，
  hideSubHeader: false,  // 隐藏二级头部功能
  hideSettings: false,  // 隐藏设置功能
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

