"use Client"
import React, {useContext} from 'react'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeProvider = () => {
    const {theme} = useContext(ThemeContext);

  return (
    <div>ThemeProvider</div>
  )
}

export default ThemeProvider