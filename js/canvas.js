//canvas 业务类
//绘制图形模块
define(['jquery'], function($){

	var Canvas  = function() {
		this.radius = 8;
		this.width = 800;
		this.height = 800;
		this.context = '';
		this.x = '';
		this.y = '';
		//入口机制
		this.render = function() {
			var self = this;
			var canvas = document.getElementById('path');
			canvas.width = this.width;
			canvas.height = this.height;
			this.context = canvas.getContext("2d");
			canvas.addEventListener('click', function(e){
				p = self.detect(e, canvas);
				//draw(p);
				//alert(1213);
				self.draw(p);
			});
			self.draw();
		};

		this.detect = function(ev, canvas) {
			var x, y;
			var clientX = ev.clientX;
			var clientY = ev.clientY;
			x = clientX - canvas.getBoundingClientRect().left;
			y = clientY - canvas.getBoundingClientRect().top;
			//console.log(x, y);
			// if (ev.layerX || ev.layerX == 0) {
			// 	x = ev.layerX;
			// 	y = ev.layerY;
			// } else if (ev.offsetX || ev.offsetX == 0) { // Opera
			// 	x = ev.offsetX;
			// 	y = ev.offsetY;
			// }
			// this.x = x;
			// this.y = y;
			return {x : x, y : y};
		};
		this.draw = function(p) {

			this.context.clearRect(0, 0, this.context.width, this.context.height);
			var option = {x:30, y: 380, fillcolor: '#9fccff', title: '搜索页'};
			this.drawImageRect(option, p);
			// var option = {x:30, y: 380, fillcolor: '#9fccff', title: '搜索页'}; 
			// this.drawRect(option);
			// var smallOption = {x:218, y:430, width:10, height:18, fillcolor: '#9fccff'};
			// this.drawRect(smallOption);
			//var canvas=document.getElementById("path");
			//canvas.width = 800;
			//canvas.height = 800;
			//var context = canvas.getContext("2d");
			//this.drawRect(context, {x:200, y: 200, fillcolor: 'rgba(0, 256, 0, 0.5)'});
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
		this.drawImageRect = function(opt, p){
			var self = this;
			var option = {
				x : 100,
				y : 100,
				width : 188,
				height : 113,
				fillcolor : '',
				borderwidth : null,
				title : null
			};
			option = $.extend({}, option, opt);
			this.context.beginPath();
			var image = new Image();
			image.src = './image/custom_flow.png';
			image.onload = function(){
				self.context.beginPath();
				self.context.drawImage(image, 0, 31, option.width, option.height, option.x, option.y, option.width, option.height);
				if (option.title !== null) {
					var titleX = option.x + (option.width)/2 - 20;
					var titleY = option.y + 20;
					var titleOption = {
						x : titleX,
						y : titleY,
						text : option.title
					};
					self.fillText(titleOption, p);
				}	
				self.context.closePath();
			};
			//console.log(self.context.isPointInPath(p.x, p.y))
			this.context.closePath();
			//console.log(image);
			//if (image.complete) {
			//	this.context.drawImage(image, 20, 20);
			//}
			//this.context.closePath();
		};
		this.fillText= function(opt, p) {
			this.context.beginPath();
			var option = {
				x : 10,
				y : 10,
				text : '',
				fillcolor : '#fff',
				font : '16px Courier New'
			};

			option = $.extend({}, option, opt);
			this.context.fillStyle = option.fillcolor;
			this.context.font = option.font;
			this.context.fillText(option.text, option.x, option.y);
			textWidth = this.context.measureText(option.text).height;
			console.log(textWidth);
			// if (p && this.context.isPointInPath(p.x, p.y)) {
			// 	console.log(1232);
			// }
			// this.context.addEventListener('click',function(){
			// 	alert(213);
			// })
			this.context.closePath();
		};

		//矩形绘制
		this.drawRect = function(reactOption) {
			this.context.beginPath();
			var option = {
				x : 100,
				y : 100,
				width : 188,
				height : 113,
				bordercolor : '#058',
				fillcolor : '#9fccff',
				borderwidth : null,
				title: null
			};
			option = $.extend({}, option, reactOption);
			this.context.fillStyle = option.fillcolor;
			this.context.fillRect(option.x, option.y, option.width, option.height);
			if (option.title !== null) {
				this.context.fillStyle = '#fff';
				this.context.font = '16px Courier New';
				this.context.fillText(option.title, option.x + (option.width)/2 - 16, option.y + 20);
			}
			this.context.closePath();
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
			//fon
		};
		/**
		this.render = function(cxt) {
			cxt.clearReact(0, 0, width, height);
			cxt.fillStyle = 'rgb(0, 102, 153)';
			cxt.begainPath();
			cxt.arc();
			cxt.closePath();
			cxt.fill(); 
		};**/


	}

	return new Canvas();

});
