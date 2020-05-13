"""
    处理top5数据
"""

from scripts.sql.get_top5_data import get_top5_confirm_data


def confirm_top5_data():
    """
        获取top5确诊数据
    :return:
    """
    row_data = get_top5_confirm_data()
    provinces = []
    pro_confirm = []
    for i in row_data:
        provinces.append(i[1])
        pro_confirm.append(i[0])
    return {"pro": provinces, 'confirm': pro_confirm}


if __name__ == "__main__":
    print(confirm_top5_data())