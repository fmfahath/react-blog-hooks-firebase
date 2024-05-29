import React, { useEffect, useState } from 'react'
import './Createpost.css'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'

const Createpost = () => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [validationError, setValidationError] = useState("")

    const { data, error, isLoading, optionsData } = useFetch('https://jsonplaceholder.typicode.com/posts', "POST")
    // console.log("createpost: ", { data, error, isLoading, optionsData })

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title) {
            setValidationError("Title is Must")
            return
        }
        if (!content) {
            setValidationError("Content is Must")
            return
        }

        setValidationError('');
        // console.log({ title, body: content, userId: 1 })
        optionsData({ title, body: content, userId: 1 })

    }

    useEffect(() => {
        if (data.length !== 0) {
            const timer = setTimeout(() => {
                setTitle("")
                setContent("")
                navigate('/')
            }, 3000);

            return () => {
                clearTimeout(timer)
            }
        }
    }, [data, navigate])




    return (
        <div className='container-createpost'>
            {
                validationError &&
                <div className="alert alert-danger" role="alert">
                    {validationError}
                </div>
            }
            {
                data.length !== 0 &&
                <div className="alert alert-success" role="alert">
                    Post Create Success!
                </div>
            }
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id='title' name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="content">Content</label>
                    <textarea name="content" id="content" rows='5' value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                </div>
                <input type="submit" value='Create' />
            </form>
        </div>
    )
}

export default Createpost