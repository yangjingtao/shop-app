function resize(originSize){
		var widths=document.documentElement.clientWidth;
		var scale=widths/originSize*100+"px";
		document.getElementsByTagName("html")[0].style.fontSize=scale;
   }