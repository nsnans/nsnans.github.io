# ð¡ ES6

## ð¡ åé - let
1. åéä¸è½éå¤å£°æ
1. åçº§ä½ç¨å
1. ä¸å­å¨åéæå
```javascript
let xxg = "xxg";
```
## ð¡ å¸¸é - const

1. ä¸å®è¦èµåå§å¼
1. ä¸è¬å¸¸éä½¿ç¨å¤§å
1. å¸¸éçå¼ä¸è½ä¿®æ¹
1. åçº§ä½ç¨å
1. å¯¹æ°ç»åå¯¹è±¡çåç´ ä¿®æ¹ï¼ä¸ç® å¯¹å¸¸æ°çä¿®æ¹ï¼ä¸ä¼æ¥éã
```javascript
const xg = "xg";
```
## ð¡ è§£æèµå¼
### æ°ç»è§£æï¼
```javascript
const F4 = ['å°æ²é³','åè½','èµµå','å®å°å®'];
let [xiao,liu,zhao,song] = F4;
console.log(xiao); //'å°æ²é³'
```
### å¯¹è±¡è§£æï¼
```javascript
const zhao = {
  name:'xxg',
  age'18',
}
let { name , age } = zhao;
console.log(name);
console.log(age);
```
## ð¡ æ¨¡æ¿å­ç¬¦ä¸²ã ` ` ã
```javascript
let str = `å­ç¬¦ä¸²`;

let strr = `xxg
            lalala
            lalala`;

let strrr = `xxg${str}`;
```
## ð¡ ç®åå¯¹è±¡åæ³
```javascript
let name = 'xxg';

const shuaige = {
   name, //ç­æäº name:name;
}

//æ¯å¦ vueä¸­çcomponentsç»ä»¶ð
components:{ //å®ä¹å­ç»ä»¶
  home,
},

```
## ð¡ ç®­å¤´å½æ°

1. ãå¨ç®­å¤´å½æ°ä¸ãthisæ¯éæçï¼thiså§ç»æåå½æ°å£°ææ¶æå¨ä½ç¨åä¸çthisçå¼
1. ãå¨ç®­å¤´å½æ°ä¸ãä¸è½ä½ä¸ºæé å®ä¾åå¯¹è±¡
1. ãå¨ç®­å¤´å½æ°ä¸ãä¸è½ä½¿ç¨arguments åé
```javascript
let fn = function(){}

let fn = () => {
  //ç®­å¤´å½æ°ç®åå
}
```

4. çç¥åæ°å°æ¬å·ðï¼çç¥æ¹æ³è±æ¬å·
```javascript
let add = n => { //æ(n) çç¥æ n
  return n + n;
}

let pow = n => n * n ; //çç¥è±æ¬å·å¾åæä¸è¡

```

5. ãç®­å¤´å½æ°éåä¸ this æ å³çåè°ãå®æ¶å¨ï¼æ°ç»çæ¹æ³åè°ããä¸éåä¸ this æå³çåè°ãäºä»¶åè°ï¼å¯¹è±¡çæ¹æ³ã
## ð¡ å½æ°åæ°çé»è®¤å¼è®¾ç½®

1. å½¢ååå§å¼ å·æé»è®¤å¼çåæ°ï¼ä¸è¬ä½ç½®è¦é åï¼æ½è§åï¼
```javascript
function add (a,b,c=10){
  return a + b + c;
}
```
## ð¡ reståæ°ã ...args ã

1. ES6å¼å¥ rest åæ°ï¼ç¨äºè·åå½æ°çå®åï¼ç¨æ¥ä»£æ¿ arguments
1. rest åæ°å¿é¡»è¦æ¾å°æå
```javascript
// es5ð
function date(){
  cosole.log(arguments);
}
date('x','xx','xxg');

//es6ð
function dates(...args){
  console.log(args);
}
dates('xxgg','xxggg','xxgggg');

//2. rest åæ°å¿é¡»è¦æ¾å°æå
function fn(a,b,...args){
  //
}
```
## ð¡ æ©å±è¿ç®ç¬¦ã ... ã

1. ã ... ãæ©å±è¿ç®ç¬¦è½å°ãæ°ç»ãè½¬æ¢ä¸ºéå·åéçãåæ°åºåã
```javascript
//ã ... ãæ©å±è¿ç®ç¬¦è½å°ãæ°ç»ãè½¬æ¢ä¸ºéå·åéçãåæ°åºåã
const shyBoy = ['xxg','ty','xzz'];//=> 'xxg','ty','xzz'

function fn(){
  console.log(arguments);
}

fn(...shyBoy);
```

