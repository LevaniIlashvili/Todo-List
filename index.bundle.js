/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Lato-Regular.ttf */ "./src/Lato-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Lato-Black.ttf */ "./src/Lato-Black.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./Lato-Light.ttf */ "./src/Lato-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./Lato-Thin.ttf */ "./src/Lato-Thin.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./Lato-Bold.ttf */ "./src/Lato-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: latoRegular;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: latoBlack;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n@font-face {\n    font-family: latoLight;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n@font-face {\n    font-family: latoThin;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n@font-face {\n    font-family: latoBold;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\n\n:root {\n    --main-color: #C89FA3;\n    --secondary-color: #3ba395;\n    --font-color: #501f3a;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\n.wrapper {\n    display: grid;\n    grid-template-columns: 2fr 7fr;\n    grid-template-rows: 2fr 15fr 1fr;\n    min-height: 100vh;\n}\n\nheader {\n    padding: 10px 20px;\n    color: white;\n    background-color: var(--main-color);\n    font-family: latoBlack;\n    font-size: 22px;\n    grid-column: 1 / -1;\n    display: flex;\n    gap: 5px;\n\n}\n\n.task-icon {\n    width: 38px;\n    filter: invert(100%) sepia(99%) saturate(0%) hue-rotate(162deg) brightness(106%) contrast(101%);\n}\n\n.sidebar {\n    color: var(--font-color);\n    border-right: solid 1px var(--font-color);\n    font-family: latoThin;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    padding-top: 30px;\n    font-size: 18px;\n}\n\n.tasks-by-date {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#home, #today, #week {\n    display: none;\n}\n\n#home + label {\n    color: var(--font-color);\n    font-size: 30px;\n    font-family: latoLight;\n    cursor: pointer;\n}\n\n#home:hover + label {\n    font-family: latoRegular;\n    padding-left: 5px;\n}\n\n#home:checked + label {\n    font-family: latoRegular;\n    padding-left: 5px;\n}\n\n#today + label {\n    color: var(--font-color);\n    font-size: 30px;\n    font-family: latoLight;\n    cursor: pointer;\n}\n\n#today:hover + label {\n    font-family: latoRegular;\n    padding-left: 5px;\n}\n\n#today:checked + label {\n    font-family: latoRegular;\n    padding-left: 5px;\n}\n\n#week + label {\n    color: var(--font-color);\n    font-size: 30px;\n    font-family: latoLight;\n    cursor: pointer;\n}\n\n#week:hover + label {\n    font-family: latoRegular;\n    padding-left: 5px;\n}\n\n#week:checked + label {\n    font-family: latoRegular;\n    padding-left: 5px;\n}\n\n/* \"new project modal\" */\n.new-project-background {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0,0,0); \n    background-color: rgba(0,0,0,0.4);\n    backdrop-filter: blur(5px);\n}\n\n.new-project-modal {\n    background-color: #fefefe;\n    margin: 15vh auto; \n    width: 600px; \n    height: 200px;\n}\n\n.new-project-header {\n    font-size: 18px;\n    padding: 10px 15px;\n    font-family: latoRegular;\n    color: white;\n    background-color: var(--main-color);\n    display: flex;\n    gap: 10px;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.new-project-header h1 {\n    margin-top: -5px;\n    cursor: pointer;\n}\n\n.new-project-modal form {\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n}\n\n#new-project-title {\n    border: none;\n    font-size: 20px;\n    margin-bottom: 50px;\n}\n\n#new-project-title:focus {\n    outline: none;\n}\n\n.create-project {\n    border: solid 1px var(--secondary-color);\n    color: var(--secondary-color);\n    padding: 5px 20px;\n    border-radius: 4px;\n    cursor: pointer;\n    width: 70px;\n    margin-left: 250px;\n}\n\n.create-project:hover {\n    background-color: var(--secondary-color);\n    color: white;\n}\n\n.project-list {\n    font-family: latoRegular;\n    color: var(--font-color);\n    display: flex;\n    flex-direction: column;\n    font-size: 20px;\n    gap: 10px;\n}\n\n.project-list input {\n    display: none;\n}\n\n.project-list input:hover + label {\n    font-family: latoBold;\n    cursor: pointer;\n    padding-left: 5px;\n}\n\n.project-list input:checked + label {\n    font-family: latoBold;\n    cursor: pointer;\n    padding-left: 5px;   \n} \n\n\n\n\n\nmain {\n    color: var(--font-color);\n    padding: 50px;\n}\n\n.new-todo-background {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0,0,0); \n    background-color: rgba(0,0,0,0.4);\n    backdrop-filter: blur(5px);\n}\n\n.new-todo-modal {\n    background-color: #fefefe;\n    margin: 15vh auto; \n    width: 700px; \n    height: 430px;\n  }\n\n.new-todo-header {\n    font-size: 18px;\n    padding: 10px 15px;\n    font-family: latoRegular;\n    color: white;\n    background-color: var(--main-color);\n    display: flex;\n    gap: 10px;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.new-todo-header h1 {\n    margin-top: -5px;\n    cursor: pointer;\n}\n\n.new-todo-modal form {\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n}\n\n#new-todo-title, #new-todo-details {\n    border: none;\n    font-size: 20px;\n    margin-bottom: 20px;\n}\n\n#new-todo-title:focus, #new-todo-details {\n    outline: none;\n}\n\n#new-todo-details {\n    resize: none;\n    font-family: latoRegular;\n}\n\n.new-todo-due-container {\n    font-size: 20px;\n    font-family: latoRegular;\n    display: flex;\n    gap: 15px;\n    margin-bottom: 10px;\n}\n\n.new-todo-due-container input {\n    padding: 5px;\n    border-radius: 5px;\n    border: 1px solid #3ba395;\n    color: #3ba395;\n}\n\n.new-todo-priority-container {\n    display: flex;\n    font-family: latoRegular;\n    font-size: 20px;\n    align-items: center;\n    gap: 10px;\n}\n\n/* bellow is priority styling */\n#new-todo-low, #new-todo-medium, #new-todo-high {\n    display: none;\n}\n\n#new-todo-low + label {\n    font-size: 12px;\n    color: green;\n    border: solid 1px green;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\n#new-todo-low:hover + label {\n    background-color: green;\n    color: white;\n}\n\n#new-todo-low:checked + label {\n    background-color: green;\n    color: white;\n}\n\n#new-todo-medium + label {\n    font-size: 12px;\n    color: orange;\n    border: solid 1px orange;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\n#new-todo-medium:hover + label {\n    background-color: orange;\n    color: white;\n}\n\n#new-todo-medium:checked + label {\n    background-color: orange;\n    color: white;\n}\n\n#new-todo-high + label {\n    font-size: 12px;\n    color: red;\n    border: solid 1px red;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\n#new-todo-high:hover + label {\n    background-color: red;\n    color: white;\n}\n\n#new-todo-high:checked + label {\n    background-color: red;\n    color: white;\n}\n\n.create-todo {\n    border: solid 1px var(--secondary-color);\n    color: var(--secondary-color);\n    padding: 5px 20px;\n    border-radius: 4px;\n    cursor: pointer;\n    margin-left: auto;\n}\n\n.create-todo:hover {\n    background-color: var(--secondary-color);\n    color: white;\n}\n\n.add-task {\n    color: var(--font-color);\n    border: none;\n    cursor: pointer;\n    font-size: 20px;\n    padding: 10px 20px;\n    border-radius: 3px;\n}\n\n.add-task:hover {\n    background-color: rgb(216, 212, 212);\n}\n\n.todo-container {\n    width: 100%;\n    height: 50px;\n    display: flex;\n    align-items: center;\n}\n\n.todo-title {\n    font-family: latoLight  ;\n    font-size: 20px;\n    margin-left: 10px;\n}\n\nfooter {\n    font-family: latoLight;\n    border: solid 1px var(--font-color);\n    grid-column: 1 / -1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.add-project {\n    border: none;\n    color: var(--font-color);\n    font-size: 18px;\n    cursor: pointer;\n    padding: 10px 10px;\n    border-radius: 3px;\n}\n\n.add-project:hover {\n    background-color: rgb(216, 212, 212);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: latoRegular;\n    src: url(./Lato-Regular.ttf);\n}\n\n@font-face {\n    font-family: latoBlack;\n    src: url(./Lato-Black.ttf);\n}\n\n@font-face {\n    font-family: latoLight;\n    src: url(./Lato-Light.ttf);\n}\n\n@font-face {\n    font-family: latoThin;\n    src: url(./Lato-Thin.ttf);\n}\n\n@font-face {\n    font-family: latoBold;\n    src: url(./Lato-Bold.ttf);\n}\n\n:root {\n    --main-color: #C89FA3;\n    --secondary-color: #3ba395;\n    --font-color: #501f3a;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\n.wrapper {\n    display: grid;\n    grid-template-columns: 2fr 7fr;\n    grid-template-rows: 2fr 15fr 1fr;\n    min-height: 100vh;\n}\n\nheader {\n    padding: 10px 20px;\n    color: white;\n    background-color: var(--main-color);\n    font-family: latoBlack;\n    font-size: 22px;\n    grid-column: 1 / -1;\n    display: flex;\n    gap: 5px;\n\n}\n\n.task-icon {\n    width: 38px;\n    filter: invert(100%) sepia(99%) saturate(0%) hue-rotate(162deg) brightness(106%) contrast(101%);\n}\n\n.sidebar {\n    color: var(--font-color);\n    border-right: solid 1px var(--font-color);\n    font-family: latoThin;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    padding-top: 30px;\n    font-size: 18px;\n}\n\n.tasks-by-date {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#home, #today, #week {\n    display: none;\n}\n\n#home + label {\n    color: var(--font-color);\n    font-size: 30px;\n    font-family: latoLight;\n    cursor: pointer;\n}\n\n#home:hover + label {\n    font-family: latoRegular;\n    padding-left: 5px;\n}\n\n#home:checked + label {\n    font-family: latoRegular;\n    padding-left: 5px;\n}\n\n#today + label {\n    color: var(--font-color);\n    font-size: 30px;\n    font-family: latoLight;\n    cursor: pointer;\n}\n\n#today:hover + label {\n    font-family: latoRegular;\n    padding-left: 5px;\n}\n\n#today:checked + label {\n    font-family: latoRegular;\n    padding-left: 5px;\n}\n\n#week + label {\n    color: var(--font-color);\n    font-size: 30px;\n    font-family: latoLight;\n    cursor: pointer;\n}\n\n#week:hover + label {\n    font-family: latoRegular;\n    padding-left: 5px;\n}\n\n#week:checked + label {\n    font-family: latoRegular;\n    padding-left: 5px;\n}\n\n/* \"new project modal\" */\n.new-project-background {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0,0,0); \n    background-color: rgba(0,0,0,0.4);\n    backdrop-filter: blur(5px);\n}\n\n.new-project-modal {\n    background-color: #fefefe;\n    margin: 15vh auto; \n    width: 600px; \n    height: 200px;\n}\n\n.new-project-header {\n    font-size: 18px;\n    padding: 10px 15px;\n    font-family: latoRegular;\n    color: white;\n    background-color: var(--main-color);\n    display: flex;\n    gap: 10px;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.new-project-header h1 {\n    margin-top: -5px;\n    cursor: pointer;\n}\n\n.new-project-modal form {\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n}\n\n#new-project-title {\n    border: none;\n    font-size: 20px;\n    margin-bottom: 50px;\n}\n\n#new-project-title:focus {\n    outline: none;\n}\n\n.create-project {\n    border: solid 1px var(--secondary-color);\n    color: var(--secondary-color);\n    padding: 5px 20px;\n    border-radius: 4px;\n    cursor: pointer;\n    width: 70px;\n    margin-left: 250px;\n}\n\n.create-project:hover {\n    background-color: var(--secondary-color);\n    color: white;\n}\n\n.project-list {\n    font-family: latoRegular;\n    color: var(--font-color);\n    display: flex;\n    flex-direction: column;\n    font-size: 20px;\n    gap: 10px;\n}\n\n.project-list input {\n    display: none;\n}\n\n.project-list input:hover + label {\n    font-family: latoBold;\n    cursor: pointer;\n    padding-left: 5px;\n}\n\n.project-list input:checked + label {\n    font-family: latoBold;\n    cursor: pointer;\n    padding-left: 5px;   \n} \n\n\n\n\n\nmain {\n    color: var(--font-color);\n    padding: 50px;\n}\n\n.new-todo-background {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0,0,0); \n    background-color: rgba(0,0,0,0.4);\n    backdrop-filter: blur(5px);\n}\n\n.new-todo-modal {\n    background-color: #fefefe;\n    margin: 15vh auto; \n    width: 700px; \n    height: 430px;\n  }\n\n.new-todo-header {\n    font-size: 18px;\n    padding: 10px 15px;\n    font-family: latoRegular;\n    color: white;\n    background-color: var(--main-color);\n    display: flex;\n    gap: 10px;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.new-todo-header h1 {\n    margin-top: -5px;\n    cursor: pointer;\n}\n\n.new-todo-modal form {\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n}\n\n#new-todo-title, #new-todo-details {\n    border: none;\n    font-size: 20px;\n    margin-bottom: 20px;\n}\n\n#new-todo-title:focus, #new-todo-details {\n    outline: none;\n}\n\n#new-todo-details {\n    resize: none;\n    font-family: latoRegular;\n}\n\n.new-todo-due-container {\n    font-size: 20px;\n    font-family: latoRegular;\n    display: flex;\n    gap: 15px;\n    margin-bottom: 10px;\n}\n\n.new-todo-due-container input {\n    padding: 5px;\n    border-radius: 5px;\n    border: 1px solid #3ba395;\n    color: #3ba395;\n}\n\n.new-todo-priority-container {\n    display: flex;\n    font-family: latoRegular;\n    font-size: 20px;\n    align-items: center;\n    gap: 10px;\n}\n\n/* bellow is priority styling */\n#new-todo-low, #new-todo-medium, #new-todo-high {\n    display: none;\n}\n\n#new-todo-low + label {\n    font-size: 12px;\n    color: green;\n    border: solid 1px green;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\n#new-todo-low:hover + label {\n    background-color: green;\n    color: white;\n}\n\n#new-todo-low:checked + label {\n    background-color: green;\n    color: white;\n}\n\n#new-todo-medium + label {\n    font-size: 12px;\n    color: orange;\n    border: solid 1px orange;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\n#new-todo-medium:hover + label {\n    background-color: orange;\n    color: white;\n}\n\n#new-todo-medium:checked + label {\n    background-color: orange;\n    color: white;\n}\n\n#new-todo-high + label {\n    font-size: 12px;\n    color: red;\n    border: solid 1px red;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\n#new-todo-high:hover + label {\n    background-color: red;\n    color: white;\n}\n\n#new-todo-high:checked + label {\n    background-color: red;\n    color: white;\n}\n\n.create-todo {\n    border: solid 1px var(--secondary-color);\n    color: var(--secondary-color);\n    padding: 5px 20px;\n    border-radius: 4px;\n    cursor: pointer;\n    margin-left: auto;\n}\n\n.create-todo:hover {\n    background-color: var(--secondary-color);\n    color: white;\n}\n\n.add-task {\n    color: var(--font-color);\n    border: none;\n    cursor: pointer;\n    font-size: 20px;\n    padding: 10px 20px;\n    border-radius: 3px;\n}\n\n.add-task:hover {\n    background-color: rgb(216, 212, 212);\n}\n\n.todo-container {\n    width: 100%;\n    height: 50px;\n    display: flex;\n    align-items: center;\n}\n\n.todo-title {\n    font-family: latoLight  ;\n    font-size: 20px;\n    margin-left: 10px;\n}\n\nfooter {\n    font-family: latoLight;\n    border: solid 1px var(--font-color);\n    grid-column: 1 / -1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.add-project {\n    border: none;\n    color: var(--font-color);\n    font-size: 18px;\n    cursor: pointer;\n    padding: 10px 10px;\n    border-radius: 3px;\n}\n\n.add-project:hover {\n    background-color: rgb(216, 212, 212);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectBtn": () => (/* binding */ addProjectBtn),
/* harmony export */   "addTaskBtn": () => (/* binding */ addTaskBtn),
/* harmony export */   "closeProjectModal": () => (/* binding */ closeProjectModal),
/* harmony export */   "closeTodo": () => (/* binding */ closeTodo),
/* harmony export */   "createTodo": () => (/* binding */ createTodo),
/* harmony export */   "newProjectTitle": () => (/* binding */ newProjectTitle),
/* harmony export */   "newTodoDetails": () => (/* binding */ newTodoDetails),
/* harmony export */   "newTodoDueDate": () => (/* binding */ newTodoDueDate),
/* harmony export */   "newTodoHigh": () => (/* binding */ newTodoHigh),
/* harmony export */   "newTodoLow": () => (/* binding */ newTodoLow),
/* harmony export */   "newTodoMedium": () => (/* binding */ newTodoMedium),
/* harmony export */   "newTodoPriority": () => (/* binding */ newTodoPriority),
/* harmony export */   "newTodoTitle": () => (/* binding */ newTodoTitle),
/* harmony export */   "projectModalBackground": () => (/* binding */ projectModalBackground),
/* harmony export */   "todoModalBackground": () => (/* binding */ todoModalBackground)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


