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
      text: "Hexo配置",
      icon: "launch",
      prefix: "guide/hexo",
      children:[          
        "config.md",
        "scaffolds.md",
      ]
      // collapsible: true,
    },
    {
      text: "内置页面",
      icon: "page",
      prefix: "guide/page",
      children:[          
        "add.md",
        "tac-add.md",
        "link.md",
        "essay.md",
        "about.md",
        "post.md",
      ]
      // collapsible: true,
    },
    {
      text: "部分",
      icon: "type",
      prefix: "guide/part",
      children:[          
        "nav-side-console.md"
      ]
      // collapsible: true,
    },
  ],
});
