/**
 * @type {import('vitepress').UserConfig}
 */

const title = 'File Select Dialog'
const description = 'Directly call file select dialog from JavaScript'
const ja = {
  description: 'JavaScriptからファイル選択ダイアログを直接呼び出す'
}
const baseUrl = 'https://file-select-dialog.vercel.app'
const baseHead = [
  ['meta', { property: 'og:title', content: title }],
  ['meta', { property: 'og:image', content: `${baseUrl}/cover.png` }],
  [
    'meta',
    {
      property: 'og:url',
      content: baseUrl
    }
  ],
  [
    'meta',
    {
      property: 'og:type',
      content: 'website'
    }
  ],
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:site', content: '@miyauchi_tomoki' }],
  ['link', { rel: 'alternate', href: baseUrl, hreflang: 'x-default' }]
]
module.exports = {
  title,
  description,

  locales: {
    '/': {
      lang: 'en-US',
      head: [
        ['meta', { property: 'og:description', content: description }],
        ...baseHead
      ]
    },

    '/ja/': {
      lang: 'ja-JP',
      description: ja.description,
      head: [
        ['meta', { property: 'og:description', content: ja.description }],
        ...baseHead
      ]
    }
  },

  themeConfig: {
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        nav: [
          { text: 'Guide', link: '/guide', activeMatch: '^/guide' },
          {
            text: 'API',
            link: '/api',
            activeMatch: '^/api'
          },
          {
            text: 'Release Notes',
            link:
              'https://github.com/TomokiMiyauci/file-select-dialog/blob/main/CHANGELOG.md'
          }
        ],
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        sidebar: {
          '/api': getConfigSidebar(),
          '/guide': getGuideSidebar()
        }
      },

      '/ja/': {
        label: '日本語',
        selectText: '言語',
        nav: [
          { text: 'ガイド', link: '/ja/guide', activeMatch: '^/ja/guide' },
          {
            text: 'API ',
            link: '/ja/api',
            activeMatch: '^/ja/api'
          },
          {
            text: 'リリースノート',
            link:
              'https://github.com/TomokiMiyauci/file-select-dialog/blob/main/CHANGELOG.md'
          }
        ],
        editLinkText: 'GitHubでこのページを編集',
        lastUpdated: '最終更新',

        sidebar: {
          '/ja/api': [
            {
              text: 'API Reference',
              link: '/ja/api'
            }
          ],
          '/ja/guide': [
            {
              text: 'Introduction',
              link: '/ja/guide'
            }
          ]
        }
      }
    },
    repo: 'TomokiMiyauci/file-select-dialog',
    logo: '/logo.png',
    docsDir: 'docs',
    docsBranch: 'main',

    editLinks: true
  }
}

function getGuideSidebar() {
  return [
    {
      text: 'Introduction',
      link: '/guide'
    }
  ]
}

function getConfigSidebar() {
  return [
    {
      text: 'API Reference',
      link: '/api'
    }
  ]
}
