// Set your OpenWeatherMap API key here
const apiKey = '463725a9f9c9695d4cd403e9e29095d8';  // Replace with your OpenWeatherMap API Key

function getWeather() {
  const city = document.getElementById('city').value;
  if (!city) {
    alert("Please enter a city!");
    return;
  }

  // URL to fetch weather data
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('City not found!');
      }
      return response.json();
    })
    .then(data => {
      displayWeather(data);
    })
    .catch(error => {
      alert(error.message);
    });
}

function displayWeather(data) {
  // Display weather info on the page
  document.getElementById('city-name').textContent = `${data.name}, ${data.sys.country}`;
  document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
  document.getElementById('weather-description').textContent = `Weather: ${data.weather[0].description}`;
  document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
  document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
}
