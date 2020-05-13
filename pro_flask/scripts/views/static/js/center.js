var ec_center = echarts.init(document.getElementById("c2"), "dark");
var mydata = [{
    "name": "上海",
    "value": 1000
}, {
    "name": "云南",
    "value": 162
}];
var ec_center_option = {
    backgroundColor: "",
    title: {
        text: "全国各省确诊分布情况",
        subtext: "",
        x: "center",
        textStyle:{color:'black'}
    },
    tooltip: {
        trigger: "item"
    },
    visualMap: {
        show: true,
        x: "left",
        y: "bottom",
        textStyle: {
            fontSize: 8,
			color: 'black',
        },
        splitList: [{
            start: 1,
            end: 9
        }, {
            start: 10,
            end: 99
        }, {
            start: 100,
            end: 499
        }, {
            start: 500,
            end: 999
        }, {
            start: 1000,
            end: 4999
        }, {
            start: 50000
        }],
        color: ["#95002f", "#bd003b", "#e03355", "#ff6f6f", "#ffbaba", "#ffe8e8"],
    },
    series: [{
        name: "累计确诊人数",
        type: "map",
        mapType: "china",
        roam: false,
        itemStyle: {
            normal: {
                borderColor: "rgba(0, 0, 0, 0.2)",
            },
            emphasis: {
                borderWidth: 0.5,
                borderColor: "#4b0082",
                areaColor: "#c7fffd",
            }
        },
        label: {
            normal: {
                show: true,
                fontSize: 8,
            },
            emphasis: {
                show: true,
                fontSize: 8,
            }
        },
		//添加地图数据
        // data: [],
		data: mydata
    }]
};

ec_center.setOption(ec_center_option);
