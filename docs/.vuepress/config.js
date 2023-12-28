import { defineUserConfig, defaultTheme } from 'vuepress';
import { searchPlugin } from '@vuepress/plugin-search'

import navber from "./theme/navbar" ;
import sidebar from "./theme/sidebar" ;

export default defineUserConfig({
  base:'/blog/',
  lang: 'zh-CN',
  title: '鸦青',
  description: '关于产品、读书与思考',
  theme: defaultTheme({
    // 默认主题配置
    navbar: navber,
    sidebar: sidebar,
  }),
  plugins: [
    searchPlugin({
      // 配置项
    }),
  ],

})