2. æ°ç»çåå¹¶ð
```javascript
const name1 = ['xxg','xxggg']
const name2 = ['yt','ytt']

const ddd1 = name1.concat(name2);
const ddd2 = [...name1, ...name2];
console.log(ddd1);
console.log(ddd2);
```

3. æ°ç»çåéð
```javascript
const sanzhihua = ['E','G','M'];
const sanyecao = [...sanzhihua]; //['E','G','M']; ãæµæ·è´ãï¼æ·è´åéæå­çå¼ï¼å¦ææ¯å¼ç¨åéï¼é£æ·è´çå°±æ¯å®éé¢çå°åã
```

4. å°ä¼ªæ°ç»è½¬ä¸ºçæ­£çæ°ç»ð
```javascript
const divs = Object;
const array = [...divs];
```
## ð¡ Symbolãç¬ä¸æ äºçå¼ã
é®ä¸å³°ï¼[https://es6.ruanyifeng.com/#docs/symbol](https://es6.ruanyifeng.com/#docs/symbol)  

- ES6å¼å¥çæ°åå§æ°æ®ç±»åï¼ç±»ä¼¼å­ç¬¦ä¸²æ°æ®ç±»åï¼æ¯ç¬¬ä¸ç§æ°æ®ç±»åã
1. Symbolçå¼æ¯å¯ä¸çï¼ç¨æ¥è§£å³å½åå²çªçé®é¢ã
1. Symbolå¼ä¸è½ä¸å¶ä»æ°æ®è¿è¡è¿ç®
1. Symbolå®ä¹çå¯¹è±¡ä¸è½ä½¿ç¨ for ...in å¾ªç¯éåï¼ä½æ¯å¯ä»¥ç¨ Reflect.ownKeys æ¥è·åå¯¹è±¡çææé®åã
```javascript
let s = Symbol(); //åå»º
let s2 = Symbol('xxg'); //åå»º  è¿ç§åå»ºæ¹æ³ åæ°ä¸æ ·ï¼ä¹ä¸ç¸ç­
let s3 = Symbol.for('xxggg'); //å½æ°åå»º è¿ç§åå»ºæ¹æ³ï¼åæ°ä¸æ ·å°±ç¸ç­
```

4. Symbol åå»ºå¯¹è±¡å±æ§ð
```javascript
let game = {
  name:'ä¿ç½æ¯æ¹å',
  up:...;
  down:...;
}
let methods = {
  up:Symbol(),
  down:Symbol()
}
game[methods.up] = function(){
  console.log('1')
}
game[methods.down] = function(){
  console.log('2')
}
console.log(game) // ä½¿ç¨è¿ç§æ¹å¼å¯ä»¥å¨gameåæç¸åºåè½çåºç¡ä¸ï¼æ·»å å¤ä¸ä¸ªç¬ä¸æ äºçæ¹æ³ï¼å³ä½¿åå­ç¸å~
```
```javascript
let youxi = {
  name:'ç¼äººæ',
  [Symbol('say')]:function(){
    console.log('æå¯ä»¥åè¨');
  }
}
```
### ð¡ Symbolåç½®å¼ï¼ç¥
## ð¡ è¿­ä»£å¨ï¼Iterator)

- **for...of **å¾ªç¯ï¼Iteratoræ¥å£ä¸»è¦ä¾ for...ofæ¶è´¹
1. Array
1. arguments
1. Set
1. Map
1. String
1. TypeArray
1. NodeList
## ð¡ çæå¨

- çæå¨å°±æ¯ä¸ä¸ªç¹æ®çå½æ°
- å¼æ­¥ç¼ç¨ çº¯åè°å½æ°
```javascript
funtction * gen(){
  cosole.log('hello');
  yield 111;
}
let iterator = gen();
iterator.next(); // è¦ä½¿ç¨ next() æ¥è°ç¨
```
## ð¡ Promise
Promise æ¯ES6å¼å¥çå¼æ­¥ç¼ç¨çæ°è§£å³æ¹æ¡ï¼è¯­æ³ä¸Promiseæ¯ä¸ä¸ªæé å½æ°ï¼ç¨æ¥å°è£ãå¼æ­¥æä½ãå¹¶å¯ä»¥è·åæåæå¤±è´¥ã
```javascript
const p = new Promise(function(resolve,reject){
  setTimeout(function(){
    //
    let data = 'data';
    resolve(data);
    
    let err = 'æ°æ®è¯»åå¤±è´¥';
    reject(err)
  },1000};
});

//è°ç¨ promise å¯¹è±¡ç then æ¹æ³
p.then(function(value){
  console.log(value);
},function(reason){
  console.log(reason);
})
```
### ð¡ promiseè¯»åæä»¶ð
```javascript
const fs = require('fs');

//ð
fs.readFile('./xxg.md',(err,data)=>{
  if(err) throw err;
  console.log(data.toString());
});

//ðä½¿ç¨Promise
const p = new Promise(function(resolve,reject){
  fs.readFile("./xxg.md",(err,data)=>{
    if(err) rejuect(err);
    resolvue(data);
  });
});


p.than(funciton(value){
       console.log(value.toString()):
},function(reason){
  console.log("è¯»åå¤±è´¥ï¼ï¼");
});
```
### ð¡ promiseå°è£AJAXð 

1. åå§ð
```javascript
//1.åå»ºå¯¹è±¡
const xhr = new XMLHttpRequest();

//2.åå§å
xhr.open("GET","https://api.apiopen.top/getJoke");

//3.åé
xhr.send();

//4.ç»å®äºä»¶ï¼å¤çååºç»æ
xhr.onreadystatechange = function(){
  if(xhr.readyState === 4){
    if(xhr.status >= 200 && xhr.status < 300){
      console.log(xhr.response);
    }else{
      console.error(xhr.status);
    }
  }
}
```

2. å°è£ð
```javascript
const p = new Promise((resolve,reject)=>{
	//1.åå»ºå¯¹è±¡
	const xhr = new XMLHttpRequest();
	
	//2.åå§å
	xhr.open("GET","https://api.apiopen.top/getJoke");
	
	//3.åé
	xhr.send();
	
	//4.ç»å®äºä»¶ï¼å¤çååºç»æ
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status >= 200 && xhr.status < 300){
				
				resolve(xhr.response);
			}else{
				reject(xhr.status);
			}
		}
	}
})

p.then(function(value){
	console.log(value);
},function(reason){
	console.error(reason);
});
```
### ð¡ Promise-thenæ¹æ³ð
```javascript
const p = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('data');
  },1000)
});

//è°ç¨ then æ¹æ³  æåäºæ§è¡ç¬¬ä¸ä¸ªæ¹æ³ï¼ å¤±è´¥äºæ§è¡ç¬¬äºä¸ªæ¹æ³
p.then(value => {
  console.log(value);
}, reason => {
  console.log(reason);
});

//thençè¿å ä¹æ¯ä¸ä¸ªPromise ï¼ä»çè¿åç»ææ¯ä»çæ§è¡ç»ææå³å®çï¼
const result = p.then(value => {
  console.log(value);
}, reason => {
  console.log(reason);
});
```
### ð¡ Promise-catchæ¹æ³ð
```javascript
const p = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    reject('åºéå¦ï¼');
  },1000)
});

p.catch(function(reason){
  console.warn(reason);
})
```

---

## ð¡ éå - set
### ð¡ åºç¡ï¼

1. éåå»é
```javascript
let s = new Set([3,4,5,6,5]);
let S2 = new Set([1,2,3,4,1,2,3])

console.log(s);//[3,4,5,6]
console.log(s2);//[1,2,3,4]
```

2. åç´ ä¸ªæ°
```javascript
let S2 = new Set([1,2,3,4,1,2,3])
s2.size
```

3. æ·»å æ°åç´ 
```javascript
let S2 = new Set([1,2,3,4,1,2,3])
s2.add('100');
```

4. å é¤åç´ 
```javascript
let S2 = new Set([1,2,3,4,1,2,3])
s2.delete('1');
```

5. æ£æµ
```javascript
let S2 = new Set([1,2,3,4,1,2,3])
console.log(s2.has('1')); //true
console.log(s2.has('101')); //false
```

6. æ¸ç©º
```javascript
let S2 = new Set([1,2,3,4,1,2,3])
s2.clear();
console.log(s2);//[]
```
### ð¡ æ°ç»å»éð
```javascript
let arr = [1,2,3,4,5,4,3,2,1];
let result = [...new Set(arr)];

console.log(result) 
```
### ð¡ äº¤éð
```javascript
let arr = [1,2,3,4,5,4,3,2,1];
let arr2 = [4,5,6,5,6];

let result = [...new Set(arr)].filter(item => {
	let s2 = new Set(arr2);//4 5 6
	if(s2.has(item){
		 return true;
	}else{
		 return false;
	}
});

//ç®åð
//let result = [...new Set(arr)].filter(item => new Set(arr2).has(item));

console.log(result) 
```
### ð¡ å¹¶éð
```javascript
let arr = [1,2,3,4,5,4,3,2,1];
let arr2 = [4,5,6,5,6];

let union = [...arr,...arr2];
let result = [...mew Set(union)];

console.log(result) 
```
### ð¡ å·®éð

1. 1éé¢æç 2éé¢æ²¡æã1å2çå·®éã
1. 2éé¢æç 1éé¢æ²¡æã2å1çå·®éã
```javascript
let arr = [1,2,3,4,5,4,3,2,1];
let arr2 = [4,5,6,5,6];

let diff = [...new Set(arr)].filter(item => !(new Set(arr2).has(item)));

console.log(diff) 
```
## ð¡ Map
### ð¡ åºç¡ï¼
```javascript
let m = new Map();
```

1. æ·»å åç´ 
```javascript
m.set('name','xxg');
```

2. åç´ ä¸ªæ°
```javascript
m.size
```

3. å é¤
```javascript
m.delete('name');
```

4. è·å
```javascript
m.get('name');
```

5. æ¸ç©º
```javascript
m.clear();
```

6. éå
```javascript
for(let v of m){
  console.log(v)
}

//["name","xxg"]
  
```

---

## ð¡Class - ç±»
å¯¹è±¡çæ¨¡æ¿ï¼å¯ä»¥çä½è¯­æ³ç³
ðå¸¸è§ð
```javascript
//ææºð
function Phone(brand,price){
  this.brand = brand;
  this.price = price;
}

//æ·»å æ¹æ³ð
Phone.prototype.call = function(){
  console.log("call");
}

//å®ä¾åå¯¹è±¡
let Huawei = new Phone('åä¸º',5999);
Hwawei.call();
console.log(Huawei);
```
ðä½¿ç¨classð
```javascript
class Phone{
  //æé æ¹æ³ åå­ä¸è½ä¿®æ¹ð æ­¤æ¹æ³å¨new å®ä¾åè°ç¨
  constructor(brand,price){
    this.brand = brand;
    this.price = price;
  }
  
  //æ¹æ³å¿é¡»ä½¿ç¨è¯¥è¯­æ³ï¼ä¸è½ä½¿ç¨ ES5çå¯¹è±¡å®æ´å½¢å¼ call:function(){}
  call(){
    console.log('call');
  }
}
  
  let onePlus = new Phone('1+',1999);

console.log(onePlus)
```
### éææåð

- éææå å±äºç±»ï¼ ä¸å±äºå®ä¾å¯¹è±¡

ðå¸¸è§ð
```javascript
function Phone(){
  
}

Phone.name = "ææº";  //ãéææåã
Phone.change = function(){
  console.log("æå¯ä»¥æ¹å");
}

let nokia = new Phone(); //ãå®ä¾å¯¹è±¡ æåçæ¯ ååå¯¹è±¡ã

console.log(nokoia.name); //undefined   ãæ¿ä¸å°ã
nokia.change(); //ãæ²¡æè¿ä¸ªæ¹æ³ã


Phone.prototype.size = '5.5inch';
console.log(nokia.size); //5.5inch    ãå¾å¾prototype ååéé¢å  ææ¿å¾å°ã
```
ðä½¿ç¨classð
```javascript
calss Phone {
  //éæå±æ§
  static name = 'ææº';
  static change(){
    console.log("æå¯ä»¥æ¹å");
  }
}

let nokia = new Phone();
console.log(nokoia.name); //undefined   ãæ¿ä¸å°ã
console.log(Phone.name); //ææº   ãéææå å±äºç±»ï¼ ä¸å±äºå®ä¾å¯¹è±¡ã
```
### ç±»ç»§æ¿
ðES5ð
```javascript
//ææº
function Phone(brand,price){
  this.brand = brand;
  this.price = price;
}

Phone.prototype.call = function(){
  console.log("call");
}

function SmartPhone(brand,price,color,size){
  Phone.call(this,brand,price);
  this.color = color;
  this.size = size;
}

//è®¾ç½®å­çº§æé å½æ°çåå
SmartPhone.prototype = new Phone;
SmartPhone.prototype.constructor = SmartPone;

//å£°æå­ç±»çæ¹æ³
SmartPhone.prototype.palyGame = function(){
  console.log("game");
}

const chuizi = new SmartPhone('é¤å­',2499,'é»è²','5.5inch');

console.log(chuizi);
```
ðclassð
```javascript
class Phone{
  //æé æ¹æ³
  constructor(brand,price){
    this.brand = brand;
    this.price = price;
  }
  
  //ç¶ç±»çæåå±æ§
  call(){
    console.log("call")
  }
}

class SmartPhone extends Phone {
  //æé æ¹æ³
  constructor(brand,price,color,size){
    super(brand,price);
    this.color = color;
    this.size = size;
  }
  
  photo(){
    console.log("æç§");
  }
  playGame(){
    console.log("ç©æ¸¸æ");
  }
}

const xiaomi = new SmartPhone("å°ç±³",799,"é»è²","4.7inch");
console.log(xiaomi);
```
### å­ç±»å¯¹ç¶ç±»çéå
```javascript
class Phone{
  //æé æ¹æ³
  constructor(brand,price){
    this.brand = brand;
    this.price = price;
  }
  
  //ç¶ç±»çæåå±æ§
  call(){
    console.log("call")
  }
}

class SmartPhone extends Phone {
  //æé æ¹æ³
  constructor(brand,price,color,size){
    super(brand,price);
    this.color = color;
    this.size = size;
  }
  
  photo(){
    console.log("æç§");
  }
  playGame(){
    console.log("ç©æ¸¸æ");
  }
  call(){
    //ä¸è½ä½¿ç¨super
    console.log("æå¯ä»¥è¿è¡è§é¢éè¯");
  }
}

const xiaomi = new SmartPhone("å°ç±³",799,"é»è²","4.7inch");
console.log(xiaomi);
```
## ð¡get å set
```javascript
class Phone{
  class Phone{
    get price(){
      console.log("ä»·æ ¼å±æ§è¢«è¯»å");
      return 'xxg';
    }
    
    set price(newValue){ //å¿é¡»è¦æåæ°
      console.log("ä»·æ ¼å±æ§è¢«ä¿®æ¹äº");
  }

//å®ä¾åå¯¹è±¡
let s = new Phone();

s.price = 'free';    

console.log(s.price); 
//ä»·æ ¼å±æ§è¢«è¯»å
//xxg
```
## ð¡ ES6çæ°å¼æ©å±

1. Number.EPSILON ãæå°ç²¾åº¦ã
1. äºè¿å¶åå«è¿å¶ ã0b1010ã-ã0bå¼å¤´ãã 0o777ã-ã0oå¼å¤´ã
1. Number.isFiniteãæ£æµä¸ä¸ªæ°å¼æ¯å¦æéæ°ããNumber.isFinite(100)ã
1. Number.isNaN ãæ£æµæ¯ä¸æ¯NaNã
1. Number.ParseInt ãNumber.parseFloat ãå­ç¬¦ä¸²è½¬æ´æ°ã
1. Number.isInteger ãå¤æ­ä¸ä¸ªæ°æ¯å¦ä¸ºæ´æ°ããNumber.isInteger(5.5)ã
1. Math.trunc ãå°æ°å­çå°æ°é¨åæ¹æããMath.trunc(3.5)ããå¶å®å°±æ¯åä¸åæ´ã
1. Math.sign ãå¤æ­ä¸ä¸ªæ°ä¸º æ­£æ° è´æ° è¿æ¯0ããæ­£æ°ä¸º1ï¼è´æ°ä¸º-1ï¼0ä¸º0ã

## ð¡ å¯¹è±¡æ¹æ³æ©å±

1. Object.is ãå¤æ­ä¸¤ä¸ªå¼æ¯å¦å®å¨ç¸ç­ããNaN æ¯ NaNã
1. Object.assign ãå¯¹è±¡çåå¹¶ããObject.assign(xxg1,xxg2)ããå¦ææç¸åçå±æ§ï¼åé¢çåæ°ä¼æåé¢çè¦çäºã
1. Object.setPrototypeOf ãè®¾ç½®ååå¯¹è±¡ã
1. Object.getPrototypeof

## ð¡ ES æ¨¡åå

- æ¨¡ååæ¯æå°ä¸ä¸ªå¤§çç¨åºæä»¶ï¼æåæè®¸å¤å°çæä»¶ï¼ç¶åå°å°æä»¶ç»åèµ·æ¥ã

æ¨¡ååäº§åðï¼

1. CommonJS => NodeJS
### ð¡ æ¨¡ååè¯­æ³ï¼

1. **ãexportã å½ä»¤ç¨äºæ´é²åºæ¥å£**
1. **ãimportã å½ä»¤ç¨äºå¼å¥å¶ä»æä»¶çæ¥å£**
```javascript
//1.éç¨çå¯¼å¥æ¹å¼ð
import * as m1 from "./src/js/m1.js";

//2.è§£æèµå¼çæ¹å¼
import {xxg} from "./src/js/m2.js";

//3.ç®ä¾¿å½¢å¼ éå¯¹é»è®¤äººæ´é²
import m3 from "./src/js/m3.js";
```
æ¹æ³äºï¼å¥å£æä»¶ï¼app.jsæèå«main.js)
```javascript
// å¥å£æä»¶

//æ¨¡åå¼å¥
import * as m1 from "./m1.js";
import * as m2 from "./m2.js";
...
...
...

...
```
```html
// å¼å¥å¥å£æä»¶
<srcipt src="./src/js/app.js" type="module"></script>
```
## ð¡ babel

