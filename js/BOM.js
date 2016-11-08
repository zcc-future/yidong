/*
  getClass(classname) 获取指定类名的元素
  classname 指定要获取元素的classname
  range     指定的范围，具体的一个DOM元素
  思路
  1、判断浏览器
  document.getElementsByClassName
  2、获取所有的元素
  3、元素的类名是否等于指定的类名
  4、符合条件存储到数组
  5、返回数组
  */

  function getclass(classname,range){
  	// range=range?range:document;
  	// range=range===undefind?document:range;
  	range=range||document;
  	if(document.getElementsByClassName){
    return range.getElementsByClassName(classname);
  	}else{
  		var arr=[];
      var all=range.getElementsByTagName("*")
      for(var i=0;i<all.length;i++){
      	//当前元素的className是否包含指定的className
      	if(checkClass(all[i].className,classname)){
           arr.push(all[i]);            
      	}
      }
      return arr;
  	}

  }
  function checkClass(bb,classname){
  		 var arr=bb.split(" ")
  		 for(i=0;i<arr.length;i++){
  		 	if (arr[i]===classname) {
  		 		return true;
  		 	}
  		 }
  		 return false;
  	}
  	/*$(selecter,range)获取元素
  	$(".one")获取指定类名的元素
  	$("#one")获取指定id的元素
  	$("div")获取指定标签名的元素
  	1、初始化参数range
  	2、selecter去空
  	3、判断第一个字符
  	4、获取元素
  	*/
  	function $(selecter,range){
      if(typeof selecter=="function"){
        window.onload=function(){
          selecter();
        }
      }else if(typeof selecter=="string"){
        range=range||document;
        //不兼容
         //  selecter=selecter.trim();
      if(selecter.charAt(0)=="."){
        return getclass(selecter.substring(1),range)
      }else if(selecter.charAt(0)=="#"){
        return range.getElementById(selecter.substring(1))
      }else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(selecter)){
        return range.getElementsByTagName(selecter)
      }else if(/^<[a-zA-Z][a-zA-Z1-6]{0,8}>$/.test(selecter)){
        return document.createElement(selecter,slice(1,-1))
      }
      }
  		
  		
  	}
    /*
    getContent(obj,value)
    获取或设置obj的文本
    obj  指定对象
    value  颜色设置的文本
    1、判断获取、设置
    参数个数
      value
    2、获取
       判断浏览器是否支持属性
       return obj.innerText=value
       return obj.textContent=value
    3、设置
       判断浏览器是否支持属性
       obj.innerText=value
       obj.textContrnt=value

    */
    function getContent(obj,value){
      if(value){
        if(obj.innerText){
          obj.innerText=value;
        }else{
          obj.innerContent=value;
        }
      }else{
        if(obj.innerText){
          return obj.innerText;
        }else{
          return obj.textContent;
        }
      }
    }
    /*
    getStyle(obj,attr)  获取指定元素的样式
    obj   指定对象
    attr  样式属性
    1、判断浏览器是否支持属性
    2、返回属性值
    */
    function getStyle(obj,attr){
      if(window.getComputedStyle){
        return window.getComputedStyle(obj,null)[attr]
      }else{
        return obj.currentStyle[attr];
      }
    }
   

    // getChilds(obj)  获取指定对象的子元素集合
    // obj  指定的对象
    // type  指定获取子元素节点的类型
    //       true 元素节点
    //       false 元素节点和有意义的文本
    // 1、获取所有的子元素
    // 2、节点类型 


     function getChilds(obj,type){
      type=type==undefined?true:type;
      var childs=obj.childNodes;
      var arr=[];
      var type=true;
        if(type){
          for(i=0;i<childs.length;i++){
      if(childs[i].nodeType==1){
              arr.push(childs[i]);
       }
      }       
     }else{
      for(var i=0;i<childs.length;i++){
         if(childs[i].nodeType==1||(childs[i].nodeType==3&&childs[i].nodeValue.replace(/^\s*|\s*$/g,""))){
          arr.push(childs[i]);
         }
     }
 }
     return arr;
        }
    
	 //获取第一个元素
    function firstChild(obj){
    	return getChilds(obj)[0];
    }
    

    //获取最后一个元素
    function lastChild(obj){
    	var childs=getChilds(obj)
    	return childs[childs.length-1]
    }

 /*getNext(obj)　获取obj的元素节点
 1.先获取兄弟节点  next
 　没有　false
 2.有
 　判断兄弟节点　nodeType!==1
    next=next.nextSibling;
    next==null   false
    重复 步骤2
   nodeType==1
    返回next
*/
function getNext(obj,type){
 type=type==undefined?true:type;
 if(type){
  var next=obj.nextSibling;
  if(next==null){
    return false;
  }
  while(next.nodeType==3||next.nodeType==8){
    next=next.nextSibling;
    if(next==null){
      return false;
    }
  }
  return next; 
  }else if(type==false){
    var next=obj.nextSibling;
  if(next==null){
    return false;
  }
  while(!(next.nodeType==1||(next.nodeType==3&& next.nodeValue.replace(/^\s*|\s*$/g,"")))){
    next=next.nextSibling;
    if(next==null){
      return false;
    }
  }
  return next;
  }
}

 /*
    getStyle(obj,attr)  获取指定元素的样式
    obj   指定对象
    attr  样式属性
    1、判断浏览器是否支持属性
    2、返回属性值
    */
    function getStyle(obj,attr){
      if(window.getComputedStyle){
        return window.getComputedStyle(obj,null)[attr]
      }else{
        return obj.currentStyle[attr];
      }
    }
