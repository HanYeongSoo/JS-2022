const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = newToDo;
  //   console.log(li);
  toDoList.appendChild(li);
  console.log(toDoList);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  //   console.log(toDoInput.value);
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  //   console.log("newToDo : " + newToDo);
  //   console.log("toDoInput.value = " + toDoInput.value);
  paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
