---
# 这是文章的标题
title: 即刻说说
# 这是页面的图标
icon: comment
# 这是侧边栏的顺序
order: 4
---

## 添加

1. 前往你的 Hexo 博客的根目录

2. 输入 `hexo new page essay`

3. 你会找到 `source/essay/index.md` 这个文件

4. 修改这个文件：

   记得添加` type: "essay"`

   ```markdown
   ---
   title: 即刻短文
   date: 2022-06-07 22:17:49
   type: "essay"
   ---
   ```

## 内容添加

在Hexo博客目录中的 `source/_data`（**如果没有 _data 文件夹，请自行创建**），创建一个文件 `essay.yml`

```yaml
- class_name: 即刻短文
  essay_list:
    - content: 即刻短文用上了木木发的waterfall的js，瀑布流真令人愉悦
      date: 2022-08-12
    - content: iOS16现在感觉已经很稳定了，bug比较少，令人讨厌的就是一个是切换横竖屏抖音和b站都有点问题，然后就是软件请求剪贴板弹窗真的烦
      date: 2022-08-12
    - content: 现在即刻短文已经纯本地化部署完成，不再依赖任何第三方服务了
      date: 2022-08-12
    - content: 在整理转载文章的时候发现很多文章原文都无法访问了，所以本地保存网页是非常重要的
      date: 2022-08-05T06:08:54.978Z
    - content: adguardhome真的不能设置太久的缓存时间，否则非常容易卡和无响应。然后就是注意添加白名单
      date: 2022-08-04T10:10:09.984Z
```

完成！
