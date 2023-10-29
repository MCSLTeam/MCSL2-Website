---
title: Chapter 2 - 添加服务器
date: 2023-07-04 23:03:00
---
MCSL2的`添加服务器`功能位于`配置`页。  
当您进入此页面后，会有以下3种方式供您选择：  
 - 简易模式
 - 进阶模式
 - 导入

### 简易模式  
简易模式提供了几个最为关键的服务器参数，**都是必需的**。  
`Java`, `内存`, `服务器核心`, `服务器名称`。  

#### Java设置  
***你可以在MCSL2的`下载`页下载Java。***  
不同版本的Minecraft服务器可能会要求不同的Java版本：  
~~（源自于神奇无比的Bugjump）~~
| Minecraft 版本 | Java 版本 |
|:-------------:|:---------:|
| `最早` ~ `1.16.5` | `Java 8` (推荐) |
| `1.17` ~ `1.17.1` | `Java 17` 或 `Java 18` (推荐) |
| `1.18` ~ `最新` | `Java 18` 或 `Java 19` |  

<div class="custom-block warning">
  <p class="custom-block-title">警告</p>
  <p>
  Minecraft <code>1.8</code>及以前版本也可使用<code>Java 7</code>，但不推荐。
  <br>部分可使用如<code>Open J9</code>的版本仍不推荐，原因是兼容性不大好，故极不推荐用于对稳定性要求高的Minecraft服务器。
  </p>
</div>

请务必选择与Minecraft版本对应的Java版本，否则可能导致服务器无法启动！  
<div class="custom-block tip">
  <p class="custom-block-title">提示</p>
  <p class="custom-block-text">
  可以使用MCSL2的自动查找Java功能。详见  <a href="/MCSL2Guide/Chapter-2.html#%E8%A1%A5%E5%85%85">补充</a>
  </p>
</div>

#### 内存设置  
<div class="custom-block tip">
  <p class="custom-block-title">提示</p>
  <p class="custom-block-text">
  简易模式仅提供了以<code>M</code>（即<code>MiB</code>）为单位的内存设置。
  </p>
</div>

最小、最大内存可以相等，但请注意**必须达到以下要求**：  
`最小内存 ≤ 最大内存`

#### 服务器核心选择  
Minecraft的服务器核心为以`jar`为扩展名的Java可执行文件。你可以通过`选择核心`来导入你的服务器核心。  
<div class="custom-block tip">
  <p class="custom-block-title">提示</p>
  <p class="custom-block-text">
  你可以通过MCSL2的`下载`功能下载服务器核心。
  </p>
</div>

#### 服务器名称设置  
<div class="custom-block warning">
  <p class="custom-block-title">警告</p>
  <p>
  请勿使用与操作系统冲突的名称，如在Windows操作系统中，以下名称无法使用：<br>
  <code>aux</code>&nbsp;
  <code>com1</code>&nbsp;
  <code>com2</code>&nbsp;
  <code>prn</code>&nbsp;
  <code>con</code>&nbsp;
  <code>lpt1</code>&nbsp;
  <code>lpt2</code>&nbsp;
  <code>nul</code>&nbsp;。
  <br>也不能使用系统中文件/文件夹无法使用的字符，如在Windows操作系统中，不能包含以下字符：<br>
  <code>/</code>&nbsp;
  <code>:</code>&nbsp;
  <code>*</code>&nbsp;
  <code>?</code>&nbsp;
  <code>"</code>&nbsp;
  <code><</code>&nbsp;
  <code>></code>&nbsp;
  <code>|</code>&nbsp;。
  </p>
</div>

当名称不符合规范的时候，程序将会提示。

### 进阶模式  
进阶模式在简易模式的基础上，可再设置JVM的参数，以及服务器输入输出流的编码设置。MCSL2在进阶模式中提供了一些便捷的优化参数可供使用。  
<div class="custom-block tip">
  <p class="custom-block-title">建议</p>
  <p class="custom-block-text">
  进阶模式我认为还是不够完整。如果有任何功能建议，欢迎在
  <a href="https://www.github.com/MCSLTeam/MCSL2/discussions">GitHub Discussions</a>
  中提出。
  </p>
  <p align="right"><i>——LxHTT</i></p>
</div>

### 导入服务器  
MCSL2提供了多种导入服务器的方式/类型。  
#### 导入 不含开服脚本的 完整的 服务器 压缩包  
 - MCSL2会首先检测压缩包**内**的根目录。  
 > 若**只有一个**文件夹，则可以判定服务器的存档在**此文件夹**中，所以会在**此文件夹**中继续寻找服务器，同时将**此文件夹**的名字作为`服务器名称`。  
 >   
 > 但如果服务器位于压缩包**内**的根目录，服务器名称将被设置为`压缩包名称`。  
 - MCSL2随后会解压压缩包到`Servers/服务器名称`的文件夹。  
 - MCSL2自动查找该文件夹中以`.jar`为扩展名的Java可执行文件，供用户选择正确的核心。  
 - 再设置其他参数：`内存`，`Java`，`JVM参数（可选）`，`输入输出流编码（可选）`。  
 - 确认无误后，点击保存。  

