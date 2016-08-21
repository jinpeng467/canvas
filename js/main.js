/**
 * 加载
 **/
 require.config({
 	paths: {
 		"jquery" : "http://s.thsi.cn/js/jquery-1.7.2.min"
 	}
 });
require(['canvas', 'jquery'], function(canvas, $){
	canvas.render();

});