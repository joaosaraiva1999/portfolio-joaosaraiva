import { href } from "react-router-dom";

export const projects = [
  {
    id: 1,
    speciality: 'FRONTEND',
    Year: 2026,
    title: 'React Portfolio',
    technologies: ['React', 'Javascript', 'HTML', 'CSS'],
    href: 'projects/portfolio',
    typeproj: 'Website',
    scope: 'UI DESIGN, THEMING, RESPONSIVE',
    overview: 'A minimalistic portfolio website featuring a dark glassmorphism design with frosted glass effects, backdrop blur, and an electric blue accent color. Includes light/dark mode toggle with localStorage persistence and multi-page routing.',
    highlights: ['Dark glassmorphism aesthetic with frosted glass cards', 'Light/dark mode with localStorage persistence', 'Multi-page routing with React Router', 'Fully responsive design with mobile sidebar navigation'],
    githref: 'https://github.com/joaosaraiva1999/portfolio-joaosaraiva',
  },

  {
    id: 2,
    speciality: 'FRONTEND',
    Year: 2026,
    title: 'React LandingPage',
    technologies: ['React', 'Javascript', 'HTML', 'CSS'],
    href: 'projects/landingpage',
    typeproj: 'Website',
    scope: 'UI DESIGN, THEMING, RESPONSIVE',
    overview: 'An immersive, horror-themed landing page exploring the duality of darkness and light. Built with React 18 + Vite, featuring dynamic theme switching, scroll-triggered animations, glitch text effects, and a fully responsive design.',
    highlights: ['Dark/light theme toggle with full visual transformation', 'Typewriter effect on page load', 'Scroll-reveal animations with fog and parallax atmosphere', 'Glassmorphism navbar with backdrop blur on scroll', 'Fully responsive with WCAG 2.1 accessibility support'],
    githref: 'https://github.com/joaosaraiva1999/HorrorLandingPage',
    sitehref: 'https://horror-landing-page.vercel.app/',
  },
]
