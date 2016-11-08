$(document).ready(function(){
	$(".sy1").mouseover(function(){
		var index=$(this).index()
		$(".sy2").eq(index).css("display","block")
	})
	$(".sy1").mouseout(function(){
		var index=$(this).index()
		$(".sy2").eq(index).css("display","none")
     })
//导航
var now=0;
var next=0;
var flag=true;
var width=$(".banner").width()
var t=setInterval(move,2000)
$(".bannerimg:gt(0)").css({left:width})
 $(".yuan1").eq(0).css("background","red")
function move(){
	if(flag==false){
         return
        }
        flag=false;
	 next++;
      if(next==$(".bannerimg").length){
        next=0
      }
      $(".bannerimg").eq(next).css("left",width)
      .end().eq(now).animate({left:-width})
      .end().eq(next).animate({left:10},function(){
	  flag=true;
	});
      $(".yuan1").css("background","#666")
      .eq(next).css("background","red")
      now=next;

}
function movel(){
	if(flag==false){
         return
        }
        flag=false;
	 next--;
      if(next<0){
        next=$(".bannerimg").length-1
      }
      $(".bannerimg").eq(next).css("left",-width)
      .end().eq(now).animate({left:width})
      .end().eq(next).animate({left:10},function(){
      	flag=true
      })
      $(".yuan1").css("background","#666")
      .eq(next).css("background","red")
      now=next;

}
$(".yuan1").click(function(){
	if(flag==false){
          return
      }
      flag=false;
	var index=$(this).index()
	if(index>now){
		$(".bannerimg").eq(index).css("left",width)
		.end().eq(now).animate({left:-width})
	}else if(index<now){
		$(".bannerimg").eq(index).css("left",-width)
		.end().eq(now).animate({left:width})
	}
	$(".bannerimg").eq(index).animate({left:0},function(){
		flag=true
	})
	$(".yuan1").css("background","#666");
	$(this).css("background","red")
	now=index;
	next=index;

})
$(".jiantou4").click(function(){
	if(flag){
	move()
	flag=false;
   }
})
$(".jiantou3").click(function(){
	if(flag){
	movel()
	flag=false;
   }
})
$(".banner").mouseover(function(){
	clearInterval(t);
})
$(".banner").mouseout(function(){
	 t=setInterval(move,2000);
})
//轮播
 $(".hong").mouseover(function(){
 	$(".dl").css("display","block")
 	$(this).css("background","white")
 })
 $(".hong").mouseout(function(){
 	$(".dl").css("display","none")
 	$(this).css("background","#f6f6f6")
 })
/* 导航 */
$(".sjyy").mouseover(function(){
 	$(".sjyyt").css("display","block")
 	$(this).css("background","white")
 })
 $(".sjyy").mouseout(function(){
 	$(".sjyyt").css("display","none")
 	$(this).css("background","#f6f6f6")
 })

  /* 手机营业厅*/

var aw=$(".zhongone2").width()
var tt=setInterval(movez,2000)
function movez(){
	$(".zhongone1").animate({left:-aw})
    // $(".zhongone2.eq(0)").append($(".zhongone1"))
    $(".zhongone1").append($(".zhongone1 img:first-child".first()))
	$(".zhongone1").css("left",0)
}


   /* 节点轮播*/
function gdR (gd) {
  gd.mouseover(function(){
     $(this).animate({right:36},300)
 })
  gd.mouseout(function(){
     $(this).animate({right:-30},300)
 })
}
gdR($(".dw1"))
gdR($(".dw2"))
gdR($(".dw3"))
// 固定
var flag=true;
var t1=setInterval(moveYY,1500);
width1=$(".gongg2").width()
function moveYY(){
	$(".gongg1").css("left",-width1)
	$(".gongg2.eq(0)").append($(".gongg1"))
	$(".gongg1").css("left",0)
	flag=true
}
function moveLL(){
	$(".gongg1").css("left",-width1)
	$(".gongg2.eq(0)").append($(".gongg1"))
	$(".gongg1").css("left",0)
	flag=true
}
$(".gonggao7").click(function(){
	if(flag){
		moveLL
		flag=false;
	}
})
$(".gonggao6").click(function(){
	if(flag){
		moveYY
		flag=false;
	}
})
 /*下面节点轮播*/
})