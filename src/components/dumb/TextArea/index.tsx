export type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

export const TextArea: React.FC<TextAreaProps> = ({
  className = '',
  ...props
}) => {
  return (
    <textarea
      className={`p-4 rounded-lg bg-transparent outline-none border   transition-colors dark:border-gray-700 dark:hover:border-gray-600 dark:focus:border-gray-500 border-gray-300 hover:border-gray-400 focus:border-gray-500 disabled:bg-gray-100 dark:disabled:bg-gray-800 ${className}`}
      {...props}
    />
  )
}
