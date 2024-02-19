# 鸣谢

MCSL 能有今日的成就，离不开各位的支持。

一路走来经历了大大小小的风雨，感谢每一位为 MCSL 做出贡献的小伙伴，你们一直在这里。

## 赞助者

<p id="sponsors"></p>

<script setup>
    import { marked } from "./marked.esm.js";
    import { VPTeamMembers } from 'vitepress/theme';
    async function loadSponsors() {
        try {
            const response = await fetch('https://github.moeyy.xyz/https://raw.githubusercontent.com/MCSLTeam/MCSL2/master/Sponsors.md');
            const markdownText = await response.text();
            document.getElementById('sponsors').innerHTML = marked(markdownText);
        } catch (error) {
            console.error('Error fetching and rendering Markdown:', error);
        }
    }

    loadSponsors();
    const members = [
        {
            avatar: 'https://www.github.com/LxHTT.png',
            name: '落雪无痕LxHTT',
            title: '总开发 / 总设计 / 创始人',
            links: [
                {
                    icon: 'github',
                    link: 'https://github.com/LxHTT'
                },
            ]
        },
        {
            avatar: 'https://www.github.com/AresConnor.png',
            name: '爱喝矿泉水',
            title: '副开发 / 创始人',
            links: [
                {
                    icon: 'github',
                    link: 'https://github.com/AresConnor'
                },
            ]
        },
        {
            avatar: 'https://www.github.com/shenjackyuanjie.png',
            name: 'shenjack',
            title: '副开发',
            links: [
                {
                    icon: 'github',
                    link: 'https://github.com/shenjackyuanjie'
                },
            ]
        },
        {
            avatar: 'https://www.github.com/lgc2333.png',
            name: '饼干',
            title: '副开发',
            links: [
                {
                    icon: 'github',
                    link: 'https://github.com/lgc2333'
                },
            ]
        },
        {
            avatar: 'https://www.github.com/ltzXiaoYanMo.png',
            name: '烟墨',
            title: '副开发 / 运维',
            links: [
                {
                    icon: 'github',
                    link: 'https://github.com/ltzXiaoYanMo'
                },
            ]
        },
        {
            avatar: 'https://www.github.com/daizihan233.png',
            name: '括弧',
            title: '运维',
            links: [
                {
                    icon: 'github',
                    link: 'https://github.com/daizihan233'
                },
            ]
        },
        {
            avatar: 'https://www.github.com/ztsinsun.png',
            name: 'Z_Tsin',
            title: '副开发 / 运维',
            links: [
                {
                    icon: 'github',
                    link: 'https://github.com/ztsinsun'
                },
            ]
        },
        {
            avatar: 'https://www.github.com/hengshizhi.png',
            name: '星姮十织',
            title: '创新建设者',
            links: [
                {
                    icon: 'github',
                    link: 'https://github.com/hengshizhi'
                },
            ]
        },
        {
            avatar: 'https://cravatar.cn/avatar/D92B5C45B436DEC7B45366663657500D',
            name: '知魚.',
            title: 'MCSL1 荣誉开发 / 吉祥物 / 大蛇'
        },
        {
            avatar: 'https://www.github.com/SnowballXueQiu.png',
            name: '雪球',
            title: '创新建设者',
            links: [
                {
                    icon: 'github',
                    link: 'https://github.com/SnowballXueQiu'
                },
            ]
        },
        {
            avatar: 'https://www.github.com/wyx55520.png',
            name: '锅盖',
            title: 'MCSL2 荣誉开发 / MCSL 灵感建设者 / 创始人',
            links: [
                {
                    icon: 'github',
                    link: 'https://github.com/wyx55520'
                },
            ]
        },
        {
            avatar: 'https://www.github.com/XieXiLin2.png',
            name: 'XieXiLin',
            title: '维护人员',
            links: [
                {
                    icon: 'github',
                    link: 'https://github.com/XieXiLin2'
                },
            ]
        },
        {
            avatar: 'https://www.github.com/StarryCamile.png',
            name: 'Yurnu',
            title: '创新建设者',
            links: [
                {
                    icon: 'github',
                    link: 'https://github.com/StarryCamile'
                },
            ]
        },
    ]
</script>

## 开发组人员
也要感谢我们的开发组成员，他们同样为了 MCSL开发组 及其下的项目开发添砖加瓦。

<VPTeamMembers size="small" :members="members"/>