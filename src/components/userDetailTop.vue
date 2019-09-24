<template>
    <div class="top">
        <div id="box">
            <div id="top"></div>
            <div id="bottom">
                <div id="username">
                    {{msg.archive.identityInfo.name.firstName}}
                    {{msg.archive.identityInfo.name.middleName}}
                    {{msg.archive.identityInfo.name.lastName}}
                </div>
                <div id="userdid">{{iss}}</div>
            </div>
            <div id="img"><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3987282417,3624059467&fm=26&gp=0.jpg" alt=""></div>
        </div>
        <div id="textInfo" class="info">
            <ul>
                <li>
                    <span>address</span>
                    <p v-for="(i,index) in msg.archive.identityInfo.address.addressSequence" :key="index">
                        {{i.name}}:{{i.value}}
                    </p>
                    <p>postalCode:{{msg.archive.identityInfo.address.postalCode}}</p>
                </li>
                <li><span>birthday</span>{{msg.archive.identityInfo.birthday}}</li>
                <li><span>country</span>{{msg.archive.identityInfo.country}}</li>
                <li><span>residenceCountry</span>{{msg.archive.identityInfo.residenceCountry}}</li>
                <li><span>idcardNumber</span>{{msg.archive.identityInfo.idcardNumber}}</li>
                <li><span>passportNumber</span>{{msg.archive.identityInfo.passportNumber}}</li>
                <li><span>phoneNumber</span>{{msg.archive.identityInfo.phoneNumber}}</li>
                <li><span>gender</span>{{msg.archive.identityInfo.gender}}</li>
                <li><span>email</span>{{msg.archive.basicInfo.email}}</li>
                <li><span>taxId</span>{{msg.archive.basicInfo.taxId}}</li>
                <li><span>ssn</span>{{msg.archive.basicInfo.ssn}}</li>
                <li><span>financialProfile</span>{{msg.archive.financialProfile}}</li>
            </ul>
        </div>
        <div id="fileInfo" class="info">
            <ul ref="ul1">
                <li v-for="(item,index) in msg.materials" :key="index">
                    <div @click="showDetial">
                        <p><img src="../assets/file.jpg" alt=""></p>
                        <span>{{item.type}}</span>
                    </div>
                </li>
            </ul>
            <div id="show" ref="show">
                <button type="button" class="btn btn-default" ref="back">返回信息列表</button>
                <div>证件内容</div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .top{
        float: left;
        #box{
            margin-top: 40px;
            margin-left: 50px;
            width:800px;
            height:300px;
            background:	#fff;
            box-shadow: 2px 3px 4px #666;
            position:relative;
            #top{
                width:800px;
                height:150px;
                background: url("../assets/bg.jpg") no-repeat;
                background-size: 100%;
            }
            #img{
                width:120px;
                height:120px;
                border:1px solid #ccc;
                border-radius: 50%;
                overflow: hidden;
                position: absolute;
                top:70px;
                left:30px;
                img{
                    width:100%;
                    height:100%;
                }
            }
            #bottom{
                color:#000;
                #username{
                    margin-top: 30px;
                    margin-left: 170px;
                    font-size: 20px;
                    font-weight: 700;
                }
                #userdid{
                    margin-top: 10px;
                    margin-left: 170px;
                }
            }
        }
        .info{
            margin-top: 15px;
            margin-left: 50px;
            padding: 35px 50px;
            width:800px;
            background:	#fff;
            box-shadow: 2px 3px 4px #666;
        }
        #textInfo{
            ul{
                li{
                    border:1px solid #eee;
                    padding:6px;
                    color:#000;
                    span{
                        padding-left:40px;
                        padding-right:90px;
                        font-weight: 600;
                    }
                    p{
                        padding:6px;
                        padding-left: 170px;
                    }
                }
            }
        }
        #fileInfo{
            padding:30px 40px;
            margin-bottom: 50px;
            overflow: hidden;
            ul{
                width:100%;
                height:100%;
                li{
                    float:left;
                    margin-top: 35px;
                    margin-left: 30px;
                    width:150px;
                    overflow: hidden;
                    box-shadow: 1px 1px 1px #ccc;
                    text-align: center;
                    p{
                        display:inline-block;
                        width:70px;
                        img{
                            margin-top: 30px;
                            width:100%;
                            height:100%;
                        }
                        // background: url("../assets/file.jpg") no-repeat;
                        // background-size: 100%;
                    }
                    span{
                        margin-top: 10px;
                        margin-bottom: 20px;
                        display:inline-block;
                        font-size: 12px;
                        color:#000;
                    }
                }
            }
            #show{
                display: none;
                div{
                    margin-top: 20px;
                }
            }
        }
    }
</style>
<script>
export default {
    props:["msg","iss"],
    methods:{
        showDetial(){
            this.$refs.ul1.style.display = "none";
            this.$refs.show.style.display = "block";
            this.$refs.back.onclick = ()=>{
                this.$refs.ul1.style.display = "block";
                this.$refs.show.style.display = "none";
            }
        }
    },
    mounted(){
        var json = this.msg;
        for(var key in json){
            console.log(key);
        }
    }
}
</script>