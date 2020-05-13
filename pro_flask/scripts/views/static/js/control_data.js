function gettime(){
				$.ajax({
					url:'/time',
					timeout:10000,
					success:function(data){
						$('#time').html(data)
					},
					error:function(){
						
					}
					
				})
			}
			
function get_c1_data(){
	$.ajax({
		url:'/c1',
		success:function(data){
			$('.num h1').eq(0).text(data.confirm);
			$('.num h1').eq(1).text(data.suspect);
			$('.num h1').eq(2).text(data.heal);
			$('.num h1').eq(3).text(data.dead);
		},
		error:function(){}
	})
}

function get_c2_data(){
	$.ajax({
		url: '/c2',
		success: function(data){
			ec_center_option.series[0].data=data.data
			ec_center.setOption(ec_center_option)
		}
	})
}

function get_r01_data(){
	$.ajax({
		url:'/r01',
		success: function(data){
			right_01_bar_option.xAxis[0].data = data.pro,
			right_01_bar_option.series[0].data = data.confirm
			right_01_bar.setOption(right_01_bar_option)
		},
		error: function(){}
	})
}

function get_l01_data(){
	$.ajax({
		url:'/l01',
		success: function(data){
			left_01_line_option.xAxis.data = data.date,
			left_01_line_option.series[0].data = data.confirm,
			left_01_line_option.series[1].data = data.dead,
			left_01_line_option.series[2].data = data.heal,
			left_01_line.setOption(left_01_line_option)
		}
	})
}

function get_l02_data(){
	$.ajax({
		url:'/l02',
		success: function(data){
			left_02_line_option.xAxis.data = data.date,
			left_02_line_option.series[0].data = data.confirm,
			left_02_line_option.series[1].data = data.dead,
			left_02_line_option.series[2].data = data.heal,
			left_02_line.setOption(left_02_line_option)
		}
	})
}


get_l02_data()
get_l01_data()
get_r01_data()
get_c2_data()
get_c1_data()
setInterval(gettime,1000)
