var getDiv = document.getElementById("div1");
var icon1 = document.getElementById("yellow");
var icon2 = document.getElementById("purble");
var top1 = document.getElementById("top1");
var btngs = document.getElementById("btn1");
var i = 0 , timer = 0 , actmove , reverse , move = 10;
var div = window.getComputedStyle(getDiv);

var divWidth = div.getPropertyValue("width");
console.log(divWidth);

actWidth = parseInt(divWidth);
console.log(actWidth);

var divHeight = div.getPropertyValue("height");
console.log(divHeight);

var actHeight = parseInt(divHeight);
console.log(actHeight);

icon1.style.top = (actHeight/2)+"px";
icon1.style.left="15px";

icon2.style.top = (actHeight/2)+"px";
icon2.style.left= (actWidth-35)+"px"

top1.style.top = "20px";
top1.style.left = (actWidth/2)+"px";

btngs.addEventListener("click" , function(){
   if(btngs.innerText == "go"){
      go();
      btngs.innerText = "stop";
   }else{
      stop();
      btngs.innerText = "go";
   }
})
actmove = 10 ;
reverse = 450;
function go (){
   icon1.style.left = (actmove+"px");
   icon2.style.left = (reverse+"px");
   top1.style.top = (actmove+"px");
   actmove+=move;
   reverse+=-move;
   i+=10;
   if(i == 450){
      move*=-1;
      i=0;
   }
   timer = setTimeout(go , 30);
}

function stop(){
   clearTimeout(timer);
}

function reset(){
   stop();
   btngs.innerText = "go";
   icon1.style.top = (actHeight/2)+"px";
   icon1.style.left="15px";
   
   icon2.style.top = (actHeight/2)+"px";
   icon2.style.left= (actWidth-35)+"px"
   
   top1.style.top = "20px";
   top1.style.left = (actWidth/2)+"px";
   actmove = 10;
   reverse = 450;
   move = 10;
   i = 0
}