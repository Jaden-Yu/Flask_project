import time
import pymysql


def get_time():
    time_str = time.strftime('%Y{}%m{}%d{} %X')
    return time_str.format('年', '月', '日')


def connect_db():
    conn = pymysql.connect(
        host='127.0.0.1',
        user='root',
        db='cov2020'
    )
    cursor=conn.cursor()
    return conn, cursor


def close_db(conn, cursor):
    cursor.close()
    conn.close()


def query(sql, *args):
    """
        通用查询
    :return: 返回查询结果（（），（））
    """
    conn, cursor = connect_db()
    cursor.execute(sql, args)
    res = cursor.fetchall()
    close_db(conn,cursor)
    return res


def yesterday():
    from datetime import datetime,date,timedelta
    yesterdays = (date.today() + timedelta(days=-1)).strftime("%Y-%m-%d")
    return yesterdays


def get_c1_data():
    """
        获取全国历史数据
    :return:
    """
    date = yesterday()
    sql = 'select confirm,suspect,dead,heal ' \
          'from china_history ' \
          'where ds = %s;'
    date = '2020-05-05'
    res = query(sql, date)

    return res[0]


if __name__ == '__main__':
    get_c1_data()