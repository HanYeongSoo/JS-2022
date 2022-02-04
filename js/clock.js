const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  // 00:00:00 으로 시간을 표현하고 싶은 거니까
  //   console.log(date.getHours());
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

// setInterval(sayHello, 3000);
// setTimeout(sayHello, 3000);

getClock(); // 페이지가 로딩되자마자 초를 시작하기 위해서 추가
setInterval(getClock, 1000);
