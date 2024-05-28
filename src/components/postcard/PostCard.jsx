import React from 'react'
import './PostCard.css'

const PostCard = ({ post }) => {
    return (
        <div className='container-postcard'>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
        </div>
    )
}

export default PostCard