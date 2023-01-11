# ⚡ Vite 安装 VueRouter

Vite不像VueCli一样可以选择自动安装配置 vue-router 和 vuex   
所以要自己去安装这两个插件

### ⚡ 安装
```sh
npm add vue-router@next
```

### ⚡ 配置
👇 `src/router/index.ts` 👇
```typescript
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: () => import("../views/Home.vue"),},
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
```
👇 `src/main.ts` 👇
```typescript
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

createApp(App).use(router).mount('#app')
```
### ⚡ 跳转：
```html
<router-link to="/xxg">Go to xxg</router-link>
```
### ⚡ 显示的区域：
```html
<router-view></router-view>
```

## ⚡ 更多
更多关于 Vue-Router 的操作请看 [🧩VueRouter](VueRouter.md)
