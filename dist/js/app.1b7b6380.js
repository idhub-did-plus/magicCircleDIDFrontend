(function(t){function e(e){for(var i,s,o=e[0],c=e[1],u=e[2],d=0,f=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},a={app:0},r=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),a=n.n(i);a.a},"0624":function(t,e,n){},"143d":function(t,e,n){},"165d":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"qrcode"},[n("div",{ref:"newcode",staticClass:"codeBox"},[n("div",{attrs:{id:"qrcode"}}),n("span",{ref:"span"},[t._v("使用app钱包扫码登录")])]),n("div",{ref:"fail",staticStyle:{display:"none"},attrs:{id:"cover"},on:{click:t.refresh}},[n("div",{attrs:{id:"icon"}})])])},a=[],r=n("d044"),s=n.n(r),o=n("867a"),c=n("fb4d"),u=n("bc3a"),l={data:function(){return{uuid:"",polling:null}},created:function(){var t=this;this.$http.get(o["a"].thirdParty+"/v1/did/uuid").then((function(e){t.uuid=e.data.uuid;var n={aud:"0x49dba8f906c745b0a82f4d21e02bafd7df1a0be4",sub:"login|authorization|st|did|archive",url:window.location.href,rdt:o["a"].thirdParty+"/v1/did/token/",jti:t.uuid},i=JSON.stringify(n),a=c(i),r="did://sign/jwt/"+a;new s.a("qrcode",{text:r,correctLevel:3})})).then((function(e){t.polling=setInterval((function(){u.post(o["a"].thirdParty+"/v1/did/check",{uuid:t.uuid}).then((function(e){if(e.status=200){clearInterval(polling);var n=e.data.token;window.localStorage.setItem("token",n),t.$router.push({path:"userinfo"})}else alert("身份验证失败")}))}),2e3)}))},mounted:function(){var t=this;setTimeout((function(){t.$refs.fail.style.display="block",t.$refs.span.innerHTML="二维码失效，点击刷新",clearInterval(t.polling)}),3e5)},methods:{refresh:function(){var t=this;this.$refs.fail.style.display="none",this.$http.get(o["a"].thirdParty+"/v1/did/uuid").then((function(e){t.uuid=e.data.uuid;var n={aud:"0x49dba8f906c745b0a82f4d21e02bafd7df1a0be4",sub:"login|authorization|st|did|archive",url:window.location.href,rdt:o["a"].thirdParty+"/v1/did/token/",jti:t.uuid},i=JSON.stringify(n),a=c(i),r="did://sign/jwt/"+a;new s.a("qrcode",{text:r,correctLevel:3})})).then((function(e){t.polling=setInterval((function(){u.post(o["a"].thirdParty+"/v1/did/check",{uuid:t.uuid}).then((function(e){if(e.status=200){clearInterval(polling);var n=e.data.token;window.localStorage.setItem("token",n),t.$router.push({path:"userinfo"})}else alert("身份验证失败")}))}),2e3)}))}},beforeRouteLeave:function(t,e,n){clearInterval(this.polling),n()},beforeDestroy:function(){clearInterval(this.polling)}},d=l,f=(n("5fb0"),n("2877")),v=Object(f["a"])(d,i,a,!1,null,null,null);e["default"]=v.exports},"1aa0":function(t,e,n){},2861:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user_info"},[n("Navigator"),n("userDetailTop",{attrs:{msg:t.msg,iss:t.iss}}),n("Right",{attrs:{msg:t.msg}})],1)},a=[],r=(n("28a5"),n("ee8d")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top"},[n("div",{attrs:{id:"box"}},[n("div",{attrs:{id:"top"}}),n("div",{attrs:{id:"bottom"}},[n("div",{attrs:{id:"username"}},[t._v("\n                "+t._s(t.msg.archive.identityInfo.name.firstName)+"\n                "+t._s(t.msg.archive.identityInfo.name.middleName)+"\n                "+t._s(t.msg.archive.identityInfo.name.lastName)+"\n            ")]),n("div",{attrs:{id:"userdid"}},[t._v(t._s(t.iss))])]),t._m(0)]),n("div",{staticClass:"info",attrs:{id:"textInfo"}},[n("ul",[n("li",{staticStyle:{"margin-top":"20px"}},[n("span",[t._v("birthday")]),t._v(t._s(t.msg.archive.identityInfo.birthday))]),n("li",[n("span",[t._v("country")]),t._v(t._s(t.msg.archive.identityInfo.country))]),n("li",[n("span",[t._v("residenceCountry")]),t._v(t._s(t.msg.archive.identityInfo.residenceCountry))]),n("li",[n("span",[t._v("idcardNumber")]),t._v(t._s(t.msg.archive.identityInfo.idcardNumber))]),n("li",[n("span",[t._v("passportNumber")]),t._v(t._s(t.msg.archive.identityInfo.passportNumber))]),n("li",[n("span",[t._v("phoneNumber")]),t._v(t._s(t.msg.archive.identityInfo.phoneNumber))]),n("li",[n("span",[t._v("gender")]),t._v(t._s(t.msg.archive.identityInfo.gender))]),n("li",[n("span",[t._v("email")]),t._v(t._s(t.msg.archive.basicInfo.email))]),n("li",[n("span",[t._v("taxId")]),t._v(t._s(t.msg.archive.basicInfo.taxId))]),n("li",[n("span",[t._v("ssn")]),t._v(t._s(t.msg.archive.basicInfo.ssn))]),n("li",[n("span",[t._v("address")]),t._l(t.msg.archive.identityInfo.address.addressSequence,(function(e,i){return n("p",{key:i},[n("span",{staticClass:"address"},[t._v(t._s(e.name)+":")]),t._v(t._s(e.value)+"\n                ")])})),n("p",[n("span",{staticClass:"address"},[t._v("postalCode:")]),t._v(t._s(t.msg.archive.identityInfo.address.postalCode))])],2),n("li",[n("span",[t._v("financialProfile")]),t._v(t._s(t.msg.archive.financialProfile))])])]),n("div",{staticClass:"info",attrs:{id:"fileInfo"}},[n("ul",{ref:"ul1"},t._l(t.msg.materials,(function(e,i){return n("li",{key:i},[n("div",[t._m(1,!0),n("span",[t._v(t._s(e.type))])])])})),0)])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"img"}},[n("img",{attrs:{src:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3987282417,3624059467&fm=26&gp=0.jpg",alt:""}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[i("img",{attrs:{src:n("3bd8"),alt:""}})])}],c={props:["msg","iss"]},u=c,l=(n("b6bc"),n("2877")),d=Object(l["a"])(u,s,o,!1,null,"0bd83761",null),f=d.exports,v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detail"},[n("div",{attrs:{id:"claimBox"}},[n("div",{attrs:{id:"header"}}),n("div",{attrs:{id:"content"}},[n("button",{staticClass:"btn btn-default claim",attrs:{type:"button",id:"IDHub_VIP"}},[t._v("IDHub VIP")]),n("button",{staticClass:"btn btn-default claim",attrs:{type:"button",id:"IDHub_SVIP"}},[t._v("IDHub SVIP")]),n("button",{staticClass:"btn btn-default claim",attrs:{type:"button",id:"SEC_Accredited_Investor"}},[t._v("SEC Accredited Investor")]),n("button",{staticClass:"btn btn-default claim",attrs:{type:"button",id:"SEC_Accredited_Purchaser"}},[t._v("SEC Accredited Purchaser")]),n("button",{staticClass:"btn btn-default claim",attrs:{type:"button",id:"ST_Compliant_Investor"}},[t._v("ST Compliant Investor")])])])])}],h=(n("a481"),{data:function(){return{cData:""}},props:["msg"],watch:{msg:function(t,e){this.cData=t;for(var n=this.cData.claims,i=document.getElementsByClassName("claim"),a=0;a<i.length;a++)for(var r=0;r<n.length;r++){console.log(n[r]);var s=n[r].replace("\\",""),o=i[a].getAttribute("id");-1!=s.indexOf(o)&&(i[a].style.backgroundColor="#1E90FF",i[a].style.color="#fff",i[a].setAttribute("class","btn btn-primary claim"))}}}}),m=h,b=(n("c918"),Object(l["a"])(m,v,p,!1,null,null,null)),_=b.exports,g=n("867a"),y=n("fb4d"),I={data:function(){return{jwt:"",payload:"",decode:"",iss:"",msg:""}},components:{Navigator:r["a"],userDetailTop:f,Right:_},created:function(){var t=this,e=window.localStorage.getItem("token");this.payload=e.split(".")[1],this.jwt=e,this.decode=JSON.parse(y.decode(this.payload)),this.iss=this.decode.iss,this.$http({method:"post",url:g["a"].baseURL+"/thirdparty/identity_information?identity="+this.iss,data:this.jwt,headers:{"content-type":"text/plain"}}).then((function(e){1==e.data.success?t.msg=e.data.data:alert("授权访问失败")}))}},w=I,C=(n("f7a1"),Object(l["a"])(w,i,a,!1,null,null,null));e["default"]=C.exports},"3bd8":function(t,e,n){t.exports=n.p+"img/file.cd4004ff.jpg"},4274:function(t,e,n){"use strict";var i=n("42be"),a=n.n(i);a.a},"42be":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("f2d0");var i=n("518b"),a=n.n(i),r=(n("144a"),n("c0bf")),s=n.n(r),o=(n("14c6"),n("08c1"),n("4842"),n("d9fc"),n("2b0e")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],l=n("7101"),d=n("165d"),f=n("2861"),v={components:{Login:l["default"],qrCode:d["default"],UserInfo:f["default"]}},p=v,h=(n("034f"),n("2877")),m=Object(h["a"])(p,c,u,!1,null,null,null),b=m.exports,_=n("2f62");o["a"].use(_["a"]);var g=new _["a"].Store({state:{},mutations:{},actions:{}}),y=n("8c4f"),I={name:"login",path:"/login",component:function(){return Promise.resolve().then(n.bind(null,"7101"))}},w={name:"qrcode",path:"/qrcode",component:function(){return Promise.resolve().then(n.bind(null,"165d"))}},C={name:"userinfo",path:"/userinfo",component:function(){return Promise.resolve().then(n.bind(null,"2861"))}};o["a"].use(y["a"]);var x=new y["a"]({routes:[{path:"/",redirect:"login"},I,w,C]}),j=(n("1aa0"),n("bc3a")),P=n.n(j);o["a"].config.productionTip=!1,o["a"].prototype.$http=P.a,o["a"].component("mt-header",s.a),o["a"].component("mt-button",a.a),new o["a"]({router:x,store:g,render:function(t){return t(b)}}).$mount("#app")},"5fb0":function(t,e,n){"use strict";var i=n("950b"),a=n.n(i);a.a},"64a9":function(t,e,n){},7101:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("Navigator"),t._m(0),n("div",{attrs:{id:"loginBox"}},[t._m(1),n("div",{attrs:{id:"LoginBottom"}},[n("router-link",{attrs:{to:"/qrcode"}},[n("button",{staticClass:"btn btn-success",attrs:{type:"button"}},[t._v("使用DID登录")])])],1)])],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"intro"}},[n("div",[t._v("为什么选择")]),n("div",[t._v("Magic Circle")]),n("div",[t._v("Magic Circle提供统一身份认证访问，兼容标记化平台，全液体数字资产市场和STO平台可编程价值管理等服务。通过投诉方式进行标记，现实世界的资产可以在全球基础上实现其真实的流动性和真正的价值。")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"LoginTop"}},[i("img",{attrs:{src:n("f14b"),alt:""}}),i("br"),i("img",{attrs:{src:n("f773"),alt:""}})])}],r=n("ee8d"),s={components:{Navigator:r["a"]}},o=s,c=(n("4274"),n("2877")),u=Object(c["a"])(o,i,a,!1,null,null,null);e["default"]=u.exports},"867a":function(t,e,n){"use strict";var i="http://api.stplatform.idhub.network",a="http://api.hosting.idhub.network";e["a"]={baseURL:a,thirdParty:i}},"950b":function(t,e,n){},b6bc:function(t,e,n){"use strict";var i=n("0624"),a=n.n(i);a.a},c918:function(t,e,n){"use strict";var i=n("143d"),a=n.n(i);a.a},c9b9:function(t,e,n){},d070:function(t,e,n){"use strict";var i=n("c9b9"),a=n.n(i);a.a},da4d:function(t,e,n){},ee8d:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigator"},[n("div",{attrs:{id:"nav"}},[t._m(0),n("span",[t._v("MagicCircle")]),n("ul",[n("li",{attrs:{id:"login"},on:{click:function(e){return t.toggle(e)}}},[t._v("首页")]),n("li",{attrs:{id:"contact"},on:{click:function(e){return t.toggle(e)}}},[t._v("联系我们")])])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"title"}},[n("div",{attrs:{id:"logo"}})])}],r={methods:{toggle:function(t){var e=t.currentTarget.getAttribute("id");this.$router.push({path:e})}}},s=r,o=(n("d070"),n("2877")),c=Object(o["a"])(s,i,a,!1,null,null,null);e["a"]=c.exports},f14b:function(t,e,n){t.exports=n.p+"img/slogo.a5f84182.png"},f773:function(t,e,n){t.exports=n.p+"img/title.d51c7f52.png"},f7a1:function(t,e,n){"use strict";var i=n("da4d"),a=n.n(i);a.a}});
//# sourceMappingURL=app.1b7b6380.js.map