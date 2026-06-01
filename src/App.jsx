import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { AnimatePresence, LazyMotion, MotionConfig, domAnimation } from 'motion/react'
import Header from './components/Header/Header.jsx'
import SecondaryHeader from './components/SecondaryHeader/SecondaryHeader.jsx'
import Footer from './components/Footer/Footer.jsx'
import { ThemeProvider, useTheme } from './context/ThemeContext.jsx'
import { useLocation } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home/Home.jsx'))
const About = lazy(() => import('./pages/About/About.jsx'))
const Contacts = lazy(() => import('./pages/Contacts/Contacts.jsx'))
const Projects = lazy(() => import('./pages/Projects Page/Projects.jsx'))
const Portfolio = lazy(() => import('./pages/Projects Page/Portfolio/Portfolio.jsx'))
const LandingPage = lazy(() => import('./pages/Projects Page/Landing Page/Landingpage.jsx'))
const Education = lazy(() => import('./pages/Education/Education.jsx'))

function AppLayout() {
  const localpath = useLocation()
  const { theme } = useTheme()

  return (
    <div className={`app-wrapper ${theme === 'light' ? 'light' : ''}`}>
      {localpath.pathname !== '/' ? <SecondaryHeader /> : <Header />}
      <Suspense fallback={null}>
        <AnimatePresence mode="wait">
          <Routes location={localpath} key={localpath.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/portfolio" element={<Portfolio />} />
            <Route path="/projects/landingpage" element={<LandingPage />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      {localpath.pathname !== '/' ? '' : <Footer />}
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <LazyMotion features={domAnimation}>
          <Router>
            <AppLayout />
          </Router>
        </LazyMotion>
      </MotionConfig>
    </ThemeProvider>
  )
}

export default App
