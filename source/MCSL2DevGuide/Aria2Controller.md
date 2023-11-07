---
title: Dev - MCSL2 Aria2控制器
date: 2023-08-19 20:14:40
toc: true
---
./MCSL2Lib/aria2Controller.py  
### Aria2控制器主类
```python
class Aria2Controller:
    _port = 6800  # 端口
    _osType = None  # 系统类型
    _aria2 = None
    _downloadTasks = {}
    _downloadWatcher = {}
    systemType = ""
    aria2cStatus = False
    aria2Process = None
```
##### 初始化
```python
def __init__(self):
    self.systemType: str
    self.aria2cStatus: bool
    self.checkPlatform()
```
##### 检测平台
```python
def checkPlatform(self):
```

##### 检查Aria2是否存在
```python
def checkAria2(self):
```

##### macOS环境下的Aria2补全
```python
def macOSInstallAria2(self):
```

##### Linux环境下的Aria2补全
```python
def LinuxInstallAria2(self):
```

##### 下载的方法
```python
def download(self, uri, info_get, stopped, watch=True, interval=0.1):
```

##### 获取下载进度的方法
```python
def getDownloadsStatus(self, gid: str) -> dict:
```

##### 暂停下载
```python
def pauseDownloadTask(self, gid: str):
```

##### 继续下载
```python
def resumeDownloadTask(self, gid: str):
```

##### 取消下载
```python
def cancelDownloadTask(self, gid: str):
```

##### 启动Aria2
```python
def startAria2(self) -> bool:
```
<div class="custom-block tip">
  <p class="custom-block-title">提示</p>
  <p class="custom-block-text">您应该使用启动Aria2的线程启动，而不是直接调用此方法。</p>
</div>

##### 测试Aria2
```python
def testAria2Service(cls):
```

##### 下载结束后的处理
```python
def downloadCompletedHandler(self, gid, stopFlag):
```

##### 关闭Aria2
```python
def shutDown(cls):
```

##### 启动Aria2的线程
```python
class Aria2BootThread(QThread):
    def __init__(self, parent=None):
        super().__init__(parent=parent)

    def run(self):
```
可通过如下方法启动:  
```python
bootThread = Aria2BootThread()
bootThread.finished.connect(bootThread.deleteLater)
bootThread.start()
```

### 初始化Aria2配置
```python
def initializeAria2Configuration():
```
需要在程序启动时先调用一次。

<div>
    <center>
        <br><br><a href="/MCSL2DevGuide">回到目录</a>
    </center>
</div>