---
title: Dev - MCSL2 新建服务器页
date: 2023-08-19 20:14:40
toc: true
---
### 导入库
```python
from json import dump, loads, dumps
from os import getcwd, mkdir, remove, path as ospath
from shutil import copy
from PyQt5.QtGui import QCursor
from PyQt5.QtCore import Qt, QSize, QRect, pyqtSlot
from PyQt5.QtWidgets import (
    QGridLayout,
    QWidget,
    QVBoxLayout,
    QSizePolicy,
    QSpacerItem,
    QHBoxLayout,
    QFrame,
    QFileDialog,
)

from qfluentwidgets import (
    ComboBox,
    LineEdit,
    PlainTextEdit,
    PrimaryPushButton,
    PushButton,
    SmoothScrollArea,
    StrongBodyLabel,
    SubtitleLabel,
    TitleLabel,
    TransparentToolButton,
    FluentIcon as FIF,
    InfoBar,
    InfoBarPosition,
    MessageBox,
    HyperlinkButton,
    TreeWidget,
    CardWidget,
    TextEdit,
    PixmapLabel,
    BodyLabel,
)
from MCSL2Lib.serverController import MojangEula
from MCSL2Lib.singleton import Singleton
from MCSL2Lib.interfaceController import ChildStackedWidget

from MCSL2Lib.variables import (
    GlobalMCSL2Variables,
    ConfigureServerVariables,
    ServerVariables,
    SettingsVariables,
)
from MCSL2Lib.interfaceController import ChildStackedWidget
from MCSL2Lib.settingsController import SettingsController
from MCSL2Lib import javaDetector

settingsController = SettingsController()
configureServerVariables = ConfigureServerVariables()
settingsVariables = SettingsVariables()
serverVariables = ServerVariables()
```
### 主类
```python
@Singleton
class ConfigurePage(QWidget):
    """新建服务器页"""
```
##### UI
```python
def __init__(self, parent=None):
    super().__init__(parent)
    ...
```

##### 设置 - 默认添加服务器方式  
```python
def settingsRunner_newServerType(self):
```

##### 切换添加服务器页面
```python
def newServerStackedWidgetNavigation(self):
```

##### 手动添加Java
```python
def addJavaManually(self):
```

##### 自动查找Java
```python
def autoDetectJava(self):
    ...
@pyqtSlot(list)
def autoDetectJavaFinished(self, _JavaPaths: list):
    """自动查找Java结果处理"""
    ...
@pyqtSlot(int)
def onJavaFindWorkThreadFinished(self, sequenceNumber):
    """自动查找Java结束后的处理"""
    ...
```
需要在类中提前声明：  
```python
self.javaFindWorkThreadFactory = javaDetector.JavaFindWorkThreadFactory()
self.javaFindWorkThreadFactory.fuzzySearch = True
self.javaFindWorkThreadFactory.signalConnect = self.autoDetectJavaFinished
self.javaFindWorkThreadFactory.finishSignalConnect = (
    self.onJavaFindWorkThreadFinished
)
```

##### 添加服务器核心
```python
def addCoreManually(self):
```

##### 选择Java后处理Java路径
```python
def setJavaPath(self, selectedJavaPath):
```

##### 选择Java后处理Java版本
```python
def setJavaVer(self, selectedJavaVer):
```

##### 添加服务器后的检查逻辑
```python
def finishNewServer(self):
    """完成新建服务器的检查触发器"""
    ...
def checkJavaSet(self):
    """检查Java设置"""
    ...
def checkMemSet(self, currentNewServerType):
    """检查内存设置"""
    ...
def checkCoreSet(self):
    """检查核心设置"""
    ...
def checkServerNameSet(self, currentNewServerType):
    """检查服务器名称设置"""
    ...
def checkDeEncodingSet(self, currentNewServerType):
    """检查编码设置"""
    ...
def checkJVMArgSet(self, currentNewServerType):
    """检查JVM参数设置"""
    ...

def checkMemUnitSet(self, currentNewServerType):
    """检查JVM内存堆单位设置"""
    ...
```

##### 保存服务器
```python
def saveNewServer(self):
```

<div>
    <center>
        <br><br><a href="/MCSL2DevGuide">回到目录</a>
    </center>
</div>