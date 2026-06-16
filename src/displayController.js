import { weatherAPI } from "./weatherAPI.js";

async function displayWeather(location) {
  const locationElement = document.getElementById("location-data");
  const temperatureElement = document.getElementById("temperature-data");

  try {
    const weather = await weatherAPI.getWeather(location);
    const safeText = (value, fallback = "—") => value ?? fallback;

    locationElement.textContent = safeText(weather.resolvedLocation);
    temperatureElement.textContent = safeText(weather.temperature) + " °C";
  } catch (error) {
    console.error("Error displaying weather:", error);
    locationElement.textContent = "Error fetching weather data";
    temperatureElement.textContent = "—";
  }
}

export const displayController = { displayWeather };
