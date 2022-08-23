module.exports = {
  useMobile: false,
  name: 'Varlet',
  namespace: 'var',
  host: 'localhost',
  port: 8080,
  title: 'HUI PLUS COMPONENTS',
  themesKey: 'VARLET_THEMES',
  logo: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
  pc: {
    redirect: '/index',
    title: {
      'zh-CN': 'HUI PLUS COMPONENTS',
      'en-US': 'English',
    },
    header: {
      i18n: false,
      github: false,
      darkMode: false,
    },
    menu: [
      {
        text: {
          'zh-CN': '基础组件',
          'en-US': 'Basic Components',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': 'Button 按钮',
          'en-US': 'Button',
        },
        doc: 'button',
        type: 2,
      },
    ],
  },
  highlight: {
    style: null,
  },
}
