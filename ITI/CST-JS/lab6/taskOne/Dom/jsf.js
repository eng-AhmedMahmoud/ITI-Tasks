    var header  = document.getElementById("header");
    var nav = document.getElementById("nav")
    header.style.textAlign = "right";
    nav.style.listStyleType = "circle";
    var apnd = header.cloneNode(true);
    apnd.style.textAlign = "left";
    document.body.appendChild(apnd);


