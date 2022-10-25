"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_ticketSend_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ticketSend.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ticketSend.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/auth/default */ "./resources/js/services/auth/default.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var getservice = new _services_auth_default__WEBPACK_IMPORTED_MODULE_1__["default"]('public-ticket-data');
var getProductservice = new _services_auth_default__WEBPACK_IMPORTED_MODULE_1__["default"]('product-service');
var mainservice = new _services_auth_default__WEBPACK_IMPORTED_MODULE_1__["default"]('tech-support-save');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "guest.ticketSend",
  watch: {
    'form.brand_id': function formBrand_id() {
      this.getProducts();
    },
    'form.itme_type_id': function formItme_type_id() {
      this.getProducts();
    }
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return getservice.getlist('').then(function (e) {
                return _this.itemTypes = e.itemType, _this.brands = e.brand, _this.issues = e.commonIssue;
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    getCurrentSelectionParent: function getCurrentSelectionParent(value) {
      this.form.issue = value[0];
    },
    getProducts: function getProducts() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var brand_id, itme_type_id;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.products = [];

                if (!(_this2.form.brand_id && _this2.form.itme_type_id)) {
                  _context2.next = 6;
                  break;
                }

                brand_id = _this2.form.brand_id;
                itme_type_id = _this2.form.itme_type_id;
                _context2.next = 6;
                return getProductservice.getProductData(brand_id, itme_type_id).then(function (e) {
                  return _this2.products = e.data;
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    resetError: function resetError() {
      this.errors = {
        first_name: [],
        last_name: [],
        email: [],
        phone: [],
        brand_id: [],
        itme_type_id: [],
        product_id: [],
        serial: [],
        purchase_date: [],
        issue: [],
        resolution: []
      };
    },
    addpermission: function () {
      var _addpermission = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(status) {
        var formdata, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.resetError();

                if (!this.$refs.form.validate()) {
                  _context3.next = 24;
                  break;
                }

                this.btnloading = true;
                formdata = new FormData();
                formdata.append("first_name", this.form.first_name);
                formdata.append("last_name", this.form.last_name);
                formdata.append("email", this.form.email); // formdata.append("password", this.form.password);

                formdata.append("phone", this.form.phone);
                formdata.append("brand_id", this.form.brand_id);
                formdata.append("itme_type_id", this.form.itme_type_id);
                formdata.append("product_id", this.form.product_id);
                formdata.append("serial", this.form.serial);
                formdata.append("purchase_date", this.form.purchase_date);
                formdata.append("issue", this.form.issue);
                formdata.append("resolution", this.form.resolution);
                formdata.append("zip_code_postal", this.form.zip_code_postal);
                formdata.append("country", this.form.country);
                formdata.append("city", this.form.city);
                formdata.append("address", this.form.address); //formdata.append("status", status);

                _context3.next = 21;
                return mainservice.create(formdata);

              case 21:
                res = _context3.sent;
                this.btnloading = false;

                if (!res.status) {
                  if (res.data.first_name) {
                    this.errors.first_name = res.data.first_name;
                  }

                  if (res.data.last_name) {
                    this.errors.last_name = res.data.last_name;
                  }

                  if (res.data.email) {
                    this.errors.email = res.data.email;
                  } // if (res.data.password) {
                  //     this.errors.password = res.data.password
                  // }


                  if (res.data.phone) {
                    this.errors.phone = res.data.phone;
                  }

                  if (res.data.brand_id) {
                    this.errors.brand_id = res.data.brand_id;
                  }

                  if (res.data.itme_type_id) {
                    this.errors.itme_type_id = res.data.itme_type_id;
                  }

                  if (res.data.product_id) {
                    this.errors.product_id = res.data.product_id;
                  }

                  if (res.data.serial) {
                    this.errors.serial = res.data.serial;
                  }

                  if (res.data.purchase_date) {
                    this.errors.purchase_date = res.data.purchase_date;
                  }

                  if (res.data.issue) {
                    this.errors.issue = res.data.issue;
                  }

                  if (res.data.resolution) {
                    this.errors.resolution = res.data.resolution;
                  }

                  if (res.data.zip_code_postal) {
                    this.errors.zip_code_postal = res.data.zip_code_postal;
                  }

                  if (res.data.country) {
                    this.errors.country = res.data.country;
                  }

                  if (res.data.city) {
                    this.errors.city = res.data.city;
                  }

                  if (res.data.address) {
                    this.errors.address = res.data.address;
                  } //errors here

                } else {
                  //suuccess here
                  this.$router.push({
                    name: "auth.login"
                  });
                }

              case 24:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function addpermission(_x) {
        return _addpermission.apply(this, arguments);
      }

      return addpermission;
    }(),
    loadChildList: function loadChildList(issue, num) {
      switch (num) {
        case 1:
          this.subIssues1 = issue.children.length > 0 ? issue.children : [];
          this.subIssues2 = [];
          this.subIssues3 = [];
          break;

        case 2:
          this.subIssues2 = issue.children.length > 0 ? issue.children : [];
          this.subIssues3 = [];
          break;

        case 3:
          this.subIssues3 = issue.children.length > 0 ? issue.children : [];
          break;
      }
    }
  },
  computed: {
    user: function user() {
      return this.$store.getters.loggedInUser;
    },
    filter: function filter() {
      return this.caseSensitive ? function (item, search, textKey) {
        return item[textKey].indexOf(search) > -1;
      } : undefined;
    }
  },
  data: function data() {
    return {
      brands: [],
      itemTypes: [],
      products: [],
      issues: [],
      subIssues1: [],
      subIssues2: [],
      subIssues3: [],
      resolutions: [{
        id: 1,
        name: 'CF - Warranty Claim'
      }],
      selectedCountry: null,
      country: [{
        value: 'CA',
        text: 'Canada'
      }, {
        value: 'US',
        text: 'United States'
      }],
      form: {
        id: this.$route.params.id ? this.$route.params.id : 0,
        item_number: '',
        unit: '',
        brand_id: 0,
        itme_type_id: 0,
        product_id: 0,
        serial: '',
        purchase_date: '',
        issue: 0,
        resolution: 1,
        zip_code_postal: '',
        country: '',
        city: '',
        address: ''
      },
      errors: {
        first_name: [],
        last_name: [],
        email: [],
        // password: [],
        phone: [],
        brand_id: [],
        itme_type_id: [],
        product_id: [],
        serial: [],
        purchase_date: [],
        issue: [],
        resolution: [],
        zip_code_postal: [],
        country: [],
        city: [],
        address: []
      },
      loading: false,
      btnloading: false,
      rules: {
        required: function required(value) {
          return !!value || "Required.";
        }
      },
      open: [1, 2],
      search: null,
      caseSensitive: false,
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
      purchase_date_menu: false
    };
  }
});

/***/ }),

/***/ "./resources/js/services/auth/default.js":
/*!***********************************************!*\
  !*** ./resources/js/services/auth/default.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var defaultservice = /*#__PURE__*/function () {
  function defaultservice(baseuri) {
    _classCallCheck(this, defaultservice);

    // Constructor
    this.baseuri = baseuri;
  }

  _createClass(defaultservice, [{
    key: "getlist",
    value: function getlist(params) {
      return axios.get("/api/".concat(this.baseuri).concat(params !== null && params !== void 0 ? params : '')).then(function (response) {
        return response.data;
      })["catch"](function (error) {
        return error;
      });
    }
  }, {
    key: "create",
    value: function () {
      var _create = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(formData) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post('/api/' + this.baseuri, formData).then(function (e) {
                  return {
                    status: 1,
                    data: e.data.data
                  };
                })["catch"](function (e) {
                  return {
                    status: 0,
                    data: e.response.data.errors
                  };
                });

              case 2:
                res = _context.sent;
                return _context.abrupt("return", res);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "delete",
    value: function _delete(_ref) {
      var query = _ref.query,
          id = _ref.id;
      return axios["delete"]("/api/".concat(this.baseuri, "/").concat(id));
    }
  }, {
    key: "get",
    value: function get(id) {
      return axios.get("/api/".concat(this.baseuri, "/").concat(id)).then(function (e) {
        return e.data.data;
      });
    }
  }, {
    key: "getProductData",
    value: function getProductData(brand_id, item_type_id) {
      return axios.get("/api/".concat(this.baseuri, "/").concat(brand_id, "/").concat(item_type_id)).then(function (response) {
        return response.data;
      })["catch"](function (error) {
        return error;
      });
    }
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(formData, id) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                formData.append('_method', 'put');
                _context2.next = 3;
                return axios.post('/api/' + this.baseuri + '/' + id, formData).then(function (e) {
                  return {
                    status: 1,
                    data: e.data.data
                  };
                })["catch"](function (e) {
                  return {
                    status: 0,
                    data: e.response.data.errors
                  };
                });

              case 3:
                res = _context2.sent;
                return _context2.abrupt("return", res);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function update(_x2, _x3) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }]);

  return defaultservice;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultservice);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ticketSend.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ticketSend.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.issues-list {\r\n    overflow-y: scroll;\n}\n.issues-list .v-list-item__icon {\r\n    order: 2;\n}\n.heading_one{\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ticketSend.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ticketSend.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ticketSend_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ticketSend.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ticketSend.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ticketSend_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ticketSend_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/ticketSend.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/ticketSend.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ticketSend_vue_vue_type_template_id_bd0a7e1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ticketSend.vue?vue&type=template&id=bd0a7e1a& */ "./resources/js/views/ticketSend.vue?vue&type=template&id=bd0a7e1a&");
/* harmony import */ var _ticketSend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ticketSend.vue?vue&type=script&lang=js& */ "./resources/js/views/ticketSend.vue?vue&type=script&lang=js&");
/* harmony import */ var _ticketSend_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ticketSend.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/ticketSend.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ticketSend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ticketSend_vue_vue_type_template_id_bd0a7e1a___WEBPACK_IMPORTED_MODULE_0__.render,
  _ticketSend_vue_vue_type_template_id_bd0a7e1a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ticketSend.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/ticketSend.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/ticketSend.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ticketSend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ticketSend.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ticketSend.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ticketSend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ticketSend.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/ticketSend.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ticketSend_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ticketSend.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ticketSend.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/views/ticketSend.vue?vue&type=template&id=bd0a7e1a&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/ticketSend.vue?vue&type=template&id=bd0a7e1a& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ticketSend_vue_vue_type_template_id_bd0a7e1a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ticketSend_vue_vue_type_template_id_bd0a7e1a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ticketSend_vue_vue_type_template_id_bd0a7e1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ticketSend.vue?vue&type=template&id=bd0a7e1a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ticketSend.vue?vue&type=template&id=bd0a7e1a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ticketSend.vue?vue&type=template&id=bd0a7e1a&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ticketSend.vue?vue&type=template&id=bd0a7e1a& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h1", { staticClass: "heading_one" }, [_vm._v("Ticket Form")]),
      _vm._v(" "),
      _c(
        "v-row",
        {
          staticClass: "pa-10 rounded elevation-10",
          attrs: { "no-gutters": "" },
        },
        [
          _c(
            "v-col",
            { attrs: { cols: "12", sm: "12" } },
            [
              _c(
                "v-form",
                {
                  ref: "form",
                  attrs: { "lazy-validation": "" },
                  model: {
                    value: _vm.loading,
                    callback: function ($$v) {
                      _vm.loading = $$v
                    },
                    expression: "loading",
                  },
                },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { staticClass: "pb-0", attrs: { cols: "6", sm: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              rules: [_vm.rules.required],
                              "error-messages": _vm.errors.first_name,
                              label: "First Name",
                            },
                            model: {
                              value: _vm.form.first_name,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "first_name", $$v)
                              },
                              expression: "form.first_name",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pb-0", attrs: { cols: "6", sm: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              "error-messages": _vm.errors.last_name,
                              label: "Last Name",
                            },
                            model: {
                              value: _vm.form.last_name,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "last_name", $$v)
                              },
                              expression: "form.last_name",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pb-0", attrs: { cols: "6", sm: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              rules: [_vm.rules.required],
                              "error-messages": _vm.errors.email,
                              label: "Email",
                            },
                            model: {
                              value: _vm.form.email,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "email", $$v)
                              },
                              expression: "form.email",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pb-0", attrs: { cols: "6", sm: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              rules: [_vm.rules.required],
                              "error-messages": _vm.errors.phone,
                              type: "number",
                              label: "Phone#",
                            },
                            model: {
                              value: _vm.form.phone,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "phone", $$v)
                              },
                              expression: "form.phone",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pb-0", attrs: { cols: "6", sm: "6" } },
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.brands,
                              "item-text": "brand_name",
                              "item-value": "id",
                              label: "Brands",
                              required: "",
                              "error-messages": _vm.errors.brand_id,
                            },
                            model: {
                              value: _vm.form.brand_id,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "brand_id", $$v)
                              },
                              expression: "form.brand_id",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pb-0", attrs: { cols: "6", sm: "6" } },
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.itemTypes,
                              "item-text": "name",
                              "item-value": "id",
                              label: "Item Type",
                              required: "",
                              "error-messages": _vm.errors.itme_type_id,
                            },
                            model: {
                              value: _vm.form.itme_type_id,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "itme_type_id", $$v)
                              },
                              expression: "form.itme_type_id",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pb-0", attrs: { cols: "6", sm: "6" } },
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.products,
                              "item-text": "item_number",
                              "item-value": "id",
                              label: "Products",
                              required: "",
                              "error-messages": _vm.errors.product_id,
                            },
                            model: {
                              value: _vm.form.product_id,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "product_id", $$v)
                              },
                              expression: "form.product_id",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pb-0", attrs: { cols: "6", sm: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              "error-messages": _vm.errors.serial,
                              label: "Serial#",
                              rules: [_vm.rules.required],
                            },
                            model: {
                              value: _vm.form.serial,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "serial", $$v)
                              },
                              expression: "form.serial",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pb-0", attrs: { cols: "4", sm: "4" } },
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.resolutions,
                              "item-text": "name",
                              "item-value": "id",
                              label: "Resolution",
                              required: "",
                              "error-messages": _vm.errors.resolution,
                              disabled: "",
                            },
                            model: {
                              value: _vm.form.resolution,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "resolution", $$v)
                              },
                              expression: "form.resolution",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pb-0", attrs: { cols: "4", sm: "4" } },
                        [
                          _c(
                            "v-menu",
                            {
                              ref: "purchase_date_ref",
                              attrs: {
                                "close-on-content-click": false,
                                "return-value": _vm.date,
                                transition: "scale-transition",
                                "offset-y": "",
                                "min-width": "auto",
                              },
                              on: {
                                "update:returnValue": function ($event) {
                                  _vm.date = $event
                                },
                                "update:return-value": function ($event) {
                                  _vm.date = $event
                                },
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function (ref) {
                                    var on = ref.on
                                    var attrs = ref.attrs
                                    return [
                                      _c(
                                        "v-text-field",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              attrs: {
                                                label: "Purchase date",
                                                "prepend-icon": "mdi-calendar",
                                                readonly: "",
                                              },
                                              model: {
                                                value: _vm.form.purchase_date,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.form,
                                                    "purchase_date",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "form.purchase_date",
                                              },
                                            },
                                            "v-text-field",
                                            attrs,
                                            false
                                          ),
                                          on
                                        )
                                      ),
                                    ]
                                  },
                                },
                              ]),
                              model: {
                                value: _vm.purchase_date_menu,
                                callback: function ($$v) {
                                  _vm.purchase_date_menu = $$v
                                },
                                expression: "purchase_date_menu",
                              },
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "v-date-picker",
                                {
                                  attrs: {
                                    "error-messages": _vm.errors.purchase_date,
                                    "no-title": "",
                                    scrollable: "",
                                  },
                                  model: {
                                    value: _vm.form.purchase_date,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.form, "purchase_date", $$v)
                                    },
                                    expression: "form.purchase_date",
                                  },
                                },
                                [
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { text: "", color: "primary" },
                                      on: {
                                        click: function ($event) {
                                          _vm.purchase_date_menu = false
                                        },
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                                        Cancel\n                                    "
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { text: "", color: "primary" },
                                      on: {
                                        click: function ($event) {
                                          return _vm.$refs.purchase_date_ref.save(
                                            _vm.date
                                          )
                                        },
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                                        OK\n                                    "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pb-0", attrs: { cols: "4", sm: "4" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              rules: [_vm.rules.required],
                              "error-messages": _vm.errors.zip_code_postal,
                              required: "",
                              label: "Zip Code / Postal",
                            },
                            model: {
                              value: _vm.form.zip_code_postal,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "zip_code_postal", $$v)
                              },
                              expression: "form.zip_code_postal",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pb-0", attrs: { cols: "6", sm: "6" } },
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.country,
                              rules: [_vm.rules.required],
                              "error-messages": _vm.errors.country,
                              required: "",
                              label: "Country",
                            },
                            model: {
                              value: _vm.form.country,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "country", $$v)
                              },
                              expression: "form.country",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pb-0", attrs: { cols: "6", sm: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              rules: [_vm.rules.required],
                              "error-messages": _vm.errors.city,
                              required: "",
                              label: "City",
                            },
                            model: {
                              value: _vm.form.city,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "city", $$v)
                              },
                              expression: "form.city",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "pb-0",
                          attrs: { cols: "12", sm: "12" },
                        },
                        [
                          _c("v-text-field", {
                            attrs: {
                              rules: [_vm.rules.required],
                              "error-messages": _vm.errors.address,
                              required: "",
                              label: "Address#",
                            },
                            model: {
                              value: _vm.form.address,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "address", $$v)
                              },
                              expression: "form.address",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "pb-0",
                          attrs: { cols: "12", sm: "12" },
                        },
                        [
                          _c(
                            "v-card",
                            { staticClass: "mx-auto" },
                            [
                              _c(
                                "h3",
                                { staticClass: "pa-5 font-weight-light" },
                                [_vm._v("Select Issue")]
                              ),
                              _vm._v(" "),
                              _c("v-divider"),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                [
                                  _c(
                                    "v-row",
                                    { attrs: { "no-gutters": "" } },
                                    [
                                      _vm.issues.length > 0
                                        ? _c(
                                            "v-col",
                                            { attrs: { cols: "3" } },
                                            [
                                              _c(
                                                "v-list",
                                                {
                                                  staticClass: "issues-list",
                                                  attrs: { height: "300" },
                                                },
                                                [
                                                  _c(
                                                    "v-list-item-group",
                                                    {
                                                      attrs: {
                                                        color: "primary",
                                                        "active-class": "white",
                                                      },
                                                      model: {
                                                        value: _vm.form.issue,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.form,
                                                            "issue",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "form.issue",
                                                      },
                                                    },
                                                    _vm._l(
                                                      _vm.issues,
                                                      function (issue) {
                                                        return _c(
                                                          "v-list-item",
                                                          {
                                                            key: issue.id,
                                                            attrs: {
                                                              value: issue.id,
                                                            },
                                                            on: {
                                                              click: function (
                                                                $event
                                                              ) {
                                                                return _vm.loadChildList(
                                                                  issue,
                                                                  1
                                                                )
                                                              },
                                                            },
                                                          },
                                                          [
                                                            issue.children
                                                              .length
                                                              ? _c(
                                                                  "v-list-item-icon",
                                                                  [
                                                                    _c(
                                                                      "v-icon",
                                                                      {
                                                                        domProps:
                                                                          {
                                                                            textContent:
                                                                              _vm._s(
                                                                                "mdi-chevron-right"
                                                                              ),
                                                                          },
                                                                      }
                                                                    ),
                                                                  ],
                                                                  1
                                                                )
                                                              : _vm._e(),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-list-item-content",
                                                              [
                                                                _c(
                                                                  "v-list-item-title",
                                                                  {
                                                                    domProps: {
                                                                      textContent:
                                                                        _vm._s(
                                                                          issue.name
                                                                        ),
                                                                    },
                                                                  }
                                                                ),
                                                              ],
                                                              1
                                                            ),
                                                          ],
                                                          1
                                                        )
                                                      }
                                                    ),
                                                    1
                                                  ),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.subIssues1.length > 0
                                        ? _c(
                                            "v-col",
                                            { attrs: { cols: "3" } },
                                            [
                                              _c(
                                                "v-list",
                                                {
                                                  staticClass: "issues-list",
                                                  attrs: { height: "300" },
                                                },
                                                [
                                                  _c(
                                                    "v-list-item-group",
                                                    {
                                                      attrs: {
                                                        color: "primary",
                                                        "active-class": "white",
                                                      },
                                                      model: {
                                                        value: _vm.form.issue,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.form,
                                                            "issue",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "form.issue",
                                                      },
                                                    },
                                                    _vm._l(
                                                      _vm.subIssues1,
                                                      function (issue) {
                                                        return _c(
                                                          "v-list-item",
                                                          {
                                                            key: issue.id,
                                                            attrs: {
                                                              value: issue.id,
                                                            },
                                                            on: {
                                                              click: function (
                                                                $event
                                                              ) {
                                                                return _vm.loadChildList(
                                                                  issue,
                                                                  2
                                                                )
                                                              },
                                                            },
                                                          },
                                                          [
                                                            issue.children
                                                              .length
                                                              ? _c(
                                                                  "v-list-item-icon",
                                                                  [
                                                                    _c(
                                                                      "v-icon",
                                                                      {
                                                                        domProps:
                                                                          {
                                                                            textContent:
                                                                              _vm._s(
                                                                                "mdi-chevron-right"
                                                                              ),
                                                                          },
                                                                      }
                                                                    ),
                                                                  ],
                                                                  1
                                                                )
                                                              : _vm._e(),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-list-item-content",
                                                              [
                                                                _c(
                                                                  "v-list-item-title",
                                                                  {
                                                                    domProps: {
                                                                      textContent:
                                                                        _vm._s(
                                                                          issue.name
                                                                        ),
                                                                    },
                                                                  }
                                                                ),
                                                              ],
                                                              1
                                                            ),
                                                          ],
                                                          1
                                                        )
                                                      }
                                                    ),
                                                    1
                                                  ),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.subIssues2.length > 0
                                        ? _c(
                                            "v-col",
                                            { attrs: { cols: "3" } },
                                            [
                                              _c(
                                                "v-list",
                                                {
                                                  staticClass: "issues-list",
                                                  attrs: { height: "300" },
                                                },
                                                [
                                                  _c(
                                                    "v-list-item-group",
                                                    {
                                                      attrs: {
                                                        color: "primary",
                                                        "active-class": "white",
                                                      },
                                                      model: {
                                                        value: _vm.form.issue,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.form,
                                                            "issue",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "form.issue",
                                                      },
                                                    },
                                                    _vm._l(
                                                      _vm.subIssues2,
                                                      function (issue) {
                                                        return _c(
                                                          "v-list-item",
                                                          {
                                                            key: issue.id,
                                                            attrs: {
                                                              value: issue.id,
                                                            },
                                                            on: {
                                                              click: function (
                                                                $event
                                                              ) {
                                                                return _vm.loadChildList(
                                                                  issue,
                                                                  3
                                                                )
                                                              },
                                                            },
                                                          },
                                                          [
                                                            issue.children
                                                              .length
                                                              ? _c(
                                                                  "v-list-item-icon",
                                                                  [
                                                                    _c(
                                                                      "v-icon",
                                                                      {
                                                                        domProps:
                                                                          {
                                                                            textContent:
                                                                              _vm._s(
                                                                                "mdi-chevron-right"
                                                                              ),
                                                                          },
                                                                      }
                                                                    ),
                                                                  ],
                                                                  1
                                                                )
                                                              : _vm._e(),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-list-item-content",
                                                              [
                                                                _c(
                                                                  "v-list-item-title",
                                                                  {
                                                                    domProps: {
                                                                      textContent:
                                                                        _vm._s(
                                                                          issue.name
                                                                        ),
                                                                    },
                                                                  }
                                                                ),
                                                              ],
                                                              1
                                                            ),
                                                          ],
                                                          1
                                                        )
                                                      }
                                                    ),
                                                    1
                                                  ),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.subIssues3.length > 0
                                        ? _c(
                                            "v-col",
                                            { attrs: { cols: "3" } },
                                            [
                                              _c(
                                                "v-list",
                                                {
                                                  staticClass: "issues-list",
                                                  attrs: { height: "300" },
                                                },
                                                [
                                                  _c(
                                                    "v-list-item-group",
                                                    {
                                                      attrs: {
                                                        color: "primary",
                                                        "active-class": "white",
                                                      },
                                                      model: {
                                                        value: _vm.form.issue,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.form,
                                                            "issue",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "form.issue",
                                                      },
                                                    },
                                                    _vm._l(
                                                      _vm.subIssues3,
                                                      function (issue) {
                                                        return _c(
                                                          "v-list-item",
                                                          {
                                                            key: issue.id,
                                                            attrs: {
                                                              value: issue.id,
                                                            },
                                                          },
                                                          [
                                                            issue.children
                                                              .length
                                                              ? _c(
                                                                  "v-list-item-icon",
                                                                  [
                                                                    _c(
                                                                      "v-icon",
                                                                      {
                                                                        domProps:
                                                                          {
                                                                            textContent:
                                                                              _vm._s(
                                                                                "mdi-chevron-right"
                                                                              ),
                                                                          },
                                                                      }
                                                                    ),
                                                                  ],
                                                                  1
                                                                )
                                                              : _vm._e(),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-list-item-content",
                                                              [
                                                                _c(
                                                                  "v-list-item-title",
                                                                  {
                                                                    domProps: {
                                                                      textContent:
                                                                        _vm._s(
                                                                          issue.name
                                                                        ),
                                                                    },
                                                                  }
                                                                ),
                                                              ],
                                                              1
                                                            ),
                                                          ],
                                                          1
                                                        )
                                                      }
                                                    ),
                                                    1
                                                  ),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "pb-0",
                          attrs: { cols: "12", sm: "12" },
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                color: "warning",
                                elevation: "1",
                                large: "",
                                raised: "",
                                loading: _vm.btnloading,
                                disabled: _vm.btnloading,
                              },
                              on: {
                                click: function ($event) {
                                  return _vm.addpermission(1)
                                },
                              },
                            },
                            [_vm._v("Submit")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);