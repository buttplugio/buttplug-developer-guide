// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: [
      "/",
      "/foreword.md",
      {
        title: "Flared Basics",
        collapsable: false,
        children: [
          "/intro/introduction.md",
          "/intro/how-to-read.md",
          "/intro/buttplug-ethics.md",
          "/intro/architecture.md",
        ]
      },
      {
        title: "Sticking Buttplug In",
        collapsable: false,
        children: [
          "/writing-buttplug-applications/intro.md",
          "/writing-buttplug-applications/api-basics.md",
          "/writing-buttplug-applications/connectors.md",
          "/writing-buttplug-applications/connecting.md",
          "/writing-buttplug-applications/logging.md",
          "/writing-buttplug-applications/device-enum.md",
          "/writing-buttplug-applications/device-control.md",
          "/writing-buttplug-applications/application.md",
        ]
      },
      {
        title: "Inflating Buttplug",
        collapsable: false,
        children: [
          "/extending-buttplug-core/intro.md"
        ]
      },
    ],
  },
  plugins: [
    [
      "vuepress-plugin-matomo",
      {
        'siteId': 9,
        'trackerUrl': "https://matomo.nonpolynomial.com/"
      }
    ],
    "@vuepress/plugin-back-to-top",
    "vuepress-plugin-tabs"
  ]
};
