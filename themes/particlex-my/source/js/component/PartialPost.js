(() => {
    var t = Vue.defineComponent({
        name: "PartialPost",
        props: {
            content: String
        },
        setup(t) {
            console.log(t);
            let n, e;
            return e = 300 <= t.content.length ? (n = t.content.substring(0, MAX_TOC_LEN), !0) : (n = t.content, !1), () => h("div", {
                directives: [{
                    name: "html",
                    value: n
                }]
            })
        }
    });
    mixins.particalPost = {
        components: {
            PartialPost: t
        }
    }
})();