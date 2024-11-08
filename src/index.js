function displayWeather(response) {
  let tempElement = document.querySelector("#current-temp");
  let temp = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#weather-city");
  cityElement.innerHTML = response.data.city;
  tempElement.innerHTML = temp;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-form");
  let city = searchInputElement.value;

  let apiKey = "c3a451d0adt46fobb2b9a77755f49315";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