// todo list
const displayTodoList = document.querySelector('.todo-list');

// create task modal:
const newTodoTitle = document.querySelector('#new-todo-title');
const newTodoDetails = document.querySelector('#new-todo-details');
const newTodoDueDate = document.querySelector('#new-todo-due-date');
const newTodoPriority = document.querySelector('#new-todo-priority');
const newTodoLow = document.querySelector('#new-todo-low');
const newTodoMedium = document.querySelector('#new-todo-medium');
const newTodoHigh = document.querySelector('#new-todo-high');
const createTodo = document.querySelector('.create-todo');
const todoModalBackground = document.querySelector('.new-todo-background');
const closeTodo = document.querySelector('.new-todo-close');

// "add task button"
const addTaskBtn = document.querySelector('.add-task');

// "add project" modal:
const projectModalBackground = document.querySelector('.new-project-background')
const addProjectBtn = document.querySelector('.add-project');
const closeProjectModal = document.querySelector('.new-project-close');
const createProjectBtn = document.querySelector('.create-project');
const newProjectTitle = document.querySelector('#new-project-title');

//project list
const displayProjectList = document.querySelector('.project-list');



 // "add task" button
addTaskBtn.addEventListener('click', () => {
    todoModalBackground.style.display = 'block';    
});

// close button of todo modal
closeTodo.addEventListener('click', () => {
    todoModalBackground.style.display = 'none';
});

