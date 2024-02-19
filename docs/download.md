# 下载

::: warning 警告
请注意，我们仅对最新版本进行维护，任何旧版本存在的问题请先确认最新版仍存在再反馈。
:::

## 通过 GitHub 下载

[https://github.com/MCSLTeam/MCSL2/releases](https://github.com/MCSLTeam/MCSL2/releases)

## 通过 Natayark 云盘 下载  

[https://drive.zyghit.cn/s/y1Fk](https://drive.zyghit.cn/s/y1Fk)

## 通过 ZCloud File Website 下载  

[https://file.mcsl.com.cn/MCSL2/Releases](https://file.mcsl.com.cn/MCSL2/Releases)

## 通过 Orangepi Cloud 下载  

[https://mcsl-dow.haiweb.ink/s/jRfM](https://mcsl-dow.haiweb.ink/s/jRfM)

## 通过 蓝奏云 下载

<script>
    export default {
        methods: {
            copyTextToClipboard() {
                // 创建一个隐藏的textarea用于存储要复制的文本
                var textarea = document.createElement('textarea');
                // 将其添加到DOM中，以便能够访问它（必须在DOM树中以激活选择和复制）
                document.body.appendChild(textarea);
                // 设置textarea的值为要复制的文本
                textarea.value = "MCSL";
                // 将焦点移到textarea上并选择内容
                textarea.select();
                try {
                    // 执行浏览器的复制命令
                    var successful = document.execCommand('copy');
                    var copyPwdTip = document.getElementById('copyPwdTip');
                    if (successful) {
                        copyPwdTip.textContent = "已复制到剪贴板！";
                    } else {
                        copyPwdTip.textContent = "复制失败！（密码：MCSL）";
                    }
                } catch (err) {
                    console.log('复制到剪贴板时发生错误: ', err);
                }
                // 完成后从DOM中移除textarea
                document.body.removeChild(textarea);
            }
        }
    }
</script>
<button id="copyBtn" class="myButton medium brand" @click="copyTextToClipboard()">点击复制密码</button> <p id="copyPwdTip"> </p>

[蓝奏云 ①](https://lxht.lanzoum.com/b01edy9tg)

[蓝奏云 ②](https://lxht.lanzoux.com/b01edy9tg)

## 其他  

如果 MCSL2 Windows 版缺失 aria2c.exe 可在 [此处](hhttps://file.mcsl.com.cn/MCSL2/Resources/aria2c.exe) 下载，并请将文件放进 `./MCSL2/Aria2/` 中。
