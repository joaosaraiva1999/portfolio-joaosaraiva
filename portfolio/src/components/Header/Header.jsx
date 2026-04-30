import './Header.css'
import { useContext } from 'react'
import { MdDarkMode, MdLightMode, MdOutlineDownload } from 'react-icons/md'
import { ThemeContext } from '../../context/ThemeContext.jsx'
import { Menu, X } from "lucide-react"
import { useState } from 'react'

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [isOpen, setisOpen] = useState(false)

  const toggleSidebar = () => {
    setisOpen(!isOpen)
  }
  return (
    <>
      <nav className={`sidebar ${isOpen ? 'open' : ''} ${theme} `}>
        <div className={`sidebar-header ${theme}`}>
          <span className={theme}>MENU</span>
          <button className={`sidebar_close ${theme}`} onClick={toggleSidebar} type="button" aria-label="Toggle navigation menu"><X className={`sidebar_close-icon ${theme}`} /></button>
        </div>
        <div className={`sidebar_links ${theme}`}>
          <a className={theme} href="#projects">Projects</a>
          <a className={theme} href="#about">About</a>
          <a className={theme} href="#education">Education</a>
          <a className={theme} href="#contact">Contact</a>
        </div>

        <div className={`sidebar_theme ${theme}`}>
          <div className={`sidebar_line ${theme}`}></div>
          <button
            className={`sidebar_theme-button ${theme}`}
            type='button'
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={toggleTheme}
          >
            <span>{theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}</span>
            {theme === 'dark' ? <MdLightMode className='theme-icon' size={18} /> : <MdDarkMode className='theme-icon' />}
          </button>
        </div>
      </nav>
      <header>
        <div className={`header ${theme}`}>
          <div className={`logo ${theme}`} onClick={() => window.location.href = '/'}>
            <span style={{ color: '#6B9EFF' }}>{'<'}</span>Joao<span style={{ color: '#6B9EFF' }}>{'./>'}</span>
          </div>
          <div className={`links ${theme}`}>
            <a onClick={() => window.location.href = 'Projects'}>Projects</a>
            <a onClick={() => window.location.href = 'About'}>About</a>
            <a onClick={() => window.location.href = 'Education'}>Education</a>
            <a onClick={() => window.location.href = 'contact'}>Contact</a>
          </div>
          <div className="buttons">
            <button className={`sidebar-toggle ${theme}`} onClick={toggleSidebar} type="button" aria-label="Toggle navigation menu"><Menu className={`sidebar-toggle-icon ${theme}`} /></button>
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
      </header >
    </>
  )
}
