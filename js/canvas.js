define(['jquery'], function($){

	var Canvas  = function() {
		this.radius = 8;
		this.draw = function() {

			var canvas=document.getElementById("path");
			canvas.width = 800;
			canvas.height = 800;
			var context=canvas.getContext("2d");
			this.drawRect(context, {x:200, y: 200, fillcolor: 'rgba(0, 256, 0, 0.5)'});
			// context.beginPath();
			// context.rect(100, 100, 300, 200);
			// context.moveTo(100, 100);
			// context.lineTo(100, 700);
			// context.lineTo(700, 700);
			// context.lineWidth = 10;
			// context.closePath();
			// context.strokeStyle = '#058';
			// context.fillStyle = 'yellow';
			// context.fill();
			// context.stroke();
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
		//矩形绘制
		this.drawRect = function(cfx, reactOption) {
			var option = {
				x : 100,
				y : 100,
				width : 300,
				height : 200,
				bordercolor : '#058',
				fillcolor : 'yellow',
				borderwidth : null
			};
			option = $.extend({}, option, reactOption);
			cfx.fillStyle = option.fillcolor;
			cfx.fillRect(option.x, option.y, option.width, option.height);
			//console.log(option);	
			//cfx.beginPath();
			//cfx.rect(option.x, option.y, option.width, option.height);
			//cfx.closePath();
			//cfx.linewidth = 10;
			//cfx.fillStyle = option.fillcolor;
			//cfx.strokeStyle = option.bordercolor;
			//cfx.fill();
			//cfx.stroke();


		};

		this.drawLine = function(cfx, reactOption) {
			var option = {
				x: 100,
				y: 100,
				width : '',
				height : '',

			};
		};
		this.drawText = function(cfx, textOption) {
			var option = {
				fontstyle: '',
				fontvariant : '',
				fontweight : '',
				fontsize : '',
				fontfamily : '' 
			};
			option = $.extend({}, option, textOption);
			//font.



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
