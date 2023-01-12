# CSS 变量

> 参考文章：  
> [阮一峰 | CSS 变量教程](https://www.ruanyifeng.com/blog/2017/05/css-variables.html)  
> [51CTO | 一文带你玩转 CSS 变量](https://developer.51cto.com/article/705993.html)

最近发现了个好玩的东西，CSS 变量。

也是之前的一个小项目，需要动态改变样式！其实 Vue 可以动态改变 `style` `class`

CSS 变量也是一种方法，而且也可以做一些关联运算，还可以比较方便的做到修改全局样式，而且很多样式关联上一个变量以后，一处的值变化，就可以很方便的影响带动全局的样式，比较好的实现【响应式】

### CSS 全局变量

如果想这个变量到处都可以使用就把 css 变量定义在 `:root` 或者 `body` 上

```css
:root {
  --xxg-bg-color: #333;
}
```

这样定义好以后，下面就可以使用

```css
.class {
  color: var(--xxg-bg-color);
}
```

- 浏览器不支持 CSS 变量，带有 var()的代码行将会被忽略，将使用浏览器的默认值。
- 浏览器支持变量，并且该变量设置为正确值，则直接使用该变量。
- 浏览器支持变量，并且变量未设置为任何值，则直接使用备用值。
- 浏览器支持变量，并且该变量设置为无效值，则使用浏览器的默认值。

```css
.class {
  color: var(--xxg-bg-color, red);
}
/* 后面的red就是【备用值】 */
```

### CSS 局部变量

```css
h2 {
  --h2-color: #999;
  color: var(--h2-color);
}
h3 {
  color: var(--h2-color); /* 不生效 */
}
```

### 优先级和继承

```css
:root {
  --color: red;
}
h2 {
  --color: orange;
  color: var(--color);
  /* 这里他肯定是用局部的呀~ */
}
```

## 在 JavaScript 中使用

这一块很重要哦！👇

### 获取

```js
document.body.style.getPropertyValue("--icon-box-width");
```

### 设置

```js
document.body.style.setProperty("--icon-box-width", "100px");
```

### 删除
```js
document.body.style.removeProperty('--icon-box-width');
```