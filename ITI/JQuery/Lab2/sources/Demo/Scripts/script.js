$(function(){
    // console.log($("p:contains('UI')")[0])
    // console.log($("p:contains('UI')")[1])

    // console.log($("p:contains('UI')").get(0))
    // console.log($("p:contains('UI')").get(1))

    // console.log( $("p:not('.d1')") )

    // #region Selectors
    // $("h1+h2").css({"color":"red", "textAlign":"center"})
    // $("h1").next("h2").css({"color":"red", "textAlign":"center"})

    // After
    // $("h1~h2").csks({"color":"red", "textAlign":"center"})
    // $("h1").nextAll("h2").css({"color":"red", "textAlign":"center"})
    
    // Before & After
    // $("h1").siblings("h2").css({"color":"red", "textAlign":"center"})

    // #endregion

    // console.log($)
    // console.log(jQuery)

    
    // console.log($())
    // console.log(jQuery())

    // console.log(typeof $)
    // console.log(typeof jQuery)

    // console.log(typeof $())
    // console.log(typeof jQuery())


    
    // console.log($.type( $) )
    // console.log($.type( jQuery) )

    // console.log($.type( $()) )
    // console.log($.type( jQuery()) )

    //#region Attributes
        // $("#btnShow").click(function(){
        //     // $("#img1").show();
        //     // $("#img1").attr("style","display:inline");
        //     $("#img1").removeAttr("hidden");
        // })
        // $("#btnHide").click(function(){
        //     // $("#img1").hide();
        //     $("#img1").attr("hidden","hidden");
        // })
    //#endregion

    //#region each
    //1- $("ul li").each(function(idx, element){})
    // $("ul li").each(function(idx, elem){
    //     console.log(idx)
    //     console.log(elem)
    // })
    //2- $.each( $("ul li"), function(idx, element){} )
    // $.each( $("ul li"),function(idx, elem){
    //     console.log(idx)
    //     console.log(elem)
    // })
    //#endregion

    //#region Append || AppendTo || prePend || PrePendTo
    // $("#btnAppend").click(function(){
    //     $("#d1").append( $("#img1") )
    //     // $("#d1").append( $("<img src='../Images/1.jpg'/>") )
    // })
    // $("#btnAppendTo").click(function(){
    //     $("#img1").appendTo( $("#d1") )
    // })
    // $("#btnPrePend").click(function(){
    //     $("#d1").prepend( $("#img1") )
    // })
    // $("#btnPrePendTo").click(function(){
    //     $("#img1").prependTo( $("#d1") )
    // })
    //#endregion


    //#region Events [ On | Off | One ]
    // document.getElementById("btnOn").addEventListener("click",function(){})
    // $("#btnOn").click(function(){

    // })
    // $("#btnOn").on("click",function(){
    //     $("#d1").append("<p>Hello</p>");
    //     ///
    //     ///
    //     // $("#btnOn").off("click")
    // })

    // $("#btnOff").click(function(){
    //     $("#btnOn").off("click");
    // })
    // $("#btnOne").one("click",function(){
    //     $("#d1").append("<p>Hello</p>");
    // })

    // $("#d1").on("myEvent",function(){
    //     alert("Hiii")
    // })

    // // setTimeout(function(){
    // //     $("#d1").trigger("myEvent");
    // // },3000)


    // $("#d1").on("click","button",function(){
    //     console.log("Clicked")
    // })


    //#endregion

    //remove | empty
    // $("div").empty();
    // $("div").remove();

    //#region Ajax
    // $("#btnGetData").click(function(){

    //     var xhr = new XMLHttpRequest();
    //     //1-open
    //         // xhr.open("GET","../Data/data.txt");
    //         // xhr.open("GET","../Data/data.json");
    //         xhr.open("GET","https://jsonplaceholder.typicode.com/users");
    //     //3-listen
    //         xhr.onreadystatechange = function(){
    //             // console.log(xhr.readyState);
    //             if(xhr.readyState == 4){
    //                 if(xhr.status>=200 && xhr.status<300){
    //                     // $("#p1").html(xhr.responseText);
    //                     var arr = JSON.parse(xhr.response)
    //                     console.log(arr);
    //                     for(var i=0; i<arr.length;i++){
    //                         $("#p1").append("<p>"+arr[i].name+"</p>");
    //                     }
    //                 }
    //             }
    //         }
        //2-send
            // xhr.send("");
            // $.ajax()
    // })

    //#endregion

    //#region Animation [Drag&Drop | Show&Hide] jqueryUI===>jquery
        // $("img").draggable();
        // $("#btnShow").click(function(){
        //     $("img").show("fold",3000)
        // })
        
        // $("#btnHide").click(function(){
        //     $("img").hide("explode",3000) 
        // })

        // $("#btnAnimate").click(function(){
        //     $("#i1").animate({left:"200px"},3000,"linear")
        //     $("#i2").animate({left:"200px"},3000,"swing")
        //     $("#i3").animate({left:"200px"},3000,"easeOutBounce")
        // })
    //#endregion
})





// var arr = [
//     {name:"Ahmed",age:10},
//     {name:"Ahmed",age:10},
//     {name:"Ahmed",age:10}
// ]