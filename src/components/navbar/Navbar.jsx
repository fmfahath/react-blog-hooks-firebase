import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <header className='container'>
            <h1>Blog</h1>
            <nav>
                <a href="#"><h4>Home</h4></a>
                <a href="#"><h4>Create Post</h4></a>
            </nav>
        </header>
    )
}

export default Navbar