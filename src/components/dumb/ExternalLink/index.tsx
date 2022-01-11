export interface ExternalLinkProps {
  className?: string
  href: string
  noStyles?: boolean
}

const styles = 'text-purple-600 dark:text-purple-400 hover:underline'

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  className,
  children,
  href,
  noStyles = false,
}) => {
  return (
    <a
      className={`${noStyles ? '' : styles} ${className}`}
      href={href}
      target="_blank"
      rel="noreferrer"
      referrerPolicy="no-referrer"
    >
      {children}
    </a>
  )
}
