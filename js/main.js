/**
 * 加载
 **/
 require.config({
 	paths: {
 		"jquery" : "http://s.thsi.cn/js/jquery-1.7.2.min"
 	}
 });
require(['canvas'], function(canvas){
	canvas.render();

	//console.log(a);
	//console.log(new a());

});