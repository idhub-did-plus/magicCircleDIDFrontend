<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
  #app{
    width:1280px;
    margin:0 auto;
  }
</style>
<script>
import Login from "./views/Login/Login"
import qrCode from "./views/qrCode/qrCode"
import UserInfo from "./views/UserInfo/UserInfo"
export default {
  components:{
    Login,
    qrCode,
    UserInfo
  }
}
</script>
