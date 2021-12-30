import { Link } from 'react-router-dom'
import { FiExternalLink } from 'react-icons/fi'

export interface NavigationLinkProps {
  className?: string
  to: string
  title: string
  subtitle: string
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  className,
  to,
  title,
  subtitle,
}) => {
  return (
    <Link
      to={to}
      className={`relative border-2 border-gray-300 hover:border-purple-600 hover:text-purple-600 transition rounded-xl ${className}`}
    >
      <FiExternalLink className="absolute top-4 right-4" />
      <div className="py-6 px-4 pr-10">
        <div className="text-xl font-bold mb-2">{title}</div>
        <div className="text-sm text-gray-500">{subtitle}</div>
      </div>
    </Link>
  )
}
