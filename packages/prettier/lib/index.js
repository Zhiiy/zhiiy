/**
 * Prettier 配置项
 * https://prettier.io/docs/en/options.html
 */
module.exports = {
  // 句末不添加分号
  semi: false,
  // tab 缩进使用 2 个空格
  tabWidth: 2,
  // 使用单引号
  singleQuote: true,
  // 每行代码最大长度
  printWidth: 100,
  // 添加尾随逗号
  trailingComma: 'all',
  // 换行符使用 auto
  endOfLine: 'auto',
  // 不对 vue 中的 script 及 style 标签进行缩进
  vueIndentScriptAndStyle: false,
  // 仅在必需时为对象的 key 添加引号
  quoteProps: 'as-needed',
  // 在 jsx 中使用双引号
  jsxSingleQuote: false,
  // 在对象花括号内的两旁添加空格 => { foo: bar }
  bracketSpacing: true,
  // 箭头函数仅有一个参数时，参数也添加括号 (x) => x
  arrowParens: 'always',
  // 对 Markdown 文本换行不进行任何操作，保持原样
  proseWrap: 'preserve',
  // 对 HTML 全局空白不敏感
  htmlWhitespaceSensitivity: 'ignore',
  // 自动格式化嵌入的代码内容
  embeddedLanguageFormatting: 'auto',
  // 不强制 html vue jsx 中的属性（具有多个时）单独占一行
  singleAttributePerLine: false,
}
