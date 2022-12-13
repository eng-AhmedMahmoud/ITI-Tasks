// get user's name query string
var queryString = window.location.search;
var userData = queryString.substring(1).split("&");
var Data = userData.join(" ").split("=").join(" ").split(' ');
console.log(Data)
// loop on user's data
for (var i = 0; i < Data.length ; i++) {
    // print user's data
    if(Data[i] == "email")
    {
        Data[i+1] = Data[i+1].split("%40").join("@");
    }
    else if(Data[i] == "job+title")
    {
        Data[i] = "job title";
    }
    document.getElementById("welcome").innerHTML += "<h1>your " + Data[i] +" is " + Data[i+1] + '  </h1>';
    i++;
};