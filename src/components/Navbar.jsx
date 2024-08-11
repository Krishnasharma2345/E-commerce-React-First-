import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-slate-400 rounded-b-2xl p-3 text-black font-bold'>
      <ul className='flex gap-3'>
        <li className='text-xl mx-4 hover:cursor-pointer'><Link to={"/"}>Home</Link></li>
        <li className='text-xl mx-4 hover:cursor-pointer'><Link to={"/about"}>About us</Link></li>
        <li className='text-xl mx-4 hover:cursor-pointer'><Link to={"/trending"}>Trending</Link></li>
      </ul>
    <div>
      <img className='w-14 h-14 object-cover rounded-md hover:cursor-pointer ' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
    </div>
  )
}

export default Navbar
