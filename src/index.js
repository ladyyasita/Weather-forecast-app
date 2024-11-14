function displayWeather(response) {
  let tempElement = document.querySelector("#current-temp");
  let cityElement = document.querySelector("#weather-city");
  cityElement.innerHTML = response.data.name;
  tempElement.innerHTML = Math.round(response.data.main.temp);
  let descriptionElement = document.querySelector("#description-weather");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${response.data.main.humidity}%`;
  let windElement = document.querySelector("#wind-speed");
  windElement.innerHTML = `${response.data.wind.speed}km/h`;
  let currentTimeElement = document.querySelector("#current-time");
  let date = new Date(response.data.dt * 1000);
  currentTimeElement.innerHTML = formatDate(date);
  let iconTempElement = document.querySelector("#temp-icon");
  iconTempElement.innerHTML = `<img src="https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png " class="temp-icon"/>`;
  let realFeel = response.data.main.feels_like;
  let realFeelElement = document.querySelector("#realfeel");
  realFeelElement.innerHTML = `${Math.round(realFeel)}°C`;
}

function search(city) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}
function handleSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  search(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSubmit);

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}
search("Prague");
