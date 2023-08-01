---
title: MCSLAPI文档
date: 2023-04-22 18:10:16
---
## 前言
本API由<font color="#e31f1f">可爱的</font>[星姮十织](https://www.df100.ltd/)提供，在此表示真挚的感谢！  
**本API免费开放，严禁倒卖、恶意刷流量，违者必究，谢谢配合。**
## 开始使用
本API支持 ```GET``` 方式调用，例如：

```http
GET http://mcsl_api.df100.ltd/json/JavaDownloadInfo.json
```
## 各个值的解释
在请求API后，返回的会是像以下格式的答辩。
```json
{
  "MCSLDownloadList":
  [
    {
      "name": "Java-8-64位-安装版",
      "url": "http://mcsl_api.df100.ltd/d/Java8_x64.msi",
      "format": "msi",
      "filename": "Java8_x64"
    },
    {
      "name": "Java-8-32位-安装版",
      "url": "http://mcsl_api.df100.ltd/d/Java8_x86.msi",
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
|     filename     | ```MCSLDownloadList[索引值].filename```  |      文件名，可选      |

<div class="custom-block tip">
  <p class="custom-block-title">提示</p>
  <p>请将索引值修改正确，或使用循环语句读取再使用！</p>
</div>

## API请求的链接
也是按照一定的套路。

```http
//示例

http://mcsl_api.df100.ltd/json/SpigotDownloadInfo.json
```

 ```http://mcsl_api.df100.ltd/json/``` 是<font color="red">必需字段</font> ， 再加上 ```请求类型```。

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
Api_Url = "http://mcsl_api.df100.ltd/json/SpigotDownloadInfo.json"

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

Api_Url = "http://mcsl_api.df100.ltd/json/SpigotDownloadInfo.json"

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