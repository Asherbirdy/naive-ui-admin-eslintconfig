
export const downloadUrl = (response: BlobPart) => {
  const url = window.URL.createObjectURL(new Blob([response], { type: 'text/csv' }))
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', '產品資料.csv')
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  window.URL.revokeObjectURL(url)
}