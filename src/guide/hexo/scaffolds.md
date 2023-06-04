---
#这是文章的标题
title: 模板配置
# 这是页面的图标
icon: page
# 这是侧边栏的顺序
order: 2
---
## 模板 (scaffolds)

### 页面模板

`scaffolds\page.md`

```md
---
title: {{ title }}
date: {{ date }}
updated: 
description: 
keywords: 
cover: 
layout: 
comments: 
type: 
tips: 
---
```

### 文章模板

`scaffolds\post.md`

```md
---
title: {{ title }}
date: {{ date }}
updated: 
categories: 
tags: 
description: 
keywords: 
cover: 
top_group_index: #置顶top_group顺序，非负整数，数字越大越靠前
layout: 
comments: 
t_color: 
---
```

### 默认模板

`scaffolds\draft.md`

```md
---
title: {{ title }}
date: {{ date }}
updated: 
categories: 
tags: 
description: 
keywords: 
cover: 
top_group_index: #置顶top_group顺序，非负整数，数字越大越靠前
layout: 
comments: 
---
```

至此,HEXO配置完毕🎉