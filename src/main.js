import Vue from 'vue'
import App from './App.vue'
import store from '../src/store'
import router from '../src/router'
import "../src/stylesheets/main.scss"

Vue.config.productionTip = false

import axios from "axios"
Vue.prototype.$http = axios;

import { Header,Button } from 'mint-ui';

Vue.component("mt-header", Header);
Vue.component("mt-button", Button);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
