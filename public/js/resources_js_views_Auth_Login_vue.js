"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Auth_Login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Auth/Login.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Auth/Login.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/auth/login */ "./resources/js/services/auth/login.js");


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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Login",
  components: {},
  mounted: function mounted() {
    this.$nextTick(function () {// this.$store.commit("setAppCls", "login-screen-main");
    });
  },
  data: function data() {
    return {
      loader: null,
      loading: false,
      btnloading: false,
      snackbar: false,
      loggedinemail: "",
      loggedinpassword: "",
      show3: false,
      password: "Password",
      erorrs: {
        email: "",
        password: ""
      },
      rules: {
        required: function required(value) {
          return !!value || "Required.";
        },
        email: function email(value) {
          var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        }
      }
    };
  },
  methods: {
    dologin: function () {
      var _dologin = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var logindetail, user, permissions;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.$refs.form.validate()) {
                  _context.next = 20;
                  break;
                }

                this.btnloading = true;
                _context.next = 4;
                return _services_auth_login__WEBPACK_IMPORTED_MODULE_1__["default"].dologin(this.loggedinemail, this.loggedinpassword);

              case 4:
                logindetail = _context.sent;
                this.btnloading = false;

                if (!logindetail.data) {
                  _context.next = 20;
                  break;
                }

                if (!logindetail.status) {
                  _context.next = 18;
                  break;
                }

                this.$store.commit("setLoginStatus", true);
                this.$store.commit("setAuthToken", logindetail.data);
                _context.next = 12;
                return _services_auth_login__WEBPACK_IMPORTED_MODULE_1__["default"].me();

              case 12:
                user = _context.sent;
                this.$store.commit("setloggedInUser", user);

                if (user.permissions.length > 0) {
                  permissions = user.permissions.map(function (e) {
                    return e.permission_id;
                  });
                  this.$store.commit("setPermissions", permissions);
                }

                this.$router.push({
                  name: "auth.dashboard"
                }); // $route.push('auth.dashboard')

                _context.next = 20;
                break;

              case 18:
                this.erorrs.email = logindetail.data;
                this.snackbar = true;

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function dologin() {
        return _dologin.apply(this, arguments);
      }

      return dologin;
    }()
  },
  watch: {}
});

/***/ }),

/***/ "./resources/js/views/Auth/Login.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Auth/Login.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_be5ebcfe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=be5ebcfe& */ "./resources/js/views/Auth/Login.vue?vue&type=template&id=be5ebcfe&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/views/Auth/Login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_be5ebcfe___WEBPACK_IMPORTED_MODULE_0__.render,
  _Login_vue_vue_type_template_id_be5ebcfe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Auth/Login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Auth/Login.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Auth/Login.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Auth/Login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Auth/Login.vue?vue&type=template&id=be5ebcfe&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Auth/Login.vue?vue&type=template&id=be5ebcfe& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_be5ebcfe___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_be5ebcfe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_be5ebcfe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=template&id=be5ebcfe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Auth/Login.vue?vue&type=template&id=be5ebcfe&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Auth/Login.vue?vue&type=template&id=be5ebcfe&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Auth/Login.vue?vue&type=template&id=be5ebcfe& ***!
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
      _c(
        "v-row",
        { staticClass: "pa-10", attrs: { "no-gutters": "" } },
        [
          _c("v-col", { staticClass: "text-center align-content-center" }, [
            _c("p", [_vm._v("Welcome to,")]),
            _vm._v(" "),
            _c("h1", [_vm._v("Curtis INT CRM")]),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-container",
        { staticClass: "grey lighten-5 loginscreen col-md-6" },
        [
          _c(
            "v-card",
            {
              staticClass: "d-flex align-content-center flex-wrap",
              staticStyle: { padding: "22px" },
              attrs: { outlined: "" },
            },
            [
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { md: "12" } }, [
                    _c(
                      "div",
                      { staticClass: "justify-center" },
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
                            _c("v-text-field", {
                              attrs: {
                                rules: [_vm.rules.required, _vm.rules.email],
                                label: "Email",
                                solo: "",
                                clearable: "",
                              },
                              model: {
                                value: _vm.loggedinemail,
                                callback: function ($$v) {
                                  _vm.loggedinemail = $$v
                                },
                                expression: "loggedinemail",
                              },
                            }),
                            _vm._v(" "),
                            _c("v-text-field", {
                              staticClass: "input-group--focused",
                              attrs: {
                                "append-icon": _vm.show3
                                  ? "mdi-eye"
                                  : "mdi-eye-off",
                                rules: [_vm.rules.required],
                                type: _vm.show3 ? "text" : "password",
                                name: "input-10-2",
                                label: "Password",
                                value: "",
                                solo: "",
                                clearable: "",
                              },
                              on: {
                                "click:append": function ($event) {
                                  _vm.show3 = !_vm.show3
                                },
                              },
                              model: {
                                value: _vm.loggedinpassword,
                                callback: function ($$v) {
                                  _vm.loggedinpassword = $$v
                                },
                                expression: "loggedinpassword",
                              },
                            }),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                staticClass: "col",
                                attrs: {
                                  elevation: "1",
                                  color: "primary",
                                  large: "",
                                  raised: "",
                                  loading: _vm.btnloading,
                                  disabled: _vm.btnloading,
                                },
                                on: { click: _vm.dologin },
                              },
                              [_vm._v("Login")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-snackbar",
            {
              scopedSlots: _vm._u([
                {
                  key: "action",
                  fn: function (ref) {
                    var attrs = ref.attrs
                    return [
                      _c(
                        "v-btn",
                        _vm._b(
                          {
                            attrs: { color: "pink", text: "" },
                            on: {
                              click: function ($event) {
                                _vm.snackbar = false
                              },
                            },
                          },
                          "v-btn",
                          attrs,
                          false
                        ),
                        [_vm._v("\n\t\t\t\t\tClose\n\t\t\t\t")]
                      ),
                    ]
                  },
                },
              ]),
              model: {
                value: _vm.snackbar,
                callback: function ($$v) {
                  _vm.snackbar = $$v
                },
                expression: "snackbar",
              },
            },
            [_vm._v("\n\t\t\t" + _vm._s(_vm.erorrs.email) + "\n\n\t\t\t")]
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