# 📱 JS判断手机还是PC端 💻

### 🌐 Navigator对象

`Navigator`对象包含有关浏览器的信息，他里面有个属性`userAgent`，会展示这个网页是用什么设备访问的 


> 所谓userAgent 就是用户代理，说来话长....    
> 之前了解关于浏览器发展的整个历程，所有浏览器都是在伪装代理成Mozilla。所以就有了这个代理属性。


### 🌐 navigator.userAgent
代理属性`navigator.userAgent`长这样👇  

`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36`

利用这个属性来看用户是用什么设备访问的！

## 🦘 JS判断后跳转网页
有些网站是页面自适应的，用手机和pc访问的都是同一个URL,就不用跳转。  
但没有自适应的网站，通常会有移动端和pc端，用JS判断后跳转到【移动端】或【pc端】👇

以下代码利用【正则表达式】和【三则运算】
访问设备里有`Android|webOS|iPhone|iPad|BlackBerry`这些字眼，就让它跳转去【移动端】的路由或网址！
```js
window.location.href = /Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent) ? "https://y.music.163.com/m/" :  "https://music.163.com/";
```

```js
window.location.href = /Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent) ? "https://m.bilibili.com/" :  "https://www.bilibili.com/";
```