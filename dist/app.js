/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/reset.css?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/js/Drink.js":
/*!*************************!*\
  !*** ./src/js/Drink.js ***!
  \*************************/
/*! exports provided: Drink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Drink\", function() { return Drink; });\n/* harmony import */ var _Elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Elements.js */ \"./src/js/Elements.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar Drink =\n/*#__PURE__*/\nfunction () {\n  function Drink(name, type, instructions, image, ingredients, measures) {\n    _classCallCheck(this, Drink);\n\n    this.name = name;\n    this.type = type;\n    this.ingredients = _toConsumableArray(ingredients);\n    this.measures = _toConsumableArray(measures);\n    this.instructions = instructions;\n    this.image = image;\n  }\n\n  _createClass(Drink, [{\n    key: \"cleanArrFromSpace\",\n    value: function cleanArrFromSpace(arr) {\n      var cleanArray = arr.filter(function (el) {\n        return el;\n      });\n      cleanArray = cleanArray.filter(function (str) {\n        return /\\S/.test(str);\n      });\n      return cleanArray;\n    }\n  }, {\n    key: \"printDrink\",\n    value: function printDrink() {\n      var self = this;\n      var drinkDiv = document.createElement('div');\n      drinkDiv.classList.add('drink');\n      var drinkTitle = document.createElement('h1');\n      drinkTitle.classList.add('drink-title');\n      var spanTitle = document.createElement('span');\n      spanTitle.classList.add('span-title');\n      spanTitle.textContent = \"\".concat(++_Elements_js__WEBPACK_IMPORTED_MODULE_0__[\"Elements\"].counter, \". \");\n      drinkTitle.textContent = this.name;\n      var drinkWrapper = document.createElement('div');\n      drinkWrapper.classList.add('drink-wrapper');\n      var drinkColLeft = document.createElement('div');\n      drinkColLeft.classList.add('col-left');\n      var drinkImage = document.createElement('img');\n      drinkImage.classList.add('drink-image');\n      drinkImage.src = this.image;\n      var drinkColRight = document.createElement('div');\n      drinkColRight.classList.add('col-right');\n      var divInstruction = document.createElement('div');\n      divInstruction.classList.add('drink-instruction');\n      var drinkType = document.createElement('p');\n      drinkType.classList.add('drink-type');\n      drinkType.textContent = \"Type: \";\n      var drinkSpanType = document.createElement('span');\n      drinkSpanType.classList.add('drink-span-type');\n      drinkSpanType.textContent = this.type;\n      if (drinkSpanType.textContent == 'Non alcoholic') drinkSpanType.style.color = 'green';else drinkSpanType.style.color = '#cc0000';\n      var drinkDesc = document.createElement('p');\n      drinkDesc.classList.add('drink-desc');\n      drinkDesc.textContent = this.instructions;\n      var drinkDetails = document.createElement('div');\n      drinkDetails.classList.add('drink-details');\n      var drinkIngredients = document.createElement('ul');\n      drinkIngredients.classList.add('ingredients');\n      var cleanArrIngredients = this.cleanArrFromSpace(this.ingredients);\n      cleanArrIngredients = cleanArrIngredients.filter(function (item, pos) {\n        return cleanArrIngredients.indexOf(item) == pos;\n      });\n      var cleanArrMeasures = this.cleanArrFromSpace(this.measures);\n      cleanArrIngredients.forEach(function (el, index) {\n        var li = document.createElement('li');\n        var measure = document.createElement('p');\n        li.classList.add('ingredient');\n        li.textContent = el;\n        drinkIngredients.appendChild(li);\n        measure.classList.add('measure');\n        measure.innerHTML = \"\".concat(cleanArrMeasures[index] != undefined ? cleanArrMeasures[index] : \"&nbsp;\");\n        li.appendChild(measure);\n        self.makeIngredientIcon(el, li);\n      });\n      _Elements_js__WEBPACK_IMPORTED_MODULE_0__[\"Elements\"].drinkList.appendChild(drinkDiv);\n      drinkTitle.prepend(spanTitle);\n      drinkDiv.appendChild(drinkTitle);\n      drinkDiv.appendChild(drinkWrapper);\n      drinkWrapper.appendChild(drinkColLeft);\n      drinkColLeft.appendChild(drinkImage);\n      drinkWrapper.appendChild(drinkColRight);\n      drinkColRight.appendChild(divInstruction);\n      divInstruction.appendChild(drinkType);\n      drinkType.appendChild(drinkSpanType);\n      divInstruction.appendChild(drinkDesc);\n      drinkColRight.appendChild(drinkDetails);\n      drinkDetails.appendChild(drinkIngredients);\n    }\n  }, {\n    key: \"makeIngredientIcon\",\n    value: function makeIngredientIcon(ingredient, parent) {\n      var img = document.createElement('img');\n      var replaceWthiteSpace = ingredient.split(/[ ]+/).join('%20');\n      img.setAttribute('src', \"https://www.thecocktaildb.com/images/ingredients/\".concat(replaceWthiteSpace, \"-Medium.png\"));\n      img.setAttribute('width', \"150px\");\n      parent.appendChild(img);\n    }\n  }]);\n\n  return Drink;\n}();\n;\n\n//# sourceURL=webpack:///./src/js/Drink.js?");

/***/ }),

/***/ "./src/js/Elements.js":
/*!****************************!*\
  !*** ./src/js/Elements.js ***!
  \****************************/
