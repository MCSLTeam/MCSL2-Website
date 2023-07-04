(() => {
    "use strict";
    var r = {
        971: e => {
            var c = [];

            function d(e) {
                for (var t = -1, r = 0; r < c.length; r++)
                    if (c[r].identifier === e) {
                        t = r;
                        break
                    } return t
            }

            function i(e, t) {
                for (var r = {}, n = [], o = 0; o < e.length; o++) {
                    var a = e[o],
                        s = t.base ? a[0] + t.base : a[0],
                        i = r[s] || 0,
                        u = "".concat(s, " ").concat(i),
                        s = (r[s] = i + 1, d(u)),
                        i = {
                            css: a[1],
                            media: a[2],
                            sourceMap: a[3],
                            supports: a[4],
                            layer: a[5]
                        }; - 1 !== s ? (c[s].references++, c[s].updater(i)) : (a = function (t, e) {
                            var r = e.domAPI(e);
                            return r.update(t),
                                function (e) {
                                    e ? e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap && e.supports === t.supports && e.layer === t.layer || r.update(t = e) : r.remove()
                                }
                        }(i, t), t.byIndex = o, c.splice(o, 0, {
                            identifier: u,
                            updater: a,
                            references: 1
                        })), n.push(u)
                }
                return n
            }
            e.exports = function (e, a) {
                var s = i(e = e || [], a = a || {});
                return function (e) {
                    e = e || [];
                    for (var t = 0; t < s.length; t++) {
                        var r = d(s[t]);
                        c[r].references--
                    }
                    for (var e = i(e, a), n = 0; n < s.length; n++) {
                        var o = d(s[n]);
                        0 === c[o].references && (c[o].updater(), c.splice(o, 1))
                    }
                    s = e
                }
            }
        },
        29: e => {
            var r = {};
            e.exports = function (e, t) {
                if (!(e = function (e) {
                    if (void 0 === r[e]) {
                        var t = document.querySelector(e);
                        if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
                            t = t.contentDocument.head
                        } catch (e) {
                            t = null
                        }
                        r[e] = t
                    }
                    return r[e]
                }(e))) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                e.appendChild(t)
            }
        },
        10: e => {
            e.exports = function (e) {
                var t = document.createElement("style");
                return e.setAttributes(t, e.attributes), e.insert(t, e.options), t
            }
        },
        569: (e, t, r) => {
            e.exports = function (e) {
                var t = r.nc;
                t && e.setAttribute("nonce", t)
            }
        },
        844: e => {
            e.exports = function (a) {
                var s;
                return "undefined" == typeof document ? {
                    update: function () { },
                    remove: function () { }
                } : (s = a.insertStyleElement(a), {
                    update: function (e) {
                        var t, r, n, o;
                        t = s, r = a, n = "", (e = e).supports && (n += "@supports (".concat(e.supports, ") {")), e.media && (n += "@media ".concat(e.media, " {")), (o = void 0 !== e.layer) && (n += "@layer".concat(0 < e.layer.length ? " ".concat(e.layer) : "", " {")), n += e.css, o && (n += "}"), e.media && (n += "}"), e.supports && (n += "}"), (o = e.sourceMap) && "undefined" != typeof btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), r.styleTagTransform(n, t, r.options)
                    },
                    remove: function () {
                        var e;
                        null !== (e = s).parentNode && e.parentNode.removeChild(e)
                    }
                })
            }
        },
        218: e => {
            e.exports = function (e, t) {
                if (t.styleSheet) t.styleSheet.cssText = e;
                else {
                    for (; t.firstChild;) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(e))
                }
            }
        }
    },
        n = {};

    function o(e) {
        var t = n[e];
        return void 0 !== t || (t = n[e] = {
            exports: {}
        }, r[e](t, t.exports, o)), t.exports
    }
    o.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return o.d(t, {
            a: t
        }), t
    }, o.d = (e, t) => {
        for (var r in t) o.o(t, r) && !o.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), o.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.nc = void 0;
    var e, t, a, s, i, u, c, d;
    o.r(e = {}), t = o(971), t = o.n(t), a = o(844), a = o.n(a), s = o(29), s = o.n(s), i = o(569), i = o.n(i), u = o(10), u = o.n(u), c = o(218), c = o.n(c), (d = {}).styleTagTransform = c(), d.setAttributes = i(), d.insert = s().bind(null, "head"), d.domAPI = a(), d.insertStyleElement = u(), t()(e.default, d), e.default && e.default.locals && e.default.locals
})();