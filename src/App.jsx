import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Portfolio from './pages/Portfolio';
import ResumePage from './pages/ResumePage';
import './index.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;