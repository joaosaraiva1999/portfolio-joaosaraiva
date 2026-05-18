import './Portfolio.css'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext.jsx'
import { X } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function Portfolio() {

  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <main className={`Portfolio-page ${theme}`}>
      <section className={`button-close-section`}>
        <button onClick={() => navigate(-1)} className={`close-btn ${theme}`}><X />Close</button>
      </section>
    </main>
  )
}
