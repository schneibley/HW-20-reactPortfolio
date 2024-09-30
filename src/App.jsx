import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* This renders the matched child route */}
      </main>
      <Footer />
    </div>
  );
}

export default App;