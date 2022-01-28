const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  // const clickedClass = "clicked";
  // if (h1.className === clickedClass) {
  //   h1.className = "";
  // } else {
  //   h1.className = clickedClass;
  // }

  // const clickedClass = "clicked";
  // if (h1.classList.contains(clickedClass)) {
  //   h1.classList.remove(clickedClass);
  // } else {
  //   h1.classList.add(clickedClass);
  // }

  const clickedClass = "clicked";
  h1.classList.toggle(clickedClass);
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here!!";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone!!!";
}

h1.onclick = handleTitleClick;
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave); // .removeEventListener로 지울 수 있음

function handleWindowResize() {
  document.body.style.backgroundColor = "hotpink";
}

function handleWIndowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("GooooooD");
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWIndowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
