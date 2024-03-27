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
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
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
        <ToastContainer/>
        </>
  );
}

export default App;
