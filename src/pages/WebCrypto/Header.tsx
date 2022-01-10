import { useTranslation } from 'react-i18next'
import { FiExternalLink } from 'react-icons/fi'

import { PageHeader, Button } from 'src/components'
import { LINKS } from './Links'

export const Header: React.FC = () => {
  const { t } = useTranslation(['WebAPIs', 'Glossary'])

  return (
    <PageHeader
      className="mb-16"
      title={t('webCrypto.title')}
      subtitle={t('webCrypto.subtitle')}
    >
      <a
        href={LINKS.DOCS}
        target="_blank"
        rel="noreferrer"
        referrerPolicy="no-referrer"
      >
        <Button>
          <span className="mr-2">{t('Glossary:docs')}</span>
          <FiExternalLink />
        </Button>
      </a>
    </PageHeader>
  )
}
