# ð¡ Class - ç±»

å¯¹è±¡çæ¨¡æ¿ï¼å¯ä»¥çä½è¯­æ³ç³
ð å¸¸è§ ð

```javascript
//ææºð
function Phone(brand, price) {
  this.brand = brand;
  this.price = price;
}

//æ·»å æ¹æ³ð
Phone.prototype.call = function () {
  console.log("call");
};

//å®ä¾åå¯¹è±¡
let Huawei = new Phone("åä¸º", 5999);
Hwawei.call();
console.log(Huawei);
```

ð ä½¿ç¨ classð

```javascript
class Phone {
  //æé æ¹æ³ åå­ä¸è½ä¿®æ¹ð æ­¤æ¹æ³å¨new å®ä¾åè°ç¨
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }

  //æ¹æ³å¿é¡»ä½¿ç¨è¯¥è¯­æ³ï¼ä¸è½ä½¿ç¨ ES5çå¯¹è±¡å®æ´å½¢å¼ call:function(){}
  call() {
    console.log("call");
  }
}

let onePlus = new Phone("1+", 1999);

console.log(onePlus);
```

### éææå ð

- éææå å±äºç±»ï¼ ä¸å±äºå®ä¾å¯¹è±¡

ð å¸¸è§ ð

```javascript
function Phone() {}

Phone.name = "ææº"; //ãéææåã
Phone.change = function () {
  console.log("æå¯ä»¥æ¹å");
};

let nokia = new Phone(); //ãå®ä¾å¯¹è±¡ æåçæ¯ ååå¯¹è±¡ã

console.log(nokoia.name); //undefined   ãæ¿ä¸å°ã
nokia.change(); //ãæ²¡æè¿ä¸ªæ¹æ³ã

Phone.prototype.size = "5.5inch";
console.log(nokia.size); //5.5inch    ãå¾å¾prototype ååéé¢å  ææ¿å¾å°ã
```

ð ä½¿ç¨ classð

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
