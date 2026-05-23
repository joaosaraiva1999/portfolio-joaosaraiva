import './Portfolio.css'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext.jsx'
import { X, ArrowUpRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { projects } from '../../../data/Projects.js';
import { FaGithub } from "react-icons/fa";
import portfolioimg from "../../../assets/photo-1759661966728-4a02e3c6ed91.jpg"

export default function Portfolio() {

  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const Project_Object = projects[0];

  return (
    <main className={`Portfolio-page ${theme}`}>
      <section className={`button-close-section`}>
        <button onClick={() => navigate(-1)} className={`close-btn ${theme}`}><X />Close</button>
      </section>
      <section className={`Speciality-year-section`}><span>{Project_Object.speciality}</span><span> — </span><span>{Project_Object.Year}</span></section>
      <section className={`portfolio-intro-section ${theme}`}>
        <h1 className={theme}>Portfolio</h1>
        <p className={theme}>Personal portfolio website with dark glassmorphism aesthetic, light/dark mode, and responsive design built with React and Tailwind.</p>
      </section>
      <section className={`Technologies-Section`}>
        {Project_Object.technologies.map((tech) => (
          <span className={theme} key={tech}>{tech}</span>
        ))}
      </section>
      <section className={`project-details-section ${theme}`}>
        <div className="detail-section">
          <p className={`detail-title ${theme}`}>TYPE</p>
          <p className={`detail-info ${theme}`}>{Project_Object.typeproj}</p>
        </div>
        <div className="detail-section">
          <p className={`detail-title ${theme}`}>STACK</p>
          <p className={`detail-info ${theme}`}>{Project_Object.technologies.join(', ')}</p>
        </div>
        <div className="detail-section">
          <p className={`detail-title ${theme}`}>SCOPE</p>
          <p className={`detail-info ${theme}`}>{Project_Object.scope}</p>
        </div>
        <div className="detail-section">
          <p className={`detail-title ${theme}`}>YEAR</p>
          <p className={`detail-info ${theme}`}>{Project_Object.Year}</p>
        </div>
      </section>
      <section className="overview-section">
        <div className={`overview ${theme}`}>
          <h4 className={`overview-title ${theme}`}>OVERVIEW</h4>
          <p className={`overview-info ${theme}`}>{Project_Object.overview}</p>
        </div>
        <div className={`highlights ${theme}`}>
          <h4 className={`highlights-title ${theme}`}>HIGHLIGHTS</h4>
          <p className={`highlights-info ${theme}`}>
            <ul>
              {Project_Object.highlights.map((high) => (
                <li key={high}>{high}</li>
              ))}
            </ul>
          </p>
        </div>
      </section>
      <section className="redirect-buttons">
        <button className={`visit-website ${theme}`}>
          <div className={`visit-div ${theme}`}>
            <p className={`visit-title ${theme}`} >LIVE PROJECT</p>
            <p className={`visit-text ${theme}`} >Visit Website</p>
          </div>
          <div className={`svg-div ${theme}`}><ArrowUpRight /></div>
        </button>
        <button className={`visit-sourcecode ${theme}`}>
          <div className={`visit-div ${theme}`}>
            <p className={`visit-title ${theme}`}>SOURCE CODE</p>
            <p className={`visit-text ${theme}`} >View on Github</p>
          </div>
          <div className={`svg-div ${theme}`}><FaGithub /></div>
        </button>
      </section>
      <section className='Image-section'>
        <img src={portfolioimg} alt="Portfolio Image" />
      </section>
    </main >
  )
}
