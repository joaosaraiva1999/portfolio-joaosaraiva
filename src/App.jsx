import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import SecondaryHeader from './components/SecondaryHeader/SecondaryHeader.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Contacts from './pages/Contacts/Contacts.jsx'
import Projects from './pages/Projects Page/Projects.jsx'
import Portfolio from './pages/Projects Page/Portfolio/Portfolio.jsx'
import LandingPage from './pages/Projects Page/Landing Page/Landingpage.jsx'
import { ThemeProvider, useTheme } from './context/ThemeContext.jsx'
import { useLocation } from 'react-router-dom';

function AppLayout() {
  const localpath = useLocation();
  const { theme } = useTheme();

  return (
    <div className={`app-wrapper ${theme === 'light' ? 'light' : ''}`}>
      {localpath.pathname !== '/' ? <SecondaryHeader /> : <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/portfolio" element={<Portfolio />} />
        <Route path="/projects/landingpage" element={<LandingPage />} />
      </Routes>
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
