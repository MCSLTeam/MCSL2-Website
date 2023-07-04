mixins.home = {
    mounted() {
        var o = this.$refs.menu,
            e = this.$refs.homeBackground,
            o = (o.classList.add("menu-color"), e.dataset.image.split(",")),
            t = Math.floor(Math.random() * o.length);
        e.style.backgroundImage = `url('${o[t]}')`
    },
    methods: {
        homeClick() {
            window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth"
            })
        }
    }
};