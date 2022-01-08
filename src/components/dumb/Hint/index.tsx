export type HintProps = React.BaseHTMLAttributes<HTMLDivElement>

export const Hint: React.FC<HintProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={`text-gray-500 dark:text-gray-400 ${className}`} {...props}>
      {children}
    </div>
  )
}
