# Introduction

Directly call file select dialog from JavaScript.
Get Back Promise File or FileList object.
No more hacky hiding of `<input type="file">` elements.

## Release Notes

Latest version: ![npm](https://img.shields.io/npm/v/file-select-dialog)

Detailed release notes for each version are available on [GitHub](https://github.com/TomokiMiyauci/file-select-dialog/blob/main/CHANGELOG.md).

## Getting Started

There are two primary ways of adding file-select-dialog to a project:

- Import it as a CDN package on the page
- Install it using npm

## CDN

For prototyping or learning purposes, you can use the latest version with:

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

This module has no default export.
It has a simple function.

```ts
import { fileDialog } from 'file-select-dialog'
```

## Usage

By default can only select a single file and get a `FileList` object.

```ts
const onClick = async () => {
  // open file select dialog and waiting user selection then return FileList object.
  const fileList = await fileDialog()
}
```

If the `multiple` parameter is `true`, can select multiple files and get a `FileList` object.

```ts
const onClick = async () => {
  const fileList = await fileDialog({ multiple: true })
}
```

The `accept` parameter limit the selecable file types.

```ts
const onClick = async () => {
  const fileList = await fileDialog({ accept: '.png' })

  // multiple acceptable types
  const fileList = await fileDialog({ accept: ['.jpg', '.pdf'] })
}
```

### :zap: Advanced

If the parameter of `multiple` is `false` and `strict` is `true`, can get `File` object directly.
Your editor suggest `File` object types.

```ts
const onClick = async () => {
  const file = await fileDialog({ strict: true })

  // Equal as below
  const file = await fileDialog().then((fileList) => fileList[0])
}
```
