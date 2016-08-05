function getClass(classname){//兼容函数
    //判断浏览器
    if(document.getElementsByClassName){
      //火狐和谷歌
      return document.getElementsByClassName(classname);
    }else{
      //IE浏览器
       //tag 
      var all=document.getElementsByTagName("*");
      //所有的标签
      //[html,head,p,body,div]
      //元素.className//获取当前元素的类名
      var arr=[];
           for(var i=0;i<all.length;i++){
            if(all[i].className==classname){
              arr.push(all[i])
            }
           }
           return arr;
    }
     

  }
  //var one=getClass("one");
  //alert(one.length)



