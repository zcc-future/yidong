/*
  getClass(classname) ��ȡָ��������Ԫ��
  classname ָ��Ҫ��ȡԪ�ص�classname
  range     ָ���ķ�Χ�������һ��DOMԪ��
  ˼·
  1���ж������
  document.getElementsByClassName
  2����ȡ���е�Ԫ��
  3��Ԫ�ص������Ƿ����ָ��������
  4�����������洢������
  5����������
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
      	//��ǰԪ�ص�className�Ƿ����ָ����className
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
  	/*$(selecter,range)��ȡԪ��
  	$(".one")��ȡָ��������Ԫ��
  	$("#one")��ȡָ��id��Ԫ��
  	$("div")��ȡָ����ǩ����Ԫ��
  	1����ʼ������range
  	2��selecterȥ��
  	3���жϵ�һ���ַ�
  	4����ȡԪ��
  	*/
  	function $(selecter,range){
      if(typeof selecter=="function"){
        window.onload=function(){
          selecter();
        }
      }else if(typeof selecter=="string"){
        range=range||document;
        //������
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
    ��ȡ������obj���ı�
    obj  ָ������
    value  ��ɫ���õ��ı�
    1���жϻ�ȡ������
    ��������
      value
    2����ȡ
       �ж�������Ƿ�֧������
       return obj.innerText=value
       return obj.textContent=value
    3������
       �ж�������Ƿ�֧������
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
    getStyle(obj,attr)  ��ȡָ��Ԫ�ص���ʽ
    obj   ָ������
    attr  ��ʽ����
    1���ж�������Ƿ�֧������
    2����������ֵ
    */
    function getStyle(obj,attr){
      if(window.getComputedStyle){
        return window.getComputedStyle(obj,null)[attr]
      }else{
        return obj.currentStyle[attr];
      }
    }
   

    // getChilds(obj)  ��ȡָ���������Ԫ�ؼ���
    // obj  ָ���Ķ���
    // type  ָ����ȡ��Ԫ�ؽڵ������
    //       true Ԫ�ؽڵ�
    //       false Ԫ�ؽڵ����������ı�
    // 1����ȡ���е���Ԫ��
    // 2���ڵ����� 


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
    
	 //��ȡ��һ��Ԫ��
    function firstChild(obj){
    	return getChilds(obj)[0];
    }
    

    //��ȡ���һ��Ԫ��
    function lastChild(obj){
    	var childs=getChilds(obj)
    	return childs[childs.length-1]
    }

 /*getNext(obj)����ȡobj��Ԫ�ؽڵ�
 1.�Ȼ�ȡ�ֵܽڵ�  next
 ��û�С�false
 2.��
 ���ж��ֵܽڵ㡡nodeType!==1
    next=next.nextSibling;
    next==null   false
    �ظ� ����2
   nodeType==1
    ����next
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
    getStyle(obj,attr)  ��ȡָ��Ԫ�ص���ʽ
    obj   ָ������
    attr  ��ʽ����
    1���ж�������Ƿ�֧������
    2����������ֵ
    */
    function getStyle(obj,attr){
      if(window.getComputedStyle){
        return window.getComputedStyle(obj,null)[attr]
      }else{
        return obj.currentStyle[attr];
      }
    }
