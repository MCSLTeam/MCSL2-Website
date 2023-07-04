(() => {
    "use strict";
    var n = {
        367: (e, t) => {
            t.S9 = t.MN = void 0;
            const l = "$toTopHeight";
            let o = 0;

            function n() {
                o++
            }
            window.addEventListener("resize", () => {
                n()
            }), t.MN = function (e) {
                var t = e[l];
                if (t && t.version === o) return e[l].value;
                let n = e,
                    i = 0;
                for (; i += n.offsetTop, n = n.offsetParent;);
                return e[l] = {
                    value: i,
                    version: o
                }, i
            }, t.S9 = n
        }
    },
        i = {};

    function l(e) {
        var t = i[e];
        return void 0 !== t || (t = i[e] = {
            exports: {}
        }, n[e](t, t.exports, l)), t.exports
    } {
        var c = l(367);
        const o = "toc-level-";
        class d {
            name;
            _className;
            link;
            _level;
            element;
            constructor(e, t) {
                this.element = e, this.name = e.textContent, this._className = o + t, this.link = "#" + e.id, this._level = t
            }
            isAboveWindow() {
                return (0, c.MN)(this.element) > document.documentElement.scrollTop
            }
            get className() {
                return this._className
            }
            get level() {
                return this._level
            }
            set level(e) {
                this._className = o + e, this._level = e
            }
        }
        const f = Vue.defineComponent({
            name: "TopicItem",
            props: {
                item: d,
                visible: Boolean,
                index: Number
            },
            emits: {
                linkClick: Number
            },
            setup(e, {
                emit: t
            }) {
                const n = () => {
                    t("linkClick", e.index)
                };
                return () => h("div", {
                    class: [e.visible ? "toc-item-active" : "toc-item-inactive", "toc-item", e.item.className]
                }, [h("a", {
                    on: {
                        click: n
                    },
                    attrs: {
                        href: e.item.link
                    }
                }, [e.item.name])])
            }
        });
        var e = Vue.defineComponent({
            components: {
                TopicItem: f
            },
            name: "toc-component",
            setup() {
                const l = Vue.ref([]),
                    o = Vue.ref(1),
                    i = Vue.ref(),
                    a = Vue.ref("0"),
                    s = Vue.ref("0"),
                    r = Vue.ref("0");
                let t;

                function u() {
                    if (!t) {
                        let t;
                        for (t = l.value.length - 1; 0 <= t; t--) {
                            var n;
                            if (!l.value[t].isAboveWindow()) {
                                let e = t + 1;
                                l.value[e] ? (1 === l.value[e].level && (n = l.value[e + 1]) && 1 !== n.length && e++, o.value = Math.min(e, l.value.length - 1)) : o.value = t;
                                break
                            }
                        } - 1 === t && (o.value = 0)
                    }
                }

                function v() {
                    m()
                }
                Vue.onMounted(() => {
                    var e = document.getElementById("main-content");
                    if (e) {
                        const i = [];
                        e = e.childNodes;
                        let n = 1e3;
                        if (e.forEach(e => {
                            let t;
                            2 !== e.nodeName.length || "H" !== e.nodeName[0] || Number.isNaN(t = Number.parseInt(e.nodeName[1])) || (i.push(new d(e, t)), n = Math.min(n, t))
                        }), l.value = i, 1 < n) {
                            const t = n - 1;
                            i.forEach(e => {
                                e.level -= t
                            })
                        }
                        window.addEventListener("scroll", u), window.addEventListener("resize", v), u(), (0, c.S9)(), m(), setTimeout(() => {
                            m(), o.value = 0
                        }, 1200)
                    }
                }), Vue.onUnmounted(() => {
                    window.removeEventListener("scroll", u), window.removeEventListener("resize", v)
                });
                const m = () => {
                    var e, t, n;
                    i.value && (0 === i.value.clientHeight && 0 < l.value.length ? setTimeout(() => {
                        m()
                    }, 100) : ({
                        clientHeight: e,
                        clientWidth: t
                    } = document.documentElement, n = 100 * (1 - i.value.clientHeight / e) / 2, n = Math.max(n, 10), s.value = n + "%", a.value = (t - 900) / 2 + "px", r.value = e - 100 + "px"))
                },
                    n = e => {
                        t = !0, o.value = e, setTimeout(() => {
                            t = !1
                        }, 50)
                    };
                return () => h("div", {
                    attrs: {
                        id: "toc"
                    },
                    ref: i,
                    style: {
                        top: s.value,
                        width: a.value,
                        "max-height": r.value
                    }
                }, [h("div", {
                    style: "font-size: 20px;margin: 5px 0"
                }, ["文章目录"]), l.value.map((e, t) => h(f, {
                    key: e.name,
                    attrs: {
                        item: e,
                        visible: o.value === t,
                        index: t
                    },
                    on: {
                        linkClick: n
                    }
                }))])
            }
        });
        mixins.toc = {
            components: {
                "toc-component": e
            }
        }
    }
})();