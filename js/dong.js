window.onload=function(){
   var sy1=$(".sy1");
   var sy2=$(".sy2");	   
   for(var i=0;i<sy1.length;i++){
		  sy1[i].index=i;
			  sy1[i].onmouseover=function(){
			  sy2[this.index].style.display="block";
    }
   }
   for(var i=0;i<sy1.length;i++){
		  sy1[i].index=i;
			  sy1[i].onmouseout=function(){
			  sy2[this.index].style.display="none";
   }

   }
   /* 导航 */
     var middle=$(".banner")
   var imgs=$(".bannerimg");
    var yuan=$(".yuan1"); 
	var jtL=$(".jiantou3");
	var jtr=$(".jiantou4");

   var mw=parseInt(getStyle(middle[0],"width"));
for(var i=0;i<imgs.length;i++){
	if(i==0){
		continue;
	}
	imgs[i].style.left=mw+"px";
}
 yuan[0].classList.add("hot");
/*
   now  记录当前窗口中图片
   next 记录下一张图片
   1、下一张就位
   2、动画
   imgs[now]  left->-mv
   imgs[next]  left->0
   3、now 更新
*/
var now=0;
var next=0;
var t=setInterval(move,2000);
 /*  鼠标移入自动轮播停，移出自动进行 */
   middle[0].onmouseover=function(){
   clearInterval(t);
    }
   middle[0].onmouseout=function(){
     t=setInterval(move,2000);
    }
   

for(var i=0;i<yuan.length;i++){
	yuan[i].index=i;
	yuan[i].onclick=function(){
		/* next this.index*/
		if(now>this.index){
		imgs[this.index].style.left=-mw+"px";
		animate(imgs[now],{left:mw});
		animate(imgs[this.index],{left:0});
		}else if(now<this.index){
        imgs[this.index].style.left=mw+"px";
		animate(imgs[now],{left:-mw});
		animate(imgs[this.index],{left:0});
		}else{
		return;
		}
    yuan[now].classList.remove("hot");
    yuan[this.index].classList.add("hot");
	now=this.index;
	next=this.index;
	}
}

var flag=true;
jtr[0].onclick=function(){
   if(flag){
    move();
	flag=false;
   }
}
jtL[0].onclick=function(){
   if(flag){
    movel();
	flag=false;
   }
}
function move(){
	next++;
	if(next==imgs.length){
		next=0;
	}
	imgs[next].style.left=mw+"px";
	yuan[now].classList.remove("hot");
	yuan[next].classList.add("hot");
	animate(imgs[now],{left:-mw},function(){
	  flag=true;
	});
	animate(imgs[next],{left:0},function(){
	  flag=true;
	});
	now=next;
}
function movel(){
	next--;
	if(next<0){
		next=imgs.length-1;
	}
	imgs[next].style.left=-mw+"px";
	yuan[now].classList.remove("hot");
	yuan[next].classList.add("hot");
	animate(imgs[now],{left:mw},function(){
	  flag=true;
	});
	animate(imgs[next],{left:0},function(){
	  flag=true;
	});
	now=next;
}
/*  轮播图 */

  var ss=$(".hong")[0];
   var dd=$(".dl")[0];  
	 ss.onmouseover=function(){
	dd.style.display="block";
	ss.style.background="white";
   
   }
	 ss.onmouseout=function(){
	dd.style.display="none";
	ss.style.background="#f6f6f6";
   }

   /* 导航 */


   var imgBox=$(".zhongone1")[0];
   var  as=$(".zhongone2");
   var jiantl=$(".jiantou1")[0];
   var jiantr=$(".jiantou2")[0];
   var aw=parseInt(getStyle(as[0],"width"))+parseInt(getStyle(as[0],"margin-right"));
 var tt=setInterval(movez,2000)
     imgBox.style.width=aw*as.length +"px";
    imgBox.onmouseover=function(){
   clearInterval(tt);
    }
   imgBox.onmouseout=function(){
     tt=setInterval(movez,2000)
    }
   
    
     function movez(){
      animate(imgBox,{left:-aw},function(){
        var first=firstChild(imgBox);
        imgBox.appendChild(first);
        imgBox.style.left=0
      })
	 }
		 function zmoveL(){
      animate(imgBox,{left:aw},function(){
        var first=firstChild(imgBox)
        var last=lastChild(imgBox)
        imgBox.appendChild(last,first);
        imgBox.style.left=-aw+"px";
        animate(imgBox,{left:0})
      });
	  }
  jiantr.onclick=function(){   
   movez();
     }
   jiantl.onclick=function(){  
    zmoveL();
     }
 /* 节点轮播*/



   var sj=$(".sjyy")[0];
   var sjt=$(".sjyyt")[0];
   sj.onmouseover=function(){
   sjt.style.display="block";
   sj.style.background="white";
  }
    sj.onmouseout=function(){
	sjt.style.display="none";
	sj.style.background="#f6f6f6";
   }

   /* 手机营业厅*/
 
function gdR (gd) {
  gd.onmouseover=function(){
     animate(gd,{right:36},300)
 }
  gd.onmouseout=function(){
     animate(gd,{right:-30},300)
 }
}
var gd1=$(".dw1")[0]
gdR(gd1)
var gd2=$(".dw2")[0]
gdR(gd2)
var gd3=$(".dw3")[0]
gdR(gd3)
   

  /* 固定*/
 
  function lunbo(imgbox,middle,img,jtL5,jtR5){
  var img=img
  var imgbox=imgbox
  var jtL5=jtL5
  var jtR5=jtR5;
  var middle=middle;
  var flag=true;
  var width=parseInt(getStyle(img[0],"width"))
  var t=setInterval(move,1500);
  function move(){
	  imgbox.style.left=-width;
      var first=firstChild(imgbox);
      // var two=getNext(first)
      imgbox.appendChild(first);
      // imgbox.appendChild(two);
      imgbox.style.left=0
      flag=true;
   
  }
  function moveL(){
      imgbox.style.left=-width+"px";
      var first=firstChild(imgbox);
      var last=lastChild(imgbox);
      imgbox.insertBefore(last,first);     
      imgbox.style.left=600;
      flag=true;
  }
  jtR5.onclick=function(){
    if(flag){
      move();
      flag=false;
    }
  }
  jtL5.onclick=function(){
    if(flag){
      moveL();
      flag=false;
    }
  }
  middle.onmouseover=function(){
    clearInterval(t)
  }
  middle.onmouseout=function(){
   t=setInterval(move,1500);
  }
 
  }
	var imgbox5=$(".gongg1")[0] 
    var img5=$(".gongg2",imgbox5)  
    var middle5=$(".gongg")[0]
    var jtL5=$(".gonggao7")[0]
    var jtR5=$(".gonggao6")[0]
    lunbo(imgbox5,middle5,img5,jtL5,jtR5) 

 /*下面节点轮播*/

}