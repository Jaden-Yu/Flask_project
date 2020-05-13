var left_02_line = echarts.init(document.getElementById('left2'))
var left_02_line_option = {
    // title: {
    //     text: '折线图堆叠'
    // },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['新增确诊', '新增死亡', '新增治愈']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '新增确诊',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '新增死亡',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '新增治愈',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
        }
    ]
};

left_02_line.setOption(left_02_line_option)