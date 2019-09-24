<template>
    <div class="user_info">
        <Navigator></Navigator>
        <userDetailTop :msg="msg" :iss="iss"></userDetailTop>
        <Right></Right>
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
        this.msg = require("../../assets/test.json").data;
        
        var test = "eyJhbGciOiJFUzI1NmsiLCJ0eXAiOiJKV1QifQ==.eyJhdWQiOiJkaWQ6aWRodWI6MHhkaWQxZDhmOTA2Yzc0NWIwYTgyZjRkMjFlMDJiYWZkN2RmMWEwZTE0Iiwic3ViIjoibG9naW58YXV0aG9yaXphdGlvbnxzdHxkaWR8YXJjaGl2ZSIsInVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDgwXC9zdC1wcm9qZWN0XC8jXC9xcmNvZGUiLCJyZHQiOiJodHRwOlwvXC8xMC4xNi4zNC4yNDozMDA1XC92MVwvZGlkXC90b2tlblwvIiwianRpIjoiNDNjMTJlNTctN2NkYi00Mzg1LWFhZWUtNjNiNGJjMzEzZjJlIiwiZXhwIjoxNTY5MjkxNzI4LCJpc3MiOiIweDE0YmMzMDk2ZmFlZjdhMDExZmZkNjU1ZjRhMGZkMmI1MzRjMDlkMTkifQ==.NOKzlA3aaCwXHIbhKKX4fWO7J4Jd6PfKFVqeoN4_5nlxJEFXJTWgYasXXCdsA6eKgPhzPMACsJrwr6m8vLaEnRw=";
        window.localStorage.setItem("token",test)
        var jwt = window.localStorage.getItem("token");
        this.payload = jwt.split(".")[1];
        this.jwt = jwt;
        this.decode =  JSON.parse(base64url.decode(this.payload));
        this.iss = this.decode.iss;
        // this.$http.post("http://10.16.58.38:8080/thirdparty/identity_information",{
        //     jwt:this.jwt,
        //     identity:this.iss
        // }).then(res=>{
        //     console.log(res);
        // })
    }
}
</script>