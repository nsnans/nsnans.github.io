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
    name: 'è°¢å¤æ',
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
    <p>ð æå«è°¢å¤æï¼1996å¹´åºçï¼ææ¯ä¸ä¸ªCoderï¼</p>
    <br>
    <p>æâ¤ï¸åæ¬¢é¢éä¾ ãèèä¾ </p>
    <br>
    <p>â¨ï¸ç¼ç¨ ð é­æ¹ ð®æ¸¸æ ðä¹ä¹ç ð¹å°ç®­ ð¨ç»ç» ð¹é¢ç´</p>
</template>
</VPTeamPageTitle>
<VPTeamMembers
    :members="members"
  />
</VPTeamPage>
