// Application entry point: wires the search form up to the weather display.
import "./styles.css";
import { displayController } from "./displayController.js";

const form = document.getElementById("search-weather-form");
const input = document.getElementById("search-input");
const inputHint = document.getElementById("input-hint");

// Advisory nudge as the user types, escalating by how many comma-separated parts
// they've entered. Comma — not whitespace — is the signal, since place names like
// "Meadow Lake" contain spaces. (Heuristic: it counts separators, not which parts
// are actually present.)
input.addEventListener("input", () => {
  const value = input.value.trim();
  const commaCount = (value.match(/,/g) || []).length;

  if (value === "" || commaCount >= 2) {
    // Empty, or enough detail (city, region, country) — no nudge needed.
    inputHint.textContent = "";
  } else if (commaCount === 0) {
    // A single term so far: suggest the full format.
    inputHint.textContent =
      "For best results, enter a city, province/state, and country (e.g., 'Saskatoon, SK, Canada')";
  } else {
    // One comma: they've added a level of detail; gently nudge for the last.
    inputHint.textContent =
      "Add more detail (e.g. a country) for the most accurate result.";
  }
});

// On submit, fetch and render weather for the entered location.
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const location = input.value.trim();

  if (!location) return; // Do not proceed if the input is empty

  await displayController.displayWeather(location);

  input.value = ""; // Clear the input field after submission
});
