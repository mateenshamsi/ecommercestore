import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()    
    const handleLogin = async(e) => {
        e.preventDefault();
        try {
          const response = await axios.post('/api/auth/login', {
             
              email:email,
              password:password
          });

          if (response.data.success) {
              toast.success('Loggedin Successfully');
              navigate('/login') 
            } else {
              toast.error('Incorrect Credentials');
          }
      } catch (error) {
          console.error('Error registering:', error);
          toast.error('Login Failed');
      }
  };
      

    return (
        <div className='mt-32 flex flex-col justify-center items-center'>
            <h1 className="text-[30px] font-bold">Register</h1> 
            <form onSubmit={handleLogin}> 
             
                <div className='my-4 mx-4'> 
                    <label htmlFor="Email" className='mx-4'>Email</label><br />
                    <input 
                        type="email" 
                        id="Email" 
                        placeholder='email' 
                        className="rounded px-4 py-2 bg-gray-100 focus:outline-none focus:bg-white focus:ring focus:ring-blue-400" 
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className='my-4 mx-4'> 
                    <label htmlFor="Password" className='mx-4'>Password</label><br />
                    <input 
                        type="password" 
                        id="Password" 
                        placeholder='password' 
                        className="rounded px-4 py-2 bg-gray-100 focus:outline-none focus:bg-white focus:ring focus:ring-blue-400" 
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
            </form>
        </div>
    );
}

export default Login;

