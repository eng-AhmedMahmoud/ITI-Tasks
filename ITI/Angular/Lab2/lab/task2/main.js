var img = document.getElementById("img");
var stop = document.getElementById("sb");
var images = ["./SlideShow/1.jpg", "SlideShow/2.jpg", "./SlideShow/3.jpg", "./SlideShow/4.jpg", "./SlideShow/5.jpg", "./SlideShow/6.jpg"];
var i = 0;
var interval;


function prevImg(){
    if (i<= 0) i = images.length
        i--;
        document.getElementById("img").src = images[i];
    

}

function nextImg(){
    if (i>= images.length -1 ) i = -1;
        i++;
        document.getElementById("img").src = images[i];
    
}

function slideImg(){

    interval = setInterval(function(){
        if (i>= images.length -1 ) i = -1;
        i++;
        document.getElementById("img").src = images[i];
    },1000)
}

function stopImg (){
    clearInterval(interval);
}

