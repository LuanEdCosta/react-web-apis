import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { SectionHeader, ExternalLink } from 'src/components'

import { LINKS } from './Links'

export const ResizeObserverClass: React.FC = () => {
  const { t } = useTranslation('ResizeObserver', {
    keyPrefix: 'resizeObserverClass',
  })

  const { t: t1 } = useTranslation('Common')

  const [elementColor, setElementColor] = useState('bg-purple-500')

  const resizeObserver = useMemo(() => {
    return new window.ResizeObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target.clientWidth < 1000) {
          setElementColor('bg-green-500')
        } else {
          setElementColor('bg-purple-500')
        }
      })
    })
  }, [])

  useEffect(() => {
    resizeObserver.observe(document.documentElement)
    return () => {
      resizeObserver.unobserve(document.documentElement)
    }
  }, [resizeObserver])

  return (
    <div>
      <SectionHeader
        className="mb-8"
        title={t('title')}
        anchor="resizeObserverClass"
        subtitle={
          <>
            <span>{t('subtitle')}</span>
            &nbsp;
            <ExternalLink href={LINKS.RESIZE_OBSERVER_CLASS}>
              {t1('knowMoreAbout')}
            </ExternalLink>
            <span>.</span>
          </>
        }
      />

      <div
        className={`h-32 w-full rounded-xl flex items-center justify-center font-bold text-xl text-white ${elementColor}`}
      >
        {t('elementText')}
      </div>
    </div>
  )
}
