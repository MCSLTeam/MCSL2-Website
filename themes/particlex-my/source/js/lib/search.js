mixins.search = {
    data() {
        return {
            rawSearch: ""
        }
    },
    watch: {
        search(e) {
            var i;
            for (i of this.$refs.timeline.childNodes) !e || i.dataset.title.includes(e) ? (i.style.opacity = 1, i.style.visibility = "visible", i.style.marginTop = 0) : (i.style.opacity = 0, i.style.visibility = "hidden", i.style.marginTop = -i.offsetHeight - 30 + "px")
        }
    },
    computed: {
        search() {
            return this.rawSearch.toLowerCase().replace(/\s+/g, "")
        }
    }
};