# 🕸️ 请求数据 requests

> requests是第三方库，urllib是python自带的库。一般使用requests库，更加方便！

### 🕸️ 安装
```sh
pip install requests
```
### 🕸️ 简单使用
```python
import requests
html = requests.get('https://www.baidu.com/')

print(html.text)
```

### 🕸️ 设置超时【timeout】
```python
import requests

url = 'https://www.baidu.com/'
html = requests.get(url,timeout='5') # 发送请求

print(html.text)
```

### 🕸️ 设置请求头【headers】
- 设置请求头可以伪装成浏览器！ 这个很重要哦！ 否则人家网站会知道你是python爬虫，会封了你ip
- 这个不用背不用记，抄下来就可以了~  
```python
import requests

url = 'https://www.imooc.com/'
headers = {'User-Agent' : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36'} 
html = requests.get(url, headers=headers, timeout='5')
```
### 🕸️ 设置代理【proxies】
```python
import requests

url = "https://www.facebook.com" 
headers = {'User-Agent' : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36'}
proxies = {
    'http': 'http://127.0.0.1:41091',
    'https': 'http://127.0.0.1:41091',
}

html = requests.get(url, proxies=proxies, headers=headers, timeout='5')
```

## 🕸️ urllib
这个是自带的 没有上面那个好用~

- urllib.request.Request() 来设置请求头
- urllib.request.urlopen() 来请求网页数据

```python
# 开始爬取数据
def askURL(baseurl):
    #在爬虫的时候 这个是个简单的设置请求头的方法
    head = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36 Edg/89.0.774.54"
        }
    request = urllib.request.Request(baseurl,headers=head)
    #因为如果你不设置，他们服务器是会知道你是python爬虫来拿数据的。所以要伪装一下
    html = ''
    #爬虫一定要使用这个try 因为怕程序出错 爬不出来
    try:
        #然后利用【urllib里的request的urlopen方法】根据上面的请求头和url爬出来
        response = urllib.request.urlopen(request)
        #把爬到的内容【对象】赋值给response变量后读出来-用utf-8的格式读出来
        html = response.read().decode('utf-8')
    
    #出错了就用这个报错
    except urllib.error.URLError as e:
        if hasattr(e,"code"):
            print(e.code)
        if hasattr(e,"reason"):
            print(e.reason)

    #最后把爬到的数据返回出去
    return html
```

