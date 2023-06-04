---
# 这是文章的标题
title: 导航栏nav,手机边栏sidebar和中控台console
# 这是页面的图标
icon: tab
# 这是侧边栏的顺序
order: 1
---
## 导航栏 (nav)
```yml
# 导航栏 (nav)
# --------------------------------
nav:
  group_icon: fas fa-grip-vertical
  left_groups:
    enable: true
    group:
      - title: 博客
        a_item:
          - text: 主页
            link: https://zhheo.com/
            img: https://p.zhheo.com/20232e121c3fb2daa71897d26a515e030f49073402.png!cover_mini
            class: out
          - text: 博客
            link: /
            img: https://p.zhheo.com/20234681e06b8e086aa5b15481cb89fd38c7071002.png!cover_mini
            class: out
          - text: 图片博客
            link: https://plog.zhheo.com/
            img: https://p.zhheo.com/20236a16354d7c333cc7595efaee4b8c5667074602.png!cover_mini
            class: out
          - text: 开发博客
            link: https://apps.zhheo.com/
            img: https://p.zhheo.com/2023042bb31614949504f9ac59b134ce971d075802.png!cover_mini
            class: out
  logo: 
    enable: true
    class: i_class #i_class/text/img i_class为icon图标,text为文字,img为图片
    custom: heofont icon-heologo # heofont icon-heologo / Heo / https://xxx.com/logo.png/
  fps_enable: false
  menu:
    文库:
      文章列表: /archives/ || fas fa-box-archive
      全部分类: /categories/ || fas fa-cube
      全部标签: /tags/ || fas fa-tags
      即刻短文: /essay/ || fas fa-bars-staggered
    专栏:
      设计报告: /tags/设计报告/ || fas fa-swatchbook
      设计分享: /tags/Heocan/ || fas fa-object-group
      设计工具: /tags/Sketch/ || fas fa-palette
      视频混剪: /tags/混剪/ || fas fa-scissors
    友链:
      友链鱼塘: /fcircle/ || fas fa-fish-fins
      友情链接: /link/ || fas fa-user-group
      宝藏博主: javascript:travelling() || fas fa-bus
    我的:
      在线工具: /tlink/ || fas fa-screwdriver-wrench
      电影推荐: /movies/ || fas fa-clapperboard
      关于本站: /about/ || fas fa-sailboat
  right_button:
    travelling:
      enable: true
      icon: fas fa-train-subway
    random:
      enable: true
      icon: fas fa-shuffle
    search: fas fa-magnifying-glass
    console:
      enable: true
      icon: fas fa-bars-progress
    totop: fas fa-arrow-up
```
### nav.group_icon与nav.left_groups.group
```yml
group_icon: fas fa-grip-vertical
left_groups:
enable: true
group:
  - title: 博客
    a_item:
      - text: 主页
        link: https://zhheo.com/
        img: https://p.zhheo.com/20232e121c3fb2daa71897d26a515e030f49073402.png!cover_mini
        class: out
      - text: 博客
        link: /
        img: https://p.zhheo.com/20234681e06b8e086aa5b15481cb89fd38c7071002.png!cover_mini
        class: out
      - text: 图片博客
        link: https://plog.zhheo.com/
        img: https://p.zhheo.com/20236a16354d7c333cc7595efaee4b8c5667074602.png!cover_mini
        class: out
      - text: 开发博客
        link: https://apps.zhheo.com/
        img: https://p.zhheo.com/2023042bb31614949504f9ac59b134ce971d075802.png!cover_mini
        class: out
```
| 配置名称   | 解释              | 值     |
| ---------- | ----------------- | ------ |
| group_icon | left_group的图标  | icon   |
| title      | 父标题            | text   |
| text       | 子文字            | text   |
| img        | 子图像            | img    |
| link       | 子链接            | url    |
| class      | 站内链接/站外链接 | in/out |

![nav.group_icon与nav.left_groups.group](https://img1.acrylic.org.cn/2023/06/03/647b1d199967a.webp)
### nav.logo.class

```yml
logo: 
    enable: true
    class: i_class #i_class/text/img i_class为icon图标,text为文字,img为图片
    custom: heofont icon-heologo # heofont icon-heologo / Heo / https://xxx.com/logo.png/
```
| 配置名称 | 解释 | custom值 |
| -------- | ---- | -------- |
| i_class  | 图标 | icon     |
| text     | 文字 | text     |
| img      | 图片 | img      |
### nav.menu
同butterfly
```
menu:
    文库:
      文章列表: /archives/ || fas fa-box-archive
      全部分类: /categories/ || fas fa-cube
      全部标签: /tags/ || fas fa-tags
      即刻短文: /essay/ || fas fa-bars-staggered
    专栏:
      设计报告: /tags/设计报告/ || fas fa-swatchbook
      设计分享: /tags/Heocan/ || fas fa-object-group
      设计工具: /tags/Sketch/ || fas fa-palette
      视频混剪: /tags/混剪/ || fas fa-scissors
    友链:
      友链鱼塘: /fcircle/ || fas fa-fish-fins
      友情链接: /link/ || fas fa-user-group
      宝藏博主: javascript:travelling() || fas fa-bus
    我的:
      在线工具: /tlink/ || fas fa-screwdriver-wrench
      电影推荐: /movies/ || fas fa-clapperboard
      关于本站: /about/ || fas fa-sailboat
```
### nav.right_button
```yml
right_button:
    travelling:
      enable: true
      icon: fas fa-train-subway
    random:
      enable: true
      icon: fas fa-shuffle
    search: fas fa-magnifying-glass
    console:
      enable: true
      icon: fas fa-bars-progress
    totop: fas fa-arrow-up
```
| 配置名称   | 解释               | 值        |
| ---------- | ------------------ | --------- |
| travelling | 随机友联或开往项目 | bool,icon |
| random     | 随机文章           | bool,icon |
| search     | 搜索               | icon      |
| console    | 控制台             | bool,icon |
| totop      | 回到顶部           | icon      |

## 手机边栏 (sidebar)

```
# 手机边栏 (sidebar)
# --------------------------------------
sidebar: 
  list_group: true
  tag: true
```

| 配置名称   | 解释                     | 值   |
| ---------- | ------------------------ | ---- |
| list_group | 手机端left_group是否显示 | bool |
| tag        | 手机端tag是否显示        | bool |

![手机边栏 (sidebar)](D:\pro-docs\src\guide\part\img\nav\image-20230603200635820.png)

![手机边栏 (sidebar)](D:\pro-docs\src\guide\part\img\nav\image-20230603200736219.png)

## 中控台 (console)

```
# 中控台 (console)
# --------------------------------------
console:
  comment: true
  tag: true
  archives: true 
```

| 配置名称 | 解释     | 值   |
| -------- | -------- | ---- |
| comment  | 最近评论 | bool |
| tag      | 标签     | bool |
| archives | 归档     | bool |

![中控台 (console)](D:\pro-docs\src\guide\part\img\nav\image-20230603201008660.png)
