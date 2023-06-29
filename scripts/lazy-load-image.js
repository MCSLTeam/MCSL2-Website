// const js = hexo.extend.helper.get('js').bind(hexo);
// const fs = require('fs')
// const path = require('path')
// const SEARCH_REGX = "<img src="
// const IMAGE_URL_FILED = 'lazy'

// hexo.extend.filter.register('after_post_render', function(data){
//     if (data.content && data.content.replaceAll) {
//         data.content = data.content.replaceAll(SEARCH_REGX, `<img ${IMAGE_URL_FILED}=`)
//     }
//     return data;
// });

// hexo.extend.injector.register('head_end', `<script>${fs.readFileSync(path.resolve(__dirname, '../js/lazy-load-support.min.js'), {encoding: 'utf8'})}</script>`)