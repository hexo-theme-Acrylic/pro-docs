import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "/Users/xiaohuang/Pictures/Acrylic/node_modules/vuepress-plugin-components/lib/client/shared.js";
import { h } from "vue";

import { useStyleTag } from "/Users/xiaohuang/Pictures/Acrylic/node_modules/vuepress-plugin-components/lib/client/vueuse.js";
import FontIcon from "/Users/xiaohuang/Pictures/Acrylic/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import AudioPlayer from "/Users/xiaohuang/Pictures/Acrylic/node_modules/vuepress-plugin-components/lib/client/components/AudioPlayer.js";
import Badge from "/Users/xiaohuang/Pictures/Acrylic/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import BiliBili from "/Users/xiaohuang/Pictures/Acrylic/node_modules/vuepress-plugin-components/lib/client/components/BiliBili.js";
import CodePen from "/Users/xiaohuang/Pictures/Acrylic/node_modules/vuepress-plugin-components/lib/client/components/CodePen.js";
import PDF from "/Users/xiaohuang/Pictures/Acrylic/node_modules/vuepress-plugin-components/lib/client/components/PDF.js";
import Replit from "/Users/xiaohuang/Pictures/Acrylic/node_modules/vuepress-plugin-components/lib/client/components/Replit.js";
import StackBlitz from "/Users/xiaohuang/Pictures/Acrylic/node_modules/vuepress-plugin-components/lib/client/components/StackBlitz.js";
import VideoPlayer from "/Users/xiaohuang/Pictures/Acrylic/node_modules/vuepress-plugin-components/lib/client/components/VideoPlayer.js";
import YouTube from "/Users/xiaohuang/Pictures/Acrylic/node_modules/vuepress-plugin-components/lib/client/components/YouTube.js";
import BackToTop from "/Users/xiaohuang/Pictures/Acrylic/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "/Users/xiaohuang/Pictures/Acrylic/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("AudioPlayer")) app.component("AudioPlayer", AudioPlayer);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("BiliBili")) app.component("BiliBili", BiliBili);
    if(!hasGlobalComponent("CodePen")) app.component("CodePen", CodePen);
    if(!hasGlobalComponent("PDF")) app.component("PDF", PDF);
    if(!hasGlobalComponent("Replit")) app.component("Replit", Replit);
    if(!hasGlobalComponent("StackBlitz")) app.component("StackBlitz", StackBlitz);
    if(!hasGlobalComponent("VideoPlayer")) app.component("VideoPlayer", VideoPlayer);
    if(!hasGlobalComponent("YouTube")) app.component("YouTube", YouTube);
    
  },
  setup: () => {
      useStyleTag(`\
  @import url("https://at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
  `);
  },
  rootComponents: [
    () => h(BackToTop, {}),
  ],
});
