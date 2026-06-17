/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ \"./node_modules/css-loader/dist/runtime/sourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n  margin: 0;\r\n  font-family: system-ui, sans-serif;\r\n  background: linear-gradient(to bottom right, #cfe8ff, #3074b8);\r\n  color: #fff;\r\n  min-height: 100vh;\r\n}\r\n\r\n/* Centered column that holds the search form and the weather card. */\r\n.app {\r\n  max-width: 600px;\r\n  margin: 0 auto;\r\n  padding: 2rem 1rem;\r\n}\r\n\r\n/* --- Search form --- */\r\n#search-weather-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  gap: 0.75rem;\r\n  /* Matches the search→button distance (0.75 gap + 1.6 hint + 0.75 gap) so the\r\n     button sits evenly between the search bar and the weather card. */\r\n  margin-bottom: 3.1rem;\r\n}\r\n\r\n#search-input {\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  padding: 0.75rem 1.25rem;\r\n  border: none;\r\n  border-radius: 9999px;\r\n  background-color: #1c387a;\r\n  color: #fff;\r\n  font-size: 1rem;\r\n}\r\n\r\n#search-input::placeholder {\r\n  color: #dbdbdb;\r\n}\r\n\r\n#search-input:focus {\r\n  outline: 2px solid #fff;\r\n}\r\n\r\n#search-weather-form button {\r\n  align-self: center;\r\n  padding: 0.5rem 1.5rem;\r\n  /* Reserve the hover border space up front (transparent) so hovering only\r\n     changes its colour, not the layout. */\r\n  border: 2px solid transparent;\r\n  border-radius: 9999px;\r\n  background-color: #1c387a;\r\n  color: #fff;\r\n  font-size: 0.95rem;\r\n  cursor: pointer;\r\n}\r\n\r\n#search-weather-form button:hover {\r\n  background-color: #162e66;\r\n  border-color: #fff;\r\n}\r\n\r\n/* Advisory typing hint under the search input — guidance, not an error.\r\n   Reserves its height (min-height + :empty) so toggling it doesn't shift the\r\n   button below. Left padding matches the input's so the text lines up. */\r\n.input-hint {\r\n  align-self: stretch;\r\n  min-height: 1.6rem;\r\n  box-sizing: border-box;\r\n  padding: 0 1.25rem;\r\n  line-height: 1.6rem;\r\n  font-size: 0.85rem;\r\n  color: #dbdbdb;\r\n  text-align: left;\r\n  background-color: #1c387a;\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n/* No hint text: keep the reserved space but drop the visible box. */\r\n.input-hint:empty {\r\n  background-color: transparent;\r\n}\r\n\r\n/* --- Weather display container --- */\r\n.weather-display {\r\n  background-color: #1c387a;\r\n  border: 2px solid #fff;\r\n  border-radius: 1rem;\r\n  padding: 1.5rem;\r\n  text-align: center;\r\n  /* Reserve roughly the populated height so the box doesn't resize when\r\n     weather loads. Flex column lets the placeholder center within it. */\r\n  min-height: 24.5rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#weather-placeholder {\r\n  /* auto margins center the placeholder both vertically and horizontally\r\n     in the flex container. */\r\n  margin: auto;\r\n  font-size: 1.25rem;\r\n  color: #dbdbdb;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n/* Load-time readout beneath the weather card. Font size matches the\r\n   temperature/coordinates subtext. */\r\n.load-time {\r\n  margin: 1rem 0 0;\r\n  text-align: center;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n#location {\r\n  margin: 0 0 0.25rem;\r\n  font-size: 1.8rem;\r\n  text-transform: capitalize;\r\n}\r\n\r\n/* Temp + coordinates: smaller subtext beneath the location, with a divider\r\n   separating it from the metric grid below. */\r\n.location-subtext {\r\n  margin-bottom: 1.5rem;\r\n  padding-bottom: 1rem;\r\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3);\r\n  font-size: 0.9rem;\r\n  opacity: 0.85;\r\n}\r\n\r\n.location-subtext p {\r\n  margin: 0;\r\n}\r\n\r\n/* --- 2x2 metric grid --- */\r\n.weather-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  /* Split the shorthand so horizontal spacing stays put while the rows\r\n     (the stacked cells in each column) sit further apart vertically. */\r\n  column-gap: 1.5rem;\r\n  row-gap: 2.5rem;\r\n}\r\n\r\n.weather-cell {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.weather-cell p {\r\n  margin: 0;\r\n}\r\n\r\n/* Static label sits between the icon and its value in each cell. */\r\n.weather-label {\r\n  font-weight: 600;\r\n}\r\n\r\n/* White circular \"chip\" so the icons stay legible on the dark container. */\r\n.weather-icon {\r\n  width: 56px;\r\n  height: 56px;\r\n  box-sizing: border-box;\r\n  padding: 6px;\r\n  background-color: #fff;\r\n  border-radius: 50%;\r\n  object-fit: contain;\r\n}\r\n`, \"\",{\"version\":3,\"sources\":[\"webpack://./src/styles.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,SAAS;EACT,kCAAkC;EAClC,8DAA8D;EAC9D,WAAW;EACX,iBAAiB;AACnB;;AAEA,qEAAqE;AACrE;EACE,gBAAgB;EAChB,cAAc;EACd,kBAAkB;AACpB;;AAEA,wBAAwB;AACxB;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,YAAY;EACZ;sEACoE;EACpE,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,sBAAsB;EACtB,wBAAwB;EACxB,YAAY;EACZ,qBAAqB;EACrB,yBAAyB;EACzB,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB;0CACwC;EACxC,6BAA6B;EAC7B,qBAAqB;EACrB,yBAAyB;EACzB,WAAW;EACX,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;;yEAEyE;AACzE;EACE,mBAAmB;EACnB,kBAAkB;EAClB,sBAAsB;EACtB,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,cAAc;EACd,gBAAgB;EAChB,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA,oEAAoE;AACpE;EACE,6BAA6B;AAC/B;;AAEA,sCAAsC;AACtC;EACE,yBAAyB;EACzB,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB;wEACsE;EACtE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE;6BAC2B;EAC3B,YAAY;EACZ,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;qCACqC;AACrC;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;8CAC8C;AAC9C;EACE,qBAAqB;EACrB,oBAAoB;EACpB,iDAAiD;EACjD,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,SAAS;AACX;;AAEA,4BAA4B;AAC5B;EACE,aAAa;EACb,qCAAqC;EACrC;uEACqE;EACrE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,SAAS;AACX;;AAEA,mEAAmE;AACnE;EACE,gBAAgB;AAClB;;AAEA,2EAA2E;AAC3E;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;EAClB,mBAAmB;AACrB\",\"sourcesContent\":[\"body {\\r\\n  margin: 0;\\r\\n  font-family: system-ui, sans-serif;\\r\\n  background: linear-gradient(to bottom right, #cfe8ff, #3074b8);\\r\\n  color: #fff;\\r\\n  min-height: 100vh;\\r\\n}\\r\\n\\r\\n/* Centered column that holds the search form and the weather card. */\\r\\n.app {\\r\\n  max-width: 600px;\\r\\n  margin: 0 auto;\\r\\n  padding: 2rem 1rem;\\r\\n}\\r\\n\\r\\n/* --- Search form --- */\\r\\n#search-weather-form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: flex-start;\\r\\n  gap: 0.75rem;\\r\\n  /* Matches the search→button distance (0.75 gap + 1.6 hint + 0.75 gap) so the\\r\\n     button sits evenly between the search bar and the weather card. */\\r\\n  margin-bottom: 3.1rem;\\r\\n}\\r\\n\\r\\n#search-input {\\r\\n  width: 100%;\\r\\n  box-sizing: border-box;\\r\\n  padding: 0.75rem 1.25rem;\\r\\n  border: none;\\r\\n  border-radius: 9999px;\\r\\n  background-color: #1c387a;\\r\\n  color: #fff;\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\n#search-input::placeholder {\\r\\n  color: #dbdbdb;\\r\\n}\\r\\n\\r\\n#search-input:focus {\\r\\n  outline: 2px solid #fff;\\r\\n}\\r\\n\\r\\n#search-weather-form button {\\r\\n  align-self: center;\\r\\n  padding: 0.5rem 1.5rem;\\r\\n  /* Reserve the hover border space up front (transparent) so hovering only\\r\\n     changes its colour, not the layout. */\\r\\n  border: 2px solid transparent;\\r\\n  border-radius: 9999px;\\r\\n  background-color: #1c387a;\\r\\n  color: #fff;\\r\\n  font-size: 0.95rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#search-weather-form button:hover {\\r\\n  background-color: #162e66;\\r\\n  border-color: #fff;\\r\\n}\\r\\n\\r\\n/* Advisory typing hint under the search input — guidance, not an error.\\r\\n   Reserves its height (min-height + :empty) so toggling it doesn't shift the\\r\\n   button below. Left padding matches the input's so the text lines up. */\\r\\n.input-hint {\\r\\n  align-self: stretch;\\r\\n  min-height: 1.6rem;\\r\\n  box-sizing: border-box;\\r\\n  padding: 0 1.25rem;\\r\\n  line-height: 1.6rem;\\r\\n  font-size: 0.85rem;\\r\\n  color: #dbdbdb;\\r\\n  text-align: left;\\r\\n  background-color: #1c387a;\\r\\n  border-radius: 0.5rem;\\r\\n}\\r\\n\\r\\n/* No hint text: keep the reserved space but drop the visible box. */\\r\\n.input-hint:empty {\\r\\n  background-color: transparent;\\r\\n}\\r\\n\\r\\n/* --- Weather display container --- */\\r\\n.weather-display {\\r\\n  background-color: #1c387a;\\r\\n  border: 2px solid #fff;\\r\\n  border-radius: 1rem;\\r\\n  padding: 1.5rem;\\r\\n  text-align: center;\\r\\n  /* Reserve roughly the populated height so the box doesn't resize when\\r\\n     weather loads. Flex column lets the placeholder center within it. */\\r\\n  min-height: 24.5rem;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n#weather-placeholder {\\r\\n  /* auto margins center the placeholder both vertically and horizontally\\r\\n     in the flex container. */\\r\\n  margin: auto;\\r\\n  font-size: 1.25rem;\\r\\n  color: #dbdbdb;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n/* Load-time readout beneath the weather card. Font size matches the\\r\\n   temperature/coordinates subtext. */\\r\\n.load-time {\\r\\n  margin: 1rem 0 0;\\r\\n  text-align: center;\\r\\n  font-size: 0.9rem;\\r\\n}\\r\\n\\r\\n#location {\\r\\n  margin: 0 0 0.25rem;\\r\\n  font-size: 1.8rem;\\r\\n  text-transform: capitalize;\\r\\n}\\r\\n\\r\\n/* Temp + coordinates: smaller subtext beneath the location, with a divider\\r\\n   separating it from the metric grid below. */\\r\\n.location-subtext {\\r\\n  margin-bottom: 1.5rem;\\r\\n  padding-bottom: 1rem;\\r\\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3);\\r\\n  font-size: 0.9rem;\\r\\n  opacity: 0.85;\\r\\n}\\r\\n\\r\\n.location-subtext p {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n/* --- 2x2 metric grid --- */\\r\\n.weather-grid {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(2, 1fr);\\r\\n  /* Split the shorthand so horizontal spacing stays put while the rows\\r\\n     (the stacked cells in each column) sit further apart vertically. */\\r\\n  column-gap: 1.5rem;\\r\\n  row-gap: 2.5rem;\\r\\n}\\r\\n\\r\\n.weather-cell {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  gap: 0.5rem;\\r\\n}\\r\\n\\r\\n.weather-cell p {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n/* Static label sits between the icon and its value in each cell. */\\r\\n.weather-label {\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n/* White circular \\\"chip\\\" so the icons stay legible on the dark container. */\\r\\n.weather-icon {\\r\\n  width: 56px;\\r\\n  height: 56px;\\r\\n  box-sizing: border-box;\\r\\n  padding: 6px;\\r\\n  background-color: #fff;\\r\\n  border-radius: 50%;\\r\\n  object-fit: contain;\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NyYy9zdHlsZXMuY3NzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssT0FBTyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLE9BQU8sYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxPQUFPLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLE1BQU0sT0FBTyxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGdDQUFnQyxnQkFBZ0IseUNBQXlDLHFFQUFxRSxrQkFBa0Isd0JBQXdCLEtBQUssd0ZBQXdGLHVCQUF1QixxQkFBcUIseUJBQXlCLEtBQUssMkRBQTJELG9CQUFvQiw2QkFBNkIsOEJBQThCLG1CQUFtQiwwTEFBMEwsS0FBSyx1QkFBdUIsa0JBQWtCLDZCQUE2QiwrQkFBK0IsbUJBQW1CLDRCQUE0QixnQ0FBZ0Msa0JBQWtCLHNCQUFzQixLQUFLLG9DQUFvQyxxQkFBcUIsS0FBSyw2QkFBNkIsOEJBQThCLEtBQUsscUNBQXFDLHlCQUF5Qiw2QkFBNkIsa0tBQWtLLDRCQUE0QixnQ0FBZ0Msa0JBQWtCLHlCQUF5QixzQkFBc0IsS0FBSywyQ0FBMkMsZ0NBQWdDLHlCQUF5QixLQUFLLGdRQUFnUSwwQkFBMEIseUJBQXlCLDZCQUE2Qix5QkFBeUIsMEJBQTBCLHlCQUF5QixxQkFBcUIsdUJBQXVCLGdDQUFnQyw0QkFBNEIsS0FBSyxvR0FBb0csb0NBQW9DLEtBQUsscUVBQXFFLGdDQUFnQyw2QkFBNkIsMEJBQTBCLHNCQUFzQix5QkFBeUIsbUxBQW1MLG9CQUFvQiw2QkFBNkIsS0FBSyw4QkFBOEIsa0lBQWtJLHlCQUF5QixxQkFBcUIsS0FBSyxpQkFBaUIsb0JBQW9CLEtBQUssc0lBQXNJLHVCQUF1Qix5QkFBeUIsd0JBQXdCLEtBQUssbUJBQW1CLDBCQUEwQix3QkFBd0IsaUNBQWlDLEtBQUssNkpBQTZKLDRCQUE0QiwyQkFBMkIsd0RBQXdELHdCQUF3QixvQkFBb0IsS0FBSyw2QkFBNkIsZ0JBQWdCLEtBQUssd0RBQXdELG9CQUFvQiw0Q0FBNEMsZ0xBQWdMLHNCQUFzQixLQUFLLHVCQUF1QixvQkFBb0IsNkJBQTZCLDBCQUEwQixrQkFBa0IsS0FBSyx5QkFBeUIsZ0JBQWdCLEtBQUssZ0dBQWdHLHVCQUF1QixLQUFLLHlHQUF5RyxrQkFBa0IsbUJBQW1CLDZCQUE2QixtQkFBbUIsNkJBQTZCLHlCQUF5QiwwQkFBMEIsS0FBSyx1QkFBdUI7QUFDMTVMO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGVzLmNzcz9lOWFhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjY2ZlOGZmLCAjMzA3NGI4KTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLyogQ2VudGVyZWQgY29sdW1uIHRoYXQgaG9sZHMgdGhlIHNlYXJjaCBmb3JtIGFuZCB0aGUgd2VhdGhlciBjYXJkLiAqL1xyXG4uYXBwIHtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcclxufVxyXG5cclxuLyogLS0tIFNlYXJjaCBmb3JtIC0tLSAqL1xyXG4jc2VhcmNoLXdlYXRoZXItZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGdhcDogMC43NXJlbTtcclxuICAvKiBNYXRjaGVzIHRoZSBzZWFyY2jihpJidXR0b24gZGlzdGFuY2UgKDAuNzUgZ2FwICsgMS42IGhpbnQgKyAwLjc1IGdhcCkgc28gdGhlXHJcbiAgICAgYnV0dG9uIHNpdHMgZXZlbmx5IGJldHdlZW4gdGhlIHNlYXJjaCBiYXIgYW5kIHRoZSB3ZWF0aGVyIGNhcmQuICovXHJcbiAgbWFyZ2luLWJvdHRvbTogMy4xcmVtO1xyXG59XHJcblxyXG4jc2VhcmNoLWlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzM4N2E7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4jc2VhcmNoLWlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNkYmRiZGI7XHJcbn1cclxuXHJcbiNzZWFyY2gtaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IDJweCBzb2xpZCAjZmZmO1xyXG59XHJcblxyXG4jc2VhcmNoLXdlYXRoZXItZm9ybSBidXR0b24ge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xyXG4gIC8qIFJlc2VydmUgdGhlIGhvdmVyIGJvcmRlciBzcGFjZSB1cCBmcm9udCAodHJhbnNwYXJlbnQpIHNvIGhvdmVyaW5nIG9ubHlcclxuICAgICBjaGFuZ2VzIGl0cyBjb2xvdXIsIG5vdCB0aGUgbGF5b3V0LiAqL1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMzODdhO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNzZWFyY2gtd2VhdGhlci1mb3JtIGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MmU2NjtcclxuICBib3JkZXItY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi8qIEFkdmlzb3J5IHR5cGluZyBoaW50IHVuZGVyIHRoZSBzZWFyY2ggaW5wdXQg4oCUIGd1aWRhbmNlLCBub3QgYW4gZXJyb3IuXHJcbiAgIFJlc2VydmVzIGl0cyBoZWlnaHQgKG1pbi1oZWlnaHQgKyA6ZW1wdHkpIHNvIHRvZ2dsaW5nIGl0IGRvZXNuJ3Qgc2hpZnQgdGhlXHJcbiAgIGJ1dHRvbiBiZWxvdy4gTGVmdCBwYWRkaW5nIG1hdGNoZXMgdGhlIGlucHV0J3Mgc28gdGhlIHRleHQgbGluZXMgdXAuICovXHJcbi5pbnB1dC1oaW50IHtcclxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gIG1pbi1oZWlnaHQ6IDEuNnJlbTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDAgMS4yNXJlbTtcclxuICBsaW5lLWhlaWdodDogMS42cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICBjb2xvcjogI2RiZGJkYjtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzM4N2E7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG59XHJcblxyXG4vKiBObyBoaW50IHRleHQ6IGtlZXAgdGhlIHJlc2VydmVkIHNwYWNlIGJ1dCBkcm9wIHRoZSB2aXNpYmxlIGJveC4gKi9cclxuLmlucHV0LWhpbnQ6ZW1wdHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4vKiAtLS0gV2VhdGhlciBkaXNwbGF5IGNvbnRhaW5lciAtLS0gKi9cclxuLndlYXRoZXItZGlzcGxheSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMzg3YTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvKiBSZXNlcnZlIHJvdWdobHkgdGhlIHBvcHVsYXRlZCBoZWlnaHQgc28gdGhlIGJveCBkb2Vzbid0IHJlc2l6ZSB3aGVuXHJcbiAgICAgd2VhdGhlciBsb2Fkcy4gRmxleCBjb2x1bW4gbGV0cyB0aGUgcGxhY2Vob2xkZXIgY2VudGVyIHdpdGhpbiBpdC4gKi9cclxuICBtaW4taGVpZ2h0OiAyNC41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuI3dlYXRoZXItcGxhY2Vob2xkZXIge1xyXG4gIC8qIGF1dG8gbWFyZ2lucyBjZW50ZXIgdGhlIHBsYWNlaG9sZGVyIGJvdGggdmVydGljYWxseSBhbmQgaG9yaXpvbnRhbGx5XHJcbiAgICAgaW4gdGhlIGZsZXggY29udGFpbmVyLiAqL1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgY29sb3I6ICNkYmRiZGI7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8qIExvYWQtdGltZSByZWFkb3V0IGJlbmVhdGggdGhlIHdlYXRoZXIgY2FyZC4gRm9udCBzaXplIG1hdGNoZXMgdGhlXHJcbiAgIHRlbXBlcmF0dXJlL2Nvb3JkaW5hdGVzIHN1YnRleHQuICovXHJcbi5sb2FkLXRpbWUge1xyXG4gIG1hcmdpbjogMXJlbSAwIDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4jbG9jYXRpb24ge1xyXG4gIG1hcmdpbjogMCAwIDAuMjVyZW07XHJcbiAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi8qIFRlbXAgKyBjb29yZGluYXRlczogc21hbGxlciBzdWJ0ZXh0IGJlbmVhdGggdGhlIGxvY2F0aW9uLCB3aXRoIGEgZGl2aWRlclxyXG4gICBzZXBhcmF0aW5nIGl0IGZyb20gdGhlIG1ldHJpYyBncmlkIGJlbG93LiAqL1xyXG4ubG9jYXRpb24tc3VidGV4dCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgb3BhY2l0eTogMC44NTtcclxufVxyXG5cclxuLmxvY2F0aW9uLXN1YnRleHQgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4vKiAtLS0gMngyIG1ldHJpYyBncmlkIC0tLSAqL1xyXG4ud2VhdGhlci1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgLyogU3BsaXQgdGhlIHNob3J0aGFuZCBzbyBob3Jpem9udGFsIHNwYWNpbmcgc3RheXMgcHV0IHdoaWxlIHRoZSByb3dzXHJcbiAgICAgKHRoZSBzdGFja2VkIGNlbGxzIGluIGVhY2ggY29sdW1uKSBzaXQgZnVydGhlciBhcGFydCB2ZXJ0aWNhbGx5LiAqL1xyXG4gIGNvbHVtbi1nYXA6IDEuNXJlbTtcclxuICByb3ctZ2FwOiAyLjVyZW07XHJcbn1cclxuXHJcbi53ZWF0aGVyLWNlbGwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4ud2VhdGhlci1jZWxsIHAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLyogU3RhdGljIGxhYmVsIHNpdHMgYmV0d2VlbiB0aGUgaWNvbiBhbmQgaXRzIHZhbHVlIGluIGVhY2ggY2VsbC4gKi9cclxuLndlYXRoZXItbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi8qIFdoaXRlIGNpcmN1bGFyIFwiY2hpcFwiIHNvIHRoZSBpY29ucyBzdGF5IGxlZ2libGUgb24gdGhlIGRhcmsgY29udGFpbmVyLiAqL1xyXG4ud2VhdGhlci1pY29uIHtcclxuICB3aWR0aDogNTZweDtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULGtDQUFrQztFQUNsQyw4REFBOEQ7RUFDOUQsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQSxxRUFBcUU7QUFDckU7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1o7c0VBQ29FO0VBQ3BFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEI7MENBQ3dDO0VBQ3hDLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7O3lFQUV5RTtBQUN6RTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQSxvRUFBb0U7QUFDcEU7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUEsc0NBQXNDO0FBQ3RDO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQjt3RUFDc0U7RUFDdEUsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTs2QkFDMkI7RUFDM0IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO3FDQUNxQztBQUNyQztFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiwwQkFBMEI7QUFDNUI7O0FBRUE7OENBQzhDO0FBQzlDO0VBQ0UscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixpREFBaUQ7RUFDakQsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQSw0QkFBNEI7QUFDNUI7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDO3VFQUNxRTtFQUNyRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQSxtRUFBbUU7QUFDbkU7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUEsMkVBQTJFO0FBQzNFO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICNjZmU4ZmYsICMzMDc0YjgpO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ2VudGVyZWQgY29sdW1uIHRoYXQgaG9sZHMgdGhlIHNlYXJjaCBmb3JtIGFuZCB0aGUgd2VhdGhlciBjYXJkLiAqL1xcclxcbi5hcHAge1xcclxcbiAgbWF4LXdpZHRoOiA2MDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0gU2VhcmNoIGZvcm0gLS0tICovXFxyXFxuI3NlYXJjaC13ZWF0aGVyLWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIGdhcDogMC43NXJlbTtcXHJcXG4gIC8qIE1hdGNoZXMgdGhlIHNlYXJjaOKGkmJ1dHRvbiBkaXN0YW5jZSAoMC43NSBnYXAgKyAxLjYgaGludCArIDAuNzUgZ2FwKSBzbyB0aGVcXHJcXG4gICAgIGJ1dHRvbiBzaXRzIGV2ZW5seSBiZXR3ZWVuIHRoZSBzZWFyY2ggYmFyIGFuZCB0aGUgd2VhdGhlciBjYXJkLiAqL1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMy4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoLWlucHV0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzM4N2E7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1pbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgY29sb3I6ICNkYmRiZGI7XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2gtaW5wdXQ6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogMnB4IHNvbGlkICNmZmY7XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2gtd2VhdGhlci1mb3JtIGJ1dHRvbiB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xcclxcbiAgLyogUmVzZXJ2ZSB0aGUgaG92ZXIgYm9yZGVyIHNwYWNlIHVwIGZyb250ICh0cmFuc3BhcmVudCkgc28gaG92ZXJpbmcgb25seVxcclxcbiAgICAgY2hhbmdlcyBpdHMgY29sb3VyLCBub3QgdGhlIGxheW91dC4gKi9cXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMzg3YTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoLXdlYXRoZXItZm9ybSBidXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MmU2NjtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLyogQWR2aXNvcnkgdHlwaW5nIGhpbnQgdW5kZXIgdGhlIHNlYXJjaCBpbnB1dCDigJQgZ3VpZGFuY2UsIG5vdCBhbiBlcnJvci5cXHJcXG4gICBSZXNlcnZlcyBpdHMgaGVpZ2h0IChtaW4taGVpZ2h0ICsgOmVtcHR5KSBzbyB0b2dnbGluZyBpdCBkb2Vzbid0IHNoaWZ0IHRoZVxcclxcbiAgIGJ1dHRvbiBiZWxvdy4gTGVmdCBwYWRkaW5nIG1hdGNoZXMgdGhlIGlucHV0J3Mgc28gdGhlIHRleHQgbGluZXMgdXAuICovXFxyXFxuLmlucHV0LWhpbnQge1xcclxcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEuNnJlbTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAwIDEuMjVyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS42cmVtO1xcclxcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xcclxcbiAgY29sb3I6ICNkYmRiZGI7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMzg3YTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTm8gaGludCB0ZXh0OiBrZWVwIHRoZSByZXNlcnZlZCBzcGFjZSBidXQgZHJvcCB0aGUgdmlzaWJsZSBib3guICovXFxyXFxuLmlucHV0LWhpbnQ6ZW1wdHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLSBXZWF0aGVyIGRpc3BsYXkgY29udGFpbmVyIC0tLSAqL1xcclxcbi53ZWF0aGVyLWRpc3BsYXkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMzg3YTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgLyogUmVzZXJ2ZSByb3VnaGx5IHRoZSBwb3B1bGF0ZWQgaGVpZ2h0IHNvIHRoZSBib3ggZG9lc24ndCByZXNpemUgd2hlblxcclxcbiAgICAgd2VhdGhlciBsb2Fkcy4gRmxleCBjb2x1bW4gbGV0cyB0aGUgcGxhY2Vob2xkZXIgY2VudGVyIHdpdGhpbiBpdC4gKi9cXHJcXG4gIG1pbi1oZWlnaHQ6IDI0LjVyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuI3dlYXRoZXItcGxhY2Vob2xkZXIge1xcclxcbiAgLyogYXV0byBtYXJnaW5zIGNlbnRlciB0aGUgcGxhY2Vob2xkZXIgYm90aCB2ZXJ0aWNhbGx5IGFuZCBob3Jpem9udGFsbHlcXHJcXG4gICAgIGluIHRoZSBmbGV4IGNvbnRhaW5lci4gKi9cXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gIGNvbG9yOiAjZGJkYmRiO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIExvYWQtdGltZSByZWFkb3V0IGJlbmVhdGggdGhlIHdlYXRoZXIgY2FyZC4gRm9udCBzaXplIG1hdGNoZXMgdGhlXFxyXFxuICAgdGVtcGVyYXR1cmUvY29vcmRpbmF0ZXMgc3VidGV4dC4gKi9cXHJcXG4ubG9hZC10aW1lIHtcXHJcXG4gIG1hcmdpbjogMXJlbSAwIDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2xvY2F0aW9uIHtcXHJcXG4gIG1hcmdpbjogMCAwIDAuMjVyZW07XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUZW1wICsgY29vcmRpbmF0ZXM6IHNtYWxsZXIgc3VidGV4dCBiZW5lYXRoIHRoZSBsb2NhdGlvbiwgd2l0aCBhIGRpdmlkZXJcXHJcXG4gICBzZXBhcmF0aW5nIGl0IGZyb20gdGhlIG1ldHJpYyBncmlkIGJlbG93LiAqL1xcclxcbi5sb2NhdGlvbi1zdWJ0ZXh0IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgb3BhY2l0eTogMC44NTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvY2F0aW9uLXN1YnRleHQgcCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLSAyeDIgbWV0cmljIGdyaWQgLS0tICovXFxyXFxuLndlYXRoZXItZ3JpZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIC8qIFNwbGl0IHRoZSBzaG9ydGhhbmQgc28gaG9yaXpvbnRhbCBzcGFjaW5nIHN0YXlzIHB1dCB3aGlsZSB0aGUgcm93c1xcclxcbiAgICAgKHRoZSBzdGFja2VkIGNlbGxzIGluIGVhY2ggY29sdW1uKSBzaXQgZnVydGhlciBhcGFydCB2ZXJ0aWNhbGx5LiAqL1xcclxcbiAgY29sdW1uLWdhcDogMS41cmVtO1xcclxcbiAgcm93LWdhcDogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1jZWxsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1jZWxsIHAge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTdGF0aWMgbGFiZWwgc2l0cyBiZXR3ZWVuIHRoZSBpY29uIGFuZCBpdHMgdmFsdWUgaW4gZWFjaCBjZWxsLiAqL1xcclxcbi53ZWF0aGVyLWxhYmVsIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi8qIFdoaXRlIGNpcmN1bGFyIFxcXCJjaGlwXFxcIiBzbyB0aGUgaWNvbnMgc3RheSBsZWdpYmxlIG9uIHRoZSBkYXJrIGNvbnRhaW5lci4gKi9cXHJcXG4ud2VhdGhlci1pY29uIHtcXHJcXG4gIHdpZHRoOiA1NnB4O1xcclxcbiAgaGVpZ2h0OiA1NnB4O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmc6IDZweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBvYmplY3QtZml0OiBjb250YWluO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js!./src/styles.css\n\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

