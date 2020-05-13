"""
    获取各省份历史数据
"""

import time
from scripts.sql.query_sql import query


def yesterday():
    from datetime import datetime,date,timedelta
    yesterdays = (date.today() + timedelta(days=-1)).strftime("%Y-%m-%d")
    return yesterdays


def get_data():
    """
        获取各省历史数据
    :return:
    """
    date = yesterday()
    sql = 'select confirm,province ' \
          'from china_province_history ' \
          'where ds = %s;'
    date = date
    res = query(sql, date)
    return res


if __name__ == '__main__':
    get_data()