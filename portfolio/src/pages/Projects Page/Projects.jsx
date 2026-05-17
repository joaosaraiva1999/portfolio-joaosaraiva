import './Projects.css'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext.jsx'
import { projects } from '../../data/Projects.js';
import { ArrowUpRight, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <main className={`projects-page ${theme}`}>
      <section className={`projects-intro-section ${theme}`}>
        <h1 className={theme}>Selected Work</h1>
        <p className={theme}>A collection of projects that showcase my approach to development—clean architecture, modern stacks, and user-focused design.</p>
      </section>
      <section className={`projects-main-section`}>
        {projects.map(({ id, speciality, Year, title, technologies }) => (
          <div id={id} className={`card-project ${theme}`}>
            <div className={`card-top ${theme}`}> <div className={`special ${theme}`}>{speciality}</div> <div className={`year ${theme}`}>{Year}</div></div>
            <h3 className={`card-title ${theme}`}>{title}</h3>
            <div className={`technologies ${theme}`}>
              {technologies.map((tech) => (
                <span className={theme} key={tech}>{tech}</span>
              ))}
            </div>
            <div className={`card-bottom ${theme}`}>
              <span className={theme}>VIEW PROJECT</span>
              <div className='buttons-card'>
                <div className={`arrowup ${theme}`}><ArrowUpRight /></div>
                <div className={`github ${theme}`}><FaGithub /></div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
