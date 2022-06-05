export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'app_costumers',
    htmlAttrs: {
      lang: 'en'
    },
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js'
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel:'stylesheet', href:'https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css'},
      {rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'},
      {rel:'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [


  ],
  env: {
    backendUrl: process.env.NUXT_PUBLIC_BACKEND_URL
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast',
  ],
  toast: {
    position: 'bottom-center',
    duration: 2000,
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
},
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.NUXT_PUBLIC_BACKEND_URL,
    credentials: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Authentication
  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: 'http://localhost:8000'
      },
    },
  }
}
