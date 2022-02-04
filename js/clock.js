const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  // 00:00:00 으로 시간을 표현하고 싶은 거니까
  //   console.log(date.getHours());
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setInterval(sayHello, 3000);
// setTimeout(sayHello, 3000);

getClock(); // 페이지가 로딩되자마자 초를 시작하기 위해서 추가
setInterval(getClock, 1000);
