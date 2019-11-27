# st-project

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### About baseURL
src/modules/baseURL.js

```
const thirdParty = "http://api.stplatform.idhub.network";   //第三方登录后台
const baseURL = "http://api.hosting.idhub.network";   //数据托管平台

export default {
  baseURL,
  thirdParty
}
```
