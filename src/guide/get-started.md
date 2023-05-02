---
# 这是文章的标题
title: 安装/使用
# 这是页面的图标
icon: creative
# 这是侧边栏的顺序
order: 1
---

Hexo Theme Acrylic 是基于 [Hexo Theme Butterfly](https://butterfly.js.org)开发的

## 安装

::: tabs

@tab:active Github

```shell
git clone -b main https://github.com/hexo-theme-Acrylic/hexo-theme-Acrylic.git themes/Acrylic
```

如果你要安装Dev版本，使用以下指令

```shell
git clone -b dev https://github.com/hexo-theme-Acrylic/hexo-theme-Acrylic.git themes/Acrylic
```

@tab Gitee

待开放

@tab NPM

待开放

:::

::: info 升级方法

在主题目录里，运行：`git pull`

:::

## 应用主题

修改 Hexo 根目录下的` _config.yml`，把主题改为 `Acrylic`

```yaml
theme: Acrylic
```

## 安装插件

如果你没有 pug 以及 stylus 的渲染器，请下载安装：

```shell
npm install hexo-renderer-pug hexo-renderer-stylus --save
```

## 小建议

为了减少升级主题后带来的不便，请使用以下方法（**建议，可以不做**）。

在 hexo 的根目录创建一个文件 `_config.Acrylic.yml`，并把主题目录的` _config.yml` 内容复制到` _config.Acrylic.yml `去。

::: warning 注意

复制的是主题的 `_config.yml` ，而不是 hexo 的` _config.yml`

:::

Hexo会自动合并

![](https://img.gtwxxh.cn/i/2023/04/644e61267a93a.webp)

## 介绍视频

<BiliBili bvid="BV1PM411J7jY" />
