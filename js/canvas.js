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
		this.bordercolor = '#058';
		this.fillcolor = '#9fccff';
		//入口机制
		this.render = function() {
			var self = this;
			var canvas = document.getElementById('path');
			canvas.width = this.width;
			canvas.height = this.height;
			this.context = canvas.getContext("2d");
			canvas.addEventListener('click', function(e){
				p = self.detect(e, canvas);
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
			return {x : x, y : y};
		};
		this.draw = function(p) {
			var self = this;
			this.context.clearRect(0, 0, this.context.width, this.context.height);
			var reactWidth = 188;
			var reactHeight = 113;
			var option = {
				x:30, 
				y: 380, 
				width : reactWidth,
				height : reactHeight,
				fillcolor: '#9fccff', 
				title: '搜索页'
			};
			var imageFunction = function(image, option) {
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
			 		var trianglePointX = 30 + (reactWidth / 2);
				 	var triangleOption = {
						point1 : {x : trianglePointX, y : 380 + 30},
				 		point2 : {x : trianglePointX - 10, y : 380 + 40},
						point3 : {x : trianglePointX + 10, y : 380 + 40},
				 	};
				 	self.drawTriangle(triangleOption, p);
			 	}	
			 	self.context.closePath();
			};
			
			this.drawImageRect(option, p, imageFunction);
			var reactOption = {
				title : '测试标题',
				height : 80,
				width : 150
			};
			this.drawRect(reactOption, p);
		};
		this.drawImageRect = function(opt, p, onloadFunction){
			var self = this;
			var option = {
				x : 100,
				y : 100,
				width : 188,
				height : 113,
				fillcolor : '',
				borderwidth : null,
				title : null,
			};
			option = $.extend({}, option, opt);
			this.context.beginPath();
			var image = new Image();
			image.src = './image/custom_flow.png';
			image.onload = function() {
				onloadFunction(image, option)
			};
			this.context.closePath();
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
			//console.log(option);
			this.context.fillStyle = option.fillcolor;
			this.context.font = option.font;
			this.context.fillText(option.text, option.x, option.y);
			textWidth = this.context.measureText(option.text).height;
			this.context.closePath();
		};

		//绘制矩形
		this.drawRect = function(reactOption, p, callback) {
			var self = this;
			this.context.beginPath();
			var option = {
				x : 100,
				y : 100,
				width : 188,
				height : 113,
				bordercolor : this.bordercolor,
				fillcolor : '#9fccfe',
				borderwidth : null,
				title: null
			};
			option = $.extend({}, option, reactOption);
			this.context.fillStyle = option.fillcolor;

			//由于fillRect不具有isPointInPath的方法， 特此添加rect()函数
			this.context.rect(option.x, option.y, option.width, option.height);
			this.context.fillRect(option.x, option.y, option.width, option.height);
			if (p && callback &&this.context.isPointInPath(p.x, p.y)) {
				callback();		
			}
			
			this.context.closePath();
			if (option.title !== null) {
				var textOptionX = option.x + (option.width)/2 - 30;
				var textOPtionY = option.y + 20;
				var textOption = {
					x : textOptionX,
					y : textOPtionY,
					text : option.title
				};
				this.fillText(textOption);
			}
			
		};
		//绘制三角形
		this.drawTriangle = function(triangleOption, p, callBack) {
			var option = {
				point1 : {x : null, y : null},
				point2 : {x : null, y : null},
				point3 : {x : null, y : null},
				color :  '#fff',//this.bordercolor
				fillcolor : '#fff'
			};
			option = $.extend({}, option, triangleOption);
			this.context.beginPath();
			this.context.moveTo(option.point1.x, option.point1.y);
			this.context.lineTo(option.point2.x, option.point2.y);
			this.context.lineTo(option.point3.x, option.point3.y);
			this.context.closePath();
			this.context.fillStyle = option.fillcolor;
			if (p && callBack && this.context.isPointInPath(p.x, p.y)) {

				callBack();
				//console.log(this.context.isPointInPath(p.x, p.y));
			}
			this.context.fill();
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
		
		};

	}

	return new Canvas();

});
