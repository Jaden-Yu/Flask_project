import sys
sys.path.append('F:\projects\pro_flask')

from scripts.sql.get_china_history_data import get_china_history_data

def china_history_list():
    row_data = get_china_history_data()
    date =[]
    confirm = []
    dead = []
    heal = []
    for i in row_data:
        date.append(str(i[0]))
        confirm.append(i[1]) 
        dead.append(i[3]) 
        heal.append(i[4]) 
    return {"date":date, "confirm":confirm, "dead":dead, "heal": heal}


if __name__ == "__main__":
    print(china_history_list())