#### 导入 含开服脚本的 完整的 服务器 压缩包  
 - MCSL2会首先检测压缩包**内**的根目录。  
 > 若**只有一个**文件夹，则可以判定服务器的存档在**此文件夹**中，所以会在**此文件夹**中继续寻找服务器，同时将**此文件夹**的名字作为`服务器名称`。  
 >   
 > 但如果服务器位于压缩包**内**的根目录，服务器名称将被设置为`压缩包名称`。  
 - MCSL2随后会解压压缩包到`Servers/服务器名称`的文件夹。  
 - MCSL2会列出该文件夹中的文件供用户选择开服脚本。  
 - MCSL2自动识别脚本。
 - 确认无误后，点击保存。  

#### 导入 服务器 存档  
<div class="custom-block tip">
  <p class="custom-block-title">提示</p>
  <p class="custom-block-text">
  此处的定义即为<code>没有开服脚本</code>、<code>没有服务器核心</code>。
  </p>
</div>

 - MCSL2会首先检测压缩包**内**的根目录。  
 > 若**只有一个**文件夹，则可以判定服务器的存档在**此文件夹**中，所以会在**此文件夹**中继续寻找服务器，同时将**此文件夹**的名字作为`服务器名称`。  
 >   
 > 但如果服务器位于压缩包**内**的根目录，服务器名称将被设置为`压缩包名称`。  
 - MCSL2随后会解压压缩包到`Servers/服务器名称`的文件夹。  
 - 再设置其他参数：`服务器核心`、`内存`，`Java`，`JVM参数（可选）`，`输入输出流编码（可选）`。  
 - MCSL2自动识别脚本。  
 - 确认无误后，点击保存。  

#### 导入 MCSL 1 的服务器  
 - 选择MCSL1的运行目录 **（即MCSL1主程序所在文件夹）**
 - 设置服务器名称。 
 - 确认无误后，点击保存。  

#### 导入 MSL 的服务器  
 - 选择MSL的运行目录 **（即MCSL1主程序所在文件夹）**  
 - 设置服务器名称。 
 - 确认无误后，点击导入，等待程序提示导入完成。  

#### 导入 灵工艺我的世界「轻」开服器 的服务器  
 - 选择灵工艺的运行目录 **（即灵工艺主程序所在文件夹）**  
 - 设置服务器名称。 
 - 确认无误后，点击导入，等待程序提示导入完成。  

#### 导入 MCSManager 8 的服务器  
<div class="custom-block tip">
  <p class="custom-block-title">提示</p>
  <p class="custom-block-text">
  尽管MCSM8已停止更新，MCSL2经决定仍对其制作导入选项。导入选项基于其<code>8.9.0 Final Version</code>制作。
  </p>
</div>

 - 选择MCSM8的运行目录。
 - 在MCSL2读取完所有其管理的服务器后，勾选你需要导入的服务器。  
 - 确认无误后，点击导入，等待程序提示导入完成。  

#### 导入 MCSManager 9 的服务器  
<div class="custom-block tip">
  <p class="custom-block-title">提示</p>
  <p class="custom-block-text">
  MCSM9的服务器配置文件与MCSM8的互不兼容，请务必选择正确的方式，以顺利完成导入。
  </p>
</div>

 - 选择MCSM9的**守护进程（daemon）**运行目录。**（不是面板(web)！）**  
 - 在MCSL2读取完所有其管理的服务器后，勾选你需要导入的服务器。  
 - 确认无误后，点击导入，等待程序提示导入完成。  

### 补充
MCSL2针对以下功能，已进行了特殊优化：  
 - Java搜索。  
相对MCSL1来说，MCSL2在力求准确度与完整度的基础上，由开发者<a href="https://www.github.com/AresConnor">Ares Connor</a>与<a href="https://www.github.com/ubby">灰太狼</a>共同开发了新的搜索算法，抛弃了旧版缓慢的单线程全盘搜索。经过大众测试，可在 **0.2~1s** 内找到系统中 **95%** 的Java。  
由于使用模糊搜索，可能有部分Java无法被搜索到，此时请使用手动导入Java。  
也欢迎在GitHub提出建议。

<div>
    <center>
        <br><br>
        <a href="/MCSL2Guide/Chapter-1.html">← Chapter 1 - 序言</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当前章节：Chapter 2 - 添加服务器&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/MCSL2Guide/Chapter-3.html">Chapter 3 - 启动服务器 →</a>
        <br><br><a href="/MCSL2Guide">回到目录</a>
    </center>
</div>