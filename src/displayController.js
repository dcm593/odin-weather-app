import { weatherAPI } from "./weatherAPI.js";

/**
 * Loads the SVG icon matching a Visual Crossing condition slug and points an
 * <img> at it. Uses a webpack dynamic import(), so each icon is its own chunk
 * fetched only when first needed rather than bundled up front.
 *
 * @param {HTMLImageElement} imgElement - The <img> to update.
 * @param {?string} iconName - Condition slug (e.g. "rain"); null clears the icon.
 * @returns {Promise<void>}
 */
async function setWeatherIcon(imgElement, iconName) {
  if (!iconName) {
    imgElement.removeAttribute("src");
    imgElement.alt = "";
    return;
  }

  try {
    // Template-literal import tells webpack to bundle every svg under ./icons/
    // as separate, load-on-demand chunks.
    const { default: iconUrl } = await import(`./icons/${iconName}.svg`);
    imgElement.src = iconUrl;
    imgElement.alt = iconName.replace(/-/g, " "); // "partly-cloudy-day" -> "partly cloudy day"
  } catch {
    // Unrecognized condition slug: leave the image blank instead of breaking.
    imgElement.removeAttribute("src");
    imgElement.alt = "";
  }
}

/**
 * Builds a human-readable sentence about the upcoming hour's weather,
 * e.g. "65% chance of rain in the next hour".
 *
 * @param {Object} nextHour - The `nextHour` slice of the normalized weather data.
 * @returns {string} A sentence describing the next hour.
 */
function describeNextHour(nextHour) {
  const chance = nextHour.precipitationChance;

  if (chance > 0) {
    // precipitationType may be null (API didn't specify) — fall back to a generic word.
    const type = nextHour.precipitationType || "precipitation";
    return `${chance}% chance of ${type} in the next hour`;
  }

  // No precipitation expected: describe the forecasted conditions instead.
  return nextHour.conditions
    ? `${nextHour.conditions} expected in the next hour`
    : "No precipitation expected in the next hour";
}

/**
 * Fetches weather for a location and renders it into the page's DOM elements.
 * Shows a loading placeholder while fetching and an error message on failure;
 * never throws, so the caller doesn't need its own error handling.
 *
 * @param {string} location - A place name, address, or "lat,lon" string.
 * @returns {Promise<void>}
 */
async function displayWeather(location) {
  // The container shows one of two states: a placeholder/status message, or the
  // populated weather layout. We toggle between them with the `.hidden` class.
  const placeholderElement = document.getElementById("weather-placeholder");
  const contentElement = document.getElementById("weather-content");

  // Data fields inside the populated layout.
  const locationElement = document.getElementById("location");
  const temperatureElement = document.getElementById("temperature");
  const coordinatesElement = document.getElementById("coordinates");
  const humidityElement = document.getElementById("humidity");
  const windSpeedElement = document.getElementById("wind-speed");
  const currentConditionsElement =
    document.getElementById("current-conditions");
  const nextHourElement = document.getElementById("next-hour");
  const currentIconElement = document.getElementById("current-icon");
  const nextHourIconElement = document.getElementById("next-hour-icon");

  try {
    // While fetching, fall back to the placeholder area with a loading note.
    contentElement.classList.add("hidden");
    placeholderElement.classList.remove("hidden");
    placeholderElement.textContent = "Loading…";

    const weather = await weatherAPI.getWeather(location);

    // Returns `fallback` for null/undefined/empty/NaN values, otherwise the value.
    const safeText = (value, fallback = "—") => {
      return value == null || value === "" || Number.isNaN(value)
        ? fallback
        : value;
    };

    // Label each data point so the raw values read as a sentence/stat.
    locationElement.textContent = safeText(weather.resolvedLocation);
    temperatureElement.textContent = `Temperature: ${safeText(weather.temperature)} °C`;
    coordinatesElement.textContent = `${safeText(weather.coordinates.latitude)}, ${safeText(weather.coordinates.longitude)}`;
    humidityElement.textContent = `Humidity: ${safeText(weather.humidity)} %`;
    windSpeedElement.textContent = `Wind Speed: ${safeText(weather.windSpeed)} km/h`;
    currentConditionsElement.textContent = `Current Conditions: ${safeText(weather.conditions, "N/A")}`;
    nextHourElement.textContent = describeNextHour(weather.nextHour);

    // Swap in the live condition icons (dynamically imported). The humidity and
    // wind icons are static and set directly in the template.
    await setWeatherIcon(currentIconElement, weather.icon);
    await setWeatherIcon(nextHourIconElement, weather.nextHour.icon);

    // Reveal the populated layout.
    placeholderElement.classList.add("hidden");
    contentElement.classList.remove("hidden");
  } catch (error) {
    console.error("Error displaying weather:", error);
    // Keep the layout hidden and surface the problem in the placeholder spot.
    contentElement.classList.add("hidden");
    placeholderElement.classList.remove("hidden");
    placeholderElement.textContent =
      "Couldn't fetch weather for that location. Please try another search.";
  }
}

export const displayController = { displayWeather };
