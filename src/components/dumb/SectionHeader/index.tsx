import { FiLink } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export interface SectionHeaderProps {
  className?: string
  titleClassName?: string
  anchor: string
  title: React.ReactNode
  subtitle?: React.ReactNode
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  className,
  titleClassName,
  anchor,
  title,
  subtitle,
}) => {
  return (
    <div className={className}>
      <Link
        className="inline-block group hover:underline mb-2"
        to={`#${anchor}`}
      >
        <div
          className={`flex items-center text-xl xl:text-3xl font-bold ${titleClassName}`}
        >
          <FiLink className="group-hover:rotate-45 transition-transform" />
          <span className="ml-3">{title}</span>
        </div>
      </Link>

      <div className="text-gray-600 dark:text-gray-400">{subtitle}</div>
    </div>
  )
}
