import './Footer.css'
import { createElement, useContext } from 'react'
import { m } from 'motion/react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext.jsx'
import { Socials_buttons } from '../../data/SocialButtons.js'
import { buttonHover, buttonTap, itemVariants, sectionVariants, staggerContainer, viewport } from '../../utils/motion.js'

const MotionDiv = m.div
const MotionFooter = m.footer
const MotionSection = m.section
const MotionButton = m.button

export default function Footer() {
  const { theme } = useContext(ThemeContext)

  return (
    <MotionFooter className={`footer ${theme}`} variants={sectionVariants} initial="hidden" whileInView="show" viewport={viewport}>
      <MotionSection className={`Main_Footer ${theme}`} variants={staggerContainer}>
        <MotionDiv className={`First_Footer_Section ${theme}`} variants={itemVariants}>
          <div style={theme === 'light' ? { color: '#000', display: 'inline-block', transform: 'scaleX(1.18)', transformOrigin: 'left center' } : { color: 'white', display: 'inline-block', transform: 'scaleX(1.18)', transformOrigin: 'left center' }}><span style={{ color: '#6B9EFF' }}>{'<'}</span>Joao<span style={{ color: '#6B9EFF' }}>{'./>'}</span></div>
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
        </MotionDiv>
        <MotionDiv className={`Second_Footer_Section ${theme}`} variants={itemVariants}>
          <div className={`Second_Title_Footer_Section ${theme}`}>
            <span className={theme}>NAVIGATION</span>
          </div>
          <div className={`Second_Links_Footer_Section ${theme}`}>
            <Link className={theme} to="/projects">Projects</Link>
            <Link className={theme} to="/about">About</Link>
            <Link className={theme} to="/education">Education</Link>
            <Link className={theme} to="/contacts">Contact</Link>
          </div>
        </MotionDiv>
        <MotionDiv className={`Third_Footer_Section ${theme}`} variants={itemVariants}>
          <div className={`Second_Title_Footer_Section ${theme}`}>
            <span className={theme}>SOCIAL MEDIA</span>
          </div>
          <div className="social_buttons">
            {Socials_buttons.map(({ id, Icon, link }) => (
              <MotionButton key={id} whileHover={buttonHover} whileTap={buttonTap} className={`social_button ${theme}`} onClick={() => window.open(link, '_blank')}>
                {createElement(Icon, { className: `social-button-icon ${theme}` })}
              </MotionButton>
            ))}
          </div>
        </MotionDiv>
      </MotionSection>
      <section className={`Secondary_Footer ${theme}`}>
        <span className={theme}>&copy; 2026 Jo&atilde;o Saraiva. All rights reserved.</span>
        <span className={theme}>Designed & Developed by <Link to="/about" className={theme}>Jo&atilde;o Saraiva</Link></span>
      </section>
    </MotionFooter>
  )
}
