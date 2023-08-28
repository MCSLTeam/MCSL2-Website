---
title: Dev - MCSL2插件开发文档
date: 2023-08-25 14:55:16
---
本文档介绍了如何开发适用于MCSL2的插件。通过插件，您可以扩展MCSL2的功能，添加自定义特性和行为。

## 插件基本信息

每个MCSL2插件需要在其根目录下包含一个名为 `config.json` 的配置文件和一个 Python 脚本文件，以下是一个典型的插件文件结构：

```
PluginExample/
├── config.json
└── PluginExample.py
```
<div class="custom-block tip">
  <p class="custom-block-title">提示</p>
  <p>
  插件的名称必须与文件夹名、config.json的`plugin_name`的值 和 Python 脚本中的声明变量名称相同。
  </p>
</div>

### config.json

```json
{
    "plugin_name": "PluginExample",
    "version": "0.0.0",
    "description": "插件示例",
    "icon": ":/built-InIcons/MCSL2.png",
    "author": "MCSL Team",
    "author_email": "lxhtt@vip.qq.com",
    "on_new_thread": false
}
```

- `plugin_name`: 插件的名称，必须与文件夹名和 Python 脚本中的声明变量名称相同。
- `version`: 插件的版本号。
- `description`: 插件的简要描述。
- `icon`: 插件的图标。
- `author`: 插件的作者。
- `author_email`: 作者的联系邮箱。
- `on_new_thread`: 布尔值，表示插件是否在新线程中运行。

### PluginExample.py

```python
# 实现一个Plugin类
from Adapters.Plugin import Plugin

PluginExample = Plugin()

def load():
    """在插件加载时执行的代码"""
    ...

def enable():
    """在插件启用时执行的代码"""
    ...

def disable():
    """在插件禁用时执行的代码"""
    ...

# 注册加载代码
PluginExample.register_loadFunc(load)

# 注册启用代码
PluginExample.register_enableFunc(enable)

# 注册禁用代码
PluginExample.register_disableFunc(disable)
```

## 插件生命周期

MCSL2插件的生命周期涵盖了加载、启用和禁用阶段，您可以在每个阶段执行相应的操作。

### 插件加载阶段

在插件加载时，会执行 `load()` 函数中的代码。您可以在此阶段进行初始化操作、加载配置等。

### 插件启用阶段

在插件启用时，会执行 `enable()` 函数中的代码。您可以在此阶段执行与插件功能相关的代码。

### 插件禁用阶段

在插件禁用时，会执行 `disable()` 函数中的代码。您可以在此阶段执行清理操作、保存数据等。

## 插件开发注意事项

 - 插件文件夹名称、`plugin_name` 和 Python 脚本中的声明变量名称必须保持一致。
 - 插件必须包含一个有效的 `config.json` 配置文件。
 - 插件可以通过调用 `PluginExample.register_xxxFunc()` 方法注册不同阶段的函数。
 - 插件可以在三个生命周期阶段执行自定义代码，实现不同的功能。
 - 插件应遵循合适的软件工程实践，确保代码的可读性和可维护性。
 - 可以直接导入MCSL2Lib的代码，如`from MCSL2Lib.windowInterface import Window`。

## 开源许可证

插件的代码需要遵循与 MCSL2 定义的许可协议相符的许可条款`GNU General Public License, Version 3.0`。

## 示例插件

在此文档中提供的代码是一个简单的示例插件，仅用于说明插件开发的基本流程。您可以根据自己的需求，开发更加复杂和功能丰富的插件来扩展MCSL2的功能。


<div>
    <center>
        <br><br><a href="/MCSL2DevGuide">回到目录</a>
    </center>
</div>