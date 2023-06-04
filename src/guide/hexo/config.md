---
#这是文章的标题
title: Hexo配置文件
# 这是页面的图标
icon: layout
# 这是侧边栏的顺序
order: 1
---

## 根目录config.yml

5-21排可替换为

```yml
# Site

title: 张洪Heo #标题
subtitle: '分享科技与生活' #副标题
description: '分享科技与生活' #描述
keywords: 张洪Heo,分享科技与生活 #关键词
author: 张洪Heo #作者
language: zh-cn #语言
timezone: '' #时区

# URL

## Set your site url here. For example, if you use GitHub Page, set url as 'https://username.github.io/project'

url: http://acrylic.zhheo.com #链接
permalink: :year/:month/:day/:title/
permalink_defaults:
pretty_urls:
  trailing_index: true # Set to false to remove trailing 'index.html' from permalinks
  trailing_html: true # Set to false to remove trailing '.html' from permalinks
```

部分参数如下，详细参数可参考官方的[配置描述](https://hexo.io/zh-cn/docs/configuration)。

|    参数     |                             描述                             |
| :---------: | :----------------------------------------------------------: |
|    title    |                           网站标题                           |
|  subtitle   |                             描述                             |
| description |                           网站描述                           |
|  keywords   |                 网站的关键词。支持多个关键词                 |
|   author    |                           您的名字                           |
|  language   | 网站使用的语言。对于简体中文用户来说，使用不同的主题可能需要设置成不同的值，请参考你的主题的文档自行设置，常见的有 zh-Hans和 zh-CN。 |
|  timezone   | 网站时区。Hexo 默认使用您电脑的时区。请参考 时区列表 进行设置，如 America/New_York, Japan, 和 UTC 。一般的，对于中国大陆地区可以使用 Asia/Shanghai |
