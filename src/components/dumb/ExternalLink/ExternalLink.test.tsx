import { render } from '@testing-library/react'

import { ExternalLink } from '.'

describe('ExternalLink', () => {
  it('should render', () => {
    const { container } = render(<ExternalLink href="#" />)
    expect(container).toBeInTheDocument()
  })

  it('should render with the given children and href', () => {
    const { getByText } = render(
      <ExternalLink href="/some-page">Link</ExternalLink>,
    )

    const link = getByText('Link')
    expect(link).toBeVisible()
    expect(link).toHaveAttribute('href', '/some-page')
  })

  it('should render without custom styles', () => {
    const { getByText } = render(
      <ExternalLink href="/some-page" noStyles>
        Link
      </ExternalLink>,
    )

    const link = getByText('Link')
    expect(link).toHaveAttribute('class', '')
  })

  it('should pass a custom className', () => {
    const { getByText } = render(
      <ExternalLink href="/some-page" className="custom-class">
        Link
      </ExternalLink>,
    )

    const link = getByText('Link')
    expect(link).toHaveClass('custom-class')
  })
})
