module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-undef': 'off',
    'vue/no-parsing-error' : [2, { 'x-invalid-end-tag' : false }], // iView将标签渲染为原生html标签时，由于这些标签是自闭合的，所以有end标签会报错
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
