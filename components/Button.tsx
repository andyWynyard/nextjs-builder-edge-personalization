import { FC } from 'react'
import { Button as BSButton } from 'react-bootstrap'
import { Builder } from '@builder.io/react'

import styled from 'styled-components'

const handleVariant = (variant: string): string => {
  switch (variant) {
    case 'secondary':
      return '565656'
    case 'primary':
      return '565656'
    case 'success':
      return '565656'
    case 'danger':
      return '565656'
    default:
      return 'red'
  }
}

const StyledButton = styled(BSButton)`
  /* padding: 50px; */
  /* background-color: ${({ theme }) => handleVariant(theme.variant)}; */
`

type ButtonType = { variant: string; size: string }

export const Button: FC<ButtonType> = ({ children, variant, size }) => {
  return (
    <StyledButton size={size} variant={variant}>
      {children}
    </StyledButton>
  )
}

Builder.registerComponent(Button, {
  name: 'Button',
  inputs: [
    {
      name: 'children',
      type: 'text',
      defaultValue: `bro`,
    },
    {
      name: 'variant',
      type: 'string',
      defaultValue: 'primary',
      enum: [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'dark',
        'light',
        'link',
      ],
    },
    {
      name: 'size',
      type: 'string',
      defaultValue: 'sm',
      enum: ['sm', 'lg'],
    },
  ],
})
