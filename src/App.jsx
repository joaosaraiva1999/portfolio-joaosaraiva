import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Header from './components/Header/Header.jsx'
import SecondaryHeader from './components/SecondaryHeader/SecondaryHeader.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import { ThemeProvider, useTheme } from './context/ThemeContext.jsx'
import { useLocation } from 'react-router-dom';

// Lazy-load non-home pages so their code + images are fetched on demand
const About = lazy(() => import('./pages/About/About.jsx'))
const Contacts = lazy(() => import('./pages/Contacts/Contacts.jsx'))
const Projects = lazy(() => import('./pages/Projects Page/Projects.jsx'))
const Portfolio = lazy(() => import('./pages/Projects Page/Portfolio/Portfolio.jsx'))
const LandingPage = lazy(() => import('./pages/Projects Page/Landing Page/Landingpage.jsx'))

function AppLayout() {
  const localpath = useLocation();
  const { theme } = useTheme();

  return (
    <div className={`app-wrapper ${theme === 'light' ? 'light' : ''}`}>
      {localpath.pathname !== '/' ? <SecondaryHeader /> : <Header />}
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/portfolio" element={<Portfolio />} />
          <Route path="/projects/landingpage" element={<LandingPage />} />
        </Routes>
      </Suspense>
      {localpath.pathname !== '/' ? '' : <Footer />}
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppLayout />
      </Router>
    </ThemeProvider>
  )
}

export default App
