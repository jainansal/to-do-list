$("#task-form")[0].addEventListener("submit", addTask);

$("#clear-all")[0].addEventListener("click", clearAll);

$("body")[0].addEventListener("click", () => {
    $("#task-form")[0].classList.remove("highlight");
});

function addTask(event) {
    event.preventDefault();

    var newTask = $("#new-task")[0].value;

    var newDiv = document.createElement("div");
    newDiv.classList.add("task");
    newDiv.innerHTML =
        '<input type="checkbox" class="check-box" /><p>' + newTask + '</p>';

    $(".task-list")[0].append(newDiv);

    $("#new-task")[0].value = "";

    $("#new-task")[0].blur();

    $("#task-form")[0].classList.remove("highlight");

    updateCheckbox();
}

function updateCheckbox() {
    var checkBoxes = $(".check-box");

    var length = checkBoxes.length;

    checkBoxes[length - 1].addEventListener("click", (event) => {
        event.path[1].classList.toggle("striked");
    })
}

function clearAll() {
    $(".task-list")[0].innerHTML = "";
}

$("body")[0].addEventListener("keypress", (event) => {

    if (event.charCode >= 97 && event.charCode <= 122) {
        $("#task-form")[0].classList.add("highlight");
        $("#new-task")[0].focus();
    }
})