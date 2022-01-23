import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { SectionHeader } from '.'

describe('SectionHeader', () => {
  it('should render a title with anchor link', () => {
    const { container, getByText, getByRole } = render(
      <SectionHeader title="Title" anchor="anchor-link" />,
      { wrapper: MemoryRouter },
    )

    expect(container).toBeInTheDocument()
    expect(getByText('Title')).toBeVisible()
    expect(getByRole('link')).toHaveAttribute('href', '/#anchor-link')
  })

  it('should render a subtitle', () => {
    const { getByText } = render(
      <SectionHeader title="Title" subtitle="Subtitle" anchor="anchor-link" />,
      { wrapper: MemoryRouter },
    )

    expect(getByText('Subtitle')).toBeVisible()
  })

  it('should the container and title container have a custom class', () => {
    const { container, getByText } = render(
      <SectionHeader
        title="Title"
        anchor="anchor-link"
        className="container-class"
        titleClassName="title-class"
      >
        Children
      </SectionHeader>,
      { wrapper: MemoryRouter },
    )

    expect(container.firstChild).toHaveClass('container-class')
    expect(getByText('Title').parentNode).toHaveClass('title-class')
  })
})
