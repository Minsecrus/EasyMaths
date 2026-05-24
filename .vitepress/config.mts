import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'EasyMaths',
  description: '数学笔记与练习整理',
  base: process.env.BASE_PATH ?? '/',
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    math: true
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '三角函数', link: '/三角函数' },
      { text: '神卷', link: '/神卷' },
      { text: 'mdr卷', link: '/mdr卷' }
    ],
    sidebar: [
      {
        text: 'EasyMaths',
        items: [
          { text: '首页', link: '/' }
        ]
      },
      {
        text: '笔记',
        items: [
          { text: '浅谈三角函数', link: '/三角函数' },
          { text: '神卷', link: '/神卷' },
          { text: 'mdr卷', link: '/mdr卷' }
        ]
      }
    ],
    footer: {
      message: 'Licensed under CC BY-NC-SA 4.0.',
      copyright: 'Copyright © 2026 EasyMaths'
    },
    socialLinks: []
  }
})
