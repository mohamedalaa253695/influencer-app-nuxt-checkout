export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  render: {
    csp: true
  },
  debug: true,
  ssr: true,
  head: {
    title: 'nuxt-checkout',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    ['nuxt-stripe-module', {
      publishableKey: 'pk_test_PEJn3x66neMVsVQBkdvdm4LF00JSCn9Hdm',
    }],
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    BASE_URL: 'http://localhost:8002/api/'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
}
