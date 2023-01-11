# 👂 Vue 销毁监听 removeEventListener

本来这个差点记录在『XXGBUG』里面的，但是后面发现，其实不是bug，是我学艺不精~ 所以这篇写在『XXG笔记』里。

在回顾之前作品demo时发现，即使退出了“当前页面”也没有【消除监听】  

发现的原理是我在【监听鼠标移动】，在控制台输出 移动的坐标  
但退出了“当前页面”后，还在控制台看到了“console.log”的输出 移动的坐标

【监听】的销毁调用在 Vue（当时使用的是Vue2）中的`destroyed`生命周期函数【页面组件销毁时触发】
配合`window.removeEventListener('mousemove',this.move)`来销毁监听。

**但是没用**   

问题其实出现在👇 我在主组件APP.vue中使用了`keep-alive`
```html
<keep-alive>
    <router-view></router-view>
</keep-alive>
```
keep-alive 使页面缓存了，导致没有触发组件的生命周期`destroyed` 【页面组件销毁时触发】
>组件被缓存，退回首页的时候自然就没有被销毁了，所以我们利用回首页路由转变👇

## 👂 解决方法

手动触发`destroy`   
👇就是当路由发现变化时，调用`destroy`
```js
beforeRouteLeave(to, from, next) {
    this.$destroy();
    next();
},
destroyed() {
    window.removeEventListener('mousemove',this.move)
    console.log('销毁成功')
}
```

👆 这是当年学艺不精的解决方法  
👇 后面才知道Vue文档里有这种方法

## 👂 解决方法2 【推荐】



`activated` 和 `deactivated` 生命周期  
`activated` 和 deactivated 只在 `<keep-alive>`内的所有嵌套组件中触发。

- activated：进入组件时触发。  
- deactivated：退出组件时触发。
```js
activated() {
  console.log('组件A 被添加')
},
deactivated() {
  console.log('组件A 被移除')
  //写销毁定时器的方法！
}
```
注意：`activated` 和 `deactivated` 这两个生命周期函数一定是要在使用了 keep-alive 组件后才会有的，否则不存在。

##  👂 销毁监听
还有一个原因:我在监听和销毁时 所指定的那个方法。    比如👇
```js
window.addEventListener('mousemove',(e)=>this.move(e)) //这个是增加监听 '鼠标'
和
window.removeEventListener('mousemove',(e)=>this.move(e)) //这个是销毁监听 '鼠标'
```
这样是不行的，因为他们指定的不算是同一个方法，也就是说，我们不能使用`this.move(e)`这样传参的方式！(虽然我们监听的目的是为了传参数e)

可以使用下面这样的方式👇  
```js
window.addEventListener('mousemove',this.move)
和
window.removeEventListener('mousemove',this.move)
```
也就是说，在`methods`中的`move(e)`直接就可以拿到参数`e`了  👇
```vue
<script>
export default {
    //...

    methods:{
        move(e){
            console.log(e)
        }
    },
}
</script>
```
**而且也不要使用匿名函数。**

这样就可以销毁监听了。