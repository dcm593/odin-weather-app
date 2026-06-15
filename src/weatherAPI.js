// Global variable to store the API key
const API_KEY = "YJ7UHYK5GBBHC32JUHKHGJD97";

async function getWeatherData(city) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${API_KEY}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

export const weatherAPI = { getWeatherData };