/*! exports provided: Elements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Elements\", function() { return Elements; });\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/js/app.js\");\n\nvar Elements = {\n  counterElements: 0,\n  inputSearch: document.querySelector('.search-drink'),\n  buttonSearch: document.querySelector('.search-button'),\n  drinkList: document.querySelector('.list-of-drinks'),\n  errorPrint: document.querySelector('.error')\n};\nElements.inputSearch.addEventListener('keypress', function (e) {\n  if (e.keyCode == 13) {\n    Elements.errorPrint.style.display = 'none';\n    Elements.drinkList.textContent = '';\n    Object(_app_js__WEBPACK_IMPORTED_MODULE_0__[\"getDrinksArray\"])(Elements.inputSearch.value);\n    this.blur();\n  }\n});\nElements.buttonSearch.addEventListener('click', function () {\n  if (!Elements.inputSearch.value) {\n    Elements.errorPrint.style.display = 'block';\n  } else {\n    Elements.errorPrint.style.display = 'none';\n    Elements.drinkList.textContent = '';\n    Object(_app_js__WEBPACK_IMPORTED_MODULE_0__[\"getDrinksArray\"])(Elements.inputSearch.value);\n  }\n\n  ;\n});\nElements.inputSearch.addEventListener('click', function () {\n  this.placeholder = '';\n});\nElements.inputSearch.addEventListener('blur', function () {\n  this.placeholder = 'Example: gin';\n});\n\n//# sourceURL=webpack:///./src/js/Elements.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! exports provided: getDrinksArray, getDrinksFromArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDrinksArray\", function() { return getDrinksArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDrinksFromArray\", function() { return getDrinksFromArray; });\n/* harmony import */ var _Drink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Drink.js */ \"./src/js/Drink.js\");\n/* harmony import */ var _Elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Elements.js */ \"./src/js/Elements.js\");\n/* harmony import */ var _backtotop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backtotop.js */ \"./src/js/backtotop.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/reset.css */ \"./src/css/reset.css\");\n/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_reset_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n // Run when PROD\n\n\n\nObject(_backtotop_js__WEBPACK_IMPORTED_MODULE_2__[\"goUp\"])();\nvar getDrinksArray = function getDrinksArray(valueFromSearchField) {\n  return fetch(\"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=\".concat(valueFromSearchField)).then(function (response) {\n    if (response.ok) {\n      return response.json();\n    } else {\n      throw new Error('Something wrong with server');\n    }\n  }).then(function (posts) {\n    var arrWithDrinks = [];\n    _Elements_js__WEBPACK_IMPORTED_MODULE_1__[\"Elements\"].counter = 0;\n    posts.drinks.forEach(function (drink) {\n      arrWithDrinks.push(drink.strDrink);\n    });\n    getDrinksFromArray(arrWithDrinks);\n    _Elements_js__WEBPACK_IMPORTED_MODULE_1__[\"Elements\"].inputSearch.value = '';\n  })[\"catch\"](function (error) {\n    console.log(\"Error logs: : \".concat(error));\n    _Elements_js__WEBPACK_IMPORTED_MODULE_1__[\"Elements\"].errorPrint.style.display = \"block\";\n  });\n};\nvar getDrinksFromArray = function getDrinksFromArray(arrWithDrinks) {\n  arrWithDrinks.forEach(function (el) {\n    return fetch(\"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=\".concat(el)).then(function (response) {\n      if (response.ok) {\n        return response.json();\n      } else {\n        throw new Error('Something went wrong');\n      }\n    }).then(function (posts) {\n      posts.drinks.forEach(function (drink) {\n        var drinkTitle = drink.strDrink,\n            type = drink.strAlcoholic,\n            instructions = drink.strInstructions,\n            image = drink.strDrinkThumb,\n            ingredients = new Array(drink.strIngredient1, drink.strIngredient2, drink.strIngredient3, drink.strIngredient4, drink.strIngredient5, drink.strIngredient6, drink.strIngredient7, drink.strIngredient7, drink.strIngredient8, drink.strIngredient9, drink.strIngredient10, drink.strIngredient11, drink.strIngredient12, drink.strIngredient13, drink.strIngredient14, drink.strIngredient15),\n            measures = new Array(drink.strMeasure1, drink.strMeasure2, drink.strMeasure3, drink.strMeasure4, drink.strMeasure5, drink.strMeasure6, drink.strMeasure7, drink.strMeasure7, drink.strMeasure8, drink.strMeasure9, drink.strMeasure10, drink.strMeasure11, drink.strMeasure12, drink.strMeasure13, drink.strMeasure14, drink.strMeasure15);\n        var newDrink = new _Drink_js__WEBPACK_IMPORTED_MODULE_0__[\"Drink\"](drinkTitle, type, instructions, image, ingredients, measures);\n        newDrink.printDrink();\n      });\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/backtotop.js":
/*!*****************************!*\
  !*** ./src/js/backtotop.js ***!
  \*****************************/
/*! exports provided: goUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"goUp\", function() { return goUp; });\nfunction goUp() {\n  function createButton() {\n    var button = document.createElement(\"button\");\n    button.classList.add(\"back\", \"hidden\");\n    document.body.appendChild(button);\n    return button;\n  }\n\n  function animateButton() {\n    if (document.documentElement.scrollTop > 0) {\n      window.scrollBy(0, -80);\n      setTimeout(animateButton, 1);\n    }\n  }\n\n  var button = createButton();\n  button.addEventListener(\"click\", function (e) {\n    e.stopPropagation();\n    animateButton();\n  }, false);\n  document.addEventListener(\"scroll\", function () {\n    if (document.documentElement.scrollTop > 900) {\n      button.classList.remove(\"hidden\");\n    } else {\n      button.classList.add(\"hidden\");\n    }\n  }, false);\n}\n;\n\n//# sourceURL=webpack:///./src/js/backtotop.js?");

/***/ })

/******/ });