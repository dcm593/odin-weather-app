// Global variable to store the API key
const API_KEY = "YJ7UHYK5GBBHC32JUHKHGJD97";

/**
 * Fetches the raw weather timeline payload for a location from the
 * Visual Crossing API.
 *
 * @param {string} location - A place name, address, or "lat,lon" string.
 * @returns {Promise<Object>} The unprocessed JSON response from the API.
 * @throws {Error} If the API responds with a non-OK status (e.g. unknown location).
 */
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

/**
 * Distills the verbose API payload into a flat, UI-friendly shape,
 * defaulting any missing fields to null so the display layer can handle
 * them gracefully.
 *
 * @param {Object} weatherData - Raw response from {@link getWeatherData}.
 * @returns {?Object} A normalized weather summary, or null if no data was given.
 */
function processWeatherData(weatherData) {
  if (!weatherData) return null;

  // The API nests hourly forecasts under each day; grab the first hour of today.
  const nextHour = weatherData.days?.[0]?.hours?.[0] ?? null;

  return {
    resolvedLocation: weatherData.resolvedAddress,
    temperature: weatherData.currentConditions?.temp ?? null,
    conditions: weatherData.currentConditions?.conditions ?? null,
    // Machine-readable condition slug (e.g. "partly-cloudy-day") used to pick an icon.
    icon: weatherData.currentConditions?.icon ?? null,
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
      icon: nextHour?.icon ?? null,
    },
  };
}

/**
 * Public entry point: fetches and normalizes weather for a location.
 * Logs and re-throws on failure so callers can surface the error to the user.
 *
 * @param {string} location - A place name, address, or "lat,lon" string.
 * @returns {Promise<?Object>} The normalized weather summary.
 * @throws {Error} Propagates any fetch/parse error after logging it.
 */
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
