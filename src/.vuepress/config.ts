import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Acrylic",
  description: "这是Acrylic主题文档",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Acrylic",
      description: "Acrylic主题文档",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
