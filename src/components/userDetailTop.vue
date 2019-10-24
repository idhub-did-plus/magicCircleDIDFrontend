<template>
    <div class="top">
        <div id="box">
            <div id="top"></div>
            <div id="bottom">
                <div id="username" v-if="msg">
                    {{msg.archive.identityInfo.name.firstName}}
                    {{msg.archive.identityInfo.name.middleName}}
                    {{msg.archive.identityInfo.name.lastName}}
                </div>
                <div id="username" v-else>
                </div>
                <div id="userdid">{{iss}}</div>
            </div>
            <div id="img"><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3987282417,3624059467&fm=26&gp=0.jpg" alt=""></div>
        </div>
        <div id="textInfo" class="info">
            <ul v-if="msg">
                <li style="margin-top:20px;"><span>{{$t('m.userinfo.birthday')}}</span>{{msg.archive.identityInfo.birthday}}</li>
                <li><span>{{$t('m.userinfo.country')}}</span>{{msg.archive.identityInfo.country}}</li>
                <li><span>{{$t('m.userinfo.residenceCountry')}}</span>{{msg.archive.identityInfo.residenceCountry}}</li>
                <li><span>{{$t('m.userinfo.idcardNumber')}}</span>{{msg.archive.identityInfo.idcardNumber}}</li>
                <li><span>{{$t('m.userinfo.passportNumber')}}</span>{{msg.archive.identityInfo.passportNumber}}</li>
                <li><span>{{$t('m.userinfo.phoneNumber')}}</span>{{msg.archive.identityInfo.phoneNumber}}</li>
                <li><span>{{$t('m.userinfo.gender')}}</span>{{msg.archive.identityInfo.gender}}</li>
                <li><span>{{$t('m.userinfo.email')}}</span>{{msg.archive.basicInfo.email}}</li>
                <li><span>{{$t('m.userinfo.taxId')}}</span>{{msg.archive.basicInfo.taxId}}</li>
                <li><span>{{$t('m.userinfo.ssn')}}</span>{{msg.archive.basicInfo.ssn}}</li>
                <li>
                    <span>{{$t('m.userinfo.address')}}</span>
                    <p v-for="(i,index) in msg.archive.identityInfo.address.addressSequence" :key="index">
                        <span class="address">{{i.name}}:</span>{{i.value}}
                    </p>
                    <p><span class="address">{{$t('m.userinfo.postalCode')}}</span>{{msg.archive.identityInfo.address.postalCode}}</p>
                </li>
                <li><span>{{$t('m.userinfo.financialProfile')}}</span>
                    <p><span class="address">{{$t('m.userinfo.buyer')}}:</span>{{buyerType}}</p>
                    <p><span class="address">{{$t('m.userinfo.investor')}}:</span>{{investorType}}</p>
                </li>
            </ul>
            <ul v-else>
                <li style="margin-top:20px;"><span>{{$t('m.userinfo.birthday')}}</span></li>
                <li><span>{{$t('m.userinfo.country')}}</span></li>
                <li><span>{{$t('m.userinfo.residenceCountry')}}</span></li>
                <li><span>{{$t('m.userinfo.idcardNumber')}}</span></li>
                <li><span>{{$t('m.userinfo.passportNumber')}}</span></li>
                <li><span>{{$t('m.userinfo.phoneNumber')}}</span></li>
                <li><span>{{$t('m.userinfo.gender')}}</span></li>
                <li><span>{{$t('m.userinfo.email')}}</span></li>
                <li><span>{{$t('m.userinfo.taxId')}}</span></li>
                <li><span>{{$t('m.userinfo.ssn')}}</span></li>
                <li>
                    <span>{{$t('m.userinfo.address')}}</span>
                    <p>
                        <span class="address"></span>
                    </p>
                    <p><span class="address">{{$t('m.userinfo.postalCode')}}</span></p>
                </li>
                <li><span>{{$t('m.userinfo.financialProfile')}}</span>
                    <p><span class="address">{{$t('m.userinfo.buyer')}}:</span></p>
                    <p><span class="address">{{$t('m.userinfo.investor')}}:</span></p>
                </li>
            </ul>
        </div>
        <div id="fileInfo" class="info">
            <ul ref="ul1">
                <li v-for="(item,index) in msg.materials" :key="index">
                    <div>
                        <p><img src="../assets/file.jpg" alt=""></p>
                        <span>{{item.type}}</span>
                    </div>
                </li>
            </ul>
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
                width:100px;
                height:100px;
                border:1px solid #ccc;
                border-radius: 50%;
                overflow: hidden;
                position: absolute;
                top:80px;
                left:50px;
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
                        padding-left:20px;
                        font-weight: 600;
                        display:inline-block;
                        width:230px;
                    }
                    .address{
                        font-weight: 500;
                        padding-left: 0;
                        width: 140px;
                    }
                    p{
                        padding:6px;
                        padding-left: 230px;
                    }
                }
            }
        }
        #fileInfo{
            padding:30px 20px;
            margin-bottom: 50px;
            overflow: hidden;
            ul{
                width:100%;
                height:100%;
                li{
                    float:left;
                    margin-top: 35px;
                    margin-left: 20px;
                    width:170px;
                    height:180px;
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
                    }
                    span{
                        margin-top: 10px;
                        margin-bottom: 20px;
                        padding:3px;
                        display:block;
                        font-size: 12px;
                        color:#000;
                        word-wrap: break-word;
                    }
                }
            }
        }
    }
</style>
<script>
export default {
    props:["msg","iss"],
    watch:{
        msg(newVal){
            if(newVal.archive.financialProfile == null){
                this.buyerType = null;
                this.investorType = null;
            }else{
                this.buyerType = newVal.archive.financialProfile.buyerType;
                this.investorType = newVal.archive.financialProfile.investorType;
            }
        }
    }
}
</script>