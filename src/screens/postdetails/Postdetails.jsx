import React from 'react'
import './Postdetails.css'
import { useLocation, useNavigate } from 'react-router-dom'

const Postdetails = () => {

    const location = useLocation();
    const { state: post } = location;
    // console.log("post: ", location)

    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/edit/${post.id}`, { state: post });
    }
    return (
        <div className='container-postdetails'>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
            <div>
                <button id='edit' onClick={handleEdit}>Edit</button>
                <button id='delete'>Delete</button>
            </div>
        </div>
    )
}

export default Postdetails