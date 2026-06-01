import './About.css'
import { useContext } from 'react'
import { m } from 'motion/react'
import { ThemeContext } from '../../context/ThemeContext.jsx'
import { AboutSkills } from '../../data/AboutmeSkills.js'
import { Tools } from '../../data/AboutmeTools.js'
import { experience } from '../../data/AboutmeExperience.js'
import { cardHover, itemVariants, pageVariants, sectionVariants, staggerContainer, viewport } from '../../utils/motion.js'

const MotionDiv = m.div
const MotionH1 = m.h1
const MotionH2 = m.h2
const MotionMain = m.main
const MotionP = m.p
const MotionSection = m.section

export default function About() {
  const { theme } = useContext(ThemeContext)

  return (
    <MotionMain className={`about-page ${theme}`} variants={pageVariants} initial="hidden" animate="show" exit="exit">
      <MotionSection className={`about-left ${theme}`} variants={staggerContainer} initial="hidden" animate="show">
        <MotionDiv className={`title ${theme}`} variants={itemVariants}><MotionH1 className={theme}>About Me</MotionH1></MotionDiv>
        <MotionDiv className={`about-text ${theme}`} variants={staggerContainer}>
          <MotionP className={theme} variants={itemVariants}>I'm Jo&atilde;o Saraiva, a Junior Web Developer based in Leiria, Portugal. I enjoy building responsive, user-focused web applications using JavaScript, React, HTML/CSS, ASP.NET, SQL and PHP/Laravel.</MotionP>

          <MotionP className={theme} variants={itemVariants}>I like integrating APIs to connect systems and simplify workflows. I thrive in collaborative Agile teams, enjoy solving practical problems, and prioritize maintainable, usable solutions that help people work more efficiently.</MotionP>

          <MotionP className={theme} variants={itemVariants}>I'm currently pursuing my degree in Web Development and Multimedia at IPL Leiria, where I've gained hands-on experience with database management, API integration, and multimedia content integration for web platforms.</MotionP>
        </MotionDiv>
      </MotionSection>
      <MotionSection className={`about-right ${theme}`} variants={sectionVariants} initial="hidden" whileInView="show" viewport={viewport}>
        <MotionDiv className={`title-skills ${theme}`} variants={itemVariants}><MotionH2 className={theme}>Skills</MotionH2></MotionDiv>
        <MotionDiv className="grid-list" variants={staggerContainer}>
          {AboutSkills.map(({ id, skill }) => (
            <MotionDiv key={id} className={`card ${theme}`} variants={itemVariants} whileHover={cardHover}>{skill}</MotionDiv>
          ))}
        </MotionDiv>
        <MotionDiv className={`title-tools ${theme}`} variants={itemVariants}><MotionH2 className={theme}>Tools</MotionH2></MotionDiv>
        <MotionDiv className="grid-list" variants={staggerContainer}>
          {Tools.map(({ id, tool }) => (
            <MotionDiv key={id} className={`card ${theme}`} variants={itemVariants} whileHover={cardHover}>{tool}</MotionDiv>
          ))}
        </MotionDiv>
        <MotionDiv className={`title-experience ${theme}`} variants={itemVariants}><MotionH2 className={theme}>Experience</MotionH2></MotionDiv>
        <MotionDiv variants={staggerContainer}>
          {experience.map(({ id, title, date, subtitle }) => (
            <MotionDiv key={id} className={`card-experience ${theme}`} variants={itemVariants} whileHover={cardHover}>
              <div className="experience-first-section">
                <div className={`title-experience ${theme}`}>{title}</div>
                <div className={`date-experience ${theme}`}>{date}</div>
              </div>
              <div className={`experience-details ${theme}`}>{subtitle}</div>
            </MotionDiv>
          ))}
        </MotionDiv>
      </MotionSection>
    </MotionMain>
  )
}
