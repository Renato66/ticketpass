import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'
import registerComponents from './plugins/core-components.js'
import importCss from './plugins/importCss.js'
importCss('https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css')
import './index.css'
import './sw-register.js'

const app = createApp(App)
app.use(router)
registerComponents(app)

window.vm = app.mount('#app')
