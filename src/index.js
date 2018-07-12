// import 'babel-polyfill';
import Vue from 'vue';

import router from './js/router';

// Vue.config.productionTip = false; // Disable the "You are running Vue in development mode. message"

new Vue({
  el: '#app',
  router: router,
  render: h => h('router-view')
});
