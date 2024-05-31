import React, { useEffect, useState } from 'react'
import './Createpost.css'
import { useNavigate } from 'react-router-dom'
import { useFirestore } from '../../hooks/useFirestore'

const Createpost = () => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const navigate = useNavigate();

    const { addDocument, document, error } = useFirestore("posts")

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title) {
            setValidationError("Title is Must")
            return
        }
        if (!content) {
            setValidationError("Content is Must")
            return
        }

        // console.log({ title, body: content, userId: 1 })

        addDocument({ title, body: content, userId: 1 })

    }

    useEffect(() => {
        if (document) {
            const timer = setTimeout(() => {
                setTitle("")
                setContent("")
                navigate('/')
            }, 3000);

            return () => {
                clearTimeout(timer)
            }
        }
    }, [document, navigate])




    return (
        <div className='container-createpost'>
            {
                error &&
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            }
            {
                document &&
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