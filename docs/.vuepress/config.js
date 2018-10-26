module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'QuickerNotes Docs',
      description: 'Get Help For QuickerNotes'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '阅读文档',
      description: '超越静态'
    }
  },
  themeConfig: {
    locales: {
      '/': {
        label: 'English',
        selectText: 'languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: [
          {
            text: 'docs',
            link: '/docs/'
          }
        ],
        sidebar: [
          '/docs/',
          genSidebarConfig('', 'GET STARTED')
        ]
      },
      '/zh/': {
        label: 'Chinese',
        selectText: 'languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: [
          {
            text: 'docs',
            link: '/zh/docs/'
          }
        ],
        sidebar: [
          '/zh/docs/',
          genSidebarConfig('/zh', 'API')
          
        ]
      }
    }
  }
}

function genSidebarConfig (lang, title) {
  return {
    title: `${title}`, 
    children: [
      `${lang}/docs/get-started/page-one`,
      `${lang}/docs/get-started/page-two`,
    ] 
  }
}