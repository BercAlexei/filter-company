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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/_script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/_script.js":
/*!***************************!*\
  !*** ./src/js/_script.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/theme */ \"./src/js/modules/theme.js\");\n/* harmony import */ var _modules_showCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/showCards */ \"./src/js/modules/showCards.js\");\n/* harmony import */ var _modules_companyPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/companyPage */ \"./src/js/modules/companyPage.js\");\n/* harmony import */ var _modules_reload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/reload */ \"./src/js/modules/reload.js\");\n/* harmony import */ var _modules_logoHistory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/logoHistory */ \"./src/js/modules/logoHistory.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n        Object(_modules_logoHistory__WEBPACK_IMPORTED_MODULE_4__[\"replaceHistoryLogo\"])();\r\n        Object(_modules_theme__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n        Object(_modules_showCards__WEBPACK_IMPORTED_MODULE_1__[\"showCards\"])();\r\n        Object(_modules_companyPage__WEBPACK_IMPORTED_MODULE_2__[\"companyPage\"])();\r\n        Object(_modules_reload__WEBPACK_IMPORTED_MODULE_3__[\"reload\"])();\r\n});\n\n//# sourceURL=webpack:///./src/js/_script.js?");

/***/ }),

/***/ "./src/js/modules/companyPage.js":
/*!***************************************!*\
  !*** ./src/js/modules/companyPage.js ***!
  \***************************************/
/*! exports provided: companyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"companyPage\", function() { return companyPage; });\n/* harmony import */ var _services_cardRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/cardRender */ \"./src/js/services/cardRender.js\");\n/* harmony import */ var _showCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showCards */ \"./src/js/modules/showCards.js\");\n/* harmony import */ var _services_companyRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/companyRender */ \"./src/js/services/companyRender.js\");\n/* harmony import */ var _logoHistory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logoHistory */ \"./src/js/modules/logoHistory.js\");\n\r\n\r\n\r\n\r\n\r\nfunction companyPage() {\r\n\r\n    _services_cardRender__WEBPACK_IMPORTED_MODULE_0__[\"cardsWrapper\"].addEventListener('click', function (event) {\r\n\r\n        event.preventDefault();\r\n        const search = document.querySelector('.search'),\r\n            cards = document.querySelector('.cards');\r\n\r\n        //создаем переход на описание компании, делегирование\r\n        if (event.target.getAttribute('data-link') == '') {\r\n            search.style.display = 'none';\r\n            cards.style.display = 'none';\r\n\r\n            let link = event.target.getAttribute('href'),\r\n                company;\r\n            history.pushState({ id: link }, '');\r\n\r\n            _showCards__WEBPACK_IMPORTED_MODULE_1__[\"arrayCompany\"].filter(item => {\r\n                if (item.id == link) {\r\n                    company = item;\r\n                }\r\n            });\r\n            let { id, color, location, logo, name, position, schedule, date, descr, site } = company;\r\n            new _services_companyRender__WEBPACK_IMPORTED_MODULE_2__[\"default\"](id, color, location, logo, name, position, schedule, date, descr, site).render();\r\n\r\n            Object(_logoHistory__WEBPACK_IMPORTED_MODULE_3__[\"pushHistoryLogo\"])();\r\n        }\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/modules/companyPage.js?");

/***/ }),

/***/ "./src/js/modules/logoHistory.js":
/*!***************************************!*\
  !*** ./src/js/modules/logoHistory.js ***!
  \***************************************/
/*! exports provided: pushHistoryLogo, replaceHistoryLogo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pushHistoryLogo\", function() { return pushHistoryLogo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"replaceHistoryLogo\", function() { return replaceHistoryLogo; });\nconst logoLink = document.querySelector('.logo a');\r\n// перезаписываем функцию клика по логотипу\r\nfunction pushHistoryLogo() {\r\n    logoLink.onclick = event => {\r\n        event.preventDefault();\r\n        history.pushState(null, null);\r\n\r\n        const search = document.querySelector('.search'),\r\n            cards = document.querySelector('.cards'),\r\n            company = document.querySelector('.company');\r\n\r\n        company.innerHTML = '';\r\n        search.style.display = 'grid';\r\n        cards.style.display = 'block';\r\n        replaceHistoryLogo();\r\n    };\r\n}\r\n\r\nfunction replaceHistoryLogo() {\r\n    logoLink.onclick = event => {\r\n        event.preventDefault();\r\n        history.replaceState(null, null);\r\n\r\n        const search = document.querySelector('.search'),\r\n            cards = document.querySelector('.cards'),\r\n            company = document.querySelector('.company');\r\n\r\n        company.innerHTML = '';\r\n        search.style.display = 'grid';\r\n        cards.style.display = 'block';\r\n    };\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/modules/logoHistory.js?");

/***/ }),

