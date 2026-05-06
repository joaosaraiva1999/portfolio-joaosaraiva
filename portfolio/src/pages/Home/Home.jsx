import './Home.css'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext.jsx'
import profile_pic from '../../assets/portfolio-pic.jpg'
import { MdOutlineDownload } from 'react-icons/md'
import { skills } from '../../data/Skills.js'
import { quicknav } from '../../data/Quicknav.js'

export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <main className={`home-page ${theme}`}>
      <section className={`hero ${theme}`}>
        <section className={`hero_profile ${theme}`}>
          <div className={`hero_img ${theme}`}>
            <img src={profile_pic} alt="Profile Picture" />
          </div>
          <div className={`hero-work-status ${theme}`}>
            <span className={`dot ${theme}`}></span>
            <span className={`work-status-text ${theme}`}>AVAILABLE FOR WORK</span>
          </div>
          <div className="profile-name">
            <h2 className={theme}>João Saraiva</h2>
          </div>
          <div className="profile-title">
            <p className={theme}>Junior Web Developer</p>
          </div>
          <div className="profile-intro">
            <p className={theme}>I'm a Junior Web Developer who enjoys building responsive, user-focused web applications. I work with JavaScript, React, HTML/CSS, ASP.NET, SQL and PHP/Laravel, and I like integrating APIs to connect systems and simplify workflows.</p>
          </div>
          <button className={`download-resume ${theme}`}>VIEW RESUME<span style={{ color: '#6B9EFF', paddingTop: '0.2rem' }}><MdOutlineDownload size={18} /></span></button>
        </section>

      </section>
      <section className='skills'>
        <div className={`hero_skills ${theme}`}>
          {skills.map(({ id, icon: Icon, text }) => (
            <span className={`skills-icon ${theme}`} key={id}>
              <Icon />
              {text}
            </span>
          ))}
        </div>
      </section>
      <section className='quicknav'>
        <div className={`quicknav-container ${theme}`}>
          <h3>QUICK NAVIGATION</h3>
          <div className={`quicknav-cards ${theme}`}>
            {quicknav.map(({ id, icon: Icon, title, subtitle, href }) => (
              <div key={id} className={`card ${theme}`} onClick={() => window.location.href = href}>
                <div className={`card-icon ${theme}`}>
                  <Icon />
                </div>
                <div className={`card-content ${theme}`}>
                  <span>{title}</span>
                  <span>{subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main >
  )
}
