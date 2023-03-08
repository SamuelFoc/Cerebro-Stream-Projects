const API_URL = "https://api.open-meteo.com/v1/forecast?";

// Get all inputs and outputs
const cityForm = document.querySelector("#city-form");
const longtitude = document.querySelector("#longtitude");
const latitude = document.querySelector("#latitude");
const forecastContainer = document.querySelector("#forecast-container");

// Add event listener on submit button
cityForm.addEventListener("submit", async (event) => {
  // Prevent default behavior (refreshing the page) of the submit button
  event.preventDefault();

  // Get longtitude and latitude
  const lon = longtitude.value;
  const lat = latitude.value;

  // Fetch external API for weather data
  const response = await fetch(
    `${API_URL}latitude=${lat}&longitude=${lon}&hourly=temperature_2m`
  );
  const data = await response.json();

  // Display forecast data using our custom function from below
  displayForecast(data);
});

function displayForecast(data) {
  const forecast = data.hourly;
  let html = "";
  for (let i = 0; i < forecast.time.length; i++) {
    html += `<div>
            <h2>${new Date(forecast.time[i]).toLocaleString()}</h2>
            <p>Temperature: ${forecast.temperature_2m[i]}</p>
            </div>`;
  }
  forecastContainer.innerHTML = html;
}
