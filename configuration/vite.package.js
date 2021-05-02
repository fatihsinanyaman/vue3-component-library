import vue from '@vitejs/plugin-vue'

/**
 * Build configuration for client code, executed in the browser
 */
export default {
  plugins: [
    vue()
  ],

  build: {
    lib: {
      entry: 'index.js'
    },
    external: [
      'vue',
      'vuex',
      'vue-router'
    ],
    minify: 'eslint'
  }
}
