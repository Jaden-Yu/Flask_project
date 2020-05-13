var chart = echarts.init(document.getElementById('right2'));

var option = {
    tooltip: {},
    series: [ {
        type: 'wordCloud',
        gridSize: 2,
        sizeRange: [12, 50],
        rotationRange: [-90, 90],
        shape: 'pentagon',
        width: 600,
        height: 400,
        drawOutOfBound: true,
        textStyle: {
            normal: {
                color: function () {
                    return 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')';
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        data: [
            {
                name: '新型肺炎',
                value: 1619338,
                textStyle: {
                    normal: {
                        color: 'black'
                    },
                    emphasis: {
                        color: 'red'
                    }
                }
            },
            {
                name: '援鄂',
                value: 913902,
            },
            {
                name: '谣言',
                value: 875074
            },
            {
                name: '堂食',
                value: 721962
            },
            {
                name: '出游',
                value: 687164
            },
            {
                name: '国际突发事件',
                value: 584352
            },
            {
                name: '不开放',
                value: 420597
            },
            {
                name: '中国医疗专家组',
                value: 374371
            },
            {
                name: '口罩',
                value: 330276
            },
            {
                name: '张文宏',
                value: 316332
            },
            {
                name: '纽约殡仪馆',
                value: 295033
            },
            {
                name: '新冠疫苗',
                value: 283905
            },
            {
                name: '健康信息码',
                value: 242998
            },
            {
                name: '世卫组织',
                value: 217063
            },
            {
                name: '周末休假2.5天',
                value: 173225
            },
            {
                name: '中俄界江呼玛段',
                value: 140004
            },
            {
                name: '国内旅游',
                value: 130998
            }
        ]
    } ]
};

chart.setOption(option);
