function showWeather(response) {
  console.log(response);
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;
  let temperature = document.querySelector("#number");
  temperature.innerHTML = Math.round(response.data.main.temp);
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = Math.round(response.data.main.humidity);
  let wind = document.querySelector("#wind");
  wind.innerHTML = Math.round(response.data.wind.speed);
  let desc = document.querySelector("#description");
  desc.innerHTML = response.data.weather[0].main;
}

function changeCity(event) {
  event.preventDefault();
  let apiKey = "4b3503b2f08a729413c4d33ef1186004";
  let city = document.querySelector("#city-text").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showWeather);
}
let searchCity = document.querySelector("#search-city");
searchCity.addEventListener("click", changeCity);

function getLoc(position) {
  let apiKey = "4b3503b2f08a729413c4d33ef1186004";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showWeather);
}

function yourLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getLoc);
}

let currentlocation = document.querySelector("#your-location");
currentlocation.addEventListener("click", yourLocation);
//-----------------------------------------------------------
//Date
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let hour = now.getHours();
let minute = now.getMinutes();
let day = days[now.getDay()];
if (hour < 10) {
  hour = `0${hour}`;
}
if (minute < 10) {
  minute = `0${minute}`;
}
let date = document.querySelector("#date");
date.innerHTML = `${day} ${hour}:${minute} `;
