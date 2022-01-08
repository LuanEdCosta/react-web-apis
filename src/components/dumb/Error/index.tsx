export type ErrorProps = React.BaseHTMLAttributes<HTMLDivElement>

export const Error: React.FC<ErrorProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={`text-red-600 dark:text-red-400 ${className}`} {...props}>
      {children}
    </div>
  )
}
