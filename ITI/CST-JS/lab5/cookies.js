function getcookie(cName) {
    if (arguments.length < 1) {
        throw new Error("getcookie() should take at least one parameter");
    } else if (arguments.length > 1) {
        throw new Error("getcookie() takes only one parameter");
    }
    //retrieve a cookie value based on a cookie name
    var cnam = cName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
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

function setcookie(cName, cValue, exDate) {
    if (arguments.length === 2 || arguments.length === 3) {
        //sets a cookie based on cookie name , value , expiredate
        var d = new Date();
        d.setTime(d.getTime() + (exDate * 24 * 60 * 60 * 1000));
        let exp = "expires=" + d.toUTCString();
        document.cookie = cName + "=" + cValue + ";" + exp;
    } else
        throw new Error("invalid number of parameters");

}

function deletecookie(cName) {
    if (arguments.length < 1) {
        throw new Error("deletecookie() should take at least one parameter");
    } else if (arguments.length > 1) {
        throw new Error("deletecookie() takes only one parameter");
    } else {
        var exp = new Date();
        if (!getcookie(cName)) {
            return false;
        }
        else {
            document.cookie = cName + "=" + getcookie(cName) + ";expires=" + exp.toUTCString();
        }
    }
}

function allcookieList() {
    if (arguments.length !== 0) {
        throw new Error("allcookieList() takes no parameters");
    }
    var allcookie = document.cookie.split(";");
    var cArr = [];
    for (var i = 0; i < allcookie.length; i++) {
        cArr[allcookie[i].split("=")[0].trim] = allcookie[i].split("=")[1];
    }
    return cArr;
}

function checkcookie() {
    if (arguments.length !== 0) {
        throw new Error("checkcookie() takes no parameters");
    }
    //check whether a cookie exists or not
    var cookie = document.cookie;
    return !!cookie;
}
