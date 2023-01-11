# 🕸️ 获取数据

上一章利用了BeautifulSoup解析好了数据，这一章就来获取解析好后标签里的数据内容吧！！

## 🕸️ 获取<标签>里面的属性
- `get()` 
```html
// 比如这是我们要爬取下来的标签
<img class'img_class' src='想获得的图片地址'></img>
```
```python
import requests
from bs4 import BeautifulSoup

html = requests.get('https://www.baidu.com')
soup = BeautifulSoup(html.text,'lxml')

img_tap = soup.find('img')
img_src = img_tap.get('src')

print(img_tap)
print(img_src)
```
用这样的方法我们就可以获取到`img`标签里面的`src`啦！ 爬取照片.... 的链接..   
等后续我们学习了【存储】以后，可以根据这个链接来下载保存这张图片！！！  
## 🕸️ 获取<标签>里面的内容
```html
<h1>你想获取这里的字</h1>
```
### 🕸️ string
```python
title = div.find('h1').string
```
### 🕸️ conents[0]
```python
title = div.find('h1').conents[0]
```
