import './Education.css'
import { useContext } from 'react'
import { m } from 'motion/react'
import { GraduationCap, Code2, Wrench, Target } from 'lucide-react'
import { ThemeContext } from '../../context/ThemeContext.jsx'
import { itemVariants, pageVariants, staggerContainer } from '../../utils/motion.js'
import { EducationObj } from '../../data/Educationobj.js'

const MotionDiv = m.div
const MotionMain = m.main
const MotionSection = m.section
const MotionH2 = m.h2

export default function Education() {
  const { theme } = useContext(ThemeContext)

  const EducationObject = EducationObj[0]

  return (
    <MotionMain className={`education-page ${theme}`} variants={pageVariants} initial="hidden" animate="show" exit="exit">
      <MotionSection className="education-header" variants={staggerContainer} initial="hidden" animate="show">
        <MotionDiv className={`education-icon ${theme}`} variants={itemVariants}>
          <div className={`icon-grad ${theme}`}><GraduationCap /></div>
        </MotionDiv>
        <MotionDiv className={`education-title ${theme}`} variants={itemVariants}>
          <div className={`education-title-first ${theme}`}>Education & Skills</div>
          <div className={`education-title-last ${theme}`}>My academic background and technical toolkit</div>
        </MotionDiv>
      </MotionSection>
      <MotionSection className={`education-card-section ${theme}`}>
        <MotionDiv className={`education-card-label ${theme}`}>
          <MotionH2 className={theme}>Education</MotionH2>
        </MotionDiv>
        {EducationObj.map(({ id, Title, institute, date, description }) => (
          <MotionDiv key={id} className={`education-card ${theme}`} variants={itemVariants}>
            <div className={`card-header`}>
              <div className={`header-info`}>
                <h3 className={theme}>{Title}</h3>
                <span className={theme}>{institute}</span>
              </div>
              <div className={`header-date`}>
                <span className={theme}>{date}</span>
              </div>

            </div>
            <div className={`card-desc`}>
              <span className={theme} >{description}</span>
            </div>
          </MotionDiv>
        ))}
      </MotionSection>
      <MotionDiv className={`skills-label ${theme}`}>
        <MotionH2 className={theme}>SKILLS</MotionH2>
      </MotionDiv>
      <MotionSection className={`skills-section`}>
        <MotionDiv className={`front-section ${theme}`} variants={itemVariants} >
          <div className="stack-card-header">
            <div className={`icon-grad-skills ${theme}`}><Code2 /></div>
            <span className={`title-skill ${theme}`}>Front-End</span>
          </div>
          <div className="stack-div">
            {EducationObject.frontEnd.map((frontEnd) => (
              <span className={theme} key={frontEnd}>{frontEnd}</span>
            ))}
          </div>
        </MotionDiv>
        <MotionDiv className={`back-section ${theme}`} variants={itemVariants} >
          <div className="stack-card-header">
            <div className={`icon-grad-skills ${theme}`}><Wrench /></div>
            <span className={`title-skill ${theme}`}>Back-End</span>
          </div>
          <div className="stack-div">
            {EducationObject.backEnd.map((backend) => (
              <span className={theme} key={backend}>{backend}</span>
            ))}
          </div>
        </MotionDiv>
        <MotionDiv className={`expertise-section ${theme}`} variants={itemVariants} >
          <div className="stack-card-header">
            <div className={`icon-grad-skills ${theme}`}><Target /></div>
            <span className={`title-skill ${theme}`}>Areas of Expertise</span>
          </div>
          <div className="stack-div">
            {EducationObject.areasOfExpertise.map((expertise) => (
              <span className={theme} key={expertise}>{expertise}</span>
            ))}
          </div>
        </MotionDiv>
      </MotionSection>
    </MotionMain>
  )
}
