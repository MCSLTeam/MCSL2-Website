# 下载模块  

当前 MCSL2 已接入了 4 个镜像站点，分别为:  

- [无极镜像 (FastMirror)](https://fastmirror.net/)
- [MCSLAPI](#使用-mcslapi)
- [极星 · 镜像站 (Polars)](https://mirror.polars.cc/)
- [阿基拉云 镜像站（Akira）](https://mirror.akiracloud.net/)

## 使用 FastMirror  

::: info 提示
无极镜像官方 API 文档可在此查看: [GitHub · FastMirror-MC/FastMirrorServer: README.md](https://github.com/FastMirror-MC/FastMirrorServer/blob/master/README.md)
:::

### 在 MCSL2 客户端中调用 FastMirror API  

> [MCSL2Lib/Pages/downloadPage.py](https://github.com/MCSLTeam/MCSL2/blob/master/MCSL2Lib/Pages/downloadPage.py)  
> [MCSL2Lib/DownloadAPIs/FastMirrorAPI.py](https://github.com/MCSLTeam/MCSL2/blob/master/MCSL2Lib/DownloadAPIs/FastMirrorAPI.py)  
> [MCSL2Lib/Widgets/FastMirrorWidgets.py](https://github.com/MCSLTeam/MCSL2/blob/master/MCSL2Lib/Widgets/FastMirrorWidgets.py)  
> 提示：下方有关 Qt 控件相关部分已省略。

```python
# MCSL2Lib/Pages/downloadPage.py
from MCSL2Lib.DownloadAPIs.FastMirrorAPI import (
    FetchFastMirrorAPIThreadFactory,
    FetchFastMirrorAPICoreVersionThreadFactory,
)
from MCSL2Lib.variables import DownloadVariables

downloadVariables = DownloadVariables()
...

@Singleton
class DownloadPage(QWidget):

    def __init__(self, parent=None):
        ...
        self.fetchFastMirrorAPIThreadFactory = FetchFastMirrorAPIThreadFactory()
        self.fetchFastMirrorAPICoreVersionThreadFactory = FetchFastMirrorAPICoreVersionThreadFactory()
        ...
    
    def refreshDownloads(self):
        if self.downloadStackedWidget.currentIndex() == 0:
            if downloadVariables.FastMirrorAPIDict:
                if downloadVariables.FastMirrorAPIDict["name"] != -1:
                    self.initFastMirrorCoreListWidget()
                else:
                    ... # error
            else:
                self.getFastMirrorAPI()
        ...

    def getFastMirrorAPI(self):
        """请求FastMirror API"""
        workThread = self.fetchFastMirrorAPIThreadFactory.create(
            _singleton=True, finishSlot=self.updateFastMirrorAPIDict
        )
        if workThread.isRunning():
            return
        else:
            workThread.start()

    def getFastMirrorAPICoreVersion(self, name, mcVersion):
        """请求FastMirror API 核心的版本"""
        workThread = self.fetchFastMirrorAPICoreVersionThreadFactory.create(
            name=name,
            mcVersion=mcVersion,
            _singleton=True,
            finishSlot=self.updateFastMirrorAPICoreVersionDict,
        )
        if workThread.isRunning():
            return
        else:
            workThread.start()

    @pyqtSlot(dict)
    def updateFastMirrorAPIDict(self, _APIDict: dict):
        """更新获取FastMirrorAPI结果"""
        downloadVariables.FastMirrorAPIDict.clear()
        downloadVariables.FastMirrorAPIDict.update(_APIDict)
        if downloadVariables.FastMirrorAPIDict["name"] != -1:
            ...
        else:
            ... # error

    @pyqtSlot(dict)
    def updateFastMirrorAPICoreVersionDict(self, _APICoreVersionDict: dict):
        """更新获取FastMirrorAPI结果"""
        downloadVariables.FastMirrorAPICoreVersionDict.clear()
        downloadVariables.FastMirrorAPICoreVersionDict.update(_APICoreVersionDict)
        if downloadVariables.FastMirrorAPICoreVersionDict["name"] != -1:
            ...
        else:
            ... # error

    def initFastMirrorCoreListWidget(self):
        """
        初始化FastMirror核心列表
        downloadVariables.FastMirrorAPIDict["name"]  可获取核心名称
        downloadVariables.FastMirrorAPIDict["tag"]  可获取核心标签
        """
        for i in range(len(downloadVariables.FastMirrorAPIDict["name"])):
            self.coreListLayout.addWidget(
                FastMirrorCoreListWidget(
                    tag=downloadVariables.FastMirrorReplaceTagDict[
                        downloadVariables.FastMirrorAPIDict["tag"][i]
                    ],
                    name=downloadVariables.FastMirrorAPIDict["name"][i],
                    slot=self.fastMirrorCoreNameProcessor,
                    parent=self,
                )
            )

    def fastMirrorCoreNameProcessor(self):
        # 获取选中核心
        downloadVariables.selectedName = self.sender().property("name")

    def initFastMirrorMCVersionsListWidget(self):
        """
        初始化FastMirror核心的游戏版本列表
        downloadVariables.FastMirrorAPIDict["mc_versions"][
            list(downloadVariables.FastMirrorAPIDict["name"]).index(downloadVariables.selectedName)
        ]  可获取核心的游戏版本列表
        """
        MCVersionList = downloadVariables.FastMirrorAPIDict["mc_versions"][
            list(downloadVariables.FastMirrorAPIDict["name"]).index(downloadVariables.selectedName)
        ]
        for i in range(len(MCVersionList)):
            MCVersion = MCVersionList[i]
            self.versionLayout.addWidget(
                FastMirrorVersionListWidget(
                    version=MCVersion,
                    slot=self.fastMirrorMCVersionProcessor,
                    parent=self,
                )
            )

    def fastMirrorMCVersionProcessor(self):
        # 获取选中游戏版本
        downloadVariables.selectedMCVersion = self.sender().property("version")
        # 获取选中核心的构建列表
        self.getFastMirrorAPICoreVersion(
            name=downloadVariables.selectedName,
            mcVersion=downloadVariables.selectedMCVersion,
        )

    def initFastMirrorCoreVersionListWidget(self):
        """
        初始化FastMirror核心的构建列表
        downloadVariables.FastMirrorAPICoreVersionDict["name"]  可获取核心的构建列表
        downloadVariables.FastMirrorAPICoreVersionDict["core_version"]  可获取核心的构建版本
        downloadVariables.FastMirrorAPICoreVersionDict["update_time"]  可获取核心的构建更新时间
        """
        for i in range(len(downloadVariables.FastMirrorAPICoreVersionDict["name"])):
            self.buildLayout.addWidget(
                FastMirrorBuildListWidget(
                    buildVer=downloadVariables.FastMirrorAPICoreVersionDict["core_version"][i],
                    syncTime=downloadVariables.FastMirrorAPICoreVersionDict["update_time"][i].replace("T", " "),
                    coreVersion=downloadVariables.FastMirrorAPICoreVersionDict["core_version"][i],
                    btnSlot=self.downloadFastMirrorAPIFile,
                    parent=self,
                )
            )

    def downloadFastMirrorAPIFile(self):
        """下载FastMirror API文件"""
        buildVer = self.sender().property("core_version")
        fileName = (
            f"{downloadVariables.selectedName}-{downloadVariables.selectedMCVersion}-{buildVer}"
        )
        fileFormat = "jar"
        uri = f"https://download.fastmirror.net/download/{downloadVariables.selectedName}/{downloadVariables.selectedMCVersion}/{buildVer}"
        # 判断文件是否存在
        self.checkDownloadFileExists(
            fileName,
            fileFormat,
            uri,
            (
                f"{fileName}.jar",
                downloadVariables.selectedName,
                downloadVariables.selectedMCVersion,
                buildVer,
            ),
        )

```

## 使用 MCSLAPI

本API的请求地址如下：  
> <https://api.mcsl.com.cn/DownloadAPI>  

本API支持 `GET` 方式调用，例如：

```http
{API_ROOT}/JavaDownloadInfo.json
```

还有如下可请求：

|              请求类型             |
|:--------------------------------:|
|     `/JavaDownloadInfo.json`     |
|    `/SpigotDownloadInfo.json`    |
|    `/PaperDownloadInfo.json`     |
|  `/BungeeCordDownloadInfo.json`  |
| `/OfficialCoreDownloadInfo.json` |

### 各个值的解释

在请求API后，返回的格式如下。

```json
{
  "MCSLDownloadList":
  [
    {
      "name": "Java-8-64位-安装版",
      "url": "download link",
      "format": "msi",
      "filename": "Java8_x64"
    },
    ...
  ]
}
```

|        键        |                  读写法                   |      值内容意         |
|:----------------:|:---------------------------------------:|:-------------------:|
| MCSLDownloadList |        ```MCSLDownloadList```           | 保存各个版本的软件的对象 |
|       name       |   ```MCSLDownloadList[索引值].name```    |       版本的名称       |
|       url        |   ```MCSLDownloadList[索引值].url```     |        下载链接        |
|      format      |  ```MCSLDownloadList[索引值].format```   | 文件类型(拓展名、后缀名) |
|     filename     | ```MCSLDownloadList[索引值].filename```  |      文件名           |

### 在MCSL2客户端中调用 MCSLAPI  

> [MCSL2Lib/Pages/downloadPage.py](https://github.com/MCSLTeam/MCSL2/blob/master/MCSL2Lib/Pages/downloadPage.py)  
> [MCSL2Lib/DownloadAPIs/MCSLAPI.py](https://github.com/MCSLTeam/MCSL2/blob/master/MCSL2Lib/DownloadAPIs/FastMirrorAPI.py)  
> [MCSL2Lib/Widgets/FastMirrorWidgets.py](https://github.com/MCSLTeam/MCSL2/blob/master/MCSL2Lib/Widgets/FastMirrorWidgets.py)  
> 提示：下方有关 Qt 控件相关部分已省略。

```python
# MCSL2Lib/Pages/downloadPage.py
from MCSL2Lib.DownloadAPIs.MCSLAPI import FetchMCSLAPIDownloadURLThreadFactory
from MCSL2Lib.Widgets.loadingTipWidget import (
    MCSLAPILoadingErrorWidget,
    MCSLAPILoadingWidget,
)
from MCSL2Lib.Widgets.singleMCSLAPIDownloadWidget import singleMCSLAPIDownloadWidget
from MCSL2Lib.variables import DownloadVariables

downloadVariables = DownloadVariables()
...

@Singleton
class DownloadPage(QWidget):

    def __init__(self, parent=None):
        ...
        self.fetchFastMirrorAPIThreadFactory = FetchFastMirrorAPIThreadFactory()
        self.fetchFastMirrorAPICoreVersionThreadFactory = FetchFastMirrorAPICoreVersionThreadFactory()
        ...
    
    def refreshDownloads(self):
        if self.downloadStackedWidget.currentIndex() == 1:
            # 如果存在列表且不为空,则不再重新获取
            if downloadVariables.MCSLAPIDownloadUrlDict:
                idx = ... # 当前下载类别
                if (
                    str(downloadVariables.MCSLAPIDownloadUrlDict[idx]["downloadFileTitles"]) != "-2"
                    or str(downloadVariables.MCSLAPIDownloadUrlDict[idx]["downloadFileTitles"])
                    != "-1"
                ):
                    self.initMCSLAPIDownloadWidget(n=idx)
                else:
                    ...
            else:
                self.getMCSLAPI()
        ...

    def getMCSLAPI(self):
        """请求MCSLAPI"""
        workThread = self.fetchMCSLAPIDownloadURLThreadFactory.create(
            _singleton=True, finishSlot=self.updateMCSLAPIDownloadUrlDict
        )
        if workThread.isRunning():
            return
        else:
            workThread.start()

    @pyqtSlot(dict)
    def updateMCSLAPIDownloadUrlDict(self, _downloadUrlDict: dict):
        """更新获取MCSLAPI结果"""
        downloadVariables.MCSLAPIDownloadUrlDict.update(_downloadUrlDict)
        idx = ... # 当前下载类别
        if (
            str(downloadVariables.MCSLAPIDownloadUrlDict[idx]["downloadFileTitles"]) != "-2"
            or str(downloadVariables.MCSLAPIDownloadUrlDict[idx]["downloadFileTitles"]) != "-1"
        ):
            self.initMCSLAPIDownloadWidget(n=idx)
        else:
            ... # error

    def initMCSLAPIDownloadWidget(self, n: int):
        """
        初始化MCSLAPI模式下的UI
        n 代表第几种类型
        下方循环的 i 代表次数
        """
        try:
            if type(downloadVariables.MCSLAPIDownloadUrlDict[n]["downloadFileTitles"]) == list:
                for i in range(
                    len(downloadVariables.MCSLAPIDownloadUrlDict[n]["downloadFileTitles"])
                ):
                    self.tmpSingleMCSLAPIDownloadWidget = singleMCSLAPIDownloadWidget()
                    # Title
                    self.tmpSingleMCSLAPIDownloadWidget.fileTitle.setText(
                        downloadVariables.MCSLAPIDownloadUrlDict[n]["downloadFileTitles"][i]
                    )
                    # File name
                    self.tmpSingleMCSLAPIDownloadWidget.fileName.setText(
                        f"{downloadVariables.MCSLAPIDownloadUrlDict[n]['downloadFileNames'][i]}.{downloadVariables.MCSLAPIDownloadUrlDict[n]['downloadFileFormats'][i]}"
                    )

                    self.tmpSingleMCSLAPIDownloadWidget.setObjectName(f"DownloadWidget{i}..{n}")
                    self.tmpSingleMCSLAPIDownloadWidget.MCSLAPIDownloadBtn.setObjectName(
                        f"DownloadBtn{i}..{n}"
                    )
                    ...
            ...
        ...

    def downloadMCSLAPIFile(self):
        """下载MCSLAPI文件"""
        sender = self.sender()
        idx = int(sender.objectName().split("..")[-1])
        idx2 = int(sender.objectName().split("..")[0].split("n")[-1])
        uri = downloadVariables.MCSLAPIDownloadUrlDict[idx]["downloadFileURLs"][idx2]
        fileName = downloadVariables.MCSLAPIDownloadUrlDict[idx]["downloadFileNames"][idx2]
        fileFormat = downloadVariables.MCSLAPIDownloadUrlDict[idx]["downloadFileFormats"][idx2]
        # 判断文件是否存在
        self.checkDownloadFileExists(
            fileName,
            fileFormat,
            uri,
            (fileName + "." + fileFormat, "coreName", "MCVer", "buildVer"),
        )
