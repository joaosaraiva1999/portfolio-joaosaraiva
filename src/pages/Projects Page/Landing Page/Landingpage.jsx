import '../Portfolio/Portfolio.css'
import { useContext } from 'react'
import { m } from 'motion/react'
import { X, ArrowUpRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { ThemeContext } from '../../../context/ThemeContext.jsx'
import { projects } from '../../../data/Projects.js'
import landpageimg from '../../../assets/REACTLAND.webp'
import landpagelightimg from '../../../assets/REACTLANDLIGHT.webp'
import { buttonHover, buttonTap, cardHover, itemVariants, pageVariants, sectionVariants, staggerContainer, viewport } from '../../../utils/motion.js'

const MotionDiv = m.div
const MotionH1 = m.h1
const MotionLi = m.li
const MotionMain = m.main
const MotionP = m.p
const MotionSection = m.section
const MotionSpan = m.span
const MotionUl = m.ul
const MotionButton = m.button

export default function Landingpage() {
  const { theme } = useContext(ThemeContext)
  const navigate = useNavigate()
  const Project_Object = projects[1]

  return (
    <MotionMain className={`Portfolio-page ${theme}`} variants={pageVariants} initial="hidden" animate="show" exit="exit">
      <MotionSection className="button-close-section" variants={itemVariants}>
        <MotionButton whileHover={buttonHover} whileTap={buttonTap} onClick={() => navigate(-1)} className={`close-btn ${theme}`}><X />Close</MotionButton>
      </MotionSection>
      <MotionSection className={`Speciality-year-section ${theme}`} variants={itemVariants}><span>{Project_Object.speciality}</span><span> - </span><span>{Project_Object.Year}</span></MotionSection>
      <MotionSection className={`portfolio-intro-section ${theme}`} variants={staggerContainer} initial="hidden" animate="show">
        <MotionH1 className={theme} variants={itemVariants}>REACT LANDING PAGE</MotionH1>
        <MotionP className={theme} variants={itemVariants}>Horror-themed landing page with dark/light mode, scroll-reveal animations, and atmospheric glitch effects built with React and CSS.</MotionP>
      </MotionSection>
      <MotionSection className="Technologies-Section" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewport}>
        {Project_Object.technologies.map((tech) => (
          <MotionSpan className={theme} key={tech} variants={itemVariants} whileHover={{ y: -2 }}>{tech}</MotionSpan>
        ))}
      </MotionSection>
      <MotionSection className={`project-details-section ${theme}`} variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewport}>
        <MotionDiv className="detail-section" variants={itemVariants}>
          <p className={`detail-title ${theme}`}>TYPE</p>
          <p className={`detail-info ${theme}`}>{Project_Object.typeproj}</p>
        </MotionDiv>
        <MotionDiv className="detail-section" variants={itemVariants}>
          <p className={`detail-title ${theme}`}>STACK</p>
          <p className={`detail-info ${theme}`}>{Project_Object.technologies.join(', ')}</p>
        </MotionDiv>
        <MotionDiv className="detail-section" variants={itemVariants}>
          <p className={`detail-title ${theme}`}>SCOPE</p>
          <p className={`detail-info ${theme}`}>{Project_Object.scope}</p>
        </MotionDiv>
        <MotionDiv className="detail-section" variants={itemVariants}>
          <p className={`detail-title ${theme}`}>YEAR</p>
          <p className={`detail-info ${theme}`}>{Project_Object.Year}</p>
        </MotionDiv>
      </MotionSection>
      <MotionSection className="overview-section" variants={sectionVariants} initial="hidden" whileInView="show" viewport={viewport}>
        <MotionDiv className={`overview ${theme}`} variants={itemVariants}>
          <h4 className={`overview-title ${theme}`}>OVERVIEW</h4>
          <p className={`overview-info ${theme}`}>{Project_Object.overview}</p>
        </MotionDiv>
        <MotionDiv className={`highlights ${theme}`} variants={itemVariants}>
          <h4 className={`highlights-title ${theme}`}>HIGHLIGHTS</h4>
          <div className={`highlights-info ${theme}`}>
            <MotionUl variants={staggerContainer}>
              {Project_Object.highlights.map((high) => (
                <MotionLi className={theme} key={high} variants={itemVariants}>{high}</MotionLi>
              ))}
            </MotionUl>
          </div>
        </MotionDiv>
      </MotionSection>
      <MotionSection className="redirect-buttons" variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewport}>
        <MotionButton className={`visit-website ${theme}`} variants={itemVariants} whileHover={cardHover} whileTap={buttonTap} onClick={() => window.open(Project_Object.sitehref, '_blank', 'noopener,noreferrer')}>
          <div className={`visit-div ${theme}`}>
            <p className={`visit-title ${theme}`} >LIVE PROJECT</p>
            <p className={`visit-text ${theme}`} >Visit Website</p>
          </div>
          <div className={`svg-div ${theme}`}><ArrowUpRight className={theme} /></div>
        </MotionButton>
        <MotionButton className={`visit-sourcecode ${theme}`} variants={itemVariants} whileHover={cardHover} whileTap={buttonTap} onClick={() => window.open(Project_Object.githref, '_blank', 'noopener,noreferrer')} >
          <div className={`visit-div ${theme}`}>
            <p className={`visit-title ${theme}`}>SOURCE CODE</p>
            <p className={`visit-text ${theme}`} >View on Github</p>
          </div>
          <div className={`svg-div ${theme}`}><FaGithub className={theme} /></div>
        </MotionButton>
      </MotionSection>
      <MotionSection className="Image-section" variants={sectionVariants} initial="hidden" whileInView="show" viewport={viewport}>
        <img src={theme === 'light' ? landpagelightimg : landpageimg} alt="React Landing Page Screenshot" width={1200} height={800} loading="lazy" decoding="async" />
      </MotionSection>
    </MotionMain >
  )
}
