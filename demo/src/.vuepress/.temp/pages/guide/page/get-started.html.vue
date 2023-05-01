<template><div><p>Hexo Theme Acrylic 是基于 <a href="https://butterfly.js.org" target="_blank" rel="noopener noreferrer">Hexo Theme Butterfly<ExternalLinkIcon/></a>开发的😆</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<Tabs id="6" :data='[{"title":"Github"},{"title":"Gitee"},{"title":"NPM"}]' :active="0">
<template #tab0="{ title, value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone <span class="token parameter variable">-b</span> main https://github.com/hexo-theme-Acrylic/hexo-theme-Acrylic.git themes/Acrylic
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你要安装Dev版本，使用以下指令</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone <span class="token parameter variable">-b</span> dev https://github.com/hexo-theme-Acrylic/hexo-theme-Acrylic.git themes/Acrylic
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<p>待开放</p>
</template>
<template #tab2="{ title, value, isActive }">
<p>待开放</p>
</template>
</Tabs>
<div class="hint-container info">
<p class="hint-container-title">升级方法</p>
<p>在主题目录里，运行：<code v-pre>git pull</code></p>
</div>
<h2 id="应用主题" tabindex="-1"><a class="header-anchor" href="#应用主题" aria-hidden="true">#</a> 应用主题</h2>
<p>修改 Hexo 根目录下的<code v-pre> _config.yml</code>，把主题改为 <code v-pre>Acrylic</code></p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">theme</span><span class="token punctuation">:</span> Acrylic
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装插件" tabindex="-1"><a class="header-anchor" href="#安装插件" aria-hidden="true">#</a> 安装插件</h2>
<p>如果你没有 pug 以及 stylus 的渲染器，请下载安装：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> hexo-renderer-pug hexo-renderer-stylus <span class="token parameter variable">--save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="小建议" tabindex="-1"><a class="header-anchor" href="#小建议" aria-hidden="true">#</a> 小建议</h2>
<p>为了减少升级主题后带来的不便，请使用以下方法（<strong>建议，可以不做</strong>）。</p>
<p>在 hexo 的根目录创建一个文件 <code v-pre>_config.Acrylic.yml</code>，并把主题目录的<code v-pre> _config.yml</code> 内容复制到<code v-pre>_config.Acrylic.yml</code>去。</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>复制的是主题的 <code v-pre>_config.yml</code> ，而不是 hexo 的<code v-pre> _config.yml</code></p>
</div>
<p>Hexo会自动合并k</p>
<figure><img src="https://img.gtwxxh.cn/i/2023/04/644e61267a93a.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


