import "./styles.css";
import { displayController } from "./displayController.js";

const form = document.getElementById("search-weather-form");
const input = document.getElementById("search-input");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const location = input.value.trim();

  if (!location) return; // Do not proceed if the input is empty

  await displayController.displayWeather(location);

  input.value = ""; // Clear the input field after submission
});
