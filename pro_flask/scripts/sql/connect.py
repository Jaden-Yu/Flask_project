"""
    连接sql
"""
import pymysql


class ConnectDb(object):
    def __init__(
            self,
            host='127.0.0.1',
            db='cov2020',
            user='root',
            password=None):
        self.host = host
        self.user = user
        self.db = db
        self.pwd = password

    def connect_db(self):
        conn = pymysql.connect(
            host=self.host,
            user=self.user,
            db=self.db,
            password=self.pwd
        )
        cur = conn.cursor()
        return conn, cur


if __name__ == '__main__':
    def query(con):
        conn, cursor = con
        sql = 'select * from history;'
        cursor.execute(sql)
        res = cursor.fetchall()
        print(res)
    con = ConnectDb('127.0.0.1','cov2020','root').connect_db()
    query(con)