'''
    爬取腾讯实时海外数据:
'''

import requests
import json
import time
from bs4 import BeautifulSoup
from urllib import parse
from save_data import insert_history_data, insert_daily_add_data, insert_china_city_history_data, \
    query_data, insert_province_history_data

# 获取世界数据
#url = 'https://api.inews.qq.com/newsqa/v1/automation/foreign/country/ranklist'
# 获取全国数据
url = 'https://view.inews.qq.com/g2/getOnsInfo?name=disease_other'

# 获取各省市数据
html_url = 'https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5&callback=jQuery34102347465661360899_1587047786416&_=1587047786417'


class Spider(object):
    def __init__(self, url):
        self.url = url

    def S01(self):
        req = requests.request(url=self.url, method='get')
        datas = req.json()
        return datas

    def S02(self):
        req = requests.request(url=self.url,method='get')
        html = req.text
        print(html)
        return html

    def S03(self):
        '''获取全国各省市数据'''
        global false, null, true
        false = null = true = ''    # eval无法解析null， true， false之类的数据

        resp = requests.get(self.url)
        text = resp.text
        datas = eval(eval(text[41:-1])['data'])
        return datas


def parse_world_data(datas):
    """解析获取国际数据"""
    row_datas = datas['data']
    print(row_datas)
    for data in row_datas:
        get_data = {}
        get_data['date'] = data['date']  # 日期
        get_data['continent'] = data['continent']  # 大洲
        get_data['name'] = data['name']  # 国家/地区
        get_data['curr_confirm_add'] = data['confirmAdd']  # 新增确诊人数
        get_data['confirm'] = data['confirm']  # 累计确诊人数
        get_data['heal'] = data['heal']  # 累计治愈人数
        get_data['dead'] = data['dead']  # 累计死亡人数
        get_data['now_confirm'] = data['nowConfirm']  # 现存确诊人数
        get_data['now_confirm_compare'] = data['nowConfirmCompare']  # 较上一日增加人数

        with open('datas.json', 'a') as f:
            f.write(json.dumps(get_data,ensure_ascii=True)+'\n')


def parse_china_datas(datas):
    '''获取国内总数及每日新增数'''
    row_datas = eval(datas['data'])
    print(row_datas)
    china_day_list = row_datas['chinaDayList']
    china_day_add_list = row_datas['chinaDayAddList']
    daily_new_add_history = row_datas['dailyNewAddHistory']
    daily_history = row_datas['dailyHistory']
    wuhan_day_list = row_datas['wuhanDayList']
    province_compare = row_datas['provinceCompare']
    city_statis = row_datas['cityStatis']
    now_confirm_statis = row_datas['nowConfirmStatis']

    # 国内每日统计
    ds = query_data('ds', 'china_history')
    chinaDayList = {}
    for i in china_day_list:
        date = '2020.'+i['date']    #日期
        tup = time.strptime(date, '%Y.%m.%d')
        date = time.strftime('%Y-%m-%d', tup)
        confirm = i['confirm']  # 累计确诊人数
        suspect = i['suspect']  # 累计疑似病例
        heal = i['heal']    # 累计治愈人数
        dead = i['dead']    # 累计死亡人数
        chinaDayList[date]={'confirm':confirm, 'suspect':suspect, 'heal':heal, 'dead':dead}
        if date not in ds:
            insert_history_data(date, confirm, suspect, dead, heal)
            ds.append(date)

    # 国内每日新增数统计
    ds = query_data('ds', 'china_daily_add')
    chinaDayAddList = {}

    for i in china_day_add_list:
        date = '2020.' + i['date']  # 日期
        tup = time.strptime(date, '%Y.%m.%d')
        date = time.strftime('%Y-%m-%d', tup)
        confirm = i['confirm']  # 新增确诊人数
        suspect = i['suspect']  # 新增疑似病例
        heal = i['heal']  # 新增治愈人数
        deal = i['dead']  # 新增死亡人数
        chinaDayAddList[date] = {
            'confirm_add': confirm,
            'suspect_add': suspect,
            'heal_add': heal,
            'deal_add': deal
        }
        '''
        chinaDayList[date].update(
            {
                'confirm_add': confirm,
                'suspect_add': suspect,
                'heal_add': heal,
                'deal_add': deal
            }
        )'''
        if date not in ds:
            insert_daily_add_data(date, confirm, suspect, dead, heal)
            ds.append(date)



def parse_china_city_datas(datas):
    '''
        获取中国省市数据
    :param datas:
    :return:
    '''
    # 获取各省数据
    province_total_datas = {}
    city_total_datas = {}

    date = datas['lastUpdateTime'].split(' ', 1)[0]
    d = date.split('-')
    date = d[0]+'.'+d[1]+'.'+d[2]
    tup = time.strptime(date, '%Y.%m.%d')
    date = time.strftime('%Y-%m-%d', tup)
    row_datas = datas['areaTree'][0]['children']

    ds01 = query_data('update_time', 'china_city_history')   #查询城市
    ds02 = query_data('ds', 'china_province_history')   # 查询省
    for i in row_datas:
        province = i['name']                # 省
        confirm = i['total']['confirm']     # 省确诊数
        suspect = i['total']['suspect']     # 省疑似病例
        dead = i['total']['dead']           # 省死亡数
        heal = i['total']['heal']           # 省治愈数
        chilren = []
        for j in i['children']:
            city = j['name']                    # 城市
            city_confirm = j['total']['confirm']     # 城市确诊数
            city_suspect = j['total']['suspect']     # 城市疑似病例
            city_dead = j['total']['dead']           # 城市死亡数
            city_heal = j['total']['heal']           # 城市治愈数

            insert_china_city_history_data(date, province, city, city_confirm, city_suspect, city_dead, city_heal)


            chilren.append({
                'city': city,
                'confirm': city_confirm,
                'suspect': city_suspect,
                'deal': city_dead,
                'heal': city_heal,
                'province': province,
                'date': date
            })

        city_total_datas[province] = chilren
        province_total_datas[province] = {
            'confirm': confirm,
            'suspect': suspect,
            'dead': dead,
            'heal': heal,
            'date': date
        }

        insert_province_history_data(date, confirm, suspect, dead, heal, province)


if __name__ == '__main__':
    datas = Spider(url).S01()
    parse_china_datas(datas)
    # html = Spider(html_url).S02()
    html = Spider(html_url).S03()
    parse_china_city_datas(html)
