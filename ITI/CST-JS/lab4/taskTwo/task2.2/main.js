var images;
function init() {
    images= document.getElementsByTagName("img");
}
var i = 0;
var interval;

function onOut(){
    interval = setInterval(function(){
        if(i >= images.length -1 ) i = -1;
        i++;
        // console.log(i);
        document.getElementsByTagName("img")[i].src = "./marbels/marble3.jpg";
        if (i == 0){
            document.getElementsByTagName("img")[images.length-1].src = "./marbels/marble1.jpg";
        }else{
            document.getElementsByTagName("img")[i-1].src = "./marbels/marble1.jpg";
        }

    },1000)
}

function onOver(){
   
    clearInterval(interval);
}
