# はじめに

JavaScript からファイル選択ダイアログを直接呼び出します。
Promise で`File`または`FileList`オブジェクトを取得します。
`<inputtype =" file ">`ハックはもう必要ありません。

## デモ

<playground />

## リリースノート

最新バージョン: ![npm](https://img.shields.io/npm/v/file-select-dialog)

各バージョンの詳細なリリースノートは、[GitHub](https://github.com/TomokiMiyauci/file-select-dialog/blob/main/CHANGELOG.md)で確認できます。

## 導入する

file-select-dialog をプロジェクトに追加するには、2 つの方法があります。

- CDN を通じて パッケージをインポートします。
- npm を使用してインストールします。

## CDN

プロトタイピングなどの目的で、次の最新バージョンを使用できます。

```html
<script src="https://unpkg.com/file-select-dialog"></script>

<script>
  function onClick() {
    const fileList = fileSelectDialog.fileDialog()
  }
</script>

<body>
  <button onclick="onClick()">Button</button>
</body>
```

## npm

with Yarn

```bash
yarn add file-select-dialog
```

with NPM

```bash
npm i file-select-dialog
```

このモジュールにはデフォルトのエクスポートはありません。関数はひとつだけ公開されています。

```ts
import { fileDialog } from 'file-select-dialog'
```

## 使い方

デフォルトでは、単一のファイルのみの選択に制限して`FileList`オブジェクトを取得できます。

```ts
const onClick = async () => {
  // ファイル選択ダイアログを開き、ユーザーの選択を待ってから、FileListオブジェクトを返します。
  const fileList = await fileDialog()
}
```

`multiple`パラメータが`true`の場合、複数のファイル選択を許容し、`FileList`オブジェクトを取得できます。

```ts
const onClick = async () => {
  const fileList = await fileDialog({ multiple: true })
}
```

`accept`パラメータは、選択可能なファイルタイプを制限します。

```ts
const onClick = async () => {
  const fileList = await fileDialog({ accept: '.png' })

  // 複数のファイルタイプ
  const fileList = await fileDialog({ accept: ['.jpg', '.pdf'] })
}
```

### :zap: 高度な使い方

`multiple`のパラメータが`falseで`、`strict`が`true`の場合、`File`オブジェクトを直接取得できます。 エディタは`File`オブジェクトを推論します。

```ts
const onClick = async () => {
  const file = await fileDialog({ strict: true })

  // 以下と等価
  const file = await fileDialog().then((fileList) => fileList[0])
}
```
