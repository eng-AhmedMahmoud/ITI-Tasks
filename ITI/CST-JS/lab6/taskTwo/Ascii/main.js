document.onkeydown = function(){
  if(event.which != 16 && event.which != 17 && event.which != 18 ){
    alert(event.which);
  }
  else if(event.which == 16){
    alert("Shift was pressed")
  }
  else if(event.which == 17){
    alert("Ctrl was pressed")
  }
  else if(event.which == 18){
    alert("Alt was pressed")
  }
}