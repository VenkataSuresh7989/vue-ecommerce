import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

/* Icons */
import 'boxicons';

/* Custom Styles */
import './assets/css/styles.css';

/* JQuery Integration */
import 'jquery';

/* Popper Integration */
import 'popper.js/dist/umd/popper';

/* Bootstrap Integration */
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
