mixins.preview = {
    data() {
        return {
            previewShow: !1
        }
    },
    created() {
        this.renderers.push(this.preview)
    },
    methods: {
        preview() {
            let e = this,
                i = this.$refs.preview,
                r = this.$refs.previewContent;
            var t;
            for (t of document.querySelectorAll("img")) t.addEventListener("click", function () {
                r.alt = this.alt, r.src = this.src, e.previewShow = !0
            });
            i.addEventListener("click", () => {
                this.previewShow = !1
            }), window.addEventListener("resize", () => {
                this.previewShow = !1
            })
        }
    }
};