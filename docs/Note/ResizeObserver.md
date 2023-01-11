# 📐 JS监听节点 ResizeObserver

前段时间做一个小demo~ 需要动态的改变Grid布局，emmmm.... 

因为那时候发现【Grid布局】这玩意儿 设置了 `1fr` 以后会被里面的元素撑开，所以不能设置 `1fr`，得用js老老实实计算，然后用px...


那我就得知道 Grid 外部的窗口、或者说载体元素的宽高变化~  
所以查了一圈发现了这个👉【[ResizeObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserver)】

接下来说说他的用法~ 

## 📐 ResizeObserver

> 参考：[CSDN | ResizeObserver API详解](https://blog.csdn.net/glorydx/article/details/116176726?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522165852527816782350865720%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=165852527816782350865720&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-1-116176726-null-null.142^v33^experiment_2_v1,185^v2^tag_show&utm_term=ResizeObserver&spm=1018.2226.3001.4187)


ResizeObserver API 监听一个DOM节点的变化
1. 节点的出现和隐藏
2. 节点的大小、宽高变化~

ResizeObserver是个构造函数。在使用new关键字调用构造函数，返回实例对象时，需要传入一个回调函数，这个回调用于监听实例对象某个DOM节点的变化

以下是在Vue3中 `onMounted` 生命周期函数
1. 也就是等DOM节点加载出来以后，去用id获取要监听的DOM节点
2. 然后设置好构造函数 `new ResizeObserver`
3. 最后使用 `变量名.observe(DOM节点)` 去监听
```js
onMounted(() => {
    watch_change()
    function watch_change() {
        let Mark: any = document.getElementById('Mark')

        const resizeObserver = new ResizeObserver((entries) => {
            // console.log(entries)
            console.log(entries[0].contentRect.width) //检测元素的 宽
            console.log(entries[0].contentRect.height) //检测元素的 高
            console.log(entries[0].target) //检测的元素

            //其他逻辑...
        });

        resizeObserver.observe(Mark) //这句是开启监听！
    }
});
```


### 📐 取消监听 - unobserve

```js
resizeObserver.unobserve(Mark)
```

### 📐 取消所有节点监听 - disconnect
```js
resizeObserver.disconnect()
```
