import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

function RegisterPage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleRegister = async(e) => {
        e.preventDefault();
        try {
          const response = await axios.post('/api/v1/auth/register', {
              username,
              email,
              password
          });

          // Assuming your backend returns a success message upon successful registration
          if (response.data.success) {
              toast.success('Register Successfully');
          } else {
              toast.error('Registration Failed');
          }
      } catch (error) {
          console.error('Error registering:', error);
          toast.error('Registration Failed');
      }
  };
      

    return (
        <div className='mt-32 flex flex-col justify-center items-center'>
            <h1 className="text-[30px] font-bold">Register</h1> 
            <form onSubmit={handleRegister}> 
                <div className='my-4 block mx-4'> 
                    <label htmlFor="Username" className='mx-4'>Username</label><br />
                    <input 
                        type="text" 
                        id="Username" 
                        placeholder='username' 
                        className="px-4 py-2 bg-gray-100 rounded focus:outline-none focus:bg-white focus:ring focus:ring-blue-400" 
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
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

export default RegisterPage;
