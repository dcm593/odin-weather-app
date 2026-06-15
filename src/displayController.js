import { weatherAPI } from "./weatherAPI.js";

async function displayProcessedWeatherData(location) {
  const processedWeatherData = await weatherAPI.processWeatherData(location);
  if (processedWeatherData) {
    const locationElement = document.getElementById("location-data");
    const temperatureElement = document.getElementById("temperature-data");

    locationElement.textContent = processedWeatherData.location;
    temperatureElement.textContent = `${processedWeatherData.temperature} °C`;
  }
}

export const displayController = { displayProcessedWeatherData };
