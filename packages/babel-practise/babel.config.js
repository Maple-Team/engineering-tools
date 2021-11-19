module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' }, useBuiltIns: 'usage', corejs: '3.13' }],
    '@babel/preset-typescript',
  ],
}
