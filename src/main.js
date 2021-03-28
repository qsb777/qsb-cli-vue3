import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './api'
import {
  registerPlugins
} from './plugins'
import "ant-design-vue/dist/antd.css"

const app = createApp(App)
app.config.devtools = process.env.NODE_ENV === 'development'
app.config.globalProperties.$http = http
registerPlugins(app)
app.use(router)
app.use(store)

app.mount('#app')