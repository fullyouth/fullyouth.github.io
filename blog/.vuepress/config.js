const path = require("path");
module.exports = (options, context, api) => {
  return {
    title: "haoqi",
    description: "Web development, Frontend, JavaScript",
    theme: "@vuepress/blog",
    plugins: [
      // [
      //   "@vuepress/google-analytics",
      //   {
      //     ga: process.env.GA
      //   }
      // ]
    ],
    themeConfig: {
      directories: [
        {
          id: "zh",
          dirname: "_zh",
          title: "haoqi",
          path: "/zh/",
          itemPermalink: "/zh/:year/:month/:day/:slug",
          pagination: {
            lengthPerPage: 20,
          },
        },
      ],
      dateFormat: `YYYY-MM-DD 周d`,
      sitemap: {
        hostname: "https://github.com/fullyouth"
      },
      // comment: {
      //   service: "vssue",
      //   autoCreateIssue: true,
      //   prefix: "[Post]",
      //   owner: "newsbielt703",
      //   repo: "billy",
      //   clientId: "4119e8c1b0093fc5d034",
      //   clientSecret: "1ac1176791689b1ca31037c39489fc7b0667015d"
      // },
      // newsletter: {
      //   endpoint:
      //     "https://gmail.us5.list-manage.com/subscribe/post?u=942c0d587f8ea28269e80d6cd&amp;id=d77d789d53"
      // },
      // feed: {
      //   canonical_base: "https://billyyyyy3320.com/",
      //   posts_directories: ["/_en/"]
      // },
      nav: [
        {
          text: "博客",
          link: "/zh/"
        },
        {
          text: "算法",
          link: "/tag/算法训练营/"
        },
        {
          text: "Github",
          link: "https://github.com/fullyouth"
        }
      ],
      footer: {
        contact: [
          {
            type: "github",
            link: "https://github.com/fullyouth"
          },
          // {
          //   type: "mail",
          //   link: "fullyouth@163.com"
          // }
        ],
        copyright: [
          {
            text: "",
            link: ""
          }
        ]
      },
      smoothScroll: true
    },
    alias: {
      "@assets": path.resolve(__dirname, "../assets")
    }
  };
};
