---
# 这是文章的标题
title: 友情链接
# 这是页面的图标
icon: link
# 这是侧边栏的顺序
order: 3
---

## 添加

1. 前往你的 Hexo 博客的根目录

2. 输入 `hexo new page link`

3. 你会找到 `source/link/index.md` 这个文件

4. 修改这个文件：

   记得添加` type: "link"`

   ```markdown
   ---
   title: 友情链接
   date: 2022-06-07 22:17:49
   type: "link"
   ---
   ```

## 链接添加

在Hexo博客目录中的 `source/_data`（**如果没有 _data 文件夹，请自行创建**），创建一个文件 `link.yml`

```yaml
- class_name: 友情链接
  class_desc: 那些人，那些事
  link_list:
    - name: Hexo
      link: https://hexo.io/zh-tw/
      avatar: https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg
      descr: 快速、简单且强大的网志框架

- class_name: 网站
  class_desc: 值得推荐的网站
  link_list:
    - name: Youtube
      link: https://www.youtube.com/
      avatar: https://i.loli.net/2020/05/14/9ZkGg8v3azHJfM1.png
      descr: 视频网站
    - name: Weibo
      link: https://www.weibo.com/
      avatar: https://i.loli.net/2020/05/14/TLJBum386vcnI1P.png
      descr: 中国最大社交分享平台
    - name: Twitter
      link: https://twitter.com/
      avatar: https://i.loli.net/2020/05/14/5VyHPQqR6LWF39a.png
      descr: 社交分享平台


```

## 不显示？

那是由于没有添加`link_style`属性造成的。添加即可

添加在每个分类中的`class_desc`下面，如：

**（此处class_name节省-号是防止认为是删除的）**

```diff
class_name: 友情链接
  class_desc: 那些人，那些事
+ link_style: xxx
  link_list:
    - name: Hexo
      link: https://hexo.io/zh-tw/
      avatar: https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg
      descr: 快速、简单且强大的网志框架

class_name: 网站
  class_desc: 值得推荐的网站
+ link_style: xxx
  link_list:
    - name: Youtube
      link: https://www.youtube.com/
      avatar: https://i.loli.net/2020/05/14/9ZkGg8v3azHJfM1.png
      descr: 视频网站
```

xxx需要替换以下内容

![](https://img.gtwxxh.cn/i/2023/05/64564acb53a44.webp)
