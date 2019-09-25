<template>
    <div class="detail">
        <div id="claimBox">
            <div id="header"></div>
            <div id="content">
                <button type="button" class="btn btn-default claim">IDHub VIP</button>
                <button type="button" class="btn btn-default claim">IDHub SVIP</button>
                <button type="button" class="btn btn-default claim">SEC Accredited Investor</button>
                <button type="button" class="btn btn-default claim">SEC Accredited Purchaser</button>
                <button type="button" class="btn btn-default claim">ST Compliant Investor</button>
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
    props:["msg"],
    mounted(){
        var arr = this.msg.claims;
        var btnArr = document.getElementsByClassName("claim");
        for(var i=0;i<arr.length;i++){
            var claimType = arr[i].claim.claimType;
            var content = btnArr[i].innerHTML;
            if(claimType = content){
                btnArr[i].style.backgroundColor = "#1E90FF";
                btnArr[i].style.color = "#fff";
                btnArr[i].setAttribute("class","btn btn-primary claim")
            }
        }
    }
}
</script>