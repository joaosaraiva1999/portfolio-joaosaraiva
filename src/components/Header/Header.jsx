import './Header.css'
import { useContext, useState } from 'react'
import { AnimatePresence, m } from 'motion/react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Download, Menu, Moon, Sun, X } from 'lucide-react'
import { ThemeContext } from '../../context/ThemeContext.jsx'
import { buttonHover, buttonTap, itemVariants, staggerContainer, transitions } from '../../utils/motion.js'

const navigationLinks = [
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Education', href: '/education' },
  { label: 'Contact', href: '/contacts' },
]

const MotionDiv = m.div
const MotionHeader = m.header
const MotionNav = m.nav
const MotionButton = m.button
const MotionSpan = m.span

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [isOpen, setisOpen] = useState(false)
  const navigate = useNavigate()

  const toggleSidebar = () => {
    setisOpen(!isOpen)
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <MotionButton
              className={`sidebar-backdrop ${theme}`}
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transitions.smooth}
              onClick={() => setisOpen(false)}
            />
            <MotionNav
              className={`sidebar open ${theme}`}
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={transitions.smooth}
            >
              <div className={`sidebar-header ${theme}`}>
                <span className={theme}>MENU</span>
                <MotionButton whileHover={buttonHover} whileTap={buttonTap} className={`sidebar_close ${theme}`} onClick={toggleSidebar} type="button" aria-label="Toggle navigation menu"><X className={`sidebar_close-icon ${theme}`} /></MotionButton>
              </div>
              <MotionDiv className={`sidebar_links ${theme}`} variants={staggerContainer} initial="hidden" animate="show">
                {navigationLinks.map(({ label, href }) => (
                  <MotionDiv key={href} variants={itemVariants}>
                    <NavLink className={theme} to={href} onClick={() => setisOpen(false)}>{label}</NavLink>
                  </MotionDiv>
                ))}
              </MotionDiv>

              <MotionDiv className={`sidebar_theme ${theme}`} variants={itemVariants} initial="hidden" animate="show">
                <div className={`sidebar_line ${theme}`}></div>
                <MotionButton
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                  className={`sidebar_theme-button ${theme}`}
                  type="button"
                  aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                  onClick={toggleTheme}
                >
                  <span>{theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}</span>
                  {theme === 'dark' ? <Sun className="theme-icon" size={18} /> : <Moon className="theme-icon" size={18} />}
                </MotionButton>
              </MotionDiv>
            </MotionNav>
          </>
        )}
      </AnimatePresence>
      <MotionHeader className={theme} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={transitions.smooth}>
        <div className={`header ${theme}`}>
          <MotionDiv className={`logo ${theme}`} whileHover={{ y: -1 }} whileTap={buttonTap} onClick={() => navigate('/')}>
            <span style={{ color: '#6B9EFF' }}>{'<'}</span>Joao<span style={{ color: '#6B9EFF' }}>{'./>'}</span>
          </MotionDiv>
          <div className={`links ${theme}`}>
            {navigationLinks.map(({ label, href }) => (
              <NavLink key={href} to={href}>
                {({ isActive }) => (
                  <>
                    <MotionSpan>{label}</MotionSpan>
                    {isActive && <MotionSpan className="nav-active-indicator" layoutId="main-nav-active" />}
                  </>
                )}
              </NavLink>
            ))}
          </div>
          <div className="buttons">
            <MotionButton whileHover={buttonHover} whileTap={buttonTap} className={`sidebar-toggle ${theme}`} onClick={toggleSidebar} type="button" aria-label="Toggle navigation menu"><Menu className={`sidebar-toggle-icon ${theme}`} /></MotionButton>
            <MotionButton
              whileHover={buttonHover}
              whileTap={buttonTap}
              className={`theme ${theme}`}
              type="button"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              onClick={toggleTheme}
            >
              {theme === 'dark' ? <Sun className="theme-icon" size={18} /> : <Moon className="theme-icon" size={18} />}
            </MotionButton>
            <MotionDiv whileHover={buttonHover} whileTap={buttonTap} className={`resume ${theme}`} onClick={() => window.open('/Jo%C3%A3o_Saraiva_-_Junior_Web_Developer.pdf', '_blank')}>
              VIEW RESUME
              <span style={{ color: '#6B9EFF', paddingTop: '0.2rem' }}><Download size={18} /></span>
            </MotionDiv>
          </div>
        </div>
      </MotionHeader >
    </>
  )
}
