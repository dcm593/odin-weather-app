import { weatherAPI } from "./weatherAPI.js";

async function displayWeather(location) {
  // Define DOM elements to update with weather data
  const locationElement = document.getElementById("location");
  const temperatureElement = document.getElementById("temperature");
  const coordinatesElement = document.getElementById("coordinates");
  const humidityElement = document.getElementById("humidity");
  const windSpeedElement = document.getElementById("wind-speed");
  const currentConditionsElement =
    document.getElementById("current-conditions");
  const nextHourElement = document.getElementById("next-hour");

  try {
    locationElement.textContent = "Loading...";
    temperatureElement.textContent = "—";

    const weather = await weatherAPI.getWeather(location);
    const safeText = (value, fallback = "—") => {
      return value == null || value === "" || Number.isNaN(value)
        ? fallback
        : value;
    };

    locationElement.textContent = safeText(weather.resolvedLocation);
    temperatureElement.textContent = safeText(weather.temperature) + " °C";
    coordinatesElement.textContent = `${safeText(weather.coordinates.latitude)}, ${safeText(weather.coordinates.longitude)}`;
    humidityElement.textContent = safeText(weather.humidity) + " %";
    windSpeedElement.textContent = safeText(weather.windSpeed) + " km/h";
    currentConditionsElement.textContent = safeText(weather.conditions, "N/A");
    nextHourElement.textContent = safeText(weather.nextHour.conditions, "N/A");
  } catch (error) {
    console.error("Error displaying weather:", error);
    locationElement.textContent = "Error fetching weather data";
    temperatureElement.textContent = "—";
  }
}

export const displayController = { displayWeather };
