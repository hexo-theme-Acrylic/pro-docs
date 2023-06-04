---
# 这是文章的标题
title: 文章
# 这是页面的图标
icon: note
# 这是侧边栏的顺序
order: 6
---

### post_meta

```yml
post_meta:
  page: # 首页
    date_type: created # created/updated/both 文章显示创作日期/更新日期/都显示
    date_format: relative 
    categories: true # 首页显示分类
    tags: true # 首页显示标签
    label: true # 首页显示文章描述
  post:
    date_type: both # created/updated/both 文章显示创作日期/更新日期/都显示
    date_format: date 
    categories: true # 首页显示分类
    tags: true # 首页显示标签
    label: true # 首页显示文章描述
  location: 成都 #地点
```

| 配置名称    | 解释                     | 值                   |
| ----------- | ------------------------ | -------------------- |
| page:/post: | 首页文章/文章页          | object               |
| date_type   | 创作日期/更新日期/都显示 | created/updated/both |
| date_format | 日期/相对日期            | bool                 |
| categories  | 是否显示分类             | bool                 |
| tags        | 是否显示标签             | bool                 |
| label       | 是否显示解释             | bool                 |
| location    | 地点                     | text                 |

也可见[页面 meta 显示](https://butterfly.js.org/posts/4aa8abbe/#%E9%A0%81%E9%9D%A2-meta-%E9%A1%AF%E7%A4%BA)

### post_head_ai_description

```yml
# 文章顶部ai摘要
post_head_ai_description:
  enable: true
  gptName: Heo
  mode: tianli # 默认模式 可选值: tianli/local
  switchBtn: false # 可以配置是否显示切换按钮 以切换tianli/local
  btnLink: https://afdian.net/item/886a79d4db6711eda42a52540025c377
  randomNum: 3 # 按钮最大的随机次数，也就是一篇文章最大随机出来几种
  basicWordCount: 1000 # 最低获取字符数, 最小1000, 最大1999
  key: SZLhZo3TjRN7GZ9JiRFa
  Referer: https://xx.xx/
```

修改主题配置文件，其中`key`和`Referer` 为 `tianli gpt` 的`key`和`Referer`，可在 [爱发电](https://afdian.net/item/886a79d4db6711eda42a52540025c377) 购买 key，购买完成后添加机器人 QQ：`2102916311`

机器人中回复：/chat 你的 key 你的博客地址注意保留最后的斜杠(即为 Referer)

例如：/chat tN2jLmG7fX9zHk5dVbQr https://pro.acrylic.org.cn/

格式发送，返回的 token 即你的剩余字数

配置完成以后在文章的`Front-matter`配置`ai: true`, 使用 `tianli gpt` 需将 mode 改为`tianli` 然后在需要 ai 摘要的文章的`Front-matter`配置`ai: true`

如果使用`local`,需要按照以下方式配置

```markdown
---
title: 标题
ai:
  - 
  - 本文真不错
---
```

| mode   | 对比                                                         |
| ------ | ------------------------------------------------------------ |
| tianli | 具有完备的训练后端功能，可优秀的完成文章的摘要               |
| local  | 本地，需自行在文章顶部添加 ai 摘要，内容自行决定，书写较为麻烦。 |

### theme_color

```yml
theme_color:
  enable: true
  class: online # online/local(未完成)
```

| 配置参数 | 解释              | 值                   |
| -------- | ----------------- | -------------------- |
| enable   | 是否开启主题色    | bool                 |
| class    | 在线提取/本地写入 | online/local(未完成) |

| 种类     | 方法                                                         |
| -------- | ------------------------------------------------------------ |
| 在线提取 | 1. 腾讯云的数据万象能力，前提是图片存储在腾讯云的 cos 上     |
| 在线提取 | 2. 使用多吉云的云存储+免费 cdn，云存储必须是付费版本的，1000 张图片 1G 以内大概在 1 块钱 1 年。cdn 免费每月 20G |
| 在线提取 | 3. 找Marcus或GB购买[Acrylic图床](https://photo.acrylic.org.cn/)(推荐) |
| 本地写入 | 在front_matter里写入`t_color: #80b3ff`(未完成)               |

### 字数统计与公式

```yml
# 字数统计 (wordcount)
# 注意安装对应的插件
wordcount:
  enable: false
  post_wordcount: true
  min2read: true
  total_wordcount: true

# 数学公式
# MathJax
mathjax:
  enable: false
  per_page: false

# KaTeX
katex:
  enable: false
  per_page: false
  hide_scrollbar: true
```

字数统计需先在根目录执行

```shell
npm install hexo-wordcount --save
```

 或者是

```shell
yarn add hexo-wordcount
```

再开启enable项

数学公式见[Math 数学](https://butterfly.js.org/posts/ceeb73f/#Math-%E6%95%B8%E5%AD%B8)

### 版权

```yml
# 版权 (copyright)
copyright:
  enable: true
  decode: false
  link: /cc/
  license: CC BY-NC-SA 4.0
  short: cc
  license_url: https://creativecommons.org/licenses/by-nc-sa/4.0/
```

由于Hexo 4.1开始，默认对网址进行解码，以至于如果是中文网址，会被解码，可设置decode: true来显示中文网址。

如果有文章（例如：转载文章）不需要显示版权，可以在文章Front-matter单独设置

```yml
copyright: false
```

支持对单独文章设置版权信息，可以在文章Front-matter单独设置

```yml
copyright_author: xxxx
copyright_author_href: https://xxxxxx.com
copyright_url: https://xxxxxx.com
copyright_info: 此文章版权归xxxxx所有，如有转载，请注明来自原作者
```

### 相关文章

```yml
# 相关文章 (related post)
related_post:
  enable: true
```

![相关文章](D:\pro-docs\src\guide\page\img\post\image-20230604105421499.png)

### ptool

```yml
# 文章 ptool (ptool)
ptool:
  enable: true
```

![ptool](D:\pro-docs\src\guide\page\img\post\image-20230604105508611.png)

### 打赏

```yml
# 打赏 (reward)
reward:
  enable: true
  QR_code:
    - img: https://xx.com/wechat.png
      link:
      text: 微信
    - img: https://xx.com/alipay.png
      link:
      text: 支付宝
```

