---
# 这是文章的标题
title: 添加
# 这是页面的图标
icon: add
# 这是侧边栏的顺序
order: 1
---

所有页面都是按照以下步骤添加的

只需要改变一些文字即可。

## 开始

通用指令：

```shell
hexo new page xxx
```

其中 xxx 需要替换你的页面链接，如：

标签页，xxx 写成 tags。那么访问就是/tags/。

## 类型（模板）

指令运行后，会在souce文件夹创建一个文件夹，打开里面的`index.md`。

如果你需要创建标签页，友联页这种类型的。还需要添加`type`属性（type: xxx   在font-matter上）。否则，就算加了标签，标签页还是空的。

以下是主题自带的模板：

| 名称     | type里填写的值 |
| -------- | -------------- |
| 标签     | tags           |
| 分类     | categories     |
| 归档     | Archives       |
| 友情链接 | link           |
| 关于     | about          |
| 说说     | Essay          |


