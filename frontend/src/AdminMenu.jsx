import React from 'react'
import { NavLink } from 'react-router-dom'

function AdminMenu() {
  return (
    <div className='text-center'>
        <h4>Admin Panel</h4>
        <NavLink to="">Create category</NavLink>
        <NavLink to="">Create Product</NavLink>
        <NavLink to="">Users</NavLink>
    </div>
  )
}

export default AdminMenu
