webpackJsonp([5],{

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(296)
}
var normalizeComponent = __webpack_require__(79)
/* script */
var __vue_script__ = __webpack_require__(298)
/* template */
var __vue_template__ = __webpack_require__(299)
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
Component.options.__file = "resources\\assets\\js\\components\\Chat.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2fb0154f", Component.options)
  } else {
    hotAPI.reload("data-v-2fb0154f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(297);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(78)("62395e78", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2fb0154f\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Chat.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2fb0154f\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Chat.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "\n.chat-page .mu-appbar {\n  position: fixed;\n  top: 0;\n}\n.chat-page .mu-appbar i {\n    font-size: 1.5rem;\n}\n.chat-page .mu-appbar .mu-appbar-title {\n    text-align: center;\n}\n.chat-page .message-box {\n  padding: 70px 5px 48px;\n}\n.chat-page .message-box .message-item {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 100%;\n    padding-bottom: 0.5rem;\n}\n.chat-page .message-box .message-item.mine {\n      float: right;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: reverse;\n          -ms-flex-direction: row-reverse;\n              flex-direction: row-reverse;\n}\n.chat-page .message-box .message-item .avatar img {\n      width: 4rem;\n      border-radius: 50%;\n}\n.chat-page .message-box .message-item .message {\n      padding: 10px;\n      background: #eee;\n      border-radius: 10px;\n      max-width: 16rem;\n      word-break: break-all;\n}\n.chat-page .input-box {\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n}\n.chat-page .input-box .mu-text-field {\n    padding: 0 10px;\n    margin: 0 0 0 2rem;\n}\n.chat-page .input-box .mu-text-field-hint {\n    color: #666;\n}\n", ""]);

// exports


/***/ }),

/***/ 298:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            message: '',
            records: [],
            friend_id: null,
            friend: {}
        };
    },

    computed: {
        users: function users() {
            return this.$store.state.users;
        },
        currentUser: function currentUser() {
            return this.$store.state.currentUser;
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.friend_id = this.$route.params.id;
        this.friend = this.users.find(function (item) {
            return item.id === _this.friend_id;
        });
        io.on('private chat', function (msg) {
            _this.records.push({
                msg: msg
            });
        });
    },

    methods: {
        onBack: function onBack() {
            this.$router.push('/message');
        },
        onSend: function onSend() {
            this.records.push({
                msg: this.message,
                mine: true
            });
            io.emit('private chat', {
                to: this.friend_id,
                msg: this.message
            });
        }
    }
});

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "chat-page" },
    [
      _c("mu-appbar", { attrs: { title: _vm.friend.name } }, [
        _c("i", {
          staticClass: "el-icon-arrow-left",
          attrs: { slot: "left" },
          on: { click: _vm.onBack },
          slot: "left"
        })
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "message-box" },
        _vm._l(_vm.records, function(item) {
          return _c(
            "div",
            { key: item.msg, class: ["message-item", { mine: item.mine }] },
            [
              _c("div", { staticClass: "avatar" }, [
                !item.mine
                  ? _c("img", {
                      attrs: {
                        src: "https://www.liyu.fun/img/" + _vm.friend.avatar
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                item.mine
                  ? _c("img", {
                      attrs: {
                        src:
                          "https://www.liyu.fun/img/" + _vm.currentUser.avatar
                      }
                    })
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "message" }, [
                _vm._v(
                  "\n               " + _vm._s(item.msg) + "\n            "
                )
              ])
            ]
          )
        })
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "input-box" },
        [
          _c("mu-text-field", {
            attrs: { hintText: "请输入聊天内容" },
            nativeOn: {
              keydown: function($event) {
                if (
                  !("button" in $event) &&
                  _vm._k($event.keyCode, "enter", 13, $event.key)
                ) {
                  return null
                }
                _vm.onSend($event)
              }
            },
            model: {
              value: _vm.message,
              callback: function($$v) {
                _vm.message = $$v
              },
              expression: "message"
            }
          }),
          _vm._v(" "),
          _c(
            "el-button",
            {
              attrs: { type: "primary", size: "small" },
              on: { click: _vm.onSend }
            },
            [_vm._v("发送")]
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
    require("vue-hot-reload-api")      .rerender("data-v-2fb0154f", module.exports)
  }
}

/***/ })

});