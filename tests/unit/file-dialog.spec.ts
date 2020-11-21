import {
  createFileInputElement,
  getFileListObj,
  resolver,
  fileDialog
} from '@/file-dialog'
import * as mock from '@/file-dialog'
import { UnknownError, NotReceiveFileList } from '@/error'

describe('fileDialog', () => {
  it('should return promise object', async () => {
    jest.spyOn(mock, 'fileDialog').mockResolvedValue({} as File)
    await expect(fileDialog()).toEqual(Promise.resolve({}))
  })
})

describe('createFileInputElement', () => {
  it('should return input Element what type is file', () => {
    const expected = createFileInputElement({ accept: '*', multiple: false })

    expect.assertions(4)

    expect(expected).toBeInstanceOf(HTMLInputElement)
    expect(expected.accept).toBe('*')
    expect(expected.type).toBe('file')
    expect(expected.multiple).toBeFalsy()
  })
})

describe('resolver', () => {
  it('should throw NotReceiveFileList when it gives files of null', async () => {
    await expect(resolver(null, false)).rejects.toThrowError(NotReceiveFileList)
  })

  it('should return FileList when it gives FileList what length is 1 and multiple is false', async () => {
    await expect(
      resolver(([{}] as unknown) as FileList, false)
    ).resolves.toEqual({})
  })

  it('should throw UnknownError when it gives files length is not equal 1 and multiple is false', async () => {
    await expect(
      resolver(([{}, {}] as unknown) as FileList, false)
    ).rejects.toThrowError(UnknownError)
  })

  it('should return FileList when it gives FileList and multiple is true', async () => {
    await expect(
      resolver(([{}, {}] as unknown) as FileList, true)
    ).resolves.toEqual([{}, {}])
  })
})

describe('getFileListObj', () => {
  it('return File object when files', () => {
    const expected = getFileListObj(([{}] as never) as FileList, false)

    expect(expected).toEqual({})
  })

  it('return null object when files', () => {
    const expected = getFileListObj(([{}, {}] as never) as FileList, false)

    expect(expected).toBeNull()
  })

  it('return FileList object when files', () => {
    const expected = getFileListObj(([{}, {}] as never) as FileList, true)

    expect(expected).toEqual([{}, {}])
  })
})
