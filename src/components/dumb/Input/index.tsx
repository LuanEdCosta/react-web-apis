export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  return (
    <input
      className={`h-10 px-4 rounded-lg bg-transparent outline-none border transition-colors dark:border-gray-700 dark:hover:border-gray-600 dark:focus:border-gray-500 border-gray-300 hover:border-gray-400 focus:border-gray-500 disabled:bg-gray-100 dark:disabled:bg-gray-800 ${className}`}
      {...props}
    />
  )
}
