import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "快速上手",
      icon: "install",
      prefix: "guide/",
      children: [          
        "get-started.md",
      ]
      // collapsible: true,
    },
    {
      text: "内置页面",
      icon: "page",
      prefix: "guide/page",
      children: "structure"
      // collapsible: true,
    },
  ],
});
