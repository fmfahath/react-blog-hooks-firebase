import React from 'react'
import './Navbar.css'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
    console.log("navbar...")
    return (
        <>
            <header className='container-navbar'>
                <Link to='/'><h2>Blog</h2></Link>
                <nav>
                    <Link to='/'><h5>Home</h5></Link>
                    <Link to='create'><h5>Create Post</h5></Link>
                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default Navbar