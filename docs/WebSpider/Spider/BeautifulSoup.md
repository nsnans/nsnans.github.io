# 🕸️ 解析 BeautifulSoup
## 🕸️ 安装
```sh
pip install beautifulsoup4
```
### 🕸️引入
```python
from bs4 import BeautifulSoup   
```
### 🕸️ BeatifuSoup 解析器
解析器是一种帮我们结构化网页内容的工具，通过解析器，我们可以得到结构化的数据，而不是单纯的字符，方便我们解析和查找数据。
BeautifulSoup 的解析器有 html.parse，html5lib，lxml 等。BeautifulSoup 本身支持的标准库是 html.parse，html5lib。但是，lxml 的性能非常棒，以及拥有良好的容错能力，现在被广泛的使用。
解析器对比：

- **html.parse 是 Python 标准库的解析器，这个解析器执行速度不是太快，但是文档容错能力比较好。**
- **html.5lib 同样是内置的解析器，它是通过浏览器的方式解析数据，可以生成良好的 HTML5 格式的文档，但是速度比较慢。**
- **lxml 是第三方解析器，需要额外安装。这个解析器执行速度快，并且是唯一支持 XML 的解析器。在这里我们也会选用 lxml 来进行讲解。**

安装 lxml 和安装 BeautifulSoup 类似，同样只需一行命令就好：
### 🕸️ 安装lxml
```sh
pip install lxml
```
### 🕸️ 使用
```python
import requests
from bs4 import BeautifulSoup

html = requests.get('https://www.baidu.com')
soup = BeautifulSoup(html.text,'lxml')
print(soup)

data1 = soup.find_all('p')
data2 = soup.find_all("div",class_="list") 
```

### 🕸️ find_all / find
- `find_all` 第一个参数是`<标签>`,第二个标签是标签的属性。它会把所有包含这些筛选条件的`<标签>`汇聚成一个数组。
- `find` 是获取第一个符合的条件的标签

```js
data = soup.find_all("div",class_="list") 
print(data)//👇

//['<div class="list">1</div>','<div class="list">2</div>','<div class="list">3</div>']
```
::: danger BeautifulSoup
关于这个 BeautifulSoup ！  
如果你不使用它，爬下来的就是干巴巴的字....  你是不能用`find_all` `find`这些来找里面的标签的，因为爬下来的数据就是【字】，只有当你利用BeautfulSoup把它【解析】解析成HTML后，才能被拿来分析，整理，获取。

所以【解析】【解析】！就是 解释！分析！
:::