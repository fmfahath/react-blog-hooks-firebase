import React, { useContext } from 'react'
import './Navbar.css'
import { Link, Outlet } from 'react-router-dom'
import ThemeSwitch from '../switch/ThemeSwitch'
import { ThemeContext } from '../../context/ThemeContext'

const Navbar = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <>
            <header className={`container-navbar nav-${theme} `}>
                <Link to='/'><h2>Blog</h2></Link>
                <ThemeSwitch />
                <nav>
                    <Link to='/'><h5>Home</h5></Link>
                    <Link to='create'><h5>Create Post</h5></Link>
                    <Link to='login'><h5>Login</h5></Link>
                    <Link to='signup'><h5>Signup</h5></Link>
                    <button>Logout</button>
                </nav>
            </header >
            <Outlet />
        </>
    )
}

export default Navbar