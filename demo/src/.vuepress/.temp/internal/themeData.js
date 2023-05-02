export const themeData = JSON.parse("{\"encrypt\":{\"config\":{\"/demo/encrypt.html\":[\"$2a$10$Fh1crZIiQESmcq4epPWtXuITey4U8iuPs8PO12JaTtTlGTsgZ4FPy\"],\"/zh/demo/encrypt.html\":[\"$2a$10$izCOqXVEgXD8iXDr7aDXvOve0h9w6MGncHsCNgkw042TLnh.KKtlO\"]}},\"author\":{\"name\":\"Gtwxxh\",\"url\":\"https://blog.gtwxxh.cn\"},\"logo\":\"/logo.png\",\"repo\":\"vuepress-theme-hope/vuepress-theme-hope\",\"docsDir\":\"demo/theme-docs/src\",\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"编辑此页\",\"print\":\"打印\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"encryptLocales\":{\"iconLabel\":\"文章已加密\",\"placeholder\":\"输入密码\",\"remember\":\"记住密码\",\"errorHint\":\"请输入正确的密码\"},\"routeLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"页面不存在\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\",\"openInNewWindow\":\"Open in new window\"},\"navbar\":[\"/\",{\"text\":\"指南\",\"icon\":\"install\",\"link\":\"/guide/\"}],\"sidebar\":{\"/\":[{\"text\":\"快速上手\",\"icon\":\"install\",\"prefix\":\"guide/\",\"children\":[\"get-started.md\"]},{\"text\":\"内置页面\",\"icon\":\"page\",\"prefix\":\"guide/page\",\"children\":\"structure\"}]},\"footer\":\"浙ICP备2023001503号\",\"displayFooter\":true}},\"toc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}