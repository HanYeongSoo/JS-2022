const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);

  const username = loginInput.value;
  localStorage.setItem("username", username);

  loginForm.classList.add(HIDDEN_CLASSNAME);

  // greeting.innerText = "Hello " + username;
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
