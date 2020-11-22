export const getDataUrl = (file: File): Promise<string> => {
  const reader = new FileReader()
  return new Promise<string>((resolve) => {
    reader.onload = ({ target }) => {
      if (typeof target?.result === 'string') {
        const a = target.result
        resolve(a)
      }
    }
    reader.readAsDataURL(file)
  })
}
