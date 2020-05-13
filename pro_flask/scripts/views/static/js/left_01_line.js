var left_01_line = echarts.init(document.getElementById('left1','dark'))
var myDate = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
var left_01_line_option = {
  //   title: {
  //       text: '全国疫情趋势',
		// textStyle:{
		// 	color: 'white'
		// }	
  //   },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['累计确诊', '累计死亡', '累计治愈']
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
        data: myDate
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '累计确诊',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '累计死亡',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '累计治愈',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
        }
    ]
};

left_01_line.setOption(left_01_line_option)