// "add project" button
addProjectBtn.addEventListener('click', () => {
    projectModalBackground.style.display = 'block';
});

// close button of "add project"
closeProjectModal.addEventListener('click', () => {
    projectModalBackground.style.display = 'none';
});

// add project to list
createProjectBtn.addEventListener('click', () => {
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createProject)();
});

// render project list to display
createProjectBtn.addEventListener('click', () => {
    if(newProjectTitle.checkValidity()) {
        projectModalBackground.style.display = 'none';
        newProjectTitle.value = '';
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.removeAllChildNodes)(displayProjectList);
        _index_js__WEBPACK_IMPORTED_MODULE_0__.projectList.forEach(project => {
            const projectRadio = document.createElement('input');
            projectRadio.setAttribute('type', 'radio');
            projectRadio.setAttribute('name', 'project-radios');
            projectRadio.setAttribute('id', project.title);
            displayProjectList.appendChild(projectRadio);
            const projectLabel = document.createElement('label');
            projectLabel.setAttribute('for', project.title);
            projectLabel.textContent = project.title;
            displayProjectList.appendChild(projectLabel);
        });
    };
});


// add todo to todolist
createTodo.addEventListener('click', () => {
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createTask)();
});

// renter todos to display
createTodo.addEventListener('click', () => {
    todoModalBackground.style.display = 'none';
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.removeAllChildNodes)(displayTodoList);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.todoList.forEach(task => {
        const todo = document.createElement('div');
        todo.classList.add('todo-container');
        displayTodoList.appendChild(todo);
        if(task.priority === 'low') {
            todo.style.borderLeft = 'solid 3px green';
        } else if(task.priority === 'medium') {
            todo.style.borderLeft = 'solid 3px orange';    
        } else {
            todo.style.borderLeft = 'solid 3px red';
        }
        const title = document.createElement('p');
        title.classList.add('todo-title');
        title.textContent = task.title;
        todo.appendChild(title);
    });
});




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "projectList": () => (/* binding */ projectList),
/* harmony export */   "removeAllChildNodes": () => (/* binding */ removeAllChildNodes),
/* harmony export */   "todoList": () => (/* binding */ todoList)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _task_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.svg */ "./src/task.svg");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");







