# API

## Parameter

| Key      | Type      | Default   | Description         |
| -------- | --------- | --------- | ------------------- | --------------------------- |
| multiple | `boolean` | `false`   | Selectable multiple |
| accept   | `string   | string[]` | ''                  | `'.png'` `['.jpg', '.svg']` |
| strict   | `boolean` | `false`   | Strict mode         |

## Type Definition

```ts
fileDialog<T, U>(parameters?: Partial<Parameters<T, U>>): Promise<PickFile<T, U>>

interface Parameters<T extends boolean = false, U extends boolean = false> {
    accept: string | string[];
    multiple: T;
    strict: U;
}
declare type PickFile<T extends boolean = false, U extends boolean = false> = T extends false ? (U extends true ? File : FileList) : FileList;
```

| Parameter                         | Return value |
| --------------------------------- | ------------ |
| `{multiple: false, strict: true}` | `File`       |
| `*`                               | `FileList`   |
