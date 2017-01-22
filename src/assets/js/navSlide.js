(function($,win,doc){
	var scroll_rsilder={
		win_evet:function(){
			$(win).bind("scroll",function(){
				var scrollTop=$(this).scrollTop();
				_this.ele_evet(scrollTop);

			})
		},
		ele_evet:function(scrollTop){
			$(this.cloumn).each(function(index){
				var offsetTop=$(this).offset().top;
				xd=parseInt(offsetTop-scrollTop);
				if(xd<_this.spacing) $(_this.silder).eq(index).addClass(_this.curr).siblings().removeClass();
			})
		},
		init:function(obj){
				_this=this,
				this.cloumn=obj.cloumn,
				this.silder=obj.silder,
				this.spacing=obj.spacing||100,
				this.curr=obj.curr||"curr";
				if(!this.cloumn) return;
				this.win_evet();
		}

	}
	win.scroll_rsilder=scroll_rsilder;
})(jQuery,window,document)

$(function(){
	console.log("init");
	scroll_rsilder.init({
		cloumn:".panel",
		silder:".tablink a",
		spacing:80,
		curr:"curr"
	});
});