/***/ "./src/js/modules/reload.js":
/*!**********************************!*\
  !*** ./src/js/modules/reload.js ***!
  \**********************************/
/*! exports provided: reload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reload\", function() { return reload; });\n/* harmony import */ var _showCards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showCards */ \"./src/js/modules/showCards.js\");\n/* harmony import */ var _services_companyRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/companyRender */ \"./src/js/services/companyRender.js\");\n\r\n\r\n\r\nfunction reload() {\r\n    window.addEventListener('popstate', event => {\r\n        //отслеживание события изменения state и выполнение соответсвующих действий\r\n        if (event.state == null) {\r\n            const search = document.querySelector('.search'),\r\n                cards = document.querySelector('.cards'),\r\n                company = document.querySelector('.company');\r\n\r\n            company.innerHTML = '';\r\n            search.style.display = 'grid';\r\n            cards.style.display = 'block';\r\n        } else {\r\n            const search = document.querySelector('.search'),\r\n                cards = document.querySelector('.cards');\r\n\r\n            search.style.display = 'none';\r\n            cards.style.display = 'none';\r\n\r\n            let company;\r\n\r\n            _showCards__WEBPACK_IMPORTED_MODULE_0__[\"arrayCompany\"].filter(item => {\r\n                if (item.id == event.state.id) {\r\n                    company = item;\r\n                }\r\n            });\r\n            let { id, color, location, logo, name, position, schedule, date, descr, site } = company;\r\n            new _services_companyRender__WEBPACK_IMPORTED_MODULE_1__[\"default\"](id, color, location, logo, name, position, schedule, date, descr, site).render();\r\n\r\n        }\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/modules/reload.js?");

/***/ }),

/***/ "./src/js/modules/showCards.js":
/*!*************************************!*\
  !*** ./src/js/modules/showCards.js ***!
  \*************************************/
