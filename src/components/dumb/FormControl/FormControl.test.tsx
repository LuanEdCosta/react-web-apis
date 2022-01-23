import { render } from '@testing-library/react'

import { FormControl } from '.'

describe('FormControl', () => {
  it('should render', () => {
    const { container } = render(<FormControl />)
    expect(container).toBeInTheDocument()
  })

  it('should render its children', () => {
    const { getByText } = render(<FormControl>Children</FormControl>)
    expect(getByText('Children')).toBeVisible()
  })

  it('should render the label component', () => {
    const { getByText } = render(<FormControl label={<div>Label</div>} />)
    expect(getByText('Label')).toBeVisible()
  })

  it('should render the hint component', () => {
    const { getByText } = render(<FormControl hint={<div>Hint</div>} />)
    expect(getByText('Hint')).toBeVisible()
  })

  it('should the error component not be visible', () => {
    const { getByText } = render(<FormControl error={<div>Error</div>} />)
    expect(() => getByText('Error')).toThrow()
  })

  it('should the error component be visible', () => {
    const { getByText } = render(
      <FormControl error={<div>Error</div>} showError />,
    )
    expect(getByText('Error')).toBeVisible()
  })

  it('should the hint component be hidden when the error component is visible', () => {
    const { getByText } = render(
      <FormControl error={<div>Error</div>} hint={<div>Hint</div>} showError />,
    )
    expect(getByText('Error')).toBeVisible()
    expect(() => getByText('Hint')).toThrow()
  })

  it('should use a custom className', () => {
    const { container } = render(<FormControl className="custom-class" />)
    expect(container.firstChild).toHaveClass('custom-class')
  })
})
