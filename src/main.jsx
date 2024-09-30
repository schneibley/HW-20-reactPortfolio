import React from 'react'; 
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Portfolio from './pages/Portfolio';
import ResumePage from './pages/ResumePage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<AboutPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);