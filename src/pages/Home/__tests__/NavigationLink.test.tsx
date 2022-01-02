import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { NavigationLink } from '../NavigationLink'

describe('Home/NavigationLink', () => {
  it('should render', () => {
    const { container, getByText } = render(
      <NavigationLink
        className="class-name"
        subtitle="Subtitle"
        to="/some-page"
        title="Title"
      />,
      {
        wrapper: MemoryRouter,
      },
    )

    expect(container).toBeInTheDocument()
    expect(container.firstElementChild).toHaveClass('class-name')
    expect(container.firstElementChild).toHaveAttribute('href', '/some-page')

    expect(getByText('Title')).toBeVisible()
    expect(getByText('Subtitle')).toBeVisible()
  })
})
