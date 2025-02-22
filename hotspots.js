!(function () {
  "use strict";
  var t = "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {};
  function e() {
    throw new Error("setTimeout has not been defined");
  }
  function n() {
    throw new Error("clearTimeout has not been defined");
  }
  var i = e,
    o = n;
  function s(t) {
    if (i === setTimeout) return setTimeout(t, 0);
    if ((i === e || !i) && setTimeout) return (i = setTimeout), setTimeout(t, 0);
    try {
      return i(t, 0);
    } catch (e) {
      try {
        return i.call(null, t, 0);
      } catch (e) {
        return i.call(this, t, 0);
      }
    }
  }
  "function" == typeof t.setTimeout && (i = setTimeout), "function" == typeof t.clearTimeout && (o = clearTimeout);
  var r,
    a = [],
    l = !1,
    c = -1;
  function d() {
    l && r && ((l = !1), r.length ? (a = r.concat(a)) : (c = -1), a.length && h());
  }
  function h() {
    if (!l) {
      var t = s(d);
      l = !0;
      for (var e = a.length; e; ) {
        for (r = a, a = []; ++c < e; ) r && r[c].run();
        (c = -1), (e = a.length);
      }
      (r = null),
        (l = !1),
        (function (t) {
          if (o === clearTimeout) return clearTimeout(t);
          if ((o === n || !o) && clearTimeout) return (o = clearTimeout), clearTimeout(t);
          try {
            o(t);
          } catch (e) {
            try {
              return o.call(null, t);
            } catch (e) {
              return o.call(this, t);
            }
          }
        })(t);
    }
  }
  function u(t, e) {
    (this.fun = t), (this.array = e);
  }
  u.prototype.run = function () {
    this.fun.apply(null, this.array);
  };
  function p() {}
  var f = p,
    m = p,
    g = p,
    v = p,
    y = p,
    b = p,
    w = p;
  var x = t.performance || {},
    C =
      x.now ||
      x.mozNow ||
      x.msNow ||
      x.oNow ||
      x.webkitNow ||
      function () {
        return new Date().getTime();
      };
  var N = new Date();
  var k,
    M = {
      nextTick: function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        a.push(new u(t, e)), 1 !== a.length || l || s(h);
      },
      title: "browser",
      browser: !0,
      env: {},
      argv: [],
      version: "",
      versions: {},
      on: f,
      addListener: m,
      once: g,
      off: v,
      removeListener: y,
      removeAllListeners: b,
      emit: w,
      binding: function (t) {
        throw new Error("process.binding is not supported");
      },
      cwd: function () {
        return "/";
      },
      chdir: function (t) {
        throw new Error("process.chdir is not supported");
      },
      umask: function () {
        return 0;
      },
      hrtime: function (t) {
        var e = 0.001 * C.call(x),
          n = Math.floor(e),
          i = Math.floor((e % 1) * 1e9);
        return t && ((n -= t[0]), (i -= t[1]) < 0 && (n--, (i += 1e9))), [n, i];
      },
      platform: "browser",
      release: {},
      config: {},
      uptime: function () {
        return (new Date() - N) / 1e3;
      },
    },
    _ = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
  function S(t, e, n) {
    return (
      t(
        (n = {
          path: e,
          exports: {},
          require: function (t, e) {
            return (function () {
              throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
            })(null == e && n.path);
          },
        }),
        n.exports
      ),
      n.exports
    );
  }
  !(function (t) {
    !(function (e) {
      var n = "object" == typeof _ ? _ : "object" == typeof self ? self : "object" == typeof this ? this : Function("return this;")(),
        i = o(t);
      function o(t, e) {
        return function (n, i) {
          "function" != typeof t[n] &&
            Object.defineProperty(t, n, {
              configurable: !0,
              writable: !0,
              value: i,
            }),
            e && e(n, i);
        };
      }
      void 0 === n.Reflect ? (n.Reflect = t) : (i = o(n.Reflect, i)),
        (function (t) {
          var e = Object.prototype.hasOwnProperty,
            n = "function" == typeof Symbol,
            i = n && void 0 !== Symbol.toPrimitive ? Symbol.toPrimitive : "@@toPrimitive",
            o = n && void 0 !== Symbol.iterator ? Symbol.iterator : "@@iterator",
            s = "function" == typeof Object.create,
            r =
              {
                __proto__: [],
              } instanceof Array,
            a = !s && !r,
            l = {
              create: s
                ? function () {
                    return ot(Object.create(null));
                  }
                : r
                ? function () {
                    return ot({
                      __proto__: null,
                    });
                  }
                : function () {
                    return ot({});
                  },
              has: a
                ? function (t, n) {
                    return e.call(t, n);
                  }
                : function (t, e) {
                    return e in t;
                  },
              get: a
                ? function (t, n) {
                    return e.call(t, n) ? t[n] : void 0;
                  }
                : function (t, e) {
                    return t[e];
                  },
            },
            c = Object.getPrototypeOf(Function),
            d = "object" == typeof M && M.env && "true" === M.env.REFLECT_METADATA_USE_MAP_POLYFILL,
            h = d || "function" != typeof Map || "function" != typeof Map.prototype.entries ? et() : Map,
            u = d || "function" != typeof Set || "function" != typeof Set.prototype.entries ? nt() : Set,
            p = new (d || "function" != typeof WeakMap ? it() : WeakMap)();
          function f(t, e, n, i) {
            if (j(n)) {
              if (!Z(t)) throw new TypeError();
              if (!U(e)) throw new TypeError();
              return k(t, e);
            }
            if (!Z(t)) throw new TypeError();
            if (!D(e)) throw new TypeError();
            if (!D(i) && !j(i) && !H(i)) throw new TypeError();
            return H(i) && (i = void 0), _(t, e, (n = q(n)), i);
          }
          function m(t, e) {
            function n(n, i) {
              if (!D(n)) throw new TypeError();
              if (!j(i) && !G(i)) throw new TypeError();
              I(t, e, n, i);
            }
            return n;
          }
          function g(t, e, n, i) {
            if (!D(n)) throw new TypeError();
            return j(i) || (i = q(i)), I(t, e, n, i);
          }
          function v(t, e, n) {
            if (!D(e)) throw new TypeError();
            return j(n) || (n = q(n)), E(t, e, n);
          }
          function y(t, e, n) {
            if (!D(e)) throw new TypeError();
            return j(n) || (n = q(n)), A(t, e, n);
          }
          function b(t, e, n) {
            if (!D(e)) throw new TypeError();
            return j(n) || (n = q(n)), O(t, e, n);
          }
          function w(t, e, n) {
            if (!D(e)) throw new TypeError();
            return j(n) || (n = q(n)), L(t, e, n);
          }
          function x(t, e) {
            if (!D(t)) throw new TypeError();
            return j(e) || (e = q(e)), T(t, e);
          }
          function C(t, e) {
            if (!D(t)) throw new TypeError();
            return j(e) || (e = q(e)), B(t, e);
          }
          function N(t, e, n) {
            if (!D(e)) throw new TypeError();
            j(n) || (n = q(n));
            var i = S(e, n, !1);
            if (j(i)) return !1;
            if (!i.delete(t)) return !1;
            if (i.size > 0) return !0;
            var o = p.get(e);
            return o.delete(n), o.size > 0 || p.delete(e), !0;
          }
          function k(t, e) {
            for (var n = t.length - 1; n >= 0; --n) {
              var i = (0, t[n])(e);
              if (!j(i) && !H(i)) {
                if (!U(i)) throw new TypeError();
                e = i;
              }
            }
            return e;
          }
          function _(t, e, n, i) {
            for (var o = t.length - 1; o >= 0; --o) {
              var s = (0, t[o])(e, n, i);
              if (!j(s) && !H(s)) {
                if (!D(s)) throw new TypeError();
                i = s;
              }
            }
            return i;
          }
          function S(t, e, n) {
            var i = p.get(t);
            if (j(i)) {
              if (!n) return;
              (i = new h()), p.set(t, i);
            }
            var o = i.get(e);
            if (j(o)) {
              if (!n) return;
              (o = new h()), i.set(e, o);
            }
            return o;
          }
          function E(t, e, n) {
            if (A(t, e, n)) return !0;
            var i = tt(e);
            return !H(i) && E(t, i, n);
          }
          function A(t, e, n) {
            var i = S(e, n, !1);
            return !j(i) && F(i.has(t));
          }
          function O(t, e, n) {
            if (A(t, e, n)) return L(t, e, n);
            var i = tt(e);
            return H(i) ? void 0 : O(t, i, n);
          }
          function L(t, e, n) {
            var i = S(e, n, !1);
            if (!j(i)) return i.get(t);
          }
          function I(t, e, n, i) {
            S(n, i, !0).set(t, e);
          }
          function T(t, e) {
            var n = B(t, e),
              i = tt(t);
            if (null === i) return n;
            var o = T(i, e);
            if (o.length <= 0) return n;
            if (n.length <= 0) return o;
            for (var s = new u(), r = [], a = 0, l = n; a < l.length; a++) {
              var c = l[a];
              s.has(c) || (s.add(c), r.push(c));
            }
            for (var d = 0, h = o; d < h.length; d++) {
              c = h[d];
              s.has(c) || (s.add(c), r.push(c));
            }
            return r;
          }
          function B(t, e) {
            var n = [],
              i = S(t, e, !1);
            if (j(i)) return n;
            for (var o = Q(i.keys()), s = 0; ; ) {
              var r = $(o);
              if (!r) return (n.length = s), n;
              var a = K(r);
              try {
                n[s] = a;
              } catch (t) {
                try {
                  J(o);
                } finally {
                  throw t;
                }
              }
              s++;
            }
          }
          function P(t) {
            if (null === t) return 1;
            switch (typeof t) {
              case "undefined":
                return 0;
              case "boolean":
                return 2;
              case "string":
                return 3;
              case "symbol":
                return 4;
              case "number":
                return 5;
              case "object":
                return null === t ? 1 : 6;
              default:
                return 6;
            }
          }
          function j(t) {
            return void 0 === t;
          }
          function H(t) {
            return null === t;
          }
          function V(t) {
            return "symbol" == typeof t;
          }
          function D(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t;
          }
          function R(t, e) {
            switch (P(t)) {
              case 0:
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                return t;
            }
            var n = 3 === e ? "string" : 5 === e ? "number" : "default",
              o = X(t, i);
            if (void 0 !== o) {
              var s = o.call(t, n);
              if (D(s)) throw new TypeError();
              return s;
            }
            return z(t, "default" === n ? "number" : n);
          }
          function z(t, e) {
            if ("string" === e) {
              var n = t.toString;
              if (Y(n)) if (!D((o = n.call(t)))) return o;
              if (Y((i = t.valueOf))) if (!D((o = i.call(t)))) return o;
            } else {
              var i;
              if (Y((i = t.valueOf))) if (!D((o = i.call(t)))) return o;
              var o,
                s = t.toString;
              if (Y(s)) if (!D((o = s.call(t)))) return o;
            }
            throw new TypeError();
          }
          function F(t) {
            return !!t;
          }
          function W(t) {
            return "" + t;
          }
          function q(t) {
            var e = R(t, 3);
            return V(e) ? e : W(e);
          }
          function Z(t) {
            return Array.isArray ? Array.isArray(t) : t instanceof Object ? t instanceof Array : "[object Array]" === Object.prototype.toString.call(t);
          }
          function Y(t) {
            return "function" == typeof t;
          }
          function U(t) {
            return "function" == typeof t;
          }
          function G(t) {
            switch (P(t)) {
              case 3:
              case 4:
                return !0;
              default:
                return !1;
            }
          }
          function X(t, e) {
            var n = t[e];
            if (null != n) {
              if (!Y(n)) throw new TypeError();
              return n;
            }
          }
          function Q(t) {
            var e = X(t, o);
            if (!Y(e)) throw new TypeError();
            var n = e.call(t);
            if (!D(n)) throw new TypeError();
            return n;
          }
          function K(t) {
            return t.value;
          }
          function $(t) {
            var e = t.next();
            return !e.done && e;
          }
          function J(t) {
            var e = t.return;
            e && e.call(t);
          }
          function tt(t) {
            var e = Object.getPrototypeOf(t);
            if ("function" != typeof t || t === c) return e;
            if (e !== c) return e;
            var n = t.prototype,
              i = n && Object.getPrototypeOf(n);
            if (null == i || i === Object.prototype) return e;
            var o = i.constructor;
            return "function" != typeof o || o === t ? e : o;
          }
          function et() {
            var t = {},
              e = [],
              n = (function () {
                function t(t, e, n) {
                  (this._index = 0), (this._keys = t), (this._values = e), (this._selector = n);
                }
                return (
                  (t.prototype["@@iterator"] = function () {
                    return this;
                  }),
                  (t.prototype[o] = function () {
                    return this;
                  }),
                  (t.prototype.next = function () {
                    var t = this._index;
                    if (t >= 0 && t < this._keys.length) {
                      var n = this._selector(this._keys[t], this._values[t]);
                      return (
                        t + 1 >= this._keys.length ? ((this._index = -1), (this._keys = e), (this._values = e)) : this._index++,
                        {
                          value: n,
                          done: !1,
                        }
                      );
                    }
                    return {
                      value: void 0,
                      done: !0,
                    };
                  }),
                  (t.prototype.throw = function (t) {
                    throw (this._index >= 0 && ((this._index = -1), (this._keys = e), (this._values = e)), t);
                  }),
                  (t.prototype.return = function (t) {
                    return (
                      this._index >= 0 && ((this._index = -1), (this._keys = e), (this._values = e)),
                      {
                        value: t,
                        done: !0,
                      }
                    );
                  }),
                  t
                );
              })();
            return (function () {
              function e() {
                (this._keys = []), (this._values = []), (this._cacheKey = t), (this._cacheIndex = -2);
              }
              return (
                Object.defineProperty(e.prototype, "size", {
                  get: function () {
                    return this._keys.length;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (e.prototype.has = function (t) {
                  return this._find(t, !1) >= 0;
                }),
                (e.prototype.get = function (t) {
                  var e = this._find(t, !1);
                  return e >= 0 ? this._values[e] : void 0;
                }),
                (e.prototype.set = function (t, e) {
                  var n = this._find(t, !0);
                  return (this._values[n] = e), this;
                }),
                (e.prototype.delete = function (e) {
                  var n = this._find(e, !1);
                  if (n >= 0) {
                    for (var i = this._keys.length, o = n + 1; o < i; o++) (this._keys[o - 1] = this._keys[o]), (this._values[o - 1] = this._values[o]);
                    return this._keys.length--, this._values.length--, e === this._cacheKey && ((this._cacheKey = t), (this._cacheIndex = -2)), !0;
                  }
                  return !1;
                }),
                (e.prototype.clear = function () {
                  (this._keys.length = 0), (this._values.length = 0), (this._cacheKey = t), (this._cacheIndex = -2);
                }),
                (e.prototype.keys = function () {
                  return new n(this._keys, this._values, i);
                }),
                (e.prototype.values = function () {
                  return new n(this._keys, this._values, s);
                }),
                (e.prototype.entries = function () {
                  return new n(this._keys, this._values, r);
                }),
                (e.prototype["@@iterator"] = function () {
                  return this.entries();
                }),
                (e.prototype[o] = function () {
                  return this.entries();
                }),
                (e.prototype._find = function (t, e) {
                  return (
                    this._cacheKey !== t && (this._cacheIndex = this._keys.indexOf((this._cacheKey = t))),
                    this._cacheIndex < 0 && e && ((this._cacheIndex = this._keys.length), this._keys.push(t), this._values.push(void 0)),
                    this._cacheIndex
                  );
                }),
                e
              );
            })();
            function i(t, e) {
              return t;
            }
            function s(t, e) {
              return e;
            }
            function r(t, e) {
              return [t, e];
            }
          }
          function nt() {
            return (function () {
              function t() {
                this._map = new h();
              }
              return (
                Object.defineProperty(t.prototype, "size", {
                  get: function () {
                    return this._map.size;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (t.prototype.has = function (t) {
                  return this._map.has(t);
                }),
                (t.prototype.add = function (t) {
                  return this._map.set(t, t), this;
                }),
                (t.prototype.delete = function (t) {
                  return this._map.delete(t);
                }),
                (t.prototype.clear = function () {
                  this._map.clear();
                }),
                (t.prototype.keys = function () {
                  return this._map.keys();
                }),
                (t.prototype.values = function () {
                  return this._map.values();
                }),
                (t.prototype.entries = function () {
                  return this._map.entries();
                }),
                (t.prototype["@@iterator"] = function () {
                  return this.keys();
                }),
                (t.prototype[o] = function () {
                  return this.keys();
                }),
                t
              );
            })();
          }
          function it() {
            var t = 16,
              n = l.create(),
              i = o();
            return (function () {
              function t() {
                this._key = o();
              }
              return (
                (t.prototype.has = function (t) {
                  var e = s(t, !1);
                  return void 0 !== e && l.has(e, this._key);
                }),
                (t.prototype.get = function (t) {
                  var e = s(t, !1);
                  return void 0 !== e ? l.get(e, this._key) : void 0;
                }),
                (t.prototype.set = function (t, e) {
                  return (s(t, !0)[this._key] = e), this;
                }),
                (t.prototype.delete = function (t) {
                  var e = s(t, !1);
                  return void 0 !== e && delete e[this._key];
                }),
                (t.prototype.clear = function () {
                  this._key = o();
                }),
                t
              );
            })();
            function o() {
              var t;
              do {
                t = "@@WeakMap@@" + c();
              } while (l.has(n, t));
              return (n[t] = !0), t;
            }
            function s(t, n) {
              if (!e.call(t, i)) {
                if (!n) return;
                Object.defineProperty(t, i, {
                  value: l.create(),
                });
              }
              return t[i];
            }
            function r(t, e) {
              for (var n = 0; n < e; ++n) t[n] = (255 * Math.random()) | 0;
              return t;
            }
            function a(t) {
              return "function" == typeof Uint8Array
                ? "undefined" != typeof crypto
                  ? crypto.getRandomValues(new Uint8Array(t))
                  : "undefined" != typeof msCrypto
                  ? msCrypto.getRandomValues(new Uint8Array(t))
                  : r(new Uint8Array(t), t)
                : r(new Array(t), t);
            }
            function c() {
              var e = a(t);
              (e[6] = (79 & e[6]) | 64), (e[8] = (191 & e[8]) | 128);
              for (var n = "", i = 0; i < t; ++i) {
                var o = e[i];
                (4 !== i && 6 !== i && 8 !== i) || (n += "-"), o < 16 && (n += "0"), (n += o.toString(16).toLowerCase());
              }
              return n;
            }
          }
          function ot(t) {
            return (t.__ = void 0), delete t.__, t;
          }
          t("decorate", f), t("metadata", m), t("defineMetadata", g), t("hasMetadata", v), t("hasOwnMetadata", y), t("getMetadata", b), t("getOwnMetadata", w), t("getMetadataKeys", x), t("getOwnMetadataKeys", C), t("deleteMetadata", N);
        })(i);
    })();
  })(k || (k = {}));
  var E = function () {
    return (E =
      Object.assign ||
      function (t) {
        for (var e, n = 1, i = arguments.length; n < i; n++) for (var o in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return t;
      }).apply(this, arguments);
  };
  function A(t, e) {
    var n = {};
    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
    if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
      var o = 0;
      for (i = Object.getOwnPropertySymbols(t); o < i.length; o++) e.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[o]) && (n[i[o]] = t[i[o]]);
    }
    return n;
  }
  function O(t, e, n, i) {
    var o,
      s = arguments.length,
      r = s < 3 ? e : null === i ? (i = Object.getOwnPropertyDescriptor(e, n)) : i;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, n, i);
    else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(e, n, r) : o(e, n)) || r);
    return s > 3 && r && Object.defineProperty(e, n, r), r;
  }
  function L(t, e) {
    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
  }
  function I(t, e, n, i) {
    return new (n || (n = Promise))(function (o, s) {
      function r(t) {
        try {
          l(i.next(t));
        } catch (t) {
          s(t);
        }
      }
      function a(t) {
        try {
          l(i.throw(t));
        } catch (t) {
          s(t);
        }
      }
      function l(t) {
        var e;
        t.done
          ? o(t.value)
          : ((e = t.value),
            e instanceof n
              ? e
              : new n(function (t) {
                  t(e);
                })).then(r, a);
      }
      l((i = i.apply(t, e || [])).next());
    });
  }
  function T(t, e) {
    var n,
      i,
      o,
      s,
      r = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (s = {
        next: a(0),
        throw: a(1),
        return: a(2),
      }),
      "function" == typeof Symbol &&
        (s[Symbol.iterator] = function () {
          return this;
        }),
      s
    );
    function a(s) {
      return function (a) {
        return (function (s) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; r; )
            try {
              if (((n = 1), i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)) return o;
              switch (((i = 0), o && (s = [2 & s[0], o.value]), s[0])) {
                case 0:
                case 1:
                  o = s;
                  break;
                case 4:
                  return (
                    r.label++,
                    {
                      value: s[1],
                      done: !1,
                    }
                  );
                case 5:
                  r.label++, (i = s[1]), (s = [0]);
                  continue;
                case 7:
                  (s = r.ops.pop()), r.trys.pop();
                  continue;
                default:
                  if (!((o = r.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== s[0] && 2 !== s[0]))) {
                    r = 0;
                    continue;
                  }
                  if (3 === s[0] && (!o || (s[1] > o[0] && s[1] < o[3]))) {
                    r.label = s[1];
                    break;
                  }
                  if (6 === s[0] && r.label < o[1]) {
                    (r.label = o[1]), (o = s);
                    break;
                  }
                  if (o && r.label < o[2]) {
                    (r.label = o[2]), r.ops.push(s);
                    break;
                  }
                  o[2] && r.ops.pop(), r.trys.pop();
                  continue;
              }
              s = e.call(t, r);
            } catch (t) {
              (s = [6, t]), (i = 0);
            } finally {
              n = o = 0;
            }
          if (5 & s[0]) throw s[1];
          return {
            value: s[0] ? s[1] : void 0,
            done: !0,
          };
        })([s, a]);
      };
    }
  }
  function B(t) {
    var e = "function" == typeof Symbol && Symbol.iterator,
      n = e && t[e],
      i = 0;
    if (n) return n.call(t);
    if (t && "number" == typeof t.length)
      return {
        next: function () {
          return (
            t && i >= t.length && (t = void 0),
            {
              value: t && t[i++],
              done: !t,
            }
          );
        },
      };
    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function P(t, e) {
    var n = "function" == typeof Symbol && t[Symbol.iterator];
    if (!n) return t;
    var i,
      o,
      s = n.call(t),
      r = [];
    try {
      for (; (void 0 === e || e-- > 0) && !(i = s.next()).done; ) r.push(i.value);
    } catch (t) {
      o = {
        error: t,
      };
    } finally {
      try {
        i && !i.done && (n = s.return) && n.call(s);
      } finally {
        if (o) throw o.error;
      }
    }
    return r;
  }
  function j() {
    for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(P(arguments[e]));
    return t;
  }
  function H(t, e) {
    return (
      Object.defineProperty
        ? Object.defineProperty(t, "raw", {
            value: e,
          })
        : (t.raw = e),
      t
    );
  }
  var V = S(function (t, e) {
      var n,
        i =
          (_ && _.__extends) ||
          ((n =
            Object.setPrototypeOf ||
            ({
              __proto__: [],
            } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            }),
          function (t, e) {
            function i() {
              this.constructor = t;
            }
            n(t, e), (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
          });
      Object.defineProperty(e, "__esModule", {
        value: !0,
      });
      var o = (function (t) {
        function e(n) {
          var i = t.call(this, 'Cannot determine a class of the requesting service "' + n + '"') || this;
          return (i.name = "ServiceNotFoundError"), Object.setPrototypeOf(i, e.prototype), i;
        }
        return i(e, t), e;
      })(Error);
      e.MissingProvidedServiceTypeError = o;
    }),
    D = S(function (t, e) {
      Object.defineProperty(e, "__esModule", {
        value: !0,
      });
      var n = function (t) {
        this.name = t;
      };
      e.Token = n;
    }),
    R = S(function (t, e) {
      var n,
        i =
          (_ && _.__extends) ||
          ((n =
            Object.setPrototypeOf ||
            ({
              __proto__: [],
            } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            }),
          function (t, e) {
            function i() {
              this.constructor = t;
            }
            n(t, e), (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
          });
      Object.defineProperty(e, "__esModule", {
        value: !0,
      });
      var o = (function (t) {
        function e(n) {
          var i = t.call(this) || this;
          return (
            (i.name = "ServiceNotFoundError"),
            "string" == typeof n
              ? (i.message = 'Service "' + n + '" was not found, looks like it was not registered in the container. Register it by calling Container.set("' + n + '", ...) before using service.')
              : n instanceof D.Token && n.name
              ? (i.message = 'Service "' + n.name + '" was not found, looks like it was not registered in the container. Register it by calling Container.set before using service.')
              : n instanceof D.Token && (i.message = "Service with a given token was not found, looks like it was not registered in the container. Register it by calling Container.set before using service."),
            Object.setPrototypeOf(i, e.prototype),
            i
          );
        }
        return i(e, t), e;
      })(Error);
      e.ServiceNotFoundError = o;
    }),
    z = S(function (t, e) {
      Object.defineProperty(e, "__esModule", {
        value: !0,
      });
      var n = (function () {
        function t(t) {
          (this.services = []), (this.id = t);
        }
        return (
          (t.prototype.has = function (t) {
            return !!this.findService(t);
          }),
          (t.prototype.get = function (t) {
            var e = F.Container.of(void 0),
              n = e.findService(t),
              i = this.findService(t);
            if (n && !0 === n.global) return this.getServiceValue(t, n);
            if (i) return this.getServiceValue(t, i);
            if (n && this !== e) {
              var o = Object.assign({}, n);
              o.value = void 0;
              var s = this.getServiceValue(t, o);
              return this.set(t, s), s;
            }
            return this.getServiceValue(t, n);
          }),
          (t.prototype.getMany = function (t) {
            var e = this;
            return this.filterServices(t).map(function (n) {
              return e.getServiceValue(t, n);
            });
          }),
          (t.prototype.set = function (t, e) {
            var n = this;
            if (t instanceof Array)
              return (
                t.forEach(function (t) {
                  return n.set(t);
                }),
                this
              );
            if ("string" == typeof t || t instanceof D.Token)
              return this.set({
                id: t,
                value: e,
              });
            if ("object" == typeof t && t.service)
              return this.set({
                id: t.service,
                value: e,
              });
            if (t instanceof Function)
              return this.set({
                type: t,
                id: t,
                value: e,
              });
            var i = t,
              o = this.findService(i.id);
            return o && !0 !== o.multiple ? Object.assign(o, i) : this.services.push(i), this;
          }),
          (t.prototype.remove = function () {
            for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            return (
              e.forEach(function (e) {
                t.filterServices(e).forEach(function (e) {
                  t.services.splice(t.services.indexOf(e), 1);
                });
              }),
              this
            );
          }),
          (t.prototype.reset = function () {
            return (this.services = []), this;
          }),
          (t.prototype.filterServices = function (t) {
            return this.services.filter(function (e) {
              return e.id ? e.id === t : !!(e.type && t instanceof Function) && (e.type === t || t.prototype instanceof e.type);
            });
          }),
          (t.prototype.findService = function (t) {
            return this.services.find(function (e) {
              return e.id ? (t instanceof Object && e.id instanceof D.Token && t.service instanceof D.Token ? e.id === t.service : e.id === t) : !!(e.type && t instanceof Function) && e.type === t;
            });
          }),
          (t.prototype.getServiceValue = function (t, e) {
            var n;
            if (e && void 0 !== e.value) return e.value;
            if (!((e && e.type) || (e && e.factory) || !("string" == typeof t || t instanceof D.Token))) throw new R.ServiceNotFoundError(t);
            var i = void 0;
            if ((e && e.type ? (i = e.type) : e && e.id instanceof Function ? (i = e.id) : t instanceof Function && (i = t), !e)) {
              if (!i) throw new V.MissingProvidedServiceTypeError(t);
              (e = {
                type: i,
              }),
                this.services.push(e);
            }
            var o,
              s = i && Reflect && Reflect.getMetadata ? Reflect.getMetadata("design:paramtypes", i) : void 0,
              r = s ? this.initializeParams(i, s) : [];
            if (e.factory)
              (r = r.filter(function (t) {
                return void 0 !== t;
              })),
                (o = e.factory instanceof Array ? (n = this.get(e.factory[0]))[e.factory[1]].apply(n, r) : e.factory.apply(e, r.concat([this])));
            else {
              if (!i) throw new V.MissingProvidedServiceTypeError(t);
              r.unshift(null), r.push(this), (o = new (i.bind.apply(i, r))());
            }
            return e && !e.transient && o && (e.value = o), i && this.applyPropertyHandlers(i, o), o;
          }),
          (t.prototype.initializeParams = function (t, e) {
            var n = this;
            return e.map(function (e, i) {
              var o = F.Container.handlers.find(function (e) {
                return e.object === t && e.index === i;
              });
              return o ? o.value(n) : e && e.name && !n.isTypePrimitive(e.name) ? n.get(e) : void 0;
            });
          }),
          (t.prototype.isTypePrimitive = function (t) {
            return -1 !== ["string", "boolean", "number", "object"].indexOf(t.toLowerCase());
          }),
          (t.prototype.applyPropertyHandlers = function (t, e) {
            var n = this;
            F.Container.handlers.forEach(function (i) {
              "number" != typeof i.index && (i.object.constructor === t || t.prototype instanceof i.object.constructor) && (e[i.propertyName] = i.value(n));
            });
          }),
          t
        );
      })();
      e.ContainerInstance = n;
    }),
    F = S(function (t, e) {
      Object.defineProperty(e, "__esModule", {
        value: !0,
      });
      var n = (function () {
        function t() {}
        return (
          (t.of = function (t) {
            if (void 0 === t) return this.globalInstance;
            var e = this.instances.find(function (e) {
              return e.id === t;
            });
            return e || ((e = new z.ContainerInstance(t)), this.instances.push(e)), e;
          }),
          (t.has = function (t) {
            return this.globalInstance.has(t);
          }),
          (t.get = function (t) {
            return this.globalInstance.get(t);
          }),
          (t.getMany = function (t) {
            return this.globalInstance.getMany(t);
          }),
          (t.set = function (t, e) {
            return this.globalInstance.set(t, e), this;
          }),
          (t.remove = function () {
            for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            return (t = this.globalInstance).remove.apply(t, e), this;
          }),
          (t.reset = function (t) {
            if (t) {
              var e = this.instances.find(function (e) {
                return e.id === t;
              });
              e && (e.reset(), this.instances.splice(this.instances.indexOf(e), 1));
            } else
              this.globalInstance.reset(),
                this.instances.forEach(function (t) {
                  return t.reset();
                });
            return this;
          }),
          (t.registerHandler = function (t) {
            return this.handlers.push(t), this;
          }),
          (t.import = function (t) {
            return this;
          }),
          (t.globalInstance = new z.ContainerInstance(void 0)),
          (t.instances = []),
          (t.handlers = []),
          t
        );
      })();
      e.Container = n;
    }),
    W = S(function (t, e) {
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Service = function (t, e) {
          if (2 === arguments.length || t instanceof Function) {
            var n = {
                service: new D.Token(),
              },
              i = 2 === arguments.length ? t : [],
              o = 2 === arguments.length ? e : t;
            return (
              F.Container.set({
                id: n.service,
                factory: function (t) {
                  var e = i.map(function (e) {
                    return t.get(e);
                  });
                  return o.apply(void 0, e);
                },
              }),
              n
            );
          }
          return function (e) {
            var n = {
              type: e,
            };
            "string" == typeof t || t instanceof D.Token
              ? ((n.id = t), (n.multiple = t.multiple), (n.global = t.global || !1), (n.transient = t.transient))
              : t && ((n.id = t.id), (n.factory = t.factory), (n.multiple = t.multiple), (n.global = t.global || !1), (n.transient = t.transient)),
              F.Container.set(n);
          };
        });
    }),
    q = S(function (t, e) {
      var n,
        i =
          (_ && _.__extends) ||
          ((n =
            Object.setPrototypeOf ||
            ({
              __proto__: [],
            } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            }),
          function (t, e) {
            function i() {
              this.constructor = t;
            }
            n(t, e), (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()));
          });
      Object.defineProperty(e, "__esModule", {
        value: !0,
      });
      var o = (function (t) {
        function e(n, i) {
          var o = t.call(this, 'Cannot inject value into "' + n.constructor.name + "." + i + "\". Please make sure you setup reflect-metadata properly and you don't use interfaces without service tokens as injection value.") || this;
          return (o.name = "ServiceNotFoundError"), Object.setPrototypeOf(o, e.prototype), o;
        }
        return i(e, t), e;
      })(Error);
      e.CannotInjectError = o;
    }),
    Z = S(function (t, e) {
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.Inject = function (t) {
          return function (e, n, i) {
            t ||
              (t = function () {
                return Reflect.getMetadata("design:type", e, n);
              }),
              F.Container.registerHandler({
                object: e,
                propertyName: n,
                index: i,
                value: function (i) {
                  var o;
                  if ((o = "string" == typeof t || t instanceof D.Token ? t : t()) === Object) throw new q.CannotInjectError(e, n);
                  return i.get(o);
                },
              });
          };
        });
    }),
    Y = S(function (t, e) {
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        (e.InjectMany = function (t) {
          return function (e, n, i) {
            t ||
              (t = function () {
                return Reflect.getMetadata("design:type", e, n);
              }),
              F.Container.registerHandler({
                object: e,
                propertyName: n,
                index: i,
                value: function (i) {
                  var o;
                  if ((o = "string" == typeof t || t instanceof D.Token ? t : t()) === Object) throw new q.CannotInjectError(e, n);
                  return i.getMany(o);
                },
              });
          };
        });
    }),
    U = S(function (t, e) {
      function n(t) {
        for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
      }
      Object.defineProperty(e, "__esModule", {
        value: !0,
      }),
        n(W),
        n(Z),
        n(Y);
      var i = F;
      (e.Container = i.Container), (e.ContainerInstance = z.ContainerInstance), (e.Token = D.Token), (e.default = F.Container);
    }),
    G = function (t) {
      for (var e, n = []; null != t.parentNode; )
        (e = t.getAttribute("data-id")),
          n.unshift({
            name: t.nodeName.toLowerCase(),
            nodeId: e,
          }),
          (t = t.parentNode);
      return n.slice(1);
    },
    X =
      "\n.box-highlight {\n  position: absolute;\n  box-shadow:inset 0 0 0 1px #4285f4;\n  background: rgba(66, 133, 244, 0.1);\n  pointer-events: none;\n  box-sizing: border-box;\n  width:0;\n  height:0;\n  top:0;\n  left:0;\n  transform:translate3d(0,0,0);\n}\n\n.box-wrapper {\n  width:100%;\n  height:100%;\n  position:relative\n}\n.tag-box {\n  position: absolute;\n  left: var(--tag-box-left);\n  top: var(--tag-box-top);\n  width: var(--tag-box-width);\n  height: 20px;\n  // max-width: var(--width);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n}\n\n.tag-name {\n  padding: 0 8px;\n  height: 100%;\n  background: #4285f4;\n  display: flex;\n  align-items: center;\n  font-weight: 600;\n  font-family: sans-serif;\n  flex-shrink: 0;\n}\n.tag-component-name {\n  padding: 0 8px;\n  height: 100%;\n  background: rgba(51, 102, 255, 0.2);\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  color: #4285f4;\n  visibility: hidden;\n  font-family: sans-serif;\n  min-width: 0;\n  flex: 1;\n  overflow: hidden;\n}\n\n.tag-component-name span {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display:inline-block;\n  height: 100%;\n  position: relative;\n  top: 3px;\n}\n\n.box-highlight.hover {\n  z-index:10;\n}\n.box-highlight.fixed {\n  z-index:9;\n}\n\n\n.box-highlight.is_component {\n  position: absolute;\n  box-shadow: inset 0 0 0 1px #ff6250;\n  background: rgba(255, 98, 80,0.1);\n}\n.box-highlight.is_root_screen {\n  background: transparent;\n  box-shadow: inset 0px 0 0 3px #4285f4;\n}\n.box-highlight.is_component.is_root_screen {\n  box-shadow: inset 0px 0 0 3px #ff6250;\n}\n\n.box-highlight.is_root_screen .tag-box {\n  background: transparent;\n  top:3px;\n  left:0;\n}\n\n\n\n.is_component .tag-component-name{\n  color: #E2412E;\n  background: #F2BFAF;\n}\n.is_component .tag-name{\n  background: #ff6250;\n  color:#fff;\n}\n\n",
    Q = (function () {
      function t() {
        (this.nodes = {}),
          (this.links = document.querySelectorAll("a")),
          (this.linksMap = []),
          (this.serverOverrides = {}),
          (this.modelNodes = {}),
          (this.childToInstanceMap = {}),
          (this.selectedNode = null),
          (this.isOverridesActivated = !1),
          (this.whitelist = null),
          (this.inlineEventsMap = {}),
          (this.generatedViews = {}),
          (this.listOfInlineEvents = ["onclick", "onmouseover", "onmouseout", "onkeydown", "onclick"]),
          (this.fixedBox = null),
          (this.box = null),
          this.storeLinks(),
          (this.onMouseOver = this.onMouseOver.bind(this)),
          (this.onMouseOut = this.onMouseOut.bind(this)),
          (this.onClick = this.onClick.bind(this)),
          (this.resetAllBoxes = this.resetAllBoxes.bind(this)),
          (this.updateBoxesPosition = this.updateBoxesPosition.bind(this));
      }
      return (
        (t.prototype.activate = function () {
          this.isOverridesActivated ||
            (console.log("ov-activate"),
            document.body.setAttribute("mode", "code"),
            this.createAllBoxes(),
            this.addStyles(),
            this.disableLinks(),
            this.addDocumentListeners(),
            this.addWindowListeners(),
            (this.isOverridesActivated = !0),
            this.resetAllBoxes(),
            parent.postMessage(
              {
                action: "overrides-activated",
              },
              "*"
            ));
        }),
        (t.prototype.deactivate = function () {
          this.isOverridesActivated && (this.restoreAllNodeEvents(), this.destroyAllBoxes(), this.removeDocumentListeners(), this.removeWindowListeners(), document.body.removeAttribute("mode"), (this.isOverridesActivated = !1));
        }),
        (t.prototype.addStyles = function () {
          if (!document.querySelector("#overrides-styles")) {
            var t = document.createElement("style");
            t.setAttribute("id", "overrides-styles"), (t.innerHTML = X), document.head.appendChild(t);
          }
        }),
        (t.prototype.removeStyles = function () {
          var t = document.querySelector("#overrides-styles");
          t && t.remove();
        }),
        (t.prototype.createBox = function (t) {
          var e = (void 0 === t ? {} : t).className,
            n = void 0 === e ? "" : e,
            i = document.createElement("div");
          i.setAttribute("data-turbo-permanent", "true"), i.setAttribute("id", "override-box-" + n), i.classList.add("box-highlight", n);
          var o = document.createElement("div");
          o.classList.add("box-wrapper");
          var s = document.createElement("div");
          s.classList.add("tag-box");
          var r = document.createElement("div");
          r.classList.add("tag-name");
          var a = document.createElement("div");
          return (
            a.classList.add("tag-component-name"),
            s.appendChild(r),
            s.appendChild(a),
            o.appendChild(s),
            i.appendChild(o),
            document.body.appendChild(i),
            {
              boxEl: i,
              boxWrapper: o,
              boxElTag: s,
              boxElTagName: r,
              boxElComponentName: a,
            }
          );
        }),
        (t.prototype.updateBoxesPosition = function () {
          this.setBoxPosition(this.selectedNode, this.fixedBox), this.resetBox(this.box);
        }),
        (t.prototype.updateGeneratedViews = function (t) {
          this.generatedViews = t;
        }),
        (t.prototype.setBoxPosition = function (t, e, n) {
          if ((void 0 === n && (n = {}), e && t)) {
            var i = t.getBoundingClientRect();
            e.boxEl.style.borderRadius = "";
            var o = window.pageXOffset || window.document.documentElement.scrollLeft,
              s = window.pageYOffset || window.document.documentElement.scrollTop;
            if (
              (Object.assign(e.boxEl.style, {
                width: t.offsetWidth + "px",
                height: t.offsetHeight + "px",
                transform: "translate3d(" + Math.max(0, i.x + o) + "px," + Math.max(0, i.y + s) + "px,0)",
                display: "block",
              }),
              e.boxEl.style.setProperty("--width", t.offsetWidth + "px"),
              e.boxEl.style.setProperty("--width", t.offsetWidth + "px"),
              e.boxElTag.style.setProperty("--tag-box-width", "auto"),
              e.boxElTag.style.setProperty("--tag-box-left", "0px"),
              e.boxElTag.style.setProperty("--tag-box-top", "-20px"),
              !n.flat)
            ) {
              n.radius && (e.boxEl.style.borderRadius = n.radius + "px");
              var r = this.getNodeId(t);
              if (r) {
                this.isRootNode(r, t) ? e.boxEl.classList.add("is_root_screen") : e.boxEl.classList.remove("is_root_screen");
                var a = this.modelNodes[r] || {};
                a.is_web_component || a.is_component || a.is_suggestion ? e.boxEl.classList.add("is_component") : e.boxEl.classList.remove("is_component");
              }
            }
          }
        }),
        (t.prototype.resetBox = function (t) {
          t &&
            Object.assign(t.boxEl.style, {
              width: "0",
              height: "0",
              transform: "translate3d(0,0,0)",
              display: "none",
            });
        }),
        (t.prototype.resetAllBoxes = function () {
          this.resetBox(this.box), this.resetBox(this.fixedBox);
        }),
        (t.prototype.destroyBox = function (t) {
          t && t.boxEl.remove();
        }),
        (t.prototype.createAllBoxes = function () {
          (this.box = this.createBox({
            className: "hover",
          })),
            (this.fixedBox = this.createBox({
              className: "fixed",
            }));
        }),
        (t.prototype.destroyAllBoxes = function () {
          this.destroyBox(this.box), this.destroyBox(this.fixedBox);
        }),
        (t.prototype.storeLinks = function () {
          for (var t = 0; t < this.links.length; t++) {
            var e = this.links[t];
            this.linksMap.push(e.getAttribute("href") || "");
          }
        }),
        (t.prototype.disableLinks = function () {
          for (var t = 0; t < this.links.length; t++) {
            this.links[t].removeAttribute("href");
          }
        }),
        (t.prototype.enableLinks = function () {
          for (var t = 0; t < this.links.length; t++) {
            this.links[t].setAttribute("href", this.linksMap[t]);
          }
        }),
        (t.prototype.setServerOverrides = function (t) {
          (this.serverOverrides = t), this.reactToDataChange();
        }),
        (t.prototype.setWhiteList = function (t) {
          (t && Array.isArray(t) && (this.whitelist = 0 === t.length ? null : t), t && 0 !== t.length) ||
            j(document.querySelectorAll(".ignore")).forEach(function (t) {
              t.classList.remove("ignore");
            });
        }),
        (t.prototype.setModelNodes = function (t) {
          var e = t.modelNodes,
            n = t.allowInnerComponentSelection;
          (this.modelNodes = e), (this.childToInstanceMap = n ? {} : this.mapChildToInstance(e)), this.reactToDataChange();
        }),
        (t.prototype.getNodeSubNodesMap = function (t) {
          for (var e = this, n = {}, i = 0; i < t.length; i++) {
            var o = t[i],
              s = this.getNodeById(o);
            if (s) {
              var r = Array.from(s.querySelectorAll("[data-id]"))
                .map(function (t) {
                  return e.getNodeId(t);
                })
                .filter(Boolean)
                .filter(function (e) {
                  return e && t.includes(e);
                });
              n[o] = r;
            }
          }
          return n;
        }),
        (t.prototype.mapChildToInstance = function (t) {
          var e = this,
            n = [],
            i = {};
          Object.keys(t).forEach(function (e) {
            (t[e].is_web_component || t[e].is_suggestion) && n.push(e);
          });
          for (
            var o = function (t) {
                var o = n[t],
                  r = s.getNodeById(o);
                if (!r) return "continue";
                Array.from(r.querySelectorAll("[data-id]"))
                  .map(function (t) {
                    return e.getNodeId(t);
                  })
                  .filter(Boolean)
                  .forEach(function (t) {
                    t && n.includes(t) && (i[t] = t), t && !n.includes(t) && (i[t] = o);
                  });
              },
              s = this,
              r = 0;
            r < n.length;
            r++
          )
            o(r);
          return i;
        }),
        (t.prototype.setIgnoredNodeIds = function (t) {
          throw new Error("Method not implemented.");
        }),
        (t.prototype.reactToDataChange = function () {
          var t = this;
          if (
            (Object.keys(this.serverOverrides || {}).forEach(function (e) {
              var n = t.serverOverrides[e],
                i = t.getNodeById(e);
              i && (i.classList.remove("is_image"), n.is_image && i.classList.add("is_image"));
            }),
            this.selectedNode)
          ) {
            var e = this.getNodeId(this.selectedNode);
            e && (this.setBoxPosition(this.selectedNode, this.fixedBox), this.fixedBox && this.setComponentName(this.fixedBox.boxElComponentName, e));
          }
        }),
        (t.prototype.getNodeId = function (t) {
          return t ? t.getAttribute("data-id") : null;
        }),
        (t.prototype.disableComponentView = function () {
          var t = document.querySelector("#og-content-wrapper");
          t && (document.body.innerHTML = t.innerHTML);
        }),
        (t.prototype.getNodeData = function (t) {
          var e = this.getNodeId(t);
          if (e && t) {
            var n = this.findParentWithId(t),
              i = this.getNodeId(n),
              o = [
                "class",
                "style",
                "data-id",
                "anima-layer",
                "anima-container",
                "component",
                "anima-component-wrapper",
                "anima-not-ready",
                "anima-word-break",
                "anima-hidden",
                "anima-smart-layers-pointers",
                "id",
                "anima-show-on-scroll",
                "data-initial-state",
              ],
              s = this.nodes[e].originalAttributes.filter(function (t) {
                return !o.includes(t.name);
              }),
              r = this.nodes.globalCSS ? this.nodes.globalCSS : "",
              a = getComputedStyle(t);
            return {
              id: e,
              tagName: this.nodes[e].tagName,
              htmlContent: this.nodes[e].htmlContent,
              inlineCSS: this.nodes[e].inlineCSS,
              classes: t.getAttribute("class"),
              customClasses: this.nodes[e].customClasses,
              originalAttributes: s,
              customAttributes: this.nodes[e].customAttributes,
              globalCSS: r,
              path: this.getNodePath(t),
              textContent: t.innerText || t.textContent,
              isLeaf: this.hasSameDimensionsAsParent(t),
              hasBackgroundURL: "none" !== a.backgroundImage,
              parentNodeId: i,
            };
          }
        }),
        (t.prototype.isLeaf = function (t) {
          return !!this.getNodeId(t) && !t.hasChildNodes();
        }),
        (t.prototype.hasSameDimensionsAsParent = function (t) {
          var e = this.getNodeId(t);
          if (!e) return !1;
          var n = this.findParentWithId(t),
            i = this.getNodeId(n);
          if (i && i == e) return !1;
          var o = t.getBoundingClientRect(),
            s = o.width,
            r = o.height,
            a = n.getBoundingClientRect(),
            l = a.width,
            c = a.height;
          return Math.abs(Math.floor(s) - Math.floor(l)) <= 2 && Math.abs(Math.floor(r) - Math.floor(c)) <= 2;
        }),
        (t.prototype.getNodePath = function (t) {
          return this.selectedNode ? G(this.selectedNode) : t ? G(t) : [];
        }),
        (t.prototype.getNodeById = function (t) {
          return document.querySelector('[data-id="' + t + '"]');
        }),
        (t.prototype.getNodesById = function (t) {
          for (var e = {}, n = 0; n < t.length; n++) {
            var i = t[n],
              o = this.getNodeById(i);
            if (o) {
              this.registerNode(o);
              var s = this.getNodeData(o);
              e[i] = s;
            }
          }
          this.sendMessage("nodes-data-map", e);
        }),
        (t.prototype.getPreview = function (t) {
          return I(this, void 0, void 0, function () {
            var e,
              n,
              i = this;
            return T(this, function (o) {
              return (
                (e = t.nodeId),
                (n = A(t, ["nodeId"])),
                e
                  ? (this.sendMessage(
                      "on-preview-start",
                      E(
                        {
                          nodeId: e,
                        },
                        n
                      )
                    ),
                    this.takeNodeScreenShot(e)
                      .then(function (t) {
                        i.sendMessage(
                          "on-preview-end",
                          E(
                            {
                              error: null,
                              nodeId: e,
                              base64: t,
                            },
                            n
                          )
                        );
                      })
                      .catch(function (t) {
                        i.sendMessage(
                          "on-preview-end",
                          E(
                            {
                              error: t,
                            },
                            n
                          )
                        );
                      }),
                    [2])
                  : [2]
              );
            });
          });
        }),
        (t.prototype.takeNodeScreenShot = function (t) {
          return I(this, void 0, void 0, function () {
            var e, n, i, o, s, r, a, l;
            return T(this, function (c) {
              switch (c.label) {
                case 0:
                  return (e = this.getNodeById(t))
                    ? ((n = Array.from(e.querySelectorAll("img"))),
                      (i = []),
                      n.forEach(function (t) {
                        var e = t.src;
                        if ((i.push(t.src), e.startsWith("https"))) {
                          t.crossOrigin = "anonymous";
                          var n = new Date().getTime();
                          e = (e = t.src.includes("?") ? t.src + "&v=" + n : t.src + "?v=" + n).replace("cdn.animaapp.com", "anima-uploads.s3.amazonaws.com");
                        }
                        t.src = e;
                      }),
                      (o = getComputedStyle(e).backgroundColor),
                      (s = document.body.style.backgroundColor),
                      [
                        4,
                        html2canvas(e, {
                          backgroundColor: o || s || null,
                          scrollY: -window.scrollY,
                          scrollX: 0,
                          allowTaint: !1,
                          useCORS: !0,
                          onclone: function (t) {
                            t.body.style.overflow = "hidden";
                          },
                        }),
                      ])
                    : [2, ""];
                case 1:
                  for (r = c.sent(), a = 0; a < n.length; a++) (l = n[a]).removeAttribute("crossOrigin"), (l.src = i[a]);
                  return [2, r.toDataURL()];
              }
            });
          });
        }),
        (t.prototype.sendNodeData = function (t, e) {
          if (this.getNodeId(t)) {
            var n = this.getNodeData(t);
            (n = E(E({}, n), {
              metadata: e,
            })),
              this.sendMessage("edit-node", n);
          }
        }),
        (t.prototype.sendMessage = function (t, e) {
          void 0 === e && (e = {}),
            parent.postMessage(
              {
                action: t,
                data: e,
              },
              "*"
            );
        }),
        (t.prototype.registerNode = function (t) {
          var e = this.getNodeId(t);
          e &&
            (this.nodes[e] ||
              (this.nodes[e] = {
                isModifed: !1,
                tagName: t.tagName.toLowerCase(),
                customClasses: [],
                inlineCSS: t.getAttribute("style") || "",
                updatedOriginalAttributes: [],
                originalAttributes: j(t.attributes).map(function (t) {
                  return {
                    name: t.name,
                    value: t.value,
                  };
                }),
                customAttributes: [],
                htmlContent: t.innerHTML,
                textContent: t.innerText || t.textContent || "",
              }));
        }),
        (t.prototype.setComponentName = function (t, e) {
          t.style.visibility = "hidden";
          var n = this.modelNodes[e] || {},
            i = this.modelNodes[e] || {};
          if (n.is_component || n.is_suggestion) {
            var o = Object.prototype.hasOwnProperty.call(n, "viewName") ? n.viewName : i.viewName;
            o && ((t.innerHTML = "<span>" + o + "</span>"), (t.style.visibility = "visible"));
          }
        }),
        (t.prototype.getExtFromFileName = function (t) {
          if (!t) return "";
          var e = /(?:\.([^.]+))?$/.exec(t);
          return e ? e[1] : "";
        }),
        (t.prototype.isImage = function (t, e) {
          var n = (void 0 === e ? {} : e).native,
            i = void 0 === n || n,
            o = this.getNodeById(t);
          if (!o) return !1;
          var s = this.serverOverrides[t] || {},
            r = i && "IMG" == o.tagName,
            a = Object.prototype.hasOwnProperty.call(s, "is_image") && s.is_image;
          return r || a;
        }),
        (t.prototype.highlightNodes = function (t) {
          var e = this,
            n = t.ids,
            i = t.scrollToCenter,
            o = void 0 !== i && i,
            s = t.shouldScroll,
            r = void 0 === s || s,
            a = t.scrollViewport,
            l = void 0 !== a && a,
            c = t.styles,
            d = void 0 === c ? {} : c,
            h = t.animate,
            u = void 0 === h || h,
            p = n || [],
            f = "hg-wrap-id",
            m = document.querySelector("#" + f);
          m && m.remove();
          var g = document.createElement("div");
          g.setAttribute("id", f);
          for (
            var v,
              y,
              b = [],
              w = d.borderColor || "#ffcb6b",
              x = d.borderWidth || "2px",
              C = d.background || "rgba(255, 203, 107, 0.2)",
              N = function (t) {
                var n = p[t],
                  i = k.getNodeById(n);
                if (!(i || k.generatedViews[n])) return "continue";
                (v = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)), (y = Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
                var s = document.createElement("div");
                s.setAttribute("class-highlighter", "true"),
                  Object.assign(s.style, {
                    position: "absolute",
                    opacity: 0,
                    zIndex: -1,
                    top: 0,
                    left: 0,
                    background: C,
                    boxShadow: "inset 0 0 0 " + x + " " + w,
                  }),
                  b.push(s),
                  g.appendChild(s);
                var a = 0,
                  c = 0;
                if (k.generatedViews[n]) {
                  var d = k.generatedViews[n] || [],
                    h = [];
                  d.forEach(function (t) {
                    var n = e.getNodeById(t);
                    if (n) {
                      var i = n.getBoundingClientRect();
                      h.push({
                        x: i.x,
                        y: i.y,
                        xw: i.x + i.width,
                        yh: i.y + i.height,
                      });
                    }
                  });
                  var u = Math.min.apply(
                      Math,
                      j(
                        h.map(function (t) {
                          return t.x;
                        })
                      )
                    ),
                    f = Math.min.apply(
                      Math,
                      j(
                        h.map(function (t) {
                          return t.y;
                        })
                      )
                    ),
                    m = Math.max.apply(
                      Math,
                      j(
                        h.map(function (t) {
                          return t.xw;
                        })
                      )
                    ),
                    N = Math.max.apply(
                      Math,
                      j(
                        h.map(function (t) {
                          return t.yh;
                        })
                      )
                    ),
                    M = window.pageXOffset || window.document.documentElement.scrollLeft,
                    _ = window.pageYOffset || window.document.documentElement.scrollTop;
                  (a = m - u),
                    (c = N - f),
                    Object.assign(s.style, {
                      width: a + "px",
                      height: c + "px",
                      transform: "translate3d(" + Math.max(0, u + M) + "px," + Math.max(0, f + _) + "px,0)",
                      display: "block",
                    }),
                    s.style.setProperty("--width", m - u + "px");
                } else
                  i &&
                    ((a = i.offsetWidth),
                    (c = i.offsetHeight),
                    k.setBoxPosition(
                      i,
                      {
                        boxEl: s,
                      },
                      {
                        flat: !0,
                      }
                    ),
                    r &&
                      k.scrollToElement(i, {
                        center: o,
                        viewport: l,
                      }));
                Object.assign(s.style, {
                  width: Math.min(a, v) + "px",
                  height: Math.min(c, y) + "px",
                }),
                  a >= v &&
                    k.scrollbarVisible(document.documentElement) &&
                    Object.assign(s.style, {
                      width: v - 10 + "px",
                    });
              },
              k = this,
              M = 0;
            M < p.length;
            M++
          )
            N(M);
          if ((document.body.appendChild(g), u))
            var _ = 2,
              S = 2,
              E = setInterval(function () {
                return _ <= 0 && S > 0
                  ? (S--, void (_ = 2))
                  : _ <= 0 && 0 == S
                  ? (clearInterval(E),
                    void b.forEach(function (t) {
                      (t.style.opacity = "1"), (t.style.zIndex = "99");
                    }))
                  : (b.forEach(function (t) {
                      (t.style.opacity = Math.max(0, _).toFixed(1)), (t.style.zIndex = "99");
                    }),
                    void (_ -= 0.1));
              }, 50);
          else
            b.forEach(function (t) {
              (t.style.opacity = "1"), (t.style.zIndex = "99");
            });
        }),
        (t.prototype.scrollbarVisible = function (t) {
          return t.scrollHeight > t.clientHeight;
        }),
        (t.prototype.clearHighlightedNodes = function () {
          var t = document.querySelector("#hg-wrap-id");
          t && t.remove();
        }),
        (t.prototype.selectNode = function (t, e) {
          return (
            void 0 === e && (e = {}),
            I(this, void 0, void 0, function () {
              var n,
                i,
                o,
                s,
                r,
                a,
                l,
                c = this;
              return T(this, function (d) {
                return (n = this.getNodeId(t))
                  ? ((i = this.serverOverrides[n] || {}),
                    (o = e.extra || {}),
                    (s = this.getExtFromFileName(i.capture_url)),
                    (r = i.capture_type || ""),
                    (a =
                      this.isImage(n, {
                        native: !1,
                      }) && !i.capture_url),
                    (l =
                      this.isImage(n, {
                        native: !1,
                      }) &&
                      i.capture_url &&
                      s != r),
                    (a || l) &&
                      (this.sendMessage("on-capture-start", {
                        nodeId: n,
                      }),
                      this.takeNodeScreenShot(n)
                        .then(function (t) {
                          c.sendMessage("on-capture-end", {
                            error: null,
                            nodeId: n,
                            base64: t,
                          });
                        })
                        .catch(function (t) {
                          c.sendMessage("on-capture-end", {
                            error: t,
                          });
                        })),
                    this.registerNode(t),
                    this.fixedBox && ((this.fixedBox.boxElTagName.innerHTML = this.isImage(n) ? "img" : t.tagName.toLowerCase()), this.setComponentName(this.fixedBox.boxElComponentName, n), this.setBoxPosition(t, this.fixedBox, o)),
                    (this.selectedNode = t),
                    this.sendNodeData(t, e),
                    [2])
                  : [2];
              });
            })
          );
        }),
        (t.prototype.findParentWithId = function (t) {
          var e = t.parentNode || null;
          return "BODY" == e.tagName ? t : this.getNodeId(e) ? e : this.findParentWithId(e);
        }),
        (t.prototype.afterChange = function () {
          var t = this.getNodeId(this.selectedNode);
          t &&
            ((this.nodes[t].isModifed = !0),
            this.sendNodeData(this.selectedNode, {
              source: "override",
            }),
            this.setBoxPosition(this.selectedNode, this.fixedBox),
            this.resetBox(this.box));
        }),
        (t.prototype.addGlobalCSS = function (t) {
          var e = document.getElementById("overrides-global-css");
          e || ((e = document.createElement("style")).setAttribute("type", "text/css"), e.setAttribute("id", "overrides-global-css"), document.head.appendChild(e)), (e.innerHTML = t), (this.nodes.globalCSS = t);
        }),
        (t.prototype.setHTMLContent = function (t) {
          var e = this.getNodeId(this.selectedNode);
          e && this.selectedNode && ((this.selectedNode.innerHTML = t), (this.nodes[e].htmlContent = t));
        }),
        (t.prototype.setInlineCSS = function (t) {
          var e = this.getNodeId(this.selectedNode);
          e && this.selectedNode && (this.selectedNode.setAttribute("style", t), (this.nodes[e].inlineCSS = t));
        }),
        (t.prototype.ChangeTagName = function (t) {
          var e,
            n,
            i,
            o = this.getNodeId(this.selectedNode);
          if (o && this.selectedNode && this.selectedNode.tagName.toLowerCase() != t.toLowerCase()) {
            for (var s = document.createElement(t), r = 0, a = this.selectedNode.attributes.length; r < a; ++r) {
              var l = null === (e = this.selectedNode.attributes.item(r)) || void 0 === e ? void 0 : e.nodeName,
                c = null === (n = this.selectedNode.attributes.item(r)) || void 0 === n ? void 0 : n.nodeValue;
              null != l && null != c && s.setAttribute(l, c);
            }
            (s.innerHTML = this.selectedNode.innerHTML),
              null === (i = this.selectedNode.parentNode) || void 0 === i || i.replaceChild(s, this.selectedNode),
              (this.selectedNode = s),
              this.fixedBox && (this.fixedBox.boxElTagName.innerHTML = this.selectedNode.tagName.toLowerCase()),
              (this.nodes[o].tagName = t.toLowerCase());
          }
        }),
        (t.prototype.updateOriginalAttribute = function (t) {
          var e = this.getNodeId(this.selectedNode);
          e &&
            this.selectedNode &&
            (this.selectedNode.setAttribute(t.name, t.value),
            (this.nodes[e].originalAttributes = this.nodes[e].originalAttributes.map(function (e) {
              return e.name == t.name
                ? E(E({}, e), {
                    value: t.value,
                  })
                : e;
            })),
            this.nodes[e].updatedOriginalAttributes.push(t));
        }),
        (t.prototype.setCustomAttribute = function (t) {
          var e = this.getNodeId(this.selectedNode);
          if (e && this.selectedNode)
            if (
              (this.selectedNode.setAttribute(t.name, t.value),
              this.nodes[e].customAttributes.find(function (e) {
                return e.name == t.name;
              }))
            ) {
              var n = this.nodes[e].customAttributes
                .map(function (t) {
                  return t.name;
                })
                .indexOf(t.name);
              this.nodes[e].customAttributes[n].value = t.value;
            } else this.nodes[e].customAttributes.push(t);
        }),
        (t.prototype.removeCustomAttribute = function (t) {
          var e = this.getNodeId(this.selectedNode);
          if (e && this.selectedNode) {
            this.selectedNode.removeAttribute(t);
            var n = this.nodes[e].customAttributes
              .map(function (t) {
                return t.name;
              })
              .indexOf(t);
            this.nodes[e].customAttributes.splice(n, 1);
          }
        }),
        (t.prototype.addCustomCssClass = function (t) {
          var e = this.getNodeId(this.selectedNode);
          e && this.selectedNode && (this.selectedNode.classList.add(t), this.nodes[e].customClasses.push(t));
        }),
        (t.prototype.removeCustomCssClass = function (t) {
          var e = this.getNodeId(this.selectedNode);
          if (e && this.selectedNode) {
            this.selectedNode.classList.remove(t);
            var n = this.nodes[e].customClasses.indexOf(t);
            this.nodes[e].customClasses.splice(n, 1);
          }
        }),
        (t.prototype.stripEventsFromNode = function (t) {
          var e = this.getNodeId(t);
          if (e)
            for (var n = [].slice.call(t.attributes), i = 0; i < n.length; i++) {
              var o = n[i].name;
              (0 === o.indexOf("on") || this.listOfInlineEvents.includes(o)) && (this.inlineEventsMap[e] || (this.inlineEventsMap[e] = {}), (this.inlineEventsMap[e][o] = n[i].value), t.attributes.removeNamedItem(o));
            }
        }),
        (t.prototype.restoreAllNodeEvents = function () {
          var t = this;
          Object.keys(this.inlineEventsMap).forEach(function (e) {
            var n = t.getNodeById(e),
              i = t.inlineEventsMap[e];
            n &&
              Object.keys(i).forEach(function (t) {
                n && n.setAttribute(t, i[t]);
              });
          }),
            (this.inlineEventsMap = {});
        }),
        (t.prototype.onMouseOver = function (t) {
          t.ignoreMutations || !1 ? this.onRegularMouseOver(t) : this.onMutatedMouseOver(t);
        }),
        (t.prototype.onRegularMouseOver = function (t) {
          var e = t.target,
            n = this.getNodeId(e);
          n &&
            (this.whitelist && this.whitelist.length > 0 && !this.whitelist.includes(n)
              ? e.classList.add("ignore")
              : (this.box && ((this.box.boxElTagName.innerHTML = this.isImage(n) ? "img" : e.tagName.toLowerCase()), this.setComponentName(this.box.boxElComponentName, n)), this.stripEventsFromNode(e), this.setBoxPosition(e, this.box)));
        }),
        (t.prototype.onMutatedMouseOver = function (t) {
          var e = t.target,
            n = this.getNodeId(e);
          if (n) {
            var i = this.modelNodes[n];
            if ((i && i.is_root_screen && this.whitelist && this.whitelist.length > 0 && (this.whitelist.includes(n) || this.whitelist.push(n)), this.whitelist && this.whitelist.length > 0 && !this.whitelist.includes(n)))
              e.classList.add("ignore");
            else {
              var o,
                s = {};
              if (this.childToInstanceMap[n]) e = this.getNodeById(this.childToInstanceMap[n]);
              else {
                var r = !1;
                for (r = !this.isRootNode(n, e) && this.hasSameDimensionsAsParent(e); r; )
                  this.isLeaf(e) && !o && (o = parseInt(getComputedStyle(e).getPropertyValue("border-radius") || "", 10)), (e = this.findParentWithId(e)), (r = this.hasSameDimensionsAsParent(e));
              }
              if ((n = this.getNodeId(e))) {
                this.box && ((this.box.boxElTagName.innerHTML = this.isImage(n) ? "img" : e.tagName.toLowerCase()), this.setComponentName(this.box.boxElComponentName, n));
                var a = getComputedStyle(e),
                  l = parseInt(a.getPropertyValue("border-radius") || "", 10);
                !l && o && (l = o), l && (s.radius = l), this.stripEventsFromNode(e), this.setBoxPosition(e, this.box, s);
              }
            }
          }
        }),
        (t.prototype.onMouseOut = function () {
          this.resetBox(this.box);
        }),
        (t.prototype.isRootNode = function (t, e) {
          var n;
          return !(!e && !t) && (!t && e && (t = this.getNodeId(e)), !!t && ((null === (n = this.modelNodes[t]) || void 0 === n ? void 0 : n.is_root_screen) || Array.from((null == e ? void 0 : e.classList) || []).includes("screen")));
        }),
        (t.prototype.onClick = function (t, e) {
          var n = (void 0 === e ? {} : e).source,
            i = void 0 === n ? "iframe" : n;
          t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault();
          var o = t.target,
            s = this.getNodeId(o);
          if (s) {
            var r = {};
            if (this.childToInstanceMap[s]) o = this.getNodeById(this.childToInstanceMap[s]);
            else {
              var a = !1;
              for (this.isRootNode(s) || (a = this.hasSameDimensionsAsParent(o)); a; )
                this.isLeaf(o) && !r.radius && (r.radius = parseInt(getComputedStyle(o).getPropertyValue("border-radius") || "", 10)), (o = this.findParentWithId(o)), (a = this.hasSameDimensionsAsParent(o));
            }
            var l = getComputedStyle(o),
              c = parseInt(l.getPropertyValue("border-radius") || "", 10);
            c && (r.radius = c),
              j(o.classList).includes("ignore") ||
                this.selectNode(o, {
                  source: i,
                  extra: r,
                });
          }
        }),
        (t.prototype.isElementInViewport = function (t, e) {
          e || (e = t.getBoundingClientRect());
          var n = window.innerWidth || document.documentElement.clientWidth,
            i = window.innerHeight || document.documentElement.clientHeight,
            o = function (t, e) {
              return document.elementFromPoint(t, e);
            };
          return !(e.right < 0 || e.bottom < 0 || e.left > n || e.top > i) && (t.contains(o(e.left, e.top)) || t.contains(o(e.right, e.top)) || t.contains(o(e.right, e.bottom)) || t.contains(o(e.left, e.bottom)));
        }),
        (t.prototype.scrollToElement = function (t, e) {
          var n = void 0 === e ? {} : e,
            i = n.center,
            o = void 0 !== i && i,
            s = n.viewport,
            r = void 0 !== s && s;
          if (t) {
            var a = t.getBoundingClientRect();
            if (!r || !this.isElementInViewport(t, a)) {
              var l = o ? (window.innerHeight - a.height / 2) / 2 : 100,
                c = Math.max(0, a.top + window.pageYOffset - l);
              window.scroll({
                top: c,
                behavior: "smooth",
              });
            }
          }
        }),
        (t.prototype.selectNodeById = function (t) {
          var e = t.nodeId,
            n = t.metadata || {
              scrollIntoView: !0,
              source: "client",
            },
            i = this.getNodeById(e);
          i && (n.scrollIntoView && this.scrollToElement(i), this.selectNode(i, n));
        }),
        (t.prototype.addDocumentListeners = function () {
          document.addEventListener("mouseover", this.onMouseOver), document.addEventListener("mouseout", this.onMouseOut), document.addEventListener("click", this.onClick);
        }),
        (t.prototype.addWindowListeners = function () {
          window.addEventListener("resize", this.updateBoxesPosition, !1);
        }),
        (t.prototype.removeDocumentListeners = function () {
          document.removeEventListener("mouseover", this.onMouseOver), document.removeEventListener("mouseout", this.onMouseOut), document.removeEventListener("click", this.onClick);
        }),
        (t.prototype.removeWindowListeners = function () {
          window.removeEventListener("resize", this.updateBoxesPosition, !1);
        }),
        (t.prototype.applyOverrides = function (t) {
          var e = this;
          t.globalCSS && this.addGlobalCSS(t.globalCSS);
          var n = 0;
          Object.keys(t).forEach(function (i) {
            if ("globalCSS" != i) {
              n++;
              var o = t[i],
                s = document.querySelector("[data-id='" + i + "']");
              if (s) {
                e.selectedNode = s;
                var r = j(s.attributes).map(function (t) {
                    return {
                      name: t.name,
                      value: t.value,
                    };
                  }),
                  a = [],
                  l = [],
                  c = o.customClasses ? o.customClasses : [],
                  d = o.tagName ? o.tagName : s.tagName.toLocaleUpperCase(),
                  h = o.inlineCSS ? o.inlineCSS : "",
                  u = o.htmlContent ? o.htmlContent : "";
                if (
                  ((e.nodes[i] = {
                    isModifed: !0,
                    tagName: d,
                    customClasses: [],
                    customAttributes: a,
                    originalAttributes: l,
                    htmlContent: u,
                    inlineCSS: h,
                    updatedOriginalAttributes: [],
                    textContent: "",
                  }),
                  o.customAttributes)
                ) {
                  var p = [];
                  Object.keys(o.customAttributes).forEach(function (t) {
                    p.push({
                      name: t,
                      value: o.customAttributes[t],
                    });
                  }),
                    (a = j(p));
                }
                var f = a.map(function (t) {
                  return t.name;
                });
                (l = r.filter(function (t) {
                  return !f.includes(t.name);
                })),
                  (e.nodes[i].customAttributes = a),
                  (e.nodes[i].originalAttributes = l),
                  o.originalAttributes &&
                    Object.keys(o.originalAttributes).forEach(function (t) {
                      e.updateOriginalAttribute({
                        name: t,
                        value: o.originalAttributes[t],
                      });
                    }),
                  a.forEach(function (t) {
                    e.setCustomAttribute(t);
                  }),
                  c.forEach(function (t) {
                    e.addCustomCssClass(t);
                  }),
                  e.setHTMLContent(u),
                  e.setInlineCSS(h),
                  e.ChangeTagName(d);
              }
            }
          }),
            console.log(n + " element overrides processed");
        }),
        (t = O([U.Service(), L("design:paramtypes", [])], t))
      );
    })(),
    K = (function () {
      function t() {
        (this.clickableAreas = []),
          (this.count = 1),
          (this.counter = null),
          (this.hotspots = null),
          (this.isHotspotsActivated = !1),
          (this.specialTags = ["INPUT", "VIDEO"]),
          this.addStyles(),
          this.disableStyles(),
          (this.onMouseDown = this.onMouseDown.bind(this)),
          (this.updatePosition = this.updatePosition.bind(this));
      }
      return (
        (t.prototype.createHotspots = function () {
          var t,
            e,
            n = document.querySelector("#hotspots_wrapper");
          n && n.remove(), (this.clickableAreas = document.querySelectorAll("a[href]"));
          var i = 0,
            o = document.createElement("div");
          o.setAttribute("id", "hotspots_wrapper");
          try {
            for (var s = B(this.clickableAreas), r = s.next(); !r.done; r = s.next()) {
              var a = r.value.firstElementChild;
              if (a) {
                a.setAttribute("data-hotspot-id", "hp-" + i);
                var l = document.createElement("div");
                l.classList.add("hotspot"), l.setAttribute("id", "hp-" + i), this.setHotspotPosition(a, l), o.appendChild(l), i++;
              }
            }
          } catch (e) {
            t = {
              error: e,
            };
          } finally {
            try {
              r && !r.done && (e = s.return) && e.call(s);
            } finally {
              if (t) throw t.error;
            }
          }
          document.body && document.body.appendChild(o);
        }),
        (t.prototype.destory = function () {
          var t, e;
          this.deactivate(), this.hotspots || (this.hotspots = document.querySelectorAll(".hotspot"));
          try {
            for (var n = B(this.hotspots), i = n.next(); !i.done; i = n.next()) {
              var o = i.value;
              o.parentNode && o.parentNode.removeChild(o);
            }
          } catch (e) {
            t = {
              error: e,
            };
          } finally {
            try {
              i && !i.done && (e = n.return) && e.call(n);
            } finally {
              if (t) throw t.error;
            }
          }
          this.hotspots = null;
        }),
        (t.prototype.activate = function () {
          this.isHotspotsActivated ||
            (console.log("hp-activate"), this.activateStyles(), document.addEventListener("mousedown", this.onMouseDown), window.addEventListener("resize", this.updatePosition, !1), (this.isHotspotsActivated = !0));
        }),
        (t.prototype.deactivate = function () {
          this.isHotspotsActivated &&
            (console.log("hp-deactivate"), this.reset(), this.disableStyles(), document.removeEventListener("mousedown", this.onMouseDown), window.removeEventListener("resize", this.updatePosition, !1), (this.isHotspotsActivated = !1));
        }),
        (t.prototype.updateHostposts = function () {
          document.removeEventListener("mousedown", this.onMouseDown), this.createHotspots(), document.addEventListener("mousedown", this.onMouseDown);
        }),
        (t.prototype.addStyles = function () {
          var t = document.createElement("style");
          t.setAttribute("id", "hotspots-styles"),
            (t.innerHTML = "\n    .hotspot {\n      position: absolute;\n      border: 1px solid #2a9fd8;\n      background: rgba(0, 173, 255, 0.54);\n      opacity: 0;\n      z-index: -1;\n      pointer-events:none;\n    }\n  "),
            document.head.appendChild(t);
        }),
        (t.prototype.disableStyles = function () {
          var t = document.createElement("style");
          t.setAttribute("id", "hide-styles"), (t.innerHTML = "\n    .hotspot {\n      display:none !important;\n    }\n  "), document.head.appendChild(t);
        }),
        (t.prototype.activateStyles = function () {
          var t = document.querySelector("#hide-styles");
          t && document.head.removeChild(t);
        }),
        (t.prototype.reset = function () {
          var t, e;
          this.hotspots || (this.hotspots = document.querySelectorAll(".hotspot"));
          try {
            for (var n = B(this.hotspots), i = n.next(); !i.done; i = n.next()) {
              i.value.style.zIndex = "-1";
            }
          } catch (e) {
            t = {
              error: e,
            };
          } finally {
            try {
              i && !i.done && (e = n.return) && e.call(n);
            } finally {
              if (t) throw t.error;
            }
          }
        }),
        (t.prototype.highlighter = function () {
          var t, e;
          if (((this.hotspots = document.querySelectorAll(".hotspot")), this.count <= 0)) return clearInterval(this.counter), void this.reset();
          try {
            for (var n = B(this.hotspots), i = n.next(); !i.done; i = n.next()) {
              var o = i.value;
              (o.style.opacity = Math.max(0, this.count).toFixed(1)), (o.style.zIndex = "99");
            }
          } catch (e) {
            t = {
              error: e,
            };
          } finally {
            try {
              i && !i.done && (e = n.return) && e.call(n);
            } finally {
              if (t) throw t.error;
            }
          }
          this.count -= 0.1;
        }),
        (t.prototype.updatePosition = function () {
          var t, e;
          try {
            for (var n = B(this.clickableAreas), i = n.next(); !i.done; i = n.next()) {
              var o = i.value.firstElementChild;
              if (o) {
                var s = o.getAttribute("data-hotspot-id");
                if (s) {
                  var r = document.getElementById(s);
                  r && this.setHotspotPosition(o, r);
                }
              }
            }
          } catch (e) {
            t = {
              error: e,
            };
          } finally {
            try {
              i && !i.done && (e = n.return) && e.call(n);
            } finally {
              if (t) throw t.error;
            }
          }
        }),
        (t.prototype.setHotspotPosition = function (t, e) {
          var n = t.getBoundingClientRect(),
            i = window.pageXOffset || window.document.documentElement.scrollLeft,
            o = window.pageYOffset || window.document.documentElement.scrollTop;
          (e.style.width = t.offsetWidth + "px"), (e.style.height = t.offsetHeight + "px"), (e.style.top = Math.max(0, n.y + o) + "px"), (e.style.left = Math.max(0, n.x + i) + "px");
        }),
        (t.prototype.onMouseDown = function (t) {
          var e = this;
          t.target &&
            Array.from(this.clickableAreas).every(function (e) {
              return !e.contains(t.target);
            }) &&
            !this.specialTags.includes(t.target.nodeName) &&
            ((this.count = 1),
            this.reset(),
            this.counter && clearInterval(this.counter),
            (this.counter = setInterval(function () {
              return e.highlighter();
            }, 50)));
        }),
        (t = O([U.Service(), L("design:paramtypes", [])], t))
      );
    })();
  const $ = new WeakMap(),
    J =
      (t) =>
      (...e) => {
        const n = t(...e);
        return $.set(n, !0), n;
      },
    tt = (t) => "function" == typeof t && $.has(t),
    et = "undefined" != typeof window && null != window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback,
    nt = (t, e, n = null) => {
      for (; e !== n; ) {
        const n = e.nextSibling;
        t.removeChild(e), (e = n);
      }
    },
    it = {},
    ot = {},
    st = `{{lit-${String(Math.random()).slice(2)}}}`,
    rt = `\x3c!--${st}--\x3e`,
    at = new RegExp(`${st}|${rt}`),
    lt = "$lit$";
  class ct {
    constructor(t, e) {
      (this.parts = []), (this.element = e);
      const n = [],
        i = [],
        o = document.createTreeWalker(e.content, 133, null, !1);
      let s = 0,
        r = -1,
        a = 0;
      const {
        strings: l,
        values: { length: c },
      } = t;
      for (; a < c; ) {
        const t = o.nextNode();
        if (null !== t) {
          if ((r++, 1 === t.nodeType)) {
            if (t.hasAttributes()) {
              const e = t.attributes,
                { length: n } = e;
              let i = 0;
              for (let t = 0; t < n; t++) dt(e[t].name, lt) && i++;
              for (; i-- > 0; ) {
                const e = l[a],
                  n = pt.exec(e)[2],
                  i = n.toLowerCase() + lt,
                  o = t.getAttribute(i);
                t.removeAttribute(i);
                const s = o.split(at);
                this.parts.push({
                  type: "attribute",
                  index: r,
                  name: n,
                  strings: s,
                }),
                  (a += s.length - 1);
              }
            }
            "TEMPLATE" === t.tagName && (i.push(t), (o.currentNode = t.content));
          } else if (3 === t.nodeType) {
            const e = t.data;
            if (e.indexOf(st) >= 0) {
              const i = t.parentNode,
                o = e.split(at),
                s = o.length - 1;
              for (let e = 0; e < s; e++) {
                let n,
                  s = o[e];
                if ("" === s) n = ut();
                else {
                  const t = pt.exec(s);
                  null !== t && dt(t[2], lt) && (s = s.slice(0, t.index) + t[1] + t[2].slice(0, -lt.length) + t[3]), (n = document.createTextNode(s));
                }
                i.insertBefore(n, t),
                  this.parts.push({
                    type: "node",
                    index: ++r,
                  });
              }
              "" === o[s] ? (i.insertBefore(ut(), t), n.push(t)) : (t.data = o[s]), (a += s);
            }
          } else if (8 === t.nodeType)
            if (t.data === st) {
              const e = t.parentNode;
              (null !== t.previousSibling && r !== s) || (r++, e.insertBefore(ut(), t)),
                (s = r),
                this.parts.push({
                  type: "node",
                  index: r,
                }),
                null === t.nextSibling ? (t.data = "") : (n.push(t), r--),
                a++;
            } else {
              let e = -1;
              for (; -1 !== (e = t.data.indexOf(st, e + 1)); )
                this.parts.push({
                  type: "node",
                  index: -1,
                }),
                  a++;
            }
        } else o.currentNode = i.pop();
      }
      for (const t of n) t.parentNode.removeChild(t);
    }
  }
  const dt = (t, e) => {
      const n = t.length - e.length;
      return n >= 0 && t.slice(n) === e;
    },
    ht = (t) => -1 !== t.index,
    ut = () => document.createComment(""),
    pt = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
  class ft {
    constructor(t, e, n) {
      (this.__parts = []), (this.template = t), (this.processor = e), (this.options = n);
    }
    update(t) {
      let e = 0;
      for (const n of this.__parts) void 0 !== n && n.setValue(t[e]), e++;
      for (const t of this.__parts) void 0 !== t && t.commit();
    }
    _clone() {
      const t = et ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0),
        e = [],
        n = this.template.parts,
        i = document.createTreeWalker(t, 133, null, !1);
      let o,
        s = 0,
        r = 0,
        a = i.nextNode();
      for (; s < n.length; )
        if (((o = n[s]), ht(o))) {
          for (; r < o.index; ) r++, "TEMPLATE" === a.nodeName && (e.push(a), (i.currentNode = a.content)), null === (a = i.nextNode()) && ((i.currentNode = e.pop()), (a = i.nextNode()));
          if ("node" === o.type) {
            const t = this.processor.handleTextExpression(this.options);
            t.insertAfterNode(a.previousSibling), this.__parts.push(t);
          } else this.__parts.push(...this.processor.handleAttributeExpressions(a, o.name, o.strings, this.options));
          s++;
        } else this.__parts.push(void 0), s++;
      return et && (document.adoptNode(t), customElements.upgrade(t)), t;
    }
  }
  const mt =
      window.trustedTypes &&
      trustedTypes.createPolicy("lit-html", {
        createHTML: (t) => t,
      }),
    gt = ` ${st} `;
  class vt {
    constructor(t, e, n, i) {
      (this.strings = t), (this.values = e), (this.type = n), (this.processor = i);
    }
    getHTML() {
      const t = this.strings.length - 1;
      let e = "",
        n = !1;
      for (let i = 0; i < t; i++) {
        const t = this.strings[i],
          o = t.lastIndexOf("\x3c!--");
        n = (o > -1 || n) && -1 === t.indexOf("--\x3e", o + 1);
        const s = pt.exec(t);
        e += null === s ? t + (n ? gt : rt) : t.substr(0, s.index) + s[1] + s[2] + lt + s[3] + st;
      }
      return (e += this.strings[t]), e;
    }
    getTemplateElement() {
      const t = document.createElement("template");
      let e = this.getHTML();
      return void 0 !== mt && (e = mt.createHTML(e)), (t.innerHTML = e), t;
    }
  }
  const yt = (t) => null === t || !("object" == typeof t || "function" == typeof t),
    bt = (t) => Array.isArray(t) || !(!t || !t[Symbol.iterator]);
  class wt {
    constructor(t, e, n) {
      (this.dirty = !0), (this.element = t), (this.name = e), (this.strings = n), (this.parts = []);
      for (let t = 0; t < n.length - 1; t++) this.parts[t] = this._createPart();
    }
    _createPart() {
      return new xt(this);
    }
    _getValue() {
      const t = this.strings,
        e = t.length - 1,
        n = this.parts;
      if (1 === e && "" === t[0] && "" === t[1]) {
        const t = n[0].value;
        if ("symbol" == typeof t) return String(t);
        if ("string" == typeof t || !bt(t)) return t;
      }
      let i = "";
      for (let o = 0; o < e; o++) {
        i += t[o];
        const e = n[o];
        if (void 0 !== e) {
          const t = e.value;
          if (yt(t) || !bt(t)) i += "string" == typeof t ? t : String(t);
          else for (const e of t) i += "string" == typeof e ? e : String(e);
        }
      }
      return (i += t[e]), i;
    }
    commit() {
      this.dirty && ((this.dirty = !1), this.element.setAttribute(this.name, this._getValue()));
    }
  }
  class xt {
    constructor(t) {
      (this.value = void 0), (this.committer = t);
    }
    setValue(t) {
      t === it || (yt(t) && t === this.value) || ((this.value = t), tt(t) || (this.committer.dirty = !0));
    }
    commit() {
      for (; tt(this.value); ) {
        const t = this.value;
        (this.value = it), t(this);
      }
      this.value !== it && this.committer.commit();
    }
  }
  class Ct {
    constructor(t) {
      (this.value = void 0), (this.__pendingValue = void 0), (this.options = t);
    }
    appendInto(t) {
      (this.startNode = t.appendChild(ut())), (this.endNode = t.appendChild(ut()));
    }
    insertAfterNode(t) {
      (this.startNode = t), (this.endNode = t.nextSibling);
    }
    appendIntoPart(t) {
      t.__insert((this.startNode = ut())), t.__insert((this.endNode = ut()));
    }
    insertAfterPart(t) {
      t.__insert((this.startNode = ut())), (this.endNode = t.endNode), (t.endNode = this.startNode);
    }
    setValue(t) {
      this.__pendingValue = t;
    }
    commit() {
      if (null === this.startNode.parentNode) return;
      for (; tt(this.__pendingValue); ) {
        const t = this.__pendingValue;
        (this.__pendingValue = it), t(this);
      }
      const t = this.__pendingValue;
      t !== it &&
        (yt(t)
          ? t !== this.value && this.__commitText(t)
          : t instanceof vt
          ? this.__commitTemplateResult(t)
          : t instanceof Node
          ? this.__commitNode(t)
          : bt(t)
          ? this.__commitIterable(t)
          : t === ot
          ? ((this.value = ot), this.clear())
          : this.__commitText(t));
    }
    __insert(t) {
      this.endNode.parentNode.insertBefore(t, this.endNode);
    }
    __commitNode(t) {
      this.value !== t && (this.clear(), this.__insert(t), (this.value = t));
    }
    __commitText(t) {
      const e = this.startNode.nextSibling,
        n = "string" == typeof (t = null == t ? "" : t) ? t : String(t);
      e === this.endNode.previousSibling && 3 === e.nodeType ? (e.data = n) : this.__commitNode(document.createTextNode(n)), (this.value = t);
    }
    __commitTemplateResult(t) {
      const e = this.options.templateFactory(t);
      if (this.value instanceof ft && this.value.template === e) this.value.update(t.values);
      else {
        const n = new ft(e, t.processor, this.options),
          i = n._clone();
        n.update(t.values), this.__commitNode(i), (this.value = n);
      }
    }
    __commitIterable(t) {
      Array.isArray(this.value) || ((this.value = []), this.clear());
      const e = this.value;
      let n,
        i = 0;
      for (const o of t) (n = e[i]), void 0 === n && ((n = new Ct(this.options)), e.push(n), 0 === i ? n.appendIntoPart(this) : n.insertAfterPart(e[i - 1])), n.setValue(o), n.commit(), i++;
      i < e.length && ((e.length = i), this.clear(n && n.endNode));
    }
    clear(t = this.startNode) {
      nt(this.startNode.parentNode, t.nextSibling, this.endNode);
    }
  }
  class Nt {
    constructor(t, e, n) {
      if (((this.value = void 0), (this.__pendingValue = void 0), 2 !== n.length || "" !== n[0] || "" !== n[1])) throw new Error("Boolean attributes can only contain a single expression");
      (this.element = t), (this.name = e), (this.strings = n);
    }
    setValue(t) {
      this.__pendingValue = t;
    }
    commit() {
      for (; tt(this.__pendingValue); ) {
        const t = this.__pendingValue;
        (this.__pendingValue = it), t(this);
      }
      if (this.__pendingValue === it) return;
      const t = !!this.__pendingValue;
      this.value !== t && (t ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), (this.value = t)), (this.__pendingValue = it);
    }
  }
  class kt extends wt {
    constructor(t, e, n) {
      super(t, e, n), (this.single = 2 === n.length && "" === n[0] && "" === n[1]);
    }
    _createPart() {
      return new Mt(this);
    }
    _getValue() {
      return this.single ? this.parts[0].value : super._getValue();
    }
    commit() {
      this.dirty && ((this.dirty = !1), (this.element[this.name] = this._getValue()));
    }
  }
  class Mt extends xt {}
  let _t = !1;
  (() => {
    try {
      const t = {
        get capture() {
          return (_t = !0), !1;
        },
      };
      window.addEventListener("test", t, t), window.removeEventListener("test", t, t);
    } catch (t) {}
  })();
  class St {
    constructor(t, e, n) {
      (this.value = void 0), (this.__pendingValue = void 0), (this.element = t), (this.eventName = e), (this.eventContext = n), (this.__boundHandleEvent = (t) => this.handleEvent(t));
    }
    setValue(t) {
      this.__pendingValue = t;
    }
    commit() {
      for (; tt(this.__pendingValue); ) {
        const t = this.__pendingValue;
        (this.__pendingValue = it), t(this);
      }
      if (this.__pendingValue === it) return;
      const t = this.__pendingValue,
        e = this.value,
        n = null == t || (null != e && (t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive)),
        i = null != t && (null == e || n);
      n && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options),
        i && ((this.__options = Et(t)), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)),
        (this.value = t),
        (this.__pendingValue = it);
    }
    handleEvent(t) {
      "function" == typeof this.value ? this.value.call(this.eventContext || this.element, t) : this.value.handleEvent(t);
    }
  }
  const Et = (t) =>
    t &&
    (_t
      ? {
          capture: t.capture,
          passive: t.passive,
          once: t.once,
        }
      : t.capture);
  const At = new (class {
    handleAttributeExpressions(t, e, n, i) {
      const o = e[0];
      if ("." === o) {
        return new kt(t, e.slice(1), n).parts;
      }
      if ("@" === o) return [new St(t, e.slice(1), i.eventContext)];
      if ("?" === o) return [new Nt(t, e.slice(1), n)];
      return new wt(t, e, n).parts;
    }
    handleTextExpression(t) {
      return new Ct(t);
    }
  })();
  function Ot(t) {
    let e = Lt.get(t.type);
    void 0 === e &&
      ((e = {
        stringsArray: new WeakMap(),
        keyString: new Map(),
      }),
      Lt.set(t.type, e));
    let n = e.stringsArray.get(t.strings);
    if (void 0 !== n) return n;
    const i = t.strings.join(st);
    return (n = e.keyString.get(i)), void 0 === n && ((n = new ct(t, t.getTemplateElement())), e.keyString.set(i, n)), e.stringsArray.set(t.strings, n), n;
  }
  const Lt = new Map(),
    It = new WeakMap(),
    Tt = (t, e, n) => {
      let i = It.get(e);
      void 0 === i &&
        (nt(e, e.firstChild),
        It.set(
          e,
          (i = new Ct(
            Object.assign(
              {
                templateFactory: Ot,
              },
              n
            )
          ))
        ),
        i.appendInto(e)),
        i.setValue(t),
        i.commit();
    };
  "undefined" != typeof window && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.4.1");
  const Bt = (t, ...e) => new vt(t, e, "html", At),
    Pt = new WeakMap(),
    jt = J((t) => (e) => {
      if (!(e instanceof xt) || e instanceof Mt || "style" !== e.committer.name || e.committer.parts.length > 1) throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
      const { committer: n } = e,
        { style: i } = n.element;
      let o = Pt.get(e);
      void 0 === o && ((i.cssText = n.strings.join(" ")), Pt.set(e, (o = new Set()))),
        o.forEach((e) => {
          e in t || (o.delete(e), -1 === e.indexOf("-") ? (i[e] = null) : i.removeProperty(e));
        });
      for (const e in t) o.add(e), -1 === e.indexOf("-") ? (i[e] = t[e]) : i.setProperty(e, t[e]);
    });
  class Ht {
    constructor(t) {
      (this.classes = new Set()), (this.changed = !1), (this.element = t);
      const e = (t.getAttribute("class") || "").split(/\s+/);
      for (const t of e) this.classes.add(t);
    }
    add(t) {
      this.classes.add(t), (this.changed = !0);
    }
    remove(t) {
      this.classes.delete(t), (this.changed = !0);
    }
    commit() {
      if (this.changed) {
        let t = "";
        this.classes.forEach((e) => (t += e + " ")), this.element.setAttribute("class", t);
      }
    }
  }
  const Vt = new WeakMap(),
    Dt = J((t) => (e) => {
      if (!(e instanceof xt) || e instanceof Mt || "class" !== e.committer.name || e.committer.parts.length > 1) throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
      const { committer: n } = e,
        { element: i } = n;
      let o = Vt.get(e);
      void 0 === o && (i.setAttribute("class", n.strings.join(" ")), Vt.set(e, (o = new Set())));
      const s = i.classList || new Ht(i);
      o.forEach((e) => {
        e in t || (s.remove(e), o.delete(e));
      });
      for (const e in t) {
        const n = t[e];
        n != o.has(e) && (n ? (s.add(e), o.add(e)) : (s.remove(e), o.delete(e)));
      }
      "function" == typeof s.commit && s.commit();
    });
  var Rt = (function () {
    function t(e, n, i) {
      var o = this;
      (this.options = {
        position: t.BOTTOM,
      }),
        (this.element = e),
        (this.trigger = n),
        (this._isOpen = !1),
        Object.assign(this.options, i),
        this.events(),
        requestAnimationFrame(function () {
          o.position();
        });
    }
    return (
      (t.prototype.events = function () {
        this.trigger.addEventListener("click", this.toggle.bind(this));
      }),
      (t.prototype.initialPosition = function () {
        var t = this.trigger.getBoundingClientRect(),
          e = window.pageXOffset || window.document.documentElement.scrollLeft,
          n = window.pageYOffset || window.document.documentElement.scrollTop;
        (this.element.style.top = (t.top + n).toFixed(2) + "px"), (this.element.style.left = (t.left + e).toFixed(2) + "px");
      }),
      (t.prototype.toggle = function (t) {
        var e = this;
        t.stopPropagation(),
          this._isOpen
            ? this.close(t)
            : ((this.element.style.display = "block"),
              this.options.height && (this.element.style.height = this.options.height + "px"),
              this.options.width && (this.element.style.width = this.options.width + "px"),
              this.trigger.classList.add("pop-active"),
              (this._isOpen = !0),
              this.options.callback &&
                this.options.callback({
                  closed: !1,
                }),
              requestAnimationFrame(function () {
                e.position(), e.outsideClick();
              }));
      }),
      (t.prototype.targetIsInsideElement = function (t) {
        if (!t) return !1;
        var e = t.target;
        if (e)
          do {
            if (e === this.element) return !0;
          } while ((e = e.parentNode));
        return !1;
      }),
      (t.prototype.close = function (t, e) {
        var n = (void 0 === e ? {} : e).force,
          i = void 0 !== n && n;
        (this.targetIsInsideElement(t) && !i) ||
          !this._isOpen ||
          ((this.element.style.display = "none"),
          this.options.width && (this.element.style.width = "0"),
          this.options.height && (this.element.style.height = "0"),
          (this._isOpen = !1),
          this.trigger.classList.remove("pop-active"),
          this.killOutSideClick(),
          this.options.callback &&
            this.options.callback({
              closed: !0,
            }));
      }),
      (t.prototype.position = function (e) {
        void 0 === e && (e = "");
        var n = window.pageXOffset || window.document.documentElement.scrollLeft,
          i = window.pageYOffset || window.document.documentElement.scrollTop,
          o = this.trigger.getBoundingClientRect(),
          s = this.element.getBoundingClientRect(),
          r = e || this.options.position;
        if ((this.element.classList.remove(t.TOP, t.BOTTOM, t.LEFT, t.RIGHT), this.element.classList.add(r), -1 !== r.indexOf(t.BOTTOM)))
          (this.element.style.left = (o.left + (o.width / 2 - s.width / 2)).toFixed(2) + "px"), (this.element.style.top = o.bottom + "px");
        else if (-1 !== r.indexOf(t.TOP)) {
          var a = this.options.width ? this.options.width : s.width,
            l = this.options.height ? this.options.height : s.height,
            c = window.innerWidth - a - 20 - 15,
            d = o.left + n + (o.width / 2 - a / 2),
            h = o.top - l + i;
          d > c && (d = c), (this.element.style.left = d + "px"), (this.element.style.top = h + "px");
        } else
          -1 !== r.indexOf(t.LEFT)
            ? ((this.element.style.top = (o.top + o.height / 2 - s.height / 2).toFixed(2) + "px"), (this.element.style.left = (o.left - s.width).toFixed(2) + "px"))
            : ((this.element.style.top = (o.top + o.height / 2 - s.height / 2).toFixed(2) + "px"), (this.element.style.left = o.right + "px"));
      }),
      (t.prototype.handleScroll = function () {
        this.position();
      }),
      (t.prototype.outsideClick = function () {
        document.addEventListener("click", this.close.bind(this)), window.addEventListener("scroll", this.handleScroll.bind(this)), window.addEventListener("resize", this.handleScroll.bind(this));
      }),
      (t.prototype.killOutSideClick = function () {
        document.removeEventListener("click", this.close.bind(this));
      }),
      (t.prototype.isOpen = function () {
        return this._isOpen;
      }),
      (t.TOP = "top"),
      (t.BOTTOM = "bottom"),
      (t.LEFT = "left"),
      (t.RIGHT = "right"),
      t
    );
  })();
  function zt(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  function Ft(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      e &&
        (i = i.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        n.push.apply(n, i);
    }
    return n;
  }
  function Wt(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? Ft(Object(n), !0).forEach(function (e) {
            zt(t, e, n[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : Ft(Object(n)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
          });
    }
    return t;
  }
  var qt,
    Zt,
    Yt,
    Ut,
    Gt = (function () {
      function t() {
        if (
          ((this.showRestartButton = !1),
          (this.pageSlugs = []),
          (this.pages = []),
          (this.queryMap = {}),
          window.__ANIMA_PROJECT_DATA__ && ((this.projectData = window.__ANIMA_PROJECT_DATA__), (window.__ANIMA_PROJECT_DATA__ = void 0)),
          !this.isInOmniview())
        ) {
          var t = new Date();
          document.cookie = "ana_visitorId=" + Math.random().toString(36).substr(2, 9) + ";expires=" + t.toUTCString() + ";path=/;domain=animaapp.io";
        }
      }
      return (
        (t.prototype.getWindowUrl = function () {
          return window.location != window.parent.location ? document.referrer : document.location.href;
        }),
        (t.prototype.isInOmniview = function () {
          return this.getWindowUrl().includes("projects.animaapp") || ((document.location.ancestorOrigins || [])[0] || "").includes("projects.animaapp");
        }),
        (t.prototype.styleScrollbar = function (t) {
          void 0 === t &&
            (t = {
              force: !1,
            }),
            (t.force || this.isInOmniview()) && ((document.body.style.overflowX = "hidden"), document.body.setAttribute("dark-scroll", ""));
        }),
        (t.prototype.patchAsyncSrc = function (t) {
          (t || document).querySelectorAll("[anima-src]").forEach(function (t) {
            var e = t.getAttribute("anima-src");
            e && (t.setAttribute("src", e), t.removeAttribute("anima-src"));
          });
        }),
        (t.prototype.appendQuery = function (t) {
          (t || document).querySelectorAll("[anima-src]").forEach(function (t) {
            var e = t.getAttribute("anima-src");
            e && (t.setAttribute("src", e), t.removeAttribute("anima-src"));
          });
        }),
        (t.prototype.setPageSlugs = function (t) {
          this.pageSlugs = t;
        }),
        (t.prototype.injectPreloadLinks = function (t) {
          var e = "t_preload_links",
            n = document.querySelector("#" + e);
          n && n.remove();
          var i = document.createElement("div");
          i.setAttribute("id", e);
          for (var o = t || this.pageSlugs, s = 0; s < o.length; s++) {
            var r = o[s],
              a = document.createElement("link");
            a.setAttribute("href", "/" + r), a.setAttribute("rel", "prefetch"), i.appendChild(a);
          }
          document.body.appendChild(i);
        }),
        (t.prototype.sendBackgroundInfo = function () {
          var t = {},
            e = document.querySelector(".screen"),
            n = document.body.style.backgroundColor;
          if (((t.body = n || ""), e)) {
            var i = getComputedStyle(e).backgroundColor;
            t.screen = i || "";
          }
          parent.postMessage(
            {
              action: "background-info",
              backgrounds: t,
            },
            "*"
          );
        }),
        (t.prototype.injectTurbo = function () {
          if ((console.warn("INJECT"), !document.querySelector("#s_turbo"))) {
            var t = document.createElement("script");
            (t.onload = function () {
              console.warn("READY"),
                window.Turbo.setProgressBarDelay(100),
                window.Turbo.clearCache(),
                parent.postMessage(
                  {
                    action: "turbo-ready",
                  },
                  "*"
                );
            }),
              t.setAttribute("id", "s_turbo"),
              t.setAttribute("src", "https://animaapp.s3.amazonaws.com/static/turbo.es2017-umd.js"),
              document.head.appendChild(t);
          }
        }),
        (t.prototype.injectGlobalStyles = function () {
          if (!document.querySelector("#st_globalStyles")) {
            var t = document.createElement("style");
            t.setAttribute("id", "st_globalStyles"),
              (t.innerHTML =
                "\n/* MEDIA QUERIES */\n.anima-desktop-only {\n  @media (max-width: 768px) {\n    display: none !important;\n  }\n}\n\n/* SCROLLBAR */\n\n[dark-scroll]::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n\n[dark-scroll]::-webkit-scrollbar-track-piece {\n  background-color: #2b2b2b;\n  border: 1px solid #1d1d1d;\n}\n\n[dark-scroll]::-webkit-scrollbar-thumb {\n  height: 10px;\n  background-color: #4d4d4d;\n}\n[dark-scroll]::-webkit-scrollbar-thumb:hover {\n  background-color: #5a5a5a;\n}\n\n/* LOAD PROGRESS */\n\n.turbolinks-progress-bar {\n  height: 3px;\n  background-color: #ff6250;\n}\n\n/* GROUPING */\n\n[data-id].ui-selecting {\n  box-shadow: inset 0 0 0 1px #4285f4 !important;\n}\n[data-id].ui-selected {\n  box-shadow: inset 0 0 0 1px #4285f4 !important;\n}\n\n/* CURSOR */\n\nbody[mode='comments'] * {\n  cursor: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00LjkxNjQ4IDIzLjQxMDlDNS40OTE1MyAyMi45ODg3IDUuOTMxNzkgMjIuMzkzNSA2LjIzMjggMjEuNjQwN0M0Ljc5MDY5IDE5LjczODMgNCAxNy4zOTMzIDQgMTQuOTk3NUM0IDguOTM0MSA4LjkzMjgyIDQgMTUuMDAyMiA0QzIxLjA3MTcgNCAyNiA4LjkzOTE5IDI2IDE1LjAwMjVDMjYgMjEuMDY1OSAyMS4wNjcyIDI2IDE0Ljk5NzggMjZDMTIuOTg5NiAyNiAxMS4wMzUzIDI1LjQ1NTcgOS4zMjM2NyAyNC40MjMxQzguNDI5NjUgMjQuOTU3MiA3LjQxNDM0IDI1LjIyNjggNi4zMDAxOCAyNS4yMjY4QzUuOTU0MjYgMjUuMjI2OCA1LjU5OTM1IDI1LjIwMTQgNS4yNTM0MiAyNS4xNDU0QzQuOTAzIDI1LjA4OTUgNC42Mjg5NiAyNC44MDQ2IDQuNTUyNTggMjQuNDE4QzQuNDc2MjEgMjQuMDI2NCA0LjYxOTk3IDIzLjYyOTYgNC45MTY0OCAyMy40MTA5WiIgZmlsbD0iI0ZGNjI1MCIvPgo8L3N2Zz4K')\n      0 24,\n    auto !important;\n}\n\nbody[mode='code'] [data-id]:not(.hidden) {\n  cursor: default;\n}\n\n/* default node state */\n\nbody[mode='code'] [data-id]:not(.hidden), body[mode='comments'] [data-id]:not(.hidden) {\n  pointer-events: all;\n}\n\n/* is_image */\n\nbody[mode='code'] [data-id].is_image [data-id], body[mode='comments'] [data-id].is_image [data-id] {\n  pointer-events: none !important;\n}\n\n/* without a data-id or ignored */\n\n[data-id].ignore,body[mode='code'] *:not([data-id]) {\n  pointer-events: none !important;\n}\n/* disable transforms for ignored elements */\n\n\nbody[mode='code'] [data-id]:hover{\n  transform: none !important;\n}\n\n/* ANIMA BUTTONS */\n.an-button {\n  position: relative;\n  height: 28px;\n  padding: 0 20px;\n  font-size: 14px;\n  border-radius: 4px;\n  font-weight: 500;\n  display: inline-flex;\n  align-items: center;\n  vertical-align: middle;\n  white-space: nowrap;\n  transition-property: all;\n  transition-duration: 100ms;\n  appearance: none;\n  cursor: pointer;\n  user-select: none;\n  transition: all 0.2s ease;\n  border-width: 0;\n}\n\n.an-button > div {\n  width: 100%;\n}\n\n.an-button.primary {\n  background: #ff6250;\n  color: #ffffff;\n}\n\n.an-button.primary:hover:not(:disabled) {\n  background: #e2412e;\n}\n\n.an-button.secondary {\n  background: transparent;\n  border: 1px solid #ff6250;\n  color: #ff6250;\n}\n\n.an-button.secondary:hover:not(:disabled) {\n  color: #ffffff;\n  background: #ff6250;\n}\n\n.an-button.rounded {\n  border-radius: 100px;\n}\n\n.an-button:disabled {\n  opacity: 0.5;\n}\n\n.an-button:disabled {\n  cursor: default;\n}\n\n.an-button:active,\n.an-button:focus {\n  outline: none;\n}\n\n"),
              document.head.insertBefore(t, document.head.firstChild);
          }
        }),
        (t.prototype.injectHtml2canvas = function () {
          if (!document.querySelector("#s_html2canvas")) {
            var t = document.createElement("script");
            t.setAttribute("id", "s_html2canvas"), t.setAttribute("src", "https://animaapp.s3.amazonaws.com/static/html2canvas.min.js"), document.head.appendChild(t);
          }
        }),
        (t.prototype.injectAnimaTracking = function () {
          if (!document.querySelector("#s_anima-tracking")) {
            var t = document.createElement("script");
            t.setAttribute("id", "s_anima-tracking"), t.setAttribute("src", "https://animaapp.s3.amazonaws.com/static/anima-tracking.js"), document.head.appendChild(t), (t.onload = function () {});
          }
        }),
        (t.prototype.trackEvent = function (t, e) {
          if ((void 0 === e && (e = {}), this.tracking))
            try {
              this.tracking.trackEvent(t, e);
            } catch (t) {
              console.error("failed tracking event", t);
            }
        }),
        (t.prototype.onModeChange = function (t) {
          var e = new URLSearchParams(window.location.search),
            n = document.querySelector("#restart-btn");
          "Play" == t ? ((this.showRestartButton = !!e.get("r")), this.showRestartButton && n && (n.style.display = "flex")) : ((this.showRestartButton = !1), n && (n.style.display = "none"));
        }),
        (t.prototype.showActionLinks = function () {
          console.log("showActionLinks"), this.addActionLinksStyles(), this.createActionLinks(), this.createPrivatePreviewBanner(), this.createFreeWebsiteBanner();
        }),
        (t.prototype.checkForTurboInQuery = function () {
          new URLSearchParams(window.location.search).get("turbo") && !this.isInOmniview() && this.injectTurbo();
        }),
        (t.prototype.updatePageNum = function (t, e, n) {
          var i = t || document.querySelector("#page-num"),
            o = e || document.querySelector("#arrow-right"),
            s = n || document.querySelector("#arrow-left");
          if (i && s && o) {
            var r = this.queryMap.slug,
              a = this.pages.indexOf(r) + 1;
            (i.innerHTML = a + " / " + this.pages.length), a == this.pages.length ? (o.classList.add("disabled"), s.classList.remove("disabled")) : 1 == a && (s.classList.add("disabled"), o.classList.remove("disabled"));
          }
        }),
        (t.prototype.createActionLinks = function () {
          var t = this,
            e = this.queryMap.p,
            n = this.queryMap.slug,
            i = this.queryMap.pages,
            o = this.queryMap.h;
          (this.showRestartButton = !!this.queryMap.r), i && (this.pages = JSON.parse(atob(i))), this.pages.length > 0 && this.injectPreloadLinks(this.pages);
          var s = function (t, i) {
              void 0 === t && (t = {}),
                void 0 === i && (i = {}),
                (t = E(
                  {
                    utm_source: "animaapp.io",
                  },
                  t
                ));
              var o = "https://" + (i.isWebapp ? "projects" : "www") + ".animaapp.com",
                s = Object.keys(t)
                  .sort()
                  .map(function (e) {
                    return e + "=" + t[e];
                  })
                  .join("&");
              return "" + o + (i.isOmniview ? "/p/" + e + "/s/" + n : "") + "?" + s;
            },
            r = document.createElement("div");
          r.setAttribute("id", "anima-interface"), document.body.appendChild(r);
          var a,
            l,
            c,
            d = document.createElement("div");
          d.setAttribute("id", "anima-watermark"), document.body.appendChild(d);
          var h = function (t) {
              (t && (r.contains(t.target) || d.contains(t.target))) ||
                (a && clearTimeout(a),
                r.classList.remove("idle"),
                d.classList.remove("idle"),
                (a = setTimeout(function () {
                  r.classList.add("idle"),
                    window._forceShowAnimaWatermark || d.classList.add("idle"),
                    l &&
                      l.close(null, {
                        force: !0,
                      }),
                    c &&
                      c.close(null, {
                        force: !0,
                      });
                }, 3e3)));
            },
            u = function () {
              a && clearTimeout(a), r.classList.remove("idle");
            },
            p = function () {
              var i = s({
                  utm_campaign: "public-link-banner",
                  utm_medium: "public-link-banner",
                }),
                o = t.showRestartButton || (e && n),
                r = !!window._forceShowAnimaWatermark,
                a = o || r ? "flex" : "none",
                l = {
                  right: o ? "auto" : "20px",
                  left: o ? "20px" : "auto",
                  padding: r ? "8px 16px 8px 11px" : "6px",
                };
              return (
                (d.style.display = a),
                Bt(
                  Yt ||
                    (Yt = H(
                      [
                        '<a\n        id="anima-watermark-link"\n        href="',
                        '"\n        target="_blank"\n        style="',
                        '"\n      >\n        <svg\n          width="20"\n          height="20"\n          viewBox="0 0 20 20"\n          id="anima-logo-icon"\n          fill="none"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M4.09293 3.00001H16.5327C16.5484 2.99976 16.5638 3.00351 16.5776 3.01092C16.5913 3.01832 16.603 3.02913 16.6114 3.04231C16.6198 3.0555 16.6247 3.07061 16.6256 3.08622C16.6265 3.10182 16.6233 3.1174 16.6165 3.13146C15.5441 5.29706 13.9276 7.14699 11.9253 8.50009C8.69117 10.6822 5.43436 10.9075 4.09389 10.9196C4.08165 10.9198 4.06949 10.9176 4.05811 10.9131C4.04672 10.9086 4.03636 10.9019 4.02761 10.8933C4.01887 10.8848 4.01192 10.8745 4.00718 10.8633C4.00244 10.852 4 10.8399 4 10.8276V3.09198C4 3.07982 4.00241 3.06778 4.00709 3.05656C4.01177 3.04534 4.01863 3.03516 4.02728 3.02661C4.03592 3.01805 4.04617 3.0113 4.05744 3.00673C4.06871 3.00217 4.08077 2.99988 4.09293 3.00001Z"\n            fill="#FF6250"\n          />\n          <path\n            d="M6.77772 17.4446C8.31182 17.4446 9.55545 16.201 9.55545 14.6669C9.55545 13.1328 8.31182 11.8892 6.77772 11.8892C5.24363 11.8892 4 13.1328 4 14.6669C4 16.201 5.24363 17.4446 6.77772 17.4446Z"\n            fill="#FFDF90"\n          />\n          <path\n            d="M12.4559 17.2799C11.6701 16.9799 11.2522 16.1151 11.5185 15.3496L13.6153 9.3656C13.884 8.60003 14.7387 8.22302 15.5245 8.52299C16.3103 8.82344 16.7282 9.68772 16.4619 10.4538L14.365 16.4377C14.0964 17.2033 13.2417 17.5808 12.4559 17.2799Z"\n            fill="#3366FF"\n          />\n        </svg>\n        <span\n          class="text"\n          style="',
                        '"\n          >Made with Anima</span\n        >\n      </a>',
                      ],
                      [
                        '<a\n        id="anima-watermark-link"\n        href="',
                        '"\n        target="_blank"\n        style="',
                        '"\n      >\n        <svg\n          width="20"\n          height="20"\n          viewBox="0 0 20 20"\n          id="anima-logo-icon"\n          fill="none"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M4.09293 3.00001H16.5327C16.5484 2.99976 16.5638 3.00351 16.5776 3.01092C16.5913 3.01832 16.603 3.02913 16.6114 3.04231C16.6198 3.0555 16.6247 3.07061 16.6256 3.08622C16.6265 3.10182 16.6233 3.1174 16.6165 3.13146C15.5441 5.29706 13.9276 7.14699 11.9253 8.50009C8.69117 10.6822 5.43436 10.9075 4.09389 10.9196C4.08165 10.9198 4.06949 10.9176 4.05811 10.9131C4.04672 10.9086 4.03636 10.9019 4.02761 10.8933C4.01887 10.8848 4.01192 10.8745 4.00718 10.8633C4.00244 10.852 4 10.8399 4 10.8276V3.09198C4 3.07982 4.00241 3.06778 4.00709 3.05656C4.01177 3.04534 4.01863 3.03516 4.02728 3.02661C4.03592 3.01805 4.04617 3.0113 4.05744 3.00673C4.06871 3.00217 4.08077 2.99988 4.09293 3.00001Z"\n            fill="#FF6250"\n          />\n          <path\n            d="M6.77772 17.4446C8.31182 17.4446 9.55545 16.201 9.55545 14.6669C9.55545 13.1328 8.31182 11.8892 6.77772 11.8892C5.24363 11.8892 4 13.1328 4 14.6669C4 16.201 5.24363 17.4446 6.77772 17.4446Z"\n            fill="#FFDF90"\n          />\n          <path\n            d="M12.4559 17.2799C11.6701 16.9799 11.2522 16.1151 11.5185 15.3496L13.6153 9.3656C13.884 8.60003 14.7387 8.22302 15.5245 8.52299C16.3103 8.82344 16.7282 9.68772 16.4619 10.4538L14.365 16.4377C14.0964 17.2033 13.2417 17.5808 12.4559 17.2799Z"\n            fill="#3366FF"\n          />\n        </svg>\n        <span\n          class="text"\n          style="',
                        '"\n          >Made with Anima</span\n        >\n      </a>',
                      ]
                    )),
                  i,
                  jt(l),
                  jt({
                    display: r ? "inline" : "none",
                  })
                )
              );
            };
          window.addEventListener("show-anima-watermark", function () {
            Tt(p(), d);
          }),
            Tt(
              Bt(
                Zt ||
                  (Zt = H(
                    [
                      '\n        <div id="anima-comment-popover" class="popover" role="tooltip">\n          <div\n            style=',
                      '\n            class="arrow"\n          ></div>\n          <div class="popover-content" style="align-items:center">\n            <div\n              style="display:flex;flex-direction:column;height: 100%;padding: 20px;"\n            >\n              <h3\n                style="font-size:18px;margin-bottom:10px;font-weight:500;line-height: 26px;font-family: Roslindale;"\n              >\n                Leave feedback and collaborate\n              </h3>\n              <p\n                style="font-size:12px;margin-bottom:20px;font-weight:400;line-height: 20px;"\n              >\n                Login to your account to leave comments. Don\'t have an account?\n                Sign up for free!\n              </p>\n              <a\n                target="_blank"\n                rel="noopener noreferrer"\n                href="',
                      '"\n                class="btn"\n                >Add comment</a\n              >\n            </div>\n\n            <div\n              style="display:flex;align-items:center;justify-content:center;padding-right:20px"\n            >\n              <img\n                src="https://animaapp.s3.amazonaws.com/static/comment-illustration.svg"\n              />\n            </div>\n          </div>\n        </div>\n        <div id="anima-code-popover" class="popover" role="tooltip">\n          <div\n            style=',
                      '\n            class="arrow"\n          ></div>\n          <div class="popover-content" style="align-items:center">\n            <div\n              style="display:flex;flex-direction:column;height: 100%;padding: 20px;"\n            >\n              <h3\n                style="font-size:18px;margin-bottom:10px;font-weight:500;line-height: 26px;font-family: Roslindale;"\n              >\n                Get clean code you’ll love with Anima\n              </h3>\n              <p\n                style="font-size:12px;margin-bottom:20px;font-weight:400;line-height: 20px;"\n              >\n                Login and easily export HTML, React or Vue of this prototype.\n                Don’t have an account? Sign up for free!\n              </p>\n              <a\n                target="_blank"\n                rel="noopener noreferrer"\n                href="',
                      '"\n                class="btn"\n              >\n                Get code\n              </a>\n            </div>\n\n            <img\n              src="https://animaapp.s3.amazonaws.com/static/code-illustration.svg"\n            />\n          </div>\n        </div>\n        <div class="omniview-anima-action-links" id="actions-wrap">\n          <div class="omniview-anima-action-links">\n            <div id="page-nav" class="link navigation">\n              <svg\n                id="homepage-icon"\n                class="home-icon"\n                width="24"\n                height="24"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M8.151 11a.25.25 0 01-.167-.436l4.349-3.913a.25.25 0 01.334 0l4.349 3.913a.25.25 0 01-.167.436H8.15zM16 12H9v4a1 1 0 001 1h5a1 1 0 001-1v-4z"\n                  fill="#fff"\n                />\n              </svg>\n\n              <svg\n                class="icon"\n                id="arrow-left"\n                width="24"\n                height="24"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M15 18l-6-6 6-6"\n                  stroke="#fff"\n                  stroke-linecap="round"\n                  stroke-linejoin="round"\n                />\n              </svg>\n\n              <span id="page-num"></span>\n\n              <svg\n                class="icon"\n                id="arrow-right"\n                width="24"\n                height="24"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M9 6l6 6-6 6"\n                  stroke-linecap="round"\n                  stroke-linejoin="round"\n                />\n              </svg>\n            </div>\n\n            <a\n              @click=',
                      "\n              style=",
                      "\n              class=",
                      '\n              class="link"\n              id="comment-link"\n              target="_blank"\n            >\n              <span class="text">Comment</span>\n              <svg\n                width="20"\n                height="20"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  fill-rule="evenodd"\n                  clip-rule="evenodd"\n                  d="M4.301 15.137a.551.551 0 01.199-.55c.314-.23.554-.554.718-.965A6.015 6.015 0 014 10 6.006 6.006 0   0110.001 4 6.006 6.006 0 0116 10.001 6.006 6.006 0 019.999 16a5.98 5.98 0 01-3.095-.86 3.165 3.165 0 01-1.65.438 3.6  3.6 0 01-.57-.044c-.191-.03-.34-.186-.383-.397z"\n                  fill="#fff"\n                />\n              </svg>\n            </a>\n\n            <a\n              @click=',
                      "\n              style=",
                      '\n              class="link"\n              id="code-link"\n              target="_blank"\n            >\n              <span class="text">Get Code</span>\n              <svg\n                width="20"\n                height="20"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M12 15.667a1 1 0 01-.707-1.708l3.626-3.625-3.626-3.626a1 1 0 111.415-1.415l4.333 4.333a1 1 0 010 1.414l-4.333 4.333a.993.993 0 01-.707.294zM7.333 5a1 1 0 01.707 1.708l-3.626 3.625 3.627 3.626a1 1 0 11-1.415 1.415L2.293 11.04a1 1 0 010-1.415l4.333-4.333A.992.992 0 017.333 5z"\n                  fill="#fff"\n                />\n              </svg>\n            </a>\n\n            <div\n              @click=',
                      "\n              style=",
                      '\n              class="restart"\n              id="restart-btn"\n            >\n              <svg\n                style="margin-right: 6px"\n                width="12"\n                height="12"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M6 11.817A5.017 5.017 0 01.994 6.811c0-.207.169-.375.375-.375s.375.168.375.375A4.265 4.265 0 006 11.067a4.265 4.265 0 004.256-4.256A4.265 4.265 0 006 2.555a.376.376 0 01-.375-.376c0-.206.169-.374.375-.374a5.017 5.017 0 015.006 5.006A5.017 5.017 0 016 11.817z"\n                  fill="#fff"\n                />\n                <path\n                  d="M6.75 4.237a.37.37 0 01-.263-.112l-1.65-1.65a.363.363 0 010-.525L6.487.3c.15-.15.375-.15.525 0 .15.15.15.375 0 .525L5.625 2.212 7.012 3.6c.15.15.15.375 0 .525-.056.075-.15.112-.262.112z"\n                  fill="#fff"\n                />\n              </svg>\n              Restart\n            </div>\n          </div>\n        </div>\n      ',
                    ],
                    [
                      '\n        <div id="anima-comment-popover" class="popover" role="tooltip">\n          <div\n            style=',
                      '\n            class="arrow"\n          ></div>\n          <div class="popover-content" style="align-items:center">\n            <div\n              style="display:flex;flex-direction:column;height: 100%;padding: 20px;"\n            >\n              <h3\n                style="font-size:18px;margin-bottom:10px;font-weight:500;line-height: 26px;font-family: Roslindale;"\n              >\n                Leave feedback and collaborate\n              </h3>\n              <p\n                style="font-size:12px;margin-bottom:20px;font-weight:400;line-height: 20px;"\n              >\n                Login to your account to leave comments. Don\'t have an account?\n                Sign up for free!\n              </p>\n              <a\n                target="_blank"\n                rel="noopener noreferrer"\n                href="',
                      '"\n                class="btn"\n                >Add comment</a\n              >\n            </div>\n\n            <div\n              style="display:flex;align-items:center;justify-content:center;padding-right:20px"\n            >\n              <img\n                src="https://animaapp.s3.amazonaws.com/static/comment-illustration.svg"\n              />\n            </div>\n          </div>\n        </div>\n        <div id="anima-code-popover" class="popover" role="tooltip">\n          <div\n            style=',
                      '\n            class="arrow"\n          ></div>\n          <div class="popover-content" style="align-items:center">\n            <div\n              style="display:flex;flex-direction:column;height: 100%;padding: 20px;"\n            >\n              <h3\n                style="font-size:18px;margin-bottom:10px;font-weight:500;line-height: 26px;font-family: Roslindale;"\n              >\n                Get clean code you’ll love with Anima\n              </h3>\n              <p\n                style="font-size:12px;margin-bottom:20px;font-weight:400;line-height: 20px;"\n              >\n                Login and easily export HTML, React or Vue of this prototype.\n                Don’t have an account? Sign up for free!\n              </p>\n              <a\n                target="_blank"\n                rel="noopener noreferrer"\n                href="',
                      '"\n                class="btn"\n              >\n                Get code\n              </a>\n            </div>\n\n            <img\n              src="https://animaapp.s3.amazonaws.com/static/code-illustration.svg"\n            />\n          </div>\n        </div>\n        <div class="omniview-anima-action-links" id="actions-wrap">\n          <div class="omniview-anima-action-links">\n            <div id="page-nav" class="link navigation">\n              <svg\n                id="homepage-icon"\n                class="home-icon"\n                width="24"\n                height="24"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M8.151 11a.25.25 0 01-.167-.436l4.349-3.913a.25.25 0 01.334 0l4.349 3.913a.25.25 0 01-.167.436H8.15zM16 12H9v4a1 1 0 001 1h5a1 1 0 001-1v-4z"\n                  fill="#fff"\n                />\n              </svg>\n\n              <svg\n                class="icon"\n                id="arrow-left"\n                width="24"\n                height="24"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M15 18l-6-6 6-6"\n                  stroke="#fff"\n                  stroke-linecap="round"\n                  stroke-linejoin="round"\n                />\n              </svg>\n\n              <span id="page-num"></span>\n\n              <svg\n                class="icon"\n                id="arrow-right"\n                width="24"\n                height="24"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M9 6l6 6-6 6"\n                  stroke-linecap="round"\n                  stroke-linejoin="round"\n                />\n              </svg>\n            </div>\n\n            <a\n              @click=',
                      "\n              style=",
                      "\n              class=",
                      '\n              class="link"\n              id="comment-link"\n              target="_blank"\n            >\n              <span class="text">Comment</span>\n              <svg\n                width="20"\n                height="20"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  fill-rule="evenodd"\n                  clip-rule="evenodd"\n                  d="M4.301 15.137a.551.551 0 01.199-.55c.314-.23.554-.554.718-.965A6.015 6.015 0 014 10 6.006 6.006 0   0110.001 4 6.006 6.006 0 0116 10.001 6.006 6.006 0 019.999 16a5.98 5.98 0 01-3.095-.86 3.165 3.165 0 01-1.65.438 3.6  3.6 0 01-.57-.044c-.191-.03-.34-.186-.383-.397z"\n                  fill="#fff"\n                />\n              </svg>\n            </a>\n\n            <a\n              @click=',
                      "\n              style=",
                      '\n              class="link"\n              id="code-link"\n              target="_blank"\n            >\n              <span class="text">Get Code</span>\n              <svg\n                width="20"\n                height="20"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M12 15.667a1 1 0 01-.707-1.708l3.626-3.625-3.626-3.626a1 1 0 111.415-1.415l4.333 4.333a1 1 0 010 1.414l-4.333 4.333a.993.993 0 01-.707.294zM7.333 5a1 1 0 01.707 1.708l-3.626 3.625 3.627 3.626a1 1 0 11-1.415 1.415L2.293 11.04a1 1 0 010-1.415l4.333-4.333A.992.992 0 017.333 5z"\n                  fill="#fff"\n                />\n              </svg>\n            </a>\n\n            <div\n              @click=',
                      "\n              style=",
                      '\n              class="restart"\n              id="restart-btn"\n            >\n              <svg\n                style="margin-right: 6px"\n                width="12"\n                height="12"\n                fill="none"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <path\n                  d="M6 11.817A5.017 5.017 0 01.994 6.811c0-.207.169-.375.375-.375s.375.168.375.375A4.265 4.265 0 006 11.067a4.265 4.265 0 004.256-4.256A4.265 4.265 0 006 2.555a.376.376 0 01-.375-.376c0-.206.169-.374.375-.374a5.017 5.017 0 015.006 5.006A5.017 5.017 0 016 11.817z"\n                  fill="#fff"\n                />\n                <path\n                  d="M6.75 4.237a.37.37 0 01-.263-.112l-1.65-1.65a.363.363 0 010-.525L6.487.3c.15-.15.375-.15.525 0 .15.15.15.375 0 .525L5.625 2.212 7.012 3.6c.15.15.15.375 0 .525-.056.075-.15.112-.262.112z"\n                  fill="#fff"\n                />\n              </svg>\n              Restart\n            </div>\n          </div>\n        </div>\n      ',
                    ]
                  )),
                jt({
                  marginLeft: t.showRestartButton ? "38px" : "128px",
                }),
                s(
                  {
                    mode: "comments",
                    utm_campaign: "add-comment",
                    utm_medium: "add-comment",
                  },
                  {
                    isOmniview: !0,
                    isWebapp: !0,
                  }
                ),
                jt({
                  marginLeft: t.showRestartButton ? "78px" : "168px",
                }),
                s(
                  {
                    mode: "code",
                    utm_campaign: "get-code",
                    utm_medium: "get-code",
                  },
                  {
                    isOmniview: !0,
                    isWebapp: !0,
                  }
                ),
                function () {
                  l.close(null, {
                    force: !0,
                  });
                },
                jt({
                  display: e && n ? "flex" : "none",
                }),
                Dt({
                  link: !0,
                }),
                function () {
                  c.close(null, {
                    force: !0,
                  });
                },
                jt({
                  display: e && n ? "flex" : "none",
                }),
                function () {
                  return location.reload(), document.removeEventListener("mousedown", h), document.removeEventListener("keydown", h), document.removeEventListener("touchstart", h), !1;
                },
                jt({
                  display: t.showRestartButton ? "flex" : "none",
                })
              ),
              r
            ),
            Tt(p(), d),
            requestAnimationFrame(function () {
              var e = document.querySelector("#code-link"),
                n = document.querySelector("#anima-code-popover"),
                i = document.querySelector("#comment-link"),
                s = document.querySelector("#anima-comment-popover");
              e &&
                n &&
                (l = new Rt(n, e, {
                  position: Rt.TOP,
                  width: 410,
                  height: 220,
                  callback: function (t) {
                    t.closed ? h(null) : u();
                  },
                })),
                i &&
                  s &&
                  (c = new Rt(s, i, {
                    position: Rt.TOP,
                    width: 410,
                    height: 220,
                    callback: function (t) {
                      t.closed ? h(null) : u();
                    },
                  }));
              var a = r.querySelector("#page-nav"),
                d = r.querySelector("#arrow-right"),
                p = r.querySelector("#arrow-left"),
                f = r.querySelector("#page-num"),
                m = r.querySelector("#homepage-icon");
              t.pages && 0 != t.pages.length ? t.updatePageNum(f, d, p) : a && (a.style.display = "none"),
                r.setAttribute("data-turbo-permanent", "true"),
                d &&
                  d.addEventListener("click", function (e) {
                    e.stopPropagation();
                    var n = t.getWindowPageSlug(),
                      i = t.pages.indexOf(n);
                    -1 != i && i + 1 <= t.pages.length - 1 && window.Turbo.visit(t.pages[i + 1]);
                  }),
                p &&
                  p.addEventListener("click", function (e) {
                    e.stopPropagation();
                    var n = t.getWindowPageSlug(),
                      i = t.pages.indexOf(n);
                    -1 != i && i - 1 >= 0 && window.Turbo.visit(t.pages[i - 1]);
                  }),
                m &&
                  m.addEventListener("click", function (t) {
                    t.stopPropagation(), o && window.Turbo.visit(o);
                  }),
                h(null),
                r.addEventListener("mouseenter", function () {
                  return u();
                }),
                r.addEventListener("mouseleave", function () {
                  return h(null);
                }),
                document.addEventListener("mousedown", h),
                document.addEventListener("keydown", h),
                document.addEventListener("touchstart", h);
            });
        }),
        (t.prototype.addActionLinksStyles = function () {
          if (!document.querySelector("#action-links-styles")) {
            var t = document.createElement("style");
            t.setAttribute("id", "action-links-styles"),
              (t.innerHTML =
                '\n@import url(\'https://fonts.googleapis.com/css2?family=Mulish&display=swap\');\n\n#anima-interface{\n  transition: all 0.5s ease-in-out;\n}\n\n#anima-watermark {\n  transition: all 0.5s ease-in-out;\n  display: none;\n}\n#anima-watermark-link{\n  position: fixed;\n  bottom:20px;\n  height:30px;\n  border-radius: 1000px;\n  background: #3B3B3B;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  cursor:pointer;\n  user-select:none;\n  transition: width 0.25s cubic-bezier(0.175, 0.885, 0.320, 1.275);\n  text-decoration:none;\n  color:#fff;\n  padding:8px 16px 8px 11px;\n  font-family:Mulish, sans-serif;\n  font-size:12px;\n}\n#anima-watermark-link .text {\n  margin-left: 6px;\n}\n\n.omniview-anima-action-links .link{\n  height: 30px;\n  width: 30px;\n  border-radius: 1000px;\n  background: #3B3B3B;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  cursor:pointer;\n  user-select:none;\n  transition: width 0.25s cubic-bezier(0.175, 0.885, 0.320, 1.275);\n  text-decoration:none;\n  color:#fff;\n}\n.omniview-anima-action-links #comment-link .text,.omniview-anima-action-links #code-link .text{\n  display:none;\n  font-size:12px;\n  margin-right:5px;\n}\n.omniview-anima-action-links #comment-link:hover,.omniview-anima-action-links #code-link:hover{\n  width:105px;\n}\n.omniview-anima-action-links #comment-link.pop-active,.omniview-anima-action-links #code-link.pop-active{\n  width:105px;\n  background: #FF6250;\n}\n.omniview-anima-action-links #comment-link.pop-active .text,.omniview-anima-action-links #code-link.pop-active .text{\n  display:block\n}\n.omniview-anima-action-links #comment-link:hover .text,.omniview-anima-action-links #code-link:hover .text{\n  display:block;\n}\n\n.link.navigation{\n  position:fixed;\n  left:50%;\n  transform:translateX(-50%);\n  width:auto;\n  height:32px;\n  color:#fff;\n  font-size:12px;\n  cursor:default;\n  padding:0 5px;\n}\n.link.navigation .icon{\n  margin:0 6px;\n  fill:none;\n  stroke:currentColor;\n  cursor:pointer;\n}\n.link.navigation .icon.disabled{\n  opacity:0.5;\n  cursor:default;\n}\n\n\n.link.navigation .home-icon{\n  margin-left:6px;\n  fill:currentColor;\n  stroke:currentColor;\n  cursor:pointer;\n}\n\n.omniview-anima-action-links .restart{\n  height: 30px;\n  padding:0 12px;\n  background: #3B3B3B;\n  border-radius: 1000px;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  cursor:pointer;\n  color:#f1f1f1;\n  font-size: 12px;\n}\n\n.omniview-anima-action-links{\n  display:flex;\n  align-items:center;\n  position:fixed;\n  bottom:20px;\n  right:20px;\n  font-family:Mulish, sans-serif;\n  transition: all 0.5s ease-in-out;\n  opacity:1;\n}\n\n.omniview-anima-action-links > * + *{\n   margin-right: 0;\n   margin-left: 10px;\n}\n\n.idle{\n  opacity:0;\n  pointer-events:none;\n}\n\n#popoverOpener {\n  position: absolute;\n  left: 50%;\n  margin-left: -10vw;\n  text-align: center;\n  top: 45vh;\n  width: 20vw;\n}\n\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  font-family: "sans-serif";\n  font-size: 14px;\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 5px 10px rgba(0,0,0,.2);\n}\n\n.popover.top {\n  margin-top: -12px\n}\n\n.popover.right {\n  margin-left: 10px\n}\n\n.popover.bottom {\n  margin-top: 10px\n}\n\n.popover.left {\n  margin-left: -10px\n}\n\n.popover-title {\n  padding: 8px 14px;\n  margin: 0;\n  font-size: 14px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0\n}\n\n.popover-content {\n  height: 100%;\n  width: 100%;\n  display:flex;\n  overflow:hidden;\n  font-family:Mulish, sans-serif;\n}\n\n\n\n.popover>.arrow,.popover>.arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid\n}\n\n.popover>.arrow {\n  border-width: 11px\n}\n\n.popover>.arrow:after {\n  content: "";\n  border-width: 10px\n}\n\n.popover.top>.arrow {\n  bottom: -11px;\n  left: 50%;\n  margin-left: -11px;\n  border-top-color: #999;\n  border-top-color: rgba(0,0,0,.25);\n  border-bottom-width: 0\n}\n\n.popover.top>.arrow:after {\n  bottom: 1px;\n  margin-left: -10px;\n  content: " ";\n  border-top-color: #fff;\n  border-bottom-width: 0\n}\n\n.popover.right>.arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-right-color: #999;\n  border-right-color: rgba(0,0,0,.25);\n  border-left-width: 0\n}\n\n.popover.right>.arrow:after {\n  bottom: -10px;\n  left: 1px;\n  content: " ";\n  border-right-color: #fff;\n  border-left-width: 0\n}\n\n.popover.bottom>.arrow {\n  top: -11px;\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999;\n  border-bottom-color: rgba(0,0,0,.25)\n}\n\n.popover.bottom>.arrow:after {\n  top: 1px;\n  margin-left: -10px;\n  content: " ";\n  border-top-width: 0;\n  border-bottom-color: #fff\n}\n\n.popover.left>.arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999;\n  border-left-color: rgba(0,0,0,.25)\n}\n\n.popover.left>.arrow:after {\n  right: 1px;\n  bottom: -10px;\n  content: " ";\n  border-right-width: 0;\n  border-left-color: #fff\n}\n\n\n\n#anima-comment-popover,#anima-code-popover{\n  background:#333333;\n  color:#fff;\n}\n\n#anima-comment-popover.top>.arrow,#anima-comment-popover.top>.arrow:after,#anima-code-popover.top>.arrow:after,#anima-code-popover.top>.arrow {\n  border-top-color:#333;\n}\n\n#anima-comment-popover .btn,#anima-code-popover .btn {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 6px 20px;\n  background: #FF6250;\n  color:#fff;\n  border-radius: 100px;\n  width: max-content;\n  text-decoration:none;\n}\n\n@media screen and (max-width: 550px) {\n  #anima-watermark-link {\n    padding: 6px !important;\n  }\n  #anima-watermark-link .text {\n    display: none !important;\n  }\n}\n\n'),
              document.head.appendChild(t);
          }
        }),
        (t.prototype.createPrivatePreviewBanner = function () {
          var t = this.queryMap.token,
            e = window.location.hostname;
          if (e && e.includes(".animaapp.io") && t) {
            document.cookie = "token=" + t + ";domain=" + e;
            var n = document.createElement("div");
            n.setAttribute("id", "private-preview"), document.body.appendChild(n);
            var i;
            Tt(
              ((i = jt({
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                backgroundColor: "#C1CBEA",
                textAlign: "center",
                color: "#3B3B3B",
                padding: "18px",
                fontFamily: "Mulish, sans-serif",
                textDecoration: "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              })),
              Bt(
                Ut ||
                  (Ut = H(
                    [
                      "\n        <div style=",
                      '>\n          <div></div>\n          <div style="display:flex;align-items:center;">\n            <svg\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 22C6.48587 22 2 17.5137 2 12C2 6.48587 6.48587 2 12 2C17.5137 2 22 6.48587 22 12C22 17.5137 17.5137 22 12 22ZM12 2.99998C7.03757 2.99998 2.99998 7.03757 2.99998 12C2.99998 16.9629 7.03757 21 12 21C16.9629 21 21 16.963 21 12C21 7.03757 16.9629 2.99998 12 2.99998Z"\n                fill="#3366FF"\n              />\n              <path\n                d="M12.053 7C11.4727 7 11.0006 7.47242 11.0006 8.05311C11.0006 8.63326 11.4727 9.10526 12.053 9.10526C12.6333 9.10526 13.1055 8.63326 13.1055 8.05311C13.1055 7.47242 12.6333 7 12.053 7Z"\n                fill="#3366FF"\n              />\n              <path\n                d="M12.0531 10.6842C11.6171 10.6842 11.2637 11.0377 11.2637 11.4737V16.2105C11.2637 16.6465 11.6171 17 12.0531 17C12.4891 17 12.8426 16.6465 12.8426 16.2105V11.4737C12.8426 11.0377 12.4891 10.6842 12.0531 10.6842Z"\n                fill="#3366FF"\n              />\n            </svg>\n            <div style="margin-left:10px;">\n              Private preview - only you can see it.\n            </div>\n          </div>\n          <div\n            style="cursor:pointer"\n            @click=',
                      '\n          >\n            <svg\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <rect\n                width="0.995992"\n                height="18.9242"\n                rx="0.497996"\n                transform="matrix(0.70425 0.709952 -0.702683 0.711503 18.2986 5)"\n                fill="#3B3B3B"\n              />\n              <rect\n                width="0.995992"\n                height="18.9242"\n                rx="0.497996"\n                transform="matrix(0.70425 -0.709952 0.702683 0.711503 5 5.70703)"\n                fill="#3B3B3B"\n              />\n            </svg>\n          </div>\n        </div>\n      ',
                    ],
                    [
                      "\n        <div style=",
                      '>\n          <div></div>\n          <div style="display:flex;align-items:center;">\n            <svg\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <path\n                d="M12 22C6.48587 22 2 17.5137 2 12C2 6.48587 6.48587 2 12 2C17.5137 2 22 6.48587 22 12C22 17.5137 17.5137 22 12 22ZM12 2.99998C7.03757 2.99998 2.99998 7.03757 2.99998 12C2.99998 16.9629 7.03757 21 12 21C16.9629 21 21 16.963 21 12C21 7.03757 16.9629 2.99998 12 2.99998Z"\n                fill="#3366FF"\n              />\n              <path\n                d="M12.053 7C11.4727 7 11.0006 7.47242 11.0006 8.05311C11.0006 8.63326 11.4727 9.10526 12.053 9.10526C12.6333 9.10526 13.1055 8.63326 13.1055 8.05311C13.1055 7.47242 12.6333 7 12.053 7Z"\n                fill="#3366FF"\n              />\n              <path\n                d="M12.0531 10.6842C11.6171 10.6842 11.2637 11.0377 11.2637 11.4737V16.2105C11.2637 16.6465 11.6171 17 12.0531 17C12.4891 17 12.8426 16.6465 12.8426 16.2105V11.4737C12.8426 11.0377 12.4891 10.6842 12.0531 10.6842Z"\n                fill="#3366FF"\n              />\n            </svg>\n            <div style="margin-left:10px;">\n              Private preview - only you can see it.\n            </div>\n          </div>\n          <div\n            style="cursor:pointer"\n            @click=',
                      '\n          >\n            <svg\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n            >\n              <rect\n                width="0.995992"\n                height="18.9242"\n                rx="0.497996"\n                transform="matrix(0.70425 0.709952 -0.702683 0.711503 18.2986 5)"\n                fill="#3B3B3B"\n              />\n              <rect\n                width="0.995992"\n                height="18.9242"\n                rx="0.497996"\n                transform="matrix(0.70425 -0.709952 0.702683 0.711503 5 5.70703)"\n                fill="#3B3B3B"\n              />\n            </svg>\n          </div>\n        </div>\n      ',
                    ]
                  )),
                i,
                function () {
                  return n.remove();
                }
              )),
              n
            );
          }
        }),
        (t.prototype.createFreeWebsiteBanner = function () {
          if (this.projectData && !this.isInOmniview() && !this.projectData.is_in_paying_team) {
            var t = document.createElement("div");
            t.setAttribute("id", "anima-free-website-banner"), document.body.appendChild(t);
            var e = (function (t) {
              var e = {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "20px",
                  backgroundColor: "#3b3b3b",
                  color: "#721c24",
                  padding: "10px 20px",
                  textAlign: "center",
                  position: "fixed",
                  top: "0",
                  left: "0",
                  width: "100%",
                  zIndex: "9999",
                  height: "70px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                },
                n = {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "6px",
                },
                i = {
                  fontSize: "16px",
                  fontWeight: "500",
                  fontFamily: "Mulish,sans-serif",
                  color: "#fff",
                },
                o = {
                  fontSize: "12px",
                  fontWeight: "400",
                  fontFamily: "Mulish,sans-serif",
                  color: "#fff",
                },
                s = {
                  width: "100px",
                  height: "30px",
                  flexShrink: "0",
                };
              return Bt(
                qt ||
                  (qt = H(
                    [
                      '\n    <div class="top-banner" style=',
                      ' id="topBanner">\n      <div class="logo-container" style=',
                      '>\n        <svg\n          width="100%"\n          height="100%"\n          viewBox="0 0 85 25"\n          fill="none"\n          xmlns="http://www.w3.org/2000/svg"\n          class="svg-class"\n        >\n          <g clip-path="url(#clip0)">\n            <path\n              d="M0.160833 -0.0004672H21.6908C21.7179 -0.000908623 21.7446 0.00558879 21.7684 0.0184054C21.7923 0.031222 21.8124 0.0499298 21.8269 0.0727445C21.8415 0.0955592 21.8499 0.12172 21.8515 0.148729C21.853 0.175739 21.8477 0.202697 21.8358 0.227032C19.9798 3.97511 17.182 7.17686 13.7167 9.5187C8.11917 13.2954 2.4825 13.6854 0.1625 13.7062C0.141319 13.7066 0.120263 13.7029 0.100566 13.6951C0.0808682 13.6873 0.0629254 13.6756 0.0477905 13.6608C0.0326557 13.646 0.0206335 13.6283 0.012427 13.6087C0.0042205 13.5892 -4.64251e-06 13.5682 3.82798e-09 13.547V0.1587C-1.14985e-06 0.137657 0.00417026 0.116822 0.0122732 0.0974014C0.0203761 0.077981 0.0322499 0.0603604 0.0472069 0.0455584C0.0621639 0.0307564 0.0799072 0.0190678 0.099411 0.0111676C0.118915 0.00326746 0.139791 -0.000687546 0.160833 -0.0004672Z"\n              fill="#FF6250"\n            ></path>\n            <path\n              d="M4.8075 24.9993C7.46261 24.9993 9.615 22.8469 9.615 20.1918C9.615 17.5367 7.46261 15.3843 4.8075 15.3843C2.15239 15.3843 0 17.5367 0 20.1918C0 22.8469 2.15239 24.9993 4.8075 24.9993Z"\n              fill="#FFDF90"\n            ></path>\n            <path\n              d="M14.6349 24.7146C13.2749 24.1954 12.5515 22.6988 13.0124 21.3738L16.6415 11.0171C17.1065 9.69209 18.5857 9.03959 19.9457 9.55876C21.3057 10.0788 22.029 11.5746 21.5682 12.9004L17.939 23.2571C17.474 24.5821 15.9949 25.2354 14.6349 24.7146Z"\n              fill="#3366FF"\n            ></path>\n            <path\n              d="M33.9881 18.322C33.1298 18.322 32.3767 18.1203 31.7289 17.717C31.0701 17.2995 30.5485 16.6976 30.2289 15.9862C29.8756 15.2362 29.6998 14.355 29.7014 13.3428C29.7031 12.3306 29.8825 11.4431 30.2398 10.6803C30.565 9.95702 31.0886 9.34071 31.7498 8.90282C32.4169 8.47372 33.1966 8.25269 33.9898 8.26782C34.8481 8.26782 35.5823 8.47587 36.1923 8.89198C36.8023 9.30809 37.215 9.90143 37.4306 10.672L37.2006 10.8253V8.49865H39.1231V18.1911H37.2014V15.8253L37.4314 15.922C37.2131 16.6909 36.8 17.2834 36.1923 17.6995C35.5845 18.1156 34.8498 18.3231 33.9881 18.322ZM34.4489 16.7837C35.3217 16.7837 35.9978 16.4823 36.4773 15.8795C36.9567 15.2767 37.1967 14.4178 37.1973 13.3028C37.1973 12.1878 36.9573 11.3289 36.4773 10.7262C35.9973 10.1234 35.3211 9.82198 34.4489 9.82198C33.565 9.82198 32.8759 10.1325 32.3814 10.7536C31.887 11.3748 31.6403 12.2359 31.6414 13.337C31.6414 14.4403 31.8881 15.29 32.3814 15.8861C32.8748 16.4823 33.5639 16.7814 34.4489 16.7837Z"\n              fill="white"\n            ></path>\n            <path\n              d="M41.9487 18.1866V11.2249C41.9487 10.7757 41.9404 10.3207 41.9196 9.85908C41.8987 9.39741 41.8579 8.94241 41.7954 8.49408H43.6412L43.8146 10.4557L43.6221 10.5707C43.9037 9.81408 44.3554 9.24075 44.9771 8.85075C45.6207 8.45455 46.3648 8.25204 47.1204 8.26742C49.4404 8.26742 50.6007 9.5688 50.6012 12.1716V18.1908H48.6587V12.2457C48.6587 11.4124 48.4921 10.8035 48.1587 10.4191C47.8254 10.0346 47.3126 9.84214 46.6204 9.84158C45.7871 9.84158 45.124 10.098 44.6312 10.6107C44.1385 11.1235 43.8918 11.8096 43.8912 12.6691V18.1883H41.9487V18.1866Z"\n              fill="white"\n            ></path>\n            <path\n              d="M53.2188 4.26416H55.4687V6.30249H53.2188V4.26416ZM53.3529 18.1875V8.49499H55.2954V18.1875H53.3529Z"\n              fill="white"\n            ></path>\n            <path\n              d="M58.1221 18.1873V11.2257C58.1221 10.7765 58.1137 10.3215 58.0946 9.85982C58.0755 9.403 58.0335 8.94743 57.9688 8.49482H59.8146L59.9879 10.4565L59.7954 10.5332C60.0376 9.81482 60.4415 9.25704 61.0071 8.85982C61.5726 8.4626 62.2457 8.26399 63.0262 8.26399C63.949 8.26399 64.6712 8.49121 65.1929 8.94566C65.7146 9.4001 66.0499 10.1009 66.1987 11.0482L65.7379 10.7215C65.9355 9.99375 66.3812 9.35794 66.9979 8.92399C67.6207 8.47955 68.3543 8.25732 69.1987 8.25732C70.276 8.25732 71.0837 8.58066 71.6221 9.22732C72.1604 9.87399 72.4296 10.8512 72.4296 12.159V18.179H70.4879V12.2432C70.4879 11.4098 70.3421 10.8007 70.0554 10.4157C69.7687 10.0307 69.3054 9.83899 68.6604 9.83899C67.9176 9.83899 67.3315 10.0954 66.9021 10.6082C66.4726 11.1209 66.2576 11.8198 66.2571 12.7048V18.1857H64.3146V12.2432C64.3146 11.4098 64.1671 10.8007 63.8721 10.4157C63.5771 10.0307 63.1157 9.83843 62.4879 9.83899C61.7307 9.83899 61.1379 10.0954 60.7096 10.6082C60.2812 11.1209 60.0662 11.8198 60.0646 12.7048V18.1857H58.1221V18.1873Z"\n              fill="white"\n            ></path>\n            <path\n              d="M78.9495 18.3215C78.0911 18.3215 77.3384 18.1198 76.6911 17.7165C76.0323 17.299 75.5107 16.6972 75.1911 15.9857C74.8378 15.2357 74.6611 14.3546 74.6611 13.3423C74.6611 12.3301 74.8406 11.4426 75.1995 10.6798C75.5252 9.95712 76.0483 9.34101 76.7086 8.90234C77.376 8.47309 78.1561 8.25205 78.9495 8.26734C79.8083 8.26734 80.5422 8.4754 81.1511 8.89151C81.76 9.30762 82.1731 9.90096 82.3903 10.6715L82.1595 10.8248V8.49818H84.0828V18.1907H82.1595V15.8248L82.3903 15.9215C82.172 16.6904 81.7589 17.2829 81.1511 17.699C80.5434 18.1151 79.8095 18.3226 78.9495 18.3215ZM79.4095 16.7832C80.2822 16.7832 80.9589 16.4818 81.4395 15.879C81.92 15.2762 82.16 14.4173 82.1595 13.3023C82.1595 12.1873 81.9195 11.3285 81.4395 10.7257C80.9595 10.1229 80.2828 9.82151 79.4095 9.82151C78.5256 9.82151 77.8361 10.1321 77.3411 10.7532C76.8461 11.3743 76.5997 12.2354 76.602 13.3365C76.602 14.4398 76.8484 15.2896 77.3411 15.8857C77.8339 16.4818 78.5234 16.781 79.4095 16.7832Z"\n              fill="white"\n            ></path>\n          </g>\n          <defs>\n            <clipPath id="clip0">\n              <rect width="84.0825" height="25" fill="white"></rect>\n            </clipPath>\n          </defs>\n        </svg>\n      </div>\n      <div style=',
                      ">\n        <p style=",
                      '>\n          This site was created by Anima. Create your own site for free!\n        </p>\n        <p\n          class="',
                      ',"\n          style=',
                      "\n        >\n          *if you are the owner,\n          <a\n            style=",
                      '\n            href="https://projects.animaapp.com/pricing?utm_source=animaapp.io&utm_campaign=free-website-banner"\n            target="_blank"\n            >upgrade here</a\n          >\n          to remove this banner\n        </p>\n      </div>\n      <button\n        id="upgradeButton"\n        class=',
                      '\n        @click="',
                      '"\n      >\n        Start free\n      </button>\n    </div>\n  ',
                    ],
                    [
                      '\n    <div class="top-banner" style=',
                      ' id="topBanner">\n      <div class="logo-container" style=',
                      '>\n        <svg\n          width="100%"\n          height="100%"\n          viewBox="0 0 85 25"\n          fill="none"\n          xmlns="http://www.w3.org/2000/svg"\n          class="svg-class"\n        >\n          <g clip-path="url(#clip0)">\n            <path\n              d="M0.160833 -0.0004672H21.6908C21.7179 -0.000908623 21.7446 0.00558879 21.7684 0.0184054C21.7923 0.031222 21.8124 0.0499298 21.8269 0.0727445C21.8415 0.0955592 21.8499 0.12172 21.8515 0.148729C21.853 0.175739 21.8477 0.202697 21.8358 0.227032C19.9798 3.97511 17.182 7.17686 13.7167 9.5187C8.11917 13.2954 2.4825 13.6854 0.1625 13.7062C0.141319 13.7066 0.120263 13.7029 0.100566 13.6951C0.0808682 13.6873 0.0629254 13.6756 0.0477905 13.6608C0.0326557 13.646 0.0206335 13.6283 0.012427 13.6087C0.0042205 13.5892 -4.64251e-06 13.5682 3.82798e-09 13.547V0.1587C-1.14985e-06 0.137657 0.00417026 0.116822 0.0122732 0.0974014C0.0203761 0.077981 0.0322499 0.0603604 0.0472069 0.0455584C0.0621639 0.0307564 0.0799072 0.0190678 0.099411 0.0111676C0.118915 0.00326746 0.139791 -0.000687546 0.160833 -0.0004672Z"\n              fill="#FF6250"\n            ></path>\n            <path\n              d="M4.8075 24.9993C7.46261 24.9993 9.615 22.8469 9.615 20.1918C9.615 17.5367 7.46261 15.3843 4.8075 15.3843C2.15239 15.3843 0 17.5367 0 20.1918C0 22.8469 2.15239 24.9993 4.8075 24.9993Z"\n              fill="#FFDF90"\n            ></path>\n            <path\n              d="M14.6349 24.7146C13.2749 24.1954 12.5515 22.6988 13.0124 21.3738L16.6415 11.0171C17.1065 9.69209 18.5857 9.03959 19.9457 9.55876C21.3057 10.0788 22.029 11.5746 21.5682 12.9004L17.939 23.2571C17.474 24.5821 15.9949 25.2354 14.6349 24.7146Z"\n              fill="#3366FF"\n            ></path>\n            <path\n              d="M33.9881 18.322C33.1298 18.322 32.3767 18.1203 31.7289 17.717C31.0701 17.2995 30.5485 16.6976 30.2289 15.9862C29.8756 15.2362 29.6998 14.355 29.7014 13.3428C29.7031 12.3306 29.8825 11.4431 30.2398 10.6803C30.565 9.95702 31.0886 9.34071 31.7498 8.90282C32.4169 8.47372 33.1966 8.25269 33.9898 8.26782C34.8481 8.26782 35.5823 8.47587 36.1923 8.89198C36.8023 9.30809 37.215 9.90143 37.4306 10.672L37.2006 10.8253V8.49865H39.1231V18.1911H37.2014V15.8253L37.4314 15.922C37.2131 16.6909 36.8 17.2834 36.1923 17.6995C35.5845 18.1156 34.8498 18.3231 33.9881 18.322ZM34.4489 16.7837C35.3217 16.7837 35.9978 16.4823 36.4773 15.8795C36.9567 15.2767 37.1967 14.4178 37.1973 13.3028C37.1973 12.1878 36.9573 11.3289 36.4773 10.7262C35.9973 10.1234 35.3211 9.82198 34.4489 9.82198C33.565 9.82198 32.8759 10.1325 32.3814 10.7536C31.887 11.3748 31.6403 12.2359 31.6414 13.337C31.6414 14.4403 31.8881 15.29 32.3814 15.8861C32.8748 16.4823 33.5639 16.7814 34.4489 16.7837Z"\n              fill="white"\n            ></path>\n            <path\n              d="M41.9487 18.1866V11.2249C41.9487 10.7757 41.9404 10.3207 41.9196 9.85908C41.8987 9.39741 41.8579 8.94241 41.7954 8.49408H43.6412L43.8146 10.4557L43.6221 10.5707C43.9037 9.81408 44.3554 9.24075 44.9771 8.85075C45.6207 8.45455 46.3648 8.25204 47.1204 8.26742C49.4404 8.26742 50.6007 9.5688 50.6012 12.1716V18.1908H48.6587V12.2457C48.6587 11.4124 48.4921 10.8035 48.1587 10.4191C47.8254 10.0346 47.3126 9.84214 46.6204 9.84158C45.7871 9.84158 45.124 10.098 44.6312 10.6107C44.1385 11.1235 43.8918 11.8096 43.8912 12.6691V18.1883H41.9487V18.1866Z"\n              fill="white"\n            ></path>\n            <path\n              d="M53.2188 4.26416H55.4687V6.30249H53.2188V4.26416ZM53.3529 18.1875V8.49499H55.2954V18.1875H53.3529Z"\n              fill="white"\n            ></path>\n            <path\n              d="M58.1221 18.1873V11.2257C58.1221 10.7765 58.1137 10.3215 58.0946 9.85982C58.0755 9.403 58.0335 8.94743 57.9688 8.49482H59.8146L59.9879 10.4565L59.7954 10.5332C60.0376 9.81482 60.4415 9.25704 61.0071 8.85982C61.5726 8.4626 62.2457 8.26399 63.0262 8.26399C63.949 8.26399 64.6712 8.49121 65.1929 8.94566C65.7146 9.4001 66.0499 10.1009 66.1987 11.0482L65.7379 10.7215C65.9355 9.99375 66.3812 9.35794 66.9979 8.92399C67.6207 8.47955 68.3543 8.25732 69.1987 8.25732C70.276 8.25732 71.0837 8.58066 71.6221 9.22732C72.1604 9.87399 72.4296 10.8512 72.4296 12.159V18.179H70.4879V12.2432C70.4879 11.4098 70.3421 10.8007 70.0554 10.4157C69.7687 10.0307 69.3054 9.83899 68.6604 9.83899C67.9176 9.83899 67.3315 10.0954 66.9021 10.6082C66.4726 11.1209 66.2576 11.8198 66.2571 12.7048V18.1857H64.3146V12.2432C64.3146 11.4098 64.1671 10.8007 63.8721 10.4157C63.5771 10.0307 63.1157 9.83843 62.4879 9.83899C61.7307 9.83899 61.1379 10.0954 60.7096 10.6082C60.2812 11.1209 60.0662 11.8198 60.0646 12.7048V18.1857H58.1221V18.1873Z"\n              fill="white"\n            ></path>\n            <path\n              d="M78.9495 18.3215C78.0911 18.3215 77.3384 18.1198 76.6911 17.7165C76.0323 17.299 75.5107 16.6972 75.1911 15.9857C74.8378 15.2357 74.6611 14.3546 74.6611 13.3423C74.6611 12.3301 74.8406 11.4426 75.1995 10.6798C75.5252 9.95712 76.0483 9.34101 76.7086 8.90234C77.376 8.47309 78.1561 8.25205 78.9495 8.26734C79.8083 8.26734 80.5422 8.4754 81.1511 8.89151C81.76 9.30762 82.1731 9.90096 82.3903 10.6715L82.1595 10.8248V8.49818H84.0828V18.1907H82.1595V15.8248L82.3903 15.9215C82.172 16.6904 81.7589 17.2829 81.1511 17.699C80.5434 18.1151 79.8095 18.3226 78.9495 18.3215ZM79.4095 16.7832C80.2822 16.7832 80.9589 16.4818 81.4395 15.879C81.92 15.2762 82.16 14.4173 82.1595 13.3023C82.1595 12.1873 81.9195 11.3285 81.4395 10.7257C80.9595 10.1229 80.2828 9.82151 79.4095 9.82151C78.5256 9.82151 77.8361 10.1321 77.3411 10.7532C76.8461 11.3743 76.5997 12.2354 76.602 13.3365C76.602 14.4398 76.8484 15.2896 77.3411 15.8857C77.8339 16.4818 78.5234 16.781 79.4095 16.7832Z"\n              fill="white"\n            ></path>\n          </g>\n          <defs>\n            <clipPath id="clip0">\n              <rect width="84.0825" height="25" fill="white"></rect>\n            </clipPath>\n          </defs>\n        </svg>\n      </div>\n      <div style=',
                      ">\n        <p style=",
                      '>\n          This site was created by Anima. Create your own site for free!\n        </p>\n        <p\n          class="',
                      ',"\n          style=',
                      "\n        >\n          *if you are the owner,\n          <a\n            style=",
                      '\n            href="https://projects.animaapp.com/pricing?utm_source=animaapp.io&utm_campaign=free-website-banner"\n            target="_blank"\n            >upgrade here</a\n          >\n          to remove this banner\n        </p>\n      </div>\n      <button\n        id="upgradeButton"\n        class=',
                      '\n        @click="',
                      '"\n      >\n        Start free\n      </button>\n    </div>\n  ',
                    ]
                  )),
                jt(e),
                jt(s),
                jt(n),
                jt(i),
                Dt({
                  "anima-desktop-only": !0,
                }),
                jt(o),
                jt(
                  Wt(
                    Wt({}, o),
                    {},
                    {
                      textDecoration: "none",
                      color: "#ff6250",
                    }
                  )
                ),
                Dt({
                  "an-button": !0,
                  primary: !0,
                  rounded: !0,
                }),
                t || function () {}
              );
            })(function () {
              window.open("https://www.animaapp.com/pricing?utm_source=animaapp.io&utm_campaign=free-website-banner", "_blank");
            });
            Tt(e, t);
            for (var n = document.getElementsByClassName("screen"), i = 0; i < n.length; i++) {
              n[i].style.marginTop = "70px";
            }
          }
        }),
        (t.prototype.saveQueryParams = function (t) {
          if (!this.isInOmniview()) {
            var e = new URLSearchParams(window.location.search),
              n = document.createElement("a");
            n.href = t;
            var i = {};
            e.forEach(function (t, e) {
              i[e] = t;
            }),
              (i.slug = n.pathname.slice(1));
            var o = {},
              s = sessionStorage.getItem("queryParms");
            s && (o = JSON.parse(s));
            var r = E(E({}, o), i);
            (this.queryMap = r), sessionStorage.setItem("queryParms", JSON.stringify(r));
          }
        }),
        (t.prototype.serialize = function (t) {
          var e = [];
          for (var n in t) t.hasOwnProperty(n) && e.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
          return e.join("&");
        }),
        (t.prototype.getWindowPageSlug = function () {
          return window.location.pathname.replace("/", "");
        }),
        (t.prototype.loadQueryParams = function () {
          if (!this.isInOmniview()) {
            var t = sessionStorage.getItem("queryParms");
            if (t) {
              var e = JSON.parse(t);
              e && (this.queryMap = e);
            }
          }
        }),
        (t = O([U.Service(), L("design:paramtypes", [])], t))
      );
    })(),
    Xt = (function () {
      function t() {
        (this.isDev = !1),
          (this.nodes = {}),
          (this.webComponentsIds = []),
          (this.links = document.querySelectorAll("a")),
          (this.linksMap = []),
          (this.serverOverrides = {}),
          (this.modelNodes = {}),
          (this.selectedNode = null),
          (this.isOverridesActivated = !1),
          (this.whitelist = null),
          (this.inlineEventsMap = {}),
          (this.generatedViews = {}),
          (this.listOfInlineEvents = ["onclick", "onmouseover", "onmouseout", "onkeydown", "onclick"]),
          (this.selectableLayers = {}),
          (this.fixedBox = null),
          (this.box = null),
          this.storeLinks(),
          (this.onMouseOver = this.onMouseOver.bind(this)),
          (this.onMouseOut = this.onMouseOut.bind(this)),
          (this.onClick = this.onClick.bind(this)),
          (this.resetAllBoxes = this.resetAllBoxes.bind(this)),
          (this.updateBoxesPosition = this.updateBoxesPosition.bind(this));
      }
      return (
        (t.prototype.activate = function () {
          this.isOverridesActivated ||
            (console.log("ov-activate"),
            document.body.setAttribute("mode", "code"),
            this.createAllBoxes(),
            this.addStyles(),
            this.disableLinks(),
            this.addDocumentListeners(),
            this.addWindowListeners(),
            (this.isOverridesActivated = !0),
            this.resetAllBoxes(),
            parent.postMessage(
              {
                action: "overrides-activated",
              },
              "*"
            ));
        }),
        (t.prototype.deactivate = function () {
          this.isOverridesActivated &&
            (this.restoreAllNodeEvents(), this.destroyAllBoxes(), this.enableLinks(), this.removeDocumentListeners(), this.removeWindowListeners(), document.body.removeAttribute("mode"), (this.isOverridesActivated = !1));
        }),
        (t.prototype.addStyles = function () {
          if (!document.querySelector("#overrides-styles")) {
            var t = document.createElement("style");
            t.setAttribute("id", "overrides-styles"), (t.innerHTML = X), document.head.appendChild(t);
          }
        }),
        (t.prototype.removeStyles = function () {
          var t = document.querySelector("#overrides-styles");
          t && t.remove();
        }),
        (t.prototype.createBox = function (t) {
          var e = (void 0 === t ? {} : t).className,
            n = void 0 === e ? "" : e,
            i = document.createElement("div");
          i.setAttribute("data-turbo-permanent", "true"), i.setAttribute("id", "override-box-" + n), i.classList.add("box-highlight", n);
          var o = document.createElement("div");
          o.classList.add("box-wrapper");
          var s = document.createElement("div");
          s.classList.add("tag-box");
          var r = document.createElement("div");
          r.classList.add("tag-name");
          var a = document.createElement("div");
          return (
            a.classList.add("tag-component-name"),
            s.appendChild(r),
            s.appendChild(a),
            o.appendChild(s),
            i.appendChild(o),
            document.body.appendChild(i),
            {
              boxEl: i,
              boxWrapper: o,
              boxElTag: s,
              boxElTagName: r,
              boxElComponentName: a,
            }
          );
        }),
        (t.prototype.updateBoxesPosition = function () {
          this.setBoxPosition(this.selectedNode, this.fixedBox), this.resetBox(this.box);
        }),
        (t.prototype.updateGeneratedViews = function (t) {
          this.generatedViews = t;
        }),
        (t.prototype.setBoxPosition = function (t, e, n) {
          var i, o, s, r;
          if ((void 0 === n && (n = {}), e && t)) {
            var a = t.getBoundingClientRect();
            e.boxEl.style.borderRadius = "";
            var l = window.pageXOffset || window.document.documentElement.scrollLeft,
              c = window.pageYOffset || window.document.documentElement.scrollTop;
            if (
              (Object.assign(e.boxEl.style, {
                width: "var(--width)",
                height: t.offsetHeight + "px",
                transform: "translate3d(" + Math.max(0, a.x + l) + "px," + Math.max(0, a.y + c) + "px,0)",
                display: "block",
              }),
              null === (i = e.boxEl) || void 0 === i || i.style.setProperty("--width", t.offsetWidth + "px"),
              null === (o = e.boxElTag) || void 0 === o || o.style.setProperty("--tag-box-width", "auto"),
              null === (s = e.boxElTag) || void 0 === s || s.style.setProperty("--tag-box-left", "0px"),
              null === (r = e.boxElTag) || void 0 === r || r.style.setProperty("--tag-box-top", "-20px"),
              !n.flat)
            ) {
              var d = this.getNodeBorderRadius(t);
              d && ((e.boxEl.style.borderRadius = d + "px"), e.boxElTag.style.setProperty("--tag-box-left", (d + d / 2) / 2 + "px"));
              var h = this.getNodeId(t);
              if (h) this.isRootNode(h, t) ? e.boxEl.classList.add("is_root_screen") : e.boxEl.classList.remove("is_root_screen"), this.isComponentNode(h) ? e.boxEl.classList.add("is_component") : e.boxEl.classList.remove("is_component");
            }
          }
        }),
        (t.prototype.resetBox = function (t) {
          t &&
            Object.assign(t.boxEl.style, {
              width: "0",
              height: "0",
              display: "none",
              transform: "translate3d(0,0,0)",
            });
        }),
        (t.prototype.resetAllBoxes = function () {
          this.resetBox(this.box), this.resetBox(this.fixedBox);
        }),
        (t.prototype.destroyBox = function (t) {
          t && t.boxEl.remove();
        }),
        (t.prototype.createAllBoxes = function () {
          (this.box = this.createBox({
            className: "hover",
          })),
            (this.fixedBox = this.createBox({
              className: "fixed",
            }));
        }),
        (t.prototype.destroyAllBoxes = function () {
          this.destroyBox(this.box), this.destroyBox(this.fixedBox);
        }),
        (t.prototype.storeLinks = function () {
          for (var t = 0; t < this.links.length; t++) {
            var e = this.links[t];
            this.linksMap.push(e.getAttribute("href") || "");
          }
        }),
        (t.prototype.disableLinks = function () {
          for (var t = 0; t < this.links.length; t++) {
            this.links[t].removeAttribute("href");
          }
        }),
        (t.prototype.enableLinks = function () {
          for (var t = 0; t < this.links.length; t++) {
            this.links[t].setAttribute("href", this.linksMap[t]);
          }
        }),
        (t.prototype.setServerOverrides = function (t) {
          (this.serverOverrides = t), this.reactToDataChange();
        }),
        (t.prototype.setWhiteList = function (t) {
          (t && Array.isArray(t) && (this.whitelist = 0 === t.length ? null : t), t && 0 !== t.length) ||
            j(document.querySelectorAll(".ignore")).forEach(function (t) {
              t.classList.remove("ignore");
            });
        }),
        (t.prototype.setModelNodes = function (t) {
          var e = t.modelNodes;
          (this.modelNodes = e), this.reactToDataChange();
        }),
        (t.prototype.setComponentIds = function (t) {
          (this.webComponentsIds = t), this.reactToDataChange();
        }),
        (t.prototype.getNodeSubNodesMap = function (t) {
          for (var e = this, n = {}, i = 0; i < t.length; i++) {
            var o = t[i],
              s = this.getNodeById(o);
            if (s) {
              var r = Array.from(s.querySelectorAll("[data-id]"))
                .map(function (t) {
                  return e.getNodeId(t);
                })
                .filter(Boolean)
                .filter(function (e) {
                  return e && t.includes(e);
                });
              n[o] = r;
            }
          }
          return n;
        }),
        (t.prototype.mapChildToInstance = function (t) {
          var e = this,
            n = [],
            i = {};
          Object.keys(t).forEach(function (e) {
            (t[e].is_web_component || t[e].is_suggestion) && n.push(e);
          });
          for (
            var o = function (t) {
                var o = n[t],
                  r = s.getNodeById(o);
                if (!r) return "continue";
                Array.from(r.querySelectorAll("[data-id]"))
                  .map(function (t) {
                    return e.getNodeId(t);
                  })
                  .filter(Boolean)
                  .forEach(function (t) {
                    t && n.includes(t) && (i[t] = t), t && !n.includes(t) && (i[t] = o);
                  });
              },
              s = this,
              r = 0;
            r < n.length;
            r++
          )
            o(r);
          return i;
        }),
        (t.prototype.setIgnoredNodeIds = function (t) {
          throw new Error("Method not implemented.");
        }),
        (t.prototype.reactToDataChange = function () {
          var t = this;
          if (
            (Object.keys(this.serverOverrides || {}).forEach(function (e) {
              var n = t.serverOverrides[e],
                i = t.getNodeById(e);
              i && (i.classList.remove("is_image"), n.is_image && i.classList.add("is_image"));
            }),
            this.selectedNode)
          ) {
            var e = this.getNodeId(this.selectedNode);
            e && (this.setBoxPosition(this.selectedNode, this.fixedBox), this.fixedBox && this.setComponentName(this.fixedBox.boxElComponentName, e));
          }
        }),
        (t.prototype.getNodeId = function (t) {
          return t ? t.getAttribute("data-id") : null;
        }),
        (t.prototype.disableComponentView = function () {
          var t = document.querySelector("#og-content-wrapper");
          t && (document.body.innerHTML = t.innerHTML);
        }),
        (t.prototype.getNodeData = function (t) {
          var e = this.getNodeId(t);
          if (e && t) {
            var n = this.findParentWithId(t),
              i = this.getNodeId(n),
              o = [
                "class",
                "style",
                "data-id",
                "anima-layer",
                "anima-container",
                "component",
                "anima-component-wrapper",
                "anima-not-ready",
                "anima-word-break",
                "anima-hidden",
                "anima-smart-layers-pointers",
                "id",
                "anima-show-on-scroll",
                "data-initial-state",
              ],
              s = this.nodes[e].originalAttributes.filter(function (t) {
                return !o.includes(t.name);
              }),
              r = this.nodes.globalCSS ? this.nodes.globalCSS : "",
              a = getComputedStyle(t);
            return {
              id: e,
              tagName: this.nodes[e].tagName,
              htmlContent: this.nodes[e].htmlContent,
              inlineCSS: this.nodes[e].inlineCSS,
              classes: t.getAttribute("class"),
              customClasses: this.nodes[e].customClasses,
              originalAttributes: s,
              customAttributes: this.nodes[e].customAttributes,
              globalCSS: r,
              path: this.getNodePath(t),
              textContent: t.innerText || t.textContent,
              hasBackgroundURL: "none" !== a.backgroundImage,
              parentNodeId: i,
            };
          }
        }),
        (t.prototype.isLeaf = function (t) {
          return !!this.getNodeId(t) && !t.hasChildNodes();
        }),
        (t.prototype.hasSameDimensionsAsParent = function (t) {
          var e = this.getNodeId(t);
          if (!e) return !1;
          var n = this.findParentWithId(t),
            i = this.getNodeId(n);
          if (i && i == e) return !1;
          var o = t.getBoundingClientRect(),
            s = o.width,
            r = o.height,
            a = n.getBoundingClientRect(),
            l = a.width,
            c = a.height;
          return Math.abs(Math.floor(s) - Math.floor(l)) <= 2 && Math.abs(Math.floor(r) - Math.floor(c)) <= 2;
        }),
        (t.prototype.getNodePath = function (t) {
          return this.selectedNode ? G(this.selectedNode) : t ? G(t) : [];
        }),
        (t.prototype.getNodeById = function (t) {
          return document.querySelector('[data-id="' + t + '"]');
        }),
        (t.prototype.getNodesById = function (t) {
          for (var e = {}, n = 0; n < t.length; n++) {
            var i = t[n],
              o = this.getNodeById(i);
            if (o) {
              this.registerNode(o);
              var s = this.getNodeData(o);
              e[i] = s;
            }
          }
          this.sendMessage("nodes-data-map", e);
        }),
        (t.prototype.getPreview = function (t) {
          return I(this, void 0, void 0, function () {
            var e,
              n,
              i = this;
            return T(this, function (o) {
              return (
                (e = t.nodeId),
                (n = A(t, ["nodeId"])),
                e
                  ? (this.sendMessage(
                      "on-preview-start",
                      E(
                        {
                          nodeId: e,
                        },
                        n
                      )
                    ),
                    this.takeNodeScreenShot(e)
                      .then(function (t) {
                        i.sendMessage(
                          "on-preview-end",
                          E(
                            {
                              error: null,
                              nodeId: e,
                              base64: t,
                            },
                            n
                          )
                        );
                      })
                      .catch(function (t) {
                        i.sendMessage(
                          "on-preview-end",
                          E(
                            {
                              error: t,
                            },
                            n
                          )
                        );
                      }),
                    [2])
                  : [2]
              );
            });
          });
        }),
        (t.prototype.takeNodeScreenShot = function (t) {
          return I(this, void 0, void 0, function () {
            var e, n, i, o, s, r, a, l;
            return T(this, function (c) {
              switch (c.label) {
                case 0:
                  return (e = this.getNodeById(t))
                    ? ((n = Array.from(e.querySelectorAll("img"))),
                      (i = []),
                      n.forEach(function (t) {
                        var e = t.src;
                        if ((i.push(t.src), e.startsWith("https"))) {
                          t.crossOrigin = "anonymous";
                          var n = new Date().getTime();
                          e = (e = t.src.includes("?") ? t.src + "&v=" + n : t.src + "?v=" + n).replace("cdn.animaapp.com", "anima-uploads.s3.amazonaws.com");
                        }
                        t.src = e;
                      }),
                      (o = getComputedStyle(e).backgroundColor),
                      (s = document.body.style.backgroundColor),
                      [
                        4,
                        html2canvas(e, {
                          backgroundColor: o || s || null,
                          scrollY: -window.scrollY,
                          scrollX: 0,
                          allowTaint: !1,
                          useCORS: !0,
                          onclone: function (t) {
                            t.body.style.overflow = "hidden";
                          },
                        }),
                      ])
                    : [2, ""];
                case 1:
                  for (r = c.sent(), a = 0; a < n.length; a++) (l = n[a]).removeAttribute("crossOrigin"), (l.src = i[a]);
                  return [2, r.toDataURL()];
              }
            });
          });
        }),
        (t.prototype.sendNodeData = function (t, e) {
          if (this.getNodeId(t)) {
            var n = this.getNodeData(t);
            (n = E(E({}, n), {
              metadata: e,
            })),
              this.sendMessage("edit-node", n);
          }
        }),
        (t.prototype.sendMessage = function (t, e) {
          void 0 === e && (e = {}),
            parent.postMessage(
              {
                action: t,
                data: e,
              },
              "*"
            );
        }),
        (t.prototype.populateSelectableLayers = function (t) {
          if (((this.selectableLayers = t || {}), !this.isObjectEmpty(this.selectableLayers))) {
            var e = document.querySelectorAll(".ignore");
            Array.from(e).forEach(function (t) {
              t.classList.remove("ignore");
            });
          }
        }),
        (t.prototype.registerNode = function (t) {
          var e = this.getNodeId(t);
          e &&
            (this.nodes[e] ||
              (this.nodes[e] = {
                isModifed: !1,
                tagName: t.tagName.toLowerCase(),
                customClasses: [],
                inlineCSS: t.getAttribute("style") || "",
                updatedOriginalAttributes: [],
                originalAttributes: j(t.attributes).map(function (t) {
                  return {
                    name: t.name,
                    value: t.value,
                  };
                }),
                customAttributes: [],
                htmlContent: t.innerHTML,
                textContent: t.innerText || t.textContent || "",
              }));
        }),
        (t.prototype.setComponentName = function (t, e) {
          t.style.visibility = "hidden";
          var n = this.modelNodes[e] || {},
            i = this.modelNodes[e] || {};
          if (n.is_component || n.is_suggestion) {
            var o = Object.prototype.hasOwnProperty.call(n, "viewName") ? n.viewName : i.viewName;
            o && ((t.innerHTML = "<span>" + o + "</span>"), (t.style.visibility = "visible"));
          }
        }),
        (t.prototype.getExtFromFileName = function (t) {
          if (!t) return "";
          var e = /(?:\.([^.]+))?$/.exec(t);
          return e ? e[1] : "";
        }),
        (t.prototype.isImage = function (t, e) {
          var n = (void 0 === e ? {} : e).native,
            i = void 0 === n || n,
            o = this.getNodeById(t);
          if (!o) return !1;
          var s = this.serverOverrides[t] || {},
            r = i && "IMG" == o.tagName,
            a = Object.prototype.hasOwnProperty.call(s, "is_image") && s.is_image;
          return r || a;
        }),
        (t.prototype.highlightNodes = function (t) {
          var e = this,
            n = t.ids,
            i = t.scrollToCenter,
            o = void 0 !== i && i,
            s = t.shouldScroll,
            r = void 0 === s || s,
            a = t.scrollViewport,
            l = void 0 !== a && a,
            c = t.styles,
            d = void 0 === c ? {} : c,
            h = t.animate,
            u = void 0 === h || h,
            p = n || [],
            f = "hg-wrap-id",
            m = document.querySelector("#" + f);
          m && m.remove();
          var g = document.createElement("div");
          g.setAttribute("id", f);
          for (
            var v,
              y,
              b = [],
              w = d.borderColor || "#ffcb6b",
              x = d.borderWidth || "2px",
              C = d.background || "rgba(255, 203, 107, 0.2)",
              N = function (t) {
                var n = p[t],
                  i = k.getNodeById(n);
                if (!(i || k.generatedViews[n])) return "continue";
                (v = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)), (y = Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
                var s = document.createElement("div");
                s.setAttribute("class-highlighter", "true"),
                  Object.assign(s.style, {
                    position: "absolute",
                    opacity: 0,
                    zIndex: -1,
                    top: 0,
                    left: 0,
                    background: C,
                    boxShadow: "inset 0 0 0 " + x + " " + w,
                  }),
                  b.push(s),
                  g.appendChild(s);
                var a = 0,
                  c = 0;
                if (k.generatedViews[n]) {
                  var d = k.generatedViews[n] || [],
                    h = [];
                  d.forEach(function (t) {
                    var n = e.getNodeById(t);
                    if (n) {
                      var i = n.getBoundingClientRect();
                      h.push({
                        x: i.x,
                        y: i.y,
                        xw: i.x + i.width,
                        yh: i.y + i.height,
                      });
                    }
                  });
                  var u = Math.min.apply(
                      Math,
                      j(
                        h.map(function (t) {
                          return t.x;
                        })
                      )
                    ),
                    f = Math.min.apply(
                      Math,
                      j(
                        h.map(function (t) {
                          return t.y;
                        })
                      )
                    ),
                    m = Math.max.apply(
                      Math,
                      j(
                        h.map(function (t) {
                          return t.xw;
                        })
                      )
                    ),
                    N = Math.max.apply(
                      Math,
                      j(
                        h.map(function (t) {
                          return t.yh;
                        })
                      )
                    ),
                    M = window.pageXOffset || window.document.documentElement.scrollLeft,
                    _ = window.pageYOffset || window.document.documentElement.scrollTop;
                  (a = m - u),
                    (c = N - f),
                    Object.assign(s.style, {
                      width: a + "px",
                      height: c + "px",
                      transform: "translate3d(" + Math.max(0, u + M) + "px," + Math.max(0, f + _) + "px,0)",
                      display: "block",
                    }),
                    s.style.setProperty("--width", m - u + "px");
                } else
                  i &&
                    ((a = i.offsetWidth),
                    (c = i.offsetHeight),
                    k.setBoxPosition(
                      i,
                      {
                        boxEl: s,
                      },
                      {
                        flat: !0,
                      }
                    ),
                    r &&
                      k.scrollToElement(i, {
                        center: o,
                        viewport: l,
                      }));
                Object.assign(s.style, {
                  width: Math.min(a, v) + "px",
                  height: Math.min(c, y) + "px",
                }),
                  a >= v &&
                    Object.assign(s.style, {
                      width: v + "px",
                    });
              },
              k = this,
              M = 0;
            M < p.length;
            M++
          )
            N(M);
          if ((document.body.appendChild(g), u))
            var _ = 2,
              S = 2,
              E = setInterval(function () {
                return _ <= 0 && S > 0
                  ? (S--, void (_ = 2))
                  : _ <= 0 && 0 == S
                  ? (clearInterval(E),
                    void b.forEach(function (t) {
                      (t.style.opacity = "1"), (t.style.zIndex = "99");
                    }))
                  : (b.forEach(function (t) {
                      (t.style.opacity = Math.max(0, _).toFixed(1)), (t.style.zIndex = "99");
                    }),
                    void (_ -= 0.1));
              }, 50);
          else
            b.forEach(function (t) {
              (t.style.opacity = "1"), (t.style.zIndex = "99");
            });
        }),
        (t.prototype.scrollbarVisible = function (t) {
          return t.scrollHeight > t.clientHeight;
        }),
        (t.prototype.clearHighlightedNodes = function () {
          var t = document.querySelector("#hg-wrap-id");
          t && t.remove();
        }),
        (t.prototype.selectNode = function (t, e) {
          return (
            void 0 === e && (e = {}),
            I(this, void 0, void 0, function () {
              var n;
              return T(this, function (i) {
                return (n = this.getNodeId(t))
                  ? (this.registerNode(t),
                    this.fixedBox && ((this.fixedBox.boxElTagName.innerHTML = this.isImage(n) ? "img" : t.tagName.toLowerCase()), this.setComponentName(this.fixedBox.boxElComponentName, n), this.setBoxPosition(t, this.fixedBox)),
                    (this.selectedNode = t),
                    this.sendNodeData(t, e),
                    [2])
                  : [2];
              });
            })
          );
        }),
        (t.prototype.findParentWithId = function (t) {
          var e = t.parentNode || null;
          return "BODY" == e.tagName ? t : this.getNodeId(e) ? e : this.findParentWithId(e);
        }),
        (t.prototype.afterChange = function () {
          var t = this.getNodeId(this.selectedNode);
          t &&
            ((this.nodes[t].isModifed = !0),
            this.sendNodeData(this.selectedNode, {
              source: "override",
            }),
            this.setBoxPosition(this.selectedNode, this.fixedBox),
            this.resetBox(this.box));
        }),
        (t.prototype.addGlobalCSS = function (t) {
          var e = document.getElementById("overrides-global-css");
          e || ((e = document.createElement("style")).setAttribute("type", "text/css"), e.setAttribute("id", "overrides-global-css"), document.head.appendChild(e)), (e.innerHTML = t), (this.nodes.globalCSS = t);
        }),
        (t.prototype.setHTMLContent = function (t) {
          var e = this.getNodeId(this.selectedNode);
          e && this.selectedNode && ((this.selectedNode.innerHTML = t), (this.nodes[e].htmlContent = t));
        }),
        (t.prototype.setInlineCSS = function (t) {
          var e = this.getNodeId(this.selectedNode);
          e && this.selectedNode && (this.selectedNode.setAttribute("style", t), (this.nodes[e].inlineCSS = t));
        }),
        (t.prototype.ChangeTagName = function (t) {
          var e,
            n,
            i,
            o = this.getNodeId(this.selectedNode);
          if (o && this.selectedNode && this.selectedNode.tagName.toLowerCase() != t.toLowerCase()) {
            for (var s = document.createElement(t), r = 0, a = this.selectedNode.attributes.length; r < a; ++r) {
              var l = null === (e = this.selectedNode.attributes.item(r)) || void 0 === e ? void 0 : e.nodeName,
                c = null === (n = this.selectedNode.attributes.item(r)) || void 0 === n ? void 0 : n.nodeValue;
              null != l && null != c && s.setAttribute(l, c);
            }
            (s.innerHTML = this.selectedNode.innerHTML),
              null === (i = this.selectedNode.parentNode) || void 0 === i || i.replaceChild(s, this.selectedNode),
              (this.selectedNode = s),
              this.fixedBox && (this.fixedBox.boxElTagName.innerHTML = this.selectedNode.tagName.toLowerCase()),
              (this.nodes[o].tagName = t.toLowerCase());
          }
        }),
        (t.prototype.updateOriginalAttribute = function (t) {
          var e = this.getNodeId(this.selectedNode);
          e &&
            this.selectedNode &&
            (this.selectedNode.setAttribute(t.name, t.value),
            (this.nodes[e].originalAttributes = this.nodes[e].originalAttributes.map(function (e) {
              return e.name == t.name
                ? E(E({}, e), {
                    value: t.value,
                  })
                : e;
            })),
            this.nodes[e].updatedOriginalAttributes.push(t));
        }),
        (t.prototype.setCustomAttribute = function (t) {
          var e = this.getNodeId(this.selectedNode);
          if (e && this.selectedNode)
            if (
              (this.selectedNode.setAttribute(t.name, t.value),
              this.nodes[e].customAttributes.find(function (e) {
                return e.name == t.name;
              }))
            ) {
              var n = this.nodes[e].customAttributes
                .map(function (t) {
                  return t.name;
                })
                .indexOf(t.name);
              this.nodes[e].customAttributes[n].value = t.value;
            } else this.nodes[e].customAttributes.push(t);
        }),
        (t.prototype.removeCustomAttribute = function (t) {
          var e = this.getNodeId(this.selectedNode);
          if (e && this.selectedNode) {
            this.selectedNode.removeAttribute(t);
            var n = this.nodes[e].customAttributes
              .map(function (t) {
                return t.name;
              })
              .indexOf(t);
            this.nodes[e].customAttributes.splice(n, 1);
          }
        }),
        (t.prototype.addCustomCssClass = function (t) {
          var e = this.getNodeId(this.selectedNode);
          e && this.selectedNode && (this.selectedNode.classList.add(t), this.nodes[e].customClasses.push(t));
        }),
        (t.prototype.removeCustomCssClass = function (t) {
          var e = this.getNodeId(this.selectedNode);
          if (e && this.selectedNode) {
            this.selectedNode.classList.remove(t);
            var n = this.nodes[e].customClasses.indexOf(t);
            this.nodes[e].customClasses.splice(n, 1);
          }
        }),
        (t.prototype.stripEventsFromNode = function (t) {
          var e = this.getNodeId(t);
          if (e)
            for (var n = [].slice.call(t.attributes), i = 0; i < n.length; i++) {
              var o = n[i].name;
              (0 === o.indexOf("on") || this.listOfInlineEvents.includes(o)) && (this.inlineEventsMap[e] || (this.inlineEventsMap[e] = {}), (this.inlineEventsMap[e][o] = n[i].value), t.attributes.removeNamedItem(o));
            }
        }),
        (t.prototype.restoreAllNodeEvents = function () {
          var t = this;
          Object.keys(this.inlineEventsMap).forEach(function (e) {
            var n = t.getNodeById(e),
              i = t.inlineEventsMap[e];
            n &&
              Object.keys(i).forEach(function (t) {
                n && n.setAttribute(t, i[t]);
              });
          }),
            (this.inlineEventsMap = {});
        }),
        (t.prototype.onMouseOver = function (t) {
          t.ignoreMutations || !1 ? this.onRegularMouseOver(t) : this.onMutatedMouseOver(t);
        }),
        (t.prototype.isObjectEmpty = function (t) {
          return t && 0 === Object.keys(t).length && Object.getPrototypeOf(t) === Object.prototype;
        }),
        (t.prototype.isNodeSelectable = function (t) {
          var e = this.isObjectEmpty(this.selectableLayers),
            n = this.isRootNode(t);
          return !(!e && !n) || this.selectableLayers[t];
        }),
        (t.prototype.onRegularMouseOver = function (t) {
          var e = t.target,
            n = this.getNodeId(e);
          n &&
            (this.isNodeSelectable(n)
              ? (this.box && ((this.box.boxElTagName.innerHTML = this.isImage(n) ? "img" : e.tagName.toLowerCase()), this.setComponentName(this.box.boxElComponentName, n)), this.stripEventsFromNode(e), this.setBoxPosition(e, this.box))
              : e.classList.add("ignore"));
        }),
        (t.prototype.onMutatedMouseOver = function (t) {
          var e = t.target,
            n = this.getNodeId(e);
          if (n)
            if (this.isNodeSelectable(n)) {
              this.box && ((this.box.boxElTagName.innerHTML = this.isImage(n) ? "img" : e.tagName.toLowerCase()), this.setComponentName(this.box.boxElComponentName, n));
              var i = getComputedStyle(e),
                o = parseInt(i.getPropertyValue("border-radius") || "", 10);
              this.stripEventsFromNode(e),
                this.setBoxPosition(e, this.box, {
                  radius: o,
                });
            } else e.classList.add("ignore");
        }),
        (t.prototype.onMouseOut = function () {
          this.resetBox(this.box);
        }),
        (t.prototype.getNodeBorderRadius = function (t) {
          if (!t) return 0;
          var e = getComputedStyle(t);
          return parseInt(e.getPropertyValue("border-radius") || "", 10);
        }),
        (t.prototype.isComponentNode = function (t) {
          return !!t && this.webComponentsIds.includes(t);
        }),
        (t.prototype.isRootNode = function (t, e) {
          var n;
          return (
            !(!e && !t) &&
            (!t && e && (t = this.getNodeId(e)),
            !!t && (e || (e = this.getNodeById(t)), (null === (n = this.modelNodes[t]) || void 0 === n ? void 0 : n.is_root_screen) || Array.from((null == e ? void 0 : e.classList) || []).includes("screen")))
          );
        }),
        (t.prototype.onClick = function (t, e) {
          var n = (void 0 === e ? {} : e).source,
            i = void 0 === n ? "iframe" : n;
          t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault();
          var o = t.target,
            s = this.getNodeId(o);
          s &&
            (this.isNodeSelectable(s)
              ? this.selectNode(o, {
                  source: i,
                })
              : o.classList.add("ignore"));
        }),
        (t.prototype.isElementInViewport = function (t, e) {
          e || (e = t.getBoundingClientRect());
          var n = window.innerWidth || document.documentElement.clientWidth,
            i = window.innerHeight || document.documentElement.clientHeight,
            o = function (t, e) {
              return document.elementFromPoint(t, e);
            };
          return !(e.right < 0 || e.bottom < 0 || e.left > n || e.top > i) && (t.contains(o(e.left, e.top)) || t.contains(o(e.right, e.top)) || t.contains(o(e.right, e.bottom)) || t.contains(o(e.left, e.bottom)));
        }),
        (t.prototype.scrollToElement = function (t, e) {
          var n = void 0 === e ? {} : e,
            i = n.center,
            o = void 0 !== i && i,
            s = n.viewport,
            r = void 0 !== s && s;
          if (t) {
            var a = t.getBoundingClientRect();
            if (!r || !this.isElementInViewport(t, a)) {
              var l = o ? (window.innerHeight - a.height / 2) / 2 : 100,
                c = Math.max(0, a.top + window.pageYOffset - l);
              window.scroll({
                top: c,
                behavior: "smooth",
              });
            }
          }
        }),
        (t.prototype.selectNodeById = function (t) {
          var e = t.nodeId,
            n = t.metadata || {
              scrollIntoView: !0,
              source: "client",
            },
            i = this.getNodeById(e);
          i && (n.scrollIntoView && this.scrollToElement(i), this.selectNode(i, n));
        }),
        (t.prototype.addDocumentListeners = function () {
          document.addEventListener("mouseover", this.onMouseOver), document.addEventListener("mouseout", this.onMouseOut), document.addEventListener("click", this.onClick);
        }),
        (t.prototype.addWindowListeners = function () {
          window.addEventListener("resize", this.updateBoxesPosition, !1);
        }),
        (t.prototype.removeDocumentListeners = function () {
          document.removeEventListener("mouseover", this.onMouseOver), document.removeEventListener("mouseout", this.onMouseOut), document.removeEventListener("click", this.onClick);
        }),
        (t.prototype.removeWindowListeners = function () {
          window.removeEventListener("resize", this.updateBoxesPosition, !1);
        }),
        (t.prototype.applyOverrides = function (t) {
          var e = this;
          t.globalCSS && this.addGlobalCSS(t.globalCSS);
          var n = 0;
          Object.keys(t).forEach(function (i) {
            if ("globalCSS" != i) {
              n++;
              var o = t[i],
                s = document.querySelector("[data-id='" + i + "']");
              if (s) {
                e.selectedNode = s;
                var r = j(s.attributes).map(function (t) {
                    return {
                      name: t.name,
                      value: t.value,
                    };
                  }),
                  a = [],
                  l = [],
                  c = o.customClasses ? o.customClasses : [],
                  d = o.tagName ? o.tagName : s.tagName.toLocaleUpperCase(),
                  h = o.inlineCSS ? o.inlineCSS : "",
                  u = o.htmlContent ? o.htmlContent : "";
                if (
                  ((e.nodes[i] = {
                    isModifed: !0,
                    tagName: d,
                    customClasses: [],
                    customAttributes: a,
                    originalAttributes: l,
                    htmlContent: u,
                    inlineCSS: h,
                    updatedOriginalAttributes: [],
                    textContent: "",
                  }),
                  o.customAttributes)
                ) {
                  var p = [];
                  Object.keys(o.customAttributes).forEach(function (t) {
                    p.push({
                      name: t,
                      value: o.customAttributes[t],
                    });
                  }),
                    (a = j(p));
                }
                var f = a.map(function (t) {
                  return t.name;
                });
                (l = r.filter(function (t) {
                  return !f.includes(t.name);
                })),
                  (e.nodes[i].customAttributes = a),
                  (e.nodes[i].originalAttributes = l),
                  o.originalAttributes &&
                    Object.keys(o.originalAttributes).forEach(function (t) {
                      e.updateOriginalAttribute({
                        name: t,
                        value: o.originalAttributes[t],
                      });
                    }),
                  a.forEach(function (t) {
                    e.setCustomAttribute(t);
                  }),
                  c.forEach(function (t) {
                    e.addCustomCssClass(t);
                  }),
                  e.setHTMLContent(u),
                  e.setInlineCSS(h),
                  e.ChangeTagName(d);
              }
            }
          }),
            console.log(n + " element overrides processed");
        }),
        (t = O([U.Service(), L("design:paramtypes", [])], t))
      );
    })(),
    Qt = (function () {
      function t() {
        (this.nodes = {}),
          (this.links = document.querySelectorAll("a")),
          (this.linksMap = []),
          (this.selectedNode = null),
          (this.isActivated = !1),
          (this.onMouseOver = this.onMouseOver.bind(this)),
          (this.onMouseOut = this.onMouseOut.bind(this)),
          (this.onClick = this.onClick.bind(this)),
          (this.resetAllBoxes = this.resetAllBoxes.bind(this)),
          (this.updateBoxesPosition = this.updateBoxesPosition.bind(this)),
          (this.fixedBox = null),
          (this.box = null),
          this.storeLinks();
      }
      return (
        (t.prototype.createBox = function (t) {
          var e = (void 0 === t ? {} : t).className,
            n = void 0 === e ? "" : e,
            i = document.createElement("div");
          i.setAttribute("id", "comment-box-" + n), i.setAttribute("data-turbo-permanent", "true"), i.classList.add("comment-box");
          var o = document.createElement("div");
          o.classList.add("comment-box-wrapper");
          var s = document.createElement("div");
          return (
            s.classList.add("comment-box-tag"),
            o.appendChild(s),
            i.appendChild(o),
            document.body.appendChild(i),
            {
              boxEl: i,
              boxWrapper: o,
              boxElTag: s,
              boxElComponentName: null,
              boxElTagName: null,
            }
          );
        }),
        (t.prototype.storeLinks = function () {
          for (var t = 0; t < this.links.length; t++) {
            var e = this.links[t];
            this.linksMap.push(e.getAttribute("href") || "");
          }
        }),
        (t.prototype.setBoxPosition = function (t, e) {
          if (t && e) {
            var n = t.getBoundingClientRect(),
              i = window.pageXOffset || window.document.documentElement.scrollLeft,
              o = window.pageYOffset || window.document.documentElement.scrollTop;
            e.boxEl &&
              Object.assign(e.boxEl.style, {
                width: t.offsetWidth + "px",
                height: t.offsetHeight + "px",
                top: Math.max(0, n.y + o) + "px",
                left: Math.max(0, n.x + i) + "px",
                display: "block",
              });
          }
        }),
        (t.prototype.addStyles = function () {
          if (!document.querySelector("#comments-styles")) {
            var t = document.createElement("style");
            t.setAttribute("id", "comments-styles"),
              (t.innerHTML =
                '\n.comment-box {\n  position: absolute;\n  border: 1px solid #ff6250;\n  background: rgba(255, 98, 80,0.1);\n  pointer-events: none;\n  box-sizing: border-box;\n  top:-20px;\n  left:-20px;\n}\n.comment-box-wrapper {\n  width:100%;\n  height:100%;\n  position:relative\n}\n.comment-box-tag {\n  position: absolute;\n  left: 0;\n  top: -20px;\n  height: 20px;\n  width: auto;\n  padding: 0px 8px;\n  background:#ff6250;\n  color:#fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family:-apple-system, BlinkMacSystemFont, "Open Sans",sans-serif;\n  font-weight:600;\n  font-size:14px;\n}\n.comment-number{\n  position: absolute;\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: cornflowerblue;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 600;\n  font-family:sans-serif;\n}\n'),
              document.head.appendChild(t);
          }
        }),
        (t.prototype.removeStyles = function () {
          var t = document.querySelector("#comments-styles");
          t && t.remove();
        }),
        (t.prototype.resetBox = function (t) {
          t &&
            Object.assign(t.boxEl.style, {
              width: "0",
              height: "0",
              top: "-20px",
              left: "-20px",
            });
        }),
        (t.prototype.destroyBox = function (t) {
          t && t.boxEl.remove();
        }),
        (t.prototype.resetAllBoxes = function () {
          this.resetBox(this.box), this.resetBox(this.fixedBox);
        }),
        (t.prototype.destroyAllBoxes = function () {
          this.destroyBox(this.box), this.destroyBox(this.fixedBox);
        }),
        (t.prototype.getNodeId = function (t) {
          return t.getAttribute("data-id");
        }),
        (t.prototype.createAllBoxes = function () {
          (this.box = this.createBox({
            className: "hover",
          })),
            (this.fixedBox = this.createBox({
              className: "fixed",
            }));
        }),
        (t.prototype.activate = function () {
          this.isActivated ||
            (console.log("co-activate"),
            document.body.setAttribute("mode", "comments"),
            this.createAllBoxes(),
            this.addStyles(),
            this.disableLinks(),
            this.addDocumentListeners(),
            this.addWindowListeners(),
            (this.isActivated = !0),
            parent.postMessage(
              {
                action: "comments-activated",
              },
              "*"
            ));
        }),
        (t.prototype.deactivate = function () {
          this.isActivated &&
            (console.log("co-deactivate"),
            document.body.removeAttribute("mode"),
            this.removeStyles(),
            this.enableLinks(),
            this.destroyAllBoxes(),
            this.removeCircles(),
            this.removeDocumentListeners(),
            this.removeWindowListeners(),
            (this.isActivated = !1));
        }),
        (t.prototype.onMouseOver = function (t) {
          this.getNodeId(t.target) && ((this.box.boxElTag.innerHTML = t.target.tagName.toLowerCase()), this.setBoxPosition(t.target, this.box));
        }),
        (t.prototype.onMouseOut = function () {
          this.resetBox(this.box);
        }),
        (t.prototype.onClick = function (t) {
          var e = t.target;
          e.attributes, t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault(), this.selectNode(e);
        }),
        (t.prototype.selectNode = function (t, e) {
          void 0 === e && (e = {});
          var n = this.getNodeId(t);
          n &&
            this.fixedBox &&
            ((this.fixedBox.boxElTag.innerHTML = t.tagName.toLowerCase()),
            this.setBoxPosition(t, this.fixedBox),
            this.nodes[n] ||
              (this.nodes[n] = {
                id: n,
                number: 0,
                tagName: t.tagName.toLowerCase(),
              }),
            (this.selectedNode = t),
            this.sendNodeData(t, e));
        }),
        (t.prototype.disableLinks = function () {
          for (var t = 0; t < this.links.length; t++) {
            this.links[t].removeAttribute("href");
          }
        }),
        (t.prototype.enableLinks = function () {
          for (var t = 0; t < this.links.length; t++) {
            this.links[t].setAttribute("href", this.linksMap[t]);
          }
        }),
        (t.prototype.getNodePath = function () {
          return G(this.selectedNode);
        }),
        (t.prototype.sendNodeData = function (t, e) {
          void 0 === e && (e = {});
          var n = this.getNodeId(t);
          if (n) {
            var i = {
              id: n,
              tagName: this.nodes[n].tagName,
              number: this.nodes[n].number,
              path: this.getNodePath(),
              textContent: t.innerText || t.textContent || "",
            };
            parent.postMessage(
              {
                action: "comment-node-change",
                data: i,
                info: e,
              },
              "*"
            );
          }
        }),
        (t.prototype.removeCircles = function () {
          var t,
            e,
            n = document.querySelectorAll(".comment-number");
          try {
            for (var i = B(n), o = i.next(); !o.done; o = i.next()) {
              var s = o.value;
              s.parentNode && s.parentNode.removeChild(s);
            }
          } catch (e) {
            t = {
              error: e,
            };
          } finally {
            try {
              o && !o.done && (e = i.return) && e.call(i);
            } finally {
              if (t) throw t.error;
            }
          }
        }),
        (t.prototype.handleCommentDataReceived = function (t) {
          console.log(t);
        }),
        (t.prototype.getNodebyId = function (t) {
          return document.querySelector('[data-id="' + t + '"]');
        }),
        (t.prototype.highlightComment = function (t) {
          var e = t.nodeId,
            n = A(t, ["nodeId"]),
            i = this.getNodebyId(e);
          i
            ? (i.scrollIntoView({
                behavior: "smooth",
                block: "center",
              }),
              this.selectNode(
                i,
                E(
                  {
                    simulation: !0,
                  },
                  n
                )
              ))
            : console.log("node not found");
        }),
        (t.prototype.updateBoxesPosition = function () {
          this.setBoxPosition(this.selectedNode, this.fixedBox), this.resetBox(this.box);
        }),
        (t.prototype.addDocumentListeners = function () {
          document.addEventListener("mouseover", this.onMouseOver), document.addEventListener("mouseout", this.onMouseOut), document.addEventListener("click", this.onClick);
        }),
        (t.prototype.removeDocumentListeners = function () {
          document.removeEventListener("mouseover", this.onMouseOver), document.removeEventListener("mouseout", this.onMouseOut), document.removeEventListener("click", this.onClick);
        }),
        (t.prototype.addWindowListeners = function () {
          window.addEventListener("resize", this.updateBoxesPosition, !1);
        }),
        (t.prototype.removeWindowListeners = function () {
          window.removeEventListener("resize", this.updateBoxesPosition, !1);
        }),
        (t = O([U.Service(), L("design:paramtypes", [])], t))
      );
    })(),
    Kt = S(function (t, e) {
      void 0 !== _ || _.window || _.global,
        (t.exports = (function () {
          function t(t, e) {
            var n = [];
            return (
              e.forEach(function (e) {
                (e = Math.hypot(e.rect.x1 - parseInt(t.clientX), e.rect.y1 - parseInt(t.clientY))), n.push(parseInt(e));
              }),
              e[n.indexOf(Math.min.apply(Math, n))].node
            );
          }
          function e(t, n) {
            return t && t !== document.documentElement && (n(t) ? t : e(t.parentNode, n));
          }
          function n(t) {
            return "[object Object]" === Object.prototype.toString.call(t);
          }
          function i(t) {
            return Array.isArray(t) || t instanceof HTMLCollection || t instanceof NodeList;
          }
          function o(t, e) {
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var s = e[i];
                s && n(s) ? ((t[i] = t[i] || {}), o(t[i], s)) : (t[i] = s);
              }
            return t;
          }
          function s(t, e) {
            var i = t.style;
            if (t) {
              if (void 0 === e) return window.getComputedStyle(t);
              if (n(e)) for (var o in e) o in i || (o = "-webkit-" + o), (t.style[o] = e[o] + ("string" == typeof e[o] || "opacity" === o ? "" : "px"));
            }
          }
          function r(t) {
            var e = window;
            t = t.getBoundingClientRect();
            var n = document.documentElement || document.body.parentNode || document.body,
              i = void 0 !== e.pageXOffset ? e.pageXOffset : n.scrollLeft;
            return (
              (e = void 0 !== e.pageYOffset ? e.pageYOffset : n.scrollTop),
              {
                x1: t.left + i,
                x2: t.left + t.width + i,
                y1: t.top + e,
                y2: t.top + t.height + e,
                height: t.height,
                width: t.width,
              }
            );
          }
          function a(t, e, n) {
            var i;
            return function () {
              if (((n = n || this), !i))
                return (
                  t.apply(n, arguments),
                  (i = !0),
                  setTimeout(function () {
                    i = !1;
                  }, e)
                );
            };
          }
          var l = "classList" in document.documentElement,
            c = {
              add: function (t, e) {
                l ? t.classList.add(e) : c.contains(t, e) || (t.className = t.className.trim() + " " + e);
              },
              remove: function (t, e) {
                l ? t.classList.remove(e) : c.contains(t, e) && (t.className = t.className.replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)", "gi"), " "));
              },
              contains: function (t, e) {
                if (t) return l ? t.classList.contains(e) : !!t.className && !!t.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"));
              },
            },
            d = function (t) {
              return !!t.ctrlKey || !!t.metaKey;
            },
            h = ["x", "y"],
            u = {
              x: "x1",
              y: "y1",
            },
            p = {
              x: "x2",
              y: "y2",
            },
            f = function (t) {
              (this.version = "0.17.8"),
                (this.v = this.version.split(".").map(function (t) {
                  return parseInt(t, 10);
                })),
                (this.touch = "ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch)),
                this.init(t);
            };
          return (
            (f.prototype = {
              init: function (t) {
                var e = this;
                (this.config = o(
                  {
                    filter: ".ui-selectable",
                    tolerance: "touch",
                    appendTo: document.body,
                    touch: !0,
                    toggleTouch: !0,
                    toggle: !1,
                    autoRefresh: !0,
                    throttle: 50,
                    lassoSelect: "normal",
                    autoScroll: {
                      threshold: 0,
                      increment: 10,
                    },
                    saveState: !1,
                    ignore: !1,
                    maxSelectable: !1,
                    lasso: {
                      border: "1px dotted #000",
                      backgroundColor: "rgba(52, 152, 219, 0.2)",
                    },
                    keys: ["shiftKey", "ctrlKey", "metaKey", ""],
                    classes: {
                      lasso: "ui-lasso",
                      selected: "ui-selected",
                      container: "ui-container",
                      selecting: "ui-selecting",
                      selectable: "ui-selectable",
                      deselecting: "ui-deselecting",
                    },
                  },
                  t
                )),
                  (this.origin = {
                    x: 0,
                    y: 0,
                  }),
                  (this.mouse = {
                    x: 0,
                    y: 0,
                  });
                var r = this.config;
                (this.autoscroll = n(r.autoScroll)),
                  (this.lasso = !1),
                  r.lasso &&
                    n(r.lasso) &&
                    ((this.lasso = document.createElement("div")),
                    (this.lasso.className = r.classes.lasso),
                    s(
                      this.lasso,
                      o(
                        {
                          position: "absolute",
                          boxSizing: "border-box",
                          opacity: 0,
                        },
                        r.lasso
                      )
                    )),
                  this.touch && (r.toggle = r.toggleTouch),
                  r.touch || (this.touch = !1),
                  (this.events = {}),
                  (e = this),
                  "_start _touchstart _drag _end _keyup _keydown _blur _focus".split(" ").forEach(function (t) {
                    e.events[t] = e[t].bind(e);
                  }),
                  (this.events._refresh = a(this.refresh, r.throttle, this)),
                  this.autoscroll && (this.events._scroll = this._onScroll.bind(this)),
                  this.setContainer(),
                  (this.scroll = {
                    x: this.bodyContainer ? window.pageXOffset : this.container.scrollLeft,
                    y: this.bodyContainer ? window.pageYOffset : this.container.scrollTop,
                  }),
                  i(r.filter) ? (this.nodes = [].slice.call(r.filter)) : "string" == typeof r.filter && (this.nodes = [].slice.call(this.container.querySelectorAll(r.filter))),
                  this.nodes.forEach(function (t) {
                    c.add(t, r.classes.selectable);
                  }),
                  this.update(),
                  this.enable(),
                  setTimeout(function () {
                    r.saveState && e.state("save"), e.emit(15 > e.v[1] ? "selectable.init" : "init");
                  }, 10);
              },
              update: function () {
                this._loadItems(), this.refresh(), this.emit(15 > this.v[1] ? "selectable.update" : "update", this.items);
              },
              refresh: function () {
                var t = window.innerWidth,
                  e = window.innerHeight,
                  n = this.bodyContainer ? window.pageXOffset : this.container.scrollLeft,
                  i = this.bodyContainer ? window.pageYOffset : this.container.scrollTop;
                for (
                  this.offsetWidth = this.container.offsetWidth,
                    this.offsetHeight = this.container.offsetHeight,
                    this.clientWidth = this.container.clientWidth,
                    this.clientHeight = this.container.clientHeight,
                    this.scrollWidth = this.container.scrollWidth,
                    this.scrollHeight = this.container.scrollHeight,
                    this.boundingRect = r(this.container),
                    this.bodyContainer && ((this.boundingRect.x2 = t), (this.boundingRect.y2 = e)),
                    this.scroll = {
                      x: n,
                      y: i,
                      max: {
                        x: this.scrollWidth - (this.bodyContainer ? t : this.clientWidth),
                        y: this.scrollHeight - (this.bodyContainer ? e : this.clientHeight),
                      },
                      size: {
                        x: this.clientWidth,
                        y: this.clientHeight,
                      },
                      scrollable: {
                        x: this.scrollWidth > this.offsetWidth,
                        y: this.scrollHeight > this.offsetHeight,
                      },
                    },
                    t = 0;
                  t < this.nodes.length;
                  t++
                )
                  this.items[t].rect = r(this.nodes[t]);
                this.emit(15 > this.v[1] ? "selectable.refresh" : "refresh");
              },
              bind: function () {
                var t = this.events;
                this.unbind(),
                  this.touch
                    ? (this.on(this.container, "touchstart", t._touchstart), this.on(document, "touchend", t._end), this.on(document, "touchcancel", t._end), !1 !== this.lasso && this.on(document, "touchmove", t._drag))
                    : (this.on(this.container, "mousedown", t._start),
                      this.on(document, "mouseup", t._end),
                      this.on(document, "keydown", t._keydown),
                      this.on(document, "keyup", t._keyup),
                      this.on(this.container, "mouseenter", t._focus),
                      this.on(this.container, "mouseover", t._focus),
                      this.on(this.container, "mouseleave", t._blur),
                      !1 !== this.lasso && this.on(document, "mousemove", t._drag)),
                  this.autoscroll && this.on(this.bodyContainer ? window : this.container, "scroll", t._scroll),
                  this.on(window, "resize", t._refresh),
                  this.on(window, "scroll", t._refresh);
              },
              unbind: function () {
                var t = this.events;
                this.off(this.container, "mousedown", t._start),
                  this.off(document, "mousemove", t._drag),
                  this.off(document, "mouseup", t._end),
                  this.off(document, "keydown", t._keydown),
                  this.off(document, "keyup", t._keyup),
                  this.off(this.container, "mouseenter", t._focus),
                  this.off(this.container, "mouseleave", t._blur),
                  this.autoscroll && this.off(this.bodyContainer ? window : this.container, "scroll", t._scroll),
                  this.off(this.container, "touchstart", t._start),
                  this.off(document, "touchend", t._end),
                  this.off(document, "touchcancel", t._end),
                  this.off(document, "touchmove", t._drag),
                  this.off(window, "resize", t._refresh),
                  this.off(window, "scroll", t._refresh);
              },
              setContainer: function (t) {
                var e = this.config;
                if (this.container) {
                  var n = this.container;
                  this.unbind();
                }
                "string" == typeof (t = t || e.appendTo) ? (this.container = document.querySelector(t)) : t instanceof Element && t.nodeName && (this.container = t),
                  c.add(this.container, e.classes.container),
                  (this.container._selectable = this),
                  n && (c.remove(n, e.classes.container), delete n._selectable),
                  (this.bodyContainer = this.container === document.body),
                  this._loadItems(),
                  this.autoscroll && "static" === s(this.container).position && !this.bodyContainer && (this.container.style.position = "relative"),
                  this.bind();
              },
              select: function (t, e, n) {
                if (((e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]), (n = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2]), i(t))) {
                  for (var o = this.getSelectedItems().length, s = 0; s < t.length && !(this.config.maxSelectable && o >= this.config.maxSelectable); s++) this.select(t[s], !1, !1), o++;
                  return n && this.config.saveState && this.state("save"), this.getSelectedItems();
                }
                return (
                  !!(t = this.get(t)) &&
                  (this.config.toggle && "drag" === this.config.toggle && !e && t.selected && !this.cmdDown
                    ? this.deselect(t, !1)
                    : ((o = t.node),
                      (s = this.config.classes),
                      c.remove(o, s.selecting),
                      c.add(o, s.selected),
                      (t.selecting = !1),
                      (t.selected = !0),
                      (t.startselected = !0),
                      n && this.config.saveState && this.state("save"),
                      this.emit(15 > this.v[1] ? "selectable.select" : "selecteditem", t),
                      t))
                );
              },
              deselect: function (t, e) {
                if (i(t)) {
                  for (var n = 0; n < t.length; n++) this.deselect(t[n], !1);
                  return e && this.config.saveState && this.state("save"), this.getSelectedItems();
                }
                if ((t = this.get(t))) {
                  n = t.node;
                  var o = this.config.classes;
                  return (
                    (t.selecting = !1),
                    (t.selected = !1),
                    (t.deselecting = !1),
                    (t.startselected = !1),
                    c.remove(n, o.deselecting),
                    c.remove(n, o.selecting),
                    c.remove(n, o.selected),
                    e && this.config.saveState && this.state("save"),
                    this.emit(15 > this.v[1] ? "selectable.deselect" : "deselecteditem", t),
                    t
                  );
                }
                return !1;
              },
              toggle: function (t) {
                if ((t = this.get(t))) {
                  i(t) || (t = [t]);
                  for (var e = 0; e < t.length; e++) t[e].selected ? this.deselect(t[e], !1) : this.select(t[e], !1, !1);
                  this.config.saveState && this.state("save");
                }
              },
              add: function (t) {
                var e = [];
                "string" == typeof t && (t = [].slice.call(this.container.querySelectorAll(t))), i(t) || (t = [t]);
                for (var n = 0; n < t.length; n++) 0 > this.nodes.indexOf(t[n]) && t[n] instanceof Element && (e.push(t[n]), c.add(t[n], this.config.classes.selectable));
                for (this.nodes = this.nodes.concat(e), this.update(), n = 0; n < e.length; n++) this.emit("addeditem", this.get(e[n]));
              },
              remove: function (t, e) {
                if ((t = this.get(t))) {
                  if (i(t)) for (var n = t.length - 1; 0 <= n; n--) this.remove(t[n], 0 < n);
                  else {
                    n = t.node;
                    var o = this.config.classes,
                      s = c.remove;
                    s(n, o.selectable), s(n, o.deselecting), s(n, o.selecting), s(n, o.selected), this.nodes.splice(this.nodes.indexOf(t.node), 1), this.emit("removeditem", t);
                  }
                  return e || this.update(), !0;
                }
                return !1;
              },
              selectAll: function () {
                if (this.config.maxSelectable && this.config.maxSelectable < this.items.length) return this._maxReached();
                for (var t = 0; t < this.items.length; t++) this.select(this.items[t], !0, !1);
                this.config.saveState && this.state("save");
              },
              invert: function () {
                var t = this.getItems();
                if (this.config.maxSelectable && this.config.maxSelectable < t.length) return this._maxReached();
                for (t = 0; t < this.items.length; t++) {
                  var e = this.items[t];
                  e.selected ? this.deselect(e, !1) : this.select(e, !1, !1);
                }
                this.config.saveState && this.state("save");
              },
              clear: function (t) {
                t = !(0 < arguments.length && void 0 !== arguments[0]);
                for (var e = this.items.length - 1; 0 <= e; e--) this.deselect(this.items[e], !1);
                t && this.config.saveState && this.state("save");
              },
              get: function (t) {
                var e = !1;
                if (("string" == typeof t && (t = [].slice.call(this.container.querySelectorAll(t))), i(t))) {
                  e = [];
                  for (var o = 0; o < t.length; o++) {
                    var s = this.get(t[o]);
                    s && e.push(s);
                  }
                } else isNaN(t) ? (t instanceof Element ? (e = this.items[this.nodes.indexOf(t)]) : n(t) && 0 <= this.items.indexOf(t) && (e = t)) : 0 <= this.items.indexOf(this.items[t]) && (e = this.items[t]);
                return e;
              },
              getItems: function () {
                return this.items;
              },
              getNodes: function () {
                return this.nodes;
              },
              getSelectedItems: function (t) {
                return this.getItems().filter(function (e) {
                  return t ? !e.selected : e.selected;
                });
              },
              getSelectedNodes: function () {
                return this.getSelectedItems().map(function (t) {
                  return t.node;
                });
              },
              state: function (t) {
                var e = !1,
                  n = !1;
                switch (t) {
                  case "save":
                    (this.states = this.states || []),
                      this.states.push(this.getSelectedNodes()),
                      (n = this.config.saveState),
                      (n = "isInteger" in Number ? Number.isInteger(n) : !isNaN(n)) && this.states.length > this.config.saveState && this.states.shift(),
                      (this.currentState = this.states.length - 1),
                      (n = !0);
                    break;
                  case "undo":
                    0 < this.currentState && (this.currentState--, (n = e = !0));
                    break;
                  case "redo":
                    this.currentState < this.states.length - 1 && (this.currentState++, (n = e = !0));
                    break;
                  case "clear":
                    (this.states = []), (this.currentState = !1);
                }
                e && (this.clear(!1), this.select(this.states[this.currentState], !1, !1)), n && this.emit((15 > this.v[1] ? "selectable.state." : "state.") + t, this.states[this.currentState], this.states);
              },
              enable: function () {
                if (!this.enabled) {
                  var t = this.config.keys;
                  (this.enabled = !0),
                    (this.canShift = 0 <= t.indexOf("shiftKey")),
                    (this.canCtrl = 0 <= t.indexOf("ctrlKey")),
                    (this.canMeta = 0 <= t.indexOf("metaKey")),
                    this.bind(),
                    c.add(this.container, this.config.classes.container),
                    this.emit(15 > this.v[1] ? "selectable.enable" : "enabled");
                }
                return this.enabled;
              },
              disable: function () {
                return this.enabled && ((this.enabled = !1), this.unbind(), c.remove(this.container, this.config.classes.container), this.emit(15 > this.v[1] ? "selectable.disable" : "disabled")), this.enabled;
              },
              destroy: function () {
                this.disable(), (this.listeners = !1), this.clear(), this.state("clear"), this.remove(this.items), (this.events = null);
              },
              on: function (t, e, n) {
                "string" == typeof t ? ((this.listeners = this.listeners || {}), (this.listeners[t] = this.listeners[t] || []), this.listeners[t].push(e)) : t.addEventListener(e, n, !1);
              },
              off: function (t, e, n) {
                "string" == typeof t ? ((this.listeners = this.listeners || {}), 0 != t in this.listeners && this.listeners[t].splice(this.listeners[t].indexOf(e), 1)) : t.removeEventListener(e, n);
              },
              emit: function (t) {
                if (((this.listeners = this.listeners || {}), 0 != t in this.listeners)) for (var e = 0; e < this.listeners[t].length; e++) this.listeners[t][e].apply(this, Array.prototype.slice.call(arguments, 1));
              },
              _maxReached: function () {
                return this.emit("maxitems");
              },
              _touchstart: function (t) {
                this.off(this.container, "mousedown", this.events.start), this._start(t);
              },
              _start: function (n) {
                var i,
                  o = this,
                  s = this._getEvent(n),
                  r = this.config,
                  a = d(n) && (this.canCtrl || this.canMeta),
                  l = this.canShift && !!n.shiftKey,
                  h = this.getSelectedItems().length,
                  u = r.maxSelectable;
                if (u && h >= u && (a || l)) return this._maxReached();
                if (!(!this.container.contains(n.target) || 3 === n.which || 0 < n.button || r.disabled)) {
                  if ((this.scroll.scrollable.y && s.pageX > this.boundingRect.x1 + this.scroll.size.x) || (this.scroll.scrollable.x && s.pageY > this.boundingRect.y1 + this.scroll.size.y)) return !1;
                  if (this.config.ignore) {
                    h = !1;
                    var p = this.config.ignore;
                    for (Array.isArray(p) || (p = [p]), u = 0; u < p.length; u++)
                      if (n.target.closest(p[u])) {
                        h = !0;
                        break;
                      }
                    if (h) return !1;
                  }
                  if (
                    !(h = e(n.target, function (t) {
                      return t === o.container || c.contains(t, r.classes.selectable);
                    }))
                  )
                    return !1;
                  if (
                    (-1 === ["INPUT", "SELECT", "BUTTON", "TEXTAREA", "OPTION"].indexOf(n.target.tagName) && n.preventDefault(),
                    (this.dragging = !0),
                    (this.origin = {
                      x: s.pageX + (this.bodyContainer ? 0 : this.scroll.x),
                      y: s.pageY + (this.bodyContainer ? 0 : this.scroll.y),
                      scroll: {
                        x: this.scroll.x,
                        y: this.scroll.y,
                      },
                    }),
                    this.lasso && this.container.appendChild(this.lasso),
                    h !== this.container ? (((s = this.get(h)).selecting = !0), c.add(h, r.classes.selecting)) : "sequential" == r.lassoSelect && (h = t(s, this.items)),
                    r.autoRefresh && this.refresh(),
                    l && this.startEl && h !== this.container)
                  ) {
                    u = this.items;
                    for (var f = (s = this.getNodes().indexOf(h)) < (p = this.getNodes().indexOf(this.startEl)) ? 1 : -1; (s += f) && s !== p; ) u[s].selecting = !0;
                  }
                  for (u = 0; u < this.items.length; u++)
                    (f = (p = (s = this.items[u]).node) === h),
                      s.selected && ((s.startselected = !0), (r.toggle || a ? !f : f || l) || (c.remove(p, r.classes.selected), (s.selected = !1), c.add(p, r.classes.deselecting), (s.deselecting = !0))),
                      f && (i = s);
                  (this.startEl = h), this.emit(15 > this.v[1] ? "selectable.start" : "start", n, i);
                }
              },
              _drag: function (t) {
                var e = this.config;
                if (!(e.disabled || !this.dragging || (t.shiftKey && this.canShift))) {
                  var n = this._getEvent(t);
                  d(t),
                    (this.mouse = {
                      x: n.pageX,
                      y: n.pageY,
                    }),
                    (this.current = {
                      x1: this.origin.x,
                      y1: this.origin.y,
                      x2: this.mouse.x + (this.bodyContainer ? 0 : this.scroll.x),
                      y2: this.mouse.y + (this.bodyContainer ? 0 : this.scroll.y),
                    });
                  for (var i = 0; i < h.length; i++) {
                    var o = h[i];
                    if (this.current[u[o]] > this.current[p[o]]) {
                      var r = this.current[p[o]];
                      (this.current[p[o]] = this.current[u[o]]), (this.current[u[o]] = r);
                    }
                  }
                  if (
                    ((this.coords = {
                      x1: this.current.x1,
                      x2: this.current.x2 - this.current.x1,
                      y1: this.current.y1,
                      y2: this.current.y2 - this.current.y1,
                    }),
                    "normal" === e.lassoSelect)
                  )
                    for (i = 0; i < this.items.length; i++) this._highlight(this.items[i], d(t) && (this.canCtrl || this.canMeta), n);
                  else "sequential" === e.lassoSelect && this._sequentialSelect(n);
                  this.autoscroll && (this.bodyContainer || ((this.coords.x1 -= this.boundingRect.x1), (this.coords.y1 -= this.boundingRect.y1)), this._autoScroll()),
                    this.lasso &&
                      (this.bodyContainer || !this.autoscroll || this.config.autoScroll.lassoOverflow || this._limitLasso(),
                      s(this.lasso, {
                        left: this.coords.x1,
                        top: this.coords.y1,
                        width: this.coords.x2,
                        height: this.coords.y2,
                        opacity: 1,
                      })),
                    this.emit(15 > this.v[1] ? "selectable.drag" : "drag", t, this.coords);
                }
              },
              _end: function (t) {
                if (this.dragging) {
                  this.dragging = !1;
                  var n = this.config,
                    i = t.target,
                    o = this._getEvent(t),
                    r = [],
                    a = [],
                    l = this.getSelectedItems().length,
                    d = n.maxSelectable;
                  this.lasso && this.container.contains(this.lasso) && this.container.removeChild(this.lasso),
                    this.lasso &&
                      (s(this.lasso, {
                        opacity: 0,
                        left: 0,
                        width: 0,
                        top: 0,
                        height: 0,
                      }),
                      (i = document.elementFromPoint(o.pageX, o.pageY)) || (i = this.container)),
                    (i = e(i, function (t) {
                      return c.contains(t, n.classes.selectable);
                    })),
                    (o = !1);
                  for (var h = 0; h < this.items.length; h++) {
                    var u = this.items[h];
                    n.toggle && u.node === i && u.node === this.startEl && u.selecting && u.startselected && ((u.deselecting = !0), (u.selecting = !1)),
                      u.deselecting && (a.push(u), this.deselect(u, !1)),
                      u.selecting && (d && l + r.length >= d ? ((u.selecting = !1), c.remove(u.node, n.classes.selecting), (o = !0)) : (r.push(u), this.select(u, !1, !1)));
                  }
                  if ((n.saveState && this.state("save"), this.emit(15 > this.v[1] ? "selectable.end" : "end", t, r, a), o)) return this._maxReached();
                }
              },
              _keydown: function (t) {
                this.cmdDown = d(t) && (this.canCtrl || this.canMeta);
                var e = !1;
                if ((void 0 !== t.key ? (e = t.key) : void 0 !== t.keyCode && (e = t.keyCode), e))
                  if (this.cmdDown && this.focused)
                    switch (e) {
                      case 65:
                      case "a":
                      case "A":
                        t.preventDefault(), this.selectAll();
                        break;
                      case 89:
                      case "y":
                      case "Y":
                        this.state("redo");
                        break;
                      case 90:
                      case "z":
                      case "Z":
                        this.state("undo");
                    }
                  else
                    switch (e) {
                      case 32:
                      case " ":
                        this.toggle(document.activeElement);
                    }
              },
              _keyup: function (t) {
                this.cmdDown = d(t) && (this.canCtrl || this.canMeta);
              },
              _onScroll: function (t) {
                for (this.scroll.x = this.bodyContainer ? window.pageXOffset : this.container.scrollLeft, this.scroll.y = this.bodyContainer ? window.pageYOffset : this.container.scrollTop, t = 0; t < this.items.length; t++)
                  this.items[t].rect = r(this.items[t].node);
              },
              _loadItems: function () {
                var t,
                  e = this.config;
                if (((this.nodes = [].slice.call(this.container.querySelectorAll("." + e.classes.selectable))), (this.items = []), this.nodes.length))
                  for (var n = 0; n < this.nodes.length; n++) {
                    var i = this.nodes[n];
                    c.add(i, e.classes.selectable);
                    var o = {
                        node: i,
                        rect: r(i),
                        startselected: !1,
                        selected: c.contains(i, e.classes.selected),
                        selecting: c.contains(i, e.classes.selecting),
                        deselecting: c.contains(i, e.classes.deselecting),
                      },
                      s = this._get2DTransformation(i);
                    if (s) {
                      var a = i,
                        l = (t = 0);
                      do {
                        (t += a.offsetTop || 0), (l += a.offsetLeft || 0), (a = a.offsetParent);
                      } while (a);
                      (a = l), (l = s.translate);
                      var d = s.origin,
                        h = s.scale,
                        u = d.x;
                      d = d.y;
                      var p = i.offsetWidth / 2,
                        f = i.offsetHeight / 2,
                        m = t + (f - d) * h + d;
                      for (
                        h = [
                          {
                            x: (i = a + (p - u) * h + u) - (p *= h),
                            y: m - (h *= f),
                          },
                          {
                            x: i + p,
                            y: m - h,
                          },
                          {
                            x: i + p,
                            y: m + h,
                          },
                          {
                            x: i - p,
                            y: m + h,
                          },
                        ],
                          i = 0;
                        3 >= i;
                        i++
                      ) {
                        (m = h), (p = i), (f = h[i].x + l.x);
                        var g = h[i].y + l.y,
                          v = a + u + l.x,
                          y = t + d + l.y,
                          b = s.angle;
                        (b = (b * Math.PI) / 180),
                          (m[p] = {
                            x: Math.cos(b) * (f - v) - Math.sin(b) * (g - y) + v,
                            y: Math.sin(b) * (f - v) + Math.cos(b) * (g - y) + y,
                          });
                      }
                      o.transform = {
                        rect: h,
                      };
                    }
                    this.items.push(o);
                  }
              },
              _getEvent: function (t) {
                return this.touch ? ("touchend" === t.type ? t.changedTouches[0] : t.touches[0]) : t;
              },
              _autoScroll: function () {
                var t = this.config.autoScroll,
                  e = t.increment;
                t = t.threshold;
                var n = {
                  x: 0,
                  y: 0,
                };
                this.bodyContainer && ((this.mouse.x -= this.scroll.x), (this.mouse.y -= this.scroll.y));
                for (var i = 0; i < h.length; i++) {
                  var o = h[i];
                  this.mouse[o] >= this.boundingRect[p[o]] - t && this.scroll[o] < this.scroll.max[o] ? (n[o] = e) : this.mouse[o] <= this.boundingRect[u[o]] + t && 0 < this.scroll[o] && (n[o] = -e);
                }
                this.bodyContainer ? window.scrollBy(n.x, n.y) : ((this.container.scrollTop += n.y), (this.container.scrollLeft += n.x));
              },
              _limitLasso: function () {
                for (var t = 0; t < h.length; t++) {
                  var e = h[t],
                    n = this.boundingRect[u[e]] + this.scroll.size[e];
                  if (this.mouse[e] >= n && this.scroll[e] >= this.scroll.max[e]) {
                    var i = this.origin[e] - this.boundingRect[u[e]] - this.scroll[e];
                    (this.coords[u[e]] = this.origin[e] - this.boundingRect[u[e]]), (this.coords[p[e]] = n - i - this.boundingRect[u[e]]);
                  }
                  this.mouse[e] <= this.boundingRect[u[e]] && 0 >= this.scroll[e] && ((this.coords[u[e]] = 0), (this.coords[p[e]] = this.origin[e] - this.boundingRect[u[e]]));
                }
              },
              _sequentialSelect: function (t) {
                var e = this.config.classes,
                  n = document.elementFromPoint(t.pageX, t.pageY - window.pageYOffset);
                if (n && (n = n.closest("." + e.selectable))) {
                  if (this.mouse.y > this.origin.y)
                    var i = this.nodes.indexOf(this.startEl),
                      o = this.nodes.indexOf(n);
                  else this.mouse.y < this.origin.y && ((i = this.nodes.indexOf(n)), (o = this.nodes.indexOf(this.startEl)));
                  for (n = 0; n < this.items.length; n++) {
                    var s = this.items[n];
                    n >= i && n <= o ? this._highlight(s, d(t) && (this.canCtrl || this.canMeta)) : ((s.selecting = !1), s.node.classList.remove(e.selecting));
                  }
                }
              },
              _highlight: function (t, e, n) {
                n = this.config;
                var i = t.node,
                  o = !1,
                  s = this.bodyContainer ? 0 : this.scroll.x,
                  r = this.bodyContainer ? 0 : this.scroll.y;
                if ("normal" === n.lassoSelect)
                  if ("touch" === n.tolerance)
                    if (t.transform)
                      t: {
                        var a,
                          l,
                          d,
                          h = [
                            (o = [
                              {
                                x: this.origin.x,
                                y: this.origin.y,
                              },
                              {
                                x: this.mouse.x + s,
                                y: this.origin.y,
                              },
                              {
                                x: this.mouse.x + s,
                                y: this.mouse.y + r,
                              },
                              {
                                x: this.origin.x,
                                y: this.mouse.y + r,
                              },
                            ]),
                            (s = t.transform.rect),
                          ];
                        for (r = 0; r < h.length; r++) {
                          var u = h[r];
                          for (a = 0; a < u.length; a++) {
                            var p = u[a],
                              f = u[(a + 1) % u.length],
                              m = f.y - p.y,
                              g = p.x - f.x;
                            for (p = f = void 0, l = 0; l < o.length; l++) {
                              var v = m * o[l].x + g * o[l].y;
                              (void 0 === p || v < p) && (p = v), (void 0 === f || f < v) && (f = v);
                            }
                            var y = (d = void 0);
                            for (l = 0; l < s.length; l++) (v = m * s[l].x + g * s[l].y), (void 0 === y || v < y) && (y = v), (void 0 === d || d < v) && (d = v);
                            if (f < y || d < p) {
                              o = !1;
                              break t;
                            }
                          }
                        }
                        o = !0;
                      }
                    else o = !(t.rect.x1 + s > this.current.x2 || t.rect.x2 + s < this.current.x1 || t.rect.y1 + r > this.current.y2 || t.rect.y2 + r < this.current.y1);
                  else "fit" === n.tolerance && (o = t.rect.x1 + s > this.current.x1 && t.rect.x2 + s < this.current.x2 && t.rect.y1 + r > this.current.y1 && t.rect.y2 + r < this.current.y2);
                else o = !0;
                o
                  ? (t.selected && !n.toggle && (c.remove(i, n.classes.selected), (t.selected = !1)),
                    t.deselecting && (!n.toggle || (n.toggle && "drag" !== n.toggle)) && (c.remove(i, n.classes.deselecting), (t.deselecting = !1)),
                    t.selecting || (c.add(i, n.classes.selecting), (t.selecting = !0)))
                  : (t.selecting &&
                      (c.remove(i, n.classes.selecting),
                      (t.selecting = !1),
                      e && t.startselected ? (c.add(i, n.classes.selected), (t.selected = !0)) : t.startselected && !n.toggle && (c.add(i, n.classes.deselecting), (t.deselecting = !0))),
                    !i.selected || e || t.startselected || (c.remove(i, n.classes.selected), (t.selected = !1), c.add(i, n.classes.deselecting), (t.deselecting = !0)));
              },
              _focus: function (t) {
                (this.focused = !0), c.add(this.container, "ui-focused");
              },
              _blur: function (t) {
                (this.focused = !1), c.remove(this.container, "ui-focused");
              },
              _get2DTransformation: function (t) {
                var e =
                  (t = window.getComputedStyle(t, null)).getPropertyValue("-webkit-transform") ||
                  t.getPropertyValue("-moz-transform") ||
                  t.getPropertyValue("-ms-transform") ||
                  t.getPropertyValue("-o-transform") ||
                  t.getPropertyValue("transform") ||
                  !1;
                if (e && "none" !== e) {
                  e = e.split("(")[1].split(")")[0].split(", ");
                  var n = parseFloat(e[0]),
                    i = parseFloat(e[1]),
                    o = Math.sqrt(n * n + i * i);
                  return (
                    (t = t.transformOrigin.split(" ").map(function (t) {
                      return parseFloat(t);
                    })),
                    {
                      angle: Math.round((180 / Math.PI) * Math.atan2(i, n)),
                      scale: o,
                      origin: {
                        x: parseFloat(t[0]),
                        y: parseFloat(t[1]),
                      },
                      translate: {
                        x: parseFloat(e[4]),
                        y: parseFloat(e[5]),
                      },
                    }
                  );
                }
                return !1;
              },
            }),
            f
          );
        })());
    }),
    $t = (function () {
      function t() {
        (this.isActivated = !1),
          (this.links = document.querySelectorAll("a")),
          (this.linksMap = []),
          (this.selected = []),
          (this.nodes = j(document.querySelectorAll("[data-id]")).filter(function (t) {
            return ["anima-screen", "screen"].every(function (e) {
              return !t.classList.contains(e);
            });
          })),
          this.storeLinks();
      }
      return (
        (t.prototype.activate = function () {
          var t = this;
          this.isActivated ||
            (console.log("multi-select-activate"),
            this.disableLinks(),
            (this.selectableInstance = new Kt({
              filter: j(this.nodes),
              tolerance: "fit",
              autoScroll: {
                threshold: 40,
                increment: 25,
              },
              lasso: {
                border: "2px solid #4285f4",
                borderRadius: "0px",
                backgroundColor: "rgba(66, 133, 244, 0.1)",
              },
            })),
            this.selectableInstance.on("start", function () {
              parent.postMessage(
                {
                  action: "multi-selection-start",
                },
                "*"
              );
            }),
            this.selectableInstance.on("end", function () {
              var e,
                n = t.selectableInstance.items.reduce(function (e, n) {
                  if (n.selected) {
                    var i = E(E({}, n), {
                      node: t.getNodeId(n.node),
                    });
                    e.push(i);
                  }
                  return e;
                }, []),
                i = t.selectableInstance.items.reduce(function (t, e) {
                  return e.selected && t.push(e.node), t;
                }, []);
              (e = 1 == i.length ? i[0] : t.getLowestCommonParent.apply(t, j([i[0]], i.slice(1)))),
                parent.postMessage(
                  {
                    action: "multi-selection-update",
                    data: {
                      nodes: n,
                      lowestCommonParentId: t.getNodeId(e),
                    },
                  },
                  "*"
                );
            }),
            (this.isActivated = !0));
        }),
        (t.prototype.deactivate = function () {
          this.isActivated && (console.log("multi-select-deactivate"), this.selectableInstance && this.selectableInstance.destroy(), this.enableLinks(), (this.isActivated = !1));
        }),
        (t.prototype.disableLinks = function () {
          for (var t = 0; t < this.links.length; t++) {
            this.links[t].removeAttribute("href");
          }
        }),
        (t.prototype.enableLinks = function () {
          for (var t = 0; t < this.links.length; t++) {
            this.links[t].setAttribute("href", this.linksMap[t]);
          }
        }),
        (t.prototype.storeLinks = function () {
          for (var t = 0; t < this.links.length; t++) {
            var e = this.links[t];
            this.linksMap.push(e.getAttribute("href") || "");
          }
        }),
        (t.prototype.getNodeId = function (t) {
          return t ? t.getAttribute("data-id") : null;
        }),
        (t.prototype.getLowestCommonParent = function (t) {
          for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
          if (arguments.length < 2) return null;
          var i,
            o = "contains" in t ? "contains" : "compareDocumentPosition",
            s = "contains" === o ? 1 : 16,
            r = [].slice.call(arguments, 1);
          t: for (; (t = t.parentNode); ) {
            for (i = r.length; i--; ) if ((t[o](r[i]) & s) !== s) continue t;
            return t;
          }
          return null;
        }),
        (t = O([U.Service(), L("design:paramtypes", [])], t))
      );
    })(),
    Jt = "open-compare",
    te = U.Container.get(Gt),
    ee = U.Container.get(K);
  (window.commonService = te),
    te.injectGlobalStyles(),
    te.injectTurbo(),
    te.loadQueryParams(),
    document.addEventListener("DOMContentLoaded", function () {
      (window.hotspotsService = ee),
        requestAnimationFrame(function () {
          te.saveQueryParams(window.location.href), te.showActionLinks();
        }),
        window.addEventListener(
          "message",
          function (t) {
            if (t.data.action) {
              var e = t.data.version || "v2",
                n = t.data.codeModeV2 || !1;
              switch (e) {
                case "v2":
                  !(function (t, e) {
                    var n = (void 0 === e ? {} : e).codeModeV2,
                      i = void 0 !== n && n,
                      o = U.Container.get(K),
                      s = U.Container.get(Qt),
                      r = U.Container.get($t),
                      a = U.Container.get(Gt),
                      l = i ? U.Container.get(Xt) : U.Container.get(Q);
                    switch (t.data.action) {
                      case "dom-load":
                        a.styleScrollbar();
                        break;
                      case "change-screen":
                        window.Turbo.visit(t.data.slug + "?handoff=1", {
                          action: "replace",
                        }),
                          t.data.slugs && (a.setPageSlugs(t.data.slugs), a.injectPreloadLinks());
                        break;
                      case "update-slugs":
                        t.data.slugs && (a.setPageSlugs(t.data.slugs), a.injectPreloadLinks());
                        break;
                      case "update-nodes-data":
                        var c = t.data.data || {};
                        Object.keys(c).forEach(function (t) {
                          l.modelNodes[t] = E(E({}, l.modelNodes[t]), c[t]);
                        }),
                          l.reactToDataChange();
                        break;
                      case "inject-turbo":
                        a.injectTurbo();
                        break;
                      case "create-hotspots":
                        o.createHotspots();
                        break;
                      case "deactivate-all":
                        o.deactivate(), l.deactivate(), s.deactivate(), r.deactivate();
                        break;
                      case "activate-multiple-selection":
                        r.activate(), a.onModeChange("Group");
                        break;
                      case "deactivate-multiple-selection":
                        r.deactivate();
                        break;
                      case "activate-hotspots":
                        o.activate(),
                          a.styleScrollbar({
                            force: !0,
                          }),
                          a.onModeChange("Play");
                        break;
                      case "deactivate-hotspots":
                        o.deactivate();
                        break;
                      case "activate-comments":
                        s.activate(), a.onModeChange("Comments");
                        break;
                      case "deactivate-comments":
                        s.deactivate();
                        break;
                      case "reset-comments":
                        s.resetAllBoxes();
                        break;
                      case "select-comment-node":
                        s.highlightComment(t.data.data);
                        break;
                      case "simulate-comments-mouseover":
                        s.onMouseOver({
                          target: s.getNodebyId(t.data.data.nodeId),
                        });
                        break;
                      case "simulate-comments-mouseout":
                        s.onMouseOut();
                        break;
                      case "activate-overrides":
                        l.activate(), a.onModeChange("Code");
                        break;
                      case "deactivate-overrides":
                        l.deactivate();
                        break;
                      case "select-override-node":
                        l.selectNodeById(t.data.data);
                        break;
                      case "simulate-code-mouseover":
                        l.onMouseOver({
                          target: l.getNodeById(t.data.data.nodeId),
                          ignoreMutations: !0,
                        });
                        break;
                      case "simulate-code-mouseout":
                        l.onMouseOut();
                        break;
                      case "clear-selection":
                        (l.selectedNode = null), l.resetAllBoxes();
                        break;
                      case "get-node-subNodes-map":
                        l.sendMessage("node-subNodes-map", l.getNodeSubNodesMap(t.data.data.ids));
                        break;
                      case "update-generated-views":
                        l.updateGeneratedViews(t.data.viewsMap || {});
                        break;
                      case "highlight-nodes":
                        l.highlightNodes(t.data);
                        break;
                      case "populate-selectable-layers":
                        l.populateSelectableLayers(t.data.nodes || {});
                        break;
                      case "set_component_ids":
                        l.setComponentIds(t.data.ids || []);
                        break;
                      case "clear-highlighted-nodes":
                        l.clearHighlightedNodes();
                        break;
                      case "disable-component-view":
                        l.disableComponentView();
                        break;
                      case "take-node-screenshot":
                        l.takeNodeScreenShot(t.data.data.nodeId);
                        break;
                      case "get-preview":
                        l.getPreview(t.data.data);
                        break;
                      case "get-nodes-by-id":
                        l.getNodesById(t.data.data.ids);
                        break;
                      case "set_server_overrides":
                        l.setServerOverrides(t.data.serverOverrides || {});
                        break;
                      case "set_server_overrides":
                        l.setIgnoredNodeIds(t.data.ignoredNodeIds || []);
                        break;
                      case "set_whitelist":
                        l.setWhiteList(t.data.whitelist || []);
                        break;
                      case "set_model_nodes":
                        l.setModelNodes(t.data);
                        break;
                      case "component_overrides":
                        l.applyOverrides(t.data.overrides);
                        break;
                      case "set-tag-name":
                        l.ChangeTagName(t.data.tagName), l.afterChange();
                        break;
                      case "set-html-content":
                        l.setHTMLContent(t.data.htmlContent), l.afterChange();
                        break;
                      case "set-inline-css":
                        l.setInlineCSS(t.data.inlineCSS), l.afterChange();
                        break;
                      case "add-global-css":
                        l.addGlobalCSS(t.data.CSS), l.afterChange();
                        break;
                      case "update-attribute-value":
                        l.updateOriginalAttribute(t.data.attribute), l.afterChange();
                        break;
                      case "add-css-class":
                        l.addCustomCssClass(t.data.className), l.afterChange();
                        break;
                      case "remove-css-class":
                        l.removeCustomCssClass(t.data.className), l.afterChange();
                        break;
                      case "set-custom-attribute":
                      case "update-custom-attribute":
                        l.setCustomAttribute(t.data.attribute), l.afterChange();
                        break;
                      case "remove-custom-attribute":
                        l.removeCustomAttribute(t.data.attributeName), l.afterChange();
                        break;
                      case "save-node":
                        parent.postMessage(
                          {
                            action: "save-overrides",
                            data: l.nodes,
                            info: t.data.info,
                          },
                          "*"
                        );
                        break;
                      case "style-scrollbar":
                        document.body.setAttribute("dark-scroll", "");
                        break;
                      case "unstyle-scrollbar":
                        document.body.removeAttribute("dark-scroll");
                        break;
                      case "no-overflow":
                        document.body.style.overflowX = "hidden";
                        break;
                      case "scroll":
                        var d = t.data.event;
                        switch (d.deltaMode) {
                          case 0:
                            window.scrollTo(window.scrollX + d.deltaX, window.scrollY + d.deltaY);
                            break;
                          case 1:
                            window.scrollTo(window.scrollX + 15 * d.deltaX, window.scrollY + 15 * d.deltaY);
                            break;
                          case 2:
                            window.scrollTo(window.scrollX + 0.03 * d.deltaX, window.scrollY + 0.03 * d.deltaY);
                        }
                        break;
                      case Jt:
                        parent.postMessage(
                          {
                            action: Jt,
                            data: {
                              top: (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0),
                            },
                          },
                          "*"
                        );
                    }
                  })(t, {
                    codeModeV2: n,
                  });
              }
            }
          },
          !1
        ),
        parent.postMessage(
          {
            action: "dom-load",
          },
          "*"
        ),
        document.addEventListener("keydown", function (t) {
          "Escape" === t.key &&
            parent.postMessage(
              {
                action: "escape-clicked",
              },
              "*"
            );
        }),
        document.addEventListener("click", function () {
          parent.postMessage(
            {
              action: "document-clicked",
            },
            "*"
          );
        });
    }),
    document.addEventListener("turbo:click", function (t) {
      parent.postMessage(
        {
          action: "link-click",
          data: {
            url: t.detail.url,
          },
        },
        "*"
      );
    }),
    document.addEventListener("turbo:before-visit", function (t) {
      te.saveQueryParams(t.detail.url), te.updatePageNum();
    }),
    document.addEventListener("turbo:load", function () {
      te.injectPreloadLinks(),
        setTimeout(function () {
          document.querySelectorAll(".not-ready").forEach(function (t) {
            return t.classList.remove("not-ready");
          });
        }, 0);
    }),
    document.addEventListener("turbo:before-render", function (t) {
      te.patchAsyncSrc(t.detail.newBody), te.loadQueryParams();
    }),
    document.addEventListener("turbo:render", function () {
      te.styleScrollbar(),
        te.showActionLinks(),
        ee.updateHostposts(),
        parent.postMessage(
          {
            action: "turbo-render",
          },
          "*"
        );
    });
})();
