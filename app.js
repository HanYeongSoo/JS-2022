const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);

  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);

  loginForm.classList.add(HIDDEN_CLASSNAME);

  // greeting.innerText = "Hello " + username;
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove("hidden");
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}
