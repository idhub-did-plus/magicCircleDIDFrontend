<template>
    <div class="navigator">
        <div id="nav">
            <div id="title">
                <div id="logo"></div>
            </div>
            <span>MagicCircle</span>
            <ul>
                <li @click="toggle($event)" id="login">{{$t('m.nav.home')}}</li>
                <li @click="switchLang()" id="lang">{{$t('m.nav.lang')}}</li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss">
    #nav{
        height:62px;
        background:#161d29;
        padding:0 47px;
        color:#fff;
        font-family: "微软雅黑";
        #title{
            width:60px;
            height:62px;
            font-size:20px;
            float:left;
            overflow: hidden;
            #logo{
                width:640px;
                height:146px;
                background: url("../assets/logo.png") no-repeat;
                background-size: 32%;
                background-position: 3px 14px;
            }
        }
        span{
            display: inline-block;
            font-size: 16px;
            margin-top: 24px;
            margin-left: 4px;
        }
        ul{
            float:right;
            height:60px;
            li{
                height:60px;
                line-height: 60px;
                padding:0 20px;
                float:left;
                cursor: pointer;
                font-size: 14px;
            }
        }
    }
</style>
<script>
export default {
    methods:{
        toggle($event){
            //路由跳转
            var path =  $event.currentTarget.getAttribute("id");
            this.$router.push({path:path});
        },
        // 点击事件，切换语言
        switchLang(){
            var choose = window.confirm("是否确定切换语言？");
            if(choose){
                const locale = this.$i18n.locale;
                locale === 'zh-CN' ? this.$i18n.locale = 'en-US' : this.$i18n.locale = 'zh-CN';
            }
        }
    }
}
</script>