// Global variable to store the API key
const API_KEY = "YJ7UHYK5GBBHC32JUHKHGJD97";

async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}&unitGroup=metric`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

async function processWeatherData(location) {
  const weatherData = await getWeatherData(location);
  if (weatherData) {
    const location = weatherData.resolvedAddress;
    const temperature = weatherData.currentConditions?.temp ?? null;
    return { location, temperature };
  }
}

export const weatherAPI = { processWeatherData };
