import './Projects.css'
import { useContext } from 'react'
import { m } from 'motion/react'
import { Outlet, useNavigate } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { ThemeContext } from '../../context/ThemeContext.jsx'
import { projects } from '../../data/Projects.js'
import { buttonHover, buttonTap, cardHover, itemVariants, pageVariants, staggerContainer, viewport } from '../../utils/motion.js'

const MotionDiv = m.div
const MotionH1 = m.h1
const MotionMain = m.main
const MotionP = m.p
const MotionSection = m.section
const MotionSpan = m.span

export default function Projects() {
  const { theme } = useContext(ThemeContext)
  const navigate = useNavigate()

  return (
    <MotionMain className={`projects-page ${theme}`} variants={pageVariants} initial="hidden" animate="show" exit="exit">
      <MotionSection className={`projects-intro-section ${theme}`} variants={staggerContainer} initial="hidden" animate="show">
        <MotionH1 className={theme} variants={itemVariants}>Selected Work</MotionH1>
        <MotionP className={theme} variants={itemVariants}>A collection of projects that showcase my approach to development-clean architecture, modern stacks, and user-focused design.</MotionP>
      </MotionSection>
      <MotionSection className="projects-main-section" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewport}>
        {projects.map(({ id, speciality, Year, title, technologies, href, githref }) => (
          <MotionDiv key={id} className={`card-project ${theme}`} variants={itemVariants} whileHover={cardHover} whileTap={buttonTap} onClick={() => navigate(`/${href}`)}>
            <div className={`card-top ${theme}`}> <div className={`special ${theme}`}>{speciality}</div> <div className={`year ${theme}`}>{Year}</div></div>
            <h3 className={`card-title ${theme}`}>{title}</h3>
            <MotionDiv className={`technologies ${theme}`} variants={staggerContainer}>
              {technologies.map((tech) => (
                <MotionSpan className={theme} key={tech} variants={itemVariants}>{tech}</MotionSpan>
              ))}
            </MotionDiv>
            <div className={`card-bottom ${theme}`}>
              <span className={theme}>VIEW PROJECT</span>
              <div className="buttons-card">
                <MotionDiv className={`arrowup ${theme}`} whileHover={buttonHover}><ArrowUpRight aria-hidden="true" /></MotionDiv>
                <MotionDiv
                  className={`github ${theme}`}
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                  onClick={(event) => {
                    event.stopPropagation()
                    window.open(githref, '_blank', 'noopener,noreferrer')
                  }}
                >
                  <FaGithub aria-hidden="true" />
                </MotionDiv>
              </div>
            </div>
          </MotionDiv>
        ))}
      </MotionSection>
      <Outlet />
    </MotionMain>
  )
}
