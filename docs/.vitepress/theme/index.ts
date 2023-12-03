import Theme from "vitepress/theme"
import vitepressNprogress from "@andatoshiki/vitepress-plugin-nprogress"
import "@andatoshiki/vitepress-plugin-nprogress/lib/css/index.css"
import "viewerjs/dist/viewer.min.css"
import imageViewer from "vitepress-plugin-image-viewer"
import { useRoute } from "vitepress"
import "./style.css"
import "vitepress-plugin-back-to-top/dist/style.css"
import vitepressBackToTop from "vitepress-plugin-back-to-top"
import "vitepress-markdown-timeline/dist/theme/index.css";

export default {
  ...Theme,
  enhanceApp(ctx) {
    vitepressNprogress(ctx)
    vitepressBackToTop({
      threshold: 300,
    })
  },
  setup() {
    const route = useRoute()
    imageViewer(route)
  },
}