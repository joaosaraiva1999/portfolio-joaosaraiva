import './About.css'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext.jsx'
import { AboutSkills } from '../../data/AboutmeSkills.js'
import { Tools } from '../../data/AboutmeTools.js'
import { experience } from '../../data/AboutmeExperience.js'

export default function About() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <main className={`about-page ${theme}`}>
      <section className={`about-left ${theme}`}>
        <div className={`title ${theme}`}><h1 className={theme}>About Me</h1></div>
        <div className={`about-text ${theme}`}><p className={theme}>I'm João Saraiva, a Junior Web Developer based in Leiria, Portugal. I enjoy building responsive, user-focused web applications using JavaScript, React, HTML/CSS, ASP.NET, SQL and PHP/Laravel.</p>

          <p className={theme}>I like integrating APIs to connect systems and simplify workflows. I thrive in collaborative Agile teams, enjoy solving practical problems, and prioritize maintainable, usable solutions that help people work more efficiently.</p>

          <p className={theme}>I'm currently pursuing my degree in Web Development and Multimedia at IPL Leiria, where I've gained hands-on experience with database management, API integration, and multimedia content integration for web platforms.</p></div>
      </section>
      <section className={`about-right ${theme}`}>
        <div className={`title-skills ${theme}`}><h2 className={theme}>Skills</h2></div>
        <div className="grid-list">
          {AboutSkills.map(({ id, skill }) => (
            <div key={id} className={`card ${theme}`}>{skill}</div>
          ))}
        </div>
        <div className={`title-tools ${theme}`}><h2 className={theme}>Tools</h2></div>
        <div className="grid-list">
          {Tools.map(({ id, tool }) => (
            <div key={id} className={`card ${theme}`}>{tool}</div>
          ))}
        </div>
        <div className={`title-experience ${theme}`}><h2 className={theme}>Experience</h2></div>
        {experience.map(({ id, title, date, subtitle }) => (
          <div key={id} className={`card-experience ${theme}`}>
            <div className="experience-first-section">
              <div className={`title-experience ${theme}`}>{title}</div>
              <div className={`date-experience ${theme}`}>{date}</div>
            </div>
            <div className={`experience-details ${theme}`}>{subtitle}</div>
          </div>
        ))}
      </section>
    </main>
  )
}
