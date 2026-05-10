import './About.css'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext.jsx'
import { skills } from '../../data/AboutmeSkills.js'

export default function About() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <main className={`about-page ${theme}`}>
      <section className={`about-left ${theme}`}></section>
      <section className={`about-right ${theme}`}></section>
    </main>
  )
}
