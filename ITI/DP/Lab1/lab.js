var dataTime = new Date();

function getCookieNames() {
    return document.cookie
        .split("; ")
        .map((cookie) => cookie.split("=")[1]);
}

function setCookie(name, value, expirationDate, deleted = false) {
    if (deleted) {
        document.cookie = `${name}=${value} deleted; expires=${expirationDate}`;
    } else {
        document.cookie = `${name}=${value}; expires=${expirationDate}`;
    }
}

function deleteCookie(name){
    document.cookie = `${name}=${name} deleted; expires=1/1/2001`;
}

function addTaskToBox(val) {
    const taskElement = $("<div>", { class: "task2" })
        .append($("<div>", { class: "task", text: val }))
        .append($("<button>", { class: "done", text: "Done" }))
        .append($("<button>", { class: "delete", text: "Delete" }));

    $(".tasksBox").append(taskElement);
}

function renderTasks() {
    let cookies = getCookieNames();

    cookies.forEach((cookie) => {
        if (cookie && !cookie.includes("deleted")) {
            addTaskToBox(cookie)
        }
    });
}

renderTasks();

$("#btnAdd").on("click", function () {
    const taskInputValue = $("#taskInput").val();

    if (!!taskInputValue) {
        addTaskToBox(taskInputValue)
        dataTime.setMonth(dataTime.getMonth() + 1);
        setCookie(taskInputValue, taskInputValue, dataTime)

    } else {
        console.error("Empty value");
    }
});

$(document).on("click", ".delete", function () {
    const taskElement = $(this).closest(".task2");

    const taskName = taskElement.find(".task").text();

    deleteCookie(taskName)

    taskElement.remove();
});

$(document).on("click", ".done", function () {
    $(this).closest(".task2").toggleClass("TaskDone");
});


