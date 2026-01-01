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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --primary-color: #d58337;\r\n  --secondary-color: #025678;\r\n  --tertiary-color: #aeaeae;\r\n  --quaternary-color: #535353;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  font-family: \"Raleway\", sans-serif;\r\n  min-height: 100vh;\r\n  height: 100%;\r\n  display: grid;\r\n  grid-template-columns: 2fr 13fr;\r\n  gap: 12px;\r\n  background-image: linear-gradient(\r\n    var(--tertiary-color),\r\n    var(--primary-color)\r\n  );\r\n  font-size: 20px;\r\n}\r\n\r\nbutton {\r\n  border-color: var(--primary-color);\r\n  border-radius: 6px;\r\n  outline: none;\r\n  background-color: var(--primary-color);\r\n  border-color: var(--tertiary-color);\r\n}\r\n\r\n/* #deleteBtn {\r\n    background-image: url(\"images/delete-outline.svg\");\r\n    height: 25px;\r\n    width: 25px;\r\n} */\r\n\r\n#sidebar {\r\n  background-color: var(--quaternary-color);\r\n  padding: 0 4px;\r\n  color: white;\r\n}\r\n\r\n#myProjectsHeader {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  margin-bottom: 4px;\r\n  gap: 6px;\r\n}\r\n\r\n#projectTitles {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 4px;\r\n}\r\n\r\n#projectTitles button {\r\n  font-family: inherit;\r\n  font-size: 20px;\r\n  height: 30px;\r\n  width: auto;\r\n  border-radius: 24px;\r\n}\r\n\r\n/* #addProject,\r\n#addTask {\r\n\r\n} */\r\n\r\n#dialogTitle,\r\n#dialogContent {\r\n  border-radius: 24px;\r\n  /* background-color: var(--tertiary-color); */\r\n}\r\n\r\n#deleteProjectForm {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 12px;\r\n}\r\n\r\n#projectTitleForm {\r\n  width: 200px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 12px;\r\n}\r\n\r\n#newTitle {\r\n  height: 25px;\r\n  width: 150px;\r\n  outline: none;\r\n}\r\n\r\n#currentProjectTitle {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-bottom: 8px;\r\n  gap: 6px;\r\n}\r\n\r\n.taskSection {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 8px;\r\n}\r\n\r\n.taskCard {\r\n  padding: 12px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 92%;\r\n  background-color: white;\r\n  border-left: 8px solid var(--secondary-color);\r\n  border-radius: 8px;\r\n  box-shadow: 12px 12px 12px rgb(0, 0, 0, 0.25);\r\n  transition: 0.2s;\r\n  margin-bottom: 6px;\r\n}\r\n\r\n#taskCardForm input {\r\n  border: none;\r\n}\r\n\r\n.taskCard:hover {\r\n  border-left-width: 12px;\r\n}\r\n\r\n#taskTitle {\r\n  margin-bottom: 4px;\r\n  background-color: none;\r\n}\r\n\r\n#taskDescription {\r\n  font-weight: lighter;\r\n  font-size: 20px;\r\n}\r\n\r\n#taskDate {\r\n  font-weight: lighter;\r\n  font-size: 16px;\r\n  width: 30%;\r\n}\r\n\r\n#taskPriority label {\r\n  background-color: inherit;\r\n  font-weight: lighter;\r\n  font-size: 16px;\r\n}\r\n\r\n#taskPriority {\r\n  border-radius: 16px;\r\n}\r\n\r\n.taskCard input,\r\n.taskCard textarea {\r\n  background: transparent;\r\n  font: inherit;\r\n  width: 100%;\r\n  outline: none;\r\n  border: none;\r\n  resize: none;\r\n}\r\n\r\n.taskCard .bottomCard {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.taskCard .dateandpriority {\r\n  display: flex;\r\n  gap: 24px;\r\n  font-weight: lighter;\r\n  font-size: 16px;\r\n}\r\n\r\n.taskCard .icons {\r\n  display: flex;\r\n  gap: 4px;\r\n}\r\n\r\n.taskCard .icons img {\r\n  cursor: pointer;\r\n}\r\n\r\n.taskCard .icons button {\r\n  display: flex;\r\n  background: none;\r\n  color: inherit;\r\n  border: none;\r\n  padding: 0;\r\n  font: inherit;\r\n  cursor: pointer;\r\n  outline: inherit;\r\n}\r\n\r\n#saveBtn {\r\n  display: none;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-todo-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks.js */ \"./src/tasks.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\r\n\r\n\r\n\r\n\r\nconst currentProject = document.getElementById(\"currentProject\");\r\ncurrentProject.setAttribute(\"data-storage-letter\", \"A\");\r\n\r\nconst currentProjectTitle = document.querySelector(\r\n  \"#currentProjectTitle > b\",\r\n).textContent;\r\n\r\nwindow.deleteTask = _storage_js__WEBPACK_IMPORTED_MODULE_3__.deleteTask; // using onclick in html\r\n\r\n(0,_tasks_js__WEBPACK_IMPORTED_MODULE_2__.loadTasks)(currentProjectTitle);\r\n\n\n//# sourceURL=webpack://odin-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleProjectTitleSubmit: () => (/* binding */ handleProjectTitleSubmit),\n/* harmony export */   loadProjectTitles: () => (/* binding */ loadProjectTitles),\n/* harmony export */   storeProject: () => (/* binding */ storeProject)\n/* harmony export */ });\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.js */ \"./src/tasks.js\");\n\r\n\r\nconst projectTitles = document.getElementById(\"projectTitles\");\r\nconst projectTemplate = document.createElement(\"button\");\r\nconst delProjectBtn = document.getElementById(\"deleteProject\");\r\nconst addProjectBtn = document.getElementById(\"addProject\");\r\nconst deleteProjectDialog = document.getElementById(\"deleteProjectDialog\");\r\nconst dialogTitle = document.querySelector(\"#dialogTitle\");\r\nconst projectTitleForm = document.getElementById(\"projectTitleForm\");\r\nconst currentProject = document.getElementById(\"currentProject\");\r\n\r\nfunction initProjectStorage() {\r\n  const currentProjectTitle = document.querySelector(\"#currentProjectTitle > b\").textContent;\r\n  localStorage.setItem(`project-${currentProjectTitle}`, currentProject.getAttribute(\"data-storage-letter\"));\r\n}\r\n\r\nfunction getCurrentProjectTitle() {\r\n  return currentProject.children[0].querySelector(\"b\").textContent;\r\n}\r\n\r\nfunction deleteProject(event) {\r\n  const currentProjectTitle = document.querySelector(\"#currentProjectTitle > b\").textContent;\r\n  if (currentProjectTitle === \"Main\") {\r\n    alert(\"The Main project cannot be deleted.\");\r\n    return;\r\n  }\r\n\r\n  const projects = getProjects();\r\n  // Get the select dropdown\r\n  const projectSelect = document.getElementById(\"projectSelect\");\r\n\r\n  // Clear the previous options in the select dropdown\r\n  projectSelect.innerHTML = \"\";\r\n\r\n  // Loop through each project and create an <option> element\r\n  projects.forEach((project) => {\r\n    const projTitle = project.key.substring(8); // Remove 'project-' prefix\r\n    if (projTitle === \"Main\") return; // Skip if project is 'Main'\r\n\r\n    const option = document.createElement(\"option\"); // Use document.createElement\r\n    option.textContent = project.key.substring(8); // Remove 'project-' prefix\r\n    option.value = project.key; // Set the value to the full key (for deletion)\r\n    projectSelect.appendChild(option); // Add the option to the select dropdown\r\n  });\r\n\r\n  const deleteSubmitBtn = document.getElementById(\"confirmDeleteBtn\");\r\n  deleteSubmitBtn.addEventListener(\"click\", () => {\r\n    const selectedProjectKey = projectSelect.value; // Get the selected project's key\r\n\r\n    if (selectedProjectKey) {\r\n      // Remove the project from localStorage\r\n      localStorage.removeItem(selectedProjectKey);\r\n\r\n      // Remove the project button from the DOM\r\n      const projectClass = selectedProjectKey.substring(8).replace(/\\s+/g, \"-\"); // Class from project name\r\n      const projectButton = document.querySelector(`.${projectClass}`); // Select the corresponding project button\r\n      if (projectButton) {\r\n        projectButton.remove(); // Remove the button from DOM\r\n      }\r\n\r\n      // Optionally, close the dialog\r\n      deleteProjectDialog.close();\r\n    }\r\n  });\r\n\r\n  // Show the dialog\r\n  deleteProjectDialog.showModal();\r\n}\r\n\r\nfunction storeProject(newProject) {\r\n  const sortedProjects = getProjects();\r\n  const lastStoredValue = sortedProjects[sortedProjects.length - 1].value;\r\n  const lastLetter = lastStoredValue.charAt(0);\r\n  const nextLetter = String.fromCharCode(lastLetter.charCodeAt(0) + 1);\r\n  newProject.setAttribute(\"data-storage-letter\", nextLetter);\r\n  localStorage.setItem(`project-${newProject.textContent}`, newProject.getAttribute(\"data-storage-letter\"));\r\n\r\n  // console.log(sortedProjects)\r\n  // for (let i = 1; i < sortedProjects.length; i++) {\r\n  //     let prevLetter = sortedProjects[i - 1].value;\r\n  //     let currentLetter = sortedProjects[i].value;\r\n  //     console.log(prevLetter, currentLetter)\r\n  //     // Compare ASCII values of consecutive letters\r\n  //     let diff = currentLetter.charCodeAt(0) - prevLetter.charCodeAt(0);\r\n  //     console.log(diff)\r\n  //     if (diff > 1) {\r\n  //         const skippedLetter = String.fromCharCode(lastLetter.charCodeAt(0) + 1)\r\n  //         console.log(skippedLetter)\r\n  //         newProject.setAttribute('data-storage-letter', skippedLetter)\r\n  //         localStorage.setItem(`${sortedProjects[i].key}`, newProject.getAttribute('data-storage-letter'))\r\n  //     }\r\n  //     // else {\r\n  //     //     // const letter = String.fromCharCode(lastLetter.charCodeAt(0) + 1)\r\n  //     //     newProject.setAttribute('data-storage-letter', currentLetter)\r\n  //     //     localStorage.setItem(`project-${newProject.textContent}`, newProject.getAttribute('data-storage-letter'))\r\n  //     // }\r\n  // }\r\n}\r\n\r\nfunction handleProjectTitleSubmit(event) {\r\n  event.preventDefault();\r\n  const projTitle = document.getElementById(\"newTitle\").value.trim();\r\n\r\n  if (projTitle) {\r\n    // needed to prevent empty buttons being added\r\n    let newProj = projectTemplate.cloneNode();\r\n    newProj.textContent = projTitle;\r\n    newProj.setAttribute(\"class\", projTitle.replace(/\\s+/g, \"-\")); // class names can't have spaces\r\n    projectTitles.appendChild(newProj);\r\n    storeProject(newProj);\r\n\r\n    currentProject.children[0].querySelector(\"b\").textContent = projTitle;\r\n    currentProject.setAttribute(\"data-storage-letter\", newProj.getAttribute(\"data-storage-letter\"));\r\n\r\n    // remove all tasks except first hidden empty taskCard\r\n    if (currentProject.children[1].children[1]) {\r\n      for (let i = currentProject.children[1].children.length - 1; i > 0; i--) {\r\n        currentProject.children[1].children[i].remove();\r\n      }\r\n    }\r\n  }\r\n  loadProjectTasks();\r\n  projectTitleForm.reset();\r\n  dialogTitle.close();\r\n}\r\n\r\nconst cancelBtn = document.getElementById(\"cancelTitle\");\r\ncancelBtn.addEventListener(\"click\", () => {\r\n  projectTitleForm.reset();\r\n  dialogTitle.close();\r\n});\r\n\r\nfunction getProjects() {\r\n  // Step 1: Get all keys from localStorage\r\n  const keys = Object.keys(localStorage);\r\n\r\n  const projectKeys = keys.filter((key) => key.startsWith(\"project\"));\r\n\r\n  const keyValuePairs = projectKeys.map((key) => ({\r\n    key: key,\r\n    value: localStorage.getItem(key), // Get the corresponding value for each key\r\n  }));\r\n\r\n  keyValuePairs.sort((a, b) => a.value.localeCompare(b.value));\r\n\r\n  // const sortedKeys = keyValuePairs.map(pair => pair.key);\r\n\r\n  return keyValuePairs;\r\n}\r\n\r\nfunction loadProjectTitles() {\r\n  projectTitles.innerHTML = \"\"; // Clear previous buttons, had to move dialog outside in html (probably better anyway)\r\n\r\n  const projectList = getProjects(); // Retrieve sorted projects from localStorage\r\n\r\n  projectList.forEach((project) => {\r\n    const projTitle = project.key.replace(\"project-\", \"\"); // Remove 'project-' prefix from keys\r\n    const storageLetter = project.value; // Storage letter is the value\r\n\r\n    // Create a new project button\r\n    let newProj = projectTemplate.cloneNode();\r\n    newProj.textContent = projTitle;\r\n    newProj.setAttribute(\"class\", projTitle.replace(/\\s+/g, \"-\")); // Class name can't have spaces\r\n    newProj.setAttribute(\"data-storage-letter\", storageLetter); // Set storage letter\r\n\r\n    projectTitles.appendChild(newProj);\r\n  });\r\n  loadProjectTasks();\r\n}\r\n\r\nfunction loadProjectTasks() {\r\n  const projectList = getProjects();\r\n  projectList.forEach((project) => {\r\n    const projectName = project.key.substring(8);\r\n    const projectBtn = document.querySelector(`button.${projectName}`);\r\n\r\n    if (!projectBtn) return; // Prevent error if button not found\r\n\r\n    projectBtn.addEventListener(\"click\", () => {\r\n      const currentProjectTitleElement = document.querySelector(\"#currentProjectTitle > b\");\r\n      const currentProjectTitle = currentProjectTitleElement.textContent;\r\n      if (currentProjectTitle !== projectName) {\r\n        for (let i = currentProject.children[1].children.length - 1; i > 0; i--) {\r\n          currentProject.children[1].children[i].remove();\r\n        }\r\n        currentProjectTitleElement.textContent = projectName;\r\n        (0,_tasks_js__WEBPACK_IMPORTED_MODULE_0__.loadTasks)(projectName);\r\n      } else {\r\n        return;\r\n      }\r\n    });\r\n  });\r\n}\r\n\r\nprojectTitleForm.addEventListener(\"submit\", handleProjectTitleSubmit);\r\naddProjectBtn.addEventListener(\"click\", () => dialogTitle.showModal());\r\ndelProjectBtn.addEventListener(\"click\", deleteProject);\r\n\r\ninitProjectStorage();\r\nloadProjectTitles();\r\n\r\n// localStorage.clear()\r\n\r\n\n\n//# sourceURL=webpack://odin-todo-list/./src/project.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteTask: () => (/* binding */ deleteTask),\n/* harmony export */   saveTask: () => (/* binding */ saveTask),\n/* harmony export */   storeTask: () => (/* binding */ storeTask)\n/* harmony export */ });\nfunction storeTask(task) {\r\n  let newTaskNum = task.getAttribute(`data-task-num`);\r\n  const currentProjectTitle = document.querySelector(\r\n    \"#currentProjectTitle > b\",\r\n  ).textContent;\r\n  const taskCardForm = document.querySelector(\r\n    `form#${currentProjectTitle}-${newTaskNum}`,\r\n  );\r\n  const taskTitle = taskCardForm.querySelector(\"#taskTitle\");\r\n  const taskDescription = taskCardForm.querySelector(\"#taskDescription\");\r\n  const taskDate = taskCardForm.querySelector(\"#taskDate\");\r\n  const taskPriority = taskCardForm.querySelector(\"#taskPriority\");\r\n\r\n  // this is preventing project titles from loading properly\r\n  taskCardForm.addEventListener(\"keydown\", function (event) {\r\n    if (event.key === \"Enter\") {\r\n      // Check if the 'Enter' key is pressed\r\n      event.preventDefault(); // Prevent the default form submission\r\n    }\r\n  });\r\n\r\n  let taskData = {\r\n    taskTitle: taskTitle.value.trim(),\r\n    taskDescription: taskDescription.value.trim(),\r\n    taskDate: taskDate.value.trim(),\r\n    taskPriority: taskPriority.value.trim(),\r\n  };\r\n\r\n  // change event listeners\r\n  [taskTitle, taskDescription, taskDate, taskPriority].forEach((input) => {\r\n    input.addEventListener(\"change\", () => {\r\n      taskData[input.id] = input.value.trim();\r\n      localStorage.setItem(`${taskCardForm.id}`, JSON.stringify(taskData));\r\n    });\r\n  });\r\n\r\n  localStorage.setItem(`${taskCardForm.id}`, JSON.stringify(taskData));\r\n}\r\n\r\nfunction saveTask(target) {\r\n  let newTaskNum = target.getAttribute(`data-task-num`);\r\n  const currentProjectTitle = document.querySelector(\r\n    \"#currentProjectTitle > b\",\r\n  ).textContent;\r\n  const taskCardForm = document.querySelector(\r\n    `form#${currentProjectTitle}-${newTaskNum}`,\r\n  );\r\n  const taskTitle = taskCardForm.querySelector(\"#taskTitle\");\r\n  const taskDescription = taskCardForm.querySelector(\"#taskDescription\");\r\n  const taskDate = taskCardForm.querySelector(\"#taskDate\");\r\n  const taskPriority = taskCardForm.querySelector(\"#taskPriority\");\r\n\r\n  let taskData = {\r\n    taskTitle: taskTitle.value.trim(),\r\n    taskDescription: taskDescription.value.trim(),\r\n    taskDate: taskDate.value.trim(),\r\n    taskPriority: taskPriority.value.trim(),\r\n  };\r\n\r\n  localStorage.setItem(`${taskCardForm.id}`, JSON.stringify(taskData));\r\n}\r\n\r\nfunction deleteTask(target) {\r\n  const currentProject = document.getElementById(\"currentProject\");\r\n  const taskSection = currentProject.children[1];\r\n\r\n  // remove target task card\r\n  const taskCard = target.closest(\".taskCard\");\r\n  const taskCardForm = target.closest(\"form\");\r\n  const taskId = taskCardForm.id;\r\n  localStorage.removeItem(`${taskId}`);\r\n  taskCard.remove();\r\n\r\n  // remove what was the last task card from localStorage, (can be redundant)\r\n  const letterPart = taskId.match(/[a-zA-Z]+/)[0];\r\n  const numberPart = taskSection.childElementCount;\r\n  const lastTaskId = `${letterPart}-${numberPart}`;\r\n  localStorage.removeItem(lastTaskId);\r\n\r\n  // reassign task-nums\r\n  for (let i = 1; i < taskSection.children.length; i++) {\r\n    taskSection.children[i].setAttribute(\"data-task-num\", i);\r\n    taskSection.children[i].children[0].setAttribute(\r\n      \"id\",\r\n      `${letterPart}-${i}`,\r\n    ); // form id\r\n    // taskSection.children[i].querySelector('button[type=\"submit\"]').setAttribute('form', `A${i}`) // submit button tied to form id\r\n    saveTask(taskSection.children[i]);\r\n  }\r\n}\r\n\r\n// localStorage.clear()\r\n\r\n\n\n//# sourceURL=webpack://odin-todo-list/./src/storage.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   loadTasks: () => (/* binding */ loadTasks)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\r\n\r\nconst currentProjectTitle = document.querySelector(\r\n  \"#currentProjectTitle > b\",\r\n).textContent;\r\nconst taskSection = currentProject.children[1];\r\nconst taskCardTemplate = document.querySelector(\".taskCard\");\r\nconst addTaskBtn = document.getElementById(\"addTask\");\r\n\r\nfunction projectKeys(currentProjectTitle) {\r\n  let keys = [];\r\n\r\n  for (let i = 0; i < localStorage.length; i++) {\r\n    const key = localStorage.key(i);\r\n\r\n    // Check if the key starts with the specified letter or string\r\n    if (key.startsWith(`${currentProjectTitle}-`)) {\r\n      keys.push(key);\r\n    }\r\n  }\r\n  return keys;\r\n}\r\n\r\nfunction loadTasks(currentProjectTitle) {\r\n  const taskIds = projectKeys(currentProjectTitle); // Ensure currentProject is correctly referenced.\r\n  if (!taskIds) {\r\n    return;\r\n  }\r\n\r\n  taskIds.sort((a, b) => {\r\n    // Extract the last 2 characters of both strings and convert them to numbers\r\n    const numA = parseInt(a.slice(-2), 10);\r\n    const numB = parseInt(b.slice(-2), 10);\r\n\r\n    // Compare the numeric parts\r\n    return numB - numA;\r\n  });\r\n\r\n  for (let i = 0; i < taskIds.length; i++) {\r\n    // Retrieve the task data from localStorage\r\n    const storedTaskData = localStorage.getItem(`${taskIds[i]}`);\r\n    if (storedTaskData) {\r\n      addTask(storedTaskData);\r\n    }\r\n  }\r\n}\r\n\r\nfunction addTask(storedTaskData) {\r\n  let newTask = taskCardTemplate.cloneNode(true); // clone node with children\r\n  newTask.style.display = \"block\";\r\n  setTaskProperties(newTask);\r\n  taskSection.appendChild(newTask);\r\n\r\n  // if taskData passed from loadTasks()\r\n  if (storedTaskData) {\r\n    const taskData = JSON.parse(storedTaskData);\r\n\r\n    // Find the form elements\r\n    const taskTitle = newTask.querySelector(\"#taskTitle\");\r\n    const taskDescription = newTask.querySelector(\"#taskDescription\");\r\n    const taskDate = newTask.querySelector(\"#taskDate\");\r\n    const taskPriority = newTask.querySelector(\"#taskPriority\");\r\n\r\n    // Populate the form fields with the retrieved data\r\n    taskTitle.value = taskData.taskTitle;\r\n    taskDescription.value = taskData.taskDescription;\r\n    taskDate.value = taskData.taskDate;\r\n    taskPriority.value = taskData.taskPriority;\r\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.storeTask)(newTask);\r\n  } else {\r\n    console.log(newTask);\r\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.storeTask)(newTask);\r\n  }\r\n}\r\n\r\nfunction setTaskProperties(newTask) {\r\n  const currentProjectTitle = document.querySelector(\r\n    \"#currentProjectTitle > b\",\r\n  ).textContent;\r\n  newTask.setAttribute(\"data-task-num\", taskSection.children.length); // taskCard\r\n  newTask.children[0].setAttribute(\r\n    \"id\",\r\n    `${currentProjectTitle}-${taskSection.children.length}`,\r\n  ); // form id\r\n}\r\n\r\naddTaskBtn.addEventListener(\"click\", () => addTask());\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin-todo-list/./src/tasks.js?");

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