[![MCSL 2 大头图](https://s3.bmp.ovh/imgs/2023/03/21/5afb21934bd980ab.png)](https://www.mcsl.com.cn)

# MCSL2 官网

<p align="right">
——由MCSL Team倾心制作
</p>

[![](https://img.shields.io/badge/NodeJS-18.13.0-green.svg?style=for-the-badge "NodeJS")](https://nodejs.org)
[![](https://img.shields.io/badge/VitePress-letest-blue.svg?style=for-the-badge "VitePress")](https://vitepress.dev/)

基于VitePress的新MCSL官网

## 用法

### 1.安装nodejs
<https://nodejs.cn/download/>

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

构建后的文件在`.vitepress/dist`文件夹中。
