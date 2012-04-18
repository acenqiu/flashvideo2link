javascript:(function(){
	if (!window.jQuery) {
		script=document.createElement( 'script' );
		script.src='http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
		script.onload=foo;document.body.appendChild(script);
	} else {
		c();
	} 
	function c() {
		var t='<center><a href="http://v.youku.com/v_show/id_{id}.html" target="_blank">Video</a></center>';
		var reg=new RegExp('youku\.com/[^/]*/sid/(.*)/');
		$('embed').each(function(i,d){
			var s=$(d).attr('src');
			$(d).after(t.replace('{id}',s.match(reg)[1]));
		});
	}
}());