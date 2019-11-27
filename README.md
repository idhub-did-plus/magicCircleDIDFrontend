# st-project

### 环境依赖
1. node.js版本8或者8+（如v8.15.0）  
2. 安装npm 
3. 安装yarn
```
npm install -g yarn
```
### 安装工具包
```
npm install
```
### 项目启动
```
yarn serve
```
### 项目打包
```
yarn build
```

### 全局baseURL配置
在src路径下，创建modules文件夹，在新建的baseURL.js文件中进行api配置
src/modules/baseURL.js

```
const thirdParty = "接口地址";   //三方登录后台
const baseURL = "接口地址";   //数据托管平台

export default {
  baseURL,
  thirdParty
}
```
### 项目功能
1. ST平台在登录入口提供数字身份登录方式，向用户展示二维码，用户可以通过idhub app扫码，授权登录。
2. 用户在app授权成功后，ST平台可以获取到用户在app上预先提交的身份信息并展示。
3. 支持中英双语言包的实现
