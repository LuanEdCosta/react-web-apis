import { FiArrowLeft } from 'react-icons/fi'

import { Button } from 'src/components'

export interface APINotSupported {}

export const APINotSupported: React.FC = () => {
  return (
    <div className="p-4">
      <Button type="button">
        <FiArrowLeft />
      </Button>
    </div>
  )
}