function Project(title) {
    this.title = title;
};

const projectList = [];

function createProject() {
    if(_dom_js__WEBPACK_IMPORTED_MODULE_2__.newProjectTitle.checkValidity()) {
        const title = new Project(_dom_js__WEBPACK_IMPORTED_MODULE_2__.newProjectTitle.value);
        projectList.push(title);
    };
};

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
};

function Todo(title, details, dueDate, priority, done) {
    this.title = title;
    this.details = details;
    this.dueDate = dueDate;
    this.priority = priority;
    this.done = done;
};

const todoList = [];

function createTask() {
    let priority;
    if(_dom_js__WEBPACK_IMPORTED_MODULE_2__.newTodoLow.checked) {
        priority = 'low';
    } else if(_dom_js__WEBPACK_IMPORTED_MODULE_2__.newTodoMedium.checked) {
        priority = 'medium';
    } else {
        priority = 'high';
    }
    if(_dom_js__WEBPACK_IMPORTED_MODULE_2__.newTodoTitle.checkValidity() && _dom_js__WEBPACK_IMPORTED_MODULE_2__.newTodoDueDate.checkValidity()) {
        const task = new Todo(_dom_js__WEBPACK_IMPORTED_MODULE_2__.newTodoTitle.value, _dom_js__WEBPACK_IMPORTED_MODULE_2__.newTodoDetails.value, _dom_js__WEBPACK_IMPORTED_MODULE_2__.newTodoDueDate.value, priority, 'no');
        todoList.push(task);
    }
    console.log(todoList);
};










/***/ }),

/***/ "./src/Lato-Black.ttf":
/*!****************************!*\
  !*** ./src/Lato-Black.ttf ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "57dee8aface5572f9101.ttf";

/***/ }),

/***/ "./src/Lato-Bold.ttf":
/*!***************************!*\
  !*** ./src/Lato-Bold.ttf ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "636be8de934918e38ed9.ttf";

/***/ }),

/***/ "./src/Lato-Light.ttf":
/*!****************************!*\
  !*** ./src/Lato-Light.ttf ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c7400fcad9e48ca9043f.ttf";

/***/ }),

/***/ "./src/Lato-Regular.ttf":
/*!******************************!*\
  !*** ./src/Lato-Regular.ttf ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d883d540ee2b4de8024.ttf";

/***/ }),

/***/ "./src/Lato-Thin.ttf":
/*!***************************!*\
  !*** ./src/Lato-Thin.ttf ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a60dde25d817751d590.ttf";

/***/ }),

