import { defineConfig } from 'vitepress'

const SPROUT_CUSTOM_ELEMENTS = [
  'sp-dropdown',
  'sp-menu',
  'sp-menu-item',
  'sp-tabs',
  'sp-tab-list',
  'sp-tab',
  'sp-panel',
]

export default defineConfig({
  base: '/Sprout-UI/',
  title: 'Sprout UI',
  description: 'Lightweight, sustainable, zero-dependency UI library.',
  // Compile-time: treat Sprout custom elements as native (not Vue components).
  // Requires full restart of docs dev server (stop then npm run docs:dev) to take effect.
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => SPROUT_CUSTOM_ELEMENTS.includes(tag),
      },
    },
  },
  head: [
    ['meta', { name: 'theme-color', content: '#4a7c59' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  ],
  themeConfig: {
    nav: [
      { text: 'Guide',      link: '/guide/getting-started' },
      { text: 'Foundation', link: '/foundation/typography' },
      { text: 'Layout',     link: '/layout/container' },
      { text: 'Components', link: '/components/buttons' },
      { text: 'Tokens',     link: '/tokens' },
      { text: 'Reference',  link: '/reference/javascript-api' },
      {
        text: 'v1.0',
        items: [
          { text: 'Changelog', link: '/changelog' },
          { text: 'GitHub',    link: 'https://github.com/akhildesai20/Sprout-UI' },
        ]
      }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Theming',         link: '/guide/theming' },
          { text: 'Sustainability',  link: '/guide/sustainability' },
          { text: 'JavaScript API',  link: '/guide/javascript-api' },
        ]
      },
      {
        text: 'Layout',
        items: [
          { text: 'Container', link: '/layout/container' },
          { text: 'Grid',      link: '/layout/grid' },
          { text: 'Stack',     link: '/layout/stack' },
          { text: 'Cluster',   link: '/layout/cluster' },
        ]
      },
      {
        text: 'Foundation',
        items: [
          { text: 'Typography',     link: '/foundation/typography' },
          { text: 'Layout overview', link: '/foundation/layout-overview' },
          { text: 'Buttons',         link: '/components/buttons' },
        ]
      },
      {
        text: 'Forms',
        items: [
          { text: 'Inputs & Fields', link: '/components/inputs' },
          { text: 'Toggle & Range',  link: '/components/toggle' },
        ]
      },
      {
        text: 'Feedback',
        items: [
          { text: 'Alerts',           link: '/components/alerts' },
          { text: 'Badges',           link: '/components/badges' },
          { text: 'Toast',            link: '/components/toast' },
          { text: 'Progress & Meter', link: '/components/progress-meter' },
          { text: 'Spinner',          link: '/components/spinner' },
          { text: 'Skeleton',         link: '/components/skeleton' },
        ]
      },
      {
        text: 'Navigation',
        items: [
          { text: 'Tabs',       link: '/components/tabs' },
          { text: 'Navbar',     link: '/components/navbar' },
          { text: 'Breadcrumb', link: '/components/breadcrumb' },
          { text: 'Pagination', link: '/components/pagination' },
          { text: 'Sidebar',    link: '/components/sidebar' },
        ]
      },
      {
        text: 'Overlays',
        items: [
          { text: 'Accordion', link: '/components/accordion' },
          { text: 'Modal',     link: '/components/modal' },
          { text: 'Dropdown',  link: '/components/dropdown' },
          { text: 'Tooltip',   link: '/components/tooltip' },
        ]
      },
      {
        text: 'Display',
        items: [
          { text: 'Table',      link: '/components/table' },
          { text: 'Card',       link: '/components/card' },
          { text: 'Avatar',     link: '/components/avatar' },
          { text: 'Stat',       link: '/components/stat' },
          { text: 'Code Block', link: '/components/code-block' },
          { text: 'Divider',    link: '/components/divider' },
        ]
      },
      {
        text: 'Tokens',
        items: [
          { text: 'Overview',   link: '/tokens' },
          { text: 'Colors',     link: '/tokens/colors' },
          { text: 'Spacing',    link: '/tokens/spacing' },
          { text: 'Typography', link: '/tokens/typography' },
          { text: 'Radius',     link: '/tokens/radius' },
          { text: 'Motion',     link: '/tokens/motion' },
          { text: 'Z-index',    link: '/tokens/z-index' },
          { text: 'Themes',     link: '/tokens/themes' },
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Sustainability', link: '/reference/sustainability' },
          { text: 'Accessibility',  link: '/reference/accessibility' },
          { text: 'JavaScript API', link: '/reference/javascript-api' },
          { text: 'Design Tokens',  link: '/tokens' },
          { text: 'Changelog',      link: '/changelog' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/akhildesai20/Sprout-UI' }
    ],
    footer: {
      message: 'MIT License · Lightweight by principle. Sustainable by design.',
      copyright: `© ${new Date().getFullYear()} Sprout UI`
    },
    search: { provider: 'local' }
  }
})
