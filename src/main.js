import Vue from 'vue'
import App from './web/App'
import router from './web/router';
import store from './web/store';

import './web/assets/scss/app.scss';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
