'''
    保存数据
'''
import pymysql
import time
import json
import traceback    # 追踪异常


def connect_db():
    conn = pymysql.connect(
        host='127.0.0.1',
        user='root',
        db='cov2020'
    )
    cursor = conn.cursor()

    return conn, cursor


def insert_history_data(date, confirm, suspect, dead, heal):
    '''插入到china_history表'''
    conn, cursor = connect_db()

    sql = 'insert into china_history ' \
          '(ds,confirm,suspect,dead,heal) ' \
          'values' \
          '(%s,%s,%s,%s,%s);'
    ds_data = date
    confirm_data = confirm
    suspect_data = suspect
    dead_data = dead
    heal_data = heal

    cursor.execute(sql, [
        ds_data,
        confirm_data,
        suspect_data,
        dead_data,
        heal_data
    ])
    conn.commit()

    cursor.close()
    conn.close()


def insert_daily_add_data(date, confirm, suspect, dead, heal):
    '''插入到china_daily_add表'''
    conn, cursor = connect_db()

    sql = 'insert into china_daily_add ' \
          '(ds,confirm_day_add,suspect_day_add,dead_day_add,heal_day_add) ' \
          'values' \
          '(%s,%s,%s,%s,%s);'
    ds_data = date
    confirm_data = confirm
    suspect_data = suspect
    dead_data = dead
    heal_data = heal

    cursor.execute(sql, [
        ds_data,
        confirm_data,
        suspect_data,
        dead_data,
        heal_data
    ])
    conn.commit()

    cursor.close()
    conn.close()


def insert_china_city_history_data(date, province, city, confirm, suspect, dead, heal):
    '''插入到china_city_history表'''
    conn, cursor = connect_db()
    sql = 'insert into china_city_history ' \
          '(update_time,province,city,confirm,suspect,dead,heal) ' \
          'values' \
          '(%s,%s,%s,%s,%s,%s,%s);'
    update_time = date
    provinces = province
    citys = city
    confirms = confirm
    suspects = suspect
    deads = dead
    heals = heal

    cursor.execute(sql, [
        update_time,
        provinces,
        citys,
        confirms,
        suspects,
        deads,
        heals
    ])
    conn.commit()

    cursor.close()
    conn.close()


def insert_province_history_data(date, confirm, suspect, dead, heal, province):
    '''插入到province_history表'''
    conn, cursor = connect_db()

    sql = 'insert into china_province_history ' \
          '(ds,confirm,suspect,dead,heal,province) ' \
          'values' \
          '(%s,%s,%s,%s,%s,%s);'
    ds_data = date
    confirm_data = confirm
    suspect_data = suspect
    dead_data = dead
    heal_data = heal
    provinces = province

    cursor.execute(sql, [
        ds_data,
        confirm_data,
        suspect_data,
        dead_data,
        heal_data,
        provinces
    ])
    conn.commit()

    cursor.close()
    conn.close()


def query_data(table, word):
    '''获取日期'''
    conn, cursor = connect_db()
    #sql_newest_date = 'select ds from history order by ds desc limit 1'
    # cursor.execute(sql_newest_date)
    # res = cursor.fetchone()     # 获取单个查询返回值，元组
    tables = table
    words = word
    sql = 'select {} from {}'.format(tables, words)
    cursor.execute(sql)
    res = cursor.fetchall()   # 获取多个查询返回值，元组
    dates = []
    for i in res:
        dates.append(str(i[0]))
    cursor.close()
    conn.close()
    return dates



if __name__ == '__main__':
    #insert_data('2020-04-19',3000,100,200,1000)
    query_data()


