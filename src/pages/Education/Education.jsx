import './Education.css'
import { useContext } from 'react'
import { m } from 'motion/react'
import { GraduationCap } from 'lucide-react'
import { ThemeContext } from '../../context/ThemeContext.jsx'
import { itemVariants, pageVariants, staggerContainer } from '../../utils/motion.js'

const MotionDiv = m.div
const MotionMain = m.main
const MotionSection = m.section

export default function Education() {
  const { theme } = useContext(ThemeContext)

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
    </MotionMain>
  )
}
