var dataTime = new Date();
let i = 0;
///funct
let x = document.cookie.split("; ");
x.map((t) => {
  console.log(t.split("=")[1]);
  if (t.split("=")[1]) {
    if (t.includes("deleted")) {
      console.log("deleted");
    } else {
      $(".tasksBox").append(
        "<div class='task2'><div class='task'>" +
        t.split("=")[1] +
        "</div>" +
        "<button class='done' >Done</button> <button class='delete' >Delete</button><br></div>"
      );
    }
  }
});

$("#btnAdd").on("click", function () {
  if (!!$("#taskInput").val()) {
    $(".tasksBox").append(
      "<div class='task2'><div class='task'>" +
      $("#taskInput").val() +
      "</div>" +
      "<button class='done' >Done</button> <button class='delete' >Delete</button><br></div>"
    );
    var taskInputValue = $("#taskInput").val();
    dataTime.setMonth(dataTime.getMonth() + 1);
    document.cookie = `${taskInputValue} = ${taskInputValue}  ; expires=${dataTime}`;
  } else {
    console.error("Empty value");
  }
});
$(document).on("click", ".delete", function () {
  var removeMe = $(this).siblings("div").text();
  console.log(removeMe);
  document.cookie = `${removeMe} = ${removeMe} deleted  ; expires=1/1/2001`;
  $(this).parent(".task2").remove();
});

$(document).on("click", ".done", function () {
  $(this).parent(".task2").toggleClass("TaskDone");
});
function retrieve() { }
window.localStorage.clear();
