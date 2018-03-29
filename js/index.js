jQuery(function ($){
	$("#nav").addClass("active");
	$(".js-bannerBtn").bind("click",function(){
		var type = $(this).data("type");
		bannerMove(type);
	})
	function bannerMove(type){
		// type： 0 左，type： 1 右。
		if(type){
			$(".js-bannerImgBox").removeClass("bannerRight");
		}else{
			$(".js-bannerImgBox").addClass("bannerRight");
		}
		$(".dot.active").removeClass("active");
		$(".dot" + type).addClass("active");
	}
})
