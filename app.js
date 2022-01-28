const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");

function onLoginBtnClick() {
  console.log("click~");
}

loginBtn.addEventListener("click", onLoginBtnClick);
