import '@testing-library/jest-dom'

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(() => ({
    t: (str: string) => str,
    i18n: {
      changeLanguage: () => {
        return new Promise((resolve) => resolve(undefined))
      },
    },
  })),
}))
