import { joinArrayString } from '@/util'

describe('joinArrayString', () => {
  it('return ".png,.jpg" when it gives [".png", ".jpg"]', () => {
    const expected = joinArrayString(['.png', '.jpg'])

    expect(expected).toBe('.png,.jpg')
  })

  it('return ".png" when it gives [".png"]', () => {
    const expected = joinArrayString(['.png'])

    expect(expected).toBe('.png')
  })

  it('return "" when it gives [""]', () => {
    const expected = joinArrayString([''])

    expect(expected).toBe('')
  })

  it('return "" when it gives []', () => {
    const expected = joinArrayString([])

    expect(expected).toBe('')
  })

  it('return ",,," when it gives [",", ","]', () => {
    const expected = joinArrayString([',', ','])

    expect(expected).toBe(',,,')
  })
})
