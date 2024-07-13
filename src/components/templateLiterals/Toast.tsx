import React from 'react'

type HorizontalPostion = 'left' | 'right' | 'center'
type VerticalPostion = 'top' | 'center' | 'bottom'

type ToastProps = {
    position: Exclude<`${HorizontalPostion}-${VerticalPostion}`, 'center-center'> | 'center'
}

export const Toast = ({position}: ToastProps) => {
  return (
    <div>Toast notification position - {position}</div>
  )
}
