// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Buttplug Developer Guide',
  staticDirectories: ['examples', 'static'],
  tagline: 'Everything you wanted to know about putting computers in your butt, but were not afraid to ask.',
  url: 'https://buttplug-developer-guide.docs.buttplug.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'Nonpolynomial Labs, LLC', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    'docusaurus-plugin-matomo',
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Buttplug Developer Guide',
        logo: {
          alt: 'Buttplug.io Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://github.com/buttplugio/buttplug-developer-guide',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Buttplug Developer Guide',
                to: '/',
              },
              {
                label: 'Buttplug Message Spec',
                to: 'https://buttplug-spec.docs.buttplug.io',
              },
              {
                label: 'Sex Toy Protocols I Have Known And Loved',
                to: 'https://stpihkal.docs.buttplug.io',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discourse Forum',
                href: 'https://discuss.buttplug.io',
              },
              {
                label: 'Discord',
                href: 'https://discord.buttplug.io',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/buttplugio',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Nonpolynomial Blog',
                to: 'https://nonpolynomial.com/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/buttplugio',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/buttplugio',
              },
              {
                label: 'Mastodon',
                href: 'https://buttplug.zone/@buttplugio',
              },
              {
                label: 'Youtube',
                href: 'https://youtube.buttplug.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nonpolynomial. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['python', 'csharp', 'rust', 'powershell'],
      },
      matomo: {
        matomoUrl: 'https://nonpolynomial.matomo.cloud/',
        siteId: '4',
        phpLoader: 'matomo.php',
        jsLoader: 'matomo.js',
      },
    }),
};

module.exports = config;
