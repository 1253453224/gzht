

//2016.4.28 
//1.解决类名的兼容函数
//classname: 所要找的类名
//father: 通过父元素来找这个类名
function getClass(classname,father){//兼容函数
    father=father||document;
    //1. 判断浏览器
    if(father.getElementsByClassName){//条件为真时，代表就是FF和chrome
        return father.getElementsByClassName(classname);
    }else{//条件为假时，代表是IE
      //ID  Tag  name
      var all=father.getElementsByTagName("*");//所有的
      /*[<html></html>,<head></head>,<body></body>,<div class="box"></div>,<div class="one">111</div>,<div class="one">222</div>,<div class="one">333</div>]*/
      var newarr=[];
      //遍历数组
      for (var i = 0; i < all.length; i++) {
      	//"one fi".split()["one","fi"]  "one"
      	  //if(all[i].className==classname){//如果条件相等，表示找见了
      	  if(checkRep(all[i].className,classname)){
            newarr.push(all[i]);
      	  }
      };
      return newarr;
    }
  }
  function checkRep(str,classname){//"two one three" "one"  ["two","fi","three"]  判断str与classname是否一样
    var arr=str.split(" ");//以空格做分隔符转换数组
    for(var i in arr){//遍历数组
    	if(arr[i]==classname){//判断元素与classname是否相同，相同时返回true
    		return true;
    	}
    }
    return false;// 所有比较以后，没有找到返回false
  }

// 纯文本的兼容函数


function getText(obj,val){
  if (val!=undefined) {

   if (obj.textContent) {

   obj.textContent=val;
   }else {
    obj.innerText=val;
   }
  } 
else{if(obj.textContent)
      {return obj.textContent;}
      else{
        return obj.innerText;
      }
}
}
  
// 获取样式的兼容函数
// obj:对象
// attr:属性
function getStyle(obj,attr){
       if (obj.currentStyle) {
      // ie 
      // 字符串转换成数值类型的方法
           return  parseInt(obj.currentStyle[attr]);
       }
       else{ //FF
        return parseInt(getCopmputedStyle(obj.null)[attr]);
      }
}

//**********************************
//获取元素的兼容函数
//selector表示选择器，与CSS的选择器一样
//father父容器
function $(selector,father){
  //给父容器设置默认值
  father=father||document;

  //对selector做判断
  if (typeof selector=="string") {//是字符串
    selector=selector.replace(/^\s*|\s*$/g,"");
    //去除字符串左右的空格
   if (selector.charAt(0)==".") {
      //条件为真时，字符串为类名
      return getClass(selector.slice(1),father);
     }else if(selector.charAt(0)=="#"){
      return father.getElementById(selector.slice(1));
     }else if(/^[a-zA-Z1-6]{1,6}$/.test(selector)){
      //标签名
     return father.getElementsByTagName(selector)}
    }else if(typeof selector=="function"){
  //是一个函数时，执行window.onload事件
      window.onload=function(){
      selector();//让函数运行
   }
}
}
//盒子悬乎不动
// document.onscroll=function(){
// var tops=document.body.scrollTop?document.body.scrollTop:document.documentElement.scrollTop;

//楼层跳转，解决兼容问题
// document.body.scrollTop=1;  //解决兼容问题  火狐 谷歌
// var obj=document.body.scrollTop?document.body:document.documentElement;  页面高度


//2016年5月6号
//获取子元素的兼容函数
function getChild(father,type){
  type=type||"b"
  var arr=[];
  var all=father.childNodes;
  for (var i = 0; i < all.length; i++){
    if (type=="a")
    {
    if(all[i].nodeType==1)
    {
      arr.push(all[i]);
    }
    }else if(type=="b")
    {
      if (all[i].nodeType==1 || (all[i].nodeValue.replace(/^\s*|\s*$/g,"")!=""&&all[i].nodeType==3)){
        arr.push(all[i]);
      }
    }
  }
  return arr;
}
//获取节点中的第一个
function getFirst(father){
  return getChild(father)[0];
}
//获取子节点中的最后一个
function getLast(father){
  return getChild(father)[getChild(father).length-1]
}


//8通过指定的下标的

function getNum(father,type,num){
   return getChild(father,type)[num];
}
// 2016年五月7号
// 获取上一个兄弟节点
function getUp(obj){
  var  up=obj.previousSibling;
  if (up==null) {
    return false;
  }
while(up.nodeType==8 || (up.nodeValue.replace(/^\s*|\s*$/g,"")==""&&up.nodeType==3)){
    up=up.previousSibling;
    if (up==null) {
    return false;
  }
}
    return up;
}




//10/获得下一个兄弟节点

function getNext(borther){ 
  var  next=borther.nextSibling;
  if (next==null) {
      return false;
  }
   while(next.nodeType==8 || (next.nodeValue.replace(/^\s*|\s*$/g,"")==""&&next.nodeType==3)){
 
        next=next.nextSibling
  if (next==null) {
      return false;
  }
    
  }
  return next;   
}
