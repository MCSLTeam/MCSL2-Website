mixins.math = {
    created() {
        this.renderers.push(this.math)
    },
    methods: {
        math() {
            renderMathInElement(document.body, {
                delimiters: [{
                    left: "$$",
                    right: "$$",
                    display: !0
                }, {
                    left: "$",
                    right: "$",
                    display: !1
                }, {
                    left: "\\(",
                    right: "\\)",
                    display: !1
                }, {
                    left: "\\[",
                    right: "\\]",
                    display: !0
                }]
            })
        }
    }
};