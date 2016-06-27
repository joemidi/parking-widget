/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _loadModel = __webpack_require__(3);

	var _loadModel2 = _interopRequireDefault(_loadModel);

	var _renderData = __webpack_require__(4);

	var _renderData2 = _interopRequireDefault(_renderData);

	var _postDataToHost = __webpack_require__(5);

	var _postDataToHost2 = _interopRequireDefault(_postDataToHost);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var App = function () {
	  function App() {
	    _classCallCheck(this, App);

	    this.loadModel();
	    this.bindSelectors();
	    this.bindEvents();
	  }

	  _createClass(App, [{
	    key: 'bindSelectors',
	    value: function bindSelectors() {
	      this.elements = {};

	      this.elements.detailsToggle = document.querySelector('.parking-features-state');
	      this.elements.parkingFeatures = document.querySelector('.parking-features');
	      this.elements.parkingFeaturesState = document.querySelector('.parking-features-state');
	      this.elements.parkingInfoHeading = document.querySelector('.parking-info-heading');
	      this.elements.parkingFeaturesTitle = document.querySelector('.parking-features-title');
	      this.elements.parkingFeaturesImage = document.querySelector('.parking-features-image');
	      this.elements.parkingFeaturesList = document.querySelector('.parking-features-list');
	      this.elements.parkingSpaces = document.querySelector('.parking-spaces');
	    }
	  }, {
	    key: 'bindEvents',
	    value: function bindEvents() {
	      var _this = this;

	      this.elements.detailsToggle.addEventListener('click', function () {
	        var openClass = 'parking-features__open';
	        if (_this.elements.parkingFeatures.classList.contains(openClass)) {
	          _this.elements.parkingFeatures.classList.remove(openClass);
	          _this.elements.parkingFeaturesState.innerHTML = 'Mostra dettagli';
	        } else {
	          _this.elements.parkingFeatures.classList.add(openClass);
	          _this.elements.parkingFeaturesState.innerHTML = 'Nascondi dettagli';
	        }
	      });
	    }
	  }]);

	  return App;
	}();

	exports.default = App;


	App.prototype.loadModel = _loadModel2.default;
	App.prototype.renderData = _renderData2.default;
	App.prototype.postDataToHost = _postDataToHost2.default;

	document.addEventListener('DOMContentLoaded', function () {
	  window.app = new App();
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var _this = this;

	  function makeRequest(method, url) {
	    return new Promise(function (resolve, reject) {
	      var xhr = new XMLHttpRequest();
	      xhr.open(method, url);
	      xhr.responseType = 'json';
	      xhr.onload = function onload() {
	        if (this.status >= 200 && this.status < 400) {
	          resolve(xhr.response);
	        } else {
	          reject({
	            status: this.status,
	            statusText: xhr.statusText
	          });
	        }
	      };
	      xhr.onerror = function onerror() {
	        reject({
	          status: this.status,
	          statusText: xhr.statusText
	        });
	      };
	      xhr.send();
	    });
	  }

	  makeRequest('GET', 'data/model.json').then(function (data) {
	    console.log('Data: ', data);
	    _this.data = data;
	    _this.renderData();
	  }).catch(function (err) {
	    console.error('Error: ', err);
	  });
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  this.elements.parkingInfoHeading.innerHTML = this.data.dictionary.bookYourParking + ' ' + this.data.vendor.departureAirport;
	  this.elements.parkingFeaturesTitle.innerHTML = this.data.dictionary.featuresTitle;
	  this.elements.parkingFeaturesImage.src = this.data.vendor.map;

	  for (var i = 0; i < this.data.vendor.features.length; i++) {
	    var featureItem = document.createElement('li');
	    featureItem.innerText = this.data.vendor.features[i];
	    this.elements.parkingFeaturesList.appendChild(featureItem);
	  }

	  for (var j = 0; j < this.data.parkings.length; j++) {
	    var parkingSpace = document.createElement('div');
	    parkingSpace.classList.add('col-4');

	    var parkingSpaceDetails = document.createElement('p');
	    parkingSpaceDetails.classList.add('parking-space-details');
	    parkingSpaceDetails.innerHTML = '<strong>Dettagli:</strong><br><br>\n      <span>Parcheggio #' + this.data.parkings[j].id + '</span><br>\n      <span>' + (this.data.parkings[j].indoor ? this.data.dictionary.indoorSpace : this.data.dictionary.outdoorSpace) + '</span><br>\n      <span>' + (this.data.parkings[j].insurance ? this.data.dictionary.insuranceIncluded : this.data.dictionary.insuranceExcluded) + '\n      </span><br>';

	    var parkingSpacePrice = document.createElement('p');
	    parkingSpacePrice.classList.add('parking-space-price');
	    parkingSpacePrice.innerHTML = '<strong>' + this.data.parkings[j].price + '</strong>';

	    var innerContainer = document.createElement('div');
	    innerContainer.appendChild(parkingSpaceDetails);
	    innerContainer.appendChild(parkingSpacePrice);
	    parkingSpace.appendChild(innerContainer);
	    this.elements.parkingSpaces.appendChild(parkingSpace);

	    this.postDataToHost(parkingSpace, this.data.parkings[j]);
	  }
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (element, data) {
	  element.addEventListener('click', function () {
	    var postData = {};
	    postData.name = 'parkingWidget';
	    postData.props = data;
	    parent.postMessage(postData, '*');
	  });
	};

/***/ }
/******/ ]);