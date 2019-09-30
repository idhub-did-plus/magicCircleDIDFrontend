<template>
    <div class="qrcode">
        <div class="codeBox" ref="newcode">
            <div id="qrcode"></div>
            <span ref="span">使用app钱包扫码登录</span>
        </div>
        <div id="cover" @click="refresh" ref="fail" style="display:none">
            <div id="icon"></div>
        </div>
    </div>
</template>
<style lang='scss'>
    body{
        .qrcode{
            position:relative;
            .codeBox{
                width:260px;
                height:310px;
                margin:150px auto;
                text-align: center;
                span{
                    display: inline-block;
                    padding-top: 30px;
                }
                #qrcode {
                    img {
                        width: 260px;
                        height: 260px;
                        background-color: #fff; //设置白色背景色
                        padding: 12px; // 利用padding的特性，挤出白边
                    }
                }
            }
            #cover {
                width: 260px;
                height: 260px;
                background-color: #fff; //设置白色背景色
                padding: 24px; // 利用padding的特性，挤出白边
                position: absolute;
                top:-1px;
                left:510px;
                z-index:5;
                background: rgba(255,255,255,.9);
                #icon{
                    width:125px;
                    height:125px;
                    background:url("../../assets/refresh.jpg") #fff no-repeat;
                    background-size: 55%;
                    background-position: center;
                    border-radius: 50%;
                    position: absolute;
                    left: 0;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    margin: auto;
                    z-index: 10;
                }
            }
        }
    }
    
</style>
<script>
import QRCode from "qrcodejs2"
import url from "../../modules/baseURL"
const base64url = require('base64url');
const axios = require('axios');

export default {
    data(){
        return {
            uuid:"",
            polling:null
        }
    },
    created(){
        //获取uuid
        this.$http.get(url.thirdParty+"/v1/did/uuid").then(res=>{
            this.uuid = res.data.uuid;
            //用于生成二维码的json数据
            var jsonObj = {
            "aud":"0x49dba8f906c745b0a82f4d21e02bafd7df1a0be4",
            "sub":"login|authorization|st|did|archive",
            "url":window.location.href,
            // "url":"http://stplatform.idhub.network",
            "rdt":url.thirdParty+"/v1/did/token/",
            "jti":this.uuid
            }
            var jsonStr = JSON.stringify(jsonObj);
            var base64Str = base64url(jsonStr);
            var didJsonStr = "did://sign/jwt/"+base64Str;
            let qrcode = new QRCode('qrcode',{
                text:didJsonStr,
                correctLevel: 3
            });  // 设置要生成二维码的数据
        }).then(res=>{
            //二维码过期时间
            setTimeout(()=>{
                this.$refs.fail.style.display = "block";
                this.$refs.span.innerHTML = "二维码失效，点击刷新";
                clearInterval(this.polling);
            },1000*60*5);
            //向服务器轮询验证结果
            this.polling = setInterval(()=>{
                axios.post(url.thirdParty+"/v1/did/check",{
                    uuid:this.uuid
                }).then(res=>{
                    if(res.status=200){
                        clearInterval(this.polling);
                        // 改为页面跳转时清除定时器
                        var jwt = res.data.token;
                        //把jwt存起来，跳转到用户信息页
                        window.localStorage.setItem("token",jwt)
                        this.$router.push({
                            path:"userinfo"
                        }); 
                    }else{
                        alert("身份验证失败");
                    };
                })
            },2000);
        })
    },
    methods:{
        refresh(){
            //隐藏遮罩层
            this.$refs.fail.style.display = "none";
            //二维码过期时间
            setTimeout(()=>{
                this.$refs.fail.style.display = "block";
                this.$refs.span.innerHTML = "二维码失效，点击刷新";
                clearInterval(this.polling);
            },1000*60*5);
        }
    },
    beforeRouteLeave(to, from, next) {
        //离开当前页面时，清除定时器
        clearInterval(this.polling);
        next();
    },
    beforeDestroy(){
        clearInterval(this.polling);
    }
}
</script>