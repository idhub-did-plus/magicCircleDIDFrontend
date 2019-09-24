<template>
    <div class="navigator">
        <div id="nav">
            <div id="title">
                <div id="logo"></div>
            </div>
            <span>MagicCircle</span>
            <ul>
                <li @click="toggle($event)" id="login">首页</li>
                <li @click="toggle($event)" id="contact">联系我们</li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss">
    #nav{
        height:60px;
        background:#161d29;
        padding:0 120px;
        color:#fff;
        font-family: "微软雅黑";
        #title{
            width:60px;
            height:60px;
            font-size:20px;
            float:left;
            overflow: hidden;
            #logo{
                width:640px;
                height:146px;
                background: url("../assets/logo.png") no-repeat;
                background-size: 32%;
                background-position: 3px 8px;
            }
        }
        span{
            display: inline-block;
            font-size: 22px;
            margin-top: 17px;
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
        }
    }
}
</script>