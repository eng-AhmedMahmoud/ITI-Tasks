
function init(){
    retriveImg(getcookie("img"));
    yourMsg(getcookie("pMsg"));

}
function retriveImg(imgN){
    var div = document.createElement("div");
    var imgSel = document.createElement("img");
    imgSel.src = "images/" + imgN + ".jpg";
    div.appendChild(imgSel);
    div.style = "text-align:center";
    document.body.appendChild(div);
}

function yourMsg (pMsg){
    var msg = document.createElement("yMsg");
    var msgN = document.createTextNode(pMsg);
    msg.appendChild(msgN);
    msg.style = "text-align:center";
    document.body.appendChild(msg);
}

