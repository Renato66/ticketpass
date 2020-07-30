import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'
import registerComponents from './plugins/core-components.js'
import './index.css'

const app = createApp(App)
app.use(router)
registerComponents(app)

window.vm = app.mount('#app')
