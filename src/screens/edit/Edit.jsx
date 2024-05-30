import React, { useState, useEffect } from 'react'
import './Edit.css'
import { useLocation, useNavigate } from 'react-router-dom'


const Edit = () => {

    const location = useLocation();
    const { state: post } = location;
    // console.log("edit: ", post)


    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [validationError, setValidationError] = useState("")
    const [modifiedField, setModifiedField] = useState({});
    const [data, setData] = useState("")
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

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
        // console.log(modifiedField)
        // optionsData(modifiedField)


    }

    useEffect(() => {
        setTitle(post.title);
        setContent(post.body);
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
    }, [data, navigate, post.title, post.body])


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
                data.length !== 0 &&
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