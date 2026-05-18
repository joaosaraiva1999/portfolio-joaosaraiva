import './Portfolio.css'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext.jsx'
import { X } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { projects } from '../../../data/Projects.js';

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
        <p className={theme}>Web-based management application used internally to improve operational efficiency and reduce manual processes.</p>
      </section>
    </main>
  )
}
