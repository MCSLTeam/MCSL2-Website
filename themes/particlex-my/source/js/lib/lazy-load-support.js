window.addEventListener("load", () => {
    const l = "$toTopHeight";
    let i = 0;
    const s = "lazy";
    let c = [...document.getElementsByTagName("img")];
    console.log(`图片懒加载: 一共找到了${c.length}张图片`), setTimeout(() => {
        i++, t()
    }, 500);
    const e = () => {
        t()
    };

    function t() {
        if (0 === c.length) console.log("所有图片均已加载"), window.removeEventListener("scroll", e);
        else {
            var n, o = [];
            for (let e = 0, t = c.length; e < t; ++e) {
                var r = c[e];
                ! function (e) {
                    if (!e) return;
                    e = function (e) {
                        var t = e[l];
                        if (t && t.version === i) return e[l].value;
                        let n = e,
                            o = 0;
                        for (; o += n.offsetTop, n = n.offsetParent, n;);
                        return e[l] = {
                            value: o,
                            version: i
                        }, o
                    }(e);
                    return document.documentElement.scrollTop + document.documentElement.clientHeight >= e
                }(r) ? o.push(r) : (console.log("已经加载图片: ", r), n = void 0, (n = (r = r).getAttribute(s)) && (r.setAttribute("src", n), r.removeAttribute(s)))
            }
            c = o
        }
    }
    window.addEventListener("scroll", e), window.addEventListener("resize", () => {
        i++
    })
});