/*! exports provided: showCards, arrayCompany */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showCards\", function() { return showCards; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"arrayCompany\", function() { return arrayCompany; });\n/* harmony import */ var _services_getResourse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/getResourse */ \"./src/js/services/getResourse.js\");\n/* harmony import */ var _services_cardRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cardRender */ \"./src/js/services/cardRender.js\");\n\r\n\r\n\r\nlet arrayCompany;\r\n\r\nasync function showCards() {\r\n\r\n    const btnShowMore = document.querySelector('#showMore');\r\n    // счетчик показанных карточек\r\n    let countCard = 0,\r\n        cardMax = 12,\r\n        filtrerArr = [];\r\n\r\n    arrayCompany = await Object(_services_getResourse__WEBPACK_IMPORTED_MODULE_0__[\"getResource\"])('db.json').then(res => res.company);\r\n    // сортировка массива\r\n    arrayCompany.sort(function sortArr(a, b) {\r\n        return new Date(b.date) - new Date(a.date);\r\n    });\r\n    // назначение события на кнопку showmore \r\n    btnShowMore.onclick = event => {\r\n        event.preventDefault();\r\n        showCard(arrayCompany);\r\n    };\r\n\r\n    function showCard(arr) {\r\n        for (countCard; countCard < arr.length; countCard++) {\r\n            if (countCard < cardMax) {\r\n                let { id, color, location, logo, name, position, schedule, date } = arr[countCard];\r\n                new _services_cardRender__WEBPACK_IMPORTED_MODULE_1__[\"Card\"](id, color, location, logo, name, position, schedule, date).render();\r\n            } else {\r\n                break;\r\n            }\r\n        }\r\n        if (countCard >= arr.length) {\r\n            btnShowMore.style.display = 'none';\r\n        } else {\r\n            btnShowMore.style.display = 'block';\r\n        }\r\n        cardMax += 12;\r\n    }\r\n\r\n    showCard(arrayCompany);\r\n\r\n    //Filter\r\n    const filterTitle = document.querySelector('#filter'),\r\n        filterLocation = document.querySelector('#location'),\r\n        filterShedule = document.querySelector('#shedule'),\r\n        btnSearch = document.querySelectorAll('[data-search]');\r\n    // запрет на ввод всех знаков кроме букв\r\n    const inptusText = document.querySelectorAll('input[type=text]');\r\n    console.log(filterTitle);\r\n    inptusText.forEach(item => {\r\n        item.addEventListener('input', () => {\r\n            item.value = item.value.replace(/[^A-Z, a-z, А-Я, а-я, &, ']/g, '');\r\n        });\r\n    });\r\n\r\n    function notFound() {\r\n        if (filtrerArr.length == 0) {\r\n            let title = document.createElement('h2');\r\n            title.classList.add('title');\r\n            title.textContent = 'Not Found';\r\n            _services_cardRender__WEBPACK_IMPORTED_MODULE_1__[\"cardsWrapper\"].append(title);\r\n        }\r\n    } \r\n    \r\n    btnSearch.forEach(item => {\r\n        item.addEventListener('click', (event) => {\r\n            event.preventDefault();\r\n\r\n            btnShowMore.style.display = '';\r\n            _services_cardRender__WEBPACK_IMPORTED_MODULE_1__[\"cardsWrapper\"].innerHTML = '';\r\n            countCard = 0;\r\n            cardMax = 12;\r\n\r\n            let fullTime = '',\r\n                filterValue = filterTitle.value.toLowerCase(),\r\n                locationValue = filterLocation.value.toLowerCase();\r\n\r\n            if (filterShedule.checked) {\r\n                fullTime = 'Full Time';\r\n            }\r\n            function filterTrue() {\r\n                notFound();\r\n                btnShowMore.onclick = event => {\r\n                    event.preventDefault();\r\n                    showCard(filtrerArr);\r\n                };\r\n                showCard(filtrerArr);\r\n            }\r\n            switch (true) {\r\n\r\n                case (filterShedule.checked && locationValue !== '' && filterValue !== ''):\r\n                    filtrerArr = arrayCompany.filter(({ schedule, location, name, position }) => {\r\n                        if (schedule == fullTime && location.toLowerCase() == locationValue.trim() && (filterValue.trim() == name.toLowerCase().trim() || filterValue.trim() == position.toLowerCase().trim())) {\r\n                            return {};\r\n                        }\r\n                    });\r\n                    filterTrue();\r\n                    break;\r\n\r\n                case (filterShedule.checked && locationValue !== ''):\r\n                    filtrerArr = arrayCompany.filter(({ schedule, location }) => {\r\n                        if (schedule == fullTime && location.toLowerCase() == locationValue.trim()) {\r\n                            return {};\r\n                        }\r\n                    });\r\n                    filterTrue();\r\n                    break;\r\n\r\n                case (filterShedule.checked && filterValue !== ''):\r\n                    filtrerArr = arrayCompany.filter(({ schedule, name, position }) => {\r\n                        if (schedule == fullTime && (filterValue.trim() == name.toLowerCase() || filterValue.trim() == position.toLowerCase())) {\r\n                            return {};\r\n                        }\r\n                    });\r\n                    filterTrue();\r\n                    break;\r\n\r\n                case (locationValue !== '' && filterValue !== ''):\r\n                    filtrerArr = arrayCompany.filter(({ location, name, position }) => {\r\n                        if (location.toLowerCase() == locationValue.trim() && (filterValue.trim() == name.toLowerCase() || filterValue.trim() == position.toLowerCase())) {\r\n                            return {};\r\n                        }\r\n                    });\r\n                    filterTrue();\r\n                    break;\r\n\r\n                case (filterShedule.checked || locationValue !== '' || filterValue !== ''):\r\n                    filtrerArr = arrayCompany.filter(({ schedule, location, name, position }) => {\r\n                        if (schedule == fullTime || location.toLowerCase() == locationValue.trim() || filterValue.trim() == name.toLowerCase() || filterValue.trim() == position.toLowerCase()) {\r\n                            return {};\r\n                        }\r\n                    });\r\n                    filterTrue();\r\n                    break;\r\n\r\n                default:\r\n                    btnShowMore.onclick = event => {\r\n                        event.preventDefault();\r\n                        showCard(arrayCompany);\r\n                    };\r\n                    showCard(arrayCompany);\r\n            }\r\n        });\r\n    });\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/modules/showCards.js?");

