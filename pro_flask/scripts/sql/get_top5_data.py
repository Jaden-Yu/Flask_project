"""
    获取top5数据
"""

from scripts.sql.query_sql import query


def get_lastest_data():
    """
        获取最新日期
    :return:
    """
    sql = "select ds from china_province_history order by ds desc limit 1;"
    res = query(sql)
    data = str(res[0][0])
    return data


def get_top5_confirm_data():
    """
        获取Top5地区
    :return:
    """
    data = get_lastest_data()
    sql = "select confirm, province " \
          "from china_province_history " \
          "where ds = %s and province <> '湖北' " \
          "order by confirm desc " \
          "limit 5;"
    res = query(sql, data)
    return res


if __name__ == "__main__":
    get_lastest_data()
    print(get_top5_confirm_data())