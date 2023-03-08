//IIFE [Imm. Invoke Fun Expr.]

// (function (x, fun){
//     fun();
//     window.fun = fun;
//     return x+10;

// })(5, function(){console.log("Iam Fun")});

// abc(6);


(function(name,environment,fun){
    if(typeof module != 'undefined' && module){//server
        module.exports = { myModule: fun }
    }else{//client
        // window.myModule = fun;
        environment[name] = fun;
    }
})("myModule",this,function(){ console.log("Hii Module") })

// console.log(window);

console.log("hi")

