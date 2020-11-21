import { UnknownError, NotReceiveFileList } from './error'
import { joinArrayString } from './util'
const DEFAULT_PARAMETERS: Parameters = {
  accept: '*',
  multiple: false
}

export interface Parameters<T extends boolean = false> {
  accept: string | string[]
  multiple: T
}

type PickFile<T extends boolean = false> = T extends true ? FileList : File

/**
 * Call file select dialog programmatically.
 * @param {object} [parameters] optional
 * @returns {Promise} Promise <File | FileList> if multiple is true, return FileList object, if false return File object
 */
export const fileDialog = <T extends boolean = false>(
  parameters?: Partial<Parameters<T>>
): Promise<PickFile<T>> => {
  const { accept, multiple } = { ...DEFAULT_PARAMETERS, ...parameters }
  const input = createFileInputElement({
    multiple,
    accept: Array.isArray(accept) ? joinArrayString(accept) : accept
  })
  return new Promise<PickFile<T>>((resolve) => {
    input.onchange = () => {
      resolve(resolver(input.files, multiple as T))
      input.remove()
    }
    input.click()
  })
}

export const resolver = <T extends boolean>(
  fileList: HTMLInputElement['files'],
  multiple: T
) => {
  return new Promise<PickFile<T>>((resolve, reject) => {
    if (!fileList) return reject(new NotReceiveFileList())
    const file = getFileListObj(fileList, multiple)
    if (!file) return reject(new UnknownError())

    resolve(file)
  })
}

export const getFileListObj = <T extends boolean>(
  files: NonNullable<HTMLInputElement['files']>,
  multiple: T
): PickFile<T> | null => {
  if (multiple) {
    return <PickFile<T>>files
  } else if (files.length === 1) {
    // It is not assume files length is 1.

    return <PickFile<T>>files[0]
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