/***/ }),

/***/ "./src/js/modules/theme.js":
/*!*********************************!*\
  !*** ./src/js/modules/theme.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return theme; });\nfunction theme() {\r\n    const root = document.querySelector(':root'),\r\n        checkTheme = document.querySelector('#theme');\r\n\r\n    function setNewVarCss(bgColor, cardColor, textColor, checkboxColor, buttonColorActive, buttonColorNotActive,btnSiteCompanyTextColor, bgFilter) {\r\n        root.style.setProperty('--bg', bgColor);\r\n        root.style.setProperty('--card_color', cardColor);\r\n        root.style.setProperty('--text_color', textColor);\r\n        root.style.setProperty('--bg_checkbox', checkboxColor);\r\n        root.style.setProperty('--btn_site_company', buttonColorActive);\r\n        root.style.setProperty('--btn_site_company_active', buttonColorNotActive);\r\n        root.style.setProperty('--btn_site_company_text_color', btnSiteCompanyTextColor);\r\n        root.style.setProperty('--filter_mob_bg', bgFilter);\r\n    }\r\n\r\n    function themeChenge() {\r\n        if (localStorage.getItem('theme') === 'light') {\r\n            setNewVarCss('#F4F6F8', 'white', '#19202D', 'rgba(25, 32, 45, .1)', 'rgba(89, 100, 224, .1)', 'rgba(89, 100, 224, .35)', '#5964E0', '#6E8098');\r\n        }\r\n\r\n        if (localStorage.getItem('theme') === 'dark') {\r\n            checkTheme.checked = true;\r\n            setNewVarCss('#121721', '#19202D', '#FFFFFF', 'rgba(255, 255, 255, .1)', 'rgba(255, 255, 255, .1)', 'rgba(255, 255, 255, .35)', 'white', 'white');\r\n        }\r\n    }\r\n\r\n    themeChenge();\r\n\r\n    checkTheme.addEventListener('click', () => {\r\n        checkTheme.classList.add('active');\r\n        if (checkTheme.checked) {\r\n            localStorage.setItem('theme', 'dark');\r\n            themeChenge();\r\n        } else {\r\n            localStorage.setItem('theme', 'light');\r\n            themeChenge();\r\n        }\r\n    });\r\n}\n\n//# sourceURL=webpack:///./src/js/modules/theme.js?");

/***/ }),

/***/ "./src/js/services/cardRender.js":
/*!***************************************!*\
  !*** ./src/js/services/cardRender.js ***!
  \***************************************/
