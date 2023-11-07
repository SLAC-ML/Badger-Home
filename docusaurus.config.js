// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github
const darkCodeTheme = require('prism-react-renderer').themes.dracula

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Badger',
  tagline: 'The Missing Optimizer in ACR',
  url: 'https://SLAC-ML.github.io',
  baseUrl: '/Badger/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'SLAC-ML', // Usually your GitHub org/user name.
  projectName: 'Badger', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/SLAC-ML/Badger-Home/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/SLAC-ML/Badger-Home/edit/master/',
        },
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
        title: 'Badger',
        logo: {
          alt: 'Badger Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            // dropdownActiveClassDisabled: true,
          },
          {
            href: 'https://github.com/SLAC-ML/Badger',
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
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Tutorial',
                to: '/docs/getting-started/tutorial',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/badger',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/badger',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/badger',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/SLAC-ML/Badger',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Machine Learning Initiative, SLAC National Accelerator Laboratory. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['python'],
      },
    }),
}

module.exports = config
