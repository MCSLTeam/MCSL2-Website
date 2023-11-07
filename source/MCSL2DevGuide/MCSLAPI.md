---
title: Dev - MCSLAPI文档
date: 2023-08-19 20:14:40
toc: true
---
## 前言
本API由<font color="#e31f1f">可爱的</font>[十织](https://www.df100.ltd/)提供，在此表示真挚的感谢！  
**本API免费开放，严禁倒卖、恶意刷流量，违者必究，谢谢配合。**
## 开始使用
本API支持 ```GET``` 方式调用，例如：

<div class="custom-block tip">
  <p class="custom-block-title">提示</p>
  <p class="custom-block-text">本API已全面升级，转移到了IPFS网络上。您需要拥有一个IPFS网关来使用此API。</p>
</div>

```http
GET 您的IPFS网关/ipns/mcslapiipfs.x-xh.cn/SharePoint/JavaDownloadInfo.json
```
## 各个值的解释
在请求API后，返回的会是像以下格式的答辩。
```json
{
  "MCSLDownloadList":
  [
    {
      "name": "Java-8-64位-安装版",
      "url": "https://lxhtt-my.sharepoint.com/personal/lxhtt_lxhtt_onmicrosoft_com/_layouts/52/download.aspx?share=EXiT4L9NTNBJoz9CA2IxWtYBzbxOXGuXJKswNjlhk8YCFA",
      "format": "msi",
      "filename": "Java8_x64"
    },
    {
      "name": "Java-8-32位-安装版",
      "url": "https://lxhtt-my.sharepoint.com/personal/lxhtt_lxhtt_onmicrosoft_com/_layouts/52/download.aspx?share=ERQK5PgOgYhBrLf-uzoXm5sBX84JaXxPdp7fk4C_W7Lg2g",
      "format": "msi",
      "filename": "Java8_x86"
    }
  ]
}
```

|        键        |  <font color="red">JSON</font>读数值写法  |      值内容意         |
|:----------------:|:---------------------------------------:|:-------------------:|
| MCSLDownloadList |        ```MCSLDownloadList```           | 保存各个版本的软件的对象 |
|       name       |   ```MCSLDownloadList[索引值].name```    |       版本的名称       |
|       url        |   ```MCSLDownloadList[索引值].url```     |        下载链接        |
|      format      |  ```MCSLDownloadList[索引值].format```   | 文件类型(拓展名、后缀名) |
|     filename     | ```MCSLDownloadList[索引值].filename```  |      文件名           |

<div class="custom-block tip">
  <p class="custom-block-title">提示</p>
  <p class="custom-block-text">请将索引值修改正确，或使用循环语句读取再使用！</p>
</div>

## API请求的链接
也是按照一定的套路。

```http
//示例

您的IPFS网关/ipns/mcslapiipfs.x-xh.cn/SharePoint/JavaDownloadInfo.json
```

 ```/ipns/mcslapiipfs.x-xh.cn/SharePoint/``` 是<font color="red">必需字段</font> ， 需要再加上 `IPFS网关`和`请求类型`。

|             请求类型           |
|:-----------------------------:|
|     JavaDownloadInfo.json     |
|    SpigotDownloadInfo.json    |
|    PaperDownloadInfo.json     |
|  BungeeCordDownloadInfo.json  |
| OfficialCoreDownloadInfo.json |

## 程序端的读取
### 直接读取（单次）
#### Python
可以使用自带的request库下载，json库解析。
```python
import json
import requests # 导入库

# 此处即为Spigot下载信息
Api_Url = "您的IPFS网关/ipns/mcslapiipfs.x-xh.cn/SharePoint/SpigotDownloadInfo.json"

# 将读取并解析完的json数据保存至Api_Data中
Api_Data = json.loads(requests.get(Api_Url).text)['MCSLDownloadList']

#分别读取值存为变量（此处索引为0）
Name = Api_Data[0]["name"]
Url = Api_Data[0]["url"]
Format = Api_Data[0]["format"]
FileName = Api_Data[0]["filename"]
```
---
### 循环读取（多次）
#### Python
可以使用自带的request库下载，json库解析。
```python
import json
import requests # 导入库

Api_Url = "您的IPFS网关/ipns/mcslapiipfs.x-xh.cn/SharePoint/SpigotDownloadInfo.json"

# 将读取并解析完的json数据保存至Api_Data中
Api_Data = json.loads(requests.get(Api_Url).text)['MCSLDownloadList']

#循环读取值存为列表
for i in Api_Data:
        Name = i["name"]
        Names.insert(0, Name)
        Url = i["url"]
        Urls.insert(0, Url)
        Format = i["format"]
        Formats.insert(0, Format)
        FileName = i["filename"]
        FileNames.insert(0, FileName)
```

<div>
    <center>
        <br><br><a href="/MCSL2DevGuide">回到目录</a>
    </center>
</div>