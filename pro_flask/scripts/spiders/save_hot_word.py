"""
    保存百度热搜
"""
import pymysql
import time
import traceback
from Sp_hot_words import spider_hot_words


def connect_db():
    conn = pymysql.connect(
        host='127.0.0.1',
        user='root',
        db='cov2020'
    )
    cursor = conn.cursor()
    return conn, cursor


def insert_hot_word(date,content):
    try:
        conn, cursor = connect_db()

        sql = 'insert into hotwords ' \
              '(dt,content)' \
              'values' \
              '(%s,%s);'
        ts = date
        word = content
        cursor.execute(sql, [ts, word])
        conn.commit()

        cursor.close()
        conn.close()

    except:
        traceback.print_exc()


def inser_words():
    words = spider_hot_words()
    ts = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
    for word in words:
        insert_hot_word(ts,word)
    print("更新成功！")


if __name__ =="__main__":
    inser_words()