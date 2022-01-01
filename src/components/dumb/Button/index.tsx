export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={`flex items-center justify-center bg-transparent hover:bg-purple-50 hover:text-purple-600 transition-colors rounded-md px-4 h-8 font-bold ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
