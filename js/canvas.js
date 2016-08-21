//canvas 业务类
//绘制图形模块
define([], function(){

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
				x : 30,
				y : 380,
				width : reactWidth,
				height : reactHeight,
				fillcolor : '#9fccff', 
				title : '搜索页'
			};
			var imageFunction = function(image, option) {
				self.context.beginPath();
				self.context.drawImage(image, 0, 31, option.width, option.height, option.x, option.y, option.width, option.height);
			 	
			 	if (option.title !== null) {
			 		var titleX = option.x + (option.width)/2 - 20;
			 		var titleY = option.y + 10;
			 		var titleOption = {
			 			x : titleX,
			 			y : titleY,
			 			text : option.title
			 		};
			 		
			 		var option = {
						text : '搜索页',
						textLeft : titleOption.x,
						textTop : titleOption.y,
						tplLeft : option.x,
						tplTop : option.y + 40,
						reactWidth : reactWidth
					};
					self.renderHtmlText(option, p);
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
			if (p && callback && this.context.isPointInPath(p.x, p.y)) {
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
			}
			this.context.fill();
		};

		//渲染html格式的文字,
		//并增加监听的事件位置
		this.renderHtmlText = function(option, p) {
			var self = this,
				defaultOption = {
					text : null,
					textLeft : null,
					textTop : null,
					tplLeft : null,
					tplTop : null,
					reactWidth : null
				};
			option = $.extend({}, defaultOption, option);
			var html = '<a href="javascript: void(0);" id ="html_text" style="position : absolute; left : ' + option.textLeft + 'px; top : ' + option.textTop + 'px; color: #fff" >' + option.text + '</a>';
			$('#react-title').html(html);
			var $listSelect = $("#list-select");
			$("#html_text").on('click', function() {
				var nowStatus = $listSelect.css('display');
				if (nowStatus === 'none') {
					var trianglePointX = 20 + (option.reactWidth / 2);
					var triangleOption = {
						point1 : {x : trianglePointX, y : option.textTop + 20},
						point2 : {x : trianglePointX - 10, y : option.textTop + 30},
						point3 : {x : trianglePointX + 10, y : option.textTop + 30},
					};
				 	self.drawTriangle(triangleOption, p);
					$listSelect.css('display', 'block');
					self.renderHtmlTpl(option.tplLeft, option.tplTop);
					return;	
				}
				self.draw(p);
				$listSelect.css("display", 'none');
			});

			$("body").on('click', function(e){
				e = e || window.event;
				var obj = $(e.srcElement || e.target);
				if ($(obj).is("#html_text,#list-select") || $(obj).parents().is("#list-select")) {
					return;
				} 
				self.draw(p);
				$listSelect.css("display", 'none');
			});
		};

		//面板渲染
		this.renderHtmlTpl = function(left, top){

			var html = '<div style="position:relative">';
			html += '<ul>';
			html += '<li><a title="搜索页" data="">搜索页</a></li>';
			html += '<li><a title="在线词条页" data="">在线词条页</a></li>';
			html += '<li><a title="2.0首页精彩推荐">2.0首页精彩推荐</a></li>';
			html += '<li><a title="2.0搜索结果页">2.0搜索结果页</a></li>';
			html += '<li><a title="目录页">目录页</a></li>';
			html += '<li><a title="图片页">图片页</a></li>';
			html += '<li><a title= "我的百科页">我的百科页</a></li>';
			html += '<li><a title="在线词条页" data="">在线词条页</a></li>';
			html += '<li><a title="2.0首页精彩推荐">2.0首页精彩推荐</a></li>';
			html += '<li><a title="2.0搜索结果页">2.0搜索结果页</a></li>';
			html += '<li><a title="目录页">目录页</a></li>';
			html += '<li><a title="图片页">图片页</a></li>';
			html += '<li><a title= "我的百科页">我的百科页</a></li>';
			html += '<li><a title="在线词条页" data="">在线词条页</a></li>';
			html += '<li><a title="2.0首页精彩推荐">2.0首页精彩推荐</a></li>';
			html += '<li><a title="2.0搜索结果页">2.0搜索结果页</a></li>';
			html += '<li><a title="目录页">目录页</a></li>';
			html += '<li><a title="图片页">图片页</a></li>';
			html += '<li><a title= "我的百科页">我的百科页</a></li>';
			html += '</ul>';
			html += '</div>';
			$("#list-select").css({top : top, left: left});
			$("#list-select").html(html);
		},
		renderText : function() {
			var txt = '';

		}
	}

	return new Canvas();

});
