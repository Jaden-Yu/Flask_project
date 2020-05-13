"""
    获取新增趋势
"""
import sys
sys.path.append('F:\projects\pro_flask')
from scripts.sql.query_sql import query


def get_add_history_data():
    """
        获取全国新增数据
    """
    sql = "select * from china_daily_add;"
    resp = query(sql)
    return resp


if __name__ == "__main__":
    print(get_add_history_data())