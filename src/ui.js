/* eslint react/react-in-jsx-scope: 0, react/display-name: 0 */
'use strict'
const { h, Text } = require('ink') // eslint-disable-line no-unused-vars
const SelectInput = require('ink-select-input')
const opn = require('opn')

const open = url => opn(url, { wait: false })

const handleSelect = item => {
  if (item.url) {
    open(item.url)
  }

  if (item.action) {
    item.action()
  }
}

const items = [
  {
    label: 'Twitter',
    url: 'https://twitter.com/AdobeXD',
  },
  {
    label: '---日本語ページ---',
    url: 'https://www.adobe.com/jp/products/xd.html',
  },
  {
    label: '最新機能一覧',
    url: 'https://www.adobe.com/jp/products/xd/features.html',
  },
  {
    label: '公式ブログ（連載 Adobe XD アップデート）',
    url: 'https://blogs.adobe.com/japan/serialization/adobe-xd-update/',
  },
  {
    label: 'Adobe XD ユーザーガイドの新機能の項',
    url: 'https://helpx.adobe.com/jp/xd/user-guide.html/jp/xd/help/whats-new.ug.html',
  },
  {
    label: 'Adobe XD Trail（動画で学ぶ総合学習プログラム）',
    url: 'https://xdtrail.com/',
  },
  {
    label: '---English Page---',
    url: 'https://www.adobe.com/africa/products/xd.html',
  },
  {
    label: 'newest features',
    url: 'https://www.adobe.com/africa/products/xd/features.html',
  },
  {
    label: 'Adobe Blog',
    url: 'https://blog.adobe.com/',
  },
  {
    label: 'Adobe XD User Guide the latest release of XD.',
    url: 'https://helpx.adobe.com/cy_en/xd/help/whats-new.html',
  },
  {
    label: 'Let\'s XD.',
    url: 'https://letsxd.com/',
  },
  {
    label: '------',
    url: '',
  },
  {
    label: 'Quit（終了）',
    action() {
      process.exit() // eslint-disable-line no-process-exit,unicorn/no-process-exit
    },
  },
]

module.exports = () => (
  <div>
    <br />
    <div>
      <Text>Adobe XDの最新機能に関するURLをまとめました</Text><br/>
      <Text>Here's a list of URLs for the latest Adobe XD features</Text>
    </div>
    <br />
    <SelectInput items={items} onSelect={handleSelect} />
  </div>
)
