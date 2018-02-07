webpackJsonp([9],{

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(275)
}
var normalizeComponent = __webpack_require__(79)
/* script */
var __vue_script__ = __webpack_require__(277)
/* template */
var __vue_template__ = __webpack_require__(278)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\widget\\HeaderBar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3158c2e5", Component.options)
  } else {
    hotAPI.reload("data-v-3158c2e5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(276);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(78)("4a87b54e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3158c2e5\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HeaderBar.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3158c2e5\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HeaderBar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "\n.header-bar-widget {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 10;\n}\n.header-bar-widget .avatar-box img {\n    width: 2.8rem;\n    border-radius: 50%;\n    vertical-align: middle;\n}\n.header-bar-widget .mu-appbar-title {\n    text-align: center;\n}\n.header-bar-widget .el-icon-plus {\n    font-size: 1.5rem;\n    padding-right: 0.5rem;\n}\n.left-popup {\n  width: 55%;\n  max-width: 375px;\n  height: 100%;\n  padding: 24px;\n}\n.left-popup .avatar {\n    width: 100%;\n    border-radius: 50%;\n}\n.left-popup .user-name {\n    font-size: 1.5rem;\n    padding: 0.5rem 0;\n}\n.left-popup .sign-out-btn {\n    position: absolute;\n    bottom: 1rem;\n    left: 0;\n    border: none !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            title: '消息',
            bottomSheet: false,
            leftPopup: false
        };
    },

    computed: {
        currentUser: function currentUser() {
            return this.$store.state.currentUser;
        }
    },
    methods: {
        closeBottomSheet: function closeBottomSheet() {
            this.bottomSheet = false;
        },
        openBottomSheet: function openBottomSheet() {
            this.bottomSheet = true;
        },
        openPopup: function openPopup() {
            this.leftPopup = true;
        },
        closePopup: function closePopup() {
            this.leftPopup = false;
        },
        onSignOut: function onSignOut() {
            //TO DO
            location.reload();
            //                this.$router.push('/login');
        }
    },
    watch: {
        '$route': function $route(to, from) {
            this.title = to.name;
        }
    }
});

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "header-bar-widget" },
    [
      _c("mu-appbar", { attrs: { title: _vm.title } }, [
        _c(
          "div",
          { staticClass: "avatar-box", attrs: { slot: "left" }, slot: "left" },
          [
            _c("img", {
              attrs: {
                src: "https://www.liyu.fun/img/" + _vm.currentUser.avatar
              },
              on: { click: _vm.openPopup }
            })
          ]
        ),
        _vm._v(" "),
        _c("i", {
          staticClass: "el-icon-plus",
          attrs: { slot: "right" },
          on: { click: _vm.openBottomSheet },
          slot: "right"
        })
      ]),
      _vm._v(" "),
      _c(
        "mu-bottom-sheet",
        {
          attrs: { open: _vm.bottomSheet },
          on: { close: _vm.closeBottomSheet }
        },
        [
          _c(
            "mu-list",
            { on: { itemClick: _vm.closeBottomSheet } },
            [
              _c("mu-sub-header", [
                _vm._v("\n                请选择\n            ")
              ]),
              _vm._v(" "),
              _c("mu-list-item", { attrs: { title: "发起群聊" } }),
              _vm._v(" "),
              _c("mu-list-item", { attrs: { title: "添加好友" } })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "mu-popup",
        {
          attrs: {
            position: "left",
            popupClass: "left-popup",
            open: _vm.leftPopup
          },
          on: { close: _vm.closePopup }
        },
        [
          _c("img", {
            staticClass: "avatar",
            attrs: { src: "https://www.liyu.fun/img/" + _vm.currentUser.avatar }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "text-center user-name" }, [
            _vm._v(
              "\n            " + _vm._s(_vm.currentUser.name) + "\n        "
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "signature" }, [
            _vm._v(
              "\n            " +
                _vm._s(_vm.currentUser.signature) +
                "\n        "
            )
          ]),
          _vm._v(" "),
          _c(
            "el-button",
            { staticClass: "sign-out-btn", on: { click: _vm.onSignOut } },
            [_vm._v("退出")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3158c2e5", module.exports)
  }
}

/***/ })

});