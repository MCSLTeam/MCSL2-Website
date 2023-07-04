mixins.highlight = {
    data() {
        return {
            copying: !1
        }
    },
    created() {
        hljs.configure({
            ignoreUnescapedHTML: !0
        }), this.renderers.push(this.highlight)
    },
    methods: {
        highlight() {
            let e = this;
            var t;
            for (t of document.querySelectorAll("pre")) {
                var s = [...t.classList, ...t.firstChild.classList][0] || "plaintext";
                let i = t.innerText;
                t.innerHTML = `<div class="code-content">${i}</div><div class="language">${s}</div><div class="code-copy"><i class="fa-solid fa-copy fa-fw"></i><i class="fa-solid fa-clone fa-fw"></i></div>`;
                t.querySelector(".code-copy").addEventListener("click", async function () {
                    e.copying || (e.copying = !0, this.classList.add("copied"), await navigator.clipboard.writeText(i), await new Promise(i => setTimeout(i, 1e3)), this.classList.remove("copied"), e.copying = !1)
                });
                s = t.querySelector(".code-content");
                hljs.highlightElement(s)
            }
        }
    }
};