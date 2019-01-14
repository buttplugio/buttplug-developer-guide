// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: [
      "/",
      "/foreword.md",
      "/introduction.md",
      "/architecture.md",
      {
        title: "Writing Buttplug Applications",
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
