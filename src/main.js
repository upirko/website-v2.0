import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import i18n from './i18n'

import 'semantic-ui-css/semantic.min.css'
import SuiVue from 'semantic-ui-vue'
Vue.use(SuiVue)

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