/***/ "./src/task.svg":
/*!**********************!*\
  !*** ./src/task.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a66af80feca1663bd804.svg";

/***/ })

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
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
/******/ 		// no jsonp function
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLFlBQVksTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFV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QUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9MYXRvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9MYXRvLUJsYWNrLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vTGF0by1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL0xhdG8tVGhpbi50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL0xhdG8tQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBsYXRvUmVndWxhcjtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IGxhdG9CbGFjaztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IGxhdG9MaWdodDtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IGxhdG9UaGluO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogbGF0b0JvbGQ7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLW1haW4tY29sb3I6ICNDODlGQTM7XFxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjM2JhMzk1O1xcbiAgICAtLWZvbnQtY29sb3I6ICM1MDFmM2E7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgN2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxNWZyIDFmcjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6IGxhdG9CbGFjaztcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG5cXG59XFxuXFxuLnRhc2staWNvbiB7XFxuICAgIHdpZHRoOiAzOHB4O1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSg5OSUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDE2MmRlZykgYnJpZ2h0bmVzcygxMDYlKSBjb250cmFzdCgxMDElKTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBmb250LWZhbWlseTogbGF0b1RoaW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLnRhc2tzLWJ5LWRhdGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNob21lLCAjdG9kYXksICN3ZWVrIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2hvbWUgKyBsYWJlbCB7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LWZhbWlseTogbGF0b0xpZ2h0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNob21lOmhvdmVyICsgbGFiZWwge1xcbiAgICBmb250LWZhbWlseTogbGF0b1JlZ3VsYXI7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG5cXG4jaG9tZTpjaGVja2VkICsgbGFiZWwge1xcbiAgICBmb250LWZhbWlseTogbGF0b1JlZ3VsYXI7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG5cXG4jdG9kYXkgKyBsYWJlbCB7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LWZhbWlseTogbGF0b0xpZ2h0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0b2RheTpob3ZlciArIGxhYmVsIHtcXG4gICAgZm9udC1mYW1pbHk6IGxhdG9SZWd1bGFyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuXFxuI3RvZGF5OmNoZWNrZWQgKyBsYWJlbCB7XFxuICAgIGZvbnQtZmFtaWx5OiBsYXRvUmVndWxhcjtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxufVxcblxcbiN3ZWVrICsgbGFiZWwge1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC1mYW1pbHk6IGxhdG9MaWdodDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jd2Vlazpob3ZlciArIGxhYmVsIHtcXG4gICAgZm9udC1mYW1pbHk6IGxhdG9SZWd1bGFyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuXFxuI3dlZWs6Y2hlY2tlZCArIGxhYmVsIHtcXG4gICAgZm9udC1mYW1pbHk6IGxhdG9SZWd1bGFyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuXFxuLyogXFxcIm5ldyBwcm9qZWN0IG1vZGFsXFxcIiAqL1xcbi5uZXctcHJvamVjdC1iYWNrZ3JvdW5kIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LW1vZGFsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gICAgbWFyZ2luOiAxNXZoIGF1dG87IFxcbiAgICB3aWR0aDogNjAwcHg7IFxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG4ubmV3LXByb2plY3QtaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBsYXRvUmVndWxhcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5uZXctcHJvamVjdC1oZWFkZXIgaDEge1xcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uZXctcHJvamVjdC1tb2RhbCBmb3JtIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI25ldy1wcm9qZWN0LXRpdGxlIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbiNuZXctcHJvamVjdC10aXRsZTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5jcmVhdGUtcHJvamVjdCB7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjUwcHg7XFxufVxcblxcbi5jcmVhdGUtcHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3QtbGlzdCB7XFxuICAgIGZvbnQtZmFtaWx5OiBsYXRvUmVndWxhcjtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnByb2plY3QtbGlzdCBpbnB1dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LWxpc3QgaW5wdXQ6aG92ZXIgKyBsYWJlbCB7XFxuICAgIGZvbnQtZmFtaWx5OiBsYXRvQm9sZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuXFxuLnByb2plY3QtbGlzdCBpbnB1dDpjaGVja2VkICsgbGFiZWwge1xcbiAgICBmb250LWZhbWlseTogbGF0b0JvbGQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7ICAgXFxufSBcXG5cXG5cXG5cXG5cXG5cXG5tYWluIHtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbn1cXG5cXG4ubmV3LXRvZG8tYmFja2dyb3VuZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxufVxcblxcbi5uZXctdG9kby1tb2RhbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICAgIG1hcmdpbjogMTV2aCBhdXRvOyBcXG4gICAgd2lkdGg6IDcwMHB4OyBcXG4gICAgaGVpZ2h0OiA0MzBweDtcXG4gIH1cXG5cXG4ubmV3LXRvZG8taGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBsYXRvUmVndWxhcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5uZXctdG9kby1oZWFkZXIgaDEge1xcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uZXctdG9kby1tb2RhbCBmb3JtIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI25ldy10b2RvLXRpdGxlLCAjbmV3LXRvZG8tZGV0YWlscyB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4jbmV3LXRvZG8tdGl0bGU6Zm9jdXMsICNuZXctdG9kby1kZXRhaWxzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuI25ldy10b2RvLWRldGFpbHMge1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiBsYXRvUmVndWxhcjtcXG59XFxuXFxuLm5ldy10b2RvLWR1ZS1jb250YWluZXIge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBsYXRvUmVndWxhcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubmV3LXRvZG8tZHVlLWNvbnRhaW5lciBpbnB1dCB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM2JhMzk1O1xcbiAgICBjb2xvcjogIzNiYTM5NTtcXG59XFxuXFxuLm5ldy10b2RvLXByaW9yaXR5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtZmFtaWx5OiBsYXRvUmVndWxhcjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi8qIGJlbGxvdyBpcyBwcmlvcml0eSBzdHlsaW5nICovXFxuI25ldy10b2RvLWxvdywgI25ldy10b2RvLW1lZGl1bSwgI25ldy10b2RvLWhpZ2gge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jbmV3LXRvZG8tbG93ICsgbGFiZWwge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGNvbG9yOiBncmVlbjtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggZ3JlZW47XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI25ldy10b2RvLWxvdzpob3ZlciArIGxhYmVsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI25ldy10b2RvLWxvdzpjaGVja2VkICsgbGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jbmV3LXRvZG8tbWVkaXVtICsgbGFiZWwge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGNvbG9yOiBvcmFuZ2U7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IG9yYW5nZTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbmV3LXRvZG8tbWVkaXVtOmhvdmVyICsgbGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI25ldy10b2RvLW1lZGl1bTpjaGVja2VkICsgbGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI25ldy10b2RvLWhpZ2ggKyBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmVkO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNuZXctdG9kby1oaWdoOmhvdmVyICsgbGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI25ldy10b2RvLWhpZ2g6Y2hlY2tlZCArIGxhYmVsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jcmVhdGUtdG9kbyB7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uY3JlYXRlLXRvZG86aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5hZGQtdGFzayB7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5hZGQtdGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDIxMiwgMjEyKTtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8tdGl0bGUge1xcbiAgICBmb250LWZhbWlseTogbGF0b0xpZ2h0ICA7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGZvbnQtZmFtaWx5OiBsYXRvTGlnaHQ7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMjEyLCAyMTIpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLDRDQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qiw0Q0FBMEI7QUFDOUI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsNENBQTBCO0FBQzlCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDRDQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw0Q0FBeUI7QUFDN0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGdDQUFnQztJQUNoQyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsUUFBUTs7QUFFWjs7QUFFQTtJQUNJLFdBQVc7SUFDWCwrRkFBK0Y7QUFDbkc7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIseUNBQXlDO0lBQ3pDLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixpQkFBaUI7QUFDckI7O0FBRUEsd0JBQXdCO0FBQ3hCO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixVQUFVO0lBQ1YsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsaUNBQWlDO0lBQ2pDLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7Ozs7OztBQU1BO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFVBQVU7SUFDVixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLDRCQUE0QjtJQUM1QixpQ0FBaUM7SUFDakMsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtFQUNmOztBQUVGO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsU0FBUztJQUNULG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQSwrQkFBK0I7QUFDL0I7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogbGF0b1JlZ3VsYXI7XFxuICAgIHNyYzogdXJsKC4vTGF0by1SZWd1bGFyLnR0Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogbGF0b0JsYWNrO1xcbiAgICBzcmM6IHVybCguL0xhdG8tQmxhY2sudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBsYXRvTGlnaHQ7XFxuICAgIHNyYzogdXJsKC4vTGF0by1MaWdodC50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IGxhdG9UaGluO1xcbiAgICBzcmM6IHVybCguL0xhdG8tVGhpbi50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IGxhdG9Cb2xkO1xcbiAgICBzcmM6IHVybCguL0xhdG8tQm9sZC50dGYpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tbWFpbi1jb2xvcjogI0M4OUZBMztcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICMzYmEzOTU7XFxuICAgIC0tZm9udC1jb2xvcjogIzUwMWYzYTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA3ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDE1ZnIgMWZyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBmb250LWZhbWlseTogbGF0b0JsYWNrO1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcblxcbn1cXG5cXG4udGFzay1pY29uIHtcXG4gICAgd2lkdGg6IDM4cHg7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDk5JSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMTYyZGVnKSBicmlnaHRuZXNzKDEwNiUpIGNvbnRyYXN0KDEwMSUpO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiBsYXRvVGhpbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4udGFza3MtYnktZGF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI2hvbWUsICN0b2RheSwgI3dlZWsge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jaG9tZSArIGxhYmVsIHtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBsYXRvTGlnaHQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2hvbWU6aG92ZXIgKyBsYWJlbCB7XFxuICAgIGZvbnQtZmFtaWx5OiBsYXRvUmVndWxhcjtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxufVxcblxcbiNob21lOmNoZWNrZWQgKyBsYWJlbCB7XFxuICAgIGZvbnQtZmFtaWx5OiBsYXRvUmVndWxhcjtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxufVxcblxcbiN0b2RheSArIGxhYmVsIHtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBsYXRvTGlnaHQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3RvZGF5OmhvdmVyICsgbGFiZWwge1xcbiAgICBmb250LWZhbWlseTogbGF0b1JlZ3VsYXI7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG5cXG4jdG9kYXk6Y2hlY2tlZCArIGxhYmVsIHtcXG4gICAgZm9udC1mYW1pbHk6IGxhdG9SZWd1bGFyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuXFxuI3dlZWsgKyBsYWJlbCB7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LWZhbWlseTogbGF0b0xpZ2h0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN3ZWVrOmhvdmVyICsgbGFiZWwge1xcbiAgICBmb250LWZhbWlseTogbGF0b1JlZ3VsYXI7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG5cXG4jd2VlazpjaGVja2VkICsgbGFiZWwge1xcbiAgICBmb250LWZhbWlseTogbGF0b1JlZ3VsYXI7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG5cXG4vKiBcXFwibmV3IHByb2plY3QgbW9kYWxcXFwiICovXFxuLm5ldy1wcm9qZWN0LWJhY2tncm91bmQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtbW9kYWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgICBtYXJnaW46IDE1dmggYXV0bzsgXFxuICAgIHdpZHRoOiA2MDBweDsgXFxuICAgIGhlaWdodDogMjAwcHg7XFxufVxcblxcbi5uZXctcHJvamVjdC1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gICAgZm9udC1mYW1pbHk6IGxhdG9SZWd1bGFyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWhlYWRlciBoMSB7XFxuICAgIG1hcmdpbi10b3A6IC01cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LW1vZGFsIGZvcm0ge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jbmV3LXByb2plY3QtdGl0bGUge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuI25ldy1wcm9qZWN0LXRpdGxlOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmNyZWF0ZS1wcm9qZWN0IHtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNTBweDtcXG59XFxuXFxuLmNyZWF0ZS1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0IHtcXG4gICAgZm9udC1mYW1pbHk6IGxhdG9SZWd1bGFyO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1saXN0IGlucHV0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtbGlzdCBpbnB1dDpob3ZlciArIGxhYmVsIHtcXG4gICAgZm9udC1mYW1pbHk6IGxhdG9Cb2xkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1saXN0IGlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XFxuICAgIGZvbnQtZmFtaWx5OiBsYXRvQm9sZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDsgICBcXG59IFxcblxcblxcblxcblxcblxcbm1haW4ge1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxufVxcblxcbi5uZXctdG9kby1iYWNrZ3JvdW5kIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG59XFxuXFxuLm5ldy10b2RvLW1vZGFsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gICAgbWFyZ2luOiAxNXZoIGF1dG87IFxcbiAgICB3aWR0aDogNzAwcHg7IFxcbiAgICBoZWlnaHQ6IDQzMHB4O1xcbiAgfVxcblxcbi5uZXctdG9kby1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gICAgZm9udC1mYW1pbHk6IGxhdG9SZWd1bGFyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm5ldy10b2RvLWhlYWRlciBoMSB7XFxuICAgIG1hcmdpbi10b3A6IC01cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5ldy10b2RvLW1vZGFsIGZvcm0ge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jbmV3LXRvZG8tdGl0bGUsICNuZXctdG9kby1kZXRhaWxzIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbiNuZXctdG9kby10aXRsZTpmb2N1cywgI25ldy10b2RvLWRldGFpbHMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jbmV3LXRvZG8tZGV0YWlscyB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IGxhdG9SZWd1bGFyO1xcbn1cXG5cXG4ubmV3LXRvZG8tZHVlLWNvbnRhaW5lciB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC1mYW1pbHk6IGxhdG9SZWd1bGFyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5uZXctdG9kby1kdWUtY29udGFpbmVyIGlucHV0IHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzYmEzOTU7XFxuICAgIGNvbG9yOiAjM2JhMzk1O1xcbn1cXG5cXG4ubmV3LXRvZG8tcHJpb3JpdHktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1mYW1pbHk6IGxhdG9SZWd1bGFyO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLyogYmVsbG93IGlzIHByaW9yaXR5IHN0eWxpbmcgKi9cXG4jbmV3LXRvZG8tbG93LCAjbmV3LXRvZG8tbWVkaXVtLCAjbmV3LXRvZG8taGlnaCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNuZXctdG9kby1sb3cgKyBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgY29sb3I6IGdyZWVuO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCBncmVlbjtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbmV3LXRvZG8tbG93OmhvdmVyICsgbGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jbmV3LXRvZG8tbG93OmNoZWNrZWQgKyBsYWJlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNuZXctdG9kby1tZWRpdW0gKyBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgY29sb3I6IG9yYW5nZTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggb3JhbmdlO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNuZXctdG9kby1tZWRpdW06aG92ZXIgKyBsYWJlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jbmV3LXRvZG8tbWVkaXVtOmNoZWNrZWQgKyBsYWJlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jbmV3LXRvZG8taGlnaCArIGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZWQ7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI25ldy10b2RvLWhpZ2g6aG92ZXIgKyBsYWJlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jbmV3LXRvZG8taGlnaDpjaGVja2VkICsgbGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNyZWF0ZS10b2RvIHtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5jcmVhdGUtdG9kbzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLmFkZC10YXNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMjEyLCAyMTIpO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBsYXRvTGlnaHQgIDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgZm9udC1mYW1pbHk6IGxhdG9MaWdodDtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkLXByb2plY3Qge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4uYWRkLXByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCAyMTIsIDIxMik7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcInVzZSBzdHJpY3RcIjtcbmltcG9ydCB7IHByb2plY3RMaXN0LCBjcmVhdGVQcm9qZWN0LCByZW1vdmVBbGxDaGlsZE5vZGVzLCBjcmVhdGVUYXNrLCB0b2RvTGlzdCB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG4vLyB0b2RvIGxpc3RcbmNvbnN0IGRpc3BsYXlUb2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKTtcblxuLy8gY3JlYXRlIHRhc2sgbW9kYWw6XG5jb25zdCBuZXdUb2RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRvZG8tdGl0bGUnKTtcbmNvbnN0IG5ld1RvZG9EZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy10b2RvLWRldGFpbHMnKTtcbmNvbnN0IG5ld1RvZG9EdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy10b2RvLWR1ZS1kYXRlJyk7XG5jb25zdCBuZXdUb2RvUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRvZG8tcHJpb3JpdHknKTtcbmNvbnN0IG5ld1RvZG9Mb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRvZG8tbG93Jyk7XG5jb25zdCBuZXdUb2RvTWVkaXVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy10b2RvLW1lZGl1bScpO1xuY29uc3QgbmV3VG9kb0hpZ2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRvZG8taGlnaCcpO1xuY29uc3QgY3JlYXRlVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtdG9kbycpO1xuY29uc3QgdG9kb01vZGFsQmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdG9kby1iYWNrZ3JvdW5kJyk7XG5jb25zdCBjbG9zZVRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRvZG8tY2xvc2UnKTtcblxuLy8gXCJhZGQgdGFzayBidXR0b25cIlxuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpO1xuXG4vLyBcImFkZCBwcm9qZWN0XCIgbW9kYWw6XG5jb25zdCBwcm9qZWN0TW9kYWxCYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LWJhY2tncm91bmQnKVxuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpO1xuY29uc3QgY2xvc2VQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtY2xvc2UnKTtcbmNvbnN0IGNyZWF0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLXByb2plY3QnKTtcbmNvbnN0IG5ld1Byb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdC10aXRsZScpO1xuXG4vL3Byb2plY3QgbGlzdFxuY29uc3QgZGlzcGxheVByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdCcpO1xuXG5leHBvcnQge25ld1RvZG9UaXRsZSwgbmV3VG9kb0RldGFpbHMsIG5ld1RvZG9EdWVEYXRlLCBuZXdUb2RvUHJpb3JpdHksIG5ld1RvZG9Mb3csIG5ld1RvZG9NZWRpdW0sXG4gICAgICAgIG5ld1RvZG9IaWdoLCBjcmVhdGVUb2RvLCB0b2RvTW9kYWxCYWNrZ3JvdW5kLCBhZGRUYXNrQnRuLCBjbG9zZVRvZG8sIHByb2plY3RNb2RhbEJhY2tncm91bmQsXG4gICAgICAgIGFkZFByb2plY3RCdG4sY2xvc2VQcm9qZWN0TW9kYWwsIG5ld1Byb2plY3RUaXRsZX1cblxuIC8vIFwiYWRkIHRhc2tcIiBidXR0b25cbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdG9kb01vZGFsQmFja2dyb3VuZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJzsgICAgXG59KTtcblxuLy8gY2xvc2UgYnV0dG9uIG9mIHRvZG8gbW9kYWxcbmNsb3NlVG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2RvTW9kYWxCYWNrZ3JvdW5kLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59KTtcblxuLy8gXCJhZGQgcHJvamVjdFwiIGJ1dHRvblxuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwcm9qZWN0TW9kYWxCYWNrZ3JvdW5kLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufSk7XG5cbi8vIGNsb3NlIGJ1dHRvbiBvZiBcImFkZCBwcm9qZWN0XCJcbmNsb3NlUHJvamVjdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHByb2plY3RNb2RhbEJhY2tncm91bmQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pO1xuXG4vLyBhZGQgcHJvamVjdCB0byBsaXN0XG5jcmVhdGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjcmVhdGVQcm9qZWN0KCk7XG59KTtcblxuLy8gcmVuZGVyIHByb2plY3QgbGlzdCB0byBkaXNwbGF5XG5jcmVhdGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmKG5ld1Byb2plY3RUaXRsZS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgcHJvamVjdE1vZGFsQmFja2dyb3VuZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBuZXdQcm9qZWN0VGl0bGUudmFsdWUgPSAnJztcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGROb2RlcyhkaXNwbGF5UHJvamVjdExpc3QpO1xuICAgICAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdFJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHByb2plY3RSYWRpby5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgICAgICAgICAgIHByb2plY3RSYWRpby5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJvamVjdC1yYWRpb3MnKTtcbiAgICAgICAgICAgIHByb2plY3RSYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgcHJvamVjdC50aXRsZSk7XG4gICAgICAgICAgICBkaXNwbGF5UHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdFJhZGlvKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBwcm9qZWN0TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBwcm9qZWN0LnRpdGxlKTtcbiAgICAgICAgICAgIHByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgICAgICAgICBkaXNwbGF5UHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn0pO1xuXG5cbi8vIGFkZCB0b2RvIHRvIHRvZG9saXN0XG5jcmVhdGVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNyZWF0ZVRhc2soKTtcbn0pO1xuXG4vLyByZW50ZXIgdG9kb3MgdG8gZGlzcGxheVxuY3JlYXRlVG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2RvTW9kYWxCYWNrZ3JvdW5kLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgcmVtb3ZlQWxsQ2hpbGROb2RlcyhkaXNwbGF5VG9kb0xpc3QpO1xuICAgIHRvZG9MaXN0LmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRhaW5lcicpO1xuICAgICAgICBkaXNwbGF5VG9kb0xpc3QuYXBwZW5kQ2hpbGQodG9kbyk7XG4gICAgICAgIGlmKHRhc2sucHJpb3JpdHkgPT09ICdsb3cnKSB7XG4gICAgICAgICAgICB0b2RvLnN0eWxlLmJvcmRlckxlZnQgPSAnc29saWQgM3B4IGdyZWVuJztcbiAgICAgICAgfSBlbHNlIGlmKHRhc2sucHJpb3JpdHkgPT09ICdtZWRpdW0nKSB7XG4gICAgICAgICAgICB0b2RvLnN0eWxlLmJvcmRlckxlZnQgPSAnc29saWQgM3B4IG9yYW5nZSc7ICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9kby5zdHlsZS5ib3JkZXJMZWZ0ID0gJ3NvbGlkIDNweCByZWQnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXRpdGxlJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICAgICAgdG9kby5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgfSk7XG59KTtcblxuXG4iLCJcInVzZSBzdHJpY3RcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3Rhc2suc3ZnJztcbmltcG9ydCB7bmV3VG9kb1RpdGxlLCBuZXdUb2RvRGV0YWlscywgbmV3VG9kb0R1ZURhdGUsIG5ld1RvZG9Qcmlvcml0eSwgbmV3VG9kb0xvdywgbmV3VG9kb01lZGl1bSxcbiAgICAgICAgbmV3VG9kb0hpZ2gsIGNyZWF0ZVRvZG8sIHRvZG9Nb2RhbEJhY2tncm91bmQsIGFkZFRhc2ssIGNsb3NlVG9kbywgcHJvamVjdE1vZGFsQmFja2dyb3VuZCwgXG4gICAgICAgIGFkZFByb2plY3RCdG4sIGNsb3NlUHJvamVjdE1vZGFsLCBuZXdQcm9qZWN0VGl0bGV9IGZyb20gJy4vZG9tLmpzJztcblxuXG5cbmZ1bmN0aW9uIFByb2plY3QodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG59O1xuXG5jb25zdCBwcm9qZWN0TGlzdCA9IFtdO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuICAgIGlmKG5ld1Byb2plY3RUaXRsZS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBuZXcgUHJvamVjdChuZXdQcm9qZWN0VGl0bGUudmFsdWUpO1xuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHRpdGxlKTtcbiAgICB9O1xufTtcblxuZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpIHtcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICB9O1xufTtcblxuZnVuY3Rpb24gVG9kbyh0aXRsZSwgZGV0YWlscywgZHVlRGF0ZSwgcHJpb3JpdHksIGRvbmUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmRvbmUgPSBkb25lO1xufTtcblxuY29uc3QgdG9kb0xpc3QgPSBbXTtcblxuZnVuY3Rpb24gY3JlYXRlVGFzaygpIHtcbiAgICBsZXQgcHJpb3JpdHk7XG4gICAgaWYobmV3VG9kb0xvdy5jaGVja2VkKSB7XG4gICAgICAgIHByaW9yaXR5ID0gJ2xvdyc7XG4gICAgfSBlbHNlIGlmKG5ld1RvZG9NZWRpdW0uY2hlY2tlZCkge1xuICAgICAgICBwcmlvcml0eSA9ICdtZWRpdW0nO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByaW9yaXR5ID0gJ2hpZ2gnO1xuICAgIH1cbiAgICBpZihuZXdUb2RvVGl0bGUuY2hlY2tWYWxpZGl0eSgpICYmIG5ld1RvZG9EdWVEYXRlLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRvZG8obmV3VG9kb1RpdGxlLnZhbHVlLCBuZXdUb2RvRGV0YWlscy52YWx1ZSwgbmV3VG9kb0R1ZURhdGUudmFsdWUsIHByaW9yaXR5LCAnbm8nKTtcbiAgICAgICAgdG9kb0xpc3QucHVzaCh0YXNrKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2codG9kb0xpc3QpO1xufTtcblxuXG5leHBvcnQgeyBwcm9qZWN0TGlzdCwgY3JlYXRlUHJvamVjdCwgcmVtb3ZlQWxsQ2hpbGROb2RlcywgY3JlYXRlVGFzaywgdG9kb0xpc3QgfVxuXG5cblxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=