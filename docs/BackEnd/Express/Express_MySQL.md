# â¬ Express + ð¬ MySQL

1. å¨è¿æ¥ãæ¬å°æ°æ®åºãæ¶ï¼åç¡®ä¿ãæ¬å°æ°æ®åºãæå¡å¼å¯äº~
2. å¹¶ä¸æå¯¹åºçæ°æ®åºä¸æ°æ®è¡¨
### ð¬ å®è£ mysql2 
```sh
npm install mysql2
```
### ð¬ å¼å¥mysql2 ä¸ è¿æ¥

```js
//1.å¶ä»å¼å¥
const mysql = require('mysql2')

const db = mysql.createdb({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'test_db'
})
db.connect();
```
![å¾ 1](img/00b13afac015e620c33fc913bed50ba45892dcb6a9cb922bc5bc5b11d2c7c952.png)  

```js
// 1.å¼å¥
const express = require("express");
const app = express();
// 2.ä¸­é´ä»¶
app.use(express.json())
app.use(express.urlencoded()) 




//ðððððãæµè¯æ°æ®åºãðððððð
const mysql = require('mysql2')

const db = mysql.createdb({
    host: 'localhost',  //ä¸»æºï¼æ¬å°
    port: '3306',   //ç«¯å£ï¼é»è®¤é½æ¯3306
    user: 'root',  //ç¨æ·å
    password: '123456',  //å¯ç 
    database: 'test_db'  //æ°æ®åºå
})
db.connect(); //è¿æ¥ï¼

//ãåSQLæä»¤ã
let sql = 'SELECT * FROM biao';
let str = '';
db.query(sql, function(err, result) {
    if (err) {
        console.log('[SELECT ERROR]ï¼', err.message);
    }
    str = result;
    console.log(result);
});
db.end();//æ°æ®åºè®¿é®å®è¦è®°å¾å³é­

// 3. æ¥å£
app.get("/", (req, res, next) => {
  try {
    res.json({
      str
    });
  } catch (err) {
    next(err);
  }
});
//ðððððððððððððððððð


// 4.404
app.use((req, res, next) => {
  res.status(404).send("404 Not Found");
});
// 5.éè¯¯å¤ç
app.use((err, req, res, next) => {
  console.log("éè¯¯", err);
  res.status(500).json({
    error: err.message,
  });
});
// 6.å¼å¯æå¡
app.listen(3001, () => {
  console.log("server å¯å¨æåï¼http://127.0.0.1:3001");
});
```

### â­ ç¨Apifoxæµè¯ ð
![å¾ 2](img/b39338afcea62dd4851062b139491ba0acdb15ad3b84e40aff726ef0580644c6.png)  


## ð¬ æå¥æ°æ®
```js
const user = { username:'xxgg', password:'12345678' }

const sql = 'INSERT INTO users (username,password) VALUES (? , ?)'

db.query(sql,[user.username,user.password],(err,res)=>{
  if(err) return console.log(err,message)//å¤±è´¥
  if(res.affectedRows === 1){console.log('æå¥æå')}
})
```
å¦æãæ°æ®å¯¹è±¡çæ¯ä¸ªå±æ§ãåãæ°æ®è¡¨çå­æ®µãä¸ä¸å¯¹åºï¼å¯ä»¥å¿«éæå¥æ°æ®ð
```js
const user = { username:'xxgg', password:'12345678' }

const sql = 'INSERT INTO users SET ?'
db.query(sql,user,(err,res)=>{
  if(err) return console.log(err,message)//å¤±è´¥
  if(res.affectedRows === 1){console.log('æå¥æå')
}
```
## ð¬ æ´æ°æ°æ®
```js
const user = {id:7 username:'aaa', password:'000' }

const sql = 'UPDATE users SET username=? password=? WHERE id=?'
db.query(sql,[user.username,user.password,user.id],(err,res)=>{
  if(err) return console.log(err,message)//å¤±è´¥
  if(res.affectedRows === 1){console.log('æ´æ°æ°æ®æå')}
})
```
```js
const user = {id:7 username:'aaa', password:'000' }

const sql = 'UPDATE users SET ? WHERE id=?'
db.query(sql,[user,user.id],(err,res)=>{
  if(err) return console.log(err,message)//å¤±è´¥
  if(res.affectedRows === 1){console.log('æ´æ°æ°æ®æå')}
})
```
## ð¬ å é¤æ°æ®
```js
const id = 7

const sql = 'DELETE FROM users WHERE id=?'
db.query(sql,id,(err,res)=>{
  if(err) return console.log(err,message)//å¤±è´¥
  if(res.affectedRows === 1){console.log('å é¤æ°æ®æå')}
})
```
### ð¬ æ è®°å é¤
ä½¿ç¨DELETEè¯­å¥ï¼ä¼çæ­£çææ°æ®ä»è¡¨ä¸­å é¤æï¼ä¸ºäºä¿é©èµ·è§ï¼æ¨èä½¿ç¨ãæ è®°å é¤ãçå½¢å¼ï¼æ¥æ¨¡æå é¤çå¨ä½ï¼
æè°ãæ è®°å é¤ãå°±æ¯ç¨ä¸ä¸ªãå­æ®µãæ è®°è¿æ¡æ°æ®å·²ç»è¢«å é¤ãä½æ¯å®éä¸ä¸ç¨ççå é¤è¿æ¡æ°æ®


