import {
  require_react
} from "./chunk-2PA4WPI3.js";
import {
  __commonJS
} from "./chunk-ROME4SDB.js";

// node_modules/typewriter-effect/dist/react.js
var require_react2 = __commonJS({
  "node_modules/typewriter-effect/dist/react.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t(require_react()) : "function" == typeof define && define.amd ? define("Typewriter", ["react"], t) : "object" == typeof exports ? exports.Typewriter = t(require_react()) : e.Typewriter = t(e.react);
    }("undefined" != typeof self ? self : exports, (e) => (() => {
      var t = { 7403: (e2, t2, r2) => {
        "use strict";
        r2.d(t2, { default: () => T });
        var n2 = r2(4087), o2 = r2.n(n2);
        const a = function(e3) {
          return new RegExp(/<[a-z][\s\S]*>/i).test(e3);
        }, i = function(e3) {
          var t3 = document.createElement("div");
          return t3.innerHTML = e3, t3.childNodes;
        }, s = function(e3, t3) {
          return Math.floor(Math.random() * (t3 - e3 + 1)) + e3;
        };
        var u = "TYPE_CHARACTER", c = "REMOVE_CHARACTER", p = "REMOVE_ALL", l = "REMOVE_LAST_VISIBLE_NODE", f = "PAUSE_FOR", v = "CALL_FUNCTION", d = "ADD_HTML_TAG_ELEMENT", h = "CHANGE_DELETE_SPEED", y = "CHANGE_DELAY", b = "CHANGE_CURSOR", _ = "PASTE_STRING", m = "HTML_TAG";
        function g(e3, t3) {
          var r3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var n3 = Object.getOwnPropertySymbols(e3);
            t3 && (n3 = n3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), r3.push.apply(r3, n3);
          }
          return r3;
        }
        function w(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var r3 = null != arguments[t3] ? arguments[t3] : {};
            t3 % 2 ? g(Object(r3), true).forEach(function(t4) {
              O(e3, t4, r3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r3)) : g(Object(r3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(r3, t4));
            });
          }
          return e3;
        }
        function x(e3) {
          return function(e4) {
            if (Array.isArray(e4))
              return j(e4);
          }(e3) || function(e4) {
            if ("undefined" != typeof Symbol && null != e4[Symbol.iterator] || null != e4["@@iterator"])
              return Array.from(e4);
          }(e3) || function(e4, t3) {
            if (e4) {
              if ("string" == typeof e4)
                return j(e4, t3);
              var r3 = Object.prototype.toString.call(e4).slice(8, -1);
              return "Object" === r3 && e4.constructor && (r3 = e4.constructor.name), "Map" === r3 || "Set" === r3 ? Array.from(e4) : "Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3) ? j(e4, t3) : void 0;
            }
          }(e3) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function j(e3, t3) {
          (null == t3 || t3 > e3.length) && (t3 = e3.length);
          for (var r3 = 0, n3 = new Array(t3); r3 < t3; r3++)
            n3[r3] = e3[r3];
          return n3;
        }
        function E(e3, t3) {
          for (var r3 = 0; r3 < t3.length; r3++) {
            var n3 = t3[r3];
            n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(e3, n3.key, n3);
          }
        }
        function O(e3, t3, r3) {
          return t3 in e3 ? Object.defineProperty(e3, t3, { value: r3, enumerable: true, configurable: true, writable: true }) : e3[t3] = r3, e3;
        }
        const T = function() {
          function e3(t4, r4) {
            var g2 = this;
            if (function(e4, t5) {
              if (!(e4 instanceof t5))
                throw new TypeError("Cannot call a class as a function");
            }(this, e3), O(this, "state", { cursorAnimation: null, lastFrameTime: null, pauseUntil: null, eventQueue: [], eventLoop: null, eventLoopPaused: false, reverseCalledEvents: [], calledEvents: [], visibleNodes: [], initialOptions: null, elements: { container: null, wrapper: document.createElement("span"), cursor: document.createElement("span") } }), O(this, "options", { strings: null, cursor: "|", delay: "natural", pauseFor: 1500, deleteSpeed: "natural", loop: false, autoStart: false, devMode: false, skipAddStyles: false, wrapperClassName: "Typewriter__wrapper", cursorClassName: "Typewriter__cursor", stringSplitter: null, onCreateTextNode: null, onRemoveNode: null }), O(this, "setupWrapperElement", function() {
              g2.state.elements.container && (g2.state.elements.wrapper.className = g2.options.wrapperClassName, g2.state.elements.cursor.className = g2.options.cursorClassName, g2.state.elements.cursor.innerHTML = g2.options.cursor, g2.state.elements.container.innerHTML = "", g2.state.elements.container.appendChild(g2.state.elements.wrapper), g2.state.elements.container.appendChild(g2.state.elements.cursor));
            }), O(this, "start", function() {
              return g2.state.eventLoopPaused = false, g2.runEventLoop(), g2;
            }), O(this, "pause", function() {
              return g2.state.eventLoopPaused = true, g2;
            }), O(this, "stop", function() {
              return g2.state.eventLoop && ((0, n2.cancel)(g2.state.eventLoop), g2.state.eventLoop = null), g2;
            }), O(this, "pauseFor", function(e4) {
              return g2.addEventToQueue(f, { ms: e4 }), g2;
            }), O(this, "typeOutAllStrings", function() {
              return "string" == typeof g2.options.strings ? (g2.typeString(g2.options.strings).pauseFor(g2.options.pauseFor), g2) : (g2.options.strings.forEach(function(e4) {
                g2.typeString(e4).pauseFor(g2.options.pauseFor).deleteAll(g2.options.deleteSpeed);
              }), g2);
            }), O(this, "typeString", function(e4) {
              var t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              if (a(e4))
                return g2.typeOutHTMLString(e4, t5);
              if (e4) {
                var r5 = g2.options || {}, n3 = r5.stringSplitter, o3 = "function" == typeof n3 ? n3(e4) : e4.split("");
                g2.typeCharacters(o3, t5);
              }
              return g2;
            }), O(this, "pasteString", function(e4) {
              var t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              return a(e4) ? g2.typeOutHTMLString(e4, t5, true) : (e4 && g2.addEventToQueue(_, { character: e4, node: t5 }), g2);
            }), O(this, "typeOutHTMLString", function(e4) {
              var t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r5 = arguments.length > 2 ? arguments[2] : void 0, n3 = i(e4);
              if (n3.length > 0)
                for (var o3 = 0; o3 < n3.length; o3++) {
                  var a2 = n3[o3], s2 = a2.innerHTML;
                  a2 && 3 !== a2.nodeType ? (a2.innerHTML = "", g2.addEventToQueue(d, { node: a2, parentNode: t5 }), r5 ? g2.pasteString(s2, a2) : g2.typeString(s2, a2)) : a2.textContent && (r5 ? g2.pasteString(a2.textContent, t5) : g2.typeString(a2.textContent, t5));
                }
              return g2;
            }), O(this, "deleteAll", function() {
              var e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "natural";
              return g2.addEventToQueue(p, { speed: e4 }), g2;
            }), O(this, "changeDeleteSpeed", function(e4) {
              if (!e4)
                throw new Error("Must provide new delete speed");
              return g2.addEventToQueue(h, { speed: e4 }), g2;
            }), O(this, "changeDelay", function(e4) {
              if (!e4)
                throw new Error("Must provide new delay");
              return g2.addEventToQueue(y, { delay: e4 }), g2;
            }), O(this, "changeCursor", function(e4) {
              if (!e4)
                throw new Error("Must provide new cursor");
              return g2.addEventToQueue(b, { cursor: e4 }), g2;
            }), O(this, "deleteChars", function(e4) {
              if (!e4)
                throw new Error("Must provide amount of characters to delete");
              for (var t5 = 0; t5 < e4; t5++)
                g2.addEventToQueue(c);
              return g2;
            }), O(this, "callFunction", function(e4, t5) {
              if (!e4 || "function" != typeof e4)
                throw new Error("Callbak must be a function");
              return g2.addEventToQueue(v, { cb: e4, thisArg: t5 }), g2;
            }), O(this, "typeCharacters", function(e4) {
              var t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              if (!e4 || !Array.isArray(e4))
                throw new Error("Characters must be an array");
              return e4.forEach(function(e5) {
                g2.addEventToQueue(u, { character: e5, node: t5 });
              }), g2;
            }), O(this, "removeCharacters", function(e4) {
              if (!e4 || !Array.isArray(e4))
                throw new Error("Characters must be an array");
              return e4.forEach(function() {
                g2.addEventToQueue(c);
              }), g2;
            }), O(this, "addEventToQueue", function(e4, t5) {
              var r5 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              return g2.addEventToStateProperty(e4, t5, r5, "eventQueue");
            }), O(this, "addReverseCalledEvent", function(e4, t5) {
              var r5 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n3 = g2.options.loop;
              return n3 ? g2.addEventToStateProperty(e4, t5, r5, "reverseCalledEvents") : g2;
            }), O(this, "addEventToStateProperty", function(e4, t5) {
              var r5 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n3 = arguments.length > 3 ? arguments[3] : void 0, o3 = { eventName: e4, eventArgs: t5 || {} };
              return g2.state[n3] = r5 ? [o3].concat(x(g2.state[n3])) : [].concat(x(g2.state[n3]), [o3]), g2;
            }), O(this, "runEventLoop", function() {
              g2.state.lastFrameTime || (g2.state.lastFrameTime = Date.now());
              var e4 = Date.now(), t5 = e4 - g2.state.lastFrameTime;
              if (!g2.state.eventQueue.length) {
                if (!g2.options.loop)
                  return;
                g2.state.eventQueue = x(g2.state.calledEvents), g2.state.calledEvents = [], g2.options = w({}, g2.state.initialOptions);
              }
              if (g2.state.eventLoop = o2()(g2.runEventLoop), !g2.state.eventLoopPaused) {
                if (g2.state.pauseUntil) {
                  if (e4 < g2.state.pauseUntil)
                    return;
                  g2.state.pauseUntil = null;
                }
                var r5, n3 = x(g2.state.eventQueue), a2 = n3.shift();
                if (!(t5 <= (r5 = a2.eventName === l || a2.eventName === c ? "natural" === g2.options.deleteSpeed ? s(40, 80) : g2.options.deleteSpeed : "natural" === g2.options.delay ? s(120, 160) : g2.options.delay))) {
                  var i2 = a2.eventName, j3 = a2.eventArgs;
                  switch (g2.logInDevMode({ currentEvent: a2, state: g2.state, delay: r5 }), i2) {
                    case _:
                    case u:
                      var E2 = j3.character, O2 = j3.node, T2 = document.createTextNode(E2), A = T2;
                      g2.options.onCreateTextNode && "function" == typeof g2.options.onCreateTextNode && (A = g2.options.onCreateTextNode(E2, T2)), A && (O2 ? O2.appendChild(A) : g2.state.elements.wrapper.appendChild(A)), g2.state.visibleNodes = [].concat(x(g2.state.visibleNodes), [{ type: "TEXT_NODE", character: E2, node: A }]);
                      break;
                    case c:
                      n3.unshift({ eventName: l, eventArgs: { removingCharacterNode: true } });
                      break;
                    case f:
                      var S = a2.eventArgs.ms;
                      g2.state.pauseUntil = Date.now() + parseInt(S);
                      break;
                    case v:
                      var N = a2.eventArgs, C = N.cb, P = N.thisArg;
                      C.call(P, { elements: g2.state.elements });
                      break;
                    case d:
                      var L = a2.eventArgs, k = L.node, D = L.parentNode;
                      D ? D.appendChild(k) : g2.state.elements.wrapper.appendChild(k), g2.state.visibleNodes = [].concat(x(g2.state.visibleNodes), [{ type: m, node: k, parentNode: D || g2.state.elements.wrapper }]);
                      break;
                    case p:
                      var M = g2.state.visibleNodes, R = j3.speed, F = [];
                      R && F.push({ eventName: h, eventArgs: { speed: R, temp: true } });
                      for (var z = 0, Q = M.length; z < Q; z++)
                        F.push({ eventName: l, eventArgs: { removingCharacterNode: false } });
                      R && F.push({ eventName: h, eventArgs: { speed: g2.options.deleteSpeed, temp: true } }), n3.unshift.apply(n3, F);
                      break;
                    case l:
                      var I = a2.eventArgs.removingCharacterNode;
                      if (g2.state.visibleNodes.length) {
                        var U = g2.state.visibleNodes.pop(), H = U.type, q = U.node, B = U.character;
                        g2.options.onRemoveNode && "function" == typeof g2.options.onRemoveNode && g2.options.onRemoveNode({ node: q, character: B }), q && q.parentNode.removeChild(q), H === m && I && n3.unshift({ eventName: l, eventArgs: {} });
                      }
                      break;
                    case h:
                      g2.options.deleteSpeed = a2.eventArgs.speed;
                      break;
                    case y:
                      g2.options.delay = a2.eventArgs.delay;
                      break;
                    case b:
                      g2.options.cursor = a2.eventArgs.cursor, g2.state.elements.cursor.innerHTML = a2.eventArgs.cursor;
                  }
                  g2.options.loop && (a2.eventName === l || a2.eventArgs && a2.eventArgs.temp || (g2.state.calledEvents = [].concat(x(g2.state.calledEvents), [a2]))), g2.state.eventQueue = n3, g2.state.lastFrameTime = e4;
                }
              }
            }), t4)
              if ("string" == typeof t4) {
                var j2 = document.querySelector(t4);
                if (!j2)
                  throw new Error("Could not find container element");
                this.state.elements.container = j2;
              } else
                this.state.elements.container = t4;
            r4 && (this.options = w(w({}, this.options), r4)), this.state.initialOptions = w({}, this.options), this.init();
          }
          var t3, r3;
          return t3 = e3, (r3 = [{ key: "init", value: function() {
            var e4, t4;
            this.setupWrapperElement(), this.addEventToQueue(b, { cursor: this.options.cursor }, true), this.addEventToQueue(p, null, true), !window || window.___TYPEWRITER_JS_STYLES_ADDED___ || this.options.skipAddStyles || (e4 = ".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}", (t4 = document.createElement("style")).appendChild(document.createTextNode(e4)), document.head.appendChild(t4), window.___TYPEWRITER_JS_STYLES_ADDED___ = true), true === this.options.autoStart && this.options.strings && this.typeOutAllStrings().start();
          } }, { key: "logInDevMode", value: function(e4) {
            this.options.devMode && console.log(e4);
          } }]) && E(t3.prototype, r3), Object.defineProperty(t3, "prototype", { writable: false }), e3;
        }();
      }, 8552: (e2, t2, r2) => {
        var n2 = r2(852)(r2(5639), "DataView");
        e2.exports = n2;
      }, 1989: (e2, t2, r2) => {
        var n2 = r2(1789), o2 = r2(401), a = r2(7667), i = r2(1327), s = r2(1866);
        function u(e3) {
          var t3 = -1, r3 = null == e3 ? 0 : e3.length;
          for (this.clear(); ++t3 < r3; ) {
            var n3 = e3[t3];
            this.set(n3[0], n3[1]);
          }
        }
        u.prototype.clear = n2, u.prototype.delete = o2, u.prototype.get = a, u.prototype.has = i, u.prototype.set = s, e2.exports = u;
      }, 8407: (e2, t2, r2) => {
        var n2 = r2(7040), o2 = r2(4125), a = r2(2117), i = r2(7518), s = r2(4705);
        function u(e3) {
          var t3 = -1, r3 = null == e3 ? 0 : e3.length;
          for (this.clear(); ++t3 < r3; ) {
            var n3 = e3[t3];
            this.set(n3[0], n3[1]);
          }
        }
        u.prototype.clear = n2, u.prototype.delete = o2, u.prototype.get = a, u.prototype.has = i, u.prototype.set = s, e2.exports = u;
      }, 7071: (e2, t2, r2) => {
        var n2 = r2(852)(r2(5639), "Map");
        e2.exports = n2;
      }, 3369: (e2, t2, r2) => {
        var n2 = r2(4785), o2 = r2(1285), a = r2(6e3), i = r2(9916), s = r2(5265);
        function u(e3) {
          var t3 = -1, r3 = null == e3 ? 0 : e3.length;
          for (this.clear(); ++t3 < r3; ) {
            var n3 = e3[t3];
            this.set(n3[0], n3[1]);
          }
        }
        u.prototype.clear = n2, u.prototype.delete = o2, u.prototype.get = a, u.prototype.has = i, u.prototype.set = s, e2.exports = u;
      }, 3818: (e2, t2, r2) => {
        var n2 = r2(852)(r2(5639), "Promise");
        e2.exports = n2;
      }, 8525: (e2, t2, r2) => {
        var n2 = r2(852)(r2(5639), "Set");
        e2.exports = n2;
      }, 8668: (e2, t2, r2) => {
        var n2 = r2(3369), o2 = r2(619), a = r2(2385);
        function i(e3) {
          var t3 = -1, r3 = null == e3 ? 0 : e3.length;
          for (this.__data__ = new n2(); ++t3 < r3; )
            this.add(e3[t3]);
        }
        i.prototype.add = i.prototype.push = o2, i.prototype.has = a, e2.exports = i;
      }, 6384: (e2, t2, r2) => {
        var n2 = r2(8407), o2 = r2(7465), a = r2(3779), i = r2(7599), s = r2(4758), u = r2(4309);
        function c(e3) {
          var t3 = this.__data__ = new n2(e3);
          this.size = t3.size;
        }
        c.prototype.clear = o2, c.prototype.delete = a, c.prototype.get = i, c.prototype.has = s, c.prototype.set = u, e2.exports = c;
      }, 2705: (e2, t2, r2) => {
        var n2 = r2(5639).Symbol;
        e2.exports = n2;
      }, 1149: (e2, t2, r2) => {
        var n2 = r2(5639).Uint8Array;
        e2.exports = n2;
      }, 577: (e2, t2, r2) => {
        var n2 = r2(852)(r2(5639), "WeakMap");
        e2.exports = n2;
      }, 4963: (e2) => {
        e2.exports = function(e3, t2) {
          for (var r2 = -1, n2 = null == e3 ? 0 : e3.length, o2 = 0, a = []; ++r2 < n2; ) {
            var i = e3[r2];
            t2(i, r2, e3) && (a[o2++] = i);
          }
          return a;
        };
      }, 4636: (e2, t2, r2) => {
        var n2 = r2(2545), o2 = r2(5694), a = r2(1469), i = r2(4144), s = r2(5776), u = r2(6719), c = Object.prototype.hasOwnProperty;
        e2.exports = function(e3, t3) {
          var r3 = a(e3), p = !r3 && o2(e3), l = !r3 && !p && i(e3), f = !r3 && !p && !l && u(e3), v = r3 || p || l || f, d = v ? n2(e3.length, String) : [], h = d.length;
          for (var y in e3)
            !t3 && !c.call(e3, y) || v && ("length" == y || l && ("offset" == y || "parent" == y) || f && ("buffer" == y || "byteLength" == y || "byteOffset" == y) || s(y, h)) || d.push(y);
          return d;
        };
      }, 2488: (e2) => {
        e2.exports = function(e3, t2) {
          for (var r2 = -1, n2 = t2.length, o2 = e3.length; ++r2 < n2; )
            e3[o2 + r2] = t2[r2];
          return e3;
        };
      }, 2908: (e2) => {
        e2.exports = function(e3, t2) {
          for (var r2 = -1, n2 = null == e3 ? 0 : e3.length; ++r2 < n2; )
            if (t2(e3[r2], r2, e3))
              return true;
          return false;
        };
      }, 8470: (e2, t2, r2) => {
        var n2 = r2(7813);
        e2.exports = function(e3, t3) {
          for (var r3 = e3.length; r3--; )
            if (n2(e3[r3][0], t3))
              return r3;
          return -1;
        };
      }, 8866: (e2, t2, r2) => {
        var n2 = r2(2488), o2 = r2(1469);
        e2.exports = function(e3, t3, r3) {
          var a = t3(e3);
          return o2(e3) ? a : n2(a, r3(e3));
        };
      }, 4239: (e2, t2, r2) => {
        var n2 = r2(2705), o2 = r2(9607), a = r2(2333), i = n2 ? n2.toStringTag : void 0;
        e2.exports = function(e3) {
          return null == e3 ? void 0 === e3 ? "[object Undefined]" : "[object Null]" : i && i in Object(e3) ? o2(e3) : a(e3);
        };
      }, 9454: (e2, t2, r2) => {
        var n2 = r2(4239), o2 = r2(7005);
        e2.exports = function(e3) {
          return o2(e3) && "[object Arguments]" == n2(e3);
        };
      }, 939: (e2, t2, r2) => {
        var n2 = r2(2492), o2 = r2(7005);
        e2.exports = function e3(t3, r3, a, i, s) {
          return t3 === r3 || (null == t3 || null == r3 || !o2(t3) && !o2(r3) ? t3 != t3 && r3 != r3 : n2(t3, r3, a, i, e3, s));
        };
      }, 2492: (e2, t2, r2) => {
        var n2 = r2(6384), o2 = r2(7114), a = r2(8351), i = r2(6096), s = r2(4160), u = r2(1469), c = r2(4144), p = r2(6719), l = "[object Arguments]", f = "[object Array]", v = "[object Object]", d = Object.prototype.hasOwnProperty;
        e2.exports = function(e3, t3, r3, h, y, b) {
          var _ = u(e3), m = u(t3), g = _ ? f : s(e3), w = m ? f : s(t3), x = (g = g == l ? v : g) == v, j = (w = w == l ? v : w) == v, E = g == w;
          if (E && c(e3)) {
            if (!c(t3))
              return false;
            _ = true, x = false;
          }
          if (E && !x)
            return b || (b = new n2()), _ || p(e3) ? o2(e3, t3, r3, h, y, b) : a(e3, t3, g, r3, h, y, b);
          if (!(1 & r3)) {
            var O = x && d.call(e3, "__wrapped__"), T = j && d.call(t3, "__wrapped__");
            if (O || T) {
              var A = O ? e3.value() : e3, S = T ? t3.value() : t3;
              return b || (b = new n2()), y(A, S, r3, h, b);
            }
          }
          return !!E && (b || (b = new n2()), i(e3, t3, r3, h, y, b));
        };
      }, 8458: (e2, t2, r2) => {
        var n2 = r2(3560), o2 = r2(5346), a = r2(3218), i = r2(346), s = /^\[object .+?Constructor\]$/, u = Function.prototype, c = Object.prototype, p = u.toString, l = c.hasOwnProperty, f = RegExp("^" + p.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        e2.exports = function(e3) {
          return !(!a(e3) || o2(e3)) && (n2(e3) ? f : s).test(i(e3));
        };
      }, 8749: (e2, t2, r2) => {
        var n2 = r2(4239), o2 = r2(1780), a = r2(7005), i = {};
        i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = true, i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = false, e2.exports = function(e3) {
          return a(e3) && o2(e3.length) && !!i[n2(e3)];
        };
      }, 280: (e2, t2, r2) => {
        var n2 = r2(5726), o2 = r2(6916), a = Object.prototype.hasOwnProperty;
        e2.exports = function(e3) {
          if (!n2(e3))
            return o2(e3);
          var t3 = [];
          for (var r3 in Object(e3))
            a.call(e3, r3) && "constructor" != r3 && t3.push(r3);
          return t3;
        };
      }, 2545: (e2) => {
        e2.exports = function(e3, t2) {
          for (var r2 = -1, n2 = Array(e3); ++r2 < e3; )
            n2[r2] = t2(r2);
          return n2;
        };
      }, 1717: (e2) => {
        e2.exports = function(e3) {
          return function(t2) {
            return e3(t2);
          };
        };
      }, 4757: (e2) => {
        e2.exports = function(e3, t2) {
          return e3.has(t2);
        };
      }, 4429: (e2, t2, r2) => {
        var n2 = r2(5639)["__core-js_shared__"];
        e2.exports = n2;
      }, 7114: (e2, t2, r2) => {
        var n2 = r2(8668), o2 = r2(2908), a = r2(4757);
        e2.exports = function(e3, t3, r3, i, s, u) {
          var c = 1 & r3, p = e3.length, l = t3.length;
          if (p != l && !(c && l > p))
            return false;
          var f = u.get(e3), v = u.get(t3);
          if (f && v)
            return f == t3 && v == e3;
          var d = -1, h = true, y = 2 & r3 ? new n2() : void 0;
          for (u.set(e3, t3), u.set(t3, e3); ++d < p; ) {
            var b = e3[d], _ = t3[d];
            if (i)
              var m = c ? i(_, b, d, t3, e3, u) : i(b, _, d, e3, t3, u);
            if (void 0 !== m) {
              if (m)
                continue;
              h = false;
              break;
            }
            if (y) {
              if (!o2(t3, function(e4, t4) {
                if (!a(y, t4) && (b === e4 || s(b, e4, r3, i, u)))
                  return y.push(t4);
              })) {
                h = false;
                break;
              }
            } else if (b !== _ && !s(b, _, r3, i, u)) {
              h = false;
              break;
            }
          }
          return u.delete(e3), u.delete(t3), h;
        };
      }, 8351: (e2, t2, r2) => {
        var n2 = r2(2705), o2 = r2(1149), a = r2(7813), i = r2(7114), s = r2(8776), u = r2(1814), c = n2 ? n2.prototype : void 0, p = c ? c.valueOf : void 0;
        e2.exports = function(e3, t3, r3, n3, c2, l, f) {
          switch (r3) {
            case "[object DataView]":
              if (e3.byteLength != t3.byteLength || e3.byteOffset != t3.byteOffset)
                return false;
              e3 = e3.buffer, t3 = t3.buffer;
            case "[object ArrayBuffer]":
              return !(e3.byteLength != t3.byteLength || !l(new o2(e3), new o2(t3)));
            case "[object Boolean]":
            case "[object Date]":
            case "[object Number]":
              return a(+e3, +t3);
            case "[object Error]":
              return e3.name == t3.name && e3.message == t3.message;
            case "[object RegExp]":
            case "[object String]":
              return e3 == t3 + "";
            case "[object Map]":
              var v = s;
            case "[object Set]":
              var d = 1 & n3;
              if (v || (v = u), e3.size != t3.size && !d)
                return false;
              var h = f.get(e3);
              if (h)
                return h == t3;
              n3 |= 2, f.set(e3, t3);
              var y = i(v(e3), v(t3), n3, c2, l, f);
              return f.delete(e3), y;
            case "[object Symbol]":
              if (p)
                return p.call(e3) == p.call(t3);
          }
          return false;
        };
      }, 6096: (e2, t2, r2) => {
        var n2 = r2(8234), o2 = Object.prototype.hasOwnProperty;
        e2.exports = function(e3, t3, r3, a, i, s) {
          var u = 1 & r3, c = n2(e3), p = c.length;
          if (p != n2(t3).length && !u)
            return false;
          for (var l = p; l--; ) {
            var f = c[l];
            if (!(u ? f in t3 : o2.call(t3, f)))
              return false;
          }
          var v = s.get(e3), d = s.get(t3);
          if (v && d)
            return v == t3 && d == e3;
          var h = true;
          s.set(e3, t3), s.set(t3, e3);
          for (var y = u; ++l < p; ) {
            var b = e3[f = c[l]], _ = t3[f];
            if (a)
              var m = u ? a(_, b, f, t3, e3, s) : a(b, _, f, e3, t3, s);
            if (!(void 0 === m ? b === _ || i(b, _, r3, a, s) : m)) {
              h = false;
              break;
            }
            y || (y = "constructor" == f);
          }
          if (h && !y) {
            var g = e3.constructor, w = t3.constructor;
            g == w || !("constructor" in e3) || !("constructor" in t3) || "function" == typeof g && g instanceof g && "function" == typeof w && w instanceof w || (h = false);
          }
          return s.delete(e3), s.delete(t3), h;
        };
      }, 1957: (e2, t2, r2) => {
        var n2 = "object" == typeof r2.g && r2.g && r2.g.Object === Object && r2.g;
        e2.exports = n2;
      }, 8234: (e2, t2, r2) => {
        var n2 = r2(8866), o2 = r2(9551), a = r2(3674);
        e2.exports = function(e3) {
          return n2(e3, a, o2);
        };
      }, 5050: (e2, t2, r2) => {
        var n2 = r2(7019);
        e2.exports = function(e3, t3) {
          var r3 = e3.__data__;
          return n2(t3) ? r3["string" == typeof t3 ? "string" : "hash"] : r3.map;
        };
      }, 852: (e2, t2, r2) => {
        var n2 = r2(8458), o2 = r2(7801);
        e2.exports = function(e3, t3) {
          var r3 = o2(e3, t3);
          return n2(r3) ? r3 : void 0;
        };
      }, 9607: (e2, t2, r2) => {
        var n2 = r2(2705), o2 = Object.prototype, a = o2.hasOwnProperty, i = o2.toString, s = n2 ? n2.toStringTag : void 0;
        e2.exports = function(e3) {
          var t3 = a.call(e3, s), r3 = e3[s];
          try {
            e3[s] = void 0;
            var n3 = true;
          } catch (e4) {
          }
          var o3 = i.call(e3);
          return n3 && (t3 ? e3[s] = r3 : delete e3[s]), o3;
        };
      }, 9551: (e2, t2, r2) => {
        var n2 = r2(4963), o2 = r2(479), a = Object.prototype.propertyIsEnumerable, i = Object.getOwnPropertySymbols, s = i ? function(e3) {
          return null == e3 ? [] : (e3 = Object(e3), n2(i(e3), function(t3) {
            return a.call(e3, t3);
          }));
        } : o2;
        e2.exports = s;
      }, 4160: (e2, t2, r2) => {
        var n2 = r2(8552), o2 = r2(7071), a = r2(3818), i = r2(8525), s = r2(577), u = r2(4239), c = r2(346), p = "[object Map]", l = "[object Promise]", f = "[object Set]", v = "[object WeakMap]", d = "[object DataView]", h = c(n2), y = c(o2), b = c(a), _ = c(i), m = c(s), g = u;
        (n2 && g(new n2(new ArrayBuffer(1))) != d || o2 && g(new o2()) != p || a && g(a.resolve()) != l || i && g(new i()) != f || s && g(new s()) != v) && (g = function(e3) {
          var t3 = u(e3), r3 = "[object Object]" == t3 ? e3.constructor : void 0, n3 = r3 ? c(r3) : "";
          if (n3)
            switch (n3) {
              case h:
                return d;
              case y:
                return p;
              case b:
                return l;
              case _:
                return f;
              case m:
                return v;
            }
          return t3;
        }), e2.exports = g;
      }, 7801: (e2) => {
        e2.exports = function(e3, t2) {
          return null == e3 ? void 0 : e3[t2];
        };
      }, 1789: (e2, t2, r2) => {
        var n2 = r2(4536);
        e2.exports = function() {
          this.__data__ = n2 ? n2(null) : {}, this.size = 0;
        };
      }, 401: (e2) => {
        e2.exports = function(e3) {
          var t2 = this.has(e3) && delete this.__data__[e3];
          return this.size -= t2 ? 1 : 0, t2;
        };
      }, 7667: (e2, t2, r2) => {
        var n2 = r2(4536), o2 = Object.prototype.hasOwnProperty;
        e2.exports = function(e3) {
          var t3 = this.__data__;
          if (n2) {
            var r3 = t3[e3];
            return "__lodash_hash_undefined__" === r3 ? void 0 : r3;
          }
          return o2.call(t3, e3) ? t3[e3] : void 0;
        };
      }, 1327: (e2, t2, r2) => {
        var n2 = r2(4536), o2 = Object.prototype.hasOwnProperty;
        e2.exports = function(e3) {
          var t3 = this.__data__;
          return n2 ? void 0 !== t3[e3] : o2.call(t3, e3);
        };
      }, 1866: (e2, t2, r2) => {
        var n2 = r2(4536);
        e2.exports = function(e3, t3) {
          var r3 = this.__data__;
          return this.size += this.has(e3) ? 0 : 1, r3[e3] = n2 && void 0 === t3 ? "__lodash_hash_undefined__" : t3, this;
        };
      }, 5776: (e2) => {
        var t2 = /^(?:0|[1-9]\d*)$/;
        e2.exports = function(e3, r2) {
          var n2 = typeof e3;
          return !!(r2 = null == r2 ? 9007199254740991 : r2) && ("number" == n2 || "symbol" != n2 && t2.test(e3)) && e3 > -1 && e3 % 1 == 0 && e3 < r2;
        };
      }, 7019: (e2) => {
        e2.exports = function(e3) {
          var t2 = typeof e3;
          return "string" == t2 || "number" == t2 || "symbol" == t2 || "boolean" == t2 ? "__proto__" !== e3 : null === e3;
        };
      }, 5346: (e2, t2, r2) => {
        var n2, o2 = r2(4429), a = (n2 = /[^.]+$/.exec(o2 && o2.keys && o2.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n2 : "";
        e2.exports = function(e3) {
          return !!a && a in e3;
        };
      }, 5726: (e2) => {
        var t2 = Object.prototype;
        e2.exports = function(e3) {
          var r2 = e3 && e3.constructor;
          return e3 === ("function" == typeof r2 && r2.prototype || t2);
        };
      }, 7040: (e2) => {
        e2.exports = function() {
          this.__data__ = [], this.size = 0;
        };
      }, 4125: (e2, t2, r2) => {
        var n2 = r2(8470), o2 = Array.prototype.splice;
        e2.exports = function(e3) {
          var t3 = this.__data__, r3 = n2(t3, e3);
          return !(r3 < 0 || (r3 == t3.length - 1 ? t3.pop() : o2.call(t3, r3, 1), --this.size, 0));
        };
      }, 2117: (e2, t2, r2) => {
        var n2 = r2(8470);
        e2.exports = function(e3) {
          var t3 = this.__data__, r3 = n2(t3, e3);
          return r3 < 0 ? void 0 : t3[r3][1];
        };
      }, 7518: (e2, t2, r2) => {
        var n2 = r2(8470);
        e2.exports = function(e3) {
          return n2(this.__data__, e3) > -1;
        };
      }, 4705: (e2, t2, r2) => {
        var n2 = r2(8470);
        e2.exports = function(e3, t3) {
          var r3 = this.__data__, o2 = n2(r3, e3);
          return o2 < 0 ? (++this.size, r3.push([e3, t3])) : r3[o2][1] = t3, this;
        };
      }, 4785: (e2, t2, r2) => {
        var n2 = r2(1989), o2 = r2(8407), a = r2(7071);
        e2.exports = function() {
          this.size = 0, this.__data__ = { hash: new n2(), map: new (a || o2)(), string: new n2() };
        };
      }, 1285: (e2, t2, r2) => {
        var n2 = r2(5050);
        e2.exports = function(e3) {
          var t3 = n2(this, e3).delete(e3);
          return this.size -= t3 ? 1 : 0, t3;
        };
      }, 6e3: (e2, t2, r2) => {
        var n2 = r2(5050);
        e2.exports = function(e3) {
          return n2(this, e3).get(e3);
        };
      }, 9916: (e2, t2, r2) => {
        var n2 = r2(5050);
        e2.exports = function(e3) {
          return n2(this, e3).has(e3);
        };
      }, 5265: (e2, t2, r2) => {
        var n2 = r2(5050);
        e2.exports = function(e3, t3) {
          var r3 = n2(this, e3), o2 = r3.size;
          return r3.set(e3, t3), this.size += r3.size == o2 ? 0 : 1, this;
        };
      }, 8776: (e2) => {
        e2.exports = function(e3) {
          var t2 = -1, r2 = Array(e3.size);
          return e3.forEach(function(e4, n2) {
            r2[++t2] = [n2, e4];
          }), r2;
        };
      }, 4536: (e2, t2, r2) => {
        var n2 = r2(852)(Object, "create");
        e2.exports = n2;
      }, 6916: (e2, t2, r2) => {
        var n2 = r2(5569)(Object.keys, Object);
        e2.exports = n2;
      }, 1167: (e2, t2, r2) => {
        e2 = r2.nmd(e2);
        var n2 = r2(1957), o2 = t2 && !t2.nodeType && t2, a = o2 && e2 && !e2.nodeType && e2, i = a && a.exports === o2 && n2.process, s = function() {
          try {
            return a && a.require && a.require("util").types || i && i.binding && i.binding("util");
          } catch (e3) {
          }
        }();
        e2.exports = s;
      }, 2333: (e2) => {
        var t2 = Object.prototype.toString;
        e2.exports = function(e3) {
          return t2.call(e3);
        };
      }, 5569: (e2) => {
        e2.exports = function(e3, t2) {
          return function(r2) {
            return e3(t2(r2));
          };
        };
      }, 5639: (e2, t2, r2) => {
        var n2 = r2(1957), o2 = "object" == typeof self && self && self.Object === Object && self, a = n2 || o2 || Function("return this")();
        e2.exports = a;
      }, 619: (e2) => {
        e2.exports = function(e3) {
          return this.__data__.set(e3, "__lodash_hash_undefined__"), this;
        };
      }, 2385: (e2) => {
        e2.exports = function(e3) {
          return this.__data__.has(e3);
        };
      }, 1814: (e2) => {
        e2.exports = function(e3) {
          var t2 = -1, r2 = Array(e3.size);
          return e3.forEach(function(e4) {
            r2[++t2] = e4;
          }), r2;
        };
      }, 7465: (e2, t2, r2) => {
        var n2 = r2(8407);
        e2.exports = function() {
          this.__data__ = new n2(), this.size = 0;
        };
      }, 3779: (e2) => {
        e2.exports = function(e3) {
          var t2 = this.__data__, r2 = t2.delete(e3);
          return this.size = t2.size, r2;
        };
      }, 7599: (e2) => {
        e2.exports = function(e3) {
          return this.__data__.get(e3);
        };
      }, 4758: (e2) => {
        e2.exports = function(e3) {
          return this.__data__.has(e3);
        };
      }, 4309: (e2, t2, r2) => {
        var n2 = r2(8407), o2 = r2(7071), a = r2(3369);
        e2.exports = function(e3, t3) {
          var r3 = this.__data__;
          if (r3 instanceof n2) {
            var i = r3.__data__;
            if (!o2 || i.length < 199)
              return i.push([e3, t3]), this.size = ++r3.size, this;
            r3 = this.__data__ = new a(i);
          }
          return r3.set(e3, t3), this.size = r3.size, this;
        };
      }, 346: (e2) => {
        var t2 = Function.prototype.toString;
        e2.exports = function(e3) {
          if (null != e3) {
            try {
              return t2.call(e3);
            } catch (e4) {
            }
            try {
              return e3 + "";
            } catch (e4) {
            }
          }
          return "";
        };
      }, 7813: (e2) => {
        e2.exports = function(e3, t2) {
          return e3 === t2 || e3 != e3 && t2 != t2;
        };
      }, 5694: (e2, t2, r2) => {
        var n2 = r2(9454), o2 = r2(7005), a = Object.prototype, i = a.hasOwnProperty, s = a.propertyIsEnumerable, u = n2(function() {
          return arguments;
        }()) ? n2 : function(e3) {
          return o2(e3) && i.call(e3, "callee") && !s.call(e3, "callee");
        };
        e2.exports = u;
      }, 1469: (e2) => {
        var t2 = Array.isArray;
        e2.exports = t2;
      }, 8612: (e2, t2, r2) => {
        var n2 = r2(3560), o2 = r2(1780);
        e2.exports = function(e3) {
          return null != e3 && o2(e3.length) && !n2(e3);
        };
      }, 4144: (e2, t2, r2) => {
        e2 = r2.nmd(e2);
        var n2 = r2(5639), o2 = r2(5062), a = t2 && !t2.nodeType && t2, i = a && e2 && !e2.nodeType && e2, s = i && i.exports === a ? n2.Buffer : void 0, u = (s ? s.isBuffer : void 0) || o2;
        e2.exports = u;
      }, 8446: (e2, t2, r2) => {
        var n2 = r2(939);
        e2.exports = function(e3, t3) {
          return n2(e3, t3);
        };
      }, 3560: (e2, t2, r2) => {
        var n2 = r2(4239), o2 = r2(3218);
        e2.exports = function(e3) {
          if (!o2(e3))
            return false;
          var t3 = n2(e3);
          return "[object Function]" == t3 || "[object GeneratorFunction]" == t3 || "[object AsyncFunction]" == t3 || "[object Proxy]" == t3;
        };
      }, 1780: (e2) => {
        e2.exports = function(e3) {
          return "number" == typeof e3 && e3 > -1 && e3 % 1 == 0 && e3 <= 9007199254740991;
        };
      }, 3218: (e2) => {
        e2.exports = function(e3) {
          var t2 = typeof e3;
          return null != e3 && ("object" == t2 || "function" == t2);
        };
      }, 7005: (e2) => {
        e2.exports = function(e3) {
          return null != e3 && "object" == typeof e3;
        };
      }, 6719: (e2, t2, r2) => {
        var n2 = r2(8749), o2 = r2(1717), a = r2(1167), i = a && a.isTypedArray, s = i ? o2(i) : n2;
        e2.exports = s;
      }, 3674: (e2, t2, r2) => {
        var n2 = r2(4636), o2 = r2(280), a = r2(8612);
        e2.exports = function(e3) {
          return a(e3) ? n2(e3) : o2(e3);
        };
      }, 479: (e2) => {
        e2.exports = function() {
          return [];
        };
      }, 5062: (e2) => {
        e2.exports = function() {
          return false;
        };
      }, 75: function(e2) {
        (function() {
          var t2, r2, n2, o2, a, i;
          "undefined" != typeof performance && null !== performance && performance.now ? e2.exports = function() {
            return performance.now();
          } : "undefined" != typeof process && null !== process && process.hrtime ? (e2.exports = function() {
            return (t2() - a) / 1e6;
          }, r2 = process.hrtime, o2 = (t2 = function() {
            var e3;
            return 1e9 * (e3 = r2())[0] + e3[1];
          })(), i = 1e9 * process.uptime(), a = o2 - i) : Date.now ? (e2.exports = function() {
            return Date.now() - n2;
          }, n2 = Date.now()) : (e2.exports = function() {
            return (/* @__PURE__ */ new Date()).getTime() - n2;
          }, n2 = (/* @__PURE__ */ new Date()).getTime());
        }).call(this);
      }, 4087: (e2, t2, r2) => {
        for (var n2 = r2(75), o2 = "undefined" == typeof window ? r2.g : window, a = ["moz", "webkit"], i = "AnimationFrame", s = o2["request" + i], u = o2["cancel" + i] || o2["cancelRequest" + i], c = 0; !s && c < a.length; c++)
          s = o2[a[c] + "Request" + i], u = o2[a[c] + "Cancel" + i] || o2[a[c] + "CancelRequest" + i];
        if (!s || !u) {
          var p = 0, l = 0, f = [];
          s = function(e3) {
            if (0 === f.length) {
              var t3 = n2(), r3 = Math.max(0, 16.666666666666668 - (t3 - p));
              p = r3 + t3, setTimeout(function() {
                var e4 = f.slice(0);
                f.length = 0;
                for (var t4 = 0; t4 < e4.length; t4++)
                  if (!e4[t4].cancelled)
                    try {
                      e4[t4].callback(p);
                    } catch (e5) {
                      setTimeout(function() {
                        throw e5;
                      }, 0);
                    }
              }, Math.round(r3));
            }
            return f.push({ handle: ++l, callback: e3, cancelled: false }), l;
          }, u = function(e3) {
            for (var t3 = 0; t3 < f.length; t3++)
              f[t3].handle === e3 && (f[t3].cancelled = true);
          };
        }
        e2.exports = function(e3) {
          return s.call(o2, e3);
        }, e2.exports.cancel = function() {
          u.apply(o2, arguments);
        }, e2.exports.polyfill = function(e3) {
          e3 || (e3 = o2), e3.requestAnimationFrame = s, e3.cancelAnimationFrame = u;
        };
      }, 8156: (t2) => {
        "use strict";
        t2.exports = e;
      } }, r = {};
      function n(e2) {
        var o2 = r[e2];
        if (void 0 !== o2)
          return o2.exports;
        var a = r[e2] = { id: e2, loaded: false, exports: {} };
        return t[e2].call(a.exports, a, a.exports, n), a.loaded = true, a.exports;
      }
      n.n = (e2) => {
        var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
        return n.d(t2, { a: t2 }), t2;
      }, n.d = (e2, t2) => {
        for (var r2 in t2)
          n.o(t2, r2) && !n.o(e2, r2) && Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
      }, n.g = function() {
        if ("object" == typeof globalThis)
          return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e2) {
          if ("object" == typeof window)
            return window;
        }
      }(), n.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), n.nmd = (e2) => (e2.paths = [], e2.children || (e2.children = []), e2);
      var o = {};
      return (() => {
        "use strict";
        n.d(o, { default: () => y });
        var e2 = n(8156), t2 = n.n(e2), r2 = n(7403), a = n(8446), i = n.n(a);
        function s(e3) {
          return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, s(e3);
        }
        function u(e3, t3) {
          if (!(e3 instanceof t3))
            throw new TypeError("Cannot call a class as a function");
        }
        function c(e3, t3) {
          for (var r3 = 0; r3 < t3.length; r3++) {
            var n2 = t3[r3];
            n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e3, n2.key, n2);
          }
        }
        function p(e3, t3) {
          return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
            return e4.__proto__ = t4, e4;
          }, p(e3, t3);
        }
        function l(e3, t3) {
          if (t3 && ("object" === s(t3) || "function" == typeof t3))
            return t3;
          if (void 0 !== t3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return f(e3);
        }
        function f(e3) {
          if (void 0 === e3)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e3;
        }
        function v(e3) {
          return v = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e4) {
            return e4.__proto__ || Object.getPrototypeOf(e4);
          }, v(e3);
        }
        function d(e3, t3, r3) {
          return t3 in e3 ? Object.defineProperty(e3, t3, { value: r3, enumerable: true, configurable: true, writable: true }) : e3[t3] = r3, e3;
        }
        var h = function(e3) {
          !function(e4, t3) {
            if ("function" != typeof t3 && null !== t3)
              throw new TypeError("Super expression must either be null or a function");
            e4.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e4, writable: true, configurable: true } }), Object.defineProperty(e4, "prototype", { writable: false }), t3 && p(e4, t3);
          }(y2, e3);
          var n2, o2, a2, s2, h2 = (a2 = y2, s2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, t3 = v(a2);
            if (s2) {
              var r3 = v(this).constructor;
              e4 = Reflect.construct(t3, arguments, r3);
            } else
              e4 = t3.apply(this, arguments);
            return l(this, e4);
          });
          function y2() {
            var e4;
            u(this, y2);
            for (var t3 = arguments.length, r3 = new Array(t3), n3 = 0; n3 < t3; n3++)
              r3[n3] = arguments[n3];
            return d(f(e4 = h2.call.apply(h2, [this].concat(r3))), "state", { instance: null }), e4;
          }
          return n2 = y2, (o2 = [{ key: "componentDidMount", value: function() {
            var e4 = this, t3 = new r2.default(this.typewriter, this.props.options);
            this.setState({ instance: t3 }, function() {
              var r3 = e4.props.onInit;
              r3 && r3(t3);
            });
          } }, { key: "componentDidUpdate", value: function(e4) {
            i()(this.props.options, e4.options) || this.setState({ instance: new r2.default(this.typewriter, this.props.options) });
          } }, { key: "componentWillUnmount", value: function() {
            this.state.instance && this.state.instance.stop();
          } }, { key: "render", value: function() {
            var e4 = this, r3 = this.props.component;
            return t2().createElement(r3, { ref: function(t3) {
              return e4.typewriter = t3;
            }, className: "Typewriter", "data-testid": "typewriter-wrapper" });
          } }]) && c(n2.prototype, o2), Object.defineProperty(n2, "prototype", { writable: false }), y2;
        }(e2.Component);
        h.defaultProps = { component: "div" };
        const y = h;
      })(), o.default;
    })());
  }
});
export default require_react2();
//# sourceMappingURL=typewriter-effect.js.map
