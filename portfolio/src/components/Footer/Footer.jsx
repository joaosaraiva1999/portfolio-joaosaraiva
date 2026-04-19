import './Footer.css'
import { ThemeContext } from '../../context/ThemeContext.jsx'
import { useContext } from 'react'

export default function Footer() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <footer className={`footer ${theme}`}>
      <section className={`Main_Footer ${theme}`}>
        <div className={`First_Footer_Section ${theme}`}>
          <div style={theme === 'light' ? { color: '#000', display: "inline-block", transform: "scaleX(1.18)", transformOrigin: "left center" } : { color: 'white', display: "inline-block", transform: "scaleX(1.18)", transformOrigin: "left center" }}><span style={{ color: '#6B9EFF' }}>{'<'}</span>Joao<span style={{ color: '#6B9EFF' }}>{'./>'}</span></div>
          <div className={`Footer_Roles ${theme}`}>
            <span className={theme}>
              Web Developer
            </span>
            <span className={theme}>
              Creative Developer
            </span>
          </div>
          <div className={`Footer_Quote ${theme}`}>
            <p className={theme}>Building responsive, user-focused web applications with modern technologies and clean code.</p>
          </div>
        </div>
        <div className={`Second_Footer_Section ${theme}`}>
          <div className={`Second_Title_Footer_Section ${theme}`}>
            <span className={theme}>NAVIGATION</span>
          </div>
          <div className={`Second_Links_Footer_Section ${theme}`}>
            <a className={theme} href="#projects">Projects</a>
            <a className={theme} href="#about">About</a>
            <a className={theme} href="#education">Education</a>
            <a className={theme} href="#contact">Contact</a>
          </div>
        </div>
        <div className={`Third_Footer_Section ${theme}`}></div>
      </section>
      <section className={`Secondary_Footer ${theme}`}>
        <span className={theme}>© 2026 João Saraiva. All rights reserved.</span>
        <span className={theme}>Designed & Developed by <a href="#about" className={theme}>João Saraiva</a></span>
      </section>
    </footer>
  )
}
