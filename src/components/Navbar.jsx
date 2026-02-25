import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
    return (
        <div className='flex justify-center items-center gap-x-10 text-md mb-10'>
            <NavLink to="/" className={(e) => e.isActive ? "text-red-300" : ""}>Home</NavLink>
            <NavLink to="/recipes" className={(e) => e.isActive ? "text-red-300" : ""}>Recipes</NavLink>
            <NavLink to="/about" className={(e) => e.isActive ? "text-red-300" : ""}>About</NavLink>
            <NavLink to="/create" className={(e) => e.isActive ? "text-red-300" : ""}>Create Recipes</NavLink>
             <NavLink to="/fav" className={(e) => e.isActive ? "text-red-300" : ""}>Favorite</NavLink>
        </div>
    )
}

export default Navbar