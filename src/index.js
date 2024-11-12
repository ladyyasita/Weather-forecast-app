function displayWeather(response) {
  let tempElement = document.querySelector("#current-temp");
  let cityElement = document.querySelector("#weather-city");
  cityElement.innerHTML = response.data.city;
  tempElement.innerHTML = Math.round(response.data.temperature.current);
  let descriptionElement = document.querySelector("#description-weather");
  descriptionElement.innerHTML = response.data.condition.description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  let windElement = document.querySelector("#wind-speed");
  windElement.innerHTML = `${response.data.wind.speed}km/h`;
  let currentTimeElement = document.querySelector("#current-time");
  let date = new Date(response.data.time * 1000);
  currentTimeElement.innerHTML = formatDate(date);
  iconTempElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="temp-icon"/>`;
  let iconTempElement = document.querySelector("#temp-icon");
  let precipitationElement = document.querySelector("#precipitation");
  let precipitation = response.data.rain;
  precipitationElement.innerHTML = `${precipitation} mm`;
  console.log(response.data.condition.rain);
}

function search(city) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={your_api_key}&units=metric
`;
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
