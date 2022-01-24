import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { PageLayout } from '.'

describe('PageLayout', () => {
  beforeAll(() => {
    document.title = 'Document Title'
  })

  it('should render', () => {
    const { container } = render(<PageLayout />, { wrapper: MemoryRouter })
    expect(container).toBeInTheDocument()
  })

  it('should render its children', () => {
    const { getByText } = render(
      <PageLayout>
        <div>Children</div>
      </PageLayout>,
      {
        wrapper: MemoryRouter,
      },
    )

    expect(getByText('Children')).toBeVisible()
  })

  it('should render the navbar', () => {
    const { getByText } = render(<PageLayout navbar={<div>Navbar</div>} />, {
      wrapper: MemoryRouter,
    })

    expect(getByText('Navbar')).toBeVisible()
  })

  it('should change the document title when renders', () => {
    const initialTitle = document.title
    render(<PageLayout documentTitle="New Title" />, {
      wrapper: MemoryRouter,
    })

    expect(document.title).not.toBe(initialTitle)
  })

  it('should add custom classes', () => {
    const { container, getByText } = render(
      <PageLayout
        containerClassName="container-class"
        contentClassName="content-class"
      >
        Children
      </PageLayout>,
      {
        wrapper: MemoryRouter,
      },
    )

    expect(container.firstChild).toHaveClass('container-class')
    expect(getByText('Children')).toHaveClass('content-class')
  })
})
