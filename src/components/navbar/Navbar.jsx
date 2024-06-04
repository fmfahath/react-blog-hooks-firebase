import React, { useContext } from 'react'
import './Navbar.css'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import ThemeSwitch from '../switch/ThemeSwitch'
import { ThemeContext } from '../../context/ThemeContext'
import { useAuthentication } from '../../hooks/useAuthentication'
import { useAuthContext } from '../../hooks/useAuthContext'

const Navbar = () => {

    const { user } = useAuthContext();
    const { theme } = useContext(ThemeContext);

    const { logout } = useAuthentication();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login')
    }

    return (
        <>
            <header className={`container-navbar nav-${theme} `}>
                <Link to='/'><h2>Blog</h2></Link>
                <ThemeSwitch />
                <nav>
                    {user && <Link to='/'><h5>Home</h5></Link>}
                    {user && <Link to='create'><h5>Create Post</h5></Link>}
                    {!user && <Link to='login'><h5>Login</h5></Link>}
                    {!user && <Link to='signup'><h5>Signup</h5></Link>}
                    {user && <button onClick={handleLogout}>Logout</button>}
                </nav>
            </header >
            <Outlet />
        </>
    )
}

export default Navbar