import './Home.css'
import { createElement, useContext } from 'react'
import { m } from 'motion/react'
import { Download } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext.jsx'
import profile_pic from '../../assets/portfolio-pic-320.webp'
import { skills } from '../../data/Skills.js'
import { quicknav } from '../../data/Quicknav.js'
import { buttonHover, buttonTap, cardHover, itemVariants, pageVariants, sectionVariants, staggerContainer, viewport } from '../../utils/motion.js'

const MotionDiv = m.div
const MotionH3 = m.h3
const MotionMain = m.main
const MotionSection = m.section
const MotionSpan = m.span
const MotionButton = m.button

export default function Home() {
  const { theme } = useContext(ThemeContext)
  const navigate = useNavigate()

  return (
    <MotionMain className={`home-page ${theme}`} variants={pageVariants} initial="hidden" animate="show" exit="exit">
      <section className={`hero ${theme}`}>
        <MotionSection className={`hero_profile ${theme}`} variants={staggerContainer} initial="hidden" animate="show">
          <MotionDiv variants={itemVariants}>
            <MotionDiv
              className={`hero_img ${theme}`}
              whileHover={{ y: -2 }}
            >
              <img src={profile_pic} alt="Profile Picture" width={400} height={400} loading="eager" fetchPriority="high" decoding="async" />
            </MotionDiv>
          </MotionDiv>
          <MotionDiv className={`hero-work-status ${theme}`} variants={itemVariants}>
            <span className={`dot ${theme}`}></span>
            <span className={`work-status-text ${theme}`}>AVAILABLE FOR WORK</span>
          </MotionDiv>
          <MotionDiv className="profile-name" variants={itemVariants}>
            <h2 className={theme}>Jo&atilde;o Saraiva</h2>
          </MotionDiv>
          <MotionDiv className="profile-title" variants={itemVariants}>
            <p className={theme}>Junior Web Developer</p>
          </MotionDiv>
          <MotionDiv className="profile-intro" variants={itemVariants}>
            <p className={theme}>I'm a Junior Web Developer who enjoys building responsive, user-focused web applications. I work with JavaScript, React, HTML/CSS, ASP.NET, SQL and PHP/Laravel, and I like integrating APIs to connect systems and simplify workflows.</p>
          </MotionDiv>
          <MotionButton className={`download-resume ${theme}`} variants={itemVariants} whileHover={buttonHover} whileTap={buttonTap}>
            VIEW RESUME<span style={{ color: '#6B9EFF', paddingTop: '0.2rem' }}><Download size={18} /></span>
          </MotionButton>
        </MotionSection>

      </section>
      <MotionSection className="skills" variants={sectionVariants} initial="hidden" whileInView="show" viewport={viewport}>
        <MotionDiv className={`hero_skills ${theme}`} variants={staggerContainer}>
          {skills.map(({ id, icon: Icon, text }) => (
            <MotionSpan className={`skills-icon ${theme}`} key={id} variants={itemVariants} whileHover={{ y: -2 }}>
              {createElement(Icon)}
              {text}
            </MotionSpan>
          ))}
        </MotionDiv>
      </MotionSection>
      <MotionSection className="quicknav" variants={sectionVariants} initial="hidden" whileInView="show" viewport={viewport}>
        <MotionDiv className={`quicknav-container ${theme}`} variants={staggerContainer}>
          <MotionH3 variants={itemVariants}>QUICK NAVIGATION</MotionH3>
          <MotionDiv className={`quicknav-cards ${theme}`} variants={staggerContainer}>
            {quicknav.map(({ id, icon: Icon, title, subtitle, href }) => (
              <MotionDiv key={id} className={`card ${theme}`} variants={itemVariants} whileHover={cardHover} whileTap={buttonTap} onClick={() => navigate(href)}>
                <div className={`card-icon ${theme}`}>
                  {createElement(Icon, { className: `Icon ${theme}` })}
                </div>
                <div className={`card-content ${theme}`}>
                  <span className={`title ${theme}`}>{title}</span>
                  <span className={`subtitle ${theme}`}>{subtitle}</span>
                </div>
              </MotionDiv>
            ))}
          </MotionDiv>
        </MotionDiv>
      </MotionSection>
    </MotionMain >
  )
}
