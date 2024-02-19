# 鸣谢

MCSL 能有今日的成就，离不开各位的支持。

一路走来经历了大大小小的风雨，感谢每一位为 MCSL 做出贡献的小伙伴，你们一直在这里。

## 赞助者

<p id="sponsors"></p>

<script setup>
    import { marked } from "./scripts/marked.esm.js";
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
            avatar: 'https://cravatar.cn/avatar/63A2B66B15D1992C2A911B460658E0A7',
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
            avatar: 'https://cravatar.cn/avatar/5958AC2B84CC3DB6E7A1BF7FA6556AF2',
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
            avatar: 'https://cravatar.cn/avatar/0BC1C375B0DC507489D8E9AF15F66786',
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
            avatar: 'https://cravatar.cn/avatar/84A1A591D21E1C91581BF55E32E87D7C',
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
            avatar: 'https://cravatar.cn/avatar/5CAE2AB14D106AD43790EF7DFF047157',
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
            avatar: 'https://cravatar.cn/avatar/79AA975410BFF94949965673A60071DB',
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
            avatar: 'https://cravatar.cn/avatar/581D7A85FB19AE52A34A93447F707B17',
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
            avatar: 'https://cravatar.cn/avatar/44EBC717DBCE6599F0264767209553F0',
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
            avatar: 'https://cravatar.cn/avatar/7EAB20B734A3B5C39048DB99570525CD',
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
            avatar: 'https://cravatar.cn/avatar/8E3DD2950850D9ED9295062F082BB13C',
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
            avatar: 'https://cravatar.cn/avatar/AEF3ED943CC115022C4E3A3E0C058862',
            name: 'XieXiLin',
            title: '规范化人员',
            links: [
                {
                    icon: 'github',
                    link: 'https://github.com/XieXiLin2'
                },
            ]
        },
        {
            avatar: 'https://cravatar.cn/avatar/090C3F04DF0E29A189BA7DE5563611E3',
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