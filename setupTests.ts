import '@testing-library/jest-dom'

// See more at: https://react.i18next.com/misc/testing
jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(() => ({
    t: (str: string) => str,
    i18n: {
      language: 'en',
      options: {
        resources: {
          en: {},
          pt: {},
        },
      },
      changeLanguage(_: string, callback?: () => void) {
        return new Promise((resolve) => {
          if (callback) callback()
          resolve((str: string) => str)
        })
      },
    },
  })),
}))
