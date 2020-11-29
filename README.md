# file-select-dialog

[![npm version](https://img.shields.io/npm/v/file-select-dialog.svg?style=flat)](https://www.npmjs.com/package/file-select-dialog)
[![size](https://img.shields.io/bundlephobia/min/file-select-dialog)](https://img.shields.io/bundlephobia/min/file-select-dialog)
[![size](https://img.shields.io/npm/dw/file-select-dialog?color=blue)](https://img.shields.io/npm/dw/file-select-dialog?color=blue)
[![codecov](https://codecov.io/gh/TomokiMiyauci/file-select-dialog/branch/main/graph/badge.svg?token=KY5KS2WE4I)](https://codecov.io/gh/TomokiMiyauci/file-select-dialog)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![MIT License](https://img.shields.io/npm/l/file-select-dialog?color=blue&registry_uri=https%3A%2F%2Fregistry.npmjs.com)](https://github.com/TomokiMiyauci/blog/blob/master/LICENSE)

Directly call file select dialog to JavaScript.
Get Back Promise File or FileList object.
No more hacky hiding of `<input type="file">` elements.

## :sparkles: Feature

- Supports ES6 Modules
- Pure Typescript
- Promise
- No dependencies, Optimization, Super slim size
- Modern browser support only
- Supports selecting multiple files and the file type accepts

## :truck: Install

```bash
yarn add file-select-dialog
or
npm i file-select-dialog
```

import like this.

```ts
import { fileDialog } from 'file-select-dialog'
```

## :page_facing_up: Docs

Reference is [here](https://tomokimiyauci.github.io/file-select-dialog/modules/file_dialog.html#filedialog).

### :pencil2: Argument

Parameters `Object`

| key      | type                   | default |
| -------- | ---------------------- | ------- |
| accept   | (string \| stirng[] )? | '\*'    |
| multiple | boolean?               | `false` |
| strict   | boolean?               | `false` |

## :mag: Examples

[Demo](https://file-select-dialog.vercel.app/)

![screenshot](https://res.cloudinary.com/dz3vsv9pg/image/upload/c_scale,f_auto,q_auto,w_1217/v1606026970/screenshot.png)

By default can only select a single file and get a FileList object.

```ts
const onClick = async () => {
  // open file select dialog and waiting user selection then return FileList object.
  const fileList = await fileDialog()
}
```

If the `multiple` parameter is `true`, can select multiple files and get a FileList object.

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

If the parameter of `multiple` is `false` and `strict` is `true`, can get File object directly.
Your editor suggest File object types.

```ts
const onClick = async () => {
  const file = await fileDialog({ strict: true })
}
```

## :bulb: LICENSE

[MIT](https://github.com/TomokiMiyauci/file-select-dialog/blob/main/LICENSE)


