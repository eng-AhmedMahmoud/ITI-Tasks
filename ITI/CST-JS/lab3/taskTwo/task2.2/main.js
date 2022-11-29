var msg = prompt("Your Message");
var win , i = 0 , interval;

function winOpen(){
    win = open("child.html" ,"", "width = 200 , height = 200");
}

function show(){
    winOpen();
    interval = setInterval(function(){
        win.document.write(msg[i]);
        if (i == msg.length-1){
            clearInterval(interval);
            
        }
        i++;
    }
    ,100);
}

