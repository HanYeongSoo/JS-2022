const API_KEY = "24f7eda5aaafd611d71e2f0a3413d533";

function ok(GeolocationPosition) {
  //   console.log(GeolocationPosition);
  const lat = GeolocationPosition.coords.latitude;
  const lon = GeolocationPosition.coords.longitude;
  //   console.log("당신의 현재 위치는 " + lat + "?" + lon);

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data.name, data.weather[0].main);
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");

      weather.innerText = `${data.weather[0].main} / ${data.main.temp}도`;
      city.innerText = data.name;
    });
}

function error(params) {
  console.log("허용을 눌러주세요");
}

navigator.geolocation.getCurrentPosition(ok, error);

// 24f7eda5aaafd611d71e2f0a3413d533
// https://api.openweathermap.org/data/2.5/weather?lat=37.55609374494766&lon=127.07892076848592&appid=24f7eda5aaafd611d71e2f0a3413d533
