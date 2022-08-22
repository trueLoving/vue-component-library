module.exports = {
  useMobile: false,
  pc: {
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
  moduleCompatible: {
    "import dayjs from 'dayjs/esm'\n": "import dayjs from 'dayjs'\n",
    "import isSameOrBefore from 'dayjs/esm/plugin/isSameOrBefore'\n":
      "import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'\n",
    "import isSameOrAfter from 'dayjs/esm/plugin/isSameOrAfter'\n":
      "import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'\n",
  },
}
