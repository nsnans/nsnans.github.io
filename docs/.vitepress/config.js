import  head  from "./option/head";
import nav from "./option/nav";
import sidebar from "./option/sidebar";

export default {
  title: "nsnsns", //标题
  titleTemplate: "nsnsns", //标题模板
  description: "Blog", //描述
  lastUpdated: true, //开启上次更新时间
  cleanUrls: 'without-subfolders',
  markdown: {
    theme: "nord",
  },
  head,
  // Theme related configurations.[自定义主题]
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "",
    outlineTitle: '🔴🟠🟡🟢🔵🟣🟤⚫⚪',
    outline: [2, 6],
    //导航栏
    nav,
    //侧边栏
    sidebar,
    //社交链接
    socialLinks: [
      { icon: "github", link: "https://github.com" },
      // { icon: "twitter", link: "https://twitter.com/TWI_XXGGG" },
      // { icon: "instagram", link: "https://www.instagram.com/xiexiage/" },
      // {
      //   icon: "youtube",
      //   link: "https://www.youtube.com/channel/UCjzdLs5HAhATbfZH6vaJCEA",
      // },
    ],
    //页脚
    footer: {
      copyright: `Copyright &copy; 2022-present @nsnsns
       <br/><a style="color:red" href="https://beian.miit.gov.cn/" target="_blank">湘ICP备2022004049号-1</a>`,
    },
    // 碳广告
    // carbonAds: {
    //   code: "your-carbon-code",
    //   placement: "your-carbon-placement",
    // },
  },
};
