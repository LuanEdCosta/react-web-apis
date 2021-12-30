import { useTranslation } from 'react-i18next'

export const Home: React.FC = () => {
  const { t } = useTranslation('Glossary')

  return <div>{t('Home')}</div>
}
