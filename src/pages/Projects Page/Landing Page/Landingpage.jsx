import '../Portfolio/Portfolio.css'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext.jsx'
import { X, ArrowUpRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { projects } from '../../../data/Projects.js';
import { FaGithub } from "react-icons/fa";
import landpageimg from "../../../assets/REACTLAND.png"
import landpagelightimg from "../../../assets/REACTLANDLIGHT.png"

export default function Portfolio() {

  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const Project_Object = projects[1];

  return (
    <main className={`Portfolio-page ${theme}`}>
      <section className={`button-close-section`}>
        <button onClick={() => navigate(-1)} className={`close-btn ${theme}`}><X />Close</button>
      </section>
      <section className={`Speciality-year-section ${theme}`}><span>{Project_Object.speciality}</span><span> — </span><span>{Project_Object.Year}</span></section>
      <section className={`portfolio-intro-section ${theme}`}>
        <h1 className={theme}>REACT LANDING PAGE</h1>
        <p className={theme}>Horror-themed landing page with dark/light mode, scroll-reveal animations, and atmospheric glitch effects built with React and CSS.</p>
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
                <li className={theme} key={high}>{high}</li>
              ))}
            </ul>
          </p>
        </div>
      </section>
      <section className="redirect-buttons">
        <button className={`visit-website ${theme}`} onClick={() => window.open(Project_Object.sitehref, "_blank", "noopener,noreferrer")}>
          <div className={`visit-div ${theme}`}>
            <p className={`visit-title ${theme}`} >LIVE PROJECT</p>
            <p className={`visit-text ${theme}`} >Visit Website</p>
          </div>
          <div className={`svg-div ${theme}`}><ArrowUpRight className={theme} /></div>
        </button>
        <button className={`visit-sourcecode ${theme}`} onClick={() => window.open(Project_Object.githref, "_blank", "noopener,noreferrer")} >
          <div className={`visit-div ${theme}`}>
            <p className={`visit-title ${theme}`}>SOURCE CODE</p>
            <p className={`visit-text ${theme}`} >View on Github</p>
          </div>
          <div className={`svg-div ${theme}`}><FaGithub className={theme} /></div>
        </button>
      </section>
      <section className='Image-section'>
        <img src={theme === 'light' ? landpagelightimg : landpageimg} alt="Portfolio Image" />
      </section>
    </main >
  )
}
