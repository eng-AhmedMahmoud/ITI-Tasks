var gBtn = document.getElementById("gBtn");
var img =document.querySelector('input[name="radioSelect"]:checked').value;
var pMsg = document.getElementById("pMsg").value;

function createCard()
{
   setcookie("img",getImg(),"");
   console.log(img);
   setcookie("pMsg",getMsg(),"");
   console.log(pMsg);
   window.open("child.html");


}

function getImg(){
  
   return img;
}

function getMsg(){
  
   return pMsg; 
}
