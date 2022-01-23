import { render } from '@testing-library/react'

import { PageHeader } from '.'

describe('PageHeader', () => {
  it('should render a title and subtitle', () => {
    const { container, getByText } = render(
      <PageHeader title="Title" subtitle="Subtitle" />,
    )

    expect(container).toBeInTheDocument()
    expect(getByText('Title')).toBeVisible()
    expect(getByText('Subtitle')).toBeVisible()
  })

  it('should render its children', () => {
    const { getByText } = render(
      <PageHeader title="Title" subtitle="Subtitle">
        Children
      </PageHeader>,
    )

    expect(getByText('Children')).toBeVisible()
  })

  it('should the container and children container have a custom class', () => {
    const { container, getByText } = render(
      <PageHeader
        title="Title"
        subtitle="Subtitle"
        className="container-class"
        childrenClassName="children-class"
      >
        Children
      </PageHeader>,
    )

    expect(container.firstChild).toHaveClass('container-class')
    expect(getByText('Children')).toHaveClass('children-class')
  })
})
