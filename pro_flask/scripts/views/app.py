import sys
sys.path.append('F:\projects\pro_flask')
from flask import Flask
from flask import render_template
from flask import jsonify
from scripts.utils import utils
from scripts.utils import pro_datas, top5_data, china_history_data,add_history_data


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('main.html')


@app.route('/time')
def get_time():
    return utils.get_time()


@app.route('/c1')
def get_c01_data():
    data = utils.get_c1_data()
    return jsonify({
        'confirm': data[0],
        'suspect': data[1],
        'dead': data[2],
        'heal': data[3]
    })


@app.route('/c2')
def get_c02_data():
    data = pro_datas.pro_data()
    return jsonify({'data': data})


@app.route('/r01')
def get_right_r01_data():
    data = top5_data.confirm_top5_data()
    return jsonify(data)

@app.route('/l01')
def get_l01_data():
    data = china_history_data.china_history_list()
    return jsonify(data)


@app.route('/l02')
def get_l02_data():
    data = add_history_data.add_history_list()
    return jsonify(data)

if __name__ == '__main__':
    app.run()