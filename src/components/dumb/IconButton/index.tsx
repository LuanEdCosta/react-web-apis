export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const IconButton: React.FC<IconButtonProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <button
      className={`flex items-center justify-center bg-transparent hover:bg-purple-50 hover:text-purple-600 dark:text-white dark:hover:bg-purple-600 dark:hover:text-white transition-colors rounded-full h-8 w-8 font-bold ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
