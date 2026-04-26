import './Home.css'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext.jsx'
import profile_pic from '../../assets/portfolio-pic.jpg'

export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <main className="home-page">
      <section className={`hero ${theme}`}>
        <section className={`hero_profile ${theme}`}>
          <div className={`hero_img ${theme}`}>
            <img src={profile_pic} alt="Profile Picture" />
          </div>
          <div className={`hero-work-status ${theme}`}>
            <span className='dot'></span>
            <span className={`work-status-text ${theme}`}>AVAILABLE FOR WORK</span>
          </div>
          <div className="profile-name">
            <h2 className={theme}>João Saraiva</h2>
          </div>
          <div className="profile-title">
            <p className={theme}>Junior Web Developer</p>
          </div>
        </section>
        <div className={`hero_skills ${theme}`}></div>
      </section>
    </main>
  )
}
