# ð å¯ç å å¯ bcryptjs

### ð bcryptjsåè¿è¡å å¯
![å¾ 12](img/ce3e8d16fda4aaf2d239a250481f8366e2a4588995998673b42ae811e995dd7f.png)  

### ð å®è£
```sh
npm i bcryptjs
```
### ð å¼å¥
```js
const bcrypt = require('bcryptjs')
```


### ð å å¯ bcrypt.hashSync()
![å¾ 13](img/46f6d83ca7998df6b6062422af1059eee0547e9be242c92b8863f8223f836a34.png)  

```js
let password = bcrypt.hashSync(req.body.password,10)
```
###  ð è§£å¯ bcrypt.compareSync()
![å¾ 14](img/7817b7dfb3da26071c267e6b34ebb33bd3df703151d7c46316b117f8d915d1b2.png)  

```js
bcrypt.compareSync()
```

::: danger éæ¸©ä¸ä¸ä¸ä¸ç« æåè¯´çè¿ç¨ð
1. ãç¨æ·æ³¨åãï¼åç«¯éªè¯è´¦å·åå¯ç æ¯å¦åè§
2. åç«¯æ¥æ¶å°åä¹éªè¯ä¸æ¬¡ï¼ç¶åæãç¨æ·åãå­å¥æ°æ®åº
3. ãå¯ç ãéè¿ãðbcryptjså å¯ãåä¹å­å¥æ°æ®åº
4. æãéæºçãä¹å­å¥æ°æ®åºï¼å½ç¶ï¼æ¯è¾æä¹å¯ä»¥ç¨ãåºå®çã
5. ç¶åè¿ç¸å½äºãæ³¨åæåãã
6. å¨ãæ³¨åæåãåãç»å½æåãåé½éè¦ç»ç¨æ·çæä¸ä¸ªãTokenã
7. ãç»å½ãçè¯ï¼ç¨æ·æä¾ç¨æ·ååå¯ç 
8. åå»æ°æ®åºæ¥çæ¯å¦æè¿ä¸ªãç¨æ·åãï¼å¦ææ²¡æå°±åç¥ãå¯ç éè¯¯ãæãæ­¤ç¨æ·åä¸å­å¨ã
9. å¦æææ­¤ç¨æ·å°±æå®çãå å¯è¿çå¯ç ãæ¿åºæ¥ã
10. å©ç¨`bcrypt.compareSync(ç¨æ·ç»å½æ¶ä¼ æ¥çå¯ç ,æ°æ®åºéå å¯çå¯ç )`éçæ¹æ³è¿è¡æ¯å¯¹ãå¦æå¯ç æ¯å¯¹æ­£ç¡®ï¼å°±ä¼è¿å`True`
11. è¿æ¶åå°±ç®ç»å½æåï¼å¯ä»¥ç»ç¨æ·è¿åä¸ä¸ª`Token`ä»¥åç¸å³çç¨æ·ä¿¡æ¯ã
12. è¿ä¸ªãTokenãæ¯ä¼ä¿å­å¨ç¨æ·çæµè§å¨å®¢æ·ç«¯çï¼å¦æãè¿æãäºå°±ä¼å¤±æãæä»¥è¦è®¾ç½®å¥½è¿æçãéæ°ç»å½ã
:::
