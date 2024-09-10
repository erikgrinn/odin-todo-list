/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --primary-color: #d58337;\n    --secondary-color: #025678;\n    --tertiary-color: #aeaeae;\n    --quarternary-color: #535353;\n}\n\nbody {\n    margin: 0;\n    font-family: \"Raleway\", sans-serif;\n    min-height: 100vh;\n    height:100%;\n    display: grid;\n    grid-template-columns: 2fr 13fr;\n    gap: 12px;\n    background-image: linear-gradient(var(--tertiary-color), var(--primary-color));\n    font-size: 20px;\n}\n\nbutton {\n    border-color: var(--primary-color);\n    border-radius: 6px;\n    outline: none;\n    background-color: var(--primary-color);\n    border-color: var(--tertiary-color);\n}\n\n/* #deleteBtn {\n    background-image: url(\"images/delete-outline.svg\");\n    height: 25px;\n    width: 25px;\n} */\n\n#sidebar {\n    background-color: var(--quarternary-color);\n    padding: 0 4px;\n    color: white;\n}\n\n#myProjectsHeader {\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    margin-bottom: 4px;\n    gap: 6px;\n}\n\n#projectTitles {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n#projectTitles button {\n    font-family: inherit;\n    font-size: 20px;\n    height: 30px;\n    width: auto;\n    border-radius: 24px;\n\n}\n\n/* #addProject,\n#addTask {\n\n} */\n\n#dialogTitle,\n#dialogContent {\n    border-radius: 24px;\n    /* background-color: var(--tertiary-color); */\n}\n\n#deleteProjectForm {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 12px;\n}\n\n#projectTitleForm {\n    width: 200px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 12px;\n}\n\n#newTitle {\n    height: 25px;\n    width: 150px;\n    outline: none;\n}\n\n#currentProjectTitle {\n    display: flex;\n    align-items: center;\n    margin-bottom: 8px;\n    gap: 6px;\n}\n\n.taskSection {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 8px;\n}\n\n.taskCard {\n    padding: 12px;\n    display: flex;\n    flex-direction: column;\n    width: 92%;\n    background-color: white;\n    border-left: 8px solid var(--secondary-color);\n    border-radius: 8px;\n    box-shadow: 12px 12px 12px rgb(0, 0, 0, 0.25);\n    transition: .2s;\n    margin-bottom: 6px;\n}\n\n#taskCardForm input {\n    border: none;\n}\n\n.taskCard:hover {\n    border-left-width: 12px;\n}\n\n#taskTitle {\n    margin-bottom: 4px;\n    background-color: none;\n}\n\n#taskDescription {\n    font-weight: lighter;\n    font-size: 20px;\n}\n\n#taskDate {\n    font-weight: lighter;\n    font-size: 16px;\n    width: 30%;\n}\n\n#taskPriority label {\n    background-color: inherit;\n    font-weight: lighter;\n    font-size: 16px;\n}\n\n#taskPriority {\n    border-radius: 16px;\n}\n\n.taskCard input,\n.taskCard textarea {\n\n    background: transparent;\n    font: inherit;\n    width: 100%;\n    outline: none;\n    border: none;\n    resize: none;\n}\n\n.taskCard .bottomCard {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n}\n\n.taskCard .dateandpriority {\n    display: flex;\n    gap: 24px;\n    font-weight: lighter;\n    font-size: 16px;\n    \n}\n\n.taskCard .icons {\n    display: flex;\n    gap: 4px;\n}\n\n.taskCard .icons img {\n    cursor: pointer;\n}\n\n.taskCard .icons button {\n    display: flex;\n    background: none;\n\tcolor: inherit;\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n}\n\n#saveBtn {\n    display: none;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks.js */ \"./src/tasks.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\n\n\n\n\nconst currentProject = document.getElementById('currentProject')\ncurrentProject.setAttribute('data-storage-letter', 'A')\n\nconst currentProjectTitle = document.querySelector('#currentProjectTitle > b').textContent\n\nwindow.deleteTask = _storage_js__WEBPACK_IMPORTED_MODULE_3__.deleteTask; // using onclick in html\n\n(0,_tasks_js__WEBPACK_IMPORTED_MODULE_2__.loadTasks)(currentProjectTitle)\n\n\n// need to preventdefault on enter key\n\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleProjectTitleSubmit: () => (/* binding */ handleProjectTitleSubmit),\n/* harmony export */   loadProjectTitles: () => (/* binding */ loadProjectTitles),\n/* harmony export */   storeProject: () => (/* binding */ storeProject)\n/* harmony export */ });\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.js */ \"./src/tasks.js\");\n\n\nconst projectTitles = document.getElementById('projectTitles')\nconst projectTemplate = document.createElement('button')\nconst delProjectBtn = document.getElementById('deleteProject')\nconst addProjectBtn = document.getElementById('addProject')\nconst deleteProjectDialog = document.getElementById('deleteProjectDialog')\nconst dialogTitle = document.querySelector('#dialogTitle')\nconst projectTitleForm = document.getElementById('projectTitleForm')\nconst currentProject = document.getElementById('currentProject')\n\nfunction initProjectStorage() {\n    const currentProjectTitle = document.querySelector('#currentProjectTitle > b').textContent;\n    localStorage.setItem(`project-${currentProjectTitle}`, currentProject.getAttribute('data-storage-letter'))\n}\n\nfunction getCurrentProjectTitle() {\n    return currentProject.children[0].querySelector('b').textContent\n}\n\nfunction deleteProject(event) {\n        const projects = getProjects();\n        console.log(projects)\n        \n        // Get the select dropdown\n        const projectSelect = document.getElementById('projectSelect');\n    \n        // Clear the previous options in the select dropdown\n        projectSelect.innerHTML = '';\n    \n        // Loop through each project and create an <option> element\n        projects.forEach(project => {\n            const option = document.createElement('option'); // Use document.createElement\n            option.textContent = project.key.substring(8); // Remove 'project-' prefix\n            option.value = project.key; // Set the value to the full key (for deletion)\n            console.log(option)\n            projectSelect.appendChild(option); // Add the option to the select dropdown\n        });\n\n        const deleteSubmitBtn = document.getElementById('confirmDeleteBtn')\n        deleteSubmitBtn.addEventListener('click', () => {\n            const selectedProjectKey = projectSelect.value; // Get the selected project's key\n\n            if (selectedProjectKey) {\n                // Remove the project from localStorage\n                localStorage.removeItem(selectedProjectKey);\n\n                // Remove the project button from the DOM\n                const projectClass = selectedProjectKey.substring(8).replace(/\\s+/g, '-'); // Class from project name\n                const projectButton = document.querySelector(`.${projectClass}`); // Select the corresponding project button\n                if (projectButton) {\n                    projectButton.remove(); // Remove the button from DOM\n                }\n\n                // Optionally, close the dialog\n                deleteProjectDialog.close();\n            }\n        });\n\n        // Show the dialog\n        deleteProjectDialog.showModal();\n    }\n\nfunction storeProject(newProject) {\n        const sortedProjects = getProjects()\n        const lastStoredValue = sortedProjects[sortedProjects.length-1].value\n        const lastLetter = lastStoredValue.charAt(0)\n        const nextLetter = String.fromCharCode(lastLetter.charCodeAt(0) + 1)\n        newProject.setAttribute('data-storage-letter', nextLetter)\n        localStorage.setItem(`project-${newProject.textContent}`, newProject.getAttribute('data-storage-letter'))\n}\n\nfunction handleProjectTitleSubmit(event) {\n    event.preventDefault();\n    const projTitle = document.getElementById('newTitle').value.trim();\n\n    if (projTitle) { // needed to prevent empty buttons being added\n        let newProj = projectTemplate.cloneNode()\n        newProj.textContent = projTitle\n        newProj.setAttribute('class', projTitle.replace(/\\s+/g, '-')) // class names can't have spaces\n        projectTitles.appendChild(newProj)\n        storeProject(newProj)\n\n        currentProject.children[0].querySelector('b').textContent = projTitle\n        currentProject.setAttribute('data-storage-letter', newProj.getAttribute('data-storage-letter'))\n\n        // remove all tasks except first hidden empty taskCard\n        if (currentProject.children[1].children[1]) {\n            for (let i = currentProject.children[1].children.length-1; i > 0; i--) {\n                currentProject.children[1].children[i].remove()\n            }\n        }\n    }\n    loadProjectTasks()\n    projectTitleForm.reset()\n    dialogTitle.close();\n}\n  \nconst cancelBtn = document.getElementById('cancelTitle')\ncancelBtn.addEventListener('click', () => {\n    projectTitleForm.reset()\n    dialogTitle.close()\n})\n\nfunction getProjects() {\n    // Step 1: Get all keys from localStorage\n    const keys = Object.keys(localStorage);\n\n    const projectKeys = keys.filter(key => key.startsWith('project'));\n\n    const keyValuePairs = projectKeys.map(key => ({\n        key: key,\n        value: localStorage.getItem(key) // Get the corresponding value for each key\n    }));\n\n    keyValuePairs.sort((a, b) => a.value.localeCompare(b.value));\n\n    // const sortedKeys = keyValuePairs.map(pair => pair.key);\n\n    return keyValuePairs\n\n}\n\nfunction loadProjectTitles() {\n    const projectList = getProjects().slice(1); // Retrieve sorted projects from localStorage (except home)\n    \n    projectList.forEach(project => {\n        const projTitle = project.key.replace('project-', ''); // Remove 'project-' prefix from keys\n        const storageLetter = project.value; // Storage letter is the value\n\n        // Create a new project button\n        let newProj = projectTemplate.cloneNode();\n        newProj.textContent = projTitle;\n        newProj.setAttribute('class', projTitle.replace(/\\s+/g, '-')); // Class name can't have spaces\n        newProj.setAttribute('data-storage-letter', storageLetter); // Set storage letter\n\n        projectTitles.appendChild(newProj);\n    });\n    loadProjectTasks()\n}\n\nfunction loadProjectTasks() {\n    const projectList = getProjects()\n    console.log(projectList)\n    projectList.forEach(project => {\n        console.log(projectList, project)\n        const projectName = project.key.substring(8)\n        const projectBtn = document.querySelector(`button.${projectName}`)\n\n        projectBtn.addEventListener('click', () => {\n            const currentProjectTitleElement = document.querySelector('#currentProjectTitle > b');\n            const currentProjectTitle = currentProjectTitleElement.textContent\n            if (currentProjectTitle !== projectName) {\n                for (let i = currentProject.children[1].children.length-1; i > 0; i--) {\n                    currentProject.children[1].children[i].remove()\n                }\n                currentProjectTitleElement.textContent = projectName\n                ;(0,_tasks_js__WEBPACK_IMPORTED_MODULE_0__.loadTasks)(projectName)\n            } else {\n                return\n            }\n        })\n    }\n)}\n\nprojectTitleForm.addEventListener('submit', handleProjectTitleSubmit);\naddProjectBtn.addEventListener('click', () => dialogTitle.showModal())\ndelProjectBtn.addEventListener('click', deleteProject)\n\ninitProjectStorage()\nloadProjectTitles()\n\n\n// localStorage.clear()\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/project.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteTask: () => (/* binding */ deleteTask),\n/* harmony export */   saveTask: () => (/* binding */ saveTask),\n/* harmony export */   storeTask: () => (/* binding */ storeTask)\n/* harmony export */ });\nfunction storeTask(task) {\n  let newTaskNum = task.getAttribute(`data-task-num`)\n  const currentProjectTitle = document.querySelector('#currentProjectTitle > b').textContent;\n  const taskCardForm = document.querySelector(`form#${currentProjectTitle}-${newTaskNum}`);\n  const taskTitle = taskCardForm.querySelector('#taskTitle');\n  const taskDescription = taskCardForm.querySelector('#taskDescription');\n  const taskDate = taskCardForm.querySelector('#taskDate');\n  const taskPriority = taskCardForm.querySelector('#taskPriority');\n\n  // this is preventing project titles from loading properly\n  taskCardForm.addEventListener('keydown', function(event) {\n    if (event.key === 'Enter') { // Check if the 'Enter' key is pressed\n        event.preventDefault();   // Prevent the default form submission\n    }\n  });\n\n  let taskData = {\n      taskTitle: taskTitle.value.trim(),\n      taskDescription: taskDescription.value.trim(),\n      taskDate: taskDate.value.trim(),\n      taskPriority: taskPriority.value.trim()\n  };\n\n    // change event listeners\n  [taskTitle, taskDescription, taskDate, taskPriority].forEach(input => {\n    input.addEventListener('change', () => {\n        taskData[input.id] = input.value.trim();\n        localStorage.setItem(`${taskCardForm.id}`, JSON.stringify(taskData));\n    });\n  });\n\n  localStorage.setItem(`${taskCardForm.id}`, JSON.stringify(taskData));\n}\n\nfunction saveTask(target) {\n  let newTaskNum = target.getAttribute(`data-task-num`)\n  const currentProjectTitle = document.querySelector('#currentProjectTitle > b').textContent\n  const taskCardForm = document.querySelector(`form#${currentProjectTitle}-${newTaskNum}`);\n  const taskTitle = taskCardForm.querySelector('#taskTitle');\n  const taskDescription = taskCardForm.querySelector('#taskDescription');\n  const taskDate = taskCardForm.querySelector('#taskDate');\n  const taskPriority = taskCardForm.querySelector('#taskPriority');\n\n  let taskData = {\n      taskTitle: taskTitle.value.trim(),\n      taskDescription: taskDescription.value.trim(),\n      taskDate: taskDate.value.trim(),\n      taskPriority: taskPriority.value.trim()\n  };\n\n  localStorage.setItem(`${taskCardForm.id}`, JSON.stringify(taskData));\n}\n\nfunction deleteTask(target) {\n  const taskSection = currentProject.children[1]\n  const currentProjectTitle = document.querySelector('#currentProjectTitle > b').textContent\n\n  // remove target task card\n  const taskCard = target.closest('.taskCard')\n  const taskCardForm = target.closest('form');\n  const taskId = taskCardForm.id; \n  localStorage.removeItem(`${taskId}`);\n  taskCard.remove();\n\n  // remove what was the last task card from localStorage, (can be redundant)\n  const letterPart = taskId.match(/[a-zA-Z]+/)[0]; \n  const numberPart = taskSection.childElementCount\n  const lastTaskId = `${letterPart}-${numberPart}`; \n  localStorage.removeItem(`${lastTaskId}`)\n\n  // reassign task-nums\n  for (let i=1; i<taskSection.children.length; i++) {\n    taskSection.children[i].setAttribute('data-task-num', i)\n    taskSection.children[i].children[0].setAttribute('id',`${letterPart}-${i}`) // form id\n    // taskSection.children[i].querySelector('button[type=\"submit\"]').setAttribute('form', `A${i}`) // submit button tied to form id\n    saveTask(taskSection.children[i])\n  }\n}\n\n// localStorage.clear()\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/storage.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   loadTasks: () => (/* binding */ loadTasks)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\nconst currentProjectTitle = document.querySelector('#currentProjectTitle > b').textContent\nconst taskSection = currentProject.children[1]\nconst taskCardTemplate = document.querySelector('.taskCard')\nconst addTaskBtn = document.getElementById('addTask')\n\nfunction projectKeys(currentProjectTitle) {\n    \n    let keys = []\n\n    for (let i = 0; i < localStorage.length; i++) {\n        const key = localStorage.key(i);\n\n        // Check if the key starts with the specified letter or string\n        if (key.startsWith(`${currentProjectTitle}-`)) {\n            keys.push(key)\n        }\n    }\n    return keys;\n}\n\nfunction loadTasks(currentProjectTitle) {\n    const taskIds = projectKeys(currentProjectTitle); // Ensure currentProject is correctly referenced.\n    if (!taskIds) {\n        return\n    }\n\n    taskIds.sort((a, b) => {\n        // Extract the last 2 characters of both strings and convert them to numbers\n        const numA = parseInt(a.slice(-2), 10); \n        const numB = parseInt(b.slice(-2), 10);\n    \n        // Compare the numeric parts\n        return numB - numA;\n    });\n\n    for (let i=0; i<taskIds.length; i++) {\n        // Retrieve the task data from localStorage\n        const storedTaskData = localStorage.getItem(`${taskIds[i]}`);\n        if (storedTaskData) {\n            addTask(storedTaskData)\n        } \n    }\n}\n\nfunction addTask(storedTaskData) {\n        let newTask = taskCardTemplate.cloneNode(true) // clone node with children\n        newTask.style.display = 'block'\n        setTaskProperties(newTask)\n        taskSection.appendChild(newTask)\n        \n        // if taskData passed from loadTasks()\n        if (storedTaskData) {\n            const taskData = JSON.parse(storedTaskData);\n        \n            // Find the form elements\n            const taskTitle = newTask.querySelector('#taskTitle');\n            const taskDescription = newTask.querySelector('#taskDescription');\n            const taskDate = newTask.querySelector('#taskDate');\n            const taskPriority = newTask.querySelector('#taskPriority');\n\n            // Populate the form fields with the retrieved data\n            taskTitle.value = taskData.taskTitle;\n            taskDescription.value = taskData.taskDescription;\n            taskDate.value = taskData.taskDate;\n            taskPriority.value = taskData.taskPriority;\n            (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.storeTask)(newTask)\n        } else {\n            console.log(newTask)\n            ;(0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.storeTask)(newTask)\n        }\n    }\n\nfunction setTaskProperties(newTask) {\n    const currentProjectTitle = document.querySelector('#currentProjectTitle > b').textContent\n    newTask.setAttribute('data-task-num', taskSection.children.length) // taskCard\n    newTask.children[0].setAttribute('id', `${currentProjectTitle}-${taskSection.children.length}`) // form id\n\n\n}\n\naddTaskBtn.addEventListener('click', () => addTask())\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/tasks.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;