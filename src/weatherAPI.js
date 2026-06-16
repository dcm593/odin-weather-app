// Global variable to store the API key
const API_KEY = "YJ7UHYK5GBBHC32JUHKHGJD97";

async function getWeatherData(location) {
  const encodedLocation = encodeURIComponent(location);

  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodedLocation}?key=${API_KEY}&unitGroup=metric`,
  );

  if (!response.ok) {
    throw new Error(`LOCATION NOT FOUND - status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

function processWeatherData(weatherData) {
  if (!weatherData) return null;

  const nextHour = weatherData.days?.[0]?.hours?.[0] ?? null;

  return {
    resolvedLocation: weatherData.resolvedAddress,
    temperature: weatherData.currentConditions?.temp ?? null,
    conditions: weatherData.currentConditions?.conditions ?? null,
    coordinates: {
      latitude: weatherData.latitude,
      longitude: weatherData.longitude,
    },
    humidity: weatherData.currentConditions?.humidity ?? null,
    windSpeed: weatherData.currentConditions?.windspeed ?? null,
    nextHour: {
      precipitationChance: nextHour?.precipprob ?? 0,
      precipitationType: nextHour?.preciptype?.join(", ") ?? null,
      conditions: nextHour?.conditions ?? null,
    },
  };
}

async function getWeather(location) {
  try {
    const weatherData = await getWeatherData(location);
    return processWeatherData(weatherData);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}

export const weatherAPI = { getWeather };
