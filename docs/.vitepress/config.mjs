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
      { text: '永久乐子', link: '/flsq/' }
    ],
    sidebar: [
      {
        text: '下载',
        link: '/download',
      },
      {
        text: '用户使用文档',
        link: '/doc/user/',
        collapsed: true,
        items: [
          {
            text: '快速上手',
            link: '/doc/user/get-started',
          },
          {
            text: '配置服务器',
            link: '/doc/user/configure-server',
          },
          {
            text: '管理服务器',
            link: '/doc/user/manage-server',
          },
          {
            text: '下载资源',
            link: '/doc/user/downloads',
          },
          {
            text: '终端',
            link: '/doc/user/console',
          },
          {
            text: '插件',
            link: '/doc/user/plugins',
          },
        ]
      },
      {
        text: '开发文档',
        link: '/doc/dev/',
        collapsed: true,
        items: [
          {
            text: '下载模块',
            link: '/doc/dev/downloads',
          },
          {
            text: '插件开发',
            link: '/doc/dev/plugins',
          },
        ]
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
      },
      {
        text: "乐子风林水起",
        link: "/flsq/",
        collapsed: true,
        items: [
          {
            text: "第一传",
            link: "/flsq/",
          },
          {
            text: "续作",
            link: "/flsq/fuckFLSQ_2nd",
          }
        ]
      },
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
    search: {
      provider: "algolia",
      options: {
        appId: "J9SENYL9QI",
        apiKey: "94bf0d70788ed044d42bb9254b41b0da",
        indexName: "mcsl",
        placeholder: "搜索楞何楞想要得嘢？",
        translations: {
          button: {
            buttonText: "搜索...",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            searchBox: {
              resetButtonTitle: "清除查询条件",
              resetButtonAriaLabel: "清除查询条件",
              cancelButtonText: "取消",
              cancelButtonAriaLabel: "取消",
            },
            startScreen: {
              recentSearchesTitle: "搜索历史",
              noRecentSearchesText: "没有搜索历史",
              saveRecentSearchButtonTitle: "保存至搜索历史",
              removeRecentSearchButtonTitle: "从搜索历史中移除",
              favoriteSearchesTitle: "收藏",
              removeFavoriteSearchButtonTitle: "从收藏中移除",
            },
            errorScreen: {
              titleText: "无法获取结果",
              helpText: "请检查网络连接",
            },
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
              searchByText: "搜索提供者",
            },
            noResultsScreen: {
              noResultsText: "无法找到相关结果",
              suggestedQueryText: "你可以尝试查询",
              reportMissingResultsText: "你认为该查询应该有结果？",
              reportMissingResultsLinkText: "点击反馈",
            },
          },
        },
      },
    },
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    externalLinkIcon: true,
    darkModeSwitchLabel: "外观",
  },
  titleTemplate: 'MCSL2'
})
