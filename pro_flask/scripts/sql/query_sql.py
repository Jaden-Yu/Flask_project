"""
    定义sql查询
"""

from scripts.sql.connect import ConnectDb


def query(sql, *args):
    """
        通用查询
    :return: 返回查询结果（（），（））
    """
    conn, cursor = ConnectDb().connect_db()
    cursor.execute(sql, args)
    res = cursor.fetchall()
    cursor.close()
    conn.close()
    return res

