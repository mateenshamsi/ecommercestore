import { useState } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';
import Privacypolicy from './pages/Privacypolicy';
import RegisterPage from './pages/Auth/RegisterPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<PageNotFound/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
        
        </Routes>
        
      </div>
      <Footer />
    </Router>
  );
}

export default App;
