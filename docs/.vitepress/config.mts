import { defineConfig } from 'vitepress'

const base = process.env.VITEPRESS_BASE || '/jmu-mc-doc/'

export default defineConfig({
  base,
  lang: 'zh-CN',
  title: 'JMU 高校复原工程',
  description: '集美大学 JMU 高校复原工程 Minecraft 服务器的公开玩法、客户端安装与建筑指南',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg` }],
    ['meta', { name: 'theme-color', content: '#3c8527' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'JMU 高校复原工程' }],
    ['meta', { property: 'og:description', content: '在 Minecraft 中复原集美大学校园，记录建筑、像素画与共同创作。' }]
  ],
  themeConfig: {
    logo: `${base}creeper-grass-block.svg`,
    siteTitle: 'JMU 高校复原工程',
    nav: [
      { text: '首页', link: '/' },
      { text: '开始游玩', link: '/guide/quick-start' },
      { text: '客户端安装', link: '/guide/client-install' },
      { text: '建筑与权限', link: '/guide/builder' },
      { text: '常见问题', link: '/guide/faq' }
    ],
    sidebar: [
      {
        text: '开始游玩',
        collapsed: false,
        items: [
          { text: '快速进入服务器', link: '/guide/quick-start' },
          { text: '客户端下载与安装', link: '/guide/client-install' }
        ]
      },
      {
        text: '校园共创',
        collapsed: false,
        items: [
          { text: '建筑权限与协作规范', link: '/guide/builder' }
        ]
      },
      {
        text: '帮助',
        collapsed: false,
        items: [
          { text: '常见问题与排查', link: '/guide/faq' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/VincentZyu233/jmu-mc-doc' }
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '没有找到相关内容',
            resetButtonTitle: '清除查询',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    lastUpdated: {
      text: '最后更新于'
    },
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    footer: {
      message: 'JMU Campus Reconstruction · Minecraft 26.3 · Fabric',
      copyright: 'Copyright © 2026 VincentZyu'
    }
  }
})
