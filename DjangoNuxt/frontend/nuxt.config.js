var BundleTracker = require("webpack-bundle-tracker");

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  server: {
    port: 3000,
    host: '127.0.0.1'
  },
  buidlDir: 'http://0.0.0.0:3000/',
  /*  router: {
    base: '/app/'
  },*/
  build: {
    plugins: [
      new BundleTracker({
        path: __dirname,
        filename: "./webpack-stats.json"
      }),
    ],
    publicPath: 'http://0.0.0.0:3000/',
    devMiddleware: {
      publicPath: 'http://0.0.0.0:3000/',
      headers: {
        "Access-Control-Allow-Origin": "\*",
      },
      watchOptions: {
        poll: 1000,
      },
    },
    hotMiddleware: {
      client: {
        name: 'juan',
        dynamicPublicPath: true
      }
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "chunk-vendors",
            chunks: "all",
            priority: 1
          }
        }
      }
    },
    //You can extend webpack config here
    extend (config, ctx) {
        config.output.publicPath = 'http://0.0.0.0:3000/';
        //config.output.crossOriginLoading = 'anonymous'
        /* const devServer = {
          public: 'http://0.0.0.0:3000',
          port: 3000,
          host: '0.0.0.0',
          hotOnly: true,
          https: false,
          watchOptions: {
             poll: 1000,
          },
          headers: {
             "Access-Control-Allow-Origin": "\*",
          }
         };
         config.devServer = devServer; */
    }
  }
}
