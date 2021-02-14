# API

## パラメータ

| キー     | 型        | デフォルト | 説明         |
| -------- | --------- | ---------- | ------------ | --------------------------- |
| multiple | `boolean` | `false`    | 複数選択可か |
| accept   | `string   | string[]`  | ''           | `'.png'` `['.jpg', '.svg']` |
| strict   | `boolean` | `false`    | 厳格モード   |

## 型定義

```ts
fileDialog<T, U>(parameters?: Partial<Parameters<T, U>>): Promise<PickFile<T, U>>

interface Parameters<T extends boolean = false, U extends boolean = false> {
    accept: string | string[];
    multiple: T;
    strict: U;
}
declare type PickFile<T extends boolean = false, U extends boolean = false> = T extends false ? (U extends true ? File : FileList) : FileList;
```

| パラメータ                        | 戻り値     |
| --------------------------------- | ---------- |
| `{multiple: false, strict: true}` | `File`     |
| `*`                               | `FileList` |
