function getcookie(cName){
    let name = cName + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
    c = c.substring(1);
  }
    if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
    }
  }
    return false;
}

function setcookie(cName , cValue, exdays){
    //sets a cookie based on cookie name , value , expiredate
    if (!exdays) {
        exdays = (1999 - 01 - 01);
    } else {
        exdays.toUTCString();
    }
    cName = cName;
    document.cookie = cName + "=" + cValue + ";expires=" + exdays;

}

function allCookiesList() {
    let cookiesList = [];
    let decodedCookie = decodeURIComponent(document.cookie).trim();
    let cookiesArr = decodedCookie.split(';');
    for (let i in cookiesArr) {
        let c = cookiesArr[i].trim().split('=');
        let key = c[0];
        let value = c[1];
        cookiesList[key] = value;
    }

    return cookiesList;
}

function getCookie(cName) {
    let cookiesList = allCookiesList();
    return cookiesList[cName];
}
