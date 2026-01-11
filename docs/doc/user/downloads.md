# 下载资源

MCSL2 内置下载器，无需额外安装 aria2，支持断点续传与错误提示。当前接入 4 个下载源：

- [无极镜像（FastMirror）](https://fastmirror.net/)
- [MCSLAPI](/doc/dev/downloads#使用-mcslapi)
- [极星 · 镜像站（Polars）](https://mirror.polars.cc/)
- [雨云镜像站（RainYun）](https://www.rainyun.com/)（取代 Akira）

## 切换下载源

打开 **设置 → 下载设置 → 下载源**，选择速度最快的镜像。

![切换下载源](https://img.fastmirror.net/s/2023/12/08/6573380e97890.png)

## 下载任务中心

点击下载页右上角的 `展开下载中列表` 查看进度，再次点击可收起。

![下载任务中心](https://img.fastmirror.net/s/2023/12/08/65733915d497f.png)

## 下载文件夹

点击右上角 `打开下载文件夹` 直接查看已下载文件。

![下载文件夹](https://img.fastmirror.net/s/2023/12/08/65733bb93026c.png)

## 各下载源使用

### 无极镜像（FastMirror）

按顺序选择 **核心 → 游戏版本 → 构建**，支持热门核心的高速下载。

![FastMirror](https://img.fastmirror.net/s/2023/12/08/657339d26e268.png)

### MCSLAPI

提供核心与 Java 下载（含 Java 8 / 17 / 21）：

![MCSLAPI](https://img.fastmirror.net/s/2023/12/08/65733a8e7d08a.png)

### 极星 · 镜像站（Polars）

选择核心类型后即可下载对应版本：

![Polars](https://img.fastmirror.net/s/2023/12/08/65733b04614ac.png)

### 雨云镜像站（RainYun）

国内加速源，适合网络不佳时使用。

## 常见问题

- **下载卡住/超时**：尝试切换镜像源或重试；确认网络正常
- **文件校验失败**：重新下载，或检查磁盘空间与权限
- **速度慢**：更换到本地网络更快的镜像，或使用代理
