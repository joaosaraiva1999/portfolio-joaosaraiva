import './SecondaryHeader.css'
import { useContext } from 'react'
import { MdDarkMode, MdLightMode, MdOutlineDownload } from 'react-icons/md'
import { ThemeContext } from '../../context/ThemeContext.jsx'
import { useState } from 'react'
import { ArrowLeft } from 'lucide-react';

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [isOpen, setisOpen] = useState(false)

  const toggleSidebar = () => {
    setisOpen(!isOpen)
  }
  return (
    <>
      <nav className={`Secondary-Header ${theme}`}>
        <button className={`go-Back ${theme}`}>
          <div className={`span-arrow`}><ArrowLeft /></div>
          <div className="span-goBack">
            <span style={{ color: '#6B9EFF' }}>{'<'}</span>Joao<span style={{ color: '#6B9EFF' }}>{'./>'}</span>
          </div>
        </button>
        <button type='button'
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={toggleTheme} className={`toggle-theme ${theme}`}>{theme === 'dark' ? <MdLightMode className='theme-icon' size={18} /> : <MdDarkMode className='theme-icon' size={18} />}</button>
      </nav >
    </>
  )
}
