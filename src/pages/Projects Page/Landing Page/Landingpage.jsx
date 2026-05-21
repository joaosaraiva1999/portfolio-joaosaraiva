import './Landingpage.css'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext.jsx'

export default function LandingPage() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <main className={`Landing-page ${theme}`}>

    </main>
  )
}
