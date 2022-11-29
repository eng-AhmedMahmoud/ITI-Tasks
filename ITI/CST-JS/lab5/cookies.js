function getcookie(cName){
    //retrieve a cookie value based on a cookie name
    var cnam = cName + "=";
    var  decodedCookie = decodeURIComponent(document.cookie);
    var ca =  decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(cnam) == 0) {
          return c.substring(cnam.length, c.length);
          console.log(c.substring(cnam.length, c.length));
        }
    }
      return "";
    
}

function setcookie(cName , cValue, exDate){
    //sets a cookie based on cookie name , value , expiredate
        var d = new Date();
        d.setTime(d.getTime() + (exDate*24*60*60*1000));
        let exp = "expires="+ d.toUTCString();
        document.cookie = cName + "=" + cValue + ";" + exp;

}

function deletecookie(cName){
    var exp = new Date();
    if(!getcookie(cName)){
        return false;
    }
    else{
        document.cookie = cName +"="+ getcookie(cName) + ";expires=" + exp.toUTCString();
    }
    
}

function allcookieList(){
    var allcookie = document.cookie.split(";");
    var cArr = [];
    for (var i = 0 ; i < allcookie.length ; i++){
        cArr[allcookie[i].split("=")[0].trim] = allcookie[i].split("=")[1];
    }
    return cArr;
}

function checkcookie(){
    //check whether a cookie exists or not
    var cookie = document.cookie;
    return !!cookie;
}
