# 🍪 登录信息 Cookie

有一些网站需要登录才能展示相应的页面，登录后，网站就会发放你Cookie,所以你在请求的时候得需要有Cookie才行。

所以做法就是人肉登录后去浏览器取得Cookie,然后设置在Python里~


```py
headers = {
    'User-Agent' : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36',
    'Cookie':''
} # 请求头部
```
