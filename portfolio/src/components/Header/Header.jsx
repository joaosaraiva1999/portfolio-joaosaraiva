import './Header.css'
import { useContext } from 'react'
import { MdDarkMode, MdLightMode, MdOutlineDownload } from 'react-icons/md'
import { ThemeContext } from '../../context/ThemeContext.jsx'

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <header>
      <div className={`header ${theme}`}>
        <div className={`logo ${theme}`}>
          <span style={{ color: '#6B9EFF' }}>{'<'}</span>Joao<span style={{ color: '#6B9EFF' }}>{'./>'}</span>
        </div>
        <div className={`links ${theme}`}>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="buttons">
          <button
            className={`theme ${theme}`}
            type='button'
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <MdLightMode className='theme-icon' size={18} /> : <MdDarkMode className='theme-icon' size={18} />}
          </button>
          <div className={`resume ${theme}`} onClick={() => window.open('/João_Saraiva_-_Junior_Web_Developer.pdf', '_blank')}>
            VIEW RESUME
            <span style={{ color: '#6B9EFF', paddingTop: '0.2rem' }}><MdOutlineDownload size={18} /></span>
          </div>
        </div>
      </div>
    </header>
  )
}
