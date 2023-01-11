# 🕸️ 爬虫

- 爬虫先要安装 python !

### 🕸️ Python爬虫基本流程
1. 【分析网页】通过浏览器查看分析目标网页HTML结构
2. 【请求数据】（包括需要登录的）
3. 【解析数据/整理并获得数据】
4. 【保存数据】

### 🕸️ 常用第三方库👇
- **`urllib` （制定URL、获取“整体”网页数据）【Python3自带】**
- **`re` （正则表达式，进行筛选，整理出想要的内容）【Python3自带】**
- **`sqlite3 `（进行SQL数据库操作）【Python3自带】✅好东西！！！**

---

- **`requests `【作用与urllib类似，但是比urllib方便好用】✅好东西！！！**
- **`BeautifulSoup` 【网页解析、变成“可筛选”数据】✅好东西！！！**
- **`lxml` 【BeautifulSoup的解析器 很快啊！】✅好东西！！！**

安装方法：👇
```sh
# python3自带的不用安装
pip install bs4
pip install requests
pip install lxml
pip install xlwt
```

### 🕸️ 全部的引入方式
```python
import urllib.request,urllib.error
from bs4 import BeautifulSoup
import re
import xwlt
import sqlite3
import requests
```

### 🕸️ 暂时主要引入👇
```python
import requests
from bs4 import BeautifulSoup
```

