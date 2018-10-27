module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'QuickerNotes',
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
            text: 'docs',
            link: '/docs/'
          }
        ],
        sidebar: [
          '/docs/',
          {
            title: 'GETTING STARTED',
            children: [
              `/docs/getting-started/how-it-works`,
              `/docs/getting-started/sign-up`,
            ]
          }
        ]
      }
    }
  }
}