- babel - æES6è½¬åä¸ºå¤§é¨åæµè§å¨å¯æ¥åçES5
1. å®è£ï¼babel-cli babel-preset-env browserify(webpack)
1. è½¬æ¢ï¼npx babel src/js -d dist/js
1. æåï¼npx browserify dist/js/app.js -o dist/bundle.js
```html
// å¼å¥å¥å£æä»¶
<srcipt src="./src/js/app.js" type="module"></script>
//æ¹æð
<srcipt src="dist/bundle.js" type="module"></script>
```
## ð¡ async å awaitãES8æ°ç¹æ§ã
asyncåawait ä¸¤ç§è¯­æ³ç»åå¯ä»¥è®©å¼æ­¥ä»£ç ååæ­¥ä»£ç ä¸æ ·ï¼
### asyncå½æ°ï¼

1. asyncå½æ°çè¿åå¼ä¸ºpromiseå¯¹è±¡
1. promise å¯¹è±¡çç»æç±asyncå½æ°æ§è¡çè¿åå¼å³å®
### awaitè¡¨è¾¾å¼ï¼

1. await å¿é¡»åå¨asyncå½æ°ä¸­
1. await å³ä¾§çè¡¨è¾¾å¼ä¸è¬ä¸ºpromiseå¯¹è±¡
1. await è¿åçæ¯promiseæåçå¼
1. await çpromise å¤±è´¥äºï¼å°±ä¼æåºå¼å¸¸ï¼éè¦éè¿try...catchæè·å¤ç
```javascript
async function fn(){
   //åªè¦ä½ è¿åçä¸æ¯ä¸ä¸ªPromiseç±»åçå¯¹è±¡ é£è¿ä¸ªå½æ°æ¯ä¸ä¸ªãæåãçPromise
   //æ¯å¦è¯´ å½æ°éé¢è¿åä¸ä¸ªå­ç¬¦ä¸²ï¼é£ä¹è¿ä¸ªå½æ°æ¯æåçPromise
}

const result = fn();
console.log(result);
```
```javascript
async function fn(){
   return new Promise((resolve,reject)=>{
     resolve('æå');
     //reject('å¤±è´¥');
}

const result = fn();
console.log(result);
```
```javascript
const p = new Promise((res,rej)=>{
	res('good');
});

async function main(){
	try{
		let result = await p;
		console.log(result);
	}catch(e){
		console.log(e);
	}
}
main();
//good
```
## ð¡ å¯¹è±¡æ¹æ³æ©å±
### Object.keys(xxg)
è·åå¯¹è±¡ææçé®
### Object.values(xxg)
è·åå¯¹è±¡ææçå¼
### Object.entries(xxg)
è¿åä¸ä¸ªæ°ç»ï¼é®å¼å¯¹ã
### Object.getOwnPropertyDescriptors(xxg)
å¯¹è±¡å±æ§çæè¿°å¯¹è±¡
