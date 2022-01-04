import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import { LOCAL_STORAGE_KEYS } from 'src/configs'

import * as EN from './EN'
import * as PT_BR from './PT_BR'

const language = localStorage.getItem(LOCAL_STORAGE_KEYS.LANGUAGE) || undefined

i18next.use(initReactI18next).init({
  resources: { en: EN, 'pt-BR': PT_BR },
  lng: language,
  fallbackLng: 'en',
  defaultNS: 'Glossary',
  debug: false,
})

export default i18next
