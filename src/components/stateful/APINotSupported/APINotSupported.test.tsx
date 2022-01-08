import { render } from '@testing-library/react'

import { APINotSupported } from '.'

describe('APINotSupported', () => {
  const link = 'https://google.com'

  it('should render', () => {
    const { container } = render(<APINotSupported isAPISupported />)
    expect(container).toBeInTheDocument()
  })

  it('should render the children because the API is supported', () => {
    const { container, getByText, getByRole } = render(
      <APINotSupported compatibilityLink={link} isAPISupported>
        Children
      </APINotSupported>,
    )

    expect(container).toBeInTheDocument()
    expect(getByText('Children')).toBeVisible()
    expect(() => getByRole('link')).toThrow()
  })

  it('should render a message saying that the API is not supported', () => {
    const { getByText, getByRole } = render(
      <APINotSupported compatibilityLink={link} isAPISupported={false}>
        Children
      </APINotSupported>,
    )

    const linkElement = getByRole('link')
    expect(linkElement).toHaveAttribute('href', link)
    expect(linkElement).toHaveAttribute('target', '_blank')
    expect(linkElement).toHaveAttribute('referrerPolicy', 'no-referrer')

    expect(() => getByText('Children')).toThrow()
  })
})
