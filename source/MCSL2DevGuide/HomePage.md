---
title: Dev - MCSL2 主页
date: 2023-08-19 20:14:40
---
./MCSL2Lib/homePage.py  

### 导入库
```python
from qfluentwidgets import (
    PrimaryPushButton,
    PushButton,
    StrongBodyLabel,
    TitleLabel,
    IndeterminateProgressRing,
)
from PyQt5.QtCore import QSize, Qt, QThread, pyqtSignal, pyqtSlot
from PyQt5.QtWidgets import QGridLayout, QWidget, QHBoxLayout, QSpacerItem, QSizePolicy
from MCSL2Lib.networkController import Session
from MCSL2Lib.singleton import Singleton
```
### 主类
```python
@Singleton
class HomePage(QWidget):
    """主页"""
    def __init__(self, parent=None):
        super().__init__(parent)
        ...
    
    @pyqtSlot(str)
    def afterSelectedServer(self, serverName):
        """选择服务器后的处理"""
        ...
```
方法`__init__`为UI。  
方法`afterSelectedServer`负责在选择服务器后，设置开启服务器的按钮的显示文本和启用状态。

### 获取公告的线程
```python
class GetNoticeThread(QThread):
    """
    获取公告的线程\n
    使用多线程防止拖慢启动速度
    """

    notice = pyqtSignal(str)
    ringVisible = pyqtSignal(bool)

    def __init__(self, parent=None):
        super().__init__(parent)
        ...
    
    def run(self):
        ...
```
Qt信号`notice`是公告内容，传输内容为`str`类型。  
Qt信号`ringVisible`负责控制加载进度环的显示，传输内容为`bool`类型。

<div>
    <center>
        <br><br><a href="/MCSL2DevGuide">回到目录</a>
    </center>
</div>