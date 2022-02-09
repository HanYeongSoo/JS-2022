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

  toDos = toDos.filter((clickOfLi) => clickOfLi.id !== parseInt(li.id));
  // local storage에 존자하냐? 안하냐? 차이 => 존재하지 않는다 === button을 눌렀다 === 삭제했다

  saveToDos();
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

/**
 *  const todos = [{text: "han"}, {text:"lololo"}]
 *  function filterFunc(todos) {return todos.text !=== "lololo"}
 *  todos.filter(filterFunc) === [{"han"}] 만 나옴
 *
 *  // 위랑 아래랑 같음
 *
 *  const todos = [{text: "han"}, {text:"lololo"}]
 *  todos.filter((tods) => todos.text !=== "lololo")
 */
