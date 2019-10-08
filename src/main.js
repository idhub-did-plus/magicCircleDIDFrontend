import Vue from 'vue'
import App from './App.vue'
import store from '../src/store'
import router from '../src/router'
import "../src/stylesheets/main.scss"
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

Vue.config.productionTip = false

import axios from "axios"
Vue.prototype.$http = axios;

import { Header,Button } from 'mint-ui';

Vue.component("mt-header", Header);
Vue.component("mt-button", Button);

const i18n = new VueI18n({
  locale: 'en-CN',    // 语言标识
  // this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': require('./languages/lang/zh'),   // 中文语言包
    'en-US': require('./languages/lang/en')    // 英文语言包
  }
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
