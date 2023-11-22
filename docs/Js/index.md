# 复习

## 数组

- 创建数组,指定从0到50

```ts
const createArr = (n: number) => {
    // Array.from 第二个参数是对数组中的元素进行处理的方法
    // new Array（n）通过构造函数 Array 实例化一个长度为n 的数组
    // new Array(n).keys()作用的从数组创建一个包含数组键的可迭代对象。展开运算符可以将具有迭代器(Iterator)接口的对象,转换成数组（[...可迭代对象]）

    return Array.from(new Array(n), (v, k) => k)
    return Array.from({ length: n }, (v, k) => k)
    return Array.from({ length: n }).map((v, k) => k)
    return new Array(n).fill(0).map((v, k) => k)
    return [...new Array(n).keys()]
}
console.log(createArr(50));
```

- 打乱数组

```ts
const randomSort = (list: any[]) => list.sort(() => Math.random() - 0.5)
randomSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) // 随机排列结果
console.log(Math.random());
```

- 数组唯一数据去重

```ts
// reduce参数
// 第一个参数：reducer 函数,包含四个参数
// 1、previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
// 2、currentValue （数组中当前被处理的元素）
// 3、index （当前元素在数组中的索引）
// 4、array （调用 reduce 的数组）
// 第二个参数（可选）：initialValue
// 代表传递给函数的初始值
const duplicateById = (list: any[]) => {
    // 提供一个Map初始值，然后在设置id为key，当id重复时，后者就会覆盖前者，达到去重的目的
    return [...list.reduce((prev, cur) => prev.set(cur.id, cur), new Map()).values()]
}
console.log(duplicateById([{ id: 1, name: 'jack' }, { id: 2, name: 'rose' }, { id: 1, name: 'jack' }, { id: 1, name: 'jack1' }]));

```

- 多个数组取交集
  
```ts
const intersection = (a, ...arr: any) => {

    // 先把第一个数组去重，然后剩余参数名的形式every判断如果当前数字在其他所有数组都满足条件，证明是交集，返回true，fliter中获取当前的值
    return [...new Set(a)].filter((v) => arr.every((b) => b.includes(v)))
}

console.log(intersection([1, 2, 3, 4], [2, 3, 4, 7, 8], [1, 3, 4, 9]));
```

// // 进制转换
// // 将10进制转换成n进制，可以使用toString(n)
// const toDecimal = (num, n = 10) => num.toString(n)
// // 假设数字10要转换成2进制
// console.log(toDecimal(10, 2));// '1010'

// // 10的2进制为1010
// const toDecimalism = (num, n = 10) => parseInt(num, n)
// console.log(toDecimalism(1010, 2));

// 去除多余空格
// trim只能去除左右空格
// const setTrimOut = str => str.replace(/\s\s+/g, ' ')
// const str = setTrimOut('hello,   jack') //
// console.log(str,'hello,   jack'.trim());

// 重新加载当前页面
// const reload = () => location.reload();
// reload()

// 滚动到页面顶部
// 如果你需要将页面翻到最顶部

// const goToTop = () => window.scrollTo(0, 0);
// 或者scrollTo({ top: 0, left: 0, behavior: 'smooth' });
// goToTop()