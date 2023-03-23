//creat event obj
var myEvent= new Event("lookup");
//var click= new Event("click");

var obj= document.getElementById("div1")

//2)register to event---> object listen to lookup event
obj.addEventListener("lookup",function(){
    console.log("custom event fired");
    
});
//obj.addEventListener("click",function(){});


//3)fire the event-->handler should exec
setTimeout(function(){
    console.log("raneem");
    console.log("event will fire");
    setTimeout(function(){console.log("settimeout");},0)
   
    obj.dispatchEvent(myEvent)
},2000)

//mouse click

/*
setTimeout()
setTimeout()
setTimeout()
setTimeout()


*/