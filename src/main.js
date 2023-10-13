import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import '../public/js/bootstrap.bundle.min.js'
import '../public/js/custom.js'
import '../public/js/tiny-slider.js'

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
