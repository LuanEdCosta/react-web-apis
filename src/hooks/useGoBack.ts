import { useMemo, useCallback } from 'react'
import { To, useNavigate } from 'react-router-dom'

export interface useGoBackReturnedData {
  canGoBack: boolean
  handleGoBack: () => void
  handleGoBackWithFallback: (fallback: To) => void
}

export const useGoBack = (): useGoBackReturnedData => {
  const navigate = useNavigate()

  const canGoBack = useMemo(() => {
    return navigate.length > 0
  }, [navigate])

  const handleGoBack = useCallback(() => {
    return navigate(-1)
  }, [navigate])

  const handleGoBackWithFallback = useCallback(
    (fallback: To) => {
      if (navigate.length) navigate(-1)
      else navigate(fallback)
    },
    [navigate],
  )

  return {
    canGoBack,
    handleGoBack,
    handleGoBackWithFallback,
  }
}
