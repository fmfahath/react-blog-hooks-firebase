import React from 'react'
import './Navbar.css'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <header className='container'>
                <Link to='/'><h1>Blog</h1></Link>
                <nav>
                    <Link to='/'><h4>Home</h4></Link>
                    <Link to='create'><h4>Create Post</h4></Link>
                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default Navbar