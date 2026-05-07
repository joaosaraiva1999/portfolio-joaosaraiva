import './SecondaryHeader.css'
import { useContext } from 'react'
import { MdDarkMode, MdLightMode, MdOutlineDownload } from 'react-icons/md'
import { ThemeContext } from '../../context/ThemeContext.jsx'
import { useState } from 'react'
import { ArrowLeft, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setisOpen] = useState(false);
  const navigate = useNavigate();

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
      <nav className={`Secondary-Header ${theme}`}>
        <button onClick={() => navigate(-1)} className={`go-Back ${theme}`}>
          <div className={`span-arrow`}><ArrowLeft /></div>
          <div className="span-goBack">
            <span style={{ color: '#6B9EFF' }}>{'<'}</span>Joao<span style={{ color: '#6B9EFF' }}>{'./>'}</span>
          </div>
        </button>
        <button className={`sidebar-toggle ${theme}`} onClick={toggleSidebar} type="button" aria-label="Toggle navigation menu"><Menu className={`sidebar-toggle-icon ${theme}`} /></button>
        <button type='button'
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={toggleTheme} className={`toggle-theme ${theme}`}>{theme === 'dark' ? <MdLightMode className='theme-icon' size={18} /> : <MdDarkMode className='theme-icon' size={18} />}</button>
      </nav >
    </>
  )
}
