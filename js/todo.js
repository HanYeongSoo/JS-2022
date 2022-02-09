const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

function saveToDos() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

function deleteToDo(event) {
  //   console.log(event.target.parentElement);
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);

  li.id = newToDoObj.id;
  span.innerText = newToDoObj.text;

  const button = document.createElement("button");
  li.appendChild(button);
  button.innerText = "🐱‍🚀";
  button.addEventListener("click", deleteToDo);

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

  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };

  toDos.push(newToDoObj);

  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem("toDos");
// console.log(savedToDos);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  // console.log(parsedToDos);
  // 근데 여기서 받아온 list들을 한 덩어리로 쓰는게 아니고 따로따로 쓰고 싶기 때문에 하나씩 뽑아줘야돼

  toDos = parsedToDos;

  parsedToDos.forEach(paintToDo);
}
