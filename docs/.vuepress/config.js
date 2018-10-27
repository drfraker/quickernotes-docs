module.exports = {
  lang: 'en-US',
  title: 'QuickerNotes ',
  description: 'A comprehensive guide to using QuickerNotes software.',

  themeConfig: {
    nav: [
      {
        text: 'Documentation',
        link: '/docs/'
      },
      {
        text: 'QuickerNotes',
        link: 'https://quickernotes.com'
      }
    ],
    sidebar: [
      ['/docs/', "About"],
      {
        title: 'GETTING STARTED',
        children: [
          `/docs/getting-started/how-it-works`,
          `/docs/getting-started/sign-up`,
        ]
      },
      {
        title: 'CUSTOM DIAGRAMS',
        children: [
          `/docs/custom-diagrams/availability`,
          `/docs/custom-diagrams/uploading-images`,
          `/docs/custom-diagrams/deleting-images`,
        ]
      }
    ]
  }
}