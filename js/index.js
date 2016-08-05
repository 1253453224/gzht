//点击跳转页面
$(".dianji1").click(function(){
	window.location.href="index.html";
});
$(".dianji2").click(function(){
	window.location.href="index2.html";
});
$(".dianji3").click(function(){
	window.location.href="index3.html";
});
$(".dianji4").click(function(){
	window.location.href="index4.html";
});
$(".dianji5").click(function(){
	window.location.href="index5.html";
});
$(".dianji6").click(function(){
	window.location.href="index6.html";
});
$(".dianji7").click(function(){
	window.location.href="index7.html";
});
//banner轮播
 //    $(".box").css({"width":$(window).width(),"height":$(window).height()});
	// $(".inner").css("top",$(window).height()).eq(0).css("top",0)

   // var now=0;
   // var next=0;
   // var flag=true;
   // $(".lbbox").mouseover(function(){//向上
   // 	  if(!flag){
   // 	  	return;
   // 	  }
   // 	   flag=false; 
        
   //    next--;
   //    if(next<0){
   //    	next=$(".inner").length-1;
   //    }
   //    $(".inner").eq(next).css({"left":"-323px"}); 
   //    $(".inner").eq(now).animate({"right":"323px"});
   //    $(".inner").eq(next).animate({"left":"0px"},function(){
   //    	flag=true;
   //    })
   //    $(".btn").removeClass("active").eq(next).addClass("active")
   //    now=next;



   // },function(){//向下
	  // if(!flag){//开关控制
	  // 	return;
	  // }
	  // flag=false;      

   //    next++;
   //    if(next>=$(".inner").length){
   //    	next=0;
   //    } 
   //    $(".inner").eq(next).css({"left":"323px"});
   //    $(".inner").eq(now).animate({"right":"323px"});
   //    $(".inner").eq(next).animate({"right":"0px"},function(){
   //    	flag=true;
   //    })
   //    $(".btn").removeClass("active").eq(next).addClass("active")
   //    now=next;
   // })

   // //滑上按钮
   // $(".btn").mouseover(function(){
   // 	var index=$(this).index();
   // 	$(".inner").css({"left":"323px"}).eq(index).css({"left":0})
   // 	$(".btn").removeClass("active").eq(index).addClass("active")
   // 	now=index;
   // })

//方法2
var lbbox=getClass("lbbox")[0];
     // alert(banner)
var inner=getClass("inner");
var btn=getClass("btn");
	// alert(btn.length)
var num=0;
// function move(){
//        num++;
//        if (num>=inner.length) {
//        	num=0
//        };
//        for (var i = 0; i < inner.length; i++) {
//        	inner[i].style.opacity=0;
//        	btn[i].style.background="black";
//        };
//        //as[num].style.opacity=1;
//        animate(inner[num],{opacity:1},600,Tween.Linear);
//        btn[num].style.background="red";
// 	}
// 	var t=setInterval(move,2000);
// 	//滑上去停，离开走
// 	lbbox.onmouseover=function(){
// 		clearInterval(t)};
// 	lbbox.onmouseout=function(){
// 	 t=setInterval(move,2000)};

   // $(".inner img").fadeOut(0).eq(0).fadeIn(0);
   
	 for(var i=0;i<btn.length;i++){
		btn[i].index=i;
		btn[i].onmouseover=function(){
			for(var j=0;j<inner.length;j++){
				 inner[j].style.opacity=0;
        btn[j].style.background="#ffb267";
			}
	    inner[this.index].style.opacity=1;
        btn[this.index].style.background="white";
        num=this.index;

		}
          
	}

   //btn放大
//    $(".btn").mouseover(function(){
//    $(this).css({"width":"12px","height":"12px"})
// });
// $(".btn").mouseout(function(){
//    $(this).css({"width":"","height":""})
// });
