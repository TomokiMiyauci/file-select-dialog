import { UnknownError, NotReceiveFileList } from './error'
import { joinArrayString } from './util'
const DEFAULT_PARAMETERS: Parameters = {
  accept: '*',
  multiple: false,
  strict: false
}

export interface Parameters<
  T extends boolean = false,
  U extends boolean = false
> {
  accept: string | string[]
  multiple: T
  strict: U
}

type PickFile<
  T extends boolean = false,
  U extends boolean = false
> = T extends false ? (U extends true ? File : FileList) : FileList

/**
 * Call file select dialog programmatically.
 * @param {object} [parameters] optional
 * @returns {Promise} Promise <File | FileList> if strict is false, return FileList object, if multiple is false and strict is true return File object
 */
export const fileDialog = <
  T extends boolean = false,
  U extends boolean = false
>(
  parameters?: Partial<Parameters<T, U>>
): Promise<PickFile<T, U>> => {
  const { accept, multiple, strict } = { ...DEFAULT_PARAMETERS, ...parameters }
  const input = createFileInputElement({
    multiple,
    accept: Array.isArray(accept) ? joinArrayString(accept) : accept
  })
  return new Promise<PickFile<T, U>>((resolve) => {
    input.onchange = () => {
      resolve(resolver(input.files, multiple as T, strict as U))
      input.remove()
    }
    input.click()
  })
}

export const resolver = <T extends boolean, U extends boolean>(
  fileList: HTMLInputElement['files'],
  multiple: T,
  strict: U
) => {
  return new Promise<PickFile<T, U>>((resolve, reject) => {
    if (!fileList) return reject(new NotReceiveFileList())
    const file = getFileListObj(fileList, multiple, strict)
    if (!file) return reject(new UnknownError())

    resolve(file)
  })
}

export const getFileListObj = <T extends boolean, U extends boolean>(
  files: NonNullable<HTMLInputElement['files']>,
  multiple: T,
  strict: U
): PickFile<T, U> | null => {
  if (!multiple && strict) {
    if (files.length === 1) {
      return <PickFile<T, U>>files[0]
    } else {
      return null
    }
  } else if (files.length) {
    return <PickFile<T, U>>files
  } else {
    return null
  }
}

export const createFileInputElement = ({
  accept,
  multiple
}: Pick<HTMLInputElement, 'accept' | 'multiple'>): HTMLInputElement => {
  const input = document.createElement('input')
  input.type = 'file'
  input.multiple = multiple
  input.accept = accept
  return input
}
