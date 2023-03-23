console.log("1");
/*
function fun() {

    console.log("fun exec");

}
*/
console.log(2);

setTimeout(function () {
    console.log(3);
    //fun()
}, 2000)

//fun();
console.log(4);

setTimeout(function () {
    console.log(5);
    //fun()

}, 0)

console.log(6);

function wait5sec() {
        console.log("start of fun exec " + new Date().getSeconds() + ":" + new Date().getMilliseconds());
        
        var ms = (new Date()).getTime() + 5000;
        
        while (ms > (new Date().getTime())) {}
        
        console.log("end of function exec " + new Date().getSeconds() + ":" + new Date().getMilliseconds());
    
    }
fun()
    
function fun(){
    console.log("RAneem");

    var timer=setTimeout(fun,5000);
    wait5sec()
    clearTimeout(timer);
    console.log("end of fun");
    
}












