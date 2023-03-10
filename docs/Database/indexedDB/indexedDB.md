# ðï¸ indexedDB

> [é®ä¸å³° | æµè§å¨æ°æ®åº IndexedDB å¥é¨æç¨](https://www.ruanyifeng.com/blog/2018/07/indexeddb.html)  
> [CSDN | indexedDB ä»ç»](https://blog.csdn.net/hjb2722404/article/details/118789332)  
> [ç®åæç¨ | æµè§å¨ IndexedDB ç®ææç¨](https://www.twle.cn/t/167)

æè¿å¨åä¸ä¸ªé¡¹ç®ï¼éè¦ç¨å°ãæ¬å°å­å¨ã

å¨åç«¯å³äºãæ¬å°å­å¨ãçæ¹æ³æ ð

1. `cookie` ï¼åå­å¾å° åªæ¯ 5k.. èä¸æ¯ç¨äºåæå¡å¨äº¤äºç
2. `localStorage` å `sessionStorage`ï¼ä¸ä¸ªç¨äºé¿æå­å¨ï¼ä¸ä¸ªä¼è¯å­å¨
3. è¿æä¸ä¸ªè¢«å¼ç¨ç `Web SQL`
4. è¿æå°±æ¯ä»å¤©çä¸»è§ **ã [indexedDB](https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API) ã**

---

ç®åççè§£å°±æ¯ãæµè§å¨çæ°æ®åºãï¼ä»çç¹ç¹æ¯ ð

1. åå¯¹è±¡çãé®å¼å¯¹ãï¼æ¯å¦ `{"name":"xxg"}`
2. èä¸å¯ä»¥å­æ°ç»ãå¯¹è±¡ãäºè¿å¶æ°æ®...
3. æ°æ®åºä¸æ¸é¤å°±ä¼æ°¸è¿å­å¨ï¼ï¼ï¼
4. å®¹éæ éå¤§~
5. å¼æ­¥å­å

ä¹åæä½¿ç¨ `localStorage` ï¼ä½æ¯ `localStorage` å¯ä»¥è¢«ç¨æ·å¨æ§å¶å°ï¼ä¹å°±æ¯æä¸ F12 ä»¥åï¼ä»»ä½æ´æ¹å¼

æ¶åä¸äºä¸å¡ï¼å¦æä¿®æ¹äºå¼å¯è½ä¼å½±åçé¢ãå½±åå«çæä½ã  
æä»¥æè§å¾ `localStorage` æ¾ä¸äºãå¯è¢«è¦çãçå¼ãæ¯å¦ãTokenããæé»æ¨¡å¼ã...

è `indexedDB` é¤äºç¨æ¥æ¾å¤§éæ°æ®ï¼ä»¥åå¯ä»¥ç¨æ¥æ¾äºè¿å¶çé³ä¹ãå¾çãè§é¢æ°æ®..  
æè¿ç¨ä»æ¥æ¾ä¸äºä¼ä¸ä¼ å°äºç«¯æ°æ®åºçæ°æ®ã

é£ä¹æ¥ä¸æ¥å°±è®°å½ä»¥ä¸ `indexedDB` çåºç¡ç¨æ³å§ ð

## æå¼æ°æ®åº ð

1. åæ°ä¸ï¼æ°æ®åºå
2. åæ°äºï¼æ°æ®åºçæ¬

```js
let request = window.indexedDB.open("XXG_DB", 1);
```

ç¹å«è¯´æï¼å¦ææå®åå­çæ°æ®åºä¸å­å¨å°±ä¼æ°å»ºæ°æ®åºãå¦æä¸åæ°æ®åºçæ¬å°±ä¼æå¼å½åçæ¬ï¼æ°å»ºæ°æ®åºé»è®¤çæ¬å·ä¸º `1` ã

æå¼æ°æ®åºåæä¸ä¸ªåè°å½æ°ä¼è§¦å

1. å¤±è´¥ - error
2. æå - success
3. é¦æ¬¡åå»º/çæ¬åçº§ - upgradeneeded

ä¸è¬è§¦åå®ãé¦æ¬¡åå»ºãåå°±ä¼è§¦åãæåã

### å¤±è´¥ - error

```js
request.onerror = function (event) {
  console.log("æ°æ®åºæå¼æ¥é");
};
```

### æå - success

```js
let db;

request.onsuccess = function (event) {
  db = request.result;
  console.log("æ°æ®åºæå¼æå");
};
```

### é¦æ¬¡åå»º/çæ¬åçº§ - upgradeneeded

```js
let db;

request.onupgradeneeded = function (event) {
  db = event.target.result;
};
```

1. å½æ°æ®åºæ°å»ºçæ¶åä¼è§¦å
2. æ°æ®åºçæ¬åçº§çæ¶åä¹ä¼è§¦å
3. è§¦åå®ä»¥åå°±ä¼å»è§¦åãæå - successã

æ³¨æï¼å¨ãæåãæ¯ç¨ `request.result` èå¨ãé¦æ¬¡åå»ºãè¿æ¯ç¨ `event.target.result`

---

å¾ææ¾ï¼å¨ãé¦æ¬¡åå»ºãå¤ï¼è®¾ç½®ãæ°æ®è¡¨ãð

```js
request.onupgradeneeded = function (event) {
  db = event.target.result;
  let objectStore = db.createObjectStore("person", { keyPath: "id" });
};
```

è¿éçææå°±æ¯è®¾ç½®ä¸ä¸ªè¡¨ `person` ï¼ä¸»é®æ¯ `id`ã

```js
request.onupgradeneeded = function(event) {
  db = event.target.result;
  let objectStore = db.createObjectStore('person', { keyPath: 'id',autoIncrement: true});
}
```

`autoIncrement: true` æ¯è®¾ç½®ãä¸»é®èªå¢ã

---

æ°å»ºå¯¹è±¡ä»åºï¼ä¹å°±æ¯æ°æ®è¡¨ä»¥åï¼å¯ä»¥å¯¹è¡¨è®¾ç½®ãç´¢å¼ãã

```js
request.onupgradeneeded = function (event) {
  db = event.target.result;
  let objectStore = db.createObjectStore("person", { keyPath: "id",autoIncrement: true});
  objectStore.createIndex("name", "name", { unique: true });
  objectStore.createIndex("email", "email", { unique: false });
};
```

`objectStore.createIndex` ç¨æ¥æ°å»ºå³äºè¿ä¸ªè¡¨çãç´¢å¼ãï¼åé¢å¯ä»¥éè¿ç´¢å¼æ¥æ¾å°è¯¥æ°æ®ã `unique: true` è¡¨ç¤ºè¯¥å¼æ¯å¦å¯ä¸ã

## æ°å¢æ°æ® ð add()

ä½¿ç¨ indexedDB æ è®ºæ¯æ°å¢æ°æ®ï¼è¿æ¯å é¤æ°æ®ï¼è·åæ°æ®é½è¦ä½¿ç¨å°ãäºå¡ãï¼
æè°ãäºå¡ãå¯ä»¥çè§£æï¼è¦å®æä¸ç³»åãäºæãï¼å½ä¸­æä¸ä»¶äºæåºéäºï¼å°±å¨é¨åéåæ²¡æåçè¿äºäºæä¹åã

> ð° ä¸¾ä¸ªä¾å­  
> å½ä½ å»é¶è¡è½¬é±ï¼æ­¥éª¤æ¯ åå¨ä½ çå¸æ·éæ£é±ï¼å¨æ°æ®åºéåå°äºä½ çé±ï¼ç¶ååå¨å«äººé£éå é±ãè¿æ¯ãä¸æ´ä¸ªäºå¡ãï¼ä¸ä¼åºç°åå°ä½ é±ï¼ä½æ¯æä½çªç¶åºéï¼ä»é£è¾¹æ²¡å å°é±ï¼å¯¼è´ä½ æ£äºé±ï¼ä»å´æ²¡å é±çæä½ãç¡®ä¿äºè¿ä¸é¡¹æä½çå®æ´æ§ï¼  
> æä»¥æ°æ®åºçãäºå¡ãæ¯å¾éè¦çï¼

è¿ææ°å¢æ°æ®åè¯»åæ°æ® é½è¦å¨æ°æ®æåæå¼ä»¥åæè½æ§è¡~

```js
//æå¼æ°æ®åºçæä½...
//å¤±è´¥..
let db;
//é¦æ¬¡åå»º...

//æåð

request.onsuccess = function (event) {
  db = request.result;
  console.log("æ°æ®åºæå¼æå");
  add();
};

//æ°å¢æ°æ® add  ãtransactionæ¯äºå¡ã
function add() {
  let request = db
    .transaction(["person"], "readwrite")
    .objectStore("person")
    .add({ id: 1, name: "XXG" });

  request.onsuccess = function (event) {
    console.log("æ°æ®åå¥æå");
  };

  request.onerror = function (event) {
    console.log("æ°æ®åå¥å¤±è´¥");
  };
}
```

1. ç¨ `db.transaction` æ°å»ºä¸ä¸ªäºå¡ï¼ãæä½çè¡¨åããæä½çè¡ä¸ºã
   1. ãæä½çè¡ä¸ºã - `readwrite` æ¯è¯»åã`readonly`æ¯åªè¯»
2. æ°å»ºäºå¡åï¼ç¨ `.objectStore('person')`çæ¹æ³æ¿å°ãå¯¹è±¡ã
3. æä½è¯¥ãå¯¹è±¡ãçãadd()ãæ¹æ³åè¡¨åæ·»å æ°æ®ï¼
4. æå æ å¤±è´¥ é½ä¼åè°ï¼

## è¯»åæ°æ® ð get()

```js
//æå¼æ°æ®åºçæä½...
//å¤±è´¥..
let db;
//é¦æ¬¡åå»º...

//æåð

request.onsuccess = function (event) {
  db = request.result;
  console.log("æ°æ®åºæå¼æå");
  read();
};

//è¯»åæ°æ® get  ãtransactionæ¯äºå¡ï¼é»è®¤æ¯åªè¯» readonlyã
function read() {
  let request = db.transaction(["person"]).objectStore("person").get(1);

  request.onsuccess = function (event) {
    if (request.result) {
      console.log(request.serult.name);
    }
  };

  request.onerror = function (event) {
    console.log("è¯»åå¤±è´¥");
  };
}
```

## éåæ°æ® ð openCursor()

éåæ°æ®ï¼è¦ä½¿ç¨ æéå¯¹è±¡ - `openCursor()`

```js
//æå¼æ°æ®åºçæä½...
//å¤±è´¥..
let db;
//é¦æ¬¡åå»º...

//æåð

request.onsuccess = function (event) {
  db = request.result;
  console.log("æ°æ®åºæå¼æå");
  readAll();
};

// éåæ°æ®ð
function readAll() {
  let objectStore = db.transaction("person").objectStore("person");

  objectStore.openCursor().onsuccess = function (event) {
    let cursor = event.target.result;

    if (cursor) {
      console.log("Id: " + cursor.key);
      console.log("Name: " + cursor.value.name);
      cursor.continue();
    } else {
      console.log("æ²¡ææ´å¤æ°æ®äºï¼");
    }
  };
}
```

## æ´æ°æ°æ®ð put()

```js
//æå¼æ°æ®åºçæä½...
//å¤±è´¥..
let db;
//é¦æ¬¡åå»º...

//æåð

request.onsuccess = function (event) {
  db = request.result;
  console.log("æ°æ®åºæå¼æå");
  update();
};

// æ´æ°æ°æ®ð put()
function update() {
  var request = db.transaction(['person'], 'readwrite')
    .objectStore('person')
    .put({ id: 1, name: 'XXGGG' });

  request.onsuccess = function (event) {
    console.log('æ°æ®æ´æ°æå');
  };

  request.onerror = function (event) {
    console.log('æ°æ®æ´æ°å¤±è´¥');
  }
}
```
`put` æ´æ°ä¸»é®ä¸º `1` çæ°æ®

## å é¤æ°æ® ð delete()
```js
//æå¼æ°æ®åºçæä½...
//å¤±è´¥..
let db;
//é¦æ¬¡åå»º...

//æåð

request.onsuccess = function (event) {
  db = request.result;
  console.log("æ°æ®åºæå¼æå");
  remove();
};

// å é¤æ°æ® ð delete()
function remove() {
  var request = db.transaction(['person'], 'readwrite')
    .objectStore('person')
    .delete(1);

  request.onsuccess = function (event) {
    console.log('æ°æ®å é¤æå');
  };
}
```
å é¤ä¸»é®ä¸º `1` çæ°æ®

## ä½¿ç¨ç´¢å¼ ð 

åé¢æè¯´å°ãåå»ºç´¢å¼ãï¼æ `name` è®¾ç½®ä¸ºç´¢å¼ä»¥åå°±å¯ä»¥éè¿ `name` æ¥æ¾å°å¨é¨å³äºè¿ä¸ª `name` çæ°æ®

```js
let request = db.transaction(['person'], 'readonly')
                .objectStore('person')
                .index('name')
                .get('XXG');

request.onsuccess = function (e) {
  let result = e.target.result;
  if (result) {
    // ...
  } else {
    // ...
  }
}
```

## æå

è¿ä¸ªæµè§å¨æ°æ®åºçä½¿ç¨åºæ¯ï¼ç®åè¿ä¸æ¯ç¹å«å¤ï¼å¯è½å¨ä¸äº PWA çåºç¨éä¼åºç°ã  

èä¸å¯ä»¥çå° ä½¿ç¨èµ·æ¥å¤å¤å°å°è¿æ¯æç¹ç¹çï¼ï¼ 

ä¸ºäºä»çå¥½å¤ï¼åä¸ºäºè§£å³ä»çç¹çï¼æåç°äºä¸ä¸ªå³äºindexedDBçåºï¼ð  
ã[localForage](http://localforage.docschina.org/)ã

å¯ä»¥åä½¿ç¨ãlocalStorageãä¸æ ·ä½¿ç¨ãindexedDBãï¼è¯·çä¸ä¸ç¯ï¼