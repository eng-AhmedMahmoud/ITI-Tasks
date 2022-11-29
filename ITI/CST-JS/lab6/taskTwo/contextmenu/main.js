//prevent mouse right click event
document.addEventListener("contextmenu", function () {
  console.log("context menu");
  event.preventDefault();
}) 