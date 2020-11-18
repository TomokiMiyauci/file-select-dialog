import { UnknownError, NotReceiveFileList } from './error'

const DEFAULT_PARAMETERS: Parameters = {
  accept: '*',
  multiple: false
}

export interface Parameters<T extends boolean = false> {
  accept: string
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
  return new Promise<PickFile<T>>((resolve, reject) => {
    const { accept, multiple } = { ...DEFAULT_PARAMETERS, ...parameters }
    const input = document.createElement('input')
    input.type = 'file'
    input.multiple = multiple
    input.accept = accept

    const onChange = (): void => {
      resolver()
      input.remove()
    }

    input.onchange = onChange

    const resolver = (): void => {
      const { files } = input
      if (!files) {
        reject(new NotReceiveFileList())
        return
      }

      if (multiple) {
        resolve(<PickFile<T>>files)
      } else if (files.length === 1) {
        // It is not assume files length is 1.

        resolve(<PickFile<T>>files[0])
      } else {
        reject(new UnknownError())
      }
    }

    input.click()
  })
}
