"""
    获取全国历史数据
"""
import sys
sys.path.append('F:\projects\pro_flask')
from scripts.sql.query_sql import query


def get_china_history_data():
    """
        获取全国历史数据
    """
    sql = "select * from china_history;"
    resp = query(sql)
    return resp


if __name__ == "__main__":
    print(get_china_history_data())