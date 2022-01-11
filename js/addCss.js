function addCss(path) {
  if (!document) return
  const link = document.createElement('link')
  link.href = path
  link.rel = 'stylesheet'
  link.type = 'text/css'
  document.body.appendChild(link)
}
