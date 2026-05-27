import './Education.css'
import { useContext } from 'react'
import { ThemeContext, ThemeProvider } from '../../context/ThemeContext.jsx'

export default function Education() {

  const { theme, toggletheme } = useContext(ThemeContext)

  return (
    <main className={`education-page ${theme}`}>
    </main>
  )
}
