import React, { useEffect, useState } from 'react'
import './Home.css'
import PostCard from '../../components/postcard/PostCard';

const Home = () => {

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState();


    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();

            if (res.ok) {
                setPosts(data)
                setError("")
            }

            if (!res.ok) {
                setError(res.error)
            }
        }

        fetchPosts();
    }, []);


    return (
        <div className='container-home'>
            {
                error && <h3 style={{ color: "red" }}>{error}</h3>
            }
            {
                posts && posts.map((post) => {
                    return <PostCard post={post} key={post.id} />
                })
            }

        </div>
    )
}

export default Home