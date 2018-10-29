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
          `/docs/getting-started/sign-up`,
          `/docs/getting-started/logging-in`,
        ]
      },
      {
        title: 'CUSTOM DIAGRAMS',
        children: [
          `/docs/custom-diagrams/availability`,
          `/docs/custom-diagrams/uploading-images`,
          `/docs/custom-diagrams/deleting-images`,
          `/docs/custom-diagrams/add-diagram-to-note`,
          `/docs/custom-diagrams/image-library`,
        ]
      }
    ],

    plugins: {
      '@vuepress/i18n-ui': true,
      '@vuepress/back-to-top': true
    }
  }
}