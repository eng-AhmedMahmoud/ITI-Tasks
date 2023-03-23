// onload = function(){   
    // document.getElementById("myH").addEventListener("click",function(){
    //     alert("Hiiiiiii")
    // })

    // $("#myH").css("color","red")
    // window.JQuery = window.$ = JQuery
    // console.log($);
    // console.log(jQuery);

    // console.log($());
    // console.log(jQuery());

    // console.log($("#myH"));//jquery Object
    // console.log($(".c"));//jquery Object
    // document.getElementById("myH").style.color = "red";
    // $("#myH").style.color = "red";
    
    // console.log($("#myH")[0]);//Native HTML Element
    // $("#myH")[0].style.color = "red";
    // $("#ID")
    // $(".Class")
    // $("tagName")
// }

//onload at JQuery
// $(function(){/** Code */})


$(function(){
    // $("#myH")
    //         .css("color","red")
    //         .css("backgroundColor","yellow")
    //         .css("color","green")

    // $("#myH")[0].style.color = "red"
    // console.log($("#myH").get(0));//Native Element HTML
    // console.log($("#myH").eq(0));//JQuery Obj

    // // document.getElementsByClassName("c1")
    // console.log( $(".c1").get(1) );//
    // console.log( $(".c1").eq(2) );//
    // document.getElementsByClassName("c1")[0].style.color = "red"
    // document.getElementsByClassName("c1")[1].style.color = "red"
    // document.getElementsByClassName("c1")[2].style.color = "red"
    // $(".c1").css("color","red").css("background-color","blue")
    // $(".c1").css({"color":"red", "backgroundColor":"blue"})
    // console.log(document.getElementById("myP1").innerHTML);
    // console.log(document.getElementById("myP1").innerText);

    // document.getElementById("myP1").innerHTML = "<u>New HTML</u>"
    // document.getElementById("myP1").innerText = "<u>New HTML</u>"

    // console.log( $(".c1").eq(1).html() )//Getting
    // console.log( $(".c1").eq(2).text() )//Getting
    // // console.log(  )//Getting
    // $(".c1")[1].innerHTML = "Zeyad"
    // // $(".c1")[1].html("<u>Hello</u>")
    // $(".c1").eq(2).text("<u>Hello</u>")
    // $(".c")
    //         .click(function(){
    //             // alert("Hiiiii")
    //             this.style.color = "red"
    //             console.log(this);//Native HTML Element
    //             console.log( $(this) )
    //         })
    //         .css("color","blue");


    //#region Filter
        // console.log($("ul li"))
        // console.log($("ul li:eq(0)"))
        // console.log($("ul li:eq(0), ul li:eq(1)"))
        // console.log($("ul li").filter(":eq(0),:eq(1)"))
        
        // console.log($("ul li").filter(function(){
        //     console.log(this);
        //     // return this.id == "i1"||this.id == "i3";
        //     return $(this).attr("id") == "i1"||$(this).attr("id") == "i3";
        // }))
        // function fff(){
        //     var len = document.getElementsByClassName("cc1").length;
        //     var eles = document.getElementsByClassName("cc1");
        //     var arr = []
        //     for(var i=0; i<len; i++){
        //         if(eles[i].id=="i1"||eles[i].id=="i3")
        //             arr.push(eles[i])
        //     }
        //     return arr;
        // }
        // console.log(fff())
    //#endregion

    // //#region Attr
    // $("#im1").mouseover(function(){
    //     // this.src = "../Images/1.jpg"
    //     // console.log( $(this).attr("src") )
    //     $(this).attr("src","../Images/1.jpg")
    // })
    //#endregion

    // $("ul li, img").css({"border":"1px solid black"})
    // console.log($("ul li").attr("style"))


    //#region addClass|removeClass| Toggle
    // $("#btnadd").click(function(){
    //     $("#d1").addClass("myClass");
    // })
    // $("#btnremove").click(function(){
    //     $("#d1").removeClass("myClass");
    // })
    // $("#btntoggle").click(function(){
    //     $("#d1").toggleClass("myClass");
    // })

    //#endregion

    //#region Animation
    $("#btnShow").click(function(){
        $("#img1").show(1000);//normal, fast, slow, durations (ms)
    })
    $("#btnHide").click(function(){
        $("#img1").hide(3000);//normal, fast, slow, durations (ms)
    })
    $("#btnFadeIn").click(function(){
        $("#img1").fadeIn(3000);
    })
    $("#btnFadeOut").click(function(){
        $("#img1").fadeOut(3000);
    })
    $("#btnFadeTo").click(function(){
        $("#img1").fadeTo(3000,0.3);
    })
    $("#btnSlideToggle").click(function(){
        $("#img1").slideToggle(3000);
    })    
    $("#btnChange").click(function(){
        $("#img1").attr("src","../Images/1.jpg");
    })
    //#endregion

})
