import { render } from '@testing-library/react'

import { Header } from '../Header'

describe('Home/Header', () => {
  it('should render', () => {
    const { container } = render(<Header />)
    expect(container).toBeInTheDocument()
  })

  it('should show the creator name', () => {
    const { getByText } = render(<Header />)
    expect(getByText('Luan Eduardo da Costa')).toBeVisible()
  })
})
