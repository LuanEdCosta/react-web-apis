export interface PageHeaderProps {
  className?: string
  childrenClassName?: string
  title: string
  subtitle: string
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  className = '',
  childrenClassName = '',
  title,
  subtitle,
  children,
}) => {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <div className="text-5xl font-black mb-4">{title}</div>

      <div className="text-gray-600 dark:text-gray-400 max-w-lg">
        {subtitle}
      </div>

      {children && (
        <div className={`mt-3 ${childrenClassName}`}>{children}</div>
      )}
    </div>
  )
}
