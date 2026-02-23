import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Go Basics',
  tagline: 'In-depth articles on Go internals and best practices',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  // Plausible analytics only — Codapi is loaded via clientModules after React hydration
  // to avoid React #418 (custom element upgrade racing with hydration).
  scripts: [
    {src: 'https://plausible.appro.ovh/js/script.js', defer: true, 'data-domain': 'gobasics.appro.ovh'},
  ],

  // Load Codapi after React has hydrated the page (prevents hydration mismatch)
  clientModules: ['./src/clientModules/codapi.ts'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    // Suppress the harmless "Critical dependency" warning from mermaid → monaco-editor types.
    // The warning comes from vscode-languageserver-types using dynamic require() inside mermaid's
    // bundle. It only affects the server-side compilation chunk and has no runtime impact.
    function suppressMermaidWarning() {
      return {
        name: 'suppress-mermaid-webpack-warning',
        configureWebpack() {
          return {
            ignoreWarnings: [
              {module: /vscode-languageserver-types/},
            ],
          };
        },
      };
    },
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        docsRouteBasePath: '/',
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Go Basics',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Articles',
        },
        {
          href: 'https://github.com/Fimeo/gobasics',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Source',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Fimeo/gobasics',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Go Basics. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