"use strict";
eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzPzI0ZmIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/runtime/api.js\n\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
(module) {

"use strict";
eval("{\n\nmodule.exports = function (item) {\n  var content = item[1];\n  var cssMapping = item[3];\n  if (!cssMapping) {\n    return content;\n  }\n  if (typeof btoa === \"function\") {\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n    var sourceMapping = \"/*# \".concat(data, \" */\");\n    return [content].concat([sourceMapping]).join(\"\\n\");\n  }\n  return [content].join(\"\\n\");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzP2FmMTIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/runtime/sourceMaps.js\n\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzLmNzcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSx1RkFBTyxVQUFVLHVGQUFPLG1CQUFtQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi13ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles.css\n\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

"use strict";
eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanM/MmRiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\n\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

"use strict";
eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanM/YjIxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/style-loader/dist/runtime/insertBySelector.js\n\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcz9kZTZjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/style-loader/dist/runtime/insertStyleElement.js\n\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanM/ZGRjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\n\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzP2U0NzkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/style-loader/dist/runtime/styleDomAPI.js\n\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzPzFkZGUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/style-loader/dist/runtime/styleTagTransform.js\n\n}");

/***/ },

/***/ "./src/icons lazy recursive ^\\.\\/.*\\.svg$ referencedExports: default"
/*!******************************************************************************************!*\
  !*** ./src/icons/ lazy ^\.\/.*\.svg$ referencedExports: default strict namespace object ***!
  \******************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./clear-day.svg": [
		"./src/icons/clear-day.svg",
		[
			"src_icons_clear-day_svg"
		]
	],
	"./clear-night.svg": [
		"./src/icons/clear-night.svg",
		[
			"src_icons_clear-night_svg"
		]
	],
	"./cloudy.svg": [
		"./src/icons/cloudy.svg",
		[
			"src_icons_cloudy_svg"
		]
	],
	"./fog.svg": [
		"./src/icons/fog.svg",
		[
			"src_icons_fog_svg"
		]
	],
	"./hail.svg": [
		"./src/icons/hail.svg",
		[
			"src_icons_hail_svg"
		]
	],
	"./humidity.svg": [
		"./src/icons/humidity.svg",
		[
			"src_icons_humidity_svg"
		]
	],
	"./partly-cloudy-day.svg": [
		"./src/icons/partly-cloudy-day.svg",
		[
			"src_icons_partly-cloudy-day_svg"
		]
	],
	"./partly-cloudy-night.svg": [
		"./src/icons/partly-cloudy-night.svg",
		[
			"src_icons_partly-cloudy-night_svg"
		]
	],
	"./rain-snow-showers-day.svg": [
		"./src/icons/rain-snow-showers-day.svg",
		[
			"src_icons_rain-snow-showers-day_svg"
		]
	],
	"./rain-snow-showers-night.svg": [
		"./src/icons/rain-snow-showers-night.svg",
		[
			"src_icons_rain-snow-showers-night_svg"
		]
	],
	"./rain-snow.svg": [
		"./src/icons/rain-snow.svg",
		[
			"src_icons_rain-snow_svg"
		]
	],
	"./rain.svg": [
		"./src/icons/rain.svg",
		[
			"src_icons_rain_svg"
		]
	],
	"./showers-day.svg": [
		"./src/icons/showers-day.svg",
		[
			"src_icons_showers-day_svg"
		]
	],
	"./showers-night.svg": [
		"./src/icons/showers-night.svg",
		[
			"src_icons_showers-night_svg"
		]
	],
	"./sleet.svg": [
		"./src/icons/sleet.svg",
		[
			"src_icons_sleet_svg"
		]
	],
	"./snow-showers-day.svg": [
		"./src/icons/snow-showers-day.svg",
		[
			"src_icons_snow-showers-day_svg"
		]
	],
	"./snow-showers-night.svg": [
		"./src/icons/snow-showers-night.svg",
		[
			"src_icons_snow-showers-night_svg"
		]
	],
	"./snow.svg": [
		"./src/icons/snow.svg",
		[
			"src_icons_snow_svg"
		]
	],
	"./thunder-rain.svg": [
		"./src/icons/thunder-rain.svg",
		[
			"src_icons_thunder-rain_svg"
		]
	],
	"./thunder-showers-day.svg": [
		"./src/icons/thunder-showers-day.svg",
		[
			"src_icons_thunder-showers-day_svg"
		]
	],
	"./thunder-showers-night.svg": [
		"./src/icons/thunder-showers-night.svg",
		[
			"src_icons_thunder-showers-night_svg"
		]
	],
	"./thunder.svg": [
		"./src/icons/thunder.svg",
		[
			"src_icons_thunder_svg"
		]
	],
	"./wind.svg": [
		"./src/icons/wind.svg",
		[
			"src_icons_wind_svg"
		]
	]
};
function webpackAsyncContext(req) {
	try {
		if(!__webpack_require__.o(map, req)) {
			return Promise.resolve().then(() => {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
});
		}
	} catch(err) {
		return Promise.reject(err);
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1][0]).then(() => (__webpack_require__.t(id, 1 | 16)));
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src/icons lazy recursive ^\\.\\/.*\\.svg$ referencedExports: default";
module.exports = webpackAsyncContext;

/***/ },

