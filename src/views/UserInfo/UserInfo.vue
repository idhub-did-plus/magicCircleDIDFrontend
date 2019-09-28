<template>
    <div class="user_info">
        <Navigator></Navigator>
        <userDetailTop :msg="msg" :iss="iss"></userDetailTop>
        <Right :msg="msg"></Right>
    </div>
</template>
<style lang="scss">
    .user_info{
        width:1200px;
        margin:0 auto;
    }
</style>
<script>
import Navigator from "../../components/navigator"
import userDetailTop from "../../components/userDetailTop"
import Right from "../../components/userDetailRight"
import url from "../../modules/baseURL"
const base64url = require('base64url');

export default {
    data(){
        return {
            jwt:"",
            payload:"",
            decode:"",
            iss:"",
            msg:""
        }
    },
    components:{
        Navigator,
        userDetailTop,
        Right
    },
    created(){
        var jwt = window.localStorage.getItem("token");
        this.payload = jwt.split(".")[1];
        this.jwt = jwt;
        this.decode =  JSON.parse(base64url.decode(this.payload));
        this.iss = this.decode.iss;

        this.$http({
            method: 'post',
            url: url.baseURL+"/thirdparty/identity_information?identity="+this.iss,
            data: this.jwt,
            headers: { 'content-type': 'text/plain' }
        }).then(res=>{
            if(res.data.success == true){
                this.msg = res.data.data;
            }else{
                alert("授权访问失败")
            }
        })
    }
}
</script>