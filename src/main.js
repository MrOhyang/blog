// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import _ from 'lodash'
import moment from 'moment'
import vueDialog from '@/plugins/dialog/vueDialog'

Vue.config.productionTip = false
Vue.$http = Vue.prototype.$http = Axios
Vue.use(vueDialog);

import router from './router'

import App from './App'

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
