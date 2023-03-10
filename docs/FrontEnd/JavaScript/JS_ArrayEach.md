# ð¨ JS æ°ç»éå

- `forEach()`ãéåå¾ªç¯ããæ è¿åã
- `map()`ãéåå¾ªç¯ããè¿åã
- `for`ãéåå¾ªç¯ã
- `for of`ãéåå¾ªç¯ã
- `filter()`ãè¿æ»¤ã
- `every()`ãææé½æ»¡è¶³æ trueã
- `some()`ãæä¸ä¸ªæ»¡è¶³å°± trueã
- `reduce()` å `reduceRight()`ãè¿­ä»£ææé¡¹ã

 
## ð¨ forEach()ãéåå¾ªç¯ããæ è¿åã

1. æ°ç»åå®¹
1. ç´¢å¼
1. æ°ç»æ¬èº«

```js
var arr = [1, 2, 3, 4, 5];
arr.forEach(function (item, index, array) {
  console.log(item + "|" + index + "|" + (array === arr));
});
// è¾åºä¸ºï¼
// 1|0|true
// 2|1|true
// 3|2|true
// 4|3|true
// 5|4|true
```

## ð¨ map()ãéåå¾ªç¯ããè¿åã

```js
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.map(function (item) {
  return item * item;
});
console.log(arr2); //[1, 4, 9, 16, 25]
```

## ð¨ forãéåå¾ªç¯ã

for å¾ªç¯å forEach æ¯ç­ä»·çï¼é½æ¯å¾ªç¯æ°ç»

```javascript
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

## ð¨ for ofãéåå¾ªç¯ã

for of æ¯ ES6 è¯­æ³ï¼æ¯æ return,å¹¶ä¸æ¯åªè½éåæ°ç»ï¼ä¸è½éåå¯¹è±¡

```javascript
let arr = [1, 2, 3, 4, 5];
for (let i of arr) {
  console.log(i);
}
//1
//2
//3
//4
//5
```

å¦æè¦éåå¯¹è±¡ å¯ä»¥ ð

#### å¯¹è±¡ ð

Object.keys å°å¯¹è±¡ç key ä½ä¸ºæ°çæ°ç»

```javascript
let obj = { school: "name", age: 8 };
for (let i of Object.keys(obj)) {
  console.log(obj[i]);
}
//name
//8
```


## ð¨ filter()ãè¿æ»¤ã

- è¿åç¬¦åçé¡¹ï¼

```js
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr2 = arr.filter(function (item, index) {
  return index % 3 === 0 || item >= 8;
});
console.log(arr2); //[1, 4, 7, 8, 9, 10]
```

## ð¨ every()ãææé½æ»¡è¶³æ trueã

- å¤æ­æ°ç»ä¸­æ¯ä¸é¡¹é½æ¯å¦æ»¡è¶³æ¡ä»¶ï¼åªæææé¡¹é½æ»¡è¶³æ¡ä»¶ï¼æä¼è¿å trueã

```js
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.every(function (item) {
  return item < 10;
});
console.log(arr2); //true
var arr3 = arr.every(function (item) {
  return item < 3;
});
console.log(arr3); // false
```

## ð¨ some()ãæä¸ä¸ªæ»¡è¶³å°± trueã

- å¤æ­æ°ç»ä¸­æ¯å¦å­å¨æ»¡è¶³æ¡ä»¶çé¡¹ï¼åªè¦æä¸é¡¹æ»¡è¶³æ¡ä»¶ï¼å°±ä¼è¿å trueã

```js
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.some(function (item) {
  return item < 3;
});
console.log(arr2); //true
var arr3 = arr.some(function (item) {
  return item > 6;
});
console.log(arr3); // false
```

## ð¨ reduce() å reduceRight()ãè¿­ä»£ææé¡¹ã

- è¿­ä»£æ°ç»çææé¡¹
- `reduce()` ä»æ°ç»çç¬¬ä¸é¡¹å¼å§ï¼éä¸ªéåå°æåã
- `reduceRight()` ä»æ°ç»çæåä¸é¡¹å¼å§ï¼ååéåå°ç¬¬ä¸é¡¹ã
- è¿ä¸ªå½æ°è¿åçä»»ä½å¼é½ä¼ä½ä¸ºãç¬¬ä¸ä¸ªåæ°ãèªå¨ä¼ ç»ä¸ä¸é¡¹
- åä¸ªåæ°åå«ä¸ºï¼ï¼åä¸ä¸ªè¿åå¼ï¼å½åå¼ï¼ç´¢å¼ï¼æ°ç»å¯¹è±¡ï¼

```js
var values = [1, 2, 3, 4, 5];
var sum = values.reduceRight(function (prev, cur, index, array) {
  return prev + cur;
}, 10); //ð è¿ä¸ªç¸å½äºç»prevè®¾äºä¸ä¸ªåå§å¼10
console.log(sum); //25
//10 + 5 = 15
//15 + 4 = 19
//19 + 3 = 22
//22 + 2 = 24
//24 + 1 = 25
```

