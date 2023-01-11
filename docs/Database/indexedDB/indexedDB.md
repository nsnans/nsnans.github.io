# 🗄️ indexedDB

> [阮一峰 | 浏览器数据库 IndexedDB 入门教程](https://www.ruanyifeng.com/blog/2018/07/indexeddb.html)  
> [CSDN | indexedDB 介绍](https://blog.csdn.net/hjb2722404/article/details/118789332)  
> [简单教程 | 浏览器 IndexedDB 简明教程](https://www.twle.cn/t/167)

最近在做一个项目，需要用到【本地存储】

在前端关于【本地存储】的方法有 👇

1. `cookie` ，内存很少 只是 5k.. 而且是用于和服务器交互的
2. `localStorage` 和 `sessionStorage`，一个用于长期存储，一个会话存储
3. 还有一个被弃用的 `Web SQL`
4. 还有就是今天的主角 **【 [indexedDB](https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API) 】**

---

简单的理解就是【浏览器的数据库】，他的特点是 👇

1. 像对象的【键值对】，比如 `{"name":"xxg"}`
2. 而且可以存数组、对象、二进制数据...
3. 数据库不清除就会永远存在！！！
4. 容量无限大~
5. 异步存取

之前我使用 `localStorage` ！但是 `localStorage` 可以被用户在控制台（也就是按下 F12 以后）任何更改值

涉及一些业务，如果修改了值可能会影响界面、影响别的操作。  
所以我觉得 `localStorage` 放一些【可被覆盖】的值。比如【Token】【暗黑模式】...

而 `indexedDB` 除了用来放大量数据，以及可以用来放二进制的音乐、图片、视频数据..  
我还用他来放一些会上传到云端数据库的数据。

那么接下来就记录以下 `indexedDB` 的基础用法吧 👇

## 打开数据库 👇

1. 参数一：数据库名
2. 参数二：数据库版本

```js
let request = window.indexedDB.open("XXG_DB", 1);
```

特别说明，如果指定名字的数据库不存在就会新建数据库。如果不写数据库版本就会打开当前版本，新建数据库默认版本号为 `1` 。

打开数据库后有三个回调函数会触发

1. 失败 - error
2. 成功 - success
3. 首次创建/版本升级 - upgradeneeded

一般触发完【首次创建】后就会触发【成功】

### 失败 - error

```js
request.onerror = function (event) {
  console.log("数据库打开报错");
};
```

### 成功 - success

```js
let db;

request.onsuccess = function (event) {
  db = request.result;
  console.log("数据库打开成功");
};
```

### 首次创建/版本升级 - upgradeneeded

```js
let db;

request.onupgradeneeded = function (event) {
  db = event.target.result;
};
```

1. 当数据库新建的时候会触发
2. 数据库版本升级的时候也会触发
3. 触发完以后就会去触发【成功 - success】

注意：在【成功】是用 `request.result` 而在【首次创建】这是用 `event.target.result`

---

很明显，在【首次创建】处，设置【数据表】👇

```js
request.onupgradeneeded = function (event) {
  db = event.target.result;
  let objectStore = db.createObjectStore("person", { keyPath: "id" });
};
```

这里的意思就是设置一个表 `person` ，主键是 `id`。

```js
request.onupgradeneeded = function(event) {
  db = event.target.result;
  let objectStore = db.createObjectStore('person', { keyPath: 'id',autoIncrement: true});
}
```

`autoIncrement: true` 是设置【主键自增】

---

新建对象仓库，也就是数据表以后，可以对表设置【索引】。

```js
request.onupgradeneeded = function (event) {
  db = event.target.result;
  let objectStore = db.createObjectStore("person", { keyPath: "id",autoIncrement: true});
  objectStore.createIndex("name", "name", { unique: true });
  objectStore.createIndex("email", "email", { unique: false });
};
```

`objectStore.createIndex` 用来新建关于这个表的【索引】，后面可以通过索引来找到该数据。 `unique: true` 表示该值是否唯一。

## 新增数据 👇 add()

使用 indexedDB 无论是新增数据，还是删除数据，获取数据都要使用到【事务】，
所谓【事务】可以理解成，要完成一系列【事情】，当中某一件事情出错了，就全部倒退回没有发生这些事情之前。

> 🌰 举个例子  
> 当你去银行转钱，步骤是 先在你的帐户里扣钱，在数据库里减少了你的钱，然后再在别人那里加钱。这是【一整个事务】，不会出现减少你钱，但是操作突然出错，他那边没加到钱，导致你扣了钱，他却没加钱的操作。确保了这一项操作的完整性！  
> 所以数据库的【事务】是很重要的！

还有新增数据和读取数据 都要在数据成功打开以后才能执行~

```js
//打开数据库的操作...
//失败..
let db;
//首次创建...

//成功👇

request.onsuccess = function (event) {
  db = request.result;
  console.log("数据库打开成功");
  add();
};

//新增数据 add  【transaction是事务】
function add() {
  let request = db
    .transaction(["person"], "readwrite")
    .objectStore("person")
    .add({ id: 1, name: "XXG" });

  request.onsuccess = function (event) {
    console.log("数据写入成功");
  };

  request.onerror = function (event) {
    console.log("数据写入失败");
  };
}
```

1. 用 `db.transaction` 新建一个事务，【操作的表名】【操作的行为】
   1. 【操作的行为】 - `readwrite` 是读写、`readonly`是只读
2. 新建事务后，用 `.objectStore('person')`的方法拿到【对象】
3. 操作该【对象】的【add()】方法向表内添加数据！
4. 成功 或 失败 都会回调！

## 读取数据 👇 get()

```js
//打开数据库的操作...
//失败..
let db;
//首次创建...

//成功👇

request.onsuccess = function (event) {
  db = request.result;
  console.log("数据库打开成功");
  read();
};

//读取数据 get  【transaction是事务，默认是只读 readonly】
function read() {
  let request = db.transaction(["person"]).objectStore("person").get(1);

  request.onsuccess = function (event) {
    if (request.result) {
      console.log(request.serult.name);
    }
  };

  request.onerror = function (event) {
    console.log("读取失败");
  };
}
```

## 遍历数据 👇 openCursor()

遍历数据，要使用 指针对象 - `openCursor()`

```js
//打开数据库的操作...
//失败..
let db;
//首次创建...

//成功👇

request.onsuccess = function (event) {
  db = request.result;
  console.log("数据库打开成功");
  readAll();
};

// 遍历数据👇
function readAll() {
  let objectStore = db.transaction("person").objectStore("person");

  objectStore.openCursor().onsuccess = function (event) {
    let cursor = event.target.result;

    if (cursor) {
      console.log("Id: " + cursor.key);
      console.log("Name: " + cursor.value.name);
      cursor.continue();
    } else {
      console.log("没有更多数据了！");
    }
  };
}
```

## 更新数据👇 put()

```js
//打开数据库的操作...
//失败..
let db;
//首次创建...

//成功👇

request.onsuccess = function (event) {
  db = request.result;
  console.log("数据库打开成功");
  update();
};

// 更新数据👇 put()
function update() {
  var request = db.transaction(['person'], 'readwrite')
    .objectStore('person')
    .put({ id: 1, name: 'XXGGG' });

  request.onsuccess = function (event) {
    console.log('数据更新成功');
  };

  request.onerror = function (event) {
    console.log('数据更新失败');
  }
}
```
`put` 更新主键为 `1` 的数据

## 删除数据 👇 delete()
```js
//打开数据库的操作...
//失败..
let db;
//首次创建...

//成功👇

request.onsuccess = function (event) {
  db = request.result;
  console.log("数据库打开成功");
  remove();
};

// 删除数据 👇 delete()
function remove() {
  var request = db.transaction(['person'], 'readwrite')
    .objectStore('person')
    .delete(1);

  request.onsuccess = function (event) {
    console.log('数据删除成功');
  };
}
```
删除主键为 `1` 的数据

## 使用索引 👇 

前面有说到【创建索引】，把 `name` 设置为索引以后就可以通过 `name` 来找到全部关于这个 `name` 的数据

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

## 最后

这个浏览器数据库的使用场景，目前还不是特别多，可能在一些 PWA 的应用里会出现。  

而且可以看到 使用起来多多少少还是有点繁琐！！ 

为了他的好处，又为了解决他的繁琐，我发现了一个关于indexedDB的库！👇  
【[localForage](http://localforage.docschina.org/)】

可以像使用【localStorage】一样使用【indexedDB】，请看下一篇！