---
title: Dev - MCSL2 主程序入口
date: 2023-08-19 20:14:40
toc: true
---
./MCSL2.py  

### 导入库
```python
import os
import sys
from platform import system

from PyQt5.QtCore import Qt, QLocale
from PyQt5.QtWidgets import QApplication
from qfluentwidgets import FluentTranslator

from MCSL2Lib.windowInterface import Window
from MCSL2Lib.publicFunctions import initializeMCSL2
```
### 初始化程序
```python
if __name__ == "__main__":
    # 初始化
    initializeMCSL2()

    # 高DPI适配
    QApplication.setHighDpiScaleFactorRoundingPolicy(
        Qt.HighDpiScaleFactorRoundingPolicy.PassThrough
    )
    QApplication.setAttribute(Qt.AA_EnableHighDpiScaling)
    QApplication.setAttribute(Qt.AA_UseHighDpiPixmaps)
    QApplication.setAttribute(Qt.AA_DontCreateNativeWidgetSiblings)

    # 适配Linux特殊情况
    if system().lower() == "linux":
        try:
            if os.environ["XDG_SESSION_TYPE"].lower() != "x11":
                os.environ["QT_QPA_PLATFORM"] = "wayland"
            else:
                pass
        except:
            pass
    os.environ["QT_AUTO_SCREEN_SCALE_FACTOR"] = "auto"

    # 启动
    app = QApplication(sys.argv)

    # 加载PyQt-Fluent-Widgets的语言包
    translator = FluentTranslator(QLocale())
    app.installTranslator(translator)

    # 显示窗口
    w = Window()
    w.show()
    app.exec_()
```

<div>
    <center>
        <br><br><a href="/MCSL2DevGuide">回到目录</a>
    </center>
</div>