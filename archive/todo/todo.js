var todos = ["beg"];
var input = prompt("What would you like to do?");

while (input !== "quit") {
  if (input === "list") {
    listTodo();
  } else if (input === "new") {
    addTodo();
  } else if (input === "delete") {
    delTodo();
  }
  input = prompt("What would you like to do?");
}
console.log("OK, You quit the app");

function listTodo() {
  console.log("*************");
  todos.forEach(function (todo, i) {
    console.log(i + ": " + todo);
  });
  console.log("*************");
}

function addTodo() {
  var newTodo = prompt("Enter new todo");
  todos.push(newTodo);
  console.log("Added todo");
}

function delTodo() {
  var index = prompt("Enter index of todo to delete");
  todos.splice(index, 1);
  console.log("Deleted todo");
}