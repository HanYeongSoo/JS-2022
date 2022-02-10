function ok(GeolocationPosition) {
  //   console.log(GeolocationPosition);
  const lat = GeolocationPosition.coords.latitude;
  const lon = GeolocationPosition.coords.longitude;
  console.log("당신의 현재 위치는 " + lat + lon);
}

function error(params) {
  console.log("허용을 눌러주세요");
}

navigator.geolocation.getCurrentPosition(ok, error);
