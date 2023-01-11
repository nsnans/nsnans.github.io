# 🧱 VPN代理

有时候我们需要翻墙去外网爬一些网站,这时候就需要用VPN代理了，前提是你得有VPN软件..

![图 6](img/dd5b77df546200a3eb8d7f75b08471fc887ebcf32ee84fdc1402ad42f57826f6.png)  

## HTTP/HTTPS
![图 5](img/71c3bc02eeac3d1469b78005845b80902d7aba3f0c7298de6f47123b0989ecbb.png)  

```py
proxies = {
    'http':'http://127.0.0.1:41095',
    'https':'https://127.0.0.1:41095',
}

r = requests.get(url, proxies=proxies)
```

## socks5
```py
proxies = [
    'http':'socks5://127.0.0.1:1091',
    'https':'socks5://127.0.0.1:1091'
]
```

![图 7](img/1908a7af8e2c1f77cadcbb86054d874dac7908d9e9edd7f9dc0fc896037cfd8c.png)  

```sh
pip3 install PySocks -i https://pypi.tuna.tsinghua.edu.cn/simple
```
```py
import requests

proxies = {
    'http': 'socks5://127.0.0.1:20808',
    'https': 'socks5://127.0.0.1:20808'
}

r = requests.get(url, proxies=proxies)
```


