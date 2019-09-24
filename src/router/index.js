import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import login from "./login"
import qrcode from "./qrCode"
import userinfo from "./uerInfo"

export default new Router({
  routes: [
    {path:"/",redirect:"login"},
    login,qrcode,userinfo
  ]
})
