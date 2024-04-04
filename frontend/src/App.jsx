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
import Login from './pages/Auth/Login';
import { AuthProvider } from './context/auth';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './Routes/AdminRoute';
import AdminRoute from './Routes/AdminRoute';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <AuthProvider>
    <Router>

      <div>
        <Header />
        <Routes>
          
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<PageNotFound/>}/>
          
          <Route path="/dashboard" element={<PrivateRoute/>}>
              <Route path="user" element={<Dashboard/>}/>
          </Route>
          <Route path="/dashboard" element={<AdminRoute/>}>
              <Route path="admin" element={<Dashboard/>}/>
          </Route>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/login" element={<Login/>}/>
       
        </Routes>
        
      </div>
      <Footer />
    </Router>
    </AuthProvider>
        <ToastContainer/>
        </>
  );
}

export default App;
