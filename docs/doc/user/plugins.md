# MCSL2 插件

:::tip 注意
本文档介绍的是 **MCSL2 的插件系统**，用于扩展 MCSL2 启动器本身的功能。

如果您要为 Minecraft 服务器安装插件（如 Bukkit/Spigot/Paper 插件），请将插件文件放入服务器的 `plugins` 文件夹。
:::

## 什么是 MCSL2 插件

MCSL2 插件是基于 Python 开发的扩展模块，可以为 MCSL2 添加新功能或自定义行为。

### 插件特点

- 🐍 基于 Python 开发，简单易学
- 🔌 热加载/卸载，无需重启 MCSL2
- 🎯 完整的生命周期管理
- 📦 独立的配置文件
- 🔓 开源免费，遵循 GPL 3.0

## 插件管理

### 打开插件页面

在 MCSL2 主界面左侧导航栏点击 `插件` 图标，即可进入插件管理页面。

### 插件列表

插件页面会显示所有已安装的插件，包括：

- 插件图标
- 插件名称
- 插件版本
- 插件描述
- 插件作者
- 启用/禁用状态

## 安装插件

### 方法一：手动安装

1. 下载插件压缩包或文件夹
2. 解压到 `Plugins/` 目录
3. 确保插件文件夹结构正确：
   ```
   Plugins/
     └── PluginName/
         ├── config.json
         └── PluginName.py
   ```
4. 在 MCSL2 插件页面点击 `刷新`
5. 找到新插件并点击 `启用`

### 方法二：一键安装（如果支持）

某些插件可能提供一键安装功能：

1. 下载 `.mcsl2plugin` 文件
2. 双击文件或拖入 MCSL2 窗口
3. 确认安装
4. 自动启用插件

## 管理插件

### 启用插件

1. 在插件列表中找到要启用的插件
2. 点击 `启用` 按钮
3. 插件的 `enable()` 函数会被执行

### 禁用插件

1. 在插件列表中找到要禁用的插件
2. 点击 `禁用` 按钮
3. 插件的 `disable()` 函数会被执行

### 卸载插件

1. 先禁用插件
2. 关闭 MCSL2
3. 删除 `Plugins/PluginName/` 文件夹
4. 重新启动 MCSL2

:::warning 注意
直接删除正在运行的插件可能导致错误，请先禁用插件。
:::

## 插件配置

每个插件都有独立的 `config.json` 配置文件：

```json
{
    "plugin_name": "PluginExample",
    "version": "1.0.0",
    "description": "插件示例",
    "icon": ":/built-InIcons/MCSL2.png",
    "author": "作者名",
    "author_email": "email@example.com",
    "on_new_thread": false
}
```

### 配置说明

- `plugin_name`: 插件名称（必须与文件夹名相同）
- `version`: 插件版本号
- `description`: 插件描述
- `icon`: 插件图标路径
- `author`: 作者名称
- `author_email`: 作者邮箱
- `on_new_thread`: 是否在新线程中运行

## 插件权限

MCSL2 插件拥有与 MCSL2 相同的权限，可以：

- ✅ 访问 MCSL2 的所有 API
- ✅ 读写文件系统
- ✅ 操作服务器配置
- ✅ 修改 UI 界面
- ✅ 执行系统命令

:::danger 安全提示
请**只安装来自可信来源的插件**！恶意插件可能：
- 窃取您的数据
- 破坏服务器文件
- 执行危险操作
:::

## 寻找插件

### 官方插件

- 访问 [MCSL2 GitHub 仓库](https://github.com/MCSLTeam/MCSL2)
- 查看 `Plugins/` 示例

### 社区插件

- 在 [GitHub Discussions](https://github.com/MCSLTeam/MCSL2/discussions) 寻找
- 加入 MCSL2 QQ 群询问其他用户
- 在论坛或社区分享区查找

### 自己开发

如果您懂 Python，可以自己开发插件！

👉 查看 [插件开发文档](/doc/dev/plugins) 了解详情

## 常见问题

### 插件无法加载

**可能原因**：

1. **文件结构不正确**
   - 确保 `config.json` 和 `PluginName.py` 在同一目录
   - 确保文件夹名、`plugin_name` 和 Python 变量名一致

2. **配置文件格式错误**
   - 检查 `config.json` 是否为有效的 JSON 格式
   - 使用 JSON 验证工具检查

3. **Python 语法错误**
   - 查看 MCSL2 日志获取错误信息
   - 修复插件代码中的语法错误

### 插件启用后无效果

**可能原因**：

1. **未注册函数**
   - 确保调用了 `Plugin.register_enableFunc()`
   - 检查函数名是否正确

2. **函数内部错误**
   - 查看日志中的错误信息
   - 使用 `try-except` 捕获异常

3. **权限不足**
   - 某些操作可能需要管理员权限
   - 以管理员身份运行 MCSL2

### 插件冲突

**症状**：
- 两个插件同时启用后出现错误
- 某些功能失效

**解决方法**：
1. 逐个启用插件，找出冲突的插件
2. 查看插件文档了解兼容性
3. 联系插件作者报告问题

### 插件导致 MCSL2 崩溃

**应急措施**：

1. 关闭 MCSL2
2. 删除或移出问题插件的文件夹
3. 重新启动 MCSL2
4. 向插件作者报告问题

## 插件开发

如果您想开发自己的 MCSL2 插件，请查看：

📚 [插件开发文档](/doc/dev/plugins)

您将学习到：
- 插件基本结构
- 生命周期管理
- API 调用方法
- 最佳实践

## 插件示例

MCSL2 提供了一个完整的插件示例：

```
PluginExample/
  ├── config.json
  └── PluginExample.py
```

您可以在 MCSL2 安装目录的 `PluginExample/` 文件夹中找到它。

## 贡献插件

如果您开发了优秀的插件，欢迎分享给社区：

1. 在 GitHub 上创建仓库
2. 在 [Discussions](https://github.com/MCSLTeam/MCSL2/discussions) 发布
3. 附上详细的使用说明
4. 遵循 GPL 3.0 开源协议

## 技术限制

当前 MCSL2 插件系统的限制：

- ⚠️ 仅支持 Python 插件
- ⚠️ 不支持跨版本兼容（需要针对特定 MCSL2 版本开发）
- ⚠️ 没有插件依赖管理系统
- ⚠️ 没有插件商店

未来版本可能会改进这些限制。
