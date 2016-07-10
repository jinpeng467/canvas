define(['jquery'], function($){

	var Canvas  = function() {
		this.radius = 8;
		this.draw = function() {

			var canvas=document.getElementById("path");
			canvas.width = 800;
			canvas.height = 800;
			var context=canvas.getContext("2d");
			
			context.beginPath();
			context.rect(100, 100, 300, 200);
			// context.moveTo(100, 100);
			// context.lineTo(100, 700);
			// context.lineTo(700, 700);
			// context.lineWidth = 10;
			context.closePath();
			context.strokeStyle = '#058';
			context.fillStyle = 'yellow';
			context.fill();
			context.stroke();
			/**
			var canvas=document.getElementById("path");  //读取canvas元素的id
			canvas.width = '168';
			canvas.height = '121';
			var context=canvas.getContext("2d");
			this.render(context);
			// context.fillStyle="#FF0000";  //填充的颜色
			// context.strokeStyle="000";  //边框颜色
			// context.linewidth=10;  //边框宽
			// context.fillRect(0,0,400,400);  //填充颜色 x y坐标 宽 高
			// context.strokeRect(0,0,400,400);  //填充边框 x y坐标 宽 高
			// canvas.click(function(){alert(13)});
			**/
		};

		this.drawReact = function(cfx, reactOption) {
			var option = {
				x : '',
				y : '',
				width : '',
				height : '',
				bordercolor : '',
				fillcolor : ''
			};
			option = $.extend(option, reactOption);

			cfx.beginPath();
			cfx.react(option.x, option.y, option.width, option.height);
			cfx.closePath();

		};

		this.drawLine = function() {

		};

		this.render = function(cxt) {
			/**cxt.clearReact(0, 0, width, height);
			cxt.fillStyle = 'rgb(0, 102, 153)';
			cxt.begainPath();
			cxt.arc();
			cxt.closePath();
			cxt.fill(); **/
		}



	}

	return new Canvas();

});
