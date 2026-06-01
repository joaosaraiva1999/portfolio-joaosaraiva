import './Contacts.css'
import { useContext } from 'react'
import { m } from 'motion/react'
import { ThemeContext } from '../../context/ThemeContext.jsx'
import { itemVariants, pageVariants, staggerContainer } from '../../utils/motion.js'

const MotionDiv = m.div
const MotionH2 = m.h2
const MotionMain = m.main
const MotionP = m.p

export default function Contacts() {
  const { theme } = useContext(ThemeContext)

  return (
    <MotionMain className={`contacts-page ${theme}`} variants={pageVariants} initial="hidden" animate="show" exit="exit">
      <MotionDiv variants={staggerContainer} initial="hidden" animate="show">
        <MotionH2 variants={itemVariants}>Contacts</MotionH2>
        <MotionP variants={itemVariants}>Contact page content goes here.</MotionP>
      </MotionDiv>
    </MotionMain>
  )
}
