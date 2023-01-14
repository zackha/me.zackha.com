export default defineNuxtConfig({
  router: {
    base: '/me.zackha.com/'
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width',
      title: 'Zack Hatlen',
      link: [
        { rel: 'icon', href: 'icon.png' }
      ]
    }
  }
})
