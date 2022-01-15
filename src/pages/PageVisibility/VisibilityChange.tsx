import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SectionHeader, ExternalLink } from 'src/components'
import { LINKS } from './Links'

type VisibilityStateTimeline = {
  key: number
  visibilityState: VisibilityState
}

export const VisibilityChange: React.FC = () => {
  const { t } = useTranslation('PageVisibility', {
    keyPrefix: 'visibilityChange',
  })

  const { t: t1 } = useTranslation('Common')

  const [visibilities, setVisibilities] = useState<VisibilityStateTimeline[]>([
    { key: Date.now(), visibilityState: document.visibilityState },
  ])

  useEffect(() => {
    const handleVisibilityChange = () => {
      setVisibilities((currentVisibilities) => {
        return [
          ...currentVisibilities,
          { key: Date.now(), visibilityState: document.visibilityState },
        ]
      })
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return (
    <div>
      <SectionHeader
        className="mb-8"
        title={t('title')}
        anchor="visibilityChange"
        subtitle={
          <>
            <span>{t('subtitle')}</span>
            &nbsp;
            <ExternalLink href={LINKS.VISIBILITY_CHANGE}>
              {t1('knowMoreAbout')}
            </ExternalLink>
            <span>.</span>
          </>
        }
      />

      <div className="mb-4 italic">{t('explanation')}</div>

      <div className="flex items-center flex-wrap">
        {visibilities.map(({ key, visibilityState }) => {
          return (
            <div
              key={key}
              className="mr-4 mb-4 p-2 min-w-[5rem] rounded-lg bg-gray-100 dark:bg-gray-800 text-center capitalize transition-colors"
            >
              {visibilityState}
            </div>
          )
        })}
      </div>
    </div>
  )
}
