# 开发文档

:::warning 前排提醒
本文档为开发文档，请确保您有一定的计算机编程基础，并对 Python 有一定的了解。
:::

欢迎来到 MCSL2 开发文档！这里包含了开发 MCSL2 插件和集成 MCSL2 API 所需的所有信息。

## 📚 文档导航

### 🔌 插件开发

学习如何为 MCSL2 开发插件，扩展启动器功能：

- [插件开发指南](/doc/dev/plugins) - 完整的插件开发教程
  - 插件基本结构
  - 生命周期管理
  - API 使用方法
  - 最佳实践

### ⏬ 下载模块

了解如何集成 MCSL2 的下载 API：

- [下载模块文档](/doc/dev/downloads) - 下载源 API 集成
  - FastMirror API
  - MCSLAPI 接口
  - Polars API
  - 自定义下载源

## 🚀 快速开始

### 开发环境准备

开发 MCSL2 插件或参与 MCSL2 开发需要以下环境：

```bash
# 必需
Python 3.8+
PyQt5

# 可选
Git（用于版本控制）
VS Code 或 PyCharm（推荐的 IDE）
```

### 克隆 MCSL2 仓库

```bash
git clone https://github.com/MCSLTeam/MCSL2.git
cd MCSL2
```

### 安装依赖

```bash
pip install -r requirements.txt
```

### 运行 MCSL2

```bash
python MCSL2.py
```

## 📖 核心概念

### MCSL2 架构

MCSL2 采用模块化架构设计：

```
MCSL2/
  ├── MCSL2.py              # 主入口
  ├── MCSL2Lib/             # 核心库
  │   ├── Pages/            # 页面模块
  │   ├── Widgets/          # UI 组件
  │   ├── ServerControllers/# 服务器控制
  │   ├── ProgramControllers/# 程序控制
  │   └── Resources/        # 资源文件
  ├── Plugins/              # 插件目录
  └── Adapters/             # 插件适配器
```

### 插件系统

插件系统基于以下核心类：

- `Plugin` - 插件基类
- `BaseEvent` - 事件基类
- `PluginThreadPool` - 插件线程池

### 事件系统

MCSL2 使用 Qt 的信号-槽机制实现事件系统：

```python
from PyQt5.QtCore import pyqtSignal, QObject

class MyPlugin(QObject):
    # 定义信号
    mySignal = pyqtSignal(str)
    
    def __init__(self):
        super().__init__()
        # 连接信号到槽
        self.mySignal.connect(self.onMySignal)
    
    def onMySignal(self, message):
        print(f"收到信号: {message}")
```

## 🛠️ API 参考

### 核心 API

#### 服务器管理

```python
from MCSL2Lib.variables import ServerVariables
from MCSL2Lib.utils import readGlobalServerConfig

# 读取服务器配置
servers = readGlobalServerConfig()

# 初始化服务器变量
server = ServerVariables()
server.initialize(0)  # 索引 0 的服务器
```

#### 文件操作

```python
from MCSL2Lib.utils import readFile, writeFile

# 读取文件
content = readFile("path/to/file.txt")

# 写入文件
writeFile("path/to/file.txt", "content")
```

#### 日志记录

```python
from MCSL2Lib.ProgramControllers.logController import _MCSL2Logger

logger = _MCSL2Logger()
logger.info("信息日志")
logger.warning("警告日志")
logger.error(Exception("错误"), "错误日志")
```

### 下载 API

```python
from MCSL2Lib.ProgramControllers.downloadController import Downloader

# 创建下载任务
downloader = Downloader()
downloader.download(
    url="https://example.com/file.jar",
    save_path="./downloads/file.jar"
)
```

### UI API

```python
from qfluentwidgets import MessageBox, InfoBar, InfoBarPosition
from PyQt5.QtCore import Qt

# 显示消息框
box = MessageBox("标题", "内容", parent)
if box.exec() == 1:  # 用户点击确定
    pass

# 显示信息条
InfoBar.success(
    title="成功",
    content="操作完成",
    orient=Qt.Horizontal,
    isClosable=True,
    position=InfoBarPosition.TOP,
    duration=3000,
    parent=parent
)
```

## 📦 发布插件

### 插件打包

1. 确保插件文件结构正确
2. 编写 `README.md` 说明文档
3. 创建 GitHub 仓库
4. 打包为 `.zip` 文件

### 插件命名规范

- 使用英文命名
- 采用驼峰命名法
- 避免使用特殊字符
- 名称要有意义

### 版本号规范

遵循语义化版本 (Semver)：

```
主版本号.次版本号.修订号

1.0.0 - 首个稳定版本
1.1.0 - 添加新功能
1.1.1 - 修复 Bug
2.0.0 - 不兼容的重大更新
```

## 🤝 贡献指南

### 提交代码

1. Fork 仓库
2. 创建特性分支
3. 提交代码
4. 创建 Pull Request

### 代码规范

- 遵循 PEP 8 Python 代码规范
- 添加必要的注释
- 编写文档字符串
- 保持代码简洁

### 测试

- 在提交前充分测试
- 确保不破坏现有功能
- 测试多种场景

## 📄 开源协议

MCSL2 及其所有插件都遵循 **GNU General Public License Version 3.0** 开源协议。

### 协议要求

- ✅ 可以自由使用、修改、分发
- ✅ 必须保持开源
- ✅ 必须保留原作者信息
- ✅ 修改后的版本也必须使用 GPL 3.0
- ❌ 不能用于商业售卖

## 🆘 获取帮助

### 社区支持

- [GitHub Issues](https://github.com/MCSLTeam/MCSL2/issues) - 报告 Bug
- [GitHub Discussions](https://github.com/MCSLTeam/MCSL2/discussions) - 讨论和提问
- QQ 群 - 加入 MCSL2 用户群

### 联系开发者

- Email: services@mcsl.com.cn
- GitHub: [@MCSLTeam](https://github.com/MCSLTeam)

## 🔗 相关资源

- [PyQt5 文档](https://www.riverbankcomputing.com/static/Docs/PyQt5/)
- [Python 文档](https://docs.python.org/3/)
- [qfluentwidgets 文档](https://qfluentwidgets.com/zh/)
- [Minecraft Wiki](https://minecraft.fandom.com/wiki/)

## 📝 更新日志

查看 [更新日志](/update-log/) 了解 MCSL2 的最新变化和改进。

---

感谢您对 MCSL2 开发的关注！如果您有任何问题或建议，欢迎在 GitHub 上提出。
