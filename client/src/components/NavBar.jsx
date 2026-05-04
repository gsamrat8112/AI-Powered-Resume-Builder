import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {
    const user = {name:"Samrat Gupta"}
    const navigate = useNavigate()
    const logoutUser = () => {
        navigate('/login')
    }
  return (
    <div className='shadow bg-black'>
      <nav className='flex item-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800 transition-all'>
        <Link to='/' className="bg-gradient-to-r from-[#A6FF5D] to-[#A6FF5D]/90 bg-clip-text text-transparent mt-2">
            ResumeBuilder
        </Link>
        <div className='flex item-center gap-4 text-sm'>
            <p className='max-sm:hidden text-green-600 mt-2'>Welcome, {user?.name}!</p>
            <button onClick={logoutUser} className='text-green-600 bg-green-100 px-5 py-2 rounded-full text-sm font-medium hover:bg-green-200 transition'>
                Logout
            </button>
        </div>

      </nav>
    </div>
  )
}

export default NavBar
