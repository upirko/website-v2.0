import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import i18n from './translations/index'

import 'semantic-ui-css/semantic.min.css'
import SuiVue from 'semantic-ui-vue'
Vue.use(SuiVue)

import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.baseURL = process.env.VUE_APP_BACKEND_URL || window.location.origin;
Vue.use(VueAxios, axios)

import Vue2TouchEvents from 'vue2-touch-events'
Vue.use(Vue2TouchEvents)

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
