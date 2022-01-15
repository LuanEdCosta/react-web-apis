import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Button, ExternalLink, SectionHeader, TextArea } from 'src/components'

import { LINKS } from './Links'

export const RandomUUID: React.FC = () => {
  const { t } = useTranslation('WebCrypto', { keyPrefix: 'randomUUID' })
  const { t: t1 } = useTranslation('Common')

  const [generatedUUID, setGeneratedUUID] = useState('')

  const handleGenerateUUID = () => {
    setGeneratedUUID(window.crypto.randomUUID())
  }

  return (
    <div>
      <SectionHeader
        className="mb-8"
        titleClassName="break-all"
        title={t('title')}
        anchor="randomUUID"
        subtitle={
          <>
            <span>{t('subtitle')}</span>
            &nbsp;
            <ExternalLink href={LINKS.RANDOM_UUID}>
              {t1('knowMoreAbout')}
            </ExternalLink>
            <span>.</span>
          </>
        }
      />

      <div className="flex flex-wrap items-stretch flex-col md:space-x-8 md:flex-row">
        <div className="flex items-center justify-center flex-1 mb-2">
          <Button
            className="border border-purple-400 dark:border-purple-600 text-purple-600"
            onClick={handleGenerateUUID}
          >
            {t('generateButton')}
          </Button>
        </div>

        <div className="flex-1">
          <TextArea
            className="w-full resize-none"
            value={generatedUUID}
            rows={7}
            disabled
          />
        </div>
      </div>
    </div>
  )
}
