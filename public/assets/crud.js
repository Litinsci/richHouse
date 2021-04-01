var crud;crud =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/private/CRUD.js":
/*!****************************!*\
  !*** ./js/private/CRUD.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deliteNewsHendler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deliteNewsHendler */ "./js/private/deliteNewsHendler.js");
/* harmony import */ var _deliteNewsHendler__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deliteNewsHendler__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _updateNewsHendler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateNewsHendler */ "./js/private/updateNewsHendler.js");
/* harmony import */ var _updateNewsHendler__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_updateNewsHendler__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _newsButtonAdd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newsButtonAdd */ "./js/private/newsButtonAdd.js");
/* harmony import */ var _newsButtonAdd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_newsButtonAdd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _newsCRUDaddButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newsCRUDaddButtons */ "./js/private/newsCRUDaddButtons.js");
/* harmony import */ var _newsCRUDaddButtons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_newsCRUDaddButtons__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./js/private/deliteNewsHendler.js":
/*!*****************************************!*\
  !*** ./js/private/deliteNewsHendler.js ***!
  \*****************************************/
/***/ (() => {

document.querySelectorAll(".delete-entity-button").forEach(function (btn) {
  btn.addEventListener('click', function () {
    var id = btn.dataset.idEntity;
    var url = btn.dataset.urlEntity;
    var date = btn.dataset.dateEntity;
    console.log(url);

    if (confirm("\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043D\u043E\u0432\u043E\u0441\u0442\u044C \u043E\u0442 ".concat(date, " \u0434\u0430\u0442\u044B?"))) {
      fetch(url + id, {
        method: 'DELETE'
      }).then(function (response) {
        return response.json();
      }).then(function (result) {
        if (result.status) {
          document.location.reload();
        } else {
          alert('Кавальски всё пощло не по плану');
        }
      });
    }
  });
});

/***/ }),

/***/ "./js/private/newsButtonAdd.js":
/*!*************************************!*\
  !*** ./js/private/newsButtonAdd.js ***!
  \*************************************/
/***/ (() => {

// document.querySelector('.card-body-news-CRUD > .btn-success').onclick = () =>{
//     document.location.href = "/NewsCRUD/addNews";
// }

/***/ }),

/***/ "./js/private/newsCRUDaddButtons.js":
/*!******************************************!*\
  !*** ./js/private/newsCRUDaddButtons.js ***!
  \******************************************/
/***/ (() => {

// module.exports =  document.querySelector(".card-body-news-CRUD__button-back").onclick = ()=>{
//     alert(1);
// }

/***/ }),

/***/ "./js/private/updateNewsHendler.js":
/*!*****************************************!*\
  !*** ./js/private/updateNewsHendler.js ***!
  \*****************************************/
/***/ (() => {

var buttons = document.querySelectorAll(".card-body-news-CRUD__row");
buttons.forEach(function (btn) {
  btn.childNodes[3].childNodes[2].addEventListener('click', function (e) {
    var idNews = btn.childNodes[0].innerText;
    fetch("/NewsCRUD/updateNews" + idNews, {
      method: 'GET'
    }).then(function () {
      document.location.href = "/NewsCRUD/updateNews" + idNews;
    });
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./js/private/CRUD.js");
/******/ })()
;
//# sourceMappingURL=crud.js.map