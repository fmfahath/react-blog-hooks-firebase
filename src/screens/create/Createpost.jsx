import React, { useEffect, useState } from 'react'
import './Createpost.css'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'

const Createpost = () => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [validationError, setValidationError] = useState("")

    const { data, error, isLoading, optionsData } = useFetch('https://jsonplaceholder.typicode.com/posts', "POST")


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

        setTitle("")
        setContent("")
    }




    return (
        <div className='container-createpost'>
            {
                validationError &&
                <div className="alert alert-danger" role="alert">
                    {validationError}
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