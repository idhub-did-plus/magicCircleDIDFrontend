<template>
    <div class="detail">
        <div id="claimBox">
            <div id="header"></div>
            <div id="content">
                <button type="button" class="btn btn-default claim" id="IDHub_VIP">IDHub VIP</button>
                <button type="button" class="btn btn-default claim" id="IDHub_SVIP">IDHub SVIP</button>
                <button type="button" class="btn btn-default claim" id="SEC_Accredited_Investor">SEC Accredited Investor</button>
                <button type="button" class="btn btn-default claim" id="SEC_Accredited_Purchaser">SEC Accredited Purchaser</button>
                <button type="button" class="btn btn-default claim" id="ST_Compliant_Investor">ST Compliant Investor</button>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .detail{
        #claimBox{
            width:300px;
            height:400px;
            background:#fff;
            margin-left: 890px;
            margin-top: 40px;
            #header{
                width:300px;
                height:50px;
                background:url("../assets/bg.jpg");
                background-size: 100%;
            }
            #content{
                width:300px;
                height:360px;
                background: #fff;
                text-align: center;
                padding:50px 20px 15px 20px;;
                button{
                    display:inline-block;
                    width:220px;
                    height:40px;
                    margin-top: 15px;
                    color:#DCDCDC;
                    box-shadow: 2px 3px 4px #ccc;
                }
            }
        }
    }
</style>
<script>
export default {
    data(){
        return {
            cData:""
        }
    },
    props:["msg"],
    watch: {
        //接收父组件传来的值，点亮右侧claim类型
        msg(newVal,oldVal){
            this.cData = newVal;  
            var arr = this.cData.claims;
            var btnArr = document.getElementsByClassName("claim");
            for(var j=0;j<btnArr.length;j++){
                for(var i=0;i<arr.length;i++){
                    console.log(arr[i]);
                    var tmp = arr[i].replace("\\", '');
                    var content = btnArr[j].getAttribute("id");
                    if(tmp.indexOf(content) != -1){
                        btnArr[j].style.backgroundColor = "#1E90FF";
                        btnArr[j].style.color = "#fff";
                        btnArr[j].setAttribute("class","btn btn-primary claim")
                    }
                }
            }
        }
        
    },
}
</script>