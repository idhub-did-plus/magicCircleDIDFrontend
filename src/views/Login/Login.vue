<template>
    <div class="login">
        <Navigator></Navigator>
        <div id="intro">
            <div>{{$t('m.home.tit')}}</div>
            <div>Magic Circle</div>
            <div>{{$t('m.home.desc')}}</div>
        </div>
        <div id="loginBox">
            <div id="LoginTop">
                <img src="../../assets/slogo.png" alt="">
                <br>
                <img src="../../assets/title.png" alt="">
            </div>
            <div id="LoginBottom">
                <router-link to="/qrcode">
                    <button type="button" class="btn btn-success">{{$t('m.home.login')}}</button>
                </router-link>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    body{
        background: url(https://usercontents.authing.cn/bg_shadow-light_community.png),url(https://usercontents.authing.cn/bg_pattern.png),linear-gradient(315deg,#10192a,#161d29);
        background-size: 100%;
        background-position: 0 0,0 0;
        .login{
            #intro{
                width:550px;
                height:200px;
                float: left;
                margin-top: 150px;
                margin-left: 130px;
                padding:10px;
                div{
                    color:#fff;
                }
                div:nth-child(1){
                    margin-top:10px;
                    font-size: 20px;
                    font-family: Arial, "Microsoft Yahei"!important;
                    margin-left: 40px;
                }
                div:nth-child(2){
                    font-size: 30px;
                    margin-bottom: 20px;
                    margin-left: 35px;
                }
                div:nth-child(3){
                    font-family: Arial, "Microsoft Yahei"!important;
                    font-size: 14px;
                }
            }
            #loginBox{
                width:300px;
                height:300px;
                margin:120px 140px auto auto;
                background:#fff;
                border:1px solid rgba(255,255,255,0);
                border-radius: 5px;
                #LoginTop{
                    height:150px;
                    text-align: center;
                    background:WhiteSmoke;
                    color:#333;
                    font-size: 20px;
                    text-align: center;
                    img:nth-child(1){
                        display: inline-block;
                        width: 60px;
                        height: 60px;
                        margin-top: 30px;
                    }
                    img:nth-child(3){
                        display: inline-block;
                        width: 130px;
                        height: 40px;
                    }
                }
                #LoginBottom{
                    border-radius: 5px;
                    background:#fff;
                    text-align: center;
                    button{
                        width:200px;
                        display: inline-block;
                        margin-top:50px;
                    }
                }
            }
        }
    }
</style>
<script>
import Navigator from "../../components/navigator"
export default {
    components:{
        Navigator
    }
}
</script>