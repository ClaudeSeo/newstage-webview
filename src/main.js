import Vue from 'vue'
import VueHead from 'vue-head'

import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueHead)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