/***/ "./src/displayController.js"
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayController: () => (/* binding */ displayController)\n/* harmony export */ });\n/* harmony import */ var _weatherAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherAPI.js */ \"./src/weatherAPI.js\");\n\r\n\r\n/**\r\n * Loads the SVG icon matching a Visual Crossing condition slug and points an\r\n * <img> at it. Uses a webpack dynamic import(), so each icon is its own chunk\r\n * fetched only when first needed rather than bundled up front.\r\n *\r\n * @param {HTMLImageElement} imgElement - The <img> to update.\r\n * @param {?string} iconName - Condition slug (e.g. \"rain\"); null clears the icon.\r\n * @returns {Promise<void>}\r\n */\r\nasync function setWeatherIcon(imgElement, iconName) {\r\n  if (!iconName) {\r\n    imgElement.removeAttribute(\"src\");\r\n    imgElement.alt = \"\";\r\n    return;\r\n  }\r\n\r\n  try {\r\n    // Template-literal import tells webpack to bundle every svg under ./icons/\r\n    // as separate, load-on-demand chunks.\r\n    const { default: iconUrl } = await __webpack_require__(\"./src/icons lazy recursive ^\\\\.\\\\/.*\\\\.svg$ referencedExports: default\")(`./${iconName}.svg`);\r\n    imgElement.src = iconUrl;\r\n    imgElement.alt = iconName.replace(/-/g, \" \"); // \"partly-cloudy-day\" -> \"partly cloudy day\"\r\n  } catch {\r\n    // Unrecognized condition slug: leave the image blank instead of breaking.\r\n    imgElement.removeAttribute(\"src\");\r\n    imgElement.alt = \"\";\r\n  }\r\n}\r\n\r\n/**\r\n * Builds a human-readable sentence about the upcoming hour's weather,\r\n * e.g. \"65% chance of rain\".\r\n *\r\n * @param {Object} nextHour - The `nextHour` slice of the normalized weather data.\r\n * @returns {string} A sentence describing the next hour.\r\n */\r\nfunction describeNextHour(nextHour) {\r\n  const chance = nextHour.precipitationChance;\r\n\r\n  if (chance > 0) {\r\n    // precipitationType may be null (API didn't specify) — fall back to a generic word.\r\n    const type = nextHour.precipitationType || \"precipitation\";\r\n    return `${chance}% chance of ${type}`;\r\n  }\r\n\r\n  // No precipitation expected: describe the forecasted conditions instead.\r\n  return nextHour.conditions\r\n    ? `${nextHour.conditions} expected`\r\n    : \"No precipitation expected\";\r\n}\r\n\r\n/**\r\n * Fetches weather for a location and renders it into the page's DOM elements.\r\n * Shows a loading placeholder while fetching and an error message on failure;\r\n * never throws, so the caller doesn't need its own error handling.\r\n *\r\n * @param {string} location - A place name, address, or \"lat,lon\" string.\r\n * @returns {Promise<void>}\r\n */\r\nasync function displayWeather(location) {\r\n  // The container shows one of two states: a placeholder/status message, or the\r\n  // populated weather layout. We toggle between them with the `.hidden` class.\r\n  const placeholderElement = document.getElementById(\"weather-placeholder\");\r\n  const contentElement = document.getElementById(\"weather-content\");\r\n\r\n  // Data fields inside the populated layout.\r\n  const locationElement = document.getElementById(\"location\");\r\n  const temperatureElement = document.getElementById(\"temperature\");\r\n  const coordinatesElement = document.getElementById(\"coordinates\");\r\n  const humidityElement = document.getElementById(\"humidity\");\r\n  const windSpeedElement = document.getElementById(\"wind-speed\");\r\n  const currentConditionsElement =\r\n    document.getElementById(\"current-conditions\");\r\n  const nextHourElement = document.getElementById(\"next-hour\");\r\n  const currentIconElement = document.getElementById(\"current-icon\");\r\n  const nextHourIconElement = document.getElementById(\"next-hour-icon\");\r\n  const loadTimeElement = document.getElementById(\"load-time\");\r\n\r\n  try {\r\n    // Time the round-trip from submission to the API returning data.\r\n    const start = performance.now();\r\n    loadTimeElement.textContent = \"\";\r\n\r\n    // While fetching, fall back to the placeholder area with a loading note.\r\n    contentElement.classList.add(\"hidden\");\r\n    placeholderElement.classList.remove(\"hidden\");\r\n    placeholderElement.textContent = \"Loading…\";\r\n\r\n    const weather = await _weatherAPI_js__WEBPACK_IMPORTED_MODULE_0__.weatherAPI.getWeather(location);\r\n    const elapsedSeconds = ((performance.now() - start) / 1000).toFixed(2);\r\n\r\n    // Returns `fallback` for null/undefined/empty/NaN values, otherwise the value.\r\n    const safeText = (value, fallback = \"—\") => {\r\n      return value == null || value === \"\" || Number.isNaN(value)\r\n        ? fallback\r\n        : value;\r\n    };\r\n\r\n    // Grid-cell labels live in the markup (.weather-label); set only values here.\r\n    // Location/temperature/coordinates aren't grid cells and have no labels.\r\n    locationElement.textContent = safeText(weather.resolvedLocation);\r\n    temperatureElement.textContent = `${safeText(weather.temperature)} °C`;\r\n    coordinatesElement.textContent = `${safeText(weather.coordinates.latitude)}, ${safeText(weather.coordinates.longitude)}`;\r\n    humidityElement.textContent = `${safeText(weather.humidity)} %`;\r\n    windSpeedElement.textContent = `${safeText(weather.windSpeed)} km/h`;\r\n    currentConditionsElement.textContent = safeText(weather.conditions, \"N/A\");\r\n    nextHourElement.textContent = describeNextHour(weather.nextHour);\r\n\r\n    // Swap in the live condition icons (dynamically imported). The humidity and\r\n    // wind icons are static and set directly in the template.\r\n    await setWeatherIcon(currentIconElement, weather.icon);\r\n    await setWeatherIcon(nextHourIconElement, weather.nextHour.icon);\r\n\r\n    // Reveal the populated layout.\r\n    placeholderElement.classList.add(\"hidden\");\r\n    contentElement.classList.remove(\"hidden\");\r\n\r\n    loadTimeElement.textContent = `Weather data loaded in ${elapsedSeconds}s`;\r\n  } catch (error) {\r\n    console.error(\"Error displaying weather:\", error);\r\n    // Keep the layout hidden and surface the problem in the placeholder spot.\r\n    contentElement.classList.add(\"hidden\");\r\n    placeholderElement.classList.remove(\"hidden\");\r\n    placeholderElement.textContent =\r\n      \"Couldn't fetch weather for that location. Please try another search.\";\r\n    loadTimeElement.textContent = \"\";\r\n  }\r\n}\r\n\r\nconst displayController = { displayWeather };\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGlzcGxheUNvbnRyb2xsZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxrQkFBa0I7QUFDN0IsV0FBVyxTQUFTLHlDQUF5QztBQUM3RCxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUJBQW1CLFFBQVEsOEZBQU8sR0FBUyxFQUFFLFNBQVMsS0FBSyxDQUFDO0FBQ3hFO0FBQ0Esa0RBQWtEO0FBQ2xELElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU8sY0FBYyxLQUFLO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxxQkFBcUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHNEQUFVO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0Esd0NBQXdDLCtCQUErQjtBQUN2RSx3Q0FBd0MsdUNBQXVDLElBQUksd0NBQXdDO0FBQzNILHFDQUFxQyw0QkFBNEI7QUFDakUsc0NBQXNDLDZCQUE2QjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsZUFBZTtBQUMzRSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyw0QkFBNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYnBhY2stdGVtcGxhdGUvLi9zcmMvZGlzcGxheUNvbnRyb2xsZXIuanM/YWYyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3ZWF0aGVyQVBJIH0gZnJvbSBcIi4vd2VhdGhlckFQSS5qc1wiO1xyXG5cclxuLyoqXHJcbiAqIExvYWRzIHRoZSBTVkcgaWNvbiBtYXRjaGluZyBhIFZpc3VhbCBDcm9zc2luZyBjb25kaXRpb24gc2x1ZyBhbmQgcG9pbnRzIGFuXHJcbiAqIDxpbWc+IGF0IGl0LiBVc2VzIGEgd2VicGFjayBkeW5hbWljIGltcG9ydCgpLCBzbyBlYWNoIGljb24gaXMgaXRzIG93biBjaHVua1xyXG4gKiBmZXRjaGVkIG9ubHkgd2hlbiBmaXJzdCBuZWVkZWQgcmF0aGVyIHRoYW4gYnVuZGxlZCB1cCBmcm9udC5cclxuICpcclxuICogQHBhcmFtIHtIVE1MSW1hZ2VFbGVtZW50fSBpbWdFbGVtZW50IC0gVGhlIDxpbWc+IHRvIHVwZGF0ZS5cclxuICogQHBhcmFtIHs/c3RyaW5nfSBpY29uTmFtZSAtIENvbmRpdGlvbiBzbHVnIChlLmcuIFwicmFpblwiKTsgbnVsbCBjbGVhcnMgdGhlIGljb24uXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gc2V0V2VhdGhlckljb24oaW1nRWxlbWVudCwgaWNvbk5hbWUpIHtcclxuICBpZiAoIWljb25OYW1lKSB7XHJcbiAgICBpbWdFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcInNyY1wiKTtcclxuICAgIGltZ0VsZW1lbnQuYWx0ID0gXCJcIjtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICAvLyBUZW1wbGF0ZS1saXRlcmFsIGltcG9ydCB0ZWxscyB3ZWJwYWNrIHRvIGJ1bmRsZSBldmVyeSBzdmcgdW5kZXIgLi9pY29ucy9cclxuICAgIC8vIGFzIHNlcGFyYXRlLCBsb2FkLW9uLWRlbWFuZCBjaHVua3MuXHJcbiAgICBjb25zdCB7IGRlZmF1bHQ6IGljb25VcmwgfSA9IGF3YWl0IGltcG9ydChgLi9pY29ucy8ke2ljb25OYW1lfS5zdmdgKTtcclxuICAgIGltZ0VsZW1lbnQuc3JjID0gaWNvblVybDtcclxuICAgIGltZ0VsZW1lbnQuYWx0ID0gaWNvbk5hbWUucmVwbGFjZSgvLS9nLCBcIiBcIik7IC8vIFwicGFydGx5LWNsb3VkeS1kYXlcIiAtPiBcInBhcnRseSBjbG91ZHkgZGF5XCJcclxuICB9IGNhdGNoIHtcclxuICAgIC8vIFVucmVjb2duaXplZCBjb25kaXRpb24gc2x1ZzogbGVhdmUgdGhlIGltYWdlIGJsYW5rIGluc3RlYWQgb2YgYnJlYWtpbmcuXHJcbiAgICBpbWdFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcInNyY1wiKTtcclxuICAgIGltZ0VsZW1lbnQuYWx0ID0gXCJcIjtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBCdWlsZHMgYSBodW1hbi1yZWFkYWJsZSBzZW50ZW5jZSBhYm91dCB0aGUgdXBjb21pbmcgaG91cidzIHdlYXRoZXIsXHJcbiAqIGUuZy4gXCI2NSUgY2hhbmNlIG9mIHJhaW5cIi5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IG5leHRIb3VyIC0gVGhlIGBuZXh0SG91cmAgc2xpY2Ugb2YgdGhlIG5vcm1hbGl6ZWQgd2VhdGhlciBkYXRhLlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIHNlbnRlbmNlIGRlc2NyaWJpbmcgdGhlIG5leHQgaG91ci5cclxuICovXHJcbmZ1bmN0aW9uIGRlc2NyaWJlTmV4dEhvdXIobmV4dEhvdXIpIHtcclxuICBjb25zdCBjaGFuY2UgPSBuZXh0SG91ci5wcmVjaXBpdGF0aW9uQ2hhbmNlO1xyXG5cclxuICBpZiAoY2hhbmNlID4gMCkge1xyXG4gICAgLy8gcHJlY2lwaXRhdGlvblR5cGUgbWF5IGJlIG51bGwgKEFQSSBkaWRuJ3Qgc3BlY2lmeSkg4oCUIGZhbGwgYmFjayB0byBhIGdlbmVyaWMgd29yZC5cclxuICAgIGNvbnN0IHR5cGUgPSBuZXh0SG91ci5wcmVjaXBpdGF0aW9uVHlwZSB8fCBcInByZWNpcGl0YXRpb25cIjtcclxuICAgIHJldHVybiBgJHtjaGFuY2V9JSBjaGFuY2Ugb2YgJHt0eXBlfWA7XHJcbiAgfVxyXG5cclxuICAvLyBObyBwcmVjaXBpdGF0aW9uIGV4cGVjdGVkOiBkZXNjcmliZSB0aGUgZm9yZWNhc3RlZCBjb25kaXRpb25zIGluc3RlYWQuXHJcbiAgcmV0dXJuIG5leHRIb3VyLmNvbmRpdGlvbnNcclxuICAgID8gYCR7bmV4dEhvdXIuY29uZGl0aW9uc30gZXhwZWN0ZWRgXHJcbiAgICA6IFwiTm8gcHJlY2lwaXRhdGlvbiBleHBlY3RlZFwiO1xyXG59XHJcblxyXG4vKipcclxuICogRmV0Y2hlcyB3ZWF0aGVyIGZvciBhIGxvY2F0aW9uIGFuZCByZW5kZXJzIGl0IGludG8gdGhlIHBhZ2UncyBET00gZWxlbWVudHMuXHJcbiAqIFNob3dzIGEgbG9hZGluZyBwbGFjZWhvbGRlciB3aGlsZSBmZXRjaGluZyBhbmQgYW4gZXJyb3IgbWVzc2FnZSBvbiBmYWlsdXJlO1xyXG4gKiBuZXZlciB0aHJvd3MsIHNvIHRoZSBjYWxsZXIgZG9lc24ndCBuZWVkIGl0cyBvd24gZXJyb3IgaGFuZGxpbmcuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiAtIEEgcGxhY2UgbmFtZSwgYWRkcmVzcywgb3IgXCJsYXQsbG9uXCIgc3RyaW5nLlxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyKGxvY2F0aW9uKSB7XHJcbiAgLy8gVGhlIGNvbnRhaW5lciBzaG93cyBvbmUgb2YgdHdvIHN0YXRlczogYSBwbGFjZWhvbGRlci9zdGF0dXMgbWVzc2FnZSwgb3IgdGhlXHJcbiAgLy8gcG9wdWxhdGVkIHdlYXRoZXIgbGF5b3V0LiBXZSB0b2dnbGUgYmV0d2VlbiB0aGVtIHdpdGggdGhlIGAuaGlkZGVuYCBjbGFzcy5cclxuICBjb25zdCBwbGFjZWhvbGRlckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItcGxhY2Vob2xkZXJcIik7XHJcbiAgY29uc3QgY29udGVudEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItY29udGVudFwiKTtcclxuXHJcbiAgLy8gRGF0YSBmaWVsZHMgaW5zaWRlIHRoZSBwb3B1bGF0ZWQgbGF5b3V0LlxyXG4gIGNvbnN0IGxvY2F0aW9uRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25cIik7XHJcbiAgY29uc3QgdGVtcGVyYXR1cmVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wZXJhdHVyZVwiKTtcclxuICBjb25zdCBjb29yZGluYXRlc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvb3JkaW5hdGVzXCIpO1xyXG4gIGNvbnN0IGh1bWlkaXR5RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaHVtaWRpdHlcIik7XHJcbiAgY29uc3Qgd2luZFNwZWVkRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2luZC1zcGVlZFwiKTtcclxuICBjb25zdCBjdXJyZW50Q29uZGl0aW9uc0VsZW1lbnQgPVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LWNvbmRpdGlvbnNcIik7XHJcbiAgY29uc3QgbmV4dEhvdXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0LWhvdXJcIik7XHJcbiAgY29uc3QgY3VycmVudEljb25FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LWljb25cIik7XHJcbiAgY29uc3QgbmV4dEhvdXJJY29uRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV4dC1ob3VyLWljb25cIik7XHJcbiAgY29uc3QgbG9hZFRpbWVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkLXRpbWVcIik7XHJcblxyXG4gIHRyeSB7XHJcbiAgICAvLyBUaW1lIHRoZSByb3VuZC10cmlwIGZyb20gc3VibWlzc2lvbiB0byB0aGUgQVBJIHJldHVybmluZyBkYXRhLlxyXG4gICAgY29uc3Qgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgIGxvYWRUaW1lRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XHJcblxyXG4gICAgLy8gV2hpbGUgZmV0Y2hpbmcsIGZhbGwgYmFjayB0byB0aGUgcGxhY2Vob2xkZXIgYXJlYSB3aXRoIGEgbG9hZGluZyBub3RlLlxyXG4gICAgY29udGVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgIHBsYWNlaG9sZGVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgcGxhY2Vob2xkZXJFbGVtZW50LnRleHRDb250ZW50ID0gXCJMb2FkaW5n4oCmXCI7XHJcblxyXG4gICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IHdlYXRoZXJBUEkuZ2V0V2VhdGhlcihsb2NhdGlvbik7XHJcbiAgICBjb25zdCBlbGFwc2VkU2Vjb25kcyA9ICgocGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydCkgLyAxMDAwKS50b0ZpeGVkKDIpO1xyXG5cclxuICAgIC8vIFJldHVybnMgYGZhbGxiYWNrYCBmb3IgbnVsbC91bmRlZmluZWQvZW1wdHkvTmFOIHZhbHVlcywgb3RoZXJ3aXNlIHRoZSB2YWx1ZS5cclxuICAgIGNvbnN0IHNhZmVUZXh0ID0gKHZhbHVlLCBmYWxsYmFjayA9IFwi4oCUXCIpID0+IHtcclxuICAgICAgcmV0dXJuIHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09IFwiXCIgfHwgTnVtYmVyLmlzTmFOKHZhbHVlKVxyXG4gICAgICAgID8gZmFsbGJhY2tcclxuICAgICAgICA6IHZhbHVlO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBHcmlkLWNlbGwgbGFiZWxzIGxpdmUgaW4gdGhlIG1hcmt1cCAoLndlYXRoZXItbGFiZWwpOyBzZXQgb25seSB2YWx1ZXMgaGVyZS5cclxuICAgIC8vIExvY2F0aW9uL3RlbXBlcmF0dXJlL2Nvb3JkaW5hdGVzIGFyZW4ndCBncmlkIGNlbGxzIGFuZCBoYXZlIG5vIGxhYmVscy5cclxuICAgIGxvY2F0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IHNhZmVUZXh0KHdlYXRoZXIucmVzb2x2ZWRMb2NhdGlvbik7XHJcbiAgICB0ZW1wZXJhdHVyZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtzYWZlVGV4dCh3ZWF0aGVyLnRlbXBlcmF0dXJlKX0gwrBDYDtcclxuICAgIGNvb3JkaW5hdGVzRWxlbWVudC50ZXh0Q29udGVudCA9IGAke3NhZmVUZXh0KHdlYXRoZXIuY29vcmRpbmF0ZXMubGF0aXR1ZGUpfSwgJHtzYWZlVGV4dCh3ZWF0aGVyLmNvb3JkaW5hdGVzLmxvbmdpdHVkZSl9YDtcclxuICAgIGh1bWlkaXR5RWxlbWVudC50ZXh0Q29udGVudCA9IGAke3NhZmVUZXh0KHdlYXRoZXIuaHVtaWRpdHkpfSAlYDtcclxuICAgIHdpbmRTcGVlZEVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtzYWZlVGV4dCh3ZWF0aGVyLndpbmRTcGVlZCl9IGttL2hgO1xyXG4gICAgY3VycmVudENvbmRpdGlvbnNFbGVtZW50LnRleHRDb250ZW50ID0gc2FmZVRleHQod2VhdGhlci5jb25kaXRpb25zLCBcIk4vQVwiKTtcclxuICAgIG5leHRIb3VyRWxlbWVudC50ZXh0Q29udGVudCA9IGRlc2NyaWJlTmV4dEhvdXIod2VhdGhlci5uZXh0SG91cik7XHJcblxyXG4gICAgLy8gU3dhcCBpbiB0aGUgbGl2ZSBjb25kaXRpb24gaWNvbnMgKGR5bmFtaWNhbGx5IGltcG9ydGVkKS4gVGhlIGh1bWlkaXR5IGFuZFxyXG4gICAgLy8gd2luZCBpY29ucyBhcmUgc3RhdGljIGFuZCBzZXQgZGlyZWN0bHkgaW4gdGhlIHRlbXBsYXRlLlxyXG4gICAgYXdhaXQgc2V0V2VhdGhlckljb24oY3VycmVudEljb25FbGVtZW50LCB3ZWF0aGVyLmljb24pO1xyXG4gICAgYXdhaXQgc2V0V2VhdGhlckljb24obmV4dEhvdXJJY29uRWxlbWVudCwgd2VhdGhlci5uZXh0SG91ci5pY29uKTtcclxuXHJcbiAgICAvLyBSZXZlYWwgdGhlIHBvcHVsYXRlZCBsYXlvdXQuXHJcbiAgICBwbGFjZWhvbGRlckVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgIGNvbnRlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcblxyXG4gICAgbG9hZFRpbWVFbGVtZW50LnRleHRDb250ZW50ID0gYFdlYXRoZXIgZGF0YSBsb2FkZWQgaW4gJHtlbGFwc2VkU2Vjb25kc31zYDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRpc3BsYXlpbmcgd2VhdGhlcjpcIiwgZXJyb3IpO1xyXG4gICAgLy8gS2VlcCB0aGUgbGF5b3V0IGhpZGRlbiBhbmQgc3VyZmFjZSB0aGUgcHJvYmxlbSBpbiB0aGUgcGxhY2Vob2xkZXIgc3BvdC5cclxuICAgIGNvbnRlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICBwbGFjZWhvbGRlckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgIHBsYWNlaG9sZGVyRWxlbWVudC50ZXh0Q29udGVudCA9XHJcbiAgICAgIFwiQ291bGRuJ3QgZmV0Y2ggd2VhdGhlciBmb3IgdGhhdCBsb2NhdGlvbi4gUGxlYXNlIHRyeSBhbm90aGVyIHNlYXJjaC5cIjtcclxuICAgIGxvYWRUaW1lRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSB7IGRpc3BsYXlXZWF0aGVyIH07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/displayController.js\n\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _displayController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayController.js */ \"./src/displayController.js\");\n// Application entry point: wires the search form up to the weather display.\r\n\r\n\r\n\r\nconst form = document.getElementById(\"search-weather-form\");\r\nconst input = document.getElementById(\"search-input\");\r\nconst inputHint = document.getElementById(\"input-hint\");\r\n\r\n// Advisory nudge as the user types, escalating by how many comma-separated parts\r\n// they've entered. Comma — not whitespace — is the signal, since place names like\r\n// \"Meadow Lake\" contain spaces. (Heuristic: it counts separators, not which parts\r\n// are actually present.)\r\ninput.addEventListener(\"input\", () => {\r\n  const value = input.value.trim();\r\n  const commaCount = (value.match(/,/g) || []).length;\r\n\r\n  if (value === \"\" || commaCount >= 2) {\r\n    // Empty, or enough detail (city, region, country) — no nudge needed.\r\n    inputHint.textContent = \"\";\r\n  } else if (commaCount === 0) {\r\n    // A single term so far: suggest the full format.\r\n    inputHint.textContent =\r\n      \"For best results, enter a city, province/state, and country (e.g., 'Saskatoon, SK, Canada')\";\r\n  } else {\r\n    // One comma: they've added a level of detail; gently nudge for the last.\r\n    inputHint.textContent =\r\n      \"Add more detail (e.g. a country) for the most accurate result.\";\r\n  }\r\n});\r\n\r\n// On submit, fetch and render weather for the entered location.\r\nform.addEventListener(\"submit\", async (e) => {\r\n  e.preventDefault();\r\n  const location = input.value.trim();\r\n\r\n  if (!location) return; // Do not proceed if the input is empty\r\n\r\n  await _displayController_js__WEBPACK_IMPORTED_MODULE_1__.displayController.displayWeather(location);\r\n\r\n  input.value = \"\"; // Clear the input field after submission\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDc0I7QUFDcUM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EsUUFBUSxvRUFBaUI7QUFDekI7QUFDQSxvQkFBb0I7QUFDcEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcz80NTcwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEFwcGxpY2F0aW9uIGVudHJ5IHBvaW50OiB3aXJlcyB0aGUgc2VhcmNoIGZvcm0gdXAgdG8gdGhlIHdlYXRoZXIgZGlzcGxheS5cclxuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlDb250cm9sbGVyIH0gZnJvbSBcIi4vZGlzcGxheUNvbnRyb2xsZXIuanNcIjtcclxuXHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC13ZWF0aGVyLWZvcm1cIik7XHJcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtaW5wdXRcIik7XHJcbmNvbnN0IGlucHV0SGludCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtaGludFwiKTtcclxuXHJcbi8vIEFkdmlzb3J5IG51ZGdlIGFzIHRoZSB1c2VyIHR5cGVzLCBlc2NhbGF0aW5nIGJ5IGhvdyBtYW55IGNvbW1hLXNlcGFyYXRlZCBwYXJ0c1xyXG4vLyB0aGV5J3ZlIGVudGVyZWQuIENvbW1hIOKAlCBub3Qgd2hpdGVzcGFjZSDigJQgaXMgdGhlIHNpZ25hbCwgc2luY2UgcGxhY2UgbmFtZXMgbGlrZVxyXG4vLyBcIk1lYWRvdyBMYWtlXCIgY29udGFpbiBzcGFjZXMuIChIZXVyaXN0aWM6IGl0IGNvdW50cyBzZXBhcmF0b3JzLCBub3Qgd2hpY2ggcGFydHNcclxuLy8gYXJlIGFjdHVhbGx5IHByZXNlbnQuKVxyXG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IHZhbHVlID0gaW5wdXQudmFsdWUudHJpbSgpO1xyXG4gIGNvbnN0IGNvbW1hQ291bnQgPSAodmFsdWUubWF0Y2goLywvZykgfHwgW10pLmxlbmd0aDtcclxuXHJcbiAgaWYgKHZhbHVlID09PSBcIlwiIHx8IGNvbW1hQ291bnQgPj0gMikge1xyXG4gICAgLy8gRW1wdHksIG9yIGVub3VnaCBkZXRhaWwgKGNpdHksIHJlZ2lvbiwgY291bnRyeSkg4oCUIG5vIG51ZGdlIG5lZWRlZC5cclxuICAgIGlucHV0SGludC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgfSBlbHNlIGlmIChjb21tYUNvdW50ID09PSAwKSB7XHJcbiAgICAvLyBBIHNpbmdsZSB0ZXJtIHNvIGZhcjogc3VnZ2VzdCB0aGUgZnVsbCBmb3JtYXQuXHJcbiAgICBpbnB1dEhpbnQudGV4dENvbnRlbnQgPVxyXG4gICAgICBcIkZvciBiZXN0IHJlc3VsdHMsIGVudGVyIGEgY2l0eSwgcHJvdmluY2Uvc3RhdGUsIGFuZCBjb3VudHJ5IChlLmcuLCAnU2Fza2F0b29uLCBTSywgQ2FuYWRhJylcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gT25lIGNvbW1hOiB0aGV5J3ZlIGFkZGVkIGEgbGV2ZWwgb2YgZGV0YWlsOyBnZW50bHkgbnVkZ2UgZm9yIHRoZSBsYXN0LlxyXG4gICAgaW5wdXRIaW50LnRleHRDb250ZW50ID1cclxuICAgICAgXCJBZGQgbW9yZSBkZXRhaWwgKGUuZy4gYSBjb3VudHJ5KSBmb3IgdGhlIG1vc3QgYWNjdXJhdGUgcmVzdWx0LlwiO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyBPbiBzdWJtaXQsIGZldGNoIGFuZCByZW5kZXIgd2VhdGhlciBmb3IgdGhlIGVudGVyZWQgbG9jYXRpb24uXHJcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhc3luYyAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCBsb2NhdGlvbiA9IGlucHV0LnZhbHVlLnRyaW0oKTtcclxuXHJcbiAgaWYgKCFsb2NhdGlvbikgcmV0dXJuOyAvLyBEbyBub3QgcHJvY2VlZCBpZiB0aGUgaW5wdXQgaXMgZW1wdHlcclxuXHJcbiAgYXdhaXQgZGlzcGxheUNvbnRyb2xsZXIuZGlzcGxheVdlYXRoZXIobG9jYXRpb24pO1xyXG5cclxuICBpbnB1dC52YWx1ZSA9IFwiXCI7IC8vIENsZWFyIHRoZSBpbnB1dCBmaWVsZCBhZnRlciBzdWJtaXNzaW9uXHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ },

