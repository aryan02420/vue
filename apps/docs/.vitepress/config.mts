import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "aryan02420/vue",
  description: "A collection of Vue.js utilities",
  lastUpdated: true,
  srcDir: "../../",
  rewrites: {
    "apps/docs/:path*": ":path*",
    "packages/vue-context/README.md": "vue-context.md",
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "Packages",
        items: [
          {
            text: "vue-context",
            link: "/vue-context",
          },
        ]
      },
    ],
    sidebar: [
      {
        text: "Packages",
        link: "/packages",
        items: [
          {
            text: "vue-context",
            link: "/vue-context",
          },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/aryan02420/vue" },
    ],
    search: {
      provider: 'local',
    },
    outline: 'deep',
    lastUpdated: {
      formatOptions: {
        dateStyle: 'long',
        timeStyle: 'short',
      },
    },
    editLink: {
      pattern: 'https://github.com/aryan02420/vue/blob/main/:path',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present aryan02420',
    },
  },

});
