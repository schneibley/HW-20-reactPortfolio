import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <main>
        <Outlet /> {/* This renders the matched child route */}
      </main>
      <Footer />
    </div>
  );
}

export default App;