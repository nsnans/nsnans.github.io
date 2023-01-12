# 🔗 防盗链 Referer

有一些网站的图片设置了Referer。当你要去访问/下载他的图片的时候，他会拒绝你访问。   
这时候你可以把【访问来源】设置成他的网站Url👇  

```py
headers = {
    'Referer': 'https://www.yinfans.net/'
}
```
上面这个网站是一个电影网站，他的电影封面爬取到链接，但是访问不到，也就访问不到，这时候就在请求头设置【访问来源】是他的本站... 就可以了