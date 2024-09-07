---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "MCSL2"
  text: "简洁、全能的 Minecraft 开服器"
  tagline: 由 MCSL2 开发组精心呈现
  image:
    src: https://images.mcsl.com.cn/new/MCSL2.png
    alt: MCSL2
  actions:
    - theme: brand
      text: 下载
      link: /download
    - theme: alt
      text: 文档
      link: /doc/
    - theme: alt
      text: GitHub
      link: /links/mcsl2-repo
    - theme: alt
      text: 鸣谢
      link: /acknowledgements

features:
  - title: 面向各阶用户
    icon: 👨🏻‍💻
    details: 提供简易模式、进阶模式、导入模式，满足各阶用户的需求。
    link: /doc/user/configure-server
    linkText: 查看用法
  - title: 界面简洁美观
    icon: 💻
    details: 以 Fluent Design 设计语言为基础，提供简洁、美观的界面。
    link: https://qfluentwidgets.com/zh/
    linkText: 了解控件库
  - title: 一键下载资源
    icon: ⏬
    details: 接入 FastMirror、MCSLAPI、极星镜像站、Akira 镜像站，飞速下载所需。
    link: /doc/user/downloads
    linkText: 了解更多
  - title: 自动查找Java
    icon: ✅
    details: 开服界首创查找 Java 算法，在 1~2 秒内即可完成搜索。
    link: https://github.com/MCSLTeam/MCSL2/blob/master/MCSL2Lib/ProgramControllers/javaDetector.py
    linkText: 了解我们的算法
  - title: 多服务器管理
    icon: 🎞️
    details: 一站式管理服务器，助力高效提升。
  - title: 自研插件系统
    icon: 🔧
    details: 利用 Python 特性实现，无限可能。
    link: /doc/dev/plugins
    linkText: 开发文档
  - title: 开源透明公开
    icon: 🚪
    details: 除内测模式模块以外全部开源，透明公开，放心使用。
    link: https://github.com/MCSLTeam/MCSL2
    linkText: 打开 GitHub 仓库
  - title: 程序完全免费
    icon: 🆓
    details: 包括内测模式在内的所有功能均完全免费。
    link: /join-preview
    linkText: 参加内测
    
title: MCSL2
titleTemplate: 简洁、全能的 Minecraft 开服器 | MC 服务器, Minecraft 服务器, 我的世界开服器, MC 开服软件
---

<div style="background-color: black; color: white; padding: 10px 10px 20px 20px; z-index: 10; width: 100%; position: fixed; bottom: 0; left: 0; opacity: 0.8;">
  <h3>⚠ MCSL2 已停止主要生命周期支持 ⚠</h3>
  <p>非常感谢您对本项目的支持！未来的启动器开发工作将全面转向更强大的 <a href="https://future.mcsl.com.cn/">MCServerLauncher Future</a>，点击可查看详情。</p>
  <p>我们深知停止继续开发此项目是一个危险举动，但唯有停止才能有更多的精力开发下一代开服器，感谢您的理解。</p>
  <p>MCSL2 的相关在线服务在 MCSL Future 发布正式版前不会关闭，各位用户还请放心。</p>
</div>
