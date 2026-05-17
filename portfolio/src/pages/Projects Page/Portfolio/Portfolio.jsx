import './Portfolio.css'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext.jsx'

export default function Portfolio() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <main className={`Portfolio-page ${theme}`}>

    </main>
  )
}
