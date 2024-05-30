import React from 'react'
import './PostCard.css'
import { useNavigate } from 'react-router-dom'
import moment from 'moment';

const PostCard = ({ post }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`post/${post.id}`, { state: post })
    }
    return (
        <div className='container-postcard' onClick={handleClick}>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
            <small><i>{moment(post.createdAt.toDate()).calendar()}</i></small>
        </div>
    )
}

export default PostCard