const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

function handleToDoSubmit(event) {
  event.preventDefault();
  //   console.log(toDoInput.value);
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  //   console.log("newToDo : " + newToDo);
  //   console.log("toDoInput.value = " + toDoInput.value);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
