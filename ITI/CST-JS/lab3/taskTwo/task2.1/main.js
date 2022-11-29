var win;

function winOpen(){
    win = open("child.html" ,"", "width = 200 , height = 200");
}

var x = 10 , y = 10  , interval;

function start(){
    winOpen();
    interval = setInterval(function(){
        win.focus();
        win.moveBy(x,y);
        if(win.screenY > 720 || win.screenY<1){
            y =y*-1;
        }
        if(win.screenX > 620 || win.screenX<1){
            x=x*-1;
        }
        win.resizeTo(200,200);
    },100)


}

function stop(){
    clearInterval(interval);
    win.focus();
}

