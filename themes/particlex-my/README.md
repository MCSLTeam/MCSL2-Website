# Hexo-Theme-ParticleX

[ParticleX](https://github.com/argvchs/hexo-theme-particlex) 主题的魔改版本。

## 演示

-   [GitHub Pages](https://iceofsummer.github.io/)

## 新特性

因为是魔改版本，所以有我自己新加的一些东西:

- [x] 图片懒加载(在**外部**配置文件中配置`lazyload.disabled=true`即可关闭，修改配置后可能需要清除缓存：`hexo cl`)
- [x] 资源压缩(js和css代码全部经过压缩)
- [x] 文章目录
- [x] 不再以个人头像为网页图标(默认加载`favicon.ico`，你可以直接将网站图标丢到`source`目录下)
- [x] 首页不再显示文章全部内容，只会显示部分内容(v1.0.1及以上版本可用)

## 安装

### 从Release列表下载(推荐)

由于项目中用了webpack，**直接克隆项目是用不了的，需要手动打包！**

[Release](https://github.com/argvchs/hexo-theme-particlex/releases)

### 手动安装
```bash
# 克隆本项目
npm i
npm run build
```

### 配置
#### 关闭高亮 
Hexo 有自带的代码高亮，但是和 ParticleX 的不兼容(具体表现为代码块会出现bug)

```yaml
highlight:
    enable: false
prismjs:
    enable: false
```

其它配置请在[ParticleX](https://github.com/argvchs/hexo-theme-particlex)中查看。

