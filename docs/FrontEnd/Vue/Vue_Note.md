# ð© Vue ç¬è®°

è¿éæ¯ä¸äºåºç¡é¶ç¢çç¬è®°~ Vue2ãVue3éç¨ï¼

##  ð© å¸¸ç¨æä»¤
1. `v-text`
2. `v-html` 
3. `v-for`
4. `v-if`ã`v-else-if`ã`v-else`
5. `v-show`
6. `v-bind` ç®å`:`
7. `v-on`ç®å`@`
8. `v-model`
9. `v-pre`
10. `v-once`

## ð© å¼å¥ç»ä»¶
```vue
<template>
    <xxg-test></xxg-test>
    æ
    <XxgTest />
</template>

<script>
import XxgTest from './component/xxg_test.vue'

component:{
    XxgTest,
}
</script>
```
Vue3çsetupè¯­æ³ç³ï¼ä¸ç¨å¨`component`å¤å£°æð
```vue
<template>
    <XxgTest />
</template>

<script setup>
import XxgTest from './component/xxg_test.vue'
</script>
```