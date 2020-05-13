var right_01_bar = echarts.init(document.getElementById('right1','dark'))
var mycity = ['北京','上海','四川','黑龙江','重庆']
var right_01_bar_option = {
	title:{
		text: '非湖北地区Top5',
		testStyle: {
			color: 'black',
			fontWeight: 'bold'
		}
	},
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: mycity,
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
        }
    ]
};
right_01_bar.setOption(right_01_bar_option)