import { defineClientConfig } from "@vuepress/client";

import { HopeIcon, Layout, NotFound, useScrollPromise, injectDarkmode, setupDarkmode, setupSidebarItems } from "/Users/xiaohuang/Pictures/Acrylic/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { GlobalEncrypt, LocalEncrypt } from "/Users/xiaohuang/Pictures/Acrylic/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "/Users/xiaohuang/Pictures/Acrylic/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"
import Slide from "/Users/xiaohuang/Pictures/Acrylic/node_modules/vuepress-plugin-md-enhance/lib/client/SlidePage.js";

import "/Users/xiaohuang/Pictures/Acrylic/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // render icon for auto-catalog
    app.component("HopeIcon", HopeIcon);

    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,
    Slide,
  }
});