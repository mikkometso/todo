import React, { ReactNode } from 'react'
import { StyledButton } from './Button.styles'

const Button: React.FC<{
  children: ReactNode
  className?: string
  onClick?: () => void
}> = (props) => {
  const { children, className, onClick } = props
  return (
    <StyledButton className={className} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button
