// get user's name query string
var queryString = window.location.search;
var userData = queryString.substring(1).split("&");
var Data = userData.join(" ").split("=").join(" ").split(' ');

// loop on user's data
for (var i = 0; i < Data.length ; i++) {
    // print user's data
    document.getElementById("welcome").innerHTML += "<h1>your " + Data[i] +" is " + Data[i+1] + '  </h1>';
    i++;
};