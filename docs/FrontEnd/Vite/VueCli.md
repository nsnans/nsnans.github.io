# ðï¸ @Vue/cli

::: danger å³äºæ§çæ¬
 Vue CLI çååç§°ç± vue-cli æ¹æäº @vue/cliã å¦æä½ å·²ç»å¨å±å®è£äºæ§çæ¬ç vue-cli (1.x æ 2.x)ï¼ä½ éè¦åéè¿ npm uninstall vue-cli -g æ yarn global remove vue-cli å¸è½½å®ã
::: 
::: tip Node çæ¬è¦æ±
Vue CLI 4.x éè¦ [Node.js](https://nodejs.org/) v8.9 ææ´é«çæ¬ (æ¨è v10 ä»¥ä¸)ãä½ å¯ä»¥ä½¿ç¨ [n](https://github.com/tj/n)ï¼[nvm](https://github.com/creationix/nvm) æ [nvm-windows](https://github.com/coreybutler/nvm-windows) å¨åä¸å°çµèä¸­ç®¡çå¤ä¸ª Node çæ¬ã
::: 

### ðï¸ å®è£
```sh
npm install @vue/cli -g
```
### ðï¸ åå»ºé¡¹ç®
```sh
vue create <é¡¹ç®åå­>ï¼é¡¹ç®åå­è¦å°åï¼
```
### ðï¸ å¼å¯æå¡
```sh
npm run server
```
> å½ç¶å¯ä»¥å¨package.json éç½®æä»¶éé¢æ¹...

### ðï¸ æå
```shell
npm run build
```

## ðï¸ãsrcãéç½®å«å
å¨æ ¹ç®å½ä¸åå»º jsconfig.json
```json
{
    "compilerOptions":{
        "baseUrl":"./",
        "paths":{
            "@/*":["src/*"]
        },
        "exclude":["node_modules","dist"]
    }
}
```
## ðï¸eslintæ ¡éªåè½å³é­
å¨æ ¹ç®å½ä¸ï¼åå»ºä¸ä¸ªvue.config.js
```js
module.exports = {
    lintOnSave:false
}
```