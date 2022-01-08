export interface FormControlProps {
  className?: string
  label?: React.ReactNode
  hint?: React.ReactNode
  error?: React.ReactNode
  showError?: boolean
}

export const FormControl: React.FC<FormControlProps> = ({
  className,
  children,
  error,
  label,
  hint,
  showError = false,
}) => {
  const topSpacing = label ? 'mt-2' : ''
  const bottomSpacing = hint || error ? 'mb-2' : ''

  return (
    <div className={className}>
      {label}
      <div className={`${topSpacing} ${bottomSpacing}`}>{children}</div>
      {showError ? error : hint}
    </div>
  )
}