/***/ "./src/weatherAPI.js"
/*!***************************!*\
  !*** ./src/weatherAPI.js ***!
  \***************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   weatherAPI: () => (/* binding */ weatherAPI)\n/* harmony export */ });\n// Global variable to store the API key\r\nconst API_KEY = \"YJ7UHYK5GBBHC32JUHKHGJD97\";\r\n\r\n/**\r\n * Fetches the raw weather timeline payload for a location from the\r\n * Visual Crossing API.\r\n *\r\n * @param {string} location - A place name, address, or \"lat,lon\" string.\r\n * @returns {Promise<Object>} The unprocessed JSON response from the API.\r\n * @throws {Error} If the API responds with a non-OK status (e.g. unknown location).\r\n */\r\nasync function getWeatherData(location) {\r\n  const encodedLocation = encodeURIComponent(location);\r\n\r\n  const response = await fetch(\r\n    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodedLocation}?key=${API_KEY}&unitGroup=metric`,\r\n  );\r\n\r\n  if (!response.ok) {\r\n    throw new Error(`LOCATION NOT FOUND - status: ${response.status}`);\r\n  }\r\n\r\n  const data = await response.json();\r\n  return data;\r\n}\r\n\r\n/**\r\n * Distills the verbose API payload into a flat, UI-friendly shape,\r\n * defaulting any missing fields to null so the display layer can handle\r\n * them gracefully.\r\n *\r\n * @param {Object} weatherData - Raw response from {@link getWeatherData}.\r\n * @returns {?Object} A normalized weather summary, or null if no data was given.\r\n */\r\nfunction processWeatherData(weatherData) {\r\n  if (!weatherData) return null;\r\n\r\n  // The API nests hourly forecasts under each day; grab the first hour of today.\r\n  const nextHour = weatherData.days?.[0]?.hours?.[0] ?? null;\r\n\r\n  return {\r\n    resolvedLocation: weatherData.resolvedAddress,\r\n    temperature: weatherData.currentConditions?.temp ?? null,\r\n    conditions: weatherData.currentConditions?.conditions ?? null,\r\n    // Machine-readable condition slug (e.g. \"partly-cloudy-day\") used to pick an icon.\r\n    icon: weatherData.currentConditions?.icon ?? null,\r\n    coordinates: {\r\n      latitude: weatherData.latitude,\r\n      longitude: weatherData.longitude,\r\n    },\r\n    humidity: weatherData.currentConditions?.humidity ?? null,\r\n    windSpeed: weatherData.currentConditions?.windspeed ?? null,\r\n    nextHour: {\r\n      precipitationChance: nextHour?.precipprob ?? 0,\r\n      precipitationType: nextHour?.preciptype?.join(\", \") ?? null,\r\n      conditions: nextHour?.conditions ?? null,\r\n      icon: nextHour?.icon ?? null,\r\n    },\r\n  };\r\n}\r\n\r\n/**\r\n * Public entry point: fetches and normalizes weather for a location.\r\n * Logs and re-throws on failure so callers can surface the error to the user.\r\n *\r\n * @param {string} location - A place name, address, or \"lat,lon\" string.\r\n * @returns {Promise<?Object>} The normalized weather summary.\r\n * @throws {Error} Propagates any fetch/parse error after logging it.\r\n */\r\nasync function getWeather(location) {\r\n  try {\r\n    const weatherData = await getWeatherData(location);\r\n    return processWeatherData(weatherData);\r\n  } catch (error) {\r\n    console.error(\"Error fetching weather data:\", error);\r\n    throw error;\r\n  }\r\n}\r\n\r\nconst weatherAPI = { getWeather };\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvd2VhdGhlckFQSS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxpQkFBaUI7QUFDOUIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRkFBMkYsZ0JBQWdCLE9BQU8sUUFBUTtBQUMxSDtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsZ0JBQWdCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVEsaUNBQWlDLHFCQUFxQjtBQUN6RSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLGtCQUFrQjtBQUMvQixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08scUJBQXFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi13ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3dlYXRoZXJBUEkuanM/MmYxZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHbG9iYWwgdmFyaWFibGUgdG8gc3RvcmUgdGhlIEFQSSBrZXlcclxuY29uc3QgQVBJX0tFWSA9IFwiWUo3VUhZSzVHQkJIQzMySlVIS0hHSkQ5N1wiO1xyXG5cclxuLyoqXHJcbiAqIEZldGNoZXMgdGhlIHJhdyB3ZWF0aGVyIHRpbWVsaW5lIHBheWxvYWQgZm9yIGEgbG9jYXRpb24gZnJvbSB0aGVcclxuICogVmlzdWFsIENyb3NzaW5nIEFQSS5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIC0gQSBwbGFjZSBuYW1lLCBhZGRyZXNzLCBvciBcImxhdCxsb25cIiBzdHJpbmcuXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59IFRoZSB1bnByb2Nlc3NlZCBKU09OIHJlc3BvbnNlIGZyb20gdGhlIEFQSS5cclxuICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBBUEkgcmVzcG9uZHMgd2l0aCBhIG5vbi1PSyBzdGF0dXMgKGUuZy4gdW5rbm93biBsb2NhdGlvbikuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbikge1xyXG4gIGNvbnN0IGVuY29kZWRMb2NhdGlvbiA9IGVuY29kZVVSSUNvbXBvbmVudChsb2NhdGlvbik7XHJcblxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvJHtlbmNvZGVkTG9jYXRpb259P2tleT0ke0FQSV9LRVl9JnVuaXRHcm91cD1tZXRyaWNgLFxyXG4gICk7XHJcblxyXG4gIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgTE9DQVRJT04gTk9UIEZPVU5EIC0gc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEaXN0aWxscyB0aGUgdmVyYm9zZSBBUEkgcGF5bG9hZCBpbnRvIGEgZmxhdCwgVUktZnJpZW5kbHkgc2hhcGUsXHJcbiAqIGRlZmF1bHRpbmcgYW55IG1pc3NpbmcgZmllbGRzIHRvIG51bGwgc28gdGhlIGRpc3BsYXkgbGF5ZXIgY2FuIGhhbmRsZVxyXG4gKiB0aGVtIGdyYWNlZnVsbHkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB3ZWF0aGVyRGF0YSAtIFJhdyByZXNwb25zZSBmcm9tIHtAbGluayBnZXRXZWF0aGVyRGF0YX0uXHJcbiAqIEByZXR1cm5zIHs/T2JqZWN0fSBBIG5vcm1hbGl6ZWQgd2VhdGhlciBzdW1tYXJ5LCBvciBudWxsIGlmIG5vIGRhdGEgd2FzIGdpdmVuLlxyXG4gKi9cclxuZnVuY3Rpb24gcHJvY2Vzc1dlYXRoZXJEYXRhKHdlYXRoZXJEYXRhKSB7XHJcbiAgaWYgKCF3ZWF0aGVyRGF0YSkgcmV0dXJuIG51bGw7XHJcblxyXG4gIC8vIFRoZSBBUEkgbmVzdHMgaG91cmx5IGZvcmVjYXN0cyB1bmRlciBlYWNoIGRheTsgZ3JhYiB0aGUgZmlyc3QgaG91ciBvZiB0b2RheS5cclxuICBjb25zdCBuZXh0SG91ciA9IHdlYXRoZXJEYXRhLmRheXM/LlswXT8uaG91cnM/LlswXSA/PyBudWxsO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVzb2x2ZWRMb2NhdGlvbjogd2VhdGhlckRhdGEucmVzb2x2ZWRBZGRyZXNzLFxyXG4gICAgdGVtcGVyYXR1cmU6IHdlYXRoZXJEYXRhLmN1cnJlbnRDb25kaXRpb25zPy50ZW1wID8/IG51bGwsXHJcbiAgICBjb25kaXRpb25zOiB3ZWF0aGVyRGF0YS5jdXJyZW50Q29uZGl0aW9ucz8uY29uZGl0aW9ucyA/PyBudWxsLFxyXG4gICAgLy8gTWFjaGluZS1yZWFkYWJsZSBjb25kaXRpb24gc2x1ZyAoZS5nLiBcInBhcnRseS1jbG91ZHktZGF5XCIpIHVzZWQgdG8gcGljayBhbiBpY29uLlxyXG4gICAgaWNvbjogd2VhdGhlckRhdGEuY3VycmVudENvbmRpdGlvbnM/Lmljb24gPz8gbnVsbCxcclxuICAgIGNvb3JkaW5hdGVzOiB7XHJcbiAgICAgIGxhdGl0dWRlOiB3ZWF0aGVyRGF0YS5sYXRpdHVkZSxcclxuICAgICAgbG9uZ2l0dWRlOiB3ZWF0aGVyRGF0YS5sb25naXR1ZGUsXHJcbiAgICB9LFxyXG4gICAgaHVtaWRpdHk6IHdlYXRoZXJEYXRhLmN1cnJlbnRDb25kaXRpb25zPy5odW1pZGl0eSA/PyBudWxsLFxyXG4gICAgd2luZFNwZWVkOiB3ZWF0aGVyRGF0YS5jdXJyZW50Q29uZGl0aW9ucz8ud2luZHNwZWVkID8/IG51bGwsXHJcbiAgICBuZXh0SG91cjoge1xyXG4gICAgICBwcmVjaXBpdGF0aW9uQ2hhbmNlOiBuZXh0SG91cj8ucHJlY2lwcHJvYiA/PyAwLFxyXG4gICAgICBwcmVjaXBpdGF0aW9uVHlwZTogbmV4dEhvdXI/LnByZWNpcHR5cGU/LmpvaW4oXCIsIFwiKSA/PyBudWxsLFxyXG4gICAgICBjb25kaXRpb25zOiBuZXh0SG91cj8uY29uZGl0aW9ucyA/PyBudWxsLFxyXG4gICAgICBpY29uOiBuZXh0SG91cj8uaWNvbiA/PyBudWxsLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogUHVibGljIGVudHJ5IHBvaW50OiBmZXRjaGVzIGFuZCBub3JtYWxpemVzIHdlYXRoZXIgZm9yIGEgbG9jYXRpb24uXHJcbiAqIExvZ3MgYW5kIHJlLXRocm93cyBvbiBmYWlsdXJlIHNvIGNhbGxlcnMgY2FuIHN1cmZhY2UgdGhlIGVycm9yIHRvIHRoZSB1c2VyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gLSBBIHBsYWNlIG5hbWUsIGFkZHJlc3MsIG9yIFwibGF0LGxvblwiIHN0cmluZy5cclxuICogQHJldHVybnMge1Byb21pc2U8P09iamVjdD59IFRoZSBub3JtYWxpemVkIHdlYXRoZXIgc3VtbWFyeS5cclxuICogQHRocm93cyB7RXJyb3J9IFByb3BhZ2F0ZXMgYW55IGZldGNoL3BhcnNlIGVycm9yIGFmdGVyIGxvZ2dpbmcgaXQuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGxvY2F0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEobG9jYXRpb24pO1xyXG4gICAgcmV0dXJuIHByb2Nlc3NXZWF0aGVyRGF0YSh3ZWF0aGVyRGF0YSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB3ZWF0aGVyIGRhdGE6XCIsIGVycm9yKTtcclxuICAgIHRocm93IGVycm9yO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHdlYXRoZXJBUEkgPSB7IGdldFdlYXRoZXIgfTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/weatherAPI.js\n\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "odin-webpack-template:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkodin_webpack_template"] = self["webpackChunkodin_webpack_template"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;