---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/XXGGG.png',
    name: '谢夏戈',
    title: 'XXGGG',
    links: [
      { icon: 'github', link: 'https://github.com/XXGGG' },
      { icon: 'twitter', link: 'https://twitter.com/TWI_XXGGG' },
      { icon: 'youtube', link: 'https://space.bilibili.com/5276030' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      XXG
    </template>
    <template #lead>
    <p>👋 我叫谢夏戈，1996年出生，我是一个Coder！</p>
    <br>
    <p>我❤️喜欢钢铁侠、蜘蛛侠</p>
    <br>
    <p>⌨️编程 💠魔方 🎮游戏 🏓乒乓球 🏹射箭 🎨画画 🎹钢琴</p>
</template>
</VPTeamPageTitle>
<VPTeamMembers
    :members="members"
  />
</VPTeamPage>
