# 🧻 localForage

[localForage | 官方文档 ](http://localforage.docschina.org/)  
[localForage | Github 仓库](https://github.com/xmoyking/localForage-cn)

前面说到了【indexedDB】这个浏览器数据库，它虽然美好，但是使用起来似乎还有有那么一丢丢繁琐，如果能像使用【localStorage】那样简单就好了！

没错！ 就是【localForage】

它的使用非常简单！看官方文档就可以学会，有中文！

在默认情况下它会把数据保存在【indexedDB】，在不支持【indexedDB】的浏览器上它会兜底把数据保存到【localStorage】

## 🧻 安装

```sh
npm install localforage
```

## 🧻 获取数据 - getItem

```js
localforage
  .getItem("name")
  .then(function (data) {
    console.log(data); //拿到数据
  })
  .catch(function (err) {
    console.log(err); //出错
  });
```

或者 👇

```js
localforage.getItem("name", function (err, data) {
  console.log(data); //拿到数据
});
```

## 🧻 设置数据 - setItem

可以存储对象、数组、数字、字符串、二进制数据....

```js
localforage
  .setItem("name", "xxg")
  .then(function (data) {
    // 当值被存储后，可执行其他操作
    console.log(data);
  })
  .catch(function (err) {
    console.log(err); //出错
  });
```

## 🧻 删除数据 - removeItem

```js
localforage
  .removeItem("name")
  .then(function () {
    // 当值被移除后，此处代码运行
    console.log("数据被清除");
  })
  .catch(function (err) {
    console.log(err); //出错
  });
```

### 🧻 删除所有数据/重置数据库 - clear

```js
localforage
  .clear("name")
  .then(function () {
    // 当数据库被全部删除后，此处代码运行
    console.log("数据库被清空");
  })
  .catch(function (err) {
    console.log(err); //出错
  });
```

## 🧻 获取数据数量 - length

```js
localforage
  .length("name")
  .then(function (length) {
    // 输出数据库的大小
    console.log(length);
  })
  .catch(function (err) {
    console.log(err); //出错
  });
```

## 🧻 索引 - key

```js
localforage
  .key(2)
  .then(function (keyName) {
    // 根据id索引获得的 key 名
    console.log(keyName);
  })
  .catch(function (err) {
    console.log(err); //出错
  });
```

### 🧻 迭代所有数据 - keys

```js
localforage
  .iterate(function (value, key, number) {
    // 此回调函数将对所有 key/value 键值对运行
    console.log([key, value]);

    //以下是提前退出迭代
    if (number < 3) {
      console.log([key, value]);
    } else {
      return [key, value];
    }
  })
  .then(function () {
    console.log("全部迭代完成");
  })
  .catch(function (err) {
    console.log(err); //出错
  });
```

## 🧻 其他

[localForage | 官方文档 ](http://localforage.docschina.org/) 