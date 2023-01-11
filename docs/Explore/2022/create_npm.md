# 🎒 自己写npm包

## 🟥 注册npm账号
去npm官网注册一个账号：   
- [https://www.npmjs.com/](https://www.npmjs.com/)
## 🟧 新建一个项目
在本地终端使用如下命令新建一个项目
```sh
npm init
```
新建时，下面是需要填写的资料👇  
- package name: //包的名字
- version: 0.0.1 //版本 (大修改.小修改.小补丁)
- description:  //项目描述，方便别人了解你的模块作用，搜索的时候也有用
- entry point: (index.js) //指定了程序的主入口文件，可更改，也可以使用默认（直接回车）
- test command: //测试命令（直接回车）
- git repository: //git仓库（直接回车）
- keywords: //一个字符串数组，方便别人搜索到本模块
- author: XXGGG //作者
- license: (ISC) //许可证
## 🟨 新建 `index.js`
在根目录新建一个`index.js` 写一个功能👇  
```javascript
function xgadd(a,b) {
    var c = a + b
    return c
}

export { xgadd }
```
## 🟩 新建 `README.md`
新建一个 `README.md` 文件说明一下你这个npm包的功能
```markdown
# xg-add
功能描述

## 安装👇

## 使用👇

...
```
## 🟦 登录 npm
在终端输入如下命令👇登录npm    
- 登录时需要注意切换为npm官方镜像，而不是淘宝镜像！

```sh
npm config set registry https://registry.npmjs.org/
```

```sh
npm login
```

1. 输入账号
2. 输入密码（密码不会显示出来）
3. 输入邮箱（过后，官方npm会发送临时密码到你的邮箱）
4. 填入发给邮箱的一串临时密码

## 🟪 上传 npm
```sh
npm publish
```

- 上传有可能会出错，有可能是因为包名相同，换个包的名字就可以了！
## 🟫 更新 npm
当你的包有更新内容，需要上传   
同样是使用`npm publish`命令，但是需要先去到`package.json`修改版本号   
改高一个版本`"version":"0.0.2"`
```json
{
  "name": "xgadd",
  "version": "0.0.2",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "XXGGG",
  "license": "ISC"
}
```
## ⬛ 使用 npm
当上传完后以后，自己下载下来试用一下👇  
在一个项目文件夹的打开终端输入👇     
```sh
npm install xgadd
```
安装完后，可以在node_module里看到这个包。  
然后在项目中引入，引用  
比如：  
```javascript
import {xgadd} from 'xgadd'

let xxg = xgadd(1,1)
console.log(xxg) //2
```
## ⬜ 关于我👇

- XXGGG的npm：[https://www.npmjs.com/~xxggg](https://www.npmjs.com/~xxggg)
- XXGGG的Github：[https://github.com/XXGGG](https://github.com/XXGGG)
## 🔳 补充【index.d.ts】
现在很多项目都是使用TypeScript，所以在把包上传上去给别人用的时候最好附加多一个关于typerscipt的类型声明文件【index.d.ts】
```typescript
//与index.js 同目录 同名的 index.d.ts
declare function xgadd(a:number,b:number):number

export {xgadd}
```
也可以在package.json里说明一下你的这个声明文件在哪里
```javascript
{
  "name": "xgadd",
  "version": "0.0.5",
  "description": "",
  "main": "index.js",
  "types": "inedx.d.ts", #这里
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["xxg","javascript","img","imgMainColor","imgColor"],
  "author": "XXGGG",
  "license": "ISC"
}
```
关于TypeScript的类型声明可以参考👇
> [声明文件 - TypeScript入门教程](https://ts.xcatliu.com/basics/declaration-files.html#%E4%B9%A6%E5%86%99%E5%A3%B0%E6%98%8E%E6%96%87%E4%BB%B6)

