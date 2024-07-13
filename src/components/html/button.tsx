import React from 'react'

type ButtonProps = {
    variant: 'primary' | 'secondary',
    clickHandler?: any
} & React.ComponentProps<'button'>

const style = {
    primary: {
        backgroundColor: 'red',
        color: '#fff'
    },
    secondary: {
        backgroundColor: 'blue',
        color: '#fff'
    }
}

export const CustomButton = ({ variant, clickHandler, children, ...rest }: ButtonProps) => {
  return (
    <button style={variant === 'primary' ? style.primary : style.secondary}
    onClick={(e) => clickHandler(e)}
    >{children}</button>
  )
}
