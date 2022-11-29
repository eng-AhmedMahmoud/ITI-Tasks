var win ,i = 0, interval;
    function winOpen(){
    win = open("child.html" ,"", "width = 250 , height = 250");
    win.focus();
    }


function start(){
    winOpen();
    interval = setInterval(function(){
        win.scrollBy({
            left: 0,
            top: i,
            behavior: 'smooth'
        });
        i++;
        if(i >= win.innerHeight){
            clearInterval(interval);
        }
      
    },50)
    

}
