import React, { useState } from 'react'

function RegisterPage() {
    const[username,setUsername] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")


    return (
    <div className='mt-32 flex flex-col justify-center items-center'>
        <h1 className="text-[30px] font-bold ">Register</h1> 
        <div className='my-4 block mx-4 '> 
        <label htmlFor="Username" className='mx-4 '>Username</label>
        <input type="text" id="Username" placeholder='username' 
       
        className=" px-4 py-2 bg-gray-100 rounded focus:outline-none focus:bg-white focus:ring focus:ring-blue-400" onChange={e=>setUsername(e.target.value)}/>
        </div>
        <div className='my-4 mx-4'> 
        <label htmlFor="Email " className='mx-4'>Email</label>
        <input type="email" id="Email" placeholder='email' 
       
        className="rounded px-4 py-2 bg-gray-100 focus:outline-none focus:bg-white focus:ring focus:ring-blue-400" onChange={e=>setEmail(e.target.value)}/>
        </div>
        <div> 
        <label htmlFor="Password">Password</label>
        <input type="password" id="Password" placeholder='password' 
       
        className="rounded px-4 py-2 bg-gray-100  focus:outline-none focus:bg-white focus:ring focus:ring-blue-400" onChange={e=>setPassword(e.target.value)}/>
        </div>
    </div>
  )
}

export default RegisterPage
