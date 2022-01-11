const loadCss = (path) => {
  if (!document) return
  const link = document.createElement('link')
  link.href = path
  link.rel = 'stylesheet'
  link.type = 'text/css'
  document.body.appendChild(link)
}

const loadJs = (path) => {
  if (!document) return
  const el = document.createElement('script')
  el.src = path
  document.body.appendChild(el)
}
