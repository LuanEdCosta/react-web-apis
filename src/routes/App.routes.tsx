import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home, WebCrypto, PageVisibility, ResizeObserver } from 'src/pages'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web-crypto" element={<WebCrypto />} />
        <Route path="/page-visibility" element={<PageVisibility />} />
        <Route path="/resize-observer" element={<ResizeObserver />} />
      </Routes>
    </BrowserRouter>
  )
}
