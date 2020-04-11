import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import 'semantic-ui-css/semantic.min.css'
import SuiVue from 'semantic-ui-vue'
Vue.use(SuiVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
