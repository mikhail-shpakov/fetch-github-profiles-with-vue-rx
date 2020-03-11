module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/fetch-github-profiles-with-vue-rx/'
    : '/',
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    name: 'Vue-RX example by Mikhail Shpakov',
    themeColor: '#FFFFFF'
  }
}
