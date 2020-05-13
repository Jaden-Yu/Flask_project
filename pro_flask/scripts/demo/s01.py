"""
    爬虫：
    使用urllib发送请求
"""
from urllib import request

url = ''
header = {}

req = request.Request(url, headers=header)     # 访问url
res = request.urlopen(req)  # 获取响应
print(res.info())   # 获取响应头
print(res.getcode())    # 获取状态码
print(res.geturl()) # 获取响应地址

html = res.read()   # 获取页面字节内容
html.decode('utf-8')    # 对获取的字节内容进行解码


import requests
url = ""
header = {}
resp = requests.request(methond='', url=url, headers=header)
print(resp.encoding)    # 查看编码

