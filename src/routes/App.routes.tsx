import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { HomePage } from 'src/modules/Home'
import { PageVisibilityPage } from 'src/modules/PageVisibility'
import { ResizeObserverPage } from 'src/modules/ResizeObserver'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page-visibility" element={<PageVisibilityPage />} />
        <Route path="/resize-observer" element={<ResizeObserverPage />} />
      </Routes>
    </BrowserRouter>
  )
}
