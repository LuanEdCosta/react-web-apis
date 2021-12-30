import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import * as EN from './EN'
import * as PT_BR from './PT_BR'

i18next.use(initReactI18next).init({
  resources: { en: EN, 'pt-BR': PT_BR },
  lng: 'en',
  fallbackLng: 'en',
  defaultNS: 'Glossary',
  debug: false,
})

export default i18next
