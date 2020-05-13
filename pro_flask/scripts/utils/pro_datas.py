"""
    处理获取的各省数据
"""
from scripts.sql import get_province_data


def pro_data():
    """
        处理各省数据
    :return:
    """
    row_data = get_province_data.get_data()
    data = []
    for i in row_data:
        data.append(
            {'name': i[1], 'value': int(i[0])}
        )

    return data


if __name__ == '__main__':
    pro_data()