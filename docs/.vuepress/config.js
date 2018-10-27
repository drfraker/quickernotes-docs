module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'QuickerNotes Docs',
      description: 'Get Help With QuickerNotes'
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
            text: 'Documentation',
            link: '/docs/'
          }
        ],
        sidebar: [
          {
            title: 'GET STARTED',
            children: [
              `/docs/get-started/page-one`,
              `/docs/get-started/page-two`,
            ]
          },
          '/docs/',
        ]
      }
    }
  }
}