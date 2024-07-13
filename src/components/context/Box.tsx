import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export const Box = () => {
    const customTheme = useContext(ThemeContext)
  return (
    <div style={{ backgroundColor: customTheme.primary.main }}>
        <div style={{ color: customTheme.primary.text }}>Box theme context</div>
    </div>
  )
}
