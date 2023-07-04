Vue.createApp({
    mixins: Object.values(mixins),
    data() {
        return {
            loading: !0,
            showMenu: !1,
            barLocal: 0,
            renderers: []
        }
    },
    created() {
        window.addEventListener("load", () => {
            this.loading = !1
        })
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll, !0), this.render()
    },
    methods: {
        render() {
            if (void 0 !== this.renderers)
                for (var e of this.renderers) e()
        },
        handleScroll() {
            var e = this.$refs.menu,
                s = this.$refs.homePostsWrap,
                r = document.documentElement.scrollTop;
            this.barLocal < r ? (this.showMenu = !1, e.classList.add("hidden")) : e.classList.remove("hidden"), s && (r <= window.innerHeight - 100 ? e.classList.add("menu-color") : e.classList.remove("menu-color"), s.style.marginTop = r <= 400 ? -r / 5 + "px" : "-80px"), this.barLocal = r
        }
    }
}).mount("#layout");