import React, { useEffect, useState } from 'react'
import './Postdetails.css'
import { useLocation, useNavigate } from 'react-router-dom'

const Postdetails = () => {

    const [data, setData] = useState("")
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const location = useLocation();
    const { state: post } = location;
    // console.log("post: ", location)

    const navigate = useNavigate();



    const handleEdit = () => {
        navigate(`/edit/${post.id}`, { state: post });
    }

    const handleDelete = () => {
        // optionsData();
    }

    useEffect(() => {
        if (data.length !== 0) {
            const timer = setTimeout(() => {
                navigate('/')
            }, 3000);

            return () => {
                clearTimeout(timer)
            }
        }
    }, [data, navigate])

    return (
        <div className='container-postdetails'>
            {
                data.length !== 0 &&
                <div className="alert alert-success" role="alert">
                    Post Delete Success!
                </div>
            }
            {
                error &&
                <div className="alert alert-danger" role="alert">
                    Cannot Update Post!
                </div>
            }
            <h5>{post.title}</h5>
            <p>{post.body}</p>
            <div>
                <button id='edit' onClick={handleEdit}>Edit</button>
                <button id='delete' onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default Postdetails