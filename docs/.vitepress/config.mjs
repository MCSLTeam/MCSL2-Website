import { defineConfig } from 'vitepress'
import timeline from "vitepress-markdown-timeline";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: 'MCServerLauncher 2',
  description: '一个简洁、全能的Minecraft开服器',
  head: [['link', { rel: 'icon', href: 'https://img.fastmirror.net/s/2023/12/03/656c4416b04b8.png' }]],
  markdown: {
    config: (md) => {
      md.use(timeline)
    }
  },
  themeConfig: {
    outlineTitle: "目录",
    lastUpdated: {
      text: "最后更新",
    },
    logo: "https://img.fastmirror.net/s/2023/12/03/656c4416b04b8.png",
    nav: [
      { text: '主页', link: '/' },
      { text: '下载', link: '/download' },
      { text: '更新日志', link: '/update-log/' },
      { text: '文档', link: '/doc/' },
      { text: '相关链接', link: '/links/' },
    ],
    sidebar: [
      {
        text: '下载',
        link: '/download',
      },
      {
        text: '用户使用文档',
        link: '/doc/user/',
      },
      {
        text: '开发文档',
        link: '/doc/dev/',
      },
      {
        text: "更新日志",
        link: "/update-log/",
        collapsed: true,
        items: [
          {
            text: "v2.2.3.1 [Hot Fix]",
            link: "/update-log/",
          },
          {
            text: "v2.2.2.4",
            link: "/update-log/v2.2.2.4",
          },
          {
            text: "v2.2.2.3",
            link: "/update-log/v2.2.2.3",
          },
          {
            text: "v2.2.2.2",
            link: "/update-log/v2.2.2.2",
          },
          {
            text: "v2.2.2.1",
            link: "/update-log/v2.2.2.1",
          },
          {
            text: "v2.2.2.0",
            link: "/update-log/v2.2.2.0",
          },
          {
            text: "v2.2.1.2",
            link: "/update-log/v2.2.1.2",
          },
          {
            text: "v2.2.1.1",
            link: "/update-log/v2.2.1.1",
          },
          {
            text: "v2.2.1.0",
            link: "/update-log/v2.2.1.0",
          },
          {
            text: "v2.2.0.1",
            link: "/update-log/v2.2.0.1",
          },
          {
            text: "v2.2.0.0",
            link: "/update-log/v2.2.0.0",
          },
          {
            text: "v2.1.3.8",
            link: "/update-log/v2.1.3.8",
          },
          {
            text: "v2.1.3.7",
            link: "/update-log/v2.1.3.7",
          },
          {
            text: "v2.1.3.5",
            link: "/update-log/v2.1.3.5",
          },
          {
            text: "v2.1.3-230515-0005",
            link: "/update-log/v2.1.3-230515-0005",
          },
          {
            text: "v2.1.3-230514-0033",
            link: "/update-log/v2.1.3-230514-0033",
          },
          {
            text: "v2.1.3-230512-2204",
            link: "/update-log/v2.1.3-230512-2204",
          },
          {
            text: "v2.0 [Demo]",
            link: "/update-log/v2.0",
          },
          {
            text: "v1.3",
            link: "/update-log/v1.3",
          },
          {
            text: "v1.2",
            link: "/update-log/v1.2",
          },
          {
            text: "v1.1",
            link: "/update-log/v1.1",
          },
          {
            text: "v1.0",
            link: "/update-log/v1.0",
          }
        ]
      }
    ],
    footer: {
      message: 'Site built by LxHTT / Powered by VitePress',
      copyright: '© 2022 - 2023 MCSL2 Team. All Rights Reserved.'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/MCSLTeam' }
    ],
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    externalLinkIcon: true,
    darkModeSwitchLabel: "外观",
  },
  titleTemplate: 'MCSL2'
})
