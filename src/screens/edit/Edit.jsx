import React, { useState, useEffect } from 'react'
import './Edit.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useFirestore } from '../../hooks/useFirestore';


const Edit = () => {

    const location = useLocation();
    const { state: post } = location;
    // console.log("edit: ", post)


    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [validationError, setValidationError] = useState("")
    const [modifiedField, setModifiedField] = useState({});

    const navigate = useNavigate();

    const { updateDocument, status, error } = useFirestore("posts");

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

        updateDocument(modifiedField, post.id);


    }

    useEffect(() => {

        if (status) {
            const timer = setTimeout(() => {
                setTitle("")
                setContent("")
                navigate('/')
            }, 3000);

            return () => {
                clearTimeout(timer)
            }
        }
        else {
            setTitle(post.title);
            setContent(post.body);
        }

    }, [status, navigate, post.title, post.body])


    const onTitleChange = (e) => {
        setTitle(e.target.value)
        setModifiedField({ ...modifiedField, title: e.target.value })
    }

    const onContentChange = (e) => {
        setContent(e.target.value)
        setModifiedField({ ...modifiedField, body: e.target.value })
    }

    return (
        <div className='container-editpost'>
            {
                validationError &&
                <div className="alert alert-danger" role="alert">
                    {validationError}
                </div>
            }
            {
                status &&
                <div className="alert alert-success" role="alert">
                    Post Update Success!
                </div>
            }
            {
                error &&
                <div className="alert alert-danger" role="alert">
                    Cannot Update Post!
                </div>
            }

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id='title' name='title' value={title} onChange={onTitleChange} />
                </div>
                <div>
                    <label htmlFor="content">Content</label>
                    <textarea name="content" id="content" rows='5' value={content} onChange={onContentChange}></textarea>
                </div>
                <input type="submit" value='Update' />
            </form>
        </div>
    )
}

export default Edit 