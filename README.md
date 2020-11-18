# file-select-dialog

[![npm version](https://img.shields.io/npm/v/file-select-dialog.svg?style=flat)](https://www.npmjs.com/package/file-select-dialog)
[![size](https://img.shields.io/bundlephobia/min/file-select-dialog)](https://img.shields.io/bundlephobia/min/file-select-dialog)

Directly call file select dialog to JavaScript.
Get Back Promise File or FileList object.
No more hacky hiding of `<input type="file">` elements.

## Feature

- Supports ES6 Modules
- Pure Typescript
- Promise
- No dependencies, Super slim (561 bytes)
- Modern browser support only
- Supports selecting multiple files and the file type accepts

## Install

```bash
yarn add file-select-dialog
or
npm i file-select-dialog
```

import like this.

```ts
import { fileDialog } from 'file-select-dialog'
```

## Examples

Get a File object by default.

```ts
const onClick = async () => {
  const file = await fileDialog() // open file select dialog and waiting user selection then return File object. Your editor suggest File object types.
}
```

Get a FileList object when parameters of `multiple` is true.

```ts
const onClick = async () => {
  const fileList = await fileDialog({ multiple: true }) // return FileList object. Your editor suggest FileList object types.
}
```

## LICENSE

MIT
