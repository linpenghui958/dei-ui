module.exports = {
  title: 'Dei UI',
  description: '一款清新脱俗的兄弟UI-Dei UI',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/linpenghui958/dei-ui' }
    ],
    sidebar: [
      {
        title: '使用',
        children: [
          '/guide/',
          '/guide/install'
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/input',
          '/components/toast',
          '/components/popover',
          '/components/grid',
        ]
      }
    ]

  }
}
