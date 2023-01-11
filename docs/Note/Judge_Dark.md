# 🌓 判断系统暗黑模式

## 🟥 CSS 判断系统暗黑模式
Ⓜ️ 媒体查询 prefers-color-scheme
```css
@media (prefers-color-scheme: light) {
	/* 主题设置为浅色 */
}
@media (prefers-color-scheme: dark) {
	/* 主题设置为深色 */
}
@media (prefers-color-scheme: no-preference) {
      /* 获取不到主题时的适配方案 */
}
```
- no-preference：表示获取不到主题时的适配方案。
- light：表示用户的操作系统是浅色主题（light）
- dark：表示用户的操作系统是深色主题（dark）

## 🟨 JS 判断系统暗黑模式
```js
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
if (systemTheme.matches) { // 是深色
  // 主题设置为深色。
} else { // 不是深色
  // 主题设置为浅色。
}
```