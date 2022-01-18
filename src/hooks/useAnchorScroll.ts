import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useAnchorScroll = (): void => {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const anchorSelector = `a[href='${pathname}${hash}']`
        const anchorElement = document.querySelector(anchorSelector)
        anchorElement?.scrollIntoView({ behavior: 'smooth' })
      }, 0)
    } else {
      window.scrollTo(0, 0)
    }
  }, [hash, pathname])
}