/*! exports provided: Card, cardsWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Card\", function() { return Card; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cardsWrapper\", function() { return cardsWrapper; });\nconst cardsWrapper = document.querySelector('.cards__wrapper');\r\n//рендер карточки компании\r\nclass Card {\r\n    constructor(id, color, location, logo, name, position, schedule, date) {\r\n        this.id = id;\r\n        this.name = name;\r\n        this.logo = logo;\r\n        this.color = color;\r\n        this.position = position;\r\n        this.location = location;\r\n        this.schedule = schedule;\r\n        this.date = Math.floor(((Date.parse(new Date()) - Date.parse(date)) / (1000 * 60 * 60)));\r\n        switch(true) {\r\n            case(this.date < 24 && this.date > 0) : {\r\n                this.date = `${this.date}h ago`;\r\n                break;\r\n            }\r\n            case (this.date > 24) : {\r\n                this.date = `${Math.floor((Date.parse(new Date()) - Date.parse(date)) / (1000 * 60 * 60 * 24))}d ago`;\r\n                if (this.date.replace(/\\D/g, '') > 30) {\r\n                    this.date = `${Math.floor((Date.parse(new Date()) - Date.parse(date)) / (1000 * 60 * 60 * 24 * 30))}m ago`;\r\n                }\r\n                break;\r\n            }\r\n\r\n            case(this.date >= 0) : {\r\n                this.date = 'Now';\r\n                break;\r\n            }\r\n        }\r\n    }\r\n    render() {\r\n        let card = document.createElement('div');\r\n        card.classList.add('card');\r\n        card.innerHTML = `\r\n                <div class=\"card__logo\" style=\"background-color: ${this.color};\">\r\n                    <img src=${this.logo} alt=\"logo\">\r\n                </div>\r\n                <div class=\"card__descr\">\r\n                    ${this.date}<span>${this.schedule}</span>\r\n                </div>\r\n                <div class=\"card__position\"><a href=\"${this.id}\" data-link >${this.position}</a></div>\r\n                <div class=\"card__name\">${this.name}</div>\r\n                <div class=\"card__location\">${this.location}</div>\r\n            `;\r\n\r\n        cardsWrapper.append(card);\r\n    }\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/services/cardRender.js?");

/***/ }),

/***/ "./src/js/services/companyRender.js":
/*!******************************************!*\
  !*** ./src/js/services/companyRender.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Company; });\n/* harmony import */ var _cardRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardRender */ \"./src/js/services/cardRender.js\");\n\r\n//рендер описания компании\r\nclass Company extends _cardRender__WEBPACK_IMPORTED_MODULE_0__[\"Card\"] {\r\n    constructor(id, color, location, logo, name, position, schedule, date, descr, site) {\r\n        super(id, color, location, logo, name, position, schedule, date );\r\n        this.descr = descr;\r\n        this.site = site;\r\n    }\r\n    render() {\r\n        const company = document.querySelector('.company');\r\n        company.innerHTML = `\r\n        <div class=\"container\">\r\n            <div class=\"company__header\">\r\n                <div class=\"company__header-logo\" style=\"background-color: ${this.color};\">\r\n                    <img src=${this.logo} alt=\"logo\">\r\n                </div>\r\n                <div class=\"company__header-content\">\r\n                    <div class=\"company__header-content-text\">\r\n                        <div class=\"company__name\">\r\n                            ${this.name}\r\n                        </div>\r\n                        <div class=\"company__site\">\r\n                            ${this.site}\r\n                        </div>\r\n                    </div>\r\n                    <a class=\"btn btn_dimly\" href=\"https://www.google.com/\">\r\n                        Company Site\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <div class=\"company__content\">\r\n                <div class=\"company__content-header\">\r\n                    <div class=\"company__content-descr\">\r\n                        <div class=\"company__content-date\">\r\n                        ${this.date}<span>${this.schedule}</span>\r\n                        </div>\r\n                        <div class=\"company__content-position\">\r\n                            ${this.position}\r\n                        </div>\r\n                        <div class=\"company__content-location\">\r\n                            ${this.location}\r\n                        </div>\r\n                    </div>\r\n                    <button class=\"btn btn_company\">Apply Now</button>\r\n                </div>\r\n                <div class=\"company__text\">\r\n                    ${this.descr}\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"company__footer\">\r\n            <div class=\"container\">\r\n                <div class=\"company__footer-wrapper\">\r\n                    <div>\r\n                        <div class=\"company__footer-position\">\r\n                            ${this.position}\r\n                        </div>\r\n                        <span>\r\n                            So Digital Inc.\r\n                        </span>\r\n    \r\n                    </div>\r\n                    <button class=\"btn btn_company\">Apply Now</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        `;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/services/companyRender.js?");

/***/ }),

/***/ "./src/js/services/getResourse.js":
/*!****************************************!*\
  !*** ./src/js/services/getResourse.js ***!
  \****************************************/
/*! exports provided: getResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getResource\", function() { return getResource; });\nconst getResource = async (url) => {\r\n    let res = await fetch(url);\r\n    if (res.status == 200) {\r\n        const spinner = document.querySelector('.spinner');\r\n        spinner.style.display = 'none';\r\n    }\r\n    return await res.json();\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/services/getResourse.js?");

/***/ })

/******/ });