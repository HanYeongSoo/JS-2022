const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;

  if (currentColor === "blue") {
    newColor = "pink";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
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
