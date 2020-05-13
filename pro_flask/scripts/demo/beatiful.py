'''
    beautifulsoup 简单使用
'''

from bs4 import BeautifulSoup
import requests

url = 'http://wsjkw.sc.gov.cn/scwsjkw/gzbd/fyzt.shtml'
req = requests.request(url=url,method='get')
req.encoding = 'utf-8'
html = req.text
print(html)
soup = BeautifulSoup(html)
