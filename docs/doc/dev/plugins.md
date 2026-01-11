# 插件开发

面向 MCSL2 启动器的 Python 插件开发指南。插件可扩展 UI、流程与自动化能力。

## 基本结构

```bash
Plugins/
  └── PluginExample/
      ├── config.json
      └── PluginExample.py
```

### config.json

```json
{
  "plugin_name": "PluginExample",
  "version": "1.0.0",
  "description": "插件示例",
  "icon": ":/built-InIcons/MCSL2.png",
  "author": "MCSL Team",
  "author_email": "services@mcsl.com.cn",
  "on_new_thread": false
}
```

- `plugin_name`：必须与文件夹名及 Python 变量名一致
- `on_new_thread`：是否在新线程运行（谨慎开启，涉及线程安全）

### 入口脚本示例

```python
from Adapters.Plugin import Plugin

PluginExample = Plugin()

def load():
    # 插件被加载（未启用）
    pass

def enable():
    # 插件启用
    pass

def disable():
    # 插件禁用（做清理）
    pass

PluginExample.register_loadFunc(load)
PluginExample.register_enableFunc(enable)
PluginExample.register_disableFunc(disable)
```

## 生命周期

- `load()`：读取配置、准备资源，不应阻塞
- `enable()`：绑定信号、挂钩 UI、启动任务
- `disable()`：释放资源、断开信号、停止线程

## 常用 API

- 日志：`from MCSL2Lib.ProgramControllers.logController import _MCSL2Logger`
- 文件：`from MCSL2Lib.utils import readFile, writeFile`
- 窗口：`from MCSL2Lib.windowInterface import Window`
- 线程池：`from Adapters.PluginThreadPool import PluginThreadPool`

## 线程与 UI 安全

- 默认在主线程；`on_new_thread=true` 会在新线程运行入口
- 更新 UI 必须切回主线程（使用 Qt 信号/槽或 `QMetaObject.invokeMethod`）
- 长耗时任务放线程池，勿阻塞 UI

## 最佳实践

- 保持命名一致：文件夹 = `plugin_name` = Python 变量名
- 捕获异常并记录日志，避免让插件崩掉主程序
- 访问文件时使用相对路径（相对于插件目录）
- 禁止在 `load()` 阶段做耗时下载/解压，改在 `enable()` 或后台线程
- 如果修改全局状态，记得在 `disable()` 里恢复

## 打包与分发

- 保持最小集：`config.json` + Python 源码 + 必需资源
- 建议附带 `README.md` 说明安装与配置
- 遵循语义化版本：`主.次.补丁`

## 安全与权限

插件拥有与 MCSL2 同等的文件与系统访问权限。仅安装可信插件，并在文档中声明外部依赖与网络访问行为。

## 示例与参考

- 示例：`MCSL2/PluginExample/`
- 事件/线程：`Adapters/PluginThreadPool.py`
- UI 交互：`MCSL2Lib/Widgets/` 与 `MCSL2Lib/Pages/`

## 开源协议

插件需遵循 MCSL2 的 `GNU GPL v3` 协议：保留版权声明，修改后仍需开源。
