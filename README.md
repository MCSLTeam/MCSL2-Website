<style>
  .image-container {
    float: left;
    margin-right: 10px;
    border-radius: 10px;
  }
</style>

<div class="image-container">
  <img src="https://img.fastmirror.net/s/2023/10/29/653deb00353b8.png" alt="MCSL2" height="150">
</div>


# MCServerLauncher 2 官网

基于 VitePress 的新 MCSL 官网  

<div>
    <a href="https://nodejs.org">
    <img src="https://img.shields.io/badge/NodeJS-18.13.0-green.svg?style=for-the-badge" alt="NodeJS">
    </a>
    <a href="https://vitepress.dev/">
    <img src="https://img.shields.io/badge/VitePress-latest-blue.svg?style=for-the-badge" alt="VitePress">
    </a>
</div>

## 用法

### 1.安装 Node.js 和 Git

<https://nodejs.cn/download/>

<https://git-scm.com/downloads>

### 2.克隆本仓库

```bash
git clone https://github.com/MCSLTeam/MCSLWebsite.git
```

### 3.安装依赖

先导航到本项目根目录。

```bash
yarn install
```

### 4.运行

#### 本地运行

```bash
yarn run docs:dev
```

#### 部署

```bash
yarn run docs:build
```

构建后的文件在 `docs/.vitepress/dist` 文件夹中。
