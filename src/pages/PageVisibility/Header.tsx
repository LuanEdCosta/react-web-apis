import { useTranslation } from 'react-i18next'
import { FiExternalLink } from 'react-icons/fi'

import { PageHeader, Button, ExternalLink } from 'src/components'
import { LINKS } from './Links'

export const Header: React.FC = () => {
  const { t } = useTranslation(['WebAPIs', 'Glossary'])

  return (
    <PageHeader
      className="mb-16"
      title={t('pageVisibility.title')}
      subtitle={t('pageVisibility.subtitle')}
    >
      <ExternalLink href={LINKS.DOCS} noStyles>
        <Button>
          <span className="mr-2">{t('Glossary:docs')}</span>
          <FiExternalLink />
        </Button>
      </ExternalLink>
    </PageHeader>